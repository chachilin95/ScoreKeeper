import React, { useContext, useState } from 'react';

import { PlayersContext } from '../contexts/players.context';
import { AddPlayer } from '../actions/players';

export default () => {

    const { dispatch } = useContext(PlayersContext);
    const [name, setName] = useState('');

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (name) {
            dispatch(AddPlayer(name));
            setName('');
        } else {
            alert('Please submit a valid name that is at least 1 character long');
        }
    };

    return (
        <div className='item'>
            <form className='add-player' onSubmit={handleOnSubmit}>
                <input
                    className='add-player__input'
                    placeholder='Enter player name here'
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <button className='button'>Add Player</button>
            </form>
        </div>
    );
};