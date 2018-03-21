
import React from 'react';

class BossInfo extends React.Component{
  render(){
    return (
      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
    )
  }
}

export default BossInfo;