import React from 'react';
import {shallow, mount} from 'enzyme';

import {Game} from './game';
import {newGame, setRandomNumber, addGuessToList, clearGuessesList, setCurrentGuess} from '../actions'

describe('<Game />', () => {
  const exampleState = {
    randomNumber: 31,
    guesses: [],
    currentGuess: ""
  }
  const dispatch = jest.fn();

  it('Renders without crashing', () => {
    shallow(<Game dispatch={dispatch}/>);
  });



  it('Dispatches addGuessToList from addGuessToList()', () => {
        const num = 12;
        const dispatch = jest.fn();
        const wrapper = shallow(<Game dispatch={dispatch} />);
        dispatch.mockClear();
        const instance = wrapper.instance();
        instance.addGuessToList(num);
        expect(dispatch).toHaveBeenCalledWith(addGuessToList(num));
  });


  it('Dispatches setCurrentGuess from setCurrentGuess()', () => {
        const num = 12;
        const dispatch = jest.fn();
        const wrapper = shallow(<Game dispatch={dispatch} />);
        dispatch.mockClear();
        const instance = wrapper.instance();
        instance.setCurrentGuess(num);
        expect(dispatch).toHaveBeenCalledWith(setCurrentGuess(num));
  });

  it('Dispatches newGame from component functions', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Game dispatch={dispatch} />);
        dispatch.mockClear();
        const instance = wrapper.instance();
        instance.handleNewGameButton();
        expect(dispatch).toHaveBeenCalledWith(newGame());
  });

});
