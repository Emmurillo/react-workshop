import React from 'react';
import {Card} from 'material-ui/Card';
import Channels from './Channels/Channels';

require('./Sidenav.scss');

class Sidenav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card className="side-nav">
        <Channels />
      </Card>
    );
  }
}

export default Sidenav;