import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AppPage from './Corepage/AppPage/AppPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' exact component={()=>(<h1>/</h1>)} />
        <Route path='/app/recs' component={()=><AppPage />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
