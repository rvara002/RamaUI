import React from 'react';
import { shallow, mount } from 'enzyme';
import Projects from './../components/Projects';
import PROJECTS from './../data/projects';

const renderProjects = (props, isDeep) => isDeep
  ? mount(<Projects {...props} />) 
  : shallow(<Projects {...props} />);

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

  it('shoul pass correct prrops to project component', () => {
    const props = getMinimimProps();
    
    const project ={
        id: 1,
        title: 'Global Centro (UI/UX Lead)',
        description: 'Responsible for designing and developing the front-end interface for Global Centro Application',
        techstack: 'React, Angular5, Java Spring boot, HTML 5, CSS 3, Bootstrap 4, Flex Box-CSS, HANA DB',
        image: project1
      };
    
    const wrapper = renderApp(props);
    
    const expectedProps = {
      className :'project',
      key: project.id,
      project: project
    };

    expect(wrapper.find('.project').props().toMatchObject(expectedProps));
  });
});