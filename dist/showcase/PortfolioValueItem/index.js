import React from 'react';
import { PortfolioTile, StyledChildDiv, ValueB, ValueP, PortfolioTileImg } from './styledComponents';
import PieChart from './chart-pie.png';

var PortfolioValueItem = function PortfolioValueItem(_ref) {
  var assetID = _ref.assetID,
      name = _ref.name,
      ownership = _ref.ownership,
      value = _ref.value;
  return React.createElement(PortfolioTile, {
    key: assetID
  }, React.createElement(PortfolioTileImg, {
    src: PieChart,
    alt: "Pie chart"
  }), React.createElement(StyledChildDiv, null, React.createElement(ValueP, null, name), React.createElement(ValueP, null, "Ownership: ", React.createElement(ValueB, null, ownership, "%")), React.createElement(ValueP, null, "Value: ", React.createElement(ValueB, null, "$", value))));
};

export default PortfolioValueItem;