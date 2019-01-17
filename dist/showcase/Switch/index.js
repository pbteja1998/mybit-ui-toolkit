import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { Switch as SwitchAnt } from 'antd';
import 'antd/lib/switch/style/css';
import Theme from '../theme';
import Icon from '../Icon';
import StyledSwitch from './styledSwitch';

var Switch = function Switch(props) {
  return React.createElement(StyledSwitch, {
    theme: _objectSpread({}, Theme.switch, props.styling)
  }, React.createElement(SwitchAnt, {
    checkedChildren: React.createElement(Icon, {
      type: "check"
    }),
    unCheckedChildren: React.createElement(Icon, {
      type: "cross"
    }),
    checked: props.checked,
    size: props.size,
    onChange: props.onChange
  }));
};

Switch.defaultProps = {
  size: 'small',
  checked: false,
  styling: {}
};
export default Switch;