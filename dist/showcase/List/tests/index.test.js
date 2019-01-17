import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../ListItem';
import List from '../index';
describe('<List />', function () {
  it('should render the component if no items are passed', function () {
    var renderedComponent = shallow(React.createElement(List, {
      component: ListItem
    }));
    expect(renderedComponent.find(ListItem)).toBeDefined();
  });
  it('should pass all items props to rendered component', function () {
    var items = [{
      id: 1,
      name: 'Hello'
    }, {
      id: 2,
      name: 'World'
    }];

    var component = function component(_ref) {
      var item = _ref.item;
      return React.createElement(ListItem, null, item.name);
    }; // eslint-disable-line


    var renderedComponent = shallow(React.createElement(List, {
      items: items,
      component: component
    }));
    expect(renderedComponent.find(component)).toHaveLength(2);
    expect(renderedComponent.find(component).at(0).prop('item')).toBe(items[0]);
    expect(renderedComponent.find(component).at(1).prop('item')).toBe(items[1]);
  });
});