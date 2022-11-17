import React, { useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios'

const APIContext = createContext()

export function APIContextProvider({ children }) {
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

  return (
    <APIContext.Provider
      value={{
        data,
        loading,
        error,
      }}
    >
      {children}
    </APIContext.Provider>
  )
}

export function useAPI() {
  const context = useContext(APIContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
