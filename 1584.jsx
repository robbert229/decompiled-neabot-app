var module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(l, c, p);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

var u = function (t) {
  return <ReactNative.View>{t.children}</ReactNative.View>;
};

u.displayName = 'Dialog.ScrollArea';
var c = ReactNative.StyleSheet.create({
    container: {
      borderColor: 'rgba(0, 0, 0, .12)',
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      paddingHorizontal: 24,
      flexGrow: 1,
      flexShrink: 1,
    },
  }),
  p = u;
exports.default = p;
