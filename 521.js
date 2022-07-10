exports.PanGestureHandler = function (t) {
  var l = React.useRef(null);
  return React.createElement(
    module546.default.Provider,
    {
      value: l,
    },
    React.createElement(
      module522.PanGestureHandler,
      module11.default({}, t, {
        ref: l,
      })
    )
  );
};

Object.defineProperty(exports, 'GestureHandlerRootView', {
  enumerable: true,
  get: function () {
    return module522.GestureHandlerRootView;
  },
});
Object.defineProperty(exports, 'GestureState', {
  enumerable: true,
  get: function () {
    return module522.State;
  },
});
Object.defineProperty(exports, 'PanGestureHandlerGestureEvent', {
  enumerable: true,
  get: function () {
    return module522.PanGestureHandlerGestureEvent;
  },
});

var module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = l(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, c, p);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module522 = require('./522'),
  module546 = require('./546');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (l = function (t) {
    return t ? u : n;
  })(t);
}
