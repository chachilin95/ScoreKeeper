import React from 'react';

import { Player } from '../types';

import PlayerItem from './Player';
import { PlayersContextConsumer } from '../contexts/players.context';

export default () => {

    const renderPlayerList = (players: Player[]) => (
        <div>
            {players.map((player: Player, index: number) =>
                <PlayerItem key={index} player={player} />
            )}
        </div>
    );

    return (
        <PlayersContextConsumer>
            {appContext => appContext && renderPlayerList(appContext.players)}
        </PlayersContextConsumer>
    );
};