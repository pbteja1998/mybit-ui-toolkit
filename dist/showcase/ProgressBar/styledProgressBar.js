import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .ant-progress-inner {\n        background-color: ", ";\n    }\n    .ant-progress-text {\n        color: ", ";\n    }\n    .ant-progress-success-bg, .ant-progress-bg {\n        background-color: ", ";\n    }\n    .ant-progress-status-success .ant-progress-bg {\n        background-color: ", ";\n    }\n    .ant-progress-status-exception .ant-progress-bg {\n        background-color: ", ";\n    }\n    .ant-progress-status-success .ant-progress-text {\n        color: ", ";\n    }\n    .ant-progress-status-exception .ant-progress-text {\n        color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
var StyledProgressBar = styled.div(_templateObject(), function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.progressColor;
}, function (props) {
  return props.theme.successColor;
}, function (props) {
  return props.theme.exceptionColor;
}, function (props) {
  return props.theme.successColor;
}, function (props) {
  return props.theme.exceptionColor;
});
export default StyledProgressBar;