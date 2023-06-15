import React from 'react';
import Email from './components/Email';
import Google from './components/Google';
import Car from './components/database/Car';
import Storage from './components/storage/Storage';


import './App.css';

function App({ signin, signout, email, password }) {
  return (
    <div className="app">
      <Email signin={signin} signout={signout} email={email} password={password} />
      <Google login logout user />
      <Car getCars make model color />
      <Storage sendFile file />
    </div>
  );
}

export default App;
