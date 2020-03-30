import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './../components/Header';

const renderApp = (props, isDeep) => isDeep
  ? mount(<Header {...props} />) 
  : shallow(<Header {...props} />);

describe('Component: Header', () => {
  const getMinimimProps = (newProps) => Object.assign({}, {
  },newProps);

  it('Renders basic component', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props, true);
    expect(wrapper.length).toEqual(1);
  });

  it('first div must have header class', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    expect(wrapper.hasClass('.header')).toBe(true);
  });

  it('first div must have links class', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    expect(wrapper.hasClass('.links')).toBe(true);
  });

  it('should render correct props for Link home component', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    const expectedProps = {
      className :'home',
      to: '/'
    };

    expect(wrapper.find('.home').props().toMatchObject(expectedProps));
  });

  it('should render correct props for Link youtube component', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    const expectedProps = {
      className :'youtube',
      to: '/Youtube'
    };

    expect(wrapper.find('.youtube').props().toMatchObject(expectedProps));
  });

  it('should render correct props for Link music-master component', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    const expectedProps = {
      className :'music-master',
      to: '/music-master'
    };

    expect(wrapper.find('.music-master').props().toMatchObject(expectedProps));
  });
})