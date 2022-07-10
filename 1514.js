var t = 9007199254740991,
  n = '[object Arguments]',
  o = '[object Function]',
  c = '[object GeneratorFunction]',
  u = '[object Symbol]',
  l = 'object' == typeof globals && globals && globals.Object === Object && globals,
  f = 'object' == typeof self && self && self.Object === Object && self,
  b = l || f || Function('return this')();

function s(t, n, o) {
  switch (o.length) {
    case 0:
      return t.call(n);

    case 1:
      return t.call(n, o[0]);

    case 2:
      return t.call(n, o[0], o[1]);

    case 3:
      return t.call(n, o[0], o[1], o[2]);
  }

  return t.apply(n, o);
}

function y(t, n) {
  for (var o = -1, c = t ? t.length : 0, u = Array(c); ++o < c; ) u[o] = n(t[o], o, t);

  return u;
}

function v(t, n) {
  for (var o = -1, c = n.length, u = t.length; ++o < c; ) t[u + o] = n[o];

  return t;
}

var p = Object.prototype,
  h = p.hasOwnProperty,
  j = p.toString,
  O = b.Symbol,
  A = p.propertyIsEnumerable,
  S = O ? O.isConcatSpreadable : undefined,
  F = Math.max;

function w(t, n, o, c, u) {
  var l = -1,
    f = t.length;

  for (o || (o = C), u || (u = []); ++l < f; ) {
    var b = t[l];
    if (n > 0 && o(b)) n > 1 ? w(b, n - 1, o, c, u) : v(u, b);
    else if (!c) u[u.length] = b;
  }

  return u;
}

function x(t, n) {
  return _((t = Object(t)), n, function (n, o) {
    return o in t;
  });
}

function _(t, n, o) {
  for (var c = -1, u = n.length, l = {}; ++c < u; ) {
    var f = n[c],
      b = t[f];
    if (o(b, f)) l[f] = b;
  }

  return l;
}

function C(t) {
  return I(t) || G(t) || !!(S && t && t[S]);
}

function E(t) {
  if ('string' == typeof t || D(t)) return t;
  var n = t + '';
  return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
}

function G(t) {
  return P(t) && h.call(t, 'callee') && (!A.call(t, 'callee') || j.call(t) == n);
}

var I = Array.isArray;

function M(t) {
  return null != t && q(t.length) && !k(t);
}

function P(t) {
  return B(t) && M(t);
}

function k(t) {
  var n = z(t) ? j.call(t) : '';
  return n == o || n == c;
}

function q(n) {
  return 'number' == typeof n && n > -1 && n % 1 == 0 && n <= t;
}

function z(t) {
  var n = typeof t;
  return !!t && ('object' == n || 'function' == n);
}

function B(t) {
  return !!t && 'object' == typeof t;
}

function D(t) {
  return 'symbol' == typeof t || (B(t) && j.call(t) == u);
}

var H = function (t, n) {
    return null == t ? {} : x(t, y(w(n, 1), E));
  },
  J = F(undefined === J ? H.length - 1 : J, 0),
  K = function () {
    for (var t = arguments, n = -1, o = F(t.length - J, 0), c = Array(o); ++n < o; ) c[n] = t[J + n];

    n = -1;

    for (var u = Array(J + 1); ++n < J; ) u[n] = t[n];

    u[J] = c;
    return s(H, this, u);
  };

module.exports = K;
