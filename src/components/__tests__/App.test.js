import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() })

describe('App tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Provider store={store}><App/></Provider>)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});