exports.ColorSchemeProvider = c;
exports.useColorSchemeContext = v;

var React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = n(o);
    if (u && u.has(t)) return u.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var v = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (v && (v.get || v.set)) Object.defineProperty(l, f, v);
        else l[f] = t[f];
      }

    l.default = t;
    if (u) u.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native');

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

var u = React.createContext(null);
exports.ColorSchemeContext = u;
u.displayName = 'ColorSchemeContext';
var l = u;

function c(n) {
  var l = n.children,
    c = n.mode,
    f = ReactNative.useColorScheme();
  return React.default.createElement(
    u.Provider,
    {
      value: c || f || 'light',
    },
    l
  );
}

exports.DarkModeContext = l;
var f = c;

function v() {
  var n = React.useContext(u);
  return n || ReactNative.useColorScheme() || 'light';
}

exports.DarkModeProvider = f;
var p = v;
exports.useDarkModeContext = p;
