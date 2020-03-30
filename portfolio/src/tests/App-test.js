import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './../components/App';

const renderApp = (props, isDeep) => isDeep
  ? mount(<App {...props} />) 
  : shallow(<App {...props} />);

describe('Component: App', () => {
  const getMinProps = (newProps) => Object.assign({}, {
    
  },newProps);

  it('Renders basic component', () => {
    const props = getMinProps();
    const wrapper = renderApp(props, true);
    expect(wrapper.length).toEqual(1);
  });

  it('first div must have app class', () => {
    const props = getMinProps();
    const wrapper = renderApp(props);
    expect(wrapper.hasClass('app')).toBe(true);
  });

})