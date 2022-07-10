exports.default = function () {
  var t = module471.default(),
    o = React.useState(t.isFocused),
    c = module12.default(o, 2),
    l = c[0],
    s = c[1],
    p = t.isFocused();
  if (l !== p) s(p);
  React.useEffect(
    function () {
      var n = t.addListener('focus', function () {
          return s(true);
        }),
        u = t.addListener('blur', function () {
          return s(false);
        });
      return function () {
        n();
        u();
      };
    },
    [t]
  );
  React.useDebugValue(p);
  return p;
};

var module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, l, s);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  module471 = require('./471');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}
