import React from 'react'
import styled from 'styled-components'

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

const Alert = styled.div`
  background-color: ${(props) => props.variant};
  padding: 2rem;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
`

Message.defaultProps = {
  variant: 'green',
}

export default Message
