import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { Progress } from 'antd';
import 'antd/lib/progress/style/css';
import { withTheme } from 'styled-components';
import StyledProgressBar from './styledProgressBar';
import Theme from '../theme';

var ProgressBar = function ProgressBar(_ref) {
  var size = _ref.size,
      percent = _ref.percent,
      status = _ref.status,
      showInfo = _ref.showInfo,
      styling = _ref.styling,
      theme = _ref.theme;
  return React.createElement(StyledProgressBar, {
    theme: _objectSpread({}, theme.progressbar, styling)
  }, React.createElement(Progress, {
    size: size,
    percent: percent,
    status: status,
    showInfo: showInfo
  }));
};

ProgressBar.defaultProps = {
  size: '',
  showInfo: true,
  theme: Theme,
  styling: {}
};
export default withTheme(ProgressBar);