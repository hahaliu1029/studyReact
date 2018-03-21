import React from 'react'
import {connect} from 'react-redux'

function Boss() {
  return <h2>Boss</h2>
}

function Genius() {
  return <h2>Genius</h2>
}

function Msg() {
  return <h2>消息列表页面</h2>
}

@connect(
  state=>state
)

class Dashboard extends React.Component{

  render(){
    const user = this.props.user

    const navList = [
      {
        path:'/boss',
        text:'牛人',
        icon:'boss',
        title:'牛人列表',
        component:Boss,
        hide:user.type=='genius'
      },
      {
        path:'/genius',
        text:'boss',
        icon:'job',
        title:'Boss列表',
        component:Genius,
        hide:user.type=='boss'
      },
      {
        path:'/msg',
        text:'消息',
        icon:'msg',
        title:'消息列表',
        component:Msg
      },
      {
        path:'/genius',
        text:'boss',
        icon:'job',
        title:'Boss列表',
        component:Genius,
        hide:user.type=='genius'
      }
    ]
    return(
      <div>
        <header>111
        </header>
        <footer>111</footer>
      </div>
    )
  }
}

export default Dashboard