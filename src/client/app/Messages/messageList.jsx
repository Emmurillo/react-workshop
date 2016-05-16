import React from 'react'
import {List} from 'material-ui/List'
import {Card} from 'material-ui/Card'
import Firebase from 'firebase'
import _ from 'lodash'

import Message from './Message'

require('./messages.scss')

class MessageList extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }

    this.firebaseRef = new Firebase('https://react-messenger.firebaseio.com/messages/firebase')
    this.firebaseRef.on('child_added', (message) => {
      if (this.state.messages[message.key()]) return

      let messageVal = message.val()
      messageVal.key = message.key()
      this.state.messages[messageVal.key] = messageVal
      this.setState({ messages: this.state.messages })
    })
  }

  render() {
    let messageNodes = _.values(this.state.messages).map((message) => {
      return (<Message key={message.key} text={message.message} />)
    })
    return (
      <Card className="message-list">
        <List>
          {messageNodes}
        </List>
      </Card>
    )
  }
}

export default MessageList
