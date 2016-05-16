import React from 'react'
import {List} from 'material-ui/List'
import {Card} from 'material-ui/Card'

import Channel from './channel'

require('./channels.scss')

class ChannelList extends React.Component {
  constructor() {
    super()

    this.state = {
      channels: [{
        id: 1,
        name: 'General'
      },{
        id: 2,
        name: 'Random'
      }]
    }
  }

  _getChannelNodes() {
    return this.state.channels.map((channel) => {
      return (<Channel key={channel.id} name={channel.name} />)
    })
  }

  render() {
    return (
      <Card className="channel-list">
        <List>
          {this._getChannelNodes()}
        </List>
      </Card>
    )
  }
}

export default ChannelList