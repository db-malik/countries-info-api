import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = () => {
  return (
    <Container>
      <LoaderSpin></LoaderSpin>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const spin = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoaderSpin = styled.div`
  width: 120px;
  height: 120px;
  border-top: 4px solid rgb(237, 44, 73);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

export default Loader
