import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { withTheme } from 'styled-components';
import PaginationAnt from 'antd/lib/pagination';
import 'antd/lib/pagination/style/css';
import StyledPagination from './styledPagination';
import Theme from '../theme';

var Pagination = function Pagination(props) {
  return React.createElement(StyledPagination, {
    theme: _objectSpread({}, props.theme.pagination, props.styling)
  }, React.createElement(PaginationAnt, props));
};

Pagination.defaultProps = {
  theme: Theme,
  styling: {}
};
export default withTheme(Pagination);