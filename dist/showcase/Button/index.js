import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import AntButton from 'antd/lib/button';
import { withTheme } from 'styled-components';
import 'antd/lib/button/style/css';
import ButtonStyle from './styledButton';
import Theme from '../theme';
/**
 * @render react
 * @name Button
 * @description Simple MyBit button
 * @example
 * <Button
 *    type="solid"
 *    size="large"
 * > 
 *   Solid Button
 * </Button>
 */

var Button = function Button(props) {
  return React.createElement("div", null, React.createElement(ButtonStyle, {
    theme: props.type === 'solid' ? _objectSpread({}, Theme.buttons.primary[props.color], props.styling) : _objectSpread({}, Theme.buttons.secondary.back, props.styling)
  }, React.createElement(AntButton, _extends({
    className: props.active ? 'ant-btn--is-active' : undefined
  }, props), props.children)));
};

Button.defaultProps = {
  styling: {},
  color: 'blue',
  type: 'outline',
  active: 0,
  children: ''
};
export default withTheme(Button);