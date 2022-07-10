var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, c, f);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1525 = require('./1525'),
  module1495 = require('./1495'),
  module1494 = require('./1494'),
  module1526 = require('./1526'),
  y = ['icon', 'size', 'style', 'theme'],
  v = ['backgroundColor'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

var h = function (t) {
  var f,
    b = t.icon,
    h = t.size,
    O = undefined === h ? 64 : h,
    j = t.style,
    k = t.theme,
    P = module52.default(t, y),
    _ = ReactNative.StyleSheet.flatten(j) || {},
    M = _.backgroundColor,
    C = undefined === M ? k.colors.primary : M,
    S = module52.default(_, v),
    z = null != (f = P.color) ? f : module1526.default(C, module1494.white, 'rgba(0, 0, 0, .54)');

  return (
    <ReactNative.View>
      <module1525.default source={b} color={z} size={0.6 * O} />
    </ReactNative.View>
  );
};

h.displayName = 'Avatar.Icon';
var w = ReactNative.StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  O = module1495.withTheme(h);
exports.default = O;
