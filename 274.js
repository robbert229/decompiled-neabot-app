var module83 = require('./83');

!(function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var f = n(o);
  if (f && f.has(t)) return f.get(t);
  var u = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
      else u[c] = t[c];
    }

  u.default = t;
  if (f) f.set(t, u);
})(require('react'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    f = new WeakMap();
  return (n = function (t) {
    return t ? f : o;
  })(t);
}

var f = module83.default({
  supportedCommands: ['flashScrollIndicators', 'scrollTo', 'scrollToEnd', 'zoomToRect'],
});
exports.default = f;
