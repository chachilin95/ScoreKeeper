import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayersList extends React.Component {
  
  renderPlayers() {

    if (this.props.players.length == 0) {
      return <p>No players in the list!</p>;
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