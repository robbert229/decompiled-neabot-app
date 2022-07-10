exports.default = function () {
  var t = React.useState(false),
    f = module12.default(t, 2),
    l = f[0],
    y = f[1];
  React.useEffect(function () {
    var t = function () {
        return y(true);
      },
      o = function () {
        return y(false);
      };

    if ('ios' === ReactNative.Platform.OS) {
      ReactNative.Keyboard.addListener('keyboardWillShow', t);
      ReactNative.Keyboard.addListener('keyboardWillHide', o);
    } else {
      ReactNative.Keyboard.addListener('keyboardDidShow', t);
      ReactNative.Keyboard.addListener('keyboardDidHide', o);
    }

    return function () {
      if ('ios' === ReactNative.Platform.OS) {
        ReactNative.Keyboard.removeListener('keyboardWillShow', t);
        ReactNative.Keyboard.removeListener('keyboardWillHide', o);
      } else {
        ReactNative.Keyboard.removeListener('keyboardDidShow', t);
        ReactNative.Keyboard.removeListener('keyboardDidHide', o);
      }
    };
  }, []);
  return l;
};

var module12 = require('./12'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = f(o);
    if (n && n.has(t)) return n.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var y in t)
      if ('default' !== y && Object.prototype.hasOwnProperty.call(t, y)) {
        var b = l ? Object.getOwnPropertyDescriptor(t, y) : null;
        if (b && (b.get || b.set)) Object.defineProperty(u, y, b);
        else u[y] = t[y];
      }

    u.default = t;
    if (n) n.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (f = function (t) {
    return t ? n : o;
  })(t);
}
