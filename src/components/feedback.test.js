import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback response="HOT" guesses={[1, 2, 3]} />);
    });

    it('Renders the correct response text color', () => {
        const wrapper = shallow(<Feedback response="Warm" guesses={[1, 2, 3]} />);
        const text = wrapper.find("h2");
        expect(text.prop("style")).toEqual({"color": "Orange"});
    });

    it('Renders the guesses array correctly', () => {
        let array = [2, 4, 6];
        const wrapper = shallow(<Feedback response="" guesses={array} />);
        expect(wrapper.find("p").text()).toEqual("Guesses: 2, 4, 6");
    });
});
