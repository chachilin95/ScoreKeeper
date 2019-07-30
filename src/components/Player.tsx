import React from 'react';

import { Action, Player } from '../types';
import { UpdatePlayer, DeletePlayer } from '../actions/players';

import { PlayersContextConsumer } from '../contexts/players.context';

interface PlayerProps {
    player: Player
};

export default ({ player }: PlayerProps) => {

    const renderPlayer = (dispatch: React.Dispatch<Action>) => (
        <div>
            <p>Player: {player.name}</p>
            <p>Score: {player.score}</p>
            <button onClick={() => dispatch(UpdatePlayer(player.id, 1))}>+1</button>
            <button onClick={() => dispatch(UpdatePlayer(player.id, -1))}>-1</button>
            <button onClick={() => dispatch(DeletePlayer(player.id))}>X</button>
        </div>
    )

    return (
        <PlayersContextConsumer>
            {appContext => appContext && renderPlayer(appContext.dispatch)}
        </PlayersContextConsumer>
    );
};