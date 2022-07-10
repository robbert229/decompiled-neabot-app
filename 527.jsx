exports.default = function (t) {
  var c = t.children,
    v = module52.default(t, l);
  return (
    <p.Consumer>
      {function (t) {
        return t ? (
          <ReactNative.View>{c}</ReactNative.View>
        ) : (
          <p.Provider value>
            <f>{c}</f>
          </p.Provider>
        );
      }}
    </p.Consumer>
  );
};

var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = c(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, f, p);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  l = ['children'];

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (c = function (t) {
    return t ? u : n;
  })(t);
}

var f = ReactNative.requireNativeComponent('GestureHandlerRootView'),
  p = React.createContext(false);
