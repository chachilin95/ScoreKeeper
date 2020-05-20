import React, { useState } from 'react';

import { AddPlayerProps } from '../types';

const AddPlayer = ({ handlers }: AddPlayerProps) => {

    const [name, setName] = useState('');

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (name) {
            handlers.addPlayer(name);
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

export default AddPlayer;