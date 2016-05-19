import React from 'react';
import {List} from 'material-ui/List';
import {Card} from 'material-ui/Card';

import Message from './Message';

require('./Messages.scss');

class Messages extends React.Component {
  constructor () {
    super();

    this.state = {
      messages: [
        {
          "id": "1",
          "text": "Hey guys, just released my new course at CodeSchool",
          "author": "Gregg Pollack",
          "photo_url": "https://pbs.twimg.com/profile_images/88469426/GreggSquare_400x400.png"
        },
        {
          "id": "2",
          "text": "Is your code there easy to read? It was not the last time",
          "author": "Uncle Bob",
          "photo_url": "https://d26o5k45lnmm4v.cloudfront.net/authors-robert-martin-v0.jpg"
        },
        {
          "id": "3",
          "text": "LOL",
          "author": "Bill Gates",
          "photo_url": "http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTMyNDczNDI1MjgwMTQ1ODg2.jpg"
        },
        {
          "id": "4",
          "text": "You should see [@emmurillo]'s code. It's a masterpiece.",
          "author": "Mark Zuckerberg",
          "photo_url": "https://lh4.googleusercontent.com/-wLDL5bCoI1U/AAAAAAAAAAI/AAAAAAAACgk/B9SpjMZ1Bf4/s0-c-k-no-ns/photo.jpg"
        }
      ]
    };
  }

  render() {
    let messages = this.state.messages.map((message) => {
      return (<Message key={message.id} text={message.text} avatar={message.photo_url}/>)
    });

    return (
      <Card className="message-list">
        <List>
          {messages}
        </List>
      </Card>
    )
  }
}

export default Messages;