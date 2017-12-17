import * as actions from '../actions';

const initialState = {
  randomNumber: Math.floor(Math.random()*100) + 1,
  guesses: [],
  currentGuess: ""  //this.props.value ? this.props.value : ""
};

export const gameReducer = (state=initialState, action) => {
    if (action.type === actions.SET_RANDOM_NUMBER) {
        return Object.assign({}, state, {
            randomNumber: action.num || Math.floor(Math.random()*100) + 1
        });
    }
    else if (action.type === actions.ADD_GUESS_TO_LIST) {
            return Object.assign({}, state, {
                guesses: [...state.guesses, action.num]
            });
    }
    else if (action.type === actions.CLEAR_GUESSES_LIST) {
            return Object.assign({}, state, {
                guesses: []
            });
    }
    else if (action.type === actions.SET_CURRENT_GUESS) {
            return Object.assign({}, state, {
                currentGuess: action.num
            });
    }
    return state;
};
