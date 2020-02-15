import React from 'react'
import { Route } from 'react-router-dom'
import './App.scss'

import Home from './components/home'

import Nav from './components/nav/nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/' component={Home} />
    </div>
  );
}

export default App;
