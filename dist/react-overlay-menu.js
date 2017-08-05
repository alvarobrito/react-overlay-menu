'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./react-overlay-menu.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayMenu = function OverlayMenu(_ref) {
  var open = _ref.open,
      children = _ref.children,
      right = _ref.right,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('overlay-menu', { 'is-right': right, 'is-open': open }) },
    _react2.default.createElement('div', {
      className: 'overlay-menu__overlay',
      onClick: onClose
    }),
    _react2.default.createElement(
      'div',
      {
        className: 'overlay-menu__wrap',
        onClick: function onClick(e) {
          return e.target.tagName.toLowerCase() === 'a' && onClose();
        }
      },
      children
    )
  );
};

OverlayMenu.propTypes = {
  open: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  right: _propTypes2.default.bool,
  onClose: _propTypes2.default.func
};

OverlayMenu.defaultProps = {
  right: false,
  open: false,
  onClose: undefined
};

exports.default = OverlayMenu;
