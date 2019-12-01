import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AppPage from './Corepage/AppPage/AppPage';
import Header from './CommonComponent/Header/Header';
import ProfilePage from './Corepage/ProfilePage/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Header />
        <Route path='/' exact component={()=>(<h1>/</h1>)} />
        <Route path='/app/recs' component={()=><AppPage />} />
        <Route path='/app/profile' component={()=><ProfilePage />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
