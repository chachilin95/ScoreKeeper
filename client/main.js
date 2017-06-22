import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, getPositions} from './../imports/api/players';

import App from './../imports/ui/App';

Meteor.startup(() => {
  
  Tracker.autorun(() => {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positions = getPositions(players)

    ReactDOM.render(<App title='Score Keeper App' players={positions}/>, document.getElementById('app'));
  });
  
});