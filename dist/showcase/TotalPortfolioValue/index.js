import React from 'react';
import { Collapse } from 'antd';
import 'antd/lib/collapse/style/css';
import PortfolioValueItem from '../PortfolioValueItem';
import { EmptyP } from './styledComponents';
import ValueHeader from './valueHeader';
var Panel = Collapse.Panel;

function callback(key) {
  console.log(key); //eslint-disable-line
}

var TotalPortfolioValue = function TotalPortfolioValue(_ref) {
  var totalPortfolioValue = _ref.totalPortfolioValue,
      portfolioValueAssets = _ref.portfolioValueAssets;
  return React.createElement(Collapse, {
    onChange: callback
  }, React.createElement(Panel, {
    header: React.createElement(ValueHeader, {
      totalRevenue: totalPortfolioValue
    }),
    key: "1"
  }, portfolioValueAssets.length === 0 && React.createElement(EmptyP, null, "You do not have any", React.createElement("br", null), "investments right now."), portfolioValueAssets.map(function (asset) {
    return React.createElement(PortfolioValueItem, {
      key: asset.assetID,
      assetID: asset.assetID,
      name: asset.name,
      ownership: asset.ownership,
      value: asset.value
    });
  })));
};

export default TotalPortfolioValue;