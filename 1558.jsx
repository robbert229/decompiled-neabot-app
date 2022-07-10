var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module564 = require('./564'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = s(n);
    if (l && l.has(t)) return l.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(f, u, c);
        else f[u] = t[u];
      }

    f.default = t;
    if (l) l.set(t, f);
    return f;
  })(require('react')),
  ReactNative = require('react-native'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  y = ['theme', 'alpha', 'family', 'style'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (s = function (t) {
    return t ? l : n;
  })(t);
}

var v = ReactNative.StyleSheet.create({
    text: {
      textAlign: 'left',
    },
  }),
  h = module1495.withTheme(function (t) {
    var p = t.theme,
      s = t.alpha,
      h = t.family,
      O = t.style,
      b = module52.default(t, y),
      j = module564.default(p.colors.text).alpha(s).rgb().string(),
      w = p.fonts[h],
      M = ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr';
    return <module1529.default />;
  });
exports.default = h;
