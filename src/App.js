/** @jsxRuntime classic */
/** @jsx jsx */
import React, { lazy, useEffect, useState } from 'react';
import logo from './logo.png';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { jsx, ThemeProvider } from 'theme-ui';
import theme from './theme.js';
import './App.scss';

import ColorModeButton from './components/ColorMode'

import Projects from './Projects.js';
import About from './About.js';

import gradBook from './views/gradBook';
import nutshell from './views/nutshell';
import teamer from './views/teamer';
import virtualscapes from './views/virtualscapes';
import humanLight from './views/humanLight'
import apex from './views/apex'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <div className="App">
          <div className="navigation">
            <img src={logo} className="logo" alt="Logo" />
            <div className="navigation-sub">
              <Link to="/" className="nav-item" sx={{ color: 'text' }}>Projects</Link>
              <Link to="/about" className="nav-item" sx={{ color: 'text' }}>About</Link>
              <ColorModeButton/>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/about" component={About} />
            
            <Route path="/grad-book" component={gradBook} />
            <Route path="/nutshell" component={nutshell} />
            <Route path="/teamer" component={teamer} />
            <Route path="/virtualscapes" component={virtualscapes} />
            <Route path="/human-light" component={humanLight} />
            <Route path="/apex" component={apex} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;