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
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  u = ['index', 'total', 'siblings', 'style'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var c = function (t) {
  var p,
    c,
    y,
    v = t.index,
    b = t.total,
    O = t.siblings,
    w = t.style,
    h = module52.default(t, u),
    j = 'withTheme(CardCover)',
    P = 'withTheme(CardTitle)';

  if ('number' == typeof v && O) {
    c = O[v - 1];
    y = O[v + 1];
  }

  if ((c === j && y === j) || (c === P && y === P) || 1 === b) p = s.only;
  else if (0 === v) p = y === j || y === P ? s.only : s.first;
  else if ('number' == typeof b && v === b - 1) p = c === j || c === P ? s.only : s.last;
  else if (c === j || c === P) p = s.first;
  else if (!(y !== j && y !== P)) p = s.last;
  return <ReactNative.View />;
};

c.displayName = 'Card.Content';
var s = ReactNative.StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    first: {
      paddingTop: 16,
    },
    last: {
      paddingBottom: 16,
    },
    only: {
      paddingVertical: 16,
    },
  }),
  y = c;
exports.default = y;
