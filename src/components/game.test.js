import React from 'react';
import {shallow, mount} from 'enzyme';

import {Game} from './game';
import {setRandomNumber, addGuessToList, clearGuessesList, setCurrentGuess} from '../actions'

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

  it('Renders the correct response to a user guess', () => {
    const num = 5;
    const wrapper = shallow(<Game randomNumber={num} guesses={[4, 9]} dispatch={dispatch}/>);
    const instance = wrapper.instance();
    instance.response();
    expect(instance.response()).toEqual("Very warm");
  });

  it('Dispatches setRandomNumber from setRandomNumber()', () => {
        const num = 11;
        const dispatch = jest.fn();
        const wrapper = shallow(<Game dispatch={dispatch} />);
        // Ignore any previous calls to dispatch
        dispatch.mockClear();
        const instance = wrapper.instance();
        instance.setRandomNumber(num);
        expect(dispatch).toHaveBeenCalledWith(setRandomNumber(num));
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

  it('Dispatches clearGuessesList from clearGuessesList()', () => {
        const num = 12;
        const dispatch = jest.fn();
        const wrapper = shallow(<Game dispatch={dispatch} />);
        dispatch.mockClear();
        const instance = wrapper.instance();
        instance.clearGuessesList(num);
        expect(dispatch).toHaveBeenCalledWith(clearGuessesList(num));
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

  it('Dispatches setCurrentGuess, clearGuessesList, and setRandomNumber from component functions', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Game dispatch={dispatch} />);
        dispatch.mockClear();
        const instance = wrapper.instance();
        instance.handleNewGameButton();
        expect(dispatch).toHaveBeenCalledWith(setCurrentGuess(""));
        expect(dispatch).toHaveBeenCalledWith(clearGuessesList());
        expect(dispatch).toHaveBeenCalledWith(setRandomNumber());
  });

});
