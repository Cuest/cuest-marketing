import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers, withPropsOnChange, pure } from 'recompose'

import theme from '../theme'
import Ripple from '../components/Ripple'
import { getFormData, bp, betch, delay } from '../helpers'

// gql-------------------------------------

// styled----------------------------------

const Pane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 3em;
  ${bp.sm.min`padding-bottom: 0;`}

  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Logo = styled.div`
  width: 100%;
  ${bp.sm.min`max-width: 50vh;`}
  ${bp.xs.max`max-width: 250px;`}
  margin-bottom: 3em;
  background-image: url(/img/cuest-logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  &:after {
    content: "";
    padding-top: 120%;
    display: block;
  }
`

const SubscribeText = styled.div`
  color: white;
  margin-bottom: 0.5em;
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  border: 3px solid ${theme.colors.primary};
  width: 100%;
  max-width: 300px;
  position: relative;
`

const _commonInputStyle = `
  color: white;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem;
  border: 0;
  outline: 0;
  line-height: 1rem;
`
const submitInputWidth = `2.25rem`

const EmailInput = styled.input`
  ${_commonInputStyle}
  background-color: rgba(0,0,0,0.5);
  text-transform: uppercase;
  flex: 1;
  border-right: ${submitInputWidth} solid transparent;

`

const SubmitInput = styled.input`
  ${_commonInputStyle}
  background-color: ${theme.colors.primary};
  font-family: 'Material Icons';
  font-size: 1.5em;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${p => p['data-submitted'] ? '100%' : submitInputWidth};
  color: ${p => (p['data-submitted'] || p['data-loading']) ? 'transparent' : 'white'};
  transition: 0.3s ease-in width, 0.1s linear color;
`

const spinnerWidthPx = 36
const Spinner = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -${spinnerWidthPx * 0.5}px;
  margin-right: -1.5px;
  width: ${spinnerWidthPx}px;
  opacity: ${p => p['data-visible'] ? 1 : 0};
  transition: 0.1s linear opacity;
  pointer-events: none;
`

const SubmittedText = styled.div`
  ${_commonInputStyle}
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  color: ${p => p['data-visible'] ? 'white' : 'transparent'};
  transition: 0.1s linear color 0.2s;
`

const ErrorText = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 1em;
  font-size: 0.7em;
  text-align: center;
  pointer-events: none;
  color: ${p => p['data-visible'] ? 'palevioletred' : 'transparent'};
  transition: 0.1s linear color;
`

// enhance---------------------------------

const submitEmail = (email) => {
  return betch('https://api.graph.cool/simple/v1/cjko7xpai5x840129ew6agtcw', {
    body: `{"query":"mutation { createEmail(email: \\"${email}\\", sent: false){ email } }"}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Dnt: '1'
    },
    method: 'POST'
  })
    .then(x => x.json())
    .then(x => {
      if (x.error) throw new Error(x.error)
    })
}

const enhance = compose(
  withState('submitted', 'setSubmitted', false),
  withState('error', 'setError', false),
  withState('loading', 'setLoading', false),
  withHandlers({
    handleSubmit: ({ setError, setSubmitted, setLoading, submitted, loading }) => e => {
      e.preventDefault()
      if (!submitted && !loading) {
        setLoading(true)
        const { email } = getFormData(e)
        submitEmail(email)
          .then(() => { setSubmitted(true) })
          .catch(() => { setError(true) })
          .then(() => { setLoading(false) })
      }
    }
  })
)

// component-------------------------------

const Comp = props => {
  const { handleSubmit, submitted, error, loading } = props
  return <Pane>
    <Logo />
    <SubscribeText>Subscribe for updates</SubscribeText>
    <Form onSubmit={handleSubmit}>
      <EmailInput
        type='email'
        name='email'
        placeholder='Your email address'
        // required
      />
      <SubmitInput
        type='submit'
        value='send'
        className='material-icon'
        data-submitted={submitted}
        data-loading={loading}
      />
      <Spinner data-visible={loading}><Ripple size={36} /></Spinner>
      <SubmittedText data-visible={submitted}>Thanks!</SubmittedText>
      <ErrorText data-visible={error}>Something went wrong. Try again later.</ErrorText>
    </Form>
  </Pane>
}

export default enhance(Comp)
