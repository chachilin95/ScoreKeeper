import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Alex',
  score: 5
}, {
  _id: '2',
  name: 'McKenna',
  score: 4
}, {
  _id: '3',
  name: 'Kailynn',
  score: 7
}];

const renderPlayers = function () {
  return players.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>
  });
}

Meteor.startup(function () {

  let title = "Score Keeper App";

  let name = "Alejandro Figueroa";
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello, {name}</p>
      <p>You are great!</p>
      {renderPlayers()}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});