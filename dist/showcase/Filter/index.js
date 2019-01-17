import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style/css';
import { withTheme } from 'styled-components';
import Theme from '../theme';
import StyledFilter from './styledFilter';
var CheckableTag = TagAnt.CheckableTag;

var Filter = function Filter(props) {
  return React.createElement(StyledFilter, {
    theme: _objectSpread({}, props.theme.filters, props.styling)
  }, React.createElement(CheckableTag, props));
};

Filter.defaultProps = {
  checked: false,
  onChange: function onChange() {},
  styling: {},
  theme: Theme
};
export default withTheme(Filter);