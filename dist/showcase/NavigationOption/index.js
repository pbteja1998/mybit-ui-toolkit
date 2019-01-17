/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
// TODO: Fix the JSX linting errors
import React from 'react';
import { StyledImg, StyledLink, StyledNavOption, StyledP } from './styledComponents';

var NavigationOption = function NavigationOption(_ref) {
  var name = _ref.name,
      icon = _ref.icon,
      selectable = _ref.selectable,
      selected = _ref.selected,
      url = _ref.url;
  return React.createElement(StyledLink, {
    to: url || '/',
    href: url || '/'
  }, React.createElement(StyledNavOption, {
    selectable: selectable,
    selected: selected
  }, React.createElement(StyledImg, {
    alt: name,
    src: icon
  }), React.createElement(StyledP, null, name)));
};

NavigationOption.defaultProps = {
  selected: false,
  selectable: false,
  url: ''
};
export default NavigationOption;