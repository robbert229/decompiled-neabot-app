exports.default = function (t) {
  var u = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    l = React.forwardRef(function (l, p) {
      var s = Object.keys(l).reduce(function (t, n) {
          var u = c;
          if (u.includes(n)) t[n] = l[n];
          return t;
        }, module11.default({}, u)),
        v = React.useRef(),
        y = React.useRef();
      React.useImperativeHandle(
        p,
        function () {
          var t = y.current;

          if (v.current && t) {
            v.current.handlerTag = t.handlerTag;
            return v.current;
          } else return null;
        },
        [v, y]
      );
      return (
        <module534.NativeViewGestureHandler>
          <t />
        </module534.NativeViewGestureHandler>
      );
    });
  l.displayName = t.displayName || 'ComponentWrapper';
  return l;
};

var module11 = require('./11'),
  module20 = require('./20'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = l(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = o ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
        else f[c] = t[c];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  module534 = require('./534');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (l = function (t) {
    return t ? u : n;
  })(t);
}

var c = [].concat(module20.default(module534.nativeViewProps), ['onGestureHandlerEvent', 'onGestureHandlerStateChange']);
