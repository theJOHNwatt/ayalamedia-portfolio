import React from 'react'
import { Route } from 'react-router-dom'
import SimpleReactLightbox from "simple-react-lightbox"
import './App.scss'

import Home from './components/home'
import About from './components/about'
import Film from './components/film'
import Portfolio from './components/portfolio'
import Motofin from './components/motofin'
import Contact from './components/contact'

import Nav from './components/nav/nav'

function App({selected}) {
  return (
    <div  className="App">
     <SimpleReactLightbox> 
       <Nav />
      <Route path='/' redirectTo='#home' render={_ => <Home selected={selected} />} />
      <Route path='/' redirectTo='#about' render={_ => <About selected={selected} />} />
      <Route path='/' redirectTo='#film' render={_ => <Film selected={selected} />} />
      <Route path='/' redirectTo='#photography' render={_ => <Portfolio selected={selected} />} />
      <Route path='/' redirectTo='#motofin' render={_ => <Motofin selected={selected} />} />
      <Route path='/' redirectTo='#contact' render={_ => <Contact selected={selected} />} />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
