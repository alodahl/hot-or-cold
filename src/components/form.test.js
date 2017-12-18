import React from 'react';
import {shallow, mount} from 'enzyme';

import Form from './form';

describe('<Form />', () => {
  it('Renders without crashing', () => {
    shallow(<Form value="99" />);
  });

  it('Renders the input value correctly', () => {
    let num = 88;
    const wrapper = shallow(<Form value={num} />);
    expect(wrapper.find('input').prop("value")).toEqual(num);
  });

  it('Renders the label value correctly', () => {
    let text = "Guess a number between 1 and 100:";
    const wrapper = shallow(<Form value="88"/>);
    expect(wrapper.find("label").text()).toEqual(text);
  });
});
