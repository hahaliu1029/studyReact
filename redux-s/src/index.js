import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {counter} from './App.redux.js';

import registerServiceWorker from './registerServiceWorker';

const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const store = createStore(counter, compose(applyMiddleware(thunkMiddleware), reduxDevtools));

function Erying() {
  return <h2>二营</h2>;
}

function Qibinglian() {
  return <h2>骑兵连</h2>;
}

ReactDOM.render((<Provider store={store}>
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to='/'>一营</Link>
        </li>
        <li>
          <Link to='/erying'>二营</Link>
        </li>
        <li>
          <Link to='/qibinglian'>骑兵连</Link>
        </li>
      </ul>
      <Route path='/' exact component={App}></Route>
      <Route path='/erying' component={Erying}></Route>
      <Route path='/qibinglian' component={Qibinglian}></Route>
    </div>
  </BrowserRouter>
</Provider>), document.getElementById('root'));

registerServiceWorker();
