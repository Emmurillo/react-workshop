import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card} from 'material-ui/Card';

import Channel from './Channel'

class Channels extends React.Component {
  constructor() {
    super();

    this.state = {
      channels: [
        {
          "id": "1",
          "name": "general"
        },
        {
          "id": "2",
          "name": "random"
        },
        {
          "id": "3",
          "name": "open-sourcers"
        },
        {
          "id": "4",
          "name": "angular"
        }
      ]
    };
  }

  render() {

    let channels = this.state.channels.map((channel) => {
      return (<Channel key={channel.id} name={channel.name}/>);
    });

    return (
      <List>
        <Subheader>Channels</Subheader>
        {channels}
      </List>
    );

  }
}

export default Channels;