import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  padding: 0px;\n  position: relative;\n  width: 325px;\n  > .container {\n    width: 90%;\n    height: 298px;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n    margin: 0 auto;\n    > .image-holder {\n        background-size: cover;\n        background-position: center;\n        height: 196px;\n        position: relative;\n        background-image: ", ";\n        > .image-holder-gradient {\n          position: relative;\n          top: 0px;\n          height: 196px;\n          width: 100%;\n          background-image: linear-gradient(to left, #0b3f9c, #0083FF) !important;\n          z-index: -1;\n        };\n        > .image-holder-location-icon {\n          position: absolute;\n          bottom: 18px;\n          left: 21px;\n          z-index: 1;\n        };\n        > .image-holder-name {\n          position: absolute;\n          bottom: 40px;\n          font-size: 18px;\n          color: #ffffff;\n          left: 21px;\n          z-index: 1;\n          font-weight: bold;\n        };\n        > .image-holder-location {\n          position: absolute;\n          bottom: 2px;\n          font-size: 14px;\n          color: #ffffff;\n          padding-left: 42px;\n          z-index: 1;\n        }\n    };\n\n    > .image-holder:after {\n        content: ' ';\n        position: absolute;\n        top: 0px;\n        width: 100%;\n        height: 100%;\n        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.35), transparent 80px, transparent);\n    };\n\n    > .details {\n        padding: 5px 10px 0px 10px;\n        > .details-funded {\n            width: max-content;\n            float: left;\n            font-size: 14px;\n            padding: 0 3px;\n            margin: 0;\n        };\n        > .details-goal {\n            text-align: right;\n            font-size: 14px;\n            padding: 0 5px;\n            margin: 0;\n        };\n        > .center-button {\n            width: 100%;\n            text-align: center;\n            > a > .details-contribute {\n                height: 32px;\n                font-size: 14px;\n                width: 126px;\n                background-color: #2E58DA;\n                font-weight: bold;\n                color: white;\n                border: none;\n                cursor: pointer;\n                margin-top: 10px;\n            };\n        };\n    };\n  };\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
export default styled.div(_templateObject(), function (props) {
  return "url(".concat(props.image, ")");
});