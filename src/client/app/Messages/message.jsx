import React from 'react'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src="http://i.imgur.com/B2WIXrF.png"/>}
      >{this.props.text}</ListItem>
    )
  }
}

export default Message
