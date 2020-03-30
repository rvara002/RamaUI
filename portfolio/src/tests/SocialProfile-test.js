import React from 'react';
import { shallow, mount } from 'enzyme';
import SOCIAL_PROFILES from './../data/socialProfiles';
import SocialProfile from './../components/SocialProfiles'

const renderProjects = (props, isDeep) => isDeep
  ? mount(<SocialProfile {...props} />) 
  : shallow(<SocialProfile {...props} />);

describe('Component: Projects', () => {
  const getMinimimProps = (newProps) => Object.assign({}, {
  },newProps);

  it('Renders basic component', () => {
    const props = getMinimimProps();
    const wrapper = renderProjects(props, true);
    expect(wrapper.length).toEqual(1);
  });

  it('first div must have projects class', () => {
    const props = getMinimimProps();
    const wrapper = renderProjects(props);
    expect(wrapper.hasClass('.projects')).toBe(true);
  });

  it('first div must have title class', () => {
    const props = getMinimimProps();
    const wrapper = renderProjects(props);
    expect(wrapper.hasClass('.title')).toBe(true);
  });

  it('should pass correct props to project component', () => {
    const props = getMinimimProps();

    const SocialProfile ={
      
        id: 1,
        link: 'mailto:rvara002@fiu.edu',
        image: emailIcon
      },
    
    const wrapper = renderProjects(props);
    
    const expectedProps = {
      className :'project',
      key: SocialProfile.id,
      SocialProfile: SocialProfile
    };

    expect(wrapper.find('.SocialProfile').props().toMatchObject(expectedProps));
  });
});