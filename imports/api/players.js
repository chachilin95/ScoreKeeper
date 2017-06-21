import {Mongo} from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

/* 
  useful mongo commands

    db.table.find()
    db.table.update({...})
    db.table.find().sort({...})
*/
