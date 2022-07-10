var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = y(o);
    if (n && n.has(t)) return n.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (n) n.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1504 = require('./1504'),
  module1505 = require('./1505'),
  module1495 = require('./1495'),
  p = ['source', 'color', 'size', 'theme'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (y = function (t) {
    return t ? n : o;
  })(t);
}

var b = function (t) {
    return (
      ('object' == typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, 'uri') && 'string' == typeof t.uri) ||
      'number' == typeof t ||
      ('web' === ReactNative.Platform.OS && 'string' == typeof t && (t.startsWith('data:image') || /\.(bmp|jpg|jpeg|png|gif|svg)$/.test(t)))
    );
  },
  j = function (t) {
    return 'object' == typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, 'uri') && 'string' == typeof t.uri ? t.uri : t;
  };

exports.isValidIcon = function (t) {
  return 'string' == typeof t || 'function' == typeof t || b(t);
};

exports.isEqualIcon = function (t, o) {
  return t === o || j(t) === j(o);
};

var O = module1495.withTheme(function (t) {
  var s = t.source,
    y = t.color,
    j = t.size,
    O = t.theme,
    v = module52.default(t, p),
    h = 'object' == typeof s && s.direction && s.source ? ('auto' === s.direction ? (ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr') : s.direction) : null,
    w = 'object' == typeof s && s.direction && s.source ? s.source : s,
    P = y || O.colors.text;
  return b(w) ? (
    <ReactNative.Image />
  ) : 'string' == typeof w ? (
    <module1504.Consumer>
      {function (t) {
        return t.icon({
          name: w,
          color: P,
          size: j,
          direction: h,
        });
      }}
    </module1504.Consumer>
  ) : 'function' == typeof w ? (
    w({
      color: P,
      size: j,
      direction: h,
    })
  ) : null;
});
exports.default = O;
