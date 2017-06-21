import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

export default class Player extends React.Component {

  incrementScore() { 
    Players.update(this.props.player._id, {$inc: {score: 1}});
  }

  decrementScore() {
    Players.update(this.props.player._id, {$inc: {score: -1}});
  }

  removePlayer() { 
    Players.remove(this.props.player._id);
  }  

  render() {
    return (
      <div className='item'>
        <p key={this.key}> {this.props.player.name} has {this.props.player.score} point(s).
          <button onClick={this.incrementScore.bind(this)}>+1</button> 
          <button onClick={this.decrementScore.bind(this)}>-1</button> 
          <button onClick={this.removePlayer.bind(this)}>X</button> 
        </p>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}