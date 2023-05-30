import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Task2 from './task1';
import Task3 from './task3';
import Task4 from './task4';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Task3  hieu={1} />
    <Routes>
        <Route path="/demo" element={ <Task3 />}  />
        {/* <Route path="/" element={ <Task3 />}  /> */}
        {/* <Route path="/index.html" element={ <Task3 />}  /> */}
       
       
        <Route path="/demo/broken-links" element={<Task2 />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
           <Route path="/demo/meta-tags" element={<Task4 />} />
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
