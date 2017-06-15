import React, { PropTypes } from 'react';
import {Players} from '../api/players';

class AddPlayer extends React.Component {
  handleSubmit (e) {
    e.preventDefault();
    let name = e.target.playerName.value;
    if (name){
      e.target.playerName.value = '';
      Players.insert({
        name,
        score: 0
      });
    }
  }
  render () {
    return(
      <div className='item'>
        <form onSubmit={this.handleSubmit} className="form">
          <input className="form__input" type="text" name="playerName" placeholder="Players Name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;
