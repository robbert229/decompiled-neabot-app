var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var c = p(n);
    if (c && c.has(t)) return c.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, f, l);
        else o[f] = t[f];
      }

    o.default = t;
    if (c) c.set(t, o);
    return o;
  })(require('react')),
  module1604 = require('./1604'),
  module1606 = require('./1606'),
  l = ['accessibilityLabel'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    c = new WeakMap();
  return (p = function (t) {
    return t ? c : n;
  })(t);
}

var b = function (t) {
  var p = t.accessibilityLabel,
    b = undefined === p ? 'Back' : p,
    s = module52.default(t, l);
  return <module1604.default />;
};

exports.AppbarBackAction = b;
b.displayName = 'Appbar.BackAction';
var s = b;
exports.default = s;
