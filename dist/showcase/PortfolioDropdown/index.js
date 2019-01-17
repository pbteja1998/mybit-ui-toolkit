import React from 'react';
import { Collapse } from 'antd';
import 'antd/lib/collapse/style/css';
import PortfolioValueItem from './portfolioItem';
import { EmptyP } from './styledComponents';
import DropdownHeader from './dropdownHeader';
var Panel = Collapse.Panel;

var PortfolioDropdown = function PortfolioDropdown(_ref) {
  var name = _ref.name,
      total = _ref.total,
      icon = _ref.icon,
      color = _ref.color,
      portfolioData = _ref.portfolioData;
  return React.createElement(Collapse, null, React.createElement(Panel, {
    key: "1",
    header: React.createElement(DropdownHeader, {
      type: icon,
      color: color,
      total: total
    }, name)
  }, portfolioData.length === 0 && React.createElement(EmptyP, null, "You do not have any", React.createElement("br", null), "investments right now."), portfolioData.length > 0 && portfolioData.map(function (asset) {
    return React.createElement(PortfolioValueItem, {
      key: asset.assetID,
      id: "".concat(asset.assetID),
      color: color,
      icon: icon,
      assetID: asset.assetID,
      name: asset.name,
      data: asset.data
    });
  })));
};

export default PortfolioDropdown;