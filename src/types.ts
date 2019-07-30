export interface Player {
    id: string,
    name: string,
    score: number
};

export type State = Player[];

export type Action =
    | {
        type: 'POPULATE_PLAYER_LIST',
        players: [Player]
    }
    | {
        type: 'ADD_PLAYER',
        name: string
    }
    | {
        type: 'DELETE_PLAYER',
        id: string
    }
    | {
        type: 'UPDATE_PLAYER',
        id: string,
        value: number
    };
