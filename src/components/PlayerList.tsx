import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import PlayerItem from './Player';

import { Player } from '../types';

import { PlayersContext } from '../contexts/players.context';
import { getSortedPlayers } from '../selectors/players';

export default () => {

    const { players } = useContext(PlayersContext);
    const sortedPlayers = getSortedPlayers(players);

    const renderPlayerList = () => {

        const animations = {

            pop: {
                initial: {
                    scale: 0
                },

                enter: {
                    scale: 1
                },

                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 800
                }
            },

            slide: {
                initial: {
                    x: -300,
                    opacity: 0,
                    scale: 0
                },

                enter: {
                    x: 0,
                    opacity: 1,
                    scale: 1
                },

                exit: {
                    x: 300,
                    opacity: 0
                },

                transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 300
                }
            }
        }

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

        const populatedPlayerList = (
            <AnimatePresence>
                {sortedPlayers.map((player: Player, index: number) => (
                    <motion.div
                        key={player.id}
                        initial={animations.slide.initial}
                        animate={animations.slide.enter}
                        exit={animations.slide.exit}
                        positionTransition={animations.slide.transition}
                    >
                        <PlayerItem rank={index + 1} player={player} />
                    </motion.div>
                ))}
            </AnimatePresence>
        );

        // render
        if (players.length === 0) {
            return emptyPlayerListMessage;
        } else {
            return populatedPlayerList;
        }
    };

    return (
        <div>
            {renderPlayerList()}
        </div>
    );
};