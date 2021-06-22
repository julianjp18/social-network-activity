import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Posts from '../Posts/Posts';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() })

describe('Posts component tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Posts />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});