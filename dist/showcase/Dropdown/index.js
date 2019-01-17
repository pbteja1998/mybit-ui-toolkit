import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';
import { Menu, Dropdown as DropdownAnt, Icon } from 'antd';
import 'antd/lib/menu/style/css';
import 'antd/lib/dropdown/style/css';
import 'antd/lib/icon/style/css';
import Theme from '../theme';
import StyledDropdown from './styledDropdown';
import StyledDropdownMenu from './styledDropdownMenu';

var getMenu = function getMenu(menu, handleClick, theme, styling) {
  return React.createElement(StyledDropdownMenu, {
    theme: _objectSpread({}, theme.dropdown, styling)
  }, React.createElement(Menu, null, menu.map(function (item) {
    return React.createElement(Menu.Item, {
      key: item,
      onClick: function onClick() {
        return handleClick(item);
      }
    }, React.createElement("span", null, item));
  })));
};

var Dropdown = function Dropdown(_ref) {
  var selected = _ref.selected,
      menu = _ref.menu,
      handleClick = _ref.handleClick,
      placement = _ref.placement,
      styling = _ref.styling,
      theme = _ref.theme,
      trigger = _ref.trigger;
  return React.createElement(Fragment, null, React.createElement(StyledDropdown, {
    theme: _objectSpread({}, theme.dropdown, styling)
  }, React.createElement(DropdownAnt, {
    overlay: getMenu(menu, handleClick, theme, styling),
    placement: placement,
    trigger: [trigger]
  }, React.createElement("span", null, selected, " ", React.createElement(Icon, {
    type: "down"
  })))));
};

Dropdown.defaultProps = {
  styling: {},
  theme: Theme
};
export default withTheme(Dropdown);