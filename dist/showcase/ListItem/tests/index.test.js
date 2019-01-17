import React from 'react';
import { mount } from 'enzyme';
import ListItem from '../index';
describe('<ListItem />', function () {
  it('should have a className', function () {
    var renderedComponent = mount(React.createElement(ListItem, {
      className: "test"
    }));
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });
  it('should render the content passed to it', function () {
    var content = React.createElement("div", null, "Hello world!");
    var renderedComponent = mount(React.createElement(ListItem, {
      item: content
    }));
    expect(renderedComponent.contains(content)).toBe(true);
  });
});