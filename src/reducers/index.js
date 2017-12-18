import * as actions from '../actions';

const initialState = {
  randomNumber: Math.floor(Math.random()*100) + 1,
  guesses: [],
  currentGuess: ""  //this.props.value ? this.props.value : ""
};

export const gameReducer = (state=initialState, action) => {
    if (action.type === actions.NEW_GAME) {
        return Object.assign({}, state, {
            randomNumber: Math.floor(Math.random()*100) + 1,
            guesses: []
        });
    }
    else if (action.type === actions.ADD_GUESS_TO_LIST) {
            return Object.assign({}, state, {
                guesses: [...state.guesses, action.num],
                currentGuess:""
            });
    }
    else if (action.type === actions.SET_CURRENT_GUESS) {
            return Object.assign({}, state, {
                currentGuess: action.num
            });
    }
    return state;
};
