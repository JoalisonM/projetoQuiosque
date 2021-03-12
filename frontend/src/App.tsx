import React, { useEffect } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { ToastContainer } from 'react-toastify';
function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <BrowserRouter>
    <Routes/>
    <ToastContainer/>
    <ToastContainer/>
    <ToastContainer/>
    </BrowserRouter>
    );
}

export default App;
