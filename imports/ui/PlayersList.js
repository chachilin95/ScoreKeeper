import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayersList extends React.Component {
  
  renderPlayers() {

    if (this.props.players.length == 0) {
      return (
        <div className='item'>
          <p className='item__message'>No players in the list!</p>
        </div>
      );
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>; 
      });
    }

  }

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }

}

PlayersList.PropTypes = {
  players: PropTypes.array.isRequired
}