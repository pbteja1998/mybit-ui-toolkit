import React from 'react';
import { PortfolioTile, StyledChildDiv, RevenueB, RevenueP, PortfolioTileImg } from './styledComponents';
import LineChart from './chart-line.png';

var PortfolioRevenueItem = function PortfolioRevenueItem(_ref) {
  var assetID = _ref.assetID,
      name = _ref.name,
      totalRevenue = _ref.totalRevenue,
      monthlyRevenue = _ref.monthlyRevenue;
  return React.createElement(PortfolioTile, {
    key: assetID
  }, React.createElement(PortfolioTileImg, {
    src: LineChart,
    alt: "Line chart"
  }), React.createElement(StyledChildDiv, null, React.createElement(RevenueP, null, name), React.createElement(RevenueP, null, "Total Revenue: ", React.createElement(RevenueB, null, "$", totalRevenue)), React.createElement(RevenueP, null, "Monthly Revenue: ", React.createElement(RevenueB, null, "$", monthlyRevenue))));
};

export default PortfolioRevenueItem;