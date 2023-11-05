import logo from './logo.svg';
import './App.css';
import LoginSinup from './Components/LoginSingup/LoginSingup';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <LoginSinup/>
      <ToastContainer/>
    </div>
  );
}

export default App;
