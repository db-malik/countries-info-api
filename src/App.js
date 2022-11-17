import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { APIContextProvider } from './context/ApiContext'

import Header from './components/header/Header'
import HomePage from './pages/home/HomePage'
import DetailPage from './pages/detail/DetailPage'

class App extends Component {
  render() {
    return (
      <APIContextProvider>
        <div className="app">
          <Header></Header>
          <BrowserRouter>
            <Routes>
              <Route path="/:name" element={<DetailPage />}></Route>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </APIContextProvider>
    )
  }
}

export default App
