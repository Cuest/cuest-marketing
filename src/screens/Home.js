import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers, withPropsOnChange, pure } from 'recompose'

import theme from '../theme'
import { getFormData } from '../helpers'

// gql-------------------------------------

// styled----------------------------------

const _paneWidth = 400
const Pane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 3em;

  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Logo = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 4em;
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
  border-right: 0;
  width: 100%;
  max-width: 300px;
`

const _commonInputStyle = `
  color: white;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem;
  border: 0;
  line-height: 1rem;
`

const EmailInput = styled.input`
  ${_commonInputStyle}
  background-color: rgba(0,0,0,0.5);
  text-transform: uppercase;
  flex: 1;

`

const SubmitInput = styled.input`
  ${_commonInputStyle}
  background-color: ${theme.colors.primary};
  font-family: 'Material Icons';
  font-size: 1.5em;
`

// enhance---------------------------------

const enhance = compose(
  withHandlers({
    handleSubmit: () => e => {
      e.preventDefault()
      console.log(getFormData(e))
      console.log({ e })
    }
  })
)

// component-------------------------------

const Comp = props => {
  const { handleSubmit } = props
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
      />
    </Form>
  </Pane>
}

export default enhance(Comp)
