import React from 'react';
import StyledSwitchWithLabel from './StyledSwitchWithLabel';
import Switch from '../../Switch';
import StyledLabelForSwitch from './StyledLabelForSwitch';

var SwitchWithLabel = function SwitchWithLabel(_ref) {
  var size = _ref.size,
      checked = _ref.checked,
      handleClick = _ref.handleClick,
      stylingSwitch = _ref.stylingSwitch,
      styling = _ref.styling,
      onChange = _ref.onChange,
      label = _ref.label;
  return React.createElement(StyledSwitchWithLabel, {
    styling: stylingSwitch
  }, React.createElement(Switch, {
    size: "small",
    checked: checked,
    styling: styling,
    onChange: function onChange(newchecked) {
      return handleClick(newchecked);
    }
  }), React.createElement(StyledLabelForSwitch, null, label));
};

export default SwitchWithLabel;