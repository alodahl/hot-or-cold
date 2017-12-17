import {SET_RANDOM_NUMBER, setRandomNumber, ADD_GUESS_TO_LIST, addGuessToList, CLEAR_GUESSES_LIST, clearGuessesList, SET_CURRENT_GUESS, setCurrentGuess} from './index';

describe('setRandomNumber', () => {
    it('Should return the action', () => {
        const num = 90;
        const action = setRandomNumber(num);
        expect(action.type).toEqual(SET_RANDOM_NUMBER);
        expect(action.num).toEqual(num);
    });
});

describe('addGuessToList', () => {
    it('Should return the action', () => {
        const num = 10;
        const action = addGuessToList(num);
        expect(action.type).toEqual(ADD_GUESS_TO_LIST);
        expect(action.num).toEqual(num);
    });
});

describe('clearGuessesList', () => {
    it('Should return the action', () => {
        const action = clearGuessesList();
        expect(action.type).toEqual(CLEAR_GUESSES_LIST);
    });
});

describe('setCurrentGuess', () => {
    it('Should return the action', () => {
        const num = 55;
        const action = setCurrentGuess(num);
        expect(action.type).toEqual(SET_CURRENT_GUESS);
        expect(action.num).toEqual(num);
    });
});
