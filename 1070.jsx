exports.default = function (t) {
  var n = t.children;
  return (
    <module514.SafeAreaConsumer>
      {function (t) {
        return t ? n : <module514.SafeAreaProvider initialSafeAreaInsets={c}>{n}</module514.SafeAreaProvider>;
      }}
    </module514.SafeAreaConsumer>
  );
};

var module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = l(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
        else f[c] = t[c];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('react')),
  module514 = require('./514'),
  module415 = require('./415');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

var c = module11.default(
  {
    top: module415.getStatusBarHeight(true),
    bottom: module415.getBottomSpace(),
    right: 0,
    left: 0,
  },
  module514.initialWindowSafeAreaInsets
);
exports.initialSafeAreaInsets = c;
