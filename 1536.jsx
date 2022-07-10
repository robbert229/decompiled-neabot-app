var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = p(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1537 = require('./1537'),
  module1495 = require('./1495'),
  y = ['children', 'title', 'titleStyle', 'style'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (p = function (t) {
    return t ? l : n;
  })(t);
}

var s = function (t) {
  var c = t.children,
    p = t.title,
    s = t.titleStyle,
    O = t.style,
    b = module52.default(t, y);
  return (
    <ReactNative.View>
      {p ? <module1537.default style={s}>{p}</module1537.default> : null}
      {c}
    </ReactNative.View>
  );
};

s.displayName = 'List.Section';
var v = ReactNative.StyleSheet.create({
    container: {
      marginVertical: 8,
    },
  }),
  O = module1495.withTheme(s);
exports.default = O;
