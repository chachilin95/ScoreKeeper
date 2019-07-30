import { Player } from "../types";

export const getSortedPlayers = (players: Player[]) => {
    return players.sort((a, b) => a.score > b.score ? -1 : 1);
};