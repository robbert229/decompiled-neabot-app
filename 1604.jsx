var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  module564 = require('./564'),
  module1494 = require('./1494'),
  module1571 = require('./1571'),
  s = ['size', 'color', 'icon', 'disabled', 'onPress', 'accessibilityLabel'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var b = function (t) {
  var p = t.size,
    b = undefined === p ? 24 : p,
    v = t.color,
    y = undefined === v ? module564.default(module1494.black).alpha(0.54).rgb().string() : v,
    O = t.icon,
    P = t.disabled,
    j = t.onPress,
    A = t.accessibilityLabel,
    _ = module52.default(t, s);

  return <module1571.default />;
};

exports.AppbarAction = b;
b.displayName = 'Appbar.Action';
var v = b;
exports.default = v;
