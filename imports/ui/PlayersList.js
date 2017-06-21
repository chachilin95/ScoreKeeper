import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

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
        <FlipMove maintainContainerHeight={true} easing='cubic-bezier(0, 0.7, 0.8, 0.1)'>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }

}

PlayersList.PropTypes = {
  players: PropTypes.array.isRequired
}