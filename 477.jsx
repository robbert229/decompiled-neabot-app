exports.default = function (t, o) {
  var f = React.useRef(o);
  f.current = o;
  React.useEffect(function () {
    f.current = null;
  });
  return React.useRef(function (o) {
    var c = f.current;
    if (null === c) throw new Error('The returned component must be rendered in the same render phase as the hook.');
    return <t />;
  }).current;
};

var module11 = require('./11'),
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
        var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, l, p);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}
