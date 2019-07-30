import uuid from 'uuid';

import { State, Action, Player } from '../types';

export default (state: State, action: Action): State => {
    switch (action.type) {

        case 'POPULATE_PLAYER_LIST':
            return action.players;

        case 'ADD_PLAYER':
            const newPlayer: Player = {
                id: uuid(),
                name: action.name,
                score: 0
            };
            return [...state, newPlayer];

        case 'DELETE_PLAYER':
            return state.filter((player) => player.id !== action.id);

        case 'UPDATE_PLAYER':
            return state.map((player) => {
                if (player.id === action.id) {
                    const updatedPlayer: Player = {
                        id: player.id,
                        name: player.name,
                        score: player.score + action.value
                    };
                    return updatedPlayer;
                } else {
                    return player;
                }
            });

        default:
            return state;
    }
}