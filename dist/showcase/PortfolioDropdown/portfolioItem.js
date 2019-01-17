import React from 'react';
import { Icon as IconAnt } from 'antd';
import 'antd/lib/icon/style/css';
import { PortfolioTile, StyledChildDiv, ValueB, ValueP } from './styledComponents';

var PortfolioItem = function PortfolioItem(_ref) {
  var id = _ref.id,
      name = _ref.name,
      data = _ref.data,
      icon = _ref.icon,
      color = _ref.color;
  return React.createElement(PortfolioTile, {
    key: id
  }, React.createElement(IconAnt, {
    type: icon,
    fill: color,
    style: {
      color: color,
      fontSize: '30px'
    },
    width: "30px",
    height: "30px"
  }), React.createElement(StyledChildDiv, null, React.createElement(ValueP, null, name), Object.keys(data).map(function (key) {
    return React.createElement(ValueP, {
      key: key
    }, key, ": ", React.createElement(ValueB, null, data[key]));
  })));
};

export default PortfolioItem;