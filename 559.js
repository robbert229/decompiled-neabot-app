exports.default = function (t) {
  var s = t.style,
    p = module52.default(t, c),
    y = module421.useTheme().colors;
  return React.createElement(
    ReactNative.Animated.View,
    module11.default(
      {
        style: [
          h.container,
          {
            backgroundColor: y.card,
            borderBottomColor: y.border,
            shadowColor: y.border,
          },
          s,
        ],
      },
      p
    )
  );
};

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = s(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  c = ['style'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (s = function (t) {
    return t ? n : o;
  })(t);
}

var h = ReactNative.StyleSheet.create({
  container: module11.default(
    {
      flex: 1,
    },
    ReactNative.Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: ReactNative.StyleSheet.hairlineWidth,
        },
      },
      default: {
        borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      },
    })
  ),
});
