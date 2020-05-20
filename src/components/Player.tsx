import React from 'react';
import numeral from 'numeral';

import { PlayerProps } from '../types';

export default ({ player, rank, handleDeletePlayer, handleUpdatePlayer }: PlayerProps) => {

    const deletePlayer = () => handleDeletePlayer();
    const incrementScore = () => handleUpdatePlayer(1);
    const decrementScore = () => handleUpdatePlayer(-1);

    let itemClassName = `item item--position-${rank}`;

    const playerStatsToString = () => {
        const playerRank = numeral(rank).format('0o');
        const playerScore = player.score;
        const playerScoreLabel = player.score === 1 ? 'point' : 'points';

        return `${playerRank} place – ${playerScore} ${playerScoreLabel}`;
    };

    return (
        <div className={itemClassName}>
            <div className='player'>
                <div className='player__description'>
                    <h3 className='player__name'>{player.name}</h3>
                    <p className='player__stats'>{playerStatsToString()}</p>
                </div>
                <div className='player__actions'>
                    <button className='button button--round' onClick={incrementScore}>+1</button>
                    <button className='button button--round' onClick={decrementScore}>-1</button>
                    <button className='button button--round' onClick={deletePlayer}>X</button>
                </div>
            </div>
        </div>
    );
};