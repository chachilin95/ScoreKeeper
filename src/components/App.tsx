import React, { useEffect, useState } from 'react';

// components
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayer';

import { State, Player, StateHandlers } from '../types';
import uuid from 'uuid';

const App = () => {

    const initState: State = []
    const [players, setPlayers] = useState(initState);

    // retrieve players from local storage
    const getPlayerListFromStorage = () => {
        const playerData = localStorage.getItem('players');
        if (playerData) {
            const parsedPlayers = JSON.parse(playerData);
            setPlayers(parsedPlayers);
        }
    }

    // save players to local storage
    const savePlayerListToStorage = () => {
        localStorage.setItem('players', JSON.stringify(players));
    };

    // create new player and update state
    const addPlayer = (name: string) => {
        const newPlayer: Player = {
            id: uuid(),
            name: name,
            score: 0
        };

        setPlayers([...players, newPlayer]);
    };

    // delete player and update state
    const deletePlayer = (id: string) => {
        const updatedState = players.filter((player) => player.id !== id);
        setPlayers(updatedState);
    }

    // update player score and update state
    const updatePlayer = (id: string, adjustment: number) => {
        const updatedState = players.map((player) => {
            if (player.id === id) {
                return {
                    id: player.id,
                    name: player.name,
                    score: player.score + adjustment
                };
            } else {
                return player;
            }
        });
        
        setPlayers(updatedState);
    }

    const stateHandlers: StateHandlers = {
        addPlayer,
        deletePlayer,
        updatePlayer
    };

    // populate player list on startup
    useEffect(getPlayerListFromStorage, []);

    // save player list on change
    useEffect(savePlayerListToStorage, [players]);

    return (
        <div>
            <TitleBar
                title='Score Keeper App'
                subtitle='May the best player win!' />
            <div className='wrapper'>
                <PlayerList players={players} handlers={stateHandlers}/>
                <AddPlayerForm handlers={stateHandlers} />
            </div>
        </div>
    );
};

export default App;