import React from 'react';
import { Icon as IconAnt } from 'antd';
import 'antd/lib/icon/style/css';
import { PortfolioTile, StyledChildDiv, ValueB, ValueP } from './styledComponents';

var ValueHeader = function ValueHeader(props) {
  return React.createElement(PortfolioTile, null, React.createElement(IconAnt, {
    type: props.type,
    fill: props.color,
    style: {
      color: props.color,
      fontSize: '30px'
    },
    width: "30px",
    height: "30px"
  }), React.createElement(StyledChildDiv, null, React.createElement(ValueP, null, props.children), React.createElement(ValueB, {
    color: props.color
  }, "$", props.total)));
};

export default ValueHeader;