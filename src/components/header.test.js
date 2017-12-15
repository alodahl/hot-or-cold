import React from 'react';
import {shallow, mount} from 'enzyme';

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
