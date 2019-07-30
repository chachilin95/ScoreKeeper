import React, { useContext } from 'react';

import PlayerItem from './Player';

import { Player } from '../types';

import { PlayersContext } from '../contexts/players.context';
import { getSortedPlayers } from '../selectors/players';

export default () => {

    const { players } = useContext(PlayersContext);
    const sortedPlayers = getSortedPlayers(players);

    const renderPlayerList = () => {
        if (players.length === 0) {
            return (
                <div className='title-bar__subtitle'>
                    Add a player to the list!
                </div>
            );
        } else {
            return (
                sortedPlayers.map((player: Player, index: number) => (
                    <PlayerItem key={index} player={player} />
                ))                
            );
        }
    };

    return (
        <div>
            {renderPlayerList()}
        </div>
    );
};