import React from 'react';
import ReactDOM from 'react-dom';

/**
 * створюємо елемент і передаємо пропси
 * - пропси - це налаштування елементу ('div', { a: 5, b: 10 }, 'Hello world');
 * - children - це діти нашого елементу, те що в результаті в нього буде вкладено
 *
 *  */

const elem1 = React.createElement('span', { children: 'Hello' });
const elem2 = React.createElement('span', { children: 'world' });
const element = React.createElement('div', {
  a: 5,
  b: 10,
  children: [elem1, ' ', elem2], // children це властивість нашого елементу в якому можуть бути інші елементи
});
console.log(element);

//рендеримо елементи, за це відповідає ReactDOM -рендерить наші React елементи у справжнє DOM дерево
ReactDOM.render(element, document.querySelector('#root'));

//===================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
