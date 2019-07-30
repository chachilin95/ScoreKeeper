import React, { useEffect, useReducer } from 'react';

// components
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayer';

import playersReducer from '../reducers/players';
import { PopulatePlayers } from '../actions/players';
import { IPlayersContext, PlayersContextProvider } from '../contexts/players.context';

export default () => {

    const [players, dispatch] = useReducer(playersReducer, []);

    // populate player list on startup
    useEffect(() => {
        const players = JSON.parse(localStorage.getItem('players') || '[]');
        if (players) {
            dispatch(PopulatePlayers(players));
        }
    }, []);

    // save player list on change
    useEffect(() => {
        localStorage.setItem('players', JSON.stringify(players));
    }, [players]);

    const AppContext: IPlayersContext = {
        players,
        dispatch
    }

    return (
        <div>
            <TitleBar
                title='Score Keeper App'
                subtitle='May the best player win!' />
            <PlayersContextProvider value={AppContext}>
                <PlayerList />
                <AddPlayerForm />
            </PlayersContextProvider>
        </div>
    );
};