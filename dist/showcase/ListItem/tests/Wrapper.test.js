import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../Wrapper';
describe('<Wrapper />', function () {
  it('should render an <li> tag', function () {
    var renderedComponent = shallow(React.createElement(Wrapper, null));
    expect(renderedComponent.type()).toEqual('li');
  });
  it('should have a className attribute', function () {
    var renderedComponent = shallow(React.createElement(Wrapper, null));
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should adopt a valid attribute', function () {
    var id = 'test';
    var renderedComponent = shallow(React.createElement(Wrapper, {
      id: id
    }));
    expect(renderedComponent.prop('id')).toEqual(id);
  });
  it('should not adopt an invalid attribute', function () {
    var renderedComponent = shallow(React.createElement(Wrapper, {
      attribute: "test"
    }));
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});