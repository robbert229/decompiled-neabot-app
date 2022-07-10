var module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module533 = require('./533');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

var c = module533.default(ReactNative.ScrollView, {
  disallowInterruption: true,
  shouldCancelWhenOutside: false,
});
exports.ScrollView = c;
var p = module533.default(ReactNative.Switch, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: true,
  disallowInterruption: true,
});
exports.Switch = p;
var s = module533.default(ReactNative.TextInput);
exports.TextInput = s;
var w = module533.default(ReactNative.DrawerLayoutAndroid, {
  disallowInterruption: true,
});
exports.DrawerLayoutAndroid = w;
w.positions = {
  Left: 'left',
  Right: 'right',
};
var v = React.forwardRef(function (t, l) {
  return <ReactNative.FlatList />;
});
exports.FlatList = v;
