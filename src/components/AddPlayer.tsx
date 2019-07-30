import React, { useState, useContext } from 'react';

import PlayersContext from '../contexts/players.context';
import { AddPlayer } from '../actions/players';

export default () => {

    const [name, setName] = useState('');
    const { dispatch } = useContext(PlayersContext);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (name) {
            dispatch(AddPlayer(name));
            setName('');
        } else {
            console.log('no can do'); // TODO: create a warning message
        }
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    placeholder='enter player name here'
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <button>Add Player</button>
            </form>
        </div>
    );
};