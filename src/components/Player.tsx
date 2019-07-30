import React, { useContext } from 'react';

import { Player } from '../types';
import { UpdatePlayer, DeletePlayer } from '../actions/players';

import { PlayersContext } from '../contexts/players.context';

interface PlayerProps {
    player: Player
};

export default ({ player }: PlayerProps) => {

    const { dispatch } = useContext(PlayersContext);

    const incrementScore = () => dispatch(UpdatePlayer(player.id, 1));
    const decrementScore = () => dispatch(UpdatePlayer(player.id, -1));
    const deletePlayer = () => dispatch(DeletePlayer(player.id));

    return (
        <div>
            <p>Player: {player.name}</p>
            <p>Score: {player.score}</p>
            <button onClick={incrementScore}>+1</button>
            <button onClick={decrementScore}>-1</button>
            <button onClick={deletePlayer}>X</button>
        </div>
    );
};