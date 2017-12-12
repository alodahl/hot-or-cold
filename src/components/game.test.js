import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });



});
