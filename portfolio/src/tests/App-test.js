import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './../components/App';

const renderApp = (props, isDeep) => isDeep
  ? mount(<App {...props} />) 
  : shallow(<App {...props} />);

describe('Component: Header', () => {
  const getMinimimProps = (newProps) => Object.assign({}, {
  },newProps);

  it('Renders basic component', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props, true);
    expect(wrapper.length).toEqual(1);
  });

  it('first div must have app class', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    expect(wrapper.hasClass('.app')).toBe(true);
  });

  it('should render show-button class by default', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    expect(wrapper.hasClass('.show-button')).toBe(true);
  });

  it('should render show-render when Read more button is clicked', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    wrapper.find('toggle').simulate('onClick');
    wrapper.update();
    expect(wrapper.hasClass('.show-render')).toBe(true);
  });

  it('should render show-button when Show less button is clicked', () => {
    const props = getMinimimProps();
    const wrapper = renderApp(props);
    wrapper.find('show-less').simulate('onClick');
    wrapper.update();
    expect(wrapper.hasClass('.show-button')).toBe(true);
  });

})