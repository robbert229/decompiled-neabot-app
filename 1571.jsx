var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = h(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, c, u);
        else l[c] = t[c];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1532 = require('./1532'),
  module1525 = require('./1525'),
  module1572 = require('./1572'),
  module1495 = require('./1495'),
  y = ['icon', 'color', 'size', 'accessibilityLabel', 'disabled', 'onPress', 'animated', 'theme', 'style'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (h = function (t) {
    return t ? n : o;
  })(t);
}

var v = ReactNative.StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      margin: 6,
    },
    disabled: {
      opacity: 0.32,
    },
  }),
  w = module1495.withTheme(function (t) {
    var p = t.icon,
      h = t.color,
      w = t.size,
      O = undefined === w ? 24 : w,
      P = t.accessibilityLabel,
      j = t.disabled,
      _ = t.onPress,
      M = t.animated,
      S = undefined !== M && M,
      k = t.theme,
      z = t.style,
      C = module52.default(t, y),
      E = undefined !== h ? h : k.colors.text,
      L = module564.default(E).alpha(0.32).rgb().string(),
      T = S ? module1572.default : module1525.default,
      W = 1.5 * O;
    return (
      <module1532.default>
        <ReactNative.View>
          <T color={E} source={p} size={O} />
        </ReactNative.View>
      </module1532.default>
    );
  });
exports.default = w;
