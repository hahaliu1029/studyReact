import React from 'react'
import {connect} from 'react-redux'


@connect(
  state => state
)
class Msg extends React.Component{
  render(){
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    });
    const chatList = Object.values(msgGroup)
    return(
      <div>
        
      </div>
    )
  }
}

export default Msg;