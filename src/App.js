import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import ReadsPage from './ReadsPage'
import Searchpage from './SearchPage'

const BooksApp = () => (
  <div className="app">
    <Route exact path="/search" render={() => (
      <Searchpage />
    )}/>
    <Route exact path="/" render={() => (
      <ReadsPage />
    )}/>
  </div>
);

export default BooksApp
