import React from 'react'
import {connect} from 'react-redux'
import {List,Badge} from 'antd-mobile'

@connect(
  state => state
)
class Msg extends React.Component{
  getLast(arr){
    return arr[arr.length-1]
  }
  render(){
    const Item = List.Item;
    const Brief = Item.Brief;
    const userid = this.props.user._id
    const userinfo = this.props.chat.users
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    });
    let chatList
    if(!this.props.chat.chatmsg.length) {
      chatList = []
    } else {
      chatList = Object.values(msgGroup).sort((a,b)=>{
        const a_last = this.getLast(a).create_time
        const b_last = this.getLast(b).create_time
        return b_last - a_last
      })
    }
    return(
      <div>      
          {chatList.map(
            v=>{
              const lastItem = this.getLast(v)
              const targetId = v[0].from == userid ? v[0].to:v[0].from
              const unreadNum = v.filter(v => !v.read && v.to==userid).length
              const name = userinfo[targetId]?userinfo[targetId].name:''
              const avatar = userinfo[targetId]?userinfo[targetId].avatar:''
              return (
                <List  key={lastItem._id}>
                <Item
                  extra={<Badge text={unreadNum}></Badge>}
                  thumb = {require(`../img/${userinfo[targetId].avatar}.jpg`)}
                  arrow = "horizontal"
                  onClick={()=>{
                    this.props.history.push(`/chat/${targetId}`)
                  }}
                >
                {lastItem.content}
                <Brief>{name}</Brief>
              </Item>
              </List>
            )
            }
          )}      
      </div>
    )
  }
}

export default Msg;