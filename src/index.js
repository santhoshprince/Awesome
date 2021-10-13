import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Feature from './Feature';
import Macbook from './Macbook';
import Services from './Services';
import Action from './Action';
import Car from "./Car";
import About from "./About";
import Testi from './Testi';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Feature />
    <Macbook />
    <Services />
    <Action />
    <Car />
    <About />
    <Testi />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
