import React from 'react';
import { shallow } from 'enzyme';
import Item from '../Item';
describe('<Item />', function () {
  it('should render an <div> tag', function () {
    var renderedComponent = shallow(React.createElement(Item, null));
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should have a className attribute', function () {
    var renderedComponent = shallow(React.createElement(Item, null));
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should adopt a valid attribute', function () {
    var id = 'test';
    var renderedComponent = shallow(React.createElement(Item, {
      id: id
    }));
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('should not adopt an invalid attribute', function () {
    var renderedComponent = shallow(React.createElement(Item, {
      attribute: "test"
    }));
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});