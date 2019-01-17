import React from 'react';
import { Collapse } from 'antd';
import 'antd/lib/collapse/style/css';
import PortfolioRevenueItem from '../PortfolioRevenueItem';
import { EmptyP } from './styledComponents';
import RevenueHeader from './revenueHeader';
var Panel = Collapse.Panel;

function callback(key) {
  console.log(key); // eslint-disable-line
}

var TotalPortfolioRevenue = function TotalPortfolioRevenue(_ref) {
  var totalPortfolioRevenue = _ref.totalPortfolioRevenue,
      portfolioRevenueAssets = _ref.portfolioRevenueAssets;
  return React.createElement(Collapse, {
    onChange: callback
  }, React.createElement(Panel, {
    header: React.createElement(RevenueHeader, {
      totalRevenue: totalPortfolioRevenue
    }),
    key: "1"
  }, portfolioRevenueAssets.length === 0 && React.createElement(EmptyP, null, "You do not have any", React.createElement("br", null), "investments right now."), portfolioRevenueAssets.map(function (asset) {
    return React.createElement(PortfolioRevenueItem, {
      key: asset.assetID,
      assetID: asset.assetID,
      name: asset.name,
      monthlyRevenue: asset.monthlyRevenue,
      totalRevenue: asset.totalRevenue
    });
  })));
};

export default TotalPortfolioRevenue;