import React, { useContext } from 'react';

import { Player } from '../types';
import { UpdatePlayer, DeletePlayer } from '../actions/players';

import PlayersContext from '../contexts/players.context';

interface PlayerProps {
    player: Player
}

export default ({ player }:PlayerProps) => {
    const { dispatch } = useContext(PlayersContext);
    
    const updateScore = (value:number) => {
        dispatch(UpdatePlayer(player.id, value));
    };

    const deletePlayer = () => {
        dispatch(DeletePlayer(player.id));
    };

    return (
        <div>
            <p>Player: {player.name}</p>
            <p>Score: {player.score}</p>
            <button onClick={() => updateScore(1)}>+1</button>
            <button onClick={() => updateScore(-1)}>-1</button>
            <button onClick={deletePlayer}>X</button>
        </div>
    );
};