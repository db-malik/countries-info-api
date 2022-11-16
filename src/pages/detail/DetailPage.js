import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../../components/loader/Loader'
import { ThemeContext } from '../../context/ThemeContext'

const DetailPage = () => {
  const { theme } = useContext(ThemeContext)

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  let { name } = useParams()
  name = name.split('=')[1]
  const URL = `https://restcountries.com/v3.1/name/${name}`
  useEffect(() => {
    const getDetail = async () => {
      try {
        setLoading(true)
        const response = await axios.get(URL)
        setData(response.data[0])
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getDetail()
  }, [URL])

  return (
    <Container style={{ backgroundColor: theme.background, color: theme.text }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ImgContainer>
            <Image src={data.flags.svg}></Image>
          </ImgContainer>
          <InfoContainer>
            <Name>{data.name.common}</Name>
            <Info>
              <InfoGroup>
                <InfoItem>
                  <strong>Native Name:</strong>
                  {Object.values(data.name.nativeName)[0].official}
                </InfoItem>
                <InfoItem>
                  <strong>Population:</strong> {data.population}
                </InfoItem>
                <InfoItem>
                  <strong>Region:</strong>
                  {data.region}
                </InfoItem>
                <InfoItem>
                  <strong>Sub Region:</strong>
                  {data.subregion}
                </InfoItem>
                <InfoItem>
                  <strong>Capital</strong>
                  {data.capital}
                </InfoItem>
              </InfoGroup>
              <InfoGroup>
                <InfoItem>
                  <strong>Top Level Domain</strong>
                  {data.tld}
                </InfoItem>
                <InfoItem>
                  <strong>Currencies</strong>
                  {Object.values(data.currencies)[0].name}
                </InfoItem>
                <InfoItem>
                  <strong>Languages:</strong>
                  {Object.values(data.languages).join(', ')}
                </InfoItem>
              </InfoGroup>
            </Info>
            <Border>
              <strong>Border Countries</strong>
            </Border>
          </InfoContainer>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 40px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`
const ImgContainer = styled.div`
  padding: 20px 0;
  flex: 1;
`
const Image = styled.img`
  width: 100%;
`
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Name = styled.h1``
const Info = styled.div``
const InfoGroup = styled.div``
const InfoItem = styled.div``
const Border = styled.div``

export default DetailPage
