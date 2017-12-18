import {gameReducer} from './index';
import {NEW_GAME, newGame, setRandomNumber, ADD_GUESS_TO_LIST, addGuessToList, CLEAR_GUESSES_LIST, clearGuessesList, SET_CURRENT_GUESS, setCurrentGuess} from '../actions';

describe('gameReducer', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.currentGuess).toEqual("");
        expect(state.randomNumber <= 100 && state.randomNumber >= 1).toEqual(true);
        // alternative assertions:
        // expect(state.randomNumber).toBeGreaterThanOrEqual(0);
        // expect(state.randomNumber).toBeLessThanOrEqual(100);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = gameReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addGuessToList', () => {
        it('Should add new guesses', () => {
            let state;
            state = gameReducer(state, addGuessToList(6));
            state = gameReducer(state, addGuessToList(66));
            state = gameReducer(state, addGuessToList(99));
            expect(state.guesses).toEqual([6, 66, 99]);
        });
    });

    describe('newGame', () => {
        it('Should replace guesses with empty array', () => {
            let state = {
              randomNumber: 5,
              guesses: [6],
              currentGuess: 7
            };
            state = gameReducer(state, newGame());
            expect(state.guesses).toEqual([]);
        });
    });

    describe('setCurrentGuess', () => {
        it('Should change the currentGuess value', () => {
            let state;
            state = gameReducer(state, setCurrentGuess(0));
            state = gameReducer(state, setCurrentGuess(1));
            state = gameReducer(state, setCurrentGuess(2));
            expect(state.currentGuess).toEqual(2);
        });
    });
});
