import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Suspense } from 'react'


function Overlay(){
  return(

    <>

    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a id="Effect" href="/" style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        PortFolio - Pecquery Matthias
      </a>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
        <a class="a-header"> Home() </a>
        <a class="a-header"> Work() </a>
        <a class="a-header"> About() </a>
        <a class="a-header"> Contact() </a>
        </div>
    </div>

    <div class="arrow">
      <span></span>

    </div>

    </>

  )
}



ReactDOM.render(
  <>
  <Suspense fallback={null}>
  <App />
  </Suspense>
  <Overlay />

</>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
