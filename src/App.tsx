import React from 'react';
import './App.css';
import AppLayout from './components/router/AppLayout';
import AppRouter from './components/router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid App">

      <BrowserRouter>
        <AppLayout />
        <header className="App-header">
         
          <AppRouter></AppRouter>
        </header>
       
      </BrowserRouter>
    </div >
  );
}

export default App;
