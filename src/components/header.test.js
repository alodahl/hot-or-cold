import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Renders the header text correctly', () => {
        let text = '"Hot or Cold" Game';
        const wrapper = shallow(<Header />);
        expect(wrapper.find("h1").text()).toEqual(text);
    });


});
