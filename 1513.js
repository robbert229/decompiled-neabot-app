var t = 200,
  n = '__lodash_hash_undefined__',
  o = 9007199254740991,
  u = '[object Arguments]',
  c = '[object Function]',
  f = '[object GeneratorFunction]',
  l = '[object Symbol]',
  s = /^\[object .+?Constructor\]$/,
  h = /^(?:0|[1-9]\d*)$/,
  p = 'object' == typeof globals && globals && globals.Object === Object && globals,
  _ = 'object' == typeof self && self && self.Object === Object && self,
  y = p || _ || Function('return this')();

function v(t, n, o) {
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

function b(t, n) {
  return !!(t ? t.length : 0) && A(t, n, 0) > -1;
}

function j(t, n, o) {
  for (var u = -1, c = t ? t.length : 0; ++u < c; ) if (o(n, t[u])) return true;

  return false;
}

function O(t, n) {
  for (var o = -1, u = t ? t.length : 0, c = Array(u); ++o < u; ) c[o] = n(t[o], o, t);

  return c;
}

function w(t, n) {
  for (var o = -1, u = n.length, c = t.length; ++o < u; ) t[c + o] = n[o];

  return t;
}

function S(t, n, o, u) {
  for (var c = t.length, f = o + (u ? 1 : -1); u ? f-- : ++f < c; ) if (n(t[f], f, t)) return f;

  return -1;
}

function A(t, n, o) {
  if (n != n) return S(t, $, o);

  for (var u = o - 1, c = t.length; ++u < c; ) if (t[u] === n) return u;

  return -1;
}

function $(t) {
  return t != t;
}

function P(t, n) {
  for (var o = -1, u = Array(t); ++o < t; ) u[o] = n(o);

  return u;
}

function x(t, n) {
  return t.has(n);
}

function F(t, n) {
  return null == t ? undefined : t[n];
}

function E(t) {
  var n = false;
  if (null != t && 'function' != typeof t.toString)
    try {
      n = !!(t + '');
    } catch (t) {}
  return n;
}

function k(t, n) {
  return function (o) {
    return t(n(o));
  };
}

var C,
  I = Array.prototype,
  M = Function.prototype,
  R = Object.prototype,
  G = y['__core-js_shared__'],
  T = (C = /[^.]+$/.exec((G && G.keys && G.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + C : '',
  q = M.toString,
  z = R.hasOwnProperty,
  B = R.toString,
  D = RegExp(
    '^' +
      q
        .call(z)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  ),
  H = y.Symbol,
  J = k(Object.getPrototypeOf, Object),
  K = R.propertyIsEnumerable,
  L = I.splice,
  N = H ? H.isConcatSpreadable : undefined,
  Q = Object.getOwnPropertySymbols,
  U = Math.max,
  V = ht(y, 'Map'),
  W = ht(Object, 'create');

function X(t) {
  var n = -1,
    o = t ? t.length : 0;

  for (this.clear(); ++n < o; ) {
    var u = t[n];
    this.set(u[0], u[1]);
  }
}

function Y(t) {
  var n = -1,
    o = t ? t.length : 0;

  for (this.clear(); ++n < o; ) {
    var u = t[n];
    this.set(u[0], u[1]);
  }
}

function Z(t) {
  var n = -1,
    o = t ? t.length : 0;

  for (this.clear(); ++n < o; ) {
    var u = t[n];
    this.set(u[0], u[1]);
  }
}

function tt(t) {
  var n = -1,
    o = t ? t.length : 0;

  for (this.__data__ = new Z(); ++n < o; ) this.add(t[n]);
}

function rt(t, n) {
  var o = Ot(t) || jt(t) ? P(t.length, String) : [],
    u = o.length,
    c = !!u;

  for (var f in t) (!n && !z.call(t, f)) || (c && ('length' == f || vt(f, u))) || o.push(f);

  return o;
}

function nt(t, n) {
  for (var o, u, c = t.length; c--; ) if ((o = t[c][0]) === (u = n) || (o != o && u != u)) return c;

  return -1;
}

function et(n, o, u, c) {
  var f,
    l = -1,
    s = b,
    h = true,
    p = n.length,
    _ = [],
    y = o.length;
  if (!p) return _;
  if (u)
    o = O(
      o,
      ((f = u),
      function (t) {
        return f(t);
      })
    );

  if (c) {
    s = j;
    h = false;
  } else if (o.length >= t) {
    s = x;
    h = false;
    o = new tt(o);
  }

  t: for (; ++l < p; ) {
    var v = n[l],
      w = u ? u(v) : v;

    if (((v = c || 0 !== v ? v : 0), h && w == w)) {
      for (var S = y; S--; ) if (o[S] === w) continue t;

      _.push(v);
    } else s(o, w, c) || _.push(v);
  }

  return _;
}

function ot(t, n, o, u, c) {
  var f = -1,
    l = t.length;

  for (o || (o = yt), c || (c = []); ++f < l; ) {
    var s = t[f];
    if (n > 0 && o(s)) n > 1 ? ot(s, n - 1, o, u, c) : w(c, s);
    else if (!u) c[c.length] = s;
  }

  return c;
}

function ut(t, n, o) {
  var u = n(t);
  return Ot(t) ? u : w(u, o(t));
}

function it(t) {
  return !(!$t(t) || (T && T in t)) && (St(t) || E(t) ? D : s).test(bt(t));
}

function at(t) {
  if (!$t(t)) return gt(t);
  var n,
    o = (n = t) && n.constructor,
    u = ('function' == typeof o && o.prototype) || R,
    c = n === u,
    f = [];

  for (var l in t) ('constructor' != l || (!c && z.call(t, l))) && f.push(l);

  return f;
}

function ct(t, n) {
  return ft((t = Object(t)), n, function (n, o) {
    return o in t;
  });
}

function ft(t, n, o) {
  for (var u = -1, c = n.length, f = {}; ++u < c; ) {
    var l = n[u],
      s = t[l];
    if (o(s, l)) f[l] = s;
  }

  return f;
}

function lt(t) {
  return ut(t, Ft, _t);
}

function st(t, n) {
  var o,
    u,
    c = t.__data__;
  return ('string' == (u = typeof (o = n)) || 'number' == u || 'symbol' == u || 'boolean' == u ? '__proto__' !== o : null === o)
    ? c['string' == typeof n ? 'string' : 'hash']
    : c.map;
}

function ht(t, n) {
  var o = F(t, n);
  return it(o) ? o : undefined;
}

X.prototype.clear = function () {
  this.__data__ = W ? W(null) : {};
};

X.prototype.delete = function (t) {
  return this.has(t) && delete this.__data__[t];
};

X.prototype.get = function (t) {
  var o = this.__data__;

  if (W) {
    var u = o[t];
    return u === n ? undefined : u;
  }

  return z.call(o, t) ? o[t] : undefined;
};

X.prototype.has = function (t) {
  var n = this.__data__;
  return W ? undefined !== n[t] : z.call(n, t);
};

X.prototype.set = function (t, o) {
  this.__data__[t] = W && undefined === o ? n : o;
  return this;
};

Y.prototype.clear = function () {
  this.__data__ = [];
};

Y.prototype.delete = function (t) {
  var n = this.__data__,
    o = nt(n, t);
  return !(o < 0 || (o == n.length - 1 ? n.pop() : L.call(n, o, 1), 0));
};

Y.prototype.get = function (t) {
  var n = this.__data__,
    o = nt(n, t);
  return o < 0 ? undefined : n[o][1];
};

Y.prototype.has = function (t) {
  return nt(this.__data__, t) > -1;
};

Y.prototype.set = function (t, n) {
  var o = this.__data__,
    u = nt(o, t);
  if (u < 0) o.push([t, n]);
  else o[u][1] = n;
  return this;
};

Z.prototype.clear = function () {
  this.__data__ = {
    hash: new X(),
    map: new (V || Y)(),
    string: new X(),
  };
};

Z.prototype.delete = function (t) {
  return st(this, t).delete(t);
};

Z.prototype.get = function (t) {
  return st(this, t).get(t);
};

Z.prototype.has = function (t) {
  return st(this, t).has(t);
};

Z.prototype.set = function (t, n) {
  st(this, t).set(t, n);
  return this;
};

tt.prototype.add = tt.prototype.push = function (t) {
  this.__data__.set(t, n);

  return this;
};

tt.prototype.has = function (t) {
  return this.__data__.has(t);
};

var pt = Q ? k(Q, Object) : It,
  _t = Q
    ? function (t) {
        for (var n = []; t; ) {
          w(n, pt(t));
          t = J(t);
        }

        return n;
      }
    : It;

function yt(t) {
  return Ot(t) || jt(t) || !!(N && t && t[N]);
}

function vt(t, n) {
  return !!(n = null == n ? o : n) && ('number' == typeof t || h.test(t)) && t > -1 && t % 1 == 0 && t < n;
}

function gt(t) {
  var n = [];
  if (null != t) for (var o in Object(t)) n.push(o);
  return n;
}

function dt(t) {
  if ('string' == typeof t || xt(t)) return t;
  var n = t + '';
  return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
}

function bt(t) {
  if (null != t) {
    try {
      return q.call(t);
    } catch (t) {}

    try {
      return t + '';
    } catch (t) {}
  }

  return '';
}

function jt(t) {
  return wt(t) && z.call(t, 'callee') && (!K.call(t, 'callee') || B.call(t) == u);
}

var Ot = Array.isArray;

function mt(t) {
  return null != t && At(t.length) && !St(t);
}

function wt(t) {
  return Pt(t) && mt(t);
}

function St(t) {
  var n = $t(t) ? B.call(t) : '';
  return n == c || n == f;
}

function At(t) {
  return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= o;
}

function $t(t) {
  var n = typeof t;
  return !!t && ('object' == n || 'function' == n);
}

function Pt(t) {
  return !!t && 'object' == typeof t;
}

function xt(t) {
  return 'symbol' == typeof t || (Pt(t) && B.call(t) == l);
}

function Ft(t) {
  return mt(t) ? rt(t, true) : at(t);
}

var Et = function (t, n) {
    if (null == t) return {};
    else {
      n = O(ot(n, 1), dt);
      return ct(t, et(lt(t), n));
    }
  },
  kt = U(undefined === kt ? Et.length - 1 : kt, 0),
  Ct = function () {
    for (var t = arguments, n = -1, o = U(t.length - kt, 0), u = Array(o); ++n < o; ) u[n] = t[kt + n];

    n = -1;

    for (var c = Array(kt + 1); ++n < kt; ) c[n] = t[n];

    c[kt] = u;
    return v(Et, this, c);
  };

function It() {
  return [];
}

module.exports = Ct;
