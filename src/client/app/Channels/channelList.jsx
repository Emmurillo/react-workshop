import React from 'react'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader';
import {Card} from 'material-ui/Card'

import Channel from './channel'

require('./channels.scss')

class ChannelList extends React.Component {
  constructor() {
    super()

    this.state = {
      channels: []
    }

    this.firebaseRef = new Firebase('https://react-messenger.firebaseio.com/channels')
    this.firebaseRef.on('child_added', (channel) => {
      if (this.state.channels[channel.key()]) return

      let channelVal = channel.val()
      channelVal.key = channel.key()
      this.state.channels[channelVal.key] = channelVal
      this.setState({ channels: this.state.channels })
    })
  }

  render() {
    let channelNodes = _.values(this.state.channels).map((channel) => {
      return (<Channel key={channel.key} name={channel.name} />)
    })
    return (
      <Card className="channel-list">
        <List>
          <Subheader>Channels</Subheader>
          {channelNodes}
        </List>
      </Card>
    )
  }
}

export default ChannelList
