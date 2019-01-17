import React from 'react';
import { shallow } from 'enzyme';
import Ul from '../Ul';
describe('<Ul />', function () {
  it('should render an <ul> tag', function () {
    var renderedComponent = shallow(React.createElement(Ul, null));
    expect(renderedComponent.type()).toEqual('ul');
  });
  it('should have a className attribute', function () {
    var renderedComponent = shallow(React.createElement(Ul, null));
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should adopt a valid attribute', function () {
    var id = 'test';
    var renderedComponent = shallow(React.createElement(Ul, {
      id: id
    }));
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('should not adopt an invalid attribute', function () {
    var renderedComponent = shallow(React.createElement(Ul, {
      attribute: "test"
    }));
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});