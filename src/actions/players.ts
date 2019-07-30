import { Action, Player } from '../types';

export const AddPlayer = (name:string):Action => ({
    type: 'ADD_PLAYER',
    name
});

export const DeletePlayer = (id:string):Action => ({
    type: 'DELETE_PLAYER',
    id
});

export const UpdatePlayer = (id:string, value:number):Action => ({
    type: 'UPDATE_PLAYER',
    id,
    value
});

export const PopulatePlayers = (players:[Player]):Action => ({
    type: 'POPULATE_PLAYER_LIST',
    players
});