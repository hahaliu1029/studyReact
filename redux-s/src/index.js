import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import DashBoard from './component/dashboard/dashboard'
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
            <Route component={DashBoard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider> ),
  document.getElementById('root')
)
