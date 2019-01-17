import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Menu as MenuAnt } from 'antd';
import 'antd/lib/menu/style/css';
import MenuItem from '../MenuItem';
import Icon from '../Icon';
import SubMenu from '../SubMenu';
import StyledMenu from './styledMenu';
import Theme from '../theme';

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getMenuItem = function (item) {
      return React.createElement(MenuItem, {
        styling: _objectSpread({}, Theme.menu, _this.props.styling),
        key: item.name
      }, item.linkTo ? React.createElement("a", {
        href: item.linkTo,
        target: item.target || '_blank',
        key: item.name
      }, item.name) : item.name);
    };

    _this.getSubmenuItem = function (item) {
      var iconRight = item.iconRight && React.createElement(Icon, {
        type: item.iconRight,
        isRight: true
      });
      var iconLeft = item.iconLeft && React.createElement(Icon, {
        type: item.iconLeft
      });
      var subItems = item.subNavigation.map(function (subItem) {
        return React.createElement(MenuItem, {
          key: subItem.name
        }, subItem.linkTo ? React.createElement("a", {
          href: subItem.linkTo,
          target: subItem.target || '_blank',
          key: subItem.name
        }, subItem.name) : subItem.name);
      });
      return React.createElement(SubMenu, {
        key: item.name,
        title: React.createElement("span", null, iconLeft, item.name, iconRight)
      }, subItems);
    };

    _this.getMenu = function (item) {
      return item.subNavigation ? _this.getSubmenuItem(item) : _this.getMenuItem(item);
    };

    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          items = _this$props.items,
          selectedKeys = _this$props.selectedKeys,
          mode = _this$props.mode,
          className = _this$props.className,
          styling = _this$props.styling;
      return React.createElement(StyledMenu, {
        styling: _objectSpread({}, Theme.menu, styling)
      }, React.createElement(MenuAnt, {
        onClick: onClick,
        selectedKeys: selectedKeys,
        mode: mode,
        className: className
      }, items.map(this.getMenu)));
    }
  }]);

  return Menu;
}(Component);

Menu.defaultProps = {
  styling: {},
  className: ''
};
export default Menu;