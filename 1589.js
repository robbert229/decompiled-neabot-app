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
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  c = ['style', 'theme'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (p = function (t) {
    return t ? l : n;
  })(t);
}

var s = ReactNative.StyleSheet.create({
    text: {
      textAlign: 'left',
    },
  }),
  y = module1495.withTheme(function (t) {
    var f = t.style,
      p = t.theme,
      y = module52.default(t, c),
      v = ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr';
    return React.createElement(
      ReactNative.Animated.Text,
      module11.default({}, y, {
        style: [
          s.text,
          module11.default({}, p.fonts.regular, {
            color: p.colors.text,
            writingDirection: v,
          }),
          f,
        ],
      })
    );
  });
exports.default = y;
