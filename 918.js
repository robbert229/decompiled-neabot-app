var module917 = (function (t, u) {
  if (!u && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = n(u);
  if (o && o.has(t)) return o.get(t);
  var f = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var p in t)
    if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
      var l = c ? Object.getOwnPropertyDescriptor(t, p) : null;
      if (l && (l.get || l.set)) Object.defineProperty(f, p, l);
      else f[p] = t[p];
    }

  f.default = t;
  if (o) o.set(t, f);
  return f;
})(require('./917'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    o = new WeakMap();
  return (n = function (t) {
    return t ? o : u;
  })(t);
}

exports.setLanguage = function (n, u) {
  return {
    type: module917.USER_SET_LANGUAGE,
    payload: {
      systemLanguage: n,
      userSelected: u,
    },
  };
};
