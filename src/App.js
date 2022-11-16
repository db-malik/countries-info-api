import React, { Component } from 'react'
import Header from './components/header/Header'

import './App.css'
import DetailPage from './pages/detail/DetailPage'
import HomePage from './pages/home/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/:name" element={<DetailPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
