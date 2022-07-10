var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = s(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, c, f);
        else o[c] = t[c];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1559 = require('./1559'),
  module1495 = require('./1495'),
  p = ['children', 'theme', 'style'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (s = function (t) {
    return t ? l : n;
  })(t);
}

var y = function (t) {
  var u = t.children,
    f = t.theme,
    s = t.style,
    y = module52.default(t, p);
  return <module1559.default>{u}</module1559.default>;
};

exports.DialogTitle = y;
y.displayName = 'Dialog.Title';
var v = ReactNative.StyleSheet.create({
    text: {
      marginTop: 22,
      marginBottom: 18,
      marginHorizontal: 24,
    },
  }),
  h = module1495.withTheme(y);
exports.default = h;
