import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function () {
  let myName = "Alejandro Figueroa";
  let jsx = <p>Hello, {myName}</p>;

  ReactDOM.render(jsx, document.getElementById('app'));
});