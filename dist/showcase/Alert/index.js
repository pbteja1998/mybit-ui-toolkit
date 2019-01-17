import React from 'react';
import Alert from 'antd/lib/alert';
import 'antd/lib/alert/style/css';
import StyledAlert from './styledAlert';

var AlertMessage = function AlertMessage(props) {
  return React.createElement(StyledAlert, null, React.createElement(Alert, {
    type: props.type,
    message: props.message,
    onClose: props.handleAlertClosed,
    showIcon: true,
    closable: true
  }));
};

AlertMessage.defaultProps = {
  type: 'info'
};
export default AlertMessage;