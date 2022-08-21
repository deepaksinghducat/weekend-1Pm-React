import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './components/Parent';
import Props from './components/Props';
import States from './components/States';
import Class from './components/Class';
import Counter from './components/Counter';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import GlobalStore, { GlobalStoreProvider } from './store/ContextApi';
import Context from './components/Context';
import UseEffect from './components/UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <GlobalStore.Provider value={
//     { name: "fasfdsafasfsafasfadfadfdafs" }
//   }>
//     <Context />
//   </GlobalStore.Provider>
// );

// root.render(
//   <GlobalStoreProvider>
//     <Context />
//   </GlobalStoreProvider>
// )

root.render(
  <UseEffect/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
