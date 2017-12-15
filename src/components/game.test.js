import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Clears state values when "new game" button is clicked', () => {
        const wrapper = mount(<Game />);
        wrapper.instance().setRandomNumber(5);
        wrapper.instance().setGuesses(4);
        wrapper.instance().setCurrentGuess(3);
        wrapper.update();
        wrapper.find('button').simulate('click');
        expect(wrapper.state('randomNumber')).not.toEqual(5);
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('currentGuess')).toEqual("");
    });

    it('Adds user guess input to guesses array on submission', () => {
        const value = 'Foobar';
        const wrapper = mount(<Game value={value}/>);
        wrapper.find('form').simulate('submit');
        expect(wrapper.find("p").text()).toEqual("Guesses: Foobar");
    });
});
