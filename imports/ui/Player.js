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
    let itemClassName = `item item--position-${this.props.player.rank}`;
    
    return (
      <div key={this.props.player_id} className={itemClassName}>
        <div className='player'>  
          <div>      
            <h3 className='player__name'>{this.props.player.name}</h3>
            <p className='player__stats'>
              {this.props.player.rank} {this.props.player.position} {this.props.player.score} point(s).
            </p>
          </div>
          <div className='player__actions'>
            <button onClick={this.incrementScore.bind(this)} className='button button--round'>+1</button> 
            <button onClick={this.decrementScore.bind(this)} className='button button--round'>-1</button> 
            <button onClick={this.removePlayer.bind(this)} className='button button--round'>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}