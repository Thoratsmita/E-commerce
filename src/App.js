import './App.css';
import React from 'react';
import {Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Router />
          <Sidebar />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
