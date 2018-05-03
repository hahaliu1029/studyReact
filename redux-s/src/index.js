import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import App from './app'

import reducers from './reducer'
import './config' 
import './index.css'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

/*
  react-redux:
    connect: 负责链接组件，给到redux里的数据放到组件的属性里
            1. 负责接收一个组件，把state里的一些数据放进去，返回一个组件
            2. 数据变化的时候能够通知组件
    Provider: 把store放到context里，所有的子元素可以直接渠道store
*/

ReactDom.render(
  ( <Provider store={store}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider> ),
  document.getElementById('root')
)
