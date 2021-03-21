import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
// eslint-disable-next-line no-unused-vars
import styles from './styles.css';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(`root`),
);
