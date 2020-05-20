import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import animations from './animations';

import Player from './Player';
import { PlayerListProps } from '../types';

const PlayerList = ({ players, handlers }: PlayerListProps) => {

    // display empty list
    if (players.length === 0) {
        
        const emptyPlayerListMessage = (
            <motion.div
                initial={animations.pop.initial}
                animate={animations.slide.enter}
                transition={animations.pop.transition}
            >
                <div className='item'>
                    <p className='item__message'>Add a player to the list!</p>
                </div>
            </motion.div>
        );

        return emptyPlayerListMessage;
    }

    // descending sort by score
    const sortedPlayers = players.sort((a, b) => a.score > b.score ? -1 : 1);

    const populatedPlayerList = (
        <AnimatePresence>
            {
                sortedPlayers.map((player, index) => (
                    <motion.div
                        key={player.id}
                        initial={animations.slide.initial}
                        animate={animations.slide.enter}
                        exit={animations.slide.exit}
                        positionTransition={animations.slide.transition}
                    >
                        <Player 
                            rank={index + 1} 
                            player={player} 
                            handleDeletePlayer={() => handlers.deletePlayer(player.id)}
                            handleUpdatePlayer={(adjustment: number) => handlers.updatePlayer(player.id, adjustment)}/>
                    </motion.div>
                ))
            }
        </AnimatePresence>
    );

    return (
        <div>
            {populatedPlayerList}
        </div>
    );
};

export default PlayerList;