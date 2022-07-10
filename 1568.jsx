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
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  module564 = require('./564'),
  ReactNative = require('react-native'),
  module1494 = require('./1494'),
  module1495 = require('./1495'),
  p = ['children', 'style', 'theme'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (y = function (t) {
    return t ? l : n;
  })(t);
}

var b = function (t) {
  var h = t.children,
    y = t.style,
    b = t.theme,
    v = module52.default(t, p),
    w = module564
      .default(b.dark ? module1494.white : module1494.black)
      .alpha(0.12)
      .rgb()
      .string();
  return <ReactNative.View>{h}</ReactNative.View>;
};

exports.DataTableHeader = b;
b.displayName = 'DataTable.Header';
var s = ReactNative.StyleSheet.create({
    header: {
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
      borderBottomWidth: 2 * ReactNative.StyleSheet.hairlineWidth,
    },
  }),
  v = module1495.withTheme(b);
exports.default = v;
