import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends React.Component {
  render () {

    return(
      <div>
        <TitleBar title="Score Keep" subtitle="Created by Talal Talhouk" />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired
}

export default App;
