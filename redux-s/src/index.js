import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom';
import {counter} from './App.redux.js';

import Auth from './Auth.js';
import Dashboard from './Dashboard.js';

import registerServiceWorker from './registerServiceWorker';

const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const store = createStore(counter, compose(applyMiddleware(thunkMiddleware), reduxDevtools));


class Test extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		console.log(this.props);
	  this.props.history.push('/')
		return <h2>测试组件{this.props.match.params.location}</h2>
	}
}

ReactDOM.render((<Provider store={store}>
  <BrowserRouter>
		<Switch>
			{/*只渲染命中的第一个Route*/}
			<Route path='/login' component={Auth}></Route>
			<Route path='/dashboard' component={Dashboard}></Route>
			<Redirect to='/dashboard'></Redirect>
		</Switch>
  </BrowserRouter>
</Provider>), document.getElementById('root'));
registerServiceWorker();
