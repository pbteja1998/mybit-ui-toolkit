import React from 'react';
import { PortfolioTile, StyledChildDiv, RevenueB, RevenueP } from './styledComponents';

var RevenueHeader = function RevenueHeader(props) {
  return React.createElement(PortfolioTile, null, React.createElement(StyledChildDiv, null, React.createElement(RevenueP, null, "Total Asset Revenue:"), React.createElement(RevenueB, null, "$", props.totalRevenue)));
};

export default RevenueHeader;