import React from 'react'
import Card from 'material-ui/Card'

class MessageBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card className="message-box">
        <textarea />
      </Card>
    )
  }
}

export default MessageBox
