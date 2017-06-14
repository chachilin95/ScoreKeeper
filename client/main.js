import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

Tracker.autorun(function () {
  console.log('Players list', Players.find().fetch());  
})

Meteor.startup(function () {

  let title = "Score Keeper App";

  let name = "Alejandro Figueroa";
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello, {name}</p>
      <p>You are great!</p>
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});