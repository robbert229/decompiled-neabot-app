var n,
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var c = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(c, s, u);
        else c[s] = t[s];
      }

    c.default = t;
    if (o) o.set(t, c);
    return c;
  })(require('react')),
  ReactNative = require('react-native'),
  u = ['name', 'color', 'size'];

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

try {
  n = require('./1506').default;
} catch (t) {
  var p = false;

  n = function (n) {
    var f = n.name,
      v = n.color,
      b = n.size,
      h = module52.default(n, u);

    if (!p) {
      if (!/(Cannot find module|Module not found|Cannot resolve module)/.test(t.message)) console.error(t);
      console.warn(
        "Tried to use the icon '" + f + "' in a component from 'react-native-paper', but 'react-native-vector-icons/MaterialCommunityIcons' could not be loaded.",
        "To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/icons.html."
      );
      p = true;
    }

    return <ReactNative.Text>□</ReactNative.Text>;
  };
}

var v =
  'web' === ReactNative.Platform.OS
    ? {
        role: 'img',
        focusable: false,
      }
    : {
        accessibilityElementsHidden: true,
        importantForAccessibility: 'no-hide-descendants',
      };
exports.accessibilityProps = v;

var y = ReactNative.StyleSheet.create({
    icon: {
      backgroundColor: 'transparent',
    },
  }),
  b = function (t) {
    var c = t.name,
      s = t.color,
      u = t.size,
      f = t.direction,
      p = t.allowFontScaling;
    return <n />;
  };

exports.default = b;
