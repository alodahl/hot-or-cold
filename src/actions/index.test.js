import {SET_RANDOM_NUMBER, setRandomNumber, ADD_GUESS_TO_LIST, addGuessToList, NEW_GAME, newGame, SET_CURRENT_GUESS, setCurrentGuess} from './index';

describe('New Game', () => {
    it('Should return the action', () => {
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
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

describe('setCurrentGuess', () => {
    it('Should return the action', () => {
        const num = 55;
        const action = setCurrentGuess(num);
        expect(action.type).toEqual(SET_CURRENT_GUESS);
        expect(action.num).toEqual(num);
    });
});
