import React from 'react';
import Logo from "../../component/logo/logo"
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.register = this
      .register
      .bind(this)
  }

  register() {
    console.log(this.props)
    this
      .props
      .history
      .push('/register')
  }

  render() {
    return (
      <div>
        <Logo></Logo>
        <h2>我是登录页面</h2>
        <WingBlank>
          <Button type='primary'>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button type='primary' onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;