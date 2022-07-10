var n = {
  configure: true,
  fetch: true,
  addEventListener: true,
  useNetInfo: true,
};
exports.configure = b;
exports.fetch = j;
exports.addEventListener = w;
exports.useNetInfo = h;

var module12 = require('./12'),
  module11 = require('./11'),
  React = require('react'),
  module1189 = require('./1189'),
  module1190 = require('./1190'),
  module1195 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = p(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = o ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(f, c, l);
        else f[c] = t[c];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./1195'));

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

Object.keys(module1195).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(n, t) ||
      (t in exports && exports[t] === module1195[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module1195[t];
        },
      });
});

var v = module1189.default,
  y = null,
  O = function () {
    return new module1190.default(v);
  };

function b(t) {
  v = module11.default({}, module1189.default, t);

  if (y) {
    y.tearDown();
    y = O();
  }
}

function j(t) {
  if (!y) y = O();
  return y.latest(t);
}

function w(t) {
  if (!y) y = O();
  y.add(t);
  return function () {
    if (y) y.remove(t);
  };
}

function h(t) {
  if (t) b(t);
  var n = React.useState({
      type: module1195.NetInfoStateType.unknown,
      isConnected: false,
      isInternetReachable: false,
      details: null,
    }),
    f = module12.default(n, 2),
    c = f[0],
    l = f[1];
  React.useEffect(function () {
    return w(l);
  }, []);
  return c;
}

var P = {
  configure: b,
  fetch: j,
  addEventListener: w,
  useNetInfo: h,
};
exports.default = P;
