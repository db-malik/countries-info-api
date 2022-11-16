import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from '../../components/loader/Loader'
import Card from '../../components/card/Card'
import axios from 'axios'

const List = ({ searchText, regionFilter }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState([])

  const URL = 'https://restcountries.com/v3.1/all'
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL)
        setData(response.data)
      } catch (error) {
        setError(error.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  const filteredData = data.filter((el) => {
    //if no searchText the return the original
    if (searchText === '') {
      return el
    }
    //return the item which contains the user searchText
    else {
      return el.name.common.toLowerCase().includes(searchText)
    }
  })

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Countries>
          {regionFilter === 'All'
            ? filteredData.map((item) => (
                <Card key={item.name.common} country={item}></Card>
              ))
            : filteredData
                .filter((item) => item.region === regionFilter)
                .map((item) => (
                  <Card key={item.name.common} country={item}></Card>
                ))}
        </Countries>
      )}
    </div>
  )
}

const Countries = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5vw;
`

export default List
