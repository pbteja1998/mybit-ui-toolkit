import React, { Fragment } from 'react';
import TooltipAnt from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';
import GlobalStyle from './globalStyles';

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      title = _ref.title,
      arrowPointAtCenter = _ref.arrowPointAtCenter,
      placement = _ref.placement;
  return React.createElement(Fragment, null, React.createElement(TooltipAnt, {
    title: title,
    arrowPointAtCenter: arrowPointAtCenter,
    placement: placement
  }, children), React.createElement(GlobalStyle, null));
};

Tooltip.defaultProps = {
  title: '',
  arrowPointAtCenter: false,
  placement: 'top'
};
export default Tooltip;