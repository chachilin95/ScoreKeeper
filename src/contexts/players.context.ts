import React from 'react'

import { Action, Player } from '../types';

export interface IPlayersContext {
    players: Player[],
    dispatch: React.Dispatch<Action>
}

const PlayersContext = React.createContext<IPlayersContext | null>(null);

export const PlayersContextProvider = PlayersContext.Provider;
export const PlayersContextConsumer = PlayersContext.Consumer;