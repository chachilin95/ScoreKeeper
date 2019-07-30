import React, { useEffect, useReducer } from 'react';

// components
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayer';

import playersReducer from '../reducers/players';
import { PopulatePlayers } from '../actions/players';
import { PlayersContextProvider } from '../contexts/players.context';

export default () => {

    const [players, dispatch] = useReducer(playersReducer, []);

    // populate player list on startup
    useEffect(() => {
        const playerData = localStorage.getItem('players');
        if (playerData) {
            const players = JSON.parse(playerData);
            dispatch(PopulatePlayers(players));
        }
    }, []);

    // save player list on change
    useEffect(() => {
        localStorage.setItem('players', JSON.stringify(players));
    }, [players]);

    return (
        <div>
            <TitleBar
                title='Score Keeper App'
                subtitle='May the best player win!' />
            <PlayersContextProvider value={{ players, dispatch }}>
                <PlayerList />
                <AddPlayerForm />
            </PlayersContextProvider>
        </div>
    );
};