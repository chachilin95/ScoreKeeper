import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {

  addPlayer(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = '';

      Players.insert({
        name: playerName,
        score: 0
      });
    };
  }

  render() {
    return (
        <div>
          <form onSubmit={this.addPlayer.bind(this)}>
            <input type="text" name="playerName" placeholder="Enter name"/>
            <button>Add Player</button>
          </form>
        </div>
    );
  }
}