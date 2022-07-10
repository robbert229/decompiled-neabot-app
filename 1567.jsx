var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = y(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, o, c);
        else u[o] = t[o];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1529 = require('./1529'),
  module1532 = require('./1532'),
  p = ['children', 'style', 'numeric'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (y = function (t) {
    return t ? l : n;
  })(t);
}

var s = function (t) {
  var f = t.children,
    y = t.style,
    s = t.numeric,
    O = module52.default(t, p);
  return (
    <module1532.default>
      <module1529.default numberOfLines={1}>{f}</module1529.default>
    </module1532.default>
  );
};

s.displayName = 'DataTable.Cell';
var v = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    right: {
      justifyContent: 'flex-end',
    },
  }),
  O = s;
exports.default = O;
