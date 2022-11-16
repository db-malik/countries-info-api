import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContext'

const Card = ({ country }) => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const {
    name: { common },
    flags,
    population,
    region,
    capital,
  } = country

  const detailHandler = (name) => {
    navigate(`/name=${name}`)
  }

  return (
    <Container
      style={{ backgroundColor: theme.elements, color: theme.text }}
      onClick={() => detailHandler(common)}
    >
      <ImageContainer>
        <Image src={flags.png} alt={common} />
      </ImageContainer>

      <Info>
        <Title>{common}</Title>
        <InfoItems>
          <InfoItem>
            <ItemTitle> Population:</ItemTitle>
            <ItemBody>{population}</ItemBody>
          </InfoItem>
          <InfoItem>
            <ItemTitle> Region:</ItemTitle>
            <ItemBody>{region}</ItemBody>
          </InfoItem>
          <InfoItem>
            <ItemTitle> Capital: </ItemTitle>
            <ItemBody> {capital}</ItemBody>
          </InfoItem>
        </InfoItems>
      </Info>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 10px;
  width: 250px;
  cursor: pointer;
`
const ImageContainer = styled.div``
const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
`
const Info = styled.div`
  padding: 2rem 3rem;
`

const Title = styled.h1`
  padding: 0 0 20px 0;
`

const InfoItems = styled.div`
  padding: 20px 0;
`
const InfoItem = styled.div`
  padding: 2px 0;
`
const ItemTitle = styled.span`
  font-weight: 800;
`
const ItemBody = styled.span`
  margin-left: 1rem;
`

export default Card
