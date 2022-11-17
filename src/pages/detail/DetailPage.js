import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/button/Button'
import Loader from '../../components/loader/Loader'
import { ThemeContext } from '../../context/ThemeContext'
import { BsArrowLeft } from 'react-icons/bs'
import { useAPI } from '../../context/ApiContext'
import Message from '../../components/message/Message'

const DetailPage = () => {
  const Navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const { data, error, loading } = useAPI()

  let { name } = useParams()
  name = name.split('=')[1]

  let country = {}
  const borderCountries = []

  // look for selected country data
  if (data) {
    for (let key in data) {
      if (data[key].name.common === name) {
        country = data[key]
        break
      }
    }
    // creating array of neighbour countries full names based on country code
    if (country.borders) {
      const borders = country.borders
      for (const i in borders) {
        for (const index in data) {
          if (data[index].cca3 === borders[i]) {
            borderCountries.push(data[index].name.common)
          }
        }
      }
    }
  }

  const borderButtonHandler = (countryName) => {
    Navigate(`/name=${countryName}`)
  }

  const backButtonHandler = () => {
    Navigate('/')
  }

  return (
    <Wrapper style={{ backgroundColor: theme.background, color: theme.text }}>
      <Button clicked={backButtonHandler} size="1.5rem">
        <span>
          <BsArrowLeft style={{ verticalAlign: 'bottom', fontSize: '1em' }} />
        </span>
        <span> BACK</span>
      </Button>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="#f28e8e">
          we are sorry some problem occur try later{' '}
        </Message>
      ) : (
        <Container>
          <ImgContainer>
            <Image src={country.flags.svg}></Image>
          </ImgContainer>
          <InfoContainer>
            <Name>{country.name.common}</Name>
            <Info>
              <InfoGroup>
                <InfoItem>
                  <strong>Native Name : </strong>
                  {Object.values(country.name.nativeName)[0].official}
                </InfoItem>
                <InfoItem>
                  <strong>Population : </strong> {country.population}
                </InfoItem>
                <InfoItem>
                  <strong>Region : </strong>
                  {country.region}
                </InfoItem>
                <InfoItem>
                  <strong>Sub Region : </strong>
                  {country.subregion}
                </InfoItem>
                <InfoItem>
                  <strong>Capital : </strong>
                  {country.capital}
                </InfoItem>
              </InfoGroup>
              <InfoGroup>
                <InfoItem>
                  <strong>Top Level Domain : </strong>
                  {country.tld}
                </InfoItem>
                <InfoItem>
                  <strong>Currencies : </strong>
                  {Object.values(country.currencies)[0].name}
                </InfoItem>
                <InfoItem>
                  <strong>Languages : </strong>
                  {Object.values(country.languages).join(', ')}
                </InfoItem>
              </InfoGroup>
            </Info>
            <Border>
              <strong>Border Countries: </strong>
              {borderCountries.map((el) => (
                <Button
                  clicked={() => borderButtonHandler(el)}
                  key={el}
                  size="1rem"
                >
                  {el}
                </Button>
              ))}
            </Border>
          </InfoContainer>
        </Container>
      )}
    </Wrapper>
  )
}

// style
const Wrapper = styled.div`
  padding: 4rem 5rem;
  min-height: 100vh;
`

const Container = styled.div`
  margin: 4rem 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  flex-wrap: wrap;
`
const ImgContainer = styled.div`
  width: 100%;
  flex: 1;
`
const Image = styled.img`
  width: 100%;
`
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
`
const Name = styled.h1`
  font-size: 3rem;
`
const Info = styled.div`
  display: flex;
  gap: 5rem;
`
const InfoGroup = styled.div``
const InfoItem = styled.div`
  padding: 0.5rem;
`
const Border = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export default DetailPage
