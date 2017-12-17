export const SET_RANDOM_NUMBER = 'SET_RANDOM_NUMBER';
export const setRandomNumber = num => ({
    type: SET_RANDOM_NUMBER,
    num
});

export const ADD_GUESS_TO_LIST = 'ADD_GUESS_TO_LIST';
export const addGuessToList = (num) => ({
    type: ADD_GUESS_TO_LIST,
    num
});

export const CLEAR_GUESSES_LIST = 'CLEAR_GUESSES_LIST';
export const clearGuessesList = () => ({
    type: CLEAR_GUESSES_LIST,
});

export const SET_CURRENT_GUESS = 'SET_CURRENT_GUESS';
export const setCurrentGuess = (num) => ({
    type: SET_CURRENT_GUESS,
    num
});
