import React from 'react'

import { Action, Player } from '../types';

export type IPlayersContext = { players: Player[], dispatch: React.Dispatch<Action> }

const defaultValue:IPlayersContext = {
    players: [],
    dispatch: () => {}
};
export const PlayersContext = React.createContext<IPlayersContext>(defaultValue);

export const PlayersContextProvider = PlayersContext.Provider;
export const PlayersContextConsumer = PlayersContext.Consumer;