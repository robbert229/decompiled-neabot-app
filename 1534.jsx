var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, l, p);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1525 = require('./1525');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

var f = function (t) {
    var c = t.icon,
      f = t.color,
      p = t.style;
    return (
      <ReactNative.View style={[l.item, p]} pointerEvents="box-none">
        <module1525.default source={c} size={24} color={f} />
      </ReactNative.View>
    );
  },
  l = ReactNative.StyleSheet.create({
    item: {
      margin: 8,
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

f.displayName = 'List.Icon';
var p = f;
exports.default = p;
