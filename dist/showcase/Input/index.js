import React from 'react';
import InputAnt from 'antd/lib/input';
import InputNumberAnt from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';
import 'antd/lib/input/style/css';
import Img from '../Img';
import Tooltip from '../Tooltip';
import QuestionMark from './questionMark.svg';
import StyledInput from './styledInput';
import StyledImage from './styledImage';

var Input = function Input(props) {
  var toRender = [];

  if (props.hasTooltip) {
    var tooltip = React.createElement(Tooltip, {
      key: props.tooltipTitle,
      title: props.tooltipTitle,
      arrowPointAtCenter: true,
      placement: "topLeft"
    }, React.createElement(StyledImage, null, React.createElement(Img, {
      src: QuestionMark,
      alt: "Hover for information"
    })));
    toRender.push(tooltip);
  }

  if (props.type === 'number') {
    var numberInput = React.createElement(InputNumberAnt, {
      key: props.placeholder,
      placeholder: props.placeholder,
      size: props.size,
      value: props.value,
      onChange: props.onChange,
      onPressEnter: props.onEnterPressed,
      min: props.min
    });
    toRender.push(numberInput);
  } else {
    var defaultInput = React.createElement(InputAnt, {
      key: props.placeholder,
      placeholder: props.placeholder,
      size: props.size,
      value: props.value,
      onChange: props.onChange,
      onPressEnter: props.onEnterPressed
    });
    toRender.push(defaultInput);
  }

  return React.createElement(StyledInput, null, toRender);
};

Input.defaultProps = {
  tooltipTitle: '',
  placeholder: '',
  hasTooltip: false,
  type: 'text',
  size: 'default',
  min: -Infinity,
  value: '',
  onChange: function onChange() {},
  onEnterPressed: function onEnterPressed() {}
};
export default Input;