exports.default = function (t) {
  var f = t.borderless,
    p = undefined !== f && f,
    b = t.pressColor,
    v = undefined === b ? 'rgba(0, 0, 0, .32)' : b,
    y = t.style,
    O = t.children,
    h = module52.default(t, c);
  return 'android' === ReactNative.Platform.OS && ReactNative.Platform.Version >= s ? (
    <ReactNative.TouchableNativeFeedback>
      <ReactNative.View style={y}>
        <O />
      </ReactNative.View>
    </ReactNative.TouchableNativeFeedback>
  ) : (
    <ReactNative.TouchableOpacity>{O}</ReactNative.TouchableOpacity>
  );
};

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
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
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  c = ['borderless', 'pressColor', 'style', 'children'];

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

var s = 21;
