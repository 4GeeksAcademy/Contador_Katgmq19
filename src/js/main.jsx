import React from 'react'
import ReactDOM from 'react-dom/client'

let counter= 0;
const root = ReactDOM.createRoot(document.getElementById('root')); //contenedor en index.html

setInterval(() => {
  counter++; //suma 1 a la variable
  root.render (
    <React.StrictMode>
      <SecondsCounter seconds={counter}/>  
    </React.StrictMode>
  )
}, 1000); // renderiza el resultado y se ejecuta cada mil milisegundos

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)

