import React, { useContext } from 'react';
import numeral from 'numeral';

import { Player } from '../types';
import { UpdatePlayer, DeletePlayer } from '../actions/players';

import { PlayersContext } from '../contexts/players.context';

interface PlayerProps {
    index: number,
    player: Player
};

export default ({ player, index }: PlayerProps) => {

    const { dispatch } = useContext(PlayersContext);

    const deletePlayer = () => dispatch(DeletePlayer(player.id));
    const incrementScore = () => dispatch(UpdatePlayer(player.id, 1));
    const decrementScore = () => dispatch(UpdatePlayer(player.id, -1));

    return (
        <div className='player'>
            <div className='player__description'>
                <h3 className='player__name'>{player.name}</h3>
                <p className='player__stats'>
                    {`${numeral(index).format('0o')} place – ${player.score} ${player.score > 1 || player.score === 0 ? 'points' : 'point'}`}
                </p>
            </div>
            <div>
                <button className='button button--round' onClick={incrementScore}>+1</button>
                <button className='button button--round' onClick={decrementScore}>-1</button>
                <button className='button button--round' onClick={deletePlayer}>X</button>
            </div>
        </div>
    );
};