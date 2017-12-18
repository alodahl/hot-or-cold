export const ADD_GUESS_TO_LIST = 'ADD_GUESS_TO_LIST';
export const addGuessToList = (num) => ({
    type: ADD_GUESS_TO_LIST,
    num
});

export const SET_CURRENT_GUESS = 'SET_CURRENT_GUESS';
export const setCurrentGuess = (num) => ({
    type: SET_CURRENT_GUESS,
    num
});




export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
});
// export const SET_RANDOM_NUMBER = 'SET_RANDOM_NUMBER';
// export const setRandomNumber = num => ({
//     type: SET_RANDOM_NUMBER,
//     num
// });
