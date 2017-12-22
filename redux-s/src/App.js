import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './App.redux.js';
import './App.css';

const mapStatetoProps= (state)=>{
	return {num:state}
}

const actionCreators = {addGun, removeGun, addGunAsync}

@connect(mapStatetoProps,actionCreators)

class App extends Component {
  render() {
		const num = this.props.num;
		const addGun = this.props.addGun;
		const removeGun = this.props.removeGun;
		const addGunAsync = this.props.addGunAsync;
    return (
      <div className="App">
        <h1>现在有机枪{num}把</h1>
				<button onClick={addGun}>
				加枪
				</button>
				<button onClick={removeGun}>
				缴枪
				</button>
				<button onClick={addGunAsync}>
				等两秒
				</button>
      </div>
    );
  }
}

export default App;
