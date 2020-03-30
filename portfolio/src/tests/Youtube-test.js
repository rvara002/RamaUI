import React from 'react';
import { shallow, mount } from 'enzyme';


describe('Component: ConfigureCache', () => {
  const minProps = {
  };


const renderComponnent = (props, isDeep) => isDeep
  ? mount(<Menu {...props} />)
  : shallow(<Menu {...props} />);
})