import React from 'react';
import { PortfolioTile, StyledChildDiv, ValueB, ValueP } from './styledComponents';

var ValueHeader = function ValueHeader(props) {
  return React.createElement(PortfolioTile, null, React.createElement(StyledChildDiv, null, React.createElement(ValueP, null, "Total Portfolio Value:"), React.createElement(ValueB, null, "$", props.totalRevenue)));
};

export default ValueHeader;