import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
    <Routes/>
    <ToastContainer/>
    </BrowserRouter>
    );
}

export default App;
