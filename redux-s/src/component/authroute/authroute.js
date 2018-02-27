import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
@withRouter
class AuthRoute extends React.Component{
  componentDidMount () {
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    console.log(pathname)
    if (publicList.indexOf(pathname) > -1){
      return null;
    }
    //获取用户信息
     axios.get('/user/info').then(res => {
       console.log(res.status)
       if(res.status == 200) {
         if(res.data.code == 0){
          console.log(22222)
          // 有登录信息
         } else {
           console.log(1111111)
           this.props.history.push('/login')
         }
         console.log(res.data)
       }
     })
  }

  render(){
    return null
  }
}

export default AuthRoute;