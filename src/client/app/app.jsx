import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

require('./app.scss');

class App extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppBar
          title="Title"
        />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
