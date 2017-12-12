import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

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
        expect(wrapper.find("p").prop("children").toString()).toEqual("Guesses: ,2, 4, 6");
    });
});
