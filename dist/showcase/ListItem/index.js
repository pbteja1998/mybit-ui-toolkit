import React from 'react';
import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  return React.createElement(Wrapper, null, React.createElement(Item, null, props.item));
}

export default ListItem;