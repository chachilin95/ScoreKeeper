import React, { useContext } from 'react';

import { Player } from '../types';

import PlayerItem from './Player';
import PlayersContext from '../contexts/players.context';

export default () => {
    const { players }: { players: Player[] } = useContext(PlayersContext);

    return (
        <div>
            {players.map((player: Player, index: number) => <PlayerItem key={index} player={player} />)}
        </div>
    );
};