import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player';

class PlayerList extends React.Component {

  renderPlayers (players) {
    if (players.length > 0) {
      return players.map((player) => {
        return (
          <Player key={player._id} player={player}/>
        )
      })
    } else {
      return (
        <div className="item">
          <p className="item__message">
            Add players to begin keeping score!
          </p>
        </div>
      )
    }
  }
  render () {
    return (
      <div>
        <FlipMove maintainContainerHeight={true} easing="ease-out"  enterAnimation="elevator" leaveAnimation="elevator">          
          {this.renderPlayers(this.props.players)}
        </FlipMove>
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}

export default PlayerList;
