import React from 'react';
import ReactDOM from 'react-dom'; //arvore de conteúdo
import App from './App';

//Função que retorna um html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
