var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = O(n);
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
  module1567 = require('./1567'),
  module1568 = require('./1568'),
  module1569 = require('./1569'),
  module1570 = require('./1570'),
  module1578 = require('./1578'),
  s = ['children', 'style'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (O = function (t) {
    return t ? l : n;
  })(t);
}

var w = function (t) {
  var o = t.children,
    c = t.style,
    p = module52.default(t, s);
  return <ReactNative.View>{o}</ReactNative.View>;
};

w.Header = module1568.default;
w.Title = module1569.default;
w.Row = module1578.default;
w.Cell = module1567.default;
w.Pagination = module1570.default;
var b = ReactNative.StyleSheet.create({
    container: {
      width: '100%',
    },
  }),
  j = w;
exports.default = j;
