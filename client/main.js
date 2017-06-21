import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

// when a new player name is submitted
const addPlayer = (e) => {
  let playerName = e.target.playerName.value;
  e.preventDefault();

  if (playerName) {
    Players.insert({
      name: playerName,
      score: -1
    });
  };
};

const renderPlayers = (players) => players.map((player) => {

    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => { Players.update( {_id: player._id}, {$inc: {score:1}})}}>+1</button> 
        <button onClick={() => { Players.update({_id: player._id}, {$inc: {score: -1}})}}>-1</button> 
        <button onClick={() => { Players.remove({_id: player._id})} }>X</button> 
      </p>
    );
  });

Meteor.startup(() => {
  
  Tracker.autorun(() => {
    let players = Players.find().fetch();

    let title = "Score Keeper App";
    let jsx = (
      <div>
        <h1>{title}</h1>
        {renderPlayers(players)}

        <AddPlayer/>
        <form onSubmit={addPlayer}>
          <input type="text" name="playerName" placeholder="Enter name"/>
          <button>Add Player</button>
        </form>

      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });
  
});