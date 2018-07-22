import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers, withPropsOnChange, pure } from 'recompose'

// gql-------------------------------------

// styled----------------------------------

const _paneWidth = 400
const Pane = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
`

const Logo = styled.div`
  flex-shrink: 1;
  flex: 1;
  width: 100%;
  max-height: 100%;
  background-image: url(/img/cuest-logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

const Form = styled.form`

`

const EmailInput = styled.input`

`

const SubmitInput = styled.input`

`

// enhance---------------------------------

const enhance = compose(
  withHandlers({
    onSubmit: () => e => {
      e.preventDefault()
      console.log({ e })
    }
  })
)

// component-------------------------------

const Comp = props => {
  const { handleSubmit } = props
  return <Pane>
    <Logo />
    <Form onSubmit={handleSubmit}>
      <EmailInput type='email' />
      <SubmitInput type='submit' />
    </Form>
  </Pane>
}

export default enhance(Comp)
