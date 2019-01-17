import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 50px;\n\n  .ant-menu-submenu-title{\n    padding: 0px 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { Menu } from 'antd';
import 'antd/lib/menu/style/css';
var SubMenuAnt = Menu.SubMenu;
var SubMenu = styled(SubMenuAnt)(_templateObject());
export default SubMenu;