export interface Player {
    id: string,
    name: string,
    score: number
};

export type State = Player[];

export type StateHandlers = {
    addPlayer: (name: string) => void,
    deletePlayer: (id: string) => void,
    updatePlayer: (id: string, adjustment: number) => void
}

// AddPlayer Component
export interface AddPlayerProps {
    handlers: StateHandlers
};

// PlayerList Component
export interface PlayerListProps {
    players: State,
    handlers: StateHandlers
};

// Player Component
export interface PlayerProps {
    rank: number,
    player: Player,
    handleUpdatePlayer: (adjustment: number) => void
    handleDeletePlayer: () => void
};

// TitleBar Component
export interface TitleBarProps {
    title: string,
    subtitle: string
};