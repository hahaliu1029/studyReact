import React from 'react';

class Chat extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>chat with user:{this.props.match.params.user}</div>
    )
  }
}

export default Chat