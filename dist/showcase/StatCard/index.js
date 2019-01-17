import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { withTheme } from 'styled-components';
import { Skeleton } from 'antd';
import 'antd/lib/skeleton/style/css';
import StyledStatCard from './styledStatCard';
import StyledTitle from './styledTitle';
import StyledValue from './styledValue';
import StyledLoadingPlaceholder from './styledPlaceholder';
import Theme from '../theme';

var StatCard = function StatCard(_ref) {
  var stat = _ref.stat,
      theme = _ref.theme,
      styling = _ref.styling;
  return React.createElement(StyledStatCard, {
    theme: _objectSpread({}, theme.statCard, styling)
  }, React.createElement(StyledTitle, {
    theme: _objectSpread({}, theme.statCard, styling)
  }, stat.name), React.createElement(StyledLoadingPlaceholder, null, stat.value !== undefined && React.createElement(StyledValue, {
    theme: _objectSpread({}, theme.statCard, styling)
  }, stat.value), stat.value === undefined && React.createElement(Skeleton, {
    active: true,
    title: false,
    paragraph: {
      rows: 1,
      width: '100%'
    }
  })));
};

StatCard.defaultProps = {
  theme: Theme,
  styling: {}
};
export default withTheme(StatCard);