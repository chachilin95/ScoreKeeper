import React from 'react';

import PlayerItem from './Player';

import { Player } from '../types';

import { PlayersContextConsumer } from '../contexts/players.context';
import { getSortedPlayers } from '../selectors/players';

export default () => {

    const renderPlayerList = (players: Player[]) => (
        <div>
            {getSortedPlayers(players).map((player: Player, index: number) =>
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