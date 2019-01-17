import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import SpinAnt from 'antd/lib/spin';
import 'antd/lib/spin/style/css';
import { withTheme } from 'styled-components';
import Theme from '../theme';
import StyledSpin from './styledSpin';

var Spin = function Spin(_ref) {
  var size = _ref.size,
      styling = _ref.styling,
      theme = _ref.theme;
  return React.createElement(StyledSpin, {
    theme: _objectSpread({}, theme.spin, styling)
  }, React.createElement(SpinAnt, {
    size: size
  }));
};

Spin.defaultProps = {
  size: 'small',
  styling: {},
  theme: Theme
};
export default withTheme(Spin);