import React from 'react';
import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  var ComponentToRender = props.component;
  var content = React.createElement("div", null); // If we have items, render them

  if (props.items) {
    content = props.items.map(function (item, index) {
      return React.createElement(ComponentToRender, {
        key: "item-".concat(item.id || (typeof item === 'string' ? item : index)),
        item: item
      });
    });
  } else {
    // Otherwise render a single component
    content = React.createElement(ComponentToRender, null);
  }

  return React.createElement(Wrapper, null, React.createElement(Ul, null, content));
}

List.defaultProps = {
  items: []
};
export default List;