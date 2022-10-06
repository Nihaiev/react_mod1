// import React from 'react'; якщо ми використовуємо JSX то імпортувати js не портібно
import ReactDOM from 'react-dom';
import App from './App';

/**
 * створюємо елемент і передаємо пропси
 * - пропси - це налаштування елементу ('div', { a: 5, b: 10 }, 'Hello world');
 * - children - це діти нашого елементу, те що в результаті в нього буде вкладено
 *
 *  */

//React.createElement('span', { children: 'Hello' });
// const elem1 = <span>Hello</span>;
//React.createElement('span', { children: 'world' });
// const elem2 = <span>world</span>;
// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, ' ', elem2], // children це властивість нашого елементу в якому можуть бути інші елементи
// });
// console.log(element);

/**Писати React.createElement руками спер не зручно (представили 50 елементів) тому придумали JSX - це xml подібний синтаксис
 * ми його пишемо прямо в js файлі
 *
 *
 */
// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );
// console.log(jsxElement);

//рендеримо елементи, за це відповідає ReactDOM -рендерить наші React елементи у справжнє DOM дерево
// ReactDOM.render(element, document.querySelector('#root'));

ReactDOM.render(<App />, document.querySelector('#root'));

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
