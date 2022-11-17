import React from 'react'
import styled from 'styled-components'

import { useAPI } from '../../context/ApiContext'

import Loader from '../../components/loader/Loader'
import Card from '../../components/card/Card'
import Message from '../message/Message'

const List = ({ searchText, regionFilter }) => {
  const { data, error, loading } = useAPI()

  const filteredData = data.filter((el) => {
    //if no searchText : return the original
    if (searchText === '') {
      return el
    }
    //return  item which contains  user searchText
    else {
      return el.name.common.toLowerCase().includes(searchText)
    }
  })

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="#f28e8e">
          we are sorry some problem occur try later
        </Message>
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
    </Container>
  )
}

//  Style
const Container = styled.div`
  min-height: 100vh;
`
const Countries = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5vw;
`

export default List
