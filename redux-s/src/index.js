import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import DashBoard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Login from './container/login/login'
import Register from './container/register/register'
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
        <div>
          <AuthRoute></AuthRoute>
          <Switch>
            <Route path='/bossinfo' component={BossInfo}></Route>
            <Route path='/geniusinfo' component={GeniusInfo}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/chat/:user' component={Chat}></Route>
            <Route component={DashBoard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider> ),
  document.getElementById('root')
)
