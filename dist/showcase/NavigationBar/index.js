import React from 'react';
import NavigationOption from '../NavigationOption';
import StyledWrapper from './styledWrapper';

var NavigationBar = function NavigationBar(_ref) {
  var clickHandler = _ref.clickHandler,
      currentPath = _ref.currentPath,
      menuOptions = _ref.menuOptions;
  var navBarOptions = menuOptions.map(function (menuItem) {
    return React.createElement(NavigationOption, {
      url: menuItem.url,
      key: menuItem.name,
      name: menuItem.name,
      icon: menuItem.icon,
      selectable: menuItem.selectable,
      selected: menuItem.url === currentPath,
      clickHandler: clickHandler
    });
  });
  return React.createElement(StyledWrapper, null, navBarOptions);
};

NavigationBar.defaultProps = {
  clickHandler: function clickHandler() {}
};
export default NavigationBar;