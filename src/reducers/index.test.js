import {gameReducer} from './index';
import {SET_RANDOM_NUMBER, setRandomNumber, ADD_GUESS_TO_LIST, addGuessToList, CLEAR_GUESSES_LIST, clearGuessesList, SET_CURRENT_GUESS, setCurrentGuess} from '../actions';

describe('gameReducer', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.currentGuess).toEqual("");
        expect(state.randomNumber <= 100 && state.randomNumber >= 1).toEqual(true);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = gameReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setRandomNumber', () => {
        it('Should replace randomNumber', () => {
            let state;
            state = gameReducer(state, setRandomNumber(4));
            state = gameReducer(state, setRandomNumber(44));
            expect(state.randomNumber).toEqual(44);
        });
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

    describe('clearGuessesList', () => {
        it('Should replace guesses with empty array', () => {
            let state= {
              randomNumber: 5,
              guesses: [6],
              currentGuess: 7
            };
            state = gameReducer(state, clearGuessesList());
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
