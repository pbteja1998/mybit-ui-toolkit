import React from 'react';
import StyledCircleIndicator from './styledCircleIndicator';
import StyledSpan from './styledSpan';
import StyledConnectionStatus from './styledConnectionStatus';

var ConnectionStatus = function ConnectionStatus(props) {
  var network;
  var circleColor;
  var toRender = '';

  switch (props.network) {
    case 'main':
      {
        network = 'Mainnet';
        circleColor = 'green';
        break;
      }

    case 'ropsten':
      {
        network = 'Testnet';
        circleColor = 'red';
        break;
      }

    default:
      {
        network = 'unknown network';
        circleColor = 'gray';
        break;
      }
  }

  toRender = props.loading ? 'Loading network...' : "Connected to ".concat(network);
  return React.createElement(StyledConnectionStatus, null, React.createElement(StyledCircleIndicator, {
    circleColor: circleColor
  }), React.createElement(StyledSpan, null, toRender));
};

ConnectionStatus.defaultProps = {
  network: undefined,
  loading: false
};
export default ConnectionStatus;