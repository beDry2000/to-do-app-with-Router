import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './store/state/todo';
import Provider from './store/TaskProvider';
import Detail from './store/state/detail';
import Doing from './store/state/doing';
import Done from './store/state/done';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider>
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='todo' element={<Todo />}>
            <Route path=':todoId' element={<Detail />}/>
          </Route>
          <Route path='doing' element={<Doing />}>
          <Route path=':todoId' element={<Detail />}/>
          </Route>
          <Route path='done' element={<Done />}>
          <Route path=':todoId' element={<Detail />}/>
          </Route>
          <Route path='*' element={
            <h1>Sai địa chỉ - Vui lòng quay xe</h1>
          } />
          <Route index element={<h1>Home page</h1>}/>
        </Route>
      </Routes>
    </Router>
  </Provider>


  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
