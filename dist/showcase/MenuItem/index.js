import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 50px;\n  padding: 0px 0px;\n\n  a{\n    color: ", " !important;\n\n    &:hover{\n      color:", " !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { Menu } from 'antd';
import 'antd/lib/menu/style/css';
var MenuItem = styled(Menu.Item)(_templateObject(), function (props) {
  return props.styling ? props.styling.color : "inherit";
}
/*eslint-disable-line*/
, function (props) {
  return props.styling ? props.styling.itemSelectedColor : "inherit";
}
/*eslint-disable-line*/
);
export default MenuItem;