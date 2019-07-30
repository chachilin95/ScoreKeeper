import React, { useState } from 'react';

import { Action } from '../types';

import { PlayersContextConsumer } from '../contexts/players.context';
import { AddPlayer } from '../actions/players';

export default () => {

    const [name, setName] = useState('');

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>, dispatch: React.Dispatch<Action>): void => {
        e.preventDefault();

        if (name) {
            dispatch(AddPlayer(name));
            setName('');
        } else {
            alert('Please submit a valid name that is at least 1 character long');
        }
    };

    const renderAddPlayer = (dispatch: React.Dispatch<Action>) => (
        <div>
            <form onSubmit={(e) => handleOnSubmit(e, dispatch)}>
                <input
                    placeholder='enter player name here'
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <button>Add Player</button>
            </form>
        </div>
    );

    return (
        <PlayersContextConsumer>
            {appContext => appContext && renderAddPlayer(appContext.dispatch)}
        </PlayersContextConsumer>
    );
};