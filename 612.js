function t(t) {
  for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++) o[u - 1] = arguments[u];

  throw Error(
    '[Immer] minified error nr: ' +
      t +
      (o.length
        ? ' ' +
          o
            .map(function (t) {
              return "'" + t + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}

function n(t) {
  return !!t && !!t[Z];
}

function o(t) {
  return (
    !!t &&
    ((function (t) {
      if (!t || 'object' != typeof t) return false;
      var n = Object.getPrototypeOf(t);
      if (null === n) return true;
      var o = Object.hasOwnProperty.call(n, 'constructor') && n.constructor;
      return 'function' == typeof o && Function.toString.call(o) === et;
    })(t) ||
      Array.isArray(t) ||
      !!t[Y] ||
      !!t.constructor[Y] ||
      h(t) ||
      v(t))
  );
}

function u(t, n, o) {
  if (undefined === o) o = false;
  if (0 === c(t))
    (o ? Object.keys : rt)(t).forEach(function (u) {
      if (!(o && 'symbol' == typeof u)) n(u, t[u], t);
    });
  else
    t.forEach(function (o, u) {
      return n(u, o, t);
    });
}

function c(t) {
  var n = t[Z];
  if (n) return n.i > 3 ? n.i - 4 : n.i;
  else return Array.isArray(t) ? 1 : h(t) ? 2 : v(t) ? 3 : 0;
}

function f(t, n) {
  return 2 === c(t) ? t.has(n) : Object.prototype.hasOwnProperty.call(t, n);
}

function s(t, n) {
  return 2 === c(t) ? t.get(n) : t[n];
}

function l(t, n, o) {
  var u = c(t);
  if (2 === u) t.set(n, o);
  else if (3 === u) {
    t.delete(n);
    t.add(o);
  } else t[n] = o;
}

function p(t, n) {
  return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
}

function h(t) {
  return H && t instanceof Map;
}

function v(t) {
  return L && t instanceof Set;
}

function y(t) {
  return t.o || t.t;
}

function b(t) {
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  var n = nt(t);
  delete n[Z];

  for (var o = rt(n), u = 0; u < o.length; u++) {
    var c = o[u],
      f = n[c];

    if (false === f.writable) {
      f.writable = true;
      f.configurable = true;
    }

    if (f.get || f.set)
      n[c] = {
        configurable: true,
        writable: true,
        enumerable: f.enumerable,
        value: t[c],
      };
  }

  return Object.create(Object.getPrototypeOf(t), n);
}

function P(t, f) {
  if (undefined === f) f = false;
  if (w(t) || n(t) || !o(t)) return t;
  else {
    if (c(t) > 1) t.set = t.add = t.clear = t.delete = O;
    Object.freeze(t);
    if (f)
      u(
        t,
        function (t, n) {
          return P(n, true);
        },
        true
      );
    return t;
  }
}

function O() {
  t(2);
}

function w(t) {
  return null == t || 'object' != typeof t || Object.isFrozen(t);
}

function A(n) {
  var o = ot[n];
  if (!o) t(18, n);
  return o;
}

function j(t, n) {
  if (!ot[t]) ot[t] = n;
}

function D() {
  return B;
}

function S(t, n) {
  if (n) {
    A('Patches');
    t.u = [];
    t.s = [];
    t.v = n;
  }
}

function _(t) {
  k(t);
  t.p.forEach(E);
  t.p = null;
}

function k(t) {
  if (t === B) B = t.l;
}

function x(t) {
  B = {
    p: [],
    l: B,
    h: t,
    m: true,
    _: 0,
  };
  return B;
}

function E(t) {
  var n = t[Z];
  if (0 === n.i || 1 === n.i) n.j();
  else n.g = true;
}

function M(n, u) {
  u._ = u.p.length;
  var c = u.p[0],
    f = undefined !== n && n !== c;
  if (!u.h.O) A('ES5').S(u, n, f);

  if (f) {
    if (c[Z].P) {
      _(u);

      t(4);
    }

    if (o(n)) {
      n = z(u, n);
      if (!u.l) I(u, n);
    }

    if (u.u) A('Patches').M(c[Z], n, u.u, u.s);
  } else n = z(u, c, []);

  _(u);

  if (u.u) u.v(u.u, u.s);
  return n !== V ? n : undefined;
}

function z(t, n, o) {
  if (w(n)) return n;
  var c = n[Z];

  if (!c) {
    u(
      n,
      function (u, f) {
        return F(t, c, n, u, f, o);
      },
      true
    );
    return n;
  }

  if (c.A !== t) return n;

  if (!c.P) {
    I(t, c.t, true);
    return c.t;
  }

  if (!c.I) {
    c.I = true;
    c.A._--;
    var f = 4 === c.i || 5 === c.i ? (c.o = b(c.k)) : c.o;
    u(3 === c.i ? new Set(f) : f, function (n, u) {
      return F(t, c, f, n, u, o);
    });
    I(t, f, false);
    if (o && t.u) A('Patches').R(c, o, t.u, t.s);
  }

  return c.o;
}

function F(t, u, c, s, p, h) {
  if (n(p)) {
    var v = z(t, p, h && u && 3 !== u.i && !f(u.D, s) ? h.concat(s) : undefined);
    if ((l(c, s, v), !n(v))) return;
    t.m = false;
  }

  if (o(p) && !w(p)) {
    if (!t.h.F && t._ < 1) return;
    z(t, p);
    if (!(u && u.A.l)) I(t, p);
  }
}

function I(t, n, o) {
  if (undefined === o) o = false;
  if (t.h.F && t.m) P(n, o);
}

function R(t, n) {
  var o = t[Z];
  return (o ? y(o) : t)[n];
}

function K(t, n) {
  if (n in t)
    for (var o = Object.getPrototypeOf(t); o; ) {
      var u = Object.getOwnPropertyDescriptor(o, n);
      if (u) return u;
      o = Object.getPrototypeOf(o);
    }
}

function W(t) {
  if (!t.P) {
    t.P = true;
    if (t.l) W(t.l);
  }
}

function C(t) {
  if (!t.o) t.o = b(t.t);
}

function N(t, n, o) {
  var u = h(n)
    ? A('MapSet').N(n, o)
    : v(n)
    ? A('MapSet').T(n, o)
    : t.O
    ? (function (t, n) {
        var o = Array.isArray(t),
          u = {
            i: o ? 1 : 0,
            A: n ? n.A : D(),
            P: false,
            I: false,
            D: {},
            l: n,
            t: t,
            k: null,
            o: null,
            j: null,
            C: false,
          },
          c = u,
          f = it;

        if (o) {
          c = [u];
          f = ut;
        }

        var s = Proxy.revocable(c, f),
          l = s.revoke,
          p = s.proxy;
        u.k = p;
        u.j = l;
        return p;
      })(n, o)
    : A('ES5').J(n, o);
  (o ? o.A : D()).p.push(u);
  return u;
}

function U(f) {
  if (!n(f)) t(22, f);
  return (function t(n) {
    if (!o(n)) return n;
    var f,
      p = n[Z],
      h = c(n);

    if (p) {
      if (!p.P && (p.i < 4 || !A('ES5').K(p))) return p.t;
      p.I = true;
      f = $(n, h);
      p.I = false;
    } else f = $(n, h);

    u(f, function (n, o) {
      if (!(p && s(p.t, n) === o)) l(f, n, t(o));
    });
    return 3 === h ? new Set(f) : f;
  })(f);
}

function $(t, n) {
  switch (n) {
    case 2:
      return new Map(t);

    case 3:
      return Array.from(t);
  }

  return b(t);
}

function J() {
  function t(t, n) {
    var o = l[t];
    if (o) o.enumerable = n;
    else
      l[t] = o = {
        configurable: true,
        enumerable: n,
        get: function () {
          var n = this[Z];
          return it.get(n, t);
        },
        set: function (n) {
          var o = this[Z];
          it.set(o, t, n);
        },
      };
    return o;
  }

  function o(t) {
    for (var n = t.length - 1; n >= 0; n--) {
      var o = t[n][Z];
      if (!o.P)
        switch (o.i) {
          case 5:
            if (s(o)) W(o);
            break;

          case 4:
            if (c(o)) W(o);
        }
    }
  }

  function c(t) {
    for (var n = t.t, o = t.k, u = rt(o), c = u.length - 1; c >= 0; c--) {
      var s = u[c];

      if (s !== Z) {
        var l = n[s];
        if (undefined === l && !f(n, s)) return true;
        var h = o[s],
          v = h && h[Z];
        if (v ? v.t !== l : !p(h, l)) return true;
      }
    }

    var y = !!n[Z];
    return u.length !== rt(n).length + (y ? 0 : 1);
  }

  function s(t) {
    var n = t.k;
    if (n.length !== t.t.length) return true;
    var o = Object.getOwnPropertyDescriptor(n, n.length - 1);
    return !(!o || o.get);
  }

  var l = {};
  j('ES5', {
    J: function (n, o) {
      var u = Array.isArray(n),
        c = (function (n, o) {
          if (n) {
            for (var u = Array(o.length), c = 0; c < o.length; c++) Object.defineProperty(u, '' + c, t(c, true));

            return u;
          }

          var f = nt(o);
          delete f[Z];

          for (var s = rt(f), l = 0; l < s.length; l++) {
            var p = s[l];
            f[p] = t(p, n || !!f[p].enumerable);
          }

          return Object.create(Object.getPrototypeOf(o), f);
        })(u, n),
        f = {
          i: u ? 5 : 4,
          A: o ? o.A : D(),
          P: false,
          I: false,
          D: {},
          l: o,
          t: n,
          k: c,
          o: null,
          g: false,
          C: false,
        };

      Object.defineProperty(c, Z, {
        value: f,
        writable: true,
      });
      return c;
    },
    S: function (t, c, l) {
      if (l) {
        if (n(c) && c[Z].A === t) o(t.p);
      } else {
        if (t.u)
          (function t(n) {
            if (n && 'object' == typeof n) {
              var o = n[Z];

              if (o) {
                var c = o.t,
                  l = o.k,
                  p = o.D,
                  h = o.i;

                if (4 === h) {
                  u(l, function (n) {
                    if (n !== Z) undefined !== c[n] || f(c, n) ? p[n] || t(l[n]) : ((p[n] = true), W(o));
                  });
                  u(c, function (t) {
                    if (!(undefined !== l[t] || f(l, t))) {
                      p[t] = false;
                      W(o);
                    }
                  });
                } else if (5 === h) {
                  if ((s(o) && (W(o), (p.length = true)), l.length < c.length)) for (var v = l.length; v < c.length; v++) p[v] = false;
                  else for (var y = c.length; y < l.length; y++) p[y] = true;

                  for (var b = l.length ** c.length, P = 0; P < b; P++) undefined === p[P] && t(l[P]);
                }
              }
            }
          })(t.p[0]);
        o(t.p);
      }
    },
    K: function (t) {
      return 4 === t.i ? c(t) : s(t);
    },
  });
}

function T() {
  function l(t) {
    if (!o(t)) return t;
    if (Array.isArray(t)) return t.map(l);
    if (h(t))
      return new Map(
        Array.from(t.entries()).map(function (t) {
          return [t[0], l(t[1])];
        })
      );
    if (v(t)) return new Set(Array.from(t).map(l));
    var n = Object.create(Object.getPrototypeOf(t));

    for (var u in t) n[u] = l(t[u]);

    return n;
  }

  function p(t) {
    return n(t) ? l(t) : t;
  }

  var y = 'add';
  j('Patches', {
    $: function (n, o) {
      o.forEach(function (o) {
        for (var u = o.path, f = o.op, p = n, h = 0; h < u.length - 1; h++) {
          var v = c(p),
            b = u[h];
          if (!((0 !== v && 1 !== v) || ('__proto__' !== b && 'constructor' !== b))) t(24);
          if ('function' == typeof p && 'prototype' === b) t(24);
          if ('object' != typeof (p = s(p, b))) t(15, u.join('/'));
        }

        var P = c(p),
          O = l(o.value),
          w = u[u.length - 1];

        switch (f) {
          case 'replace':
            switch (P) {
              case 2:
                return p.set(w, O);

              case 3:
                t(16);

              default:
                return (p[w] = O);
            }

          case y:
            switch (P) {
              case 1:
                return p.splice(w, 0, O);

              case 2:
                return p.set(w, O);

              case 3:
                return p.add(O);

              default:
                return (p[w] = O);
            }

          case 'remove':
            switch (P) {
              case 1:
                return p.splice(w, 1);

              case 2:
                return p.delete(w);

              case 3:
                return p.delete(o.value);

              default:
                return delete p[w];
            }

          default:
            t(17, f);
        }
      });
      return n;
    },
    R: function (t, n, o, c) {
      switch (t.i) {
        case 0:
        case 4:
        case 2:
          return (function (t, n, o, c) {
            var l = t.t,
              h = t.o;
            u(t.D, function (t, u) {
              var v = s(l, t),
                b = s(h, t),
                P = u ? (f(l, t) ? 'replace' : y) : 'remove';

              if (v !== b || 'replace' !== P) {
                var O = n.concat(t);
                o.push(
                  'remove' === P
                    ? {
                        op: P,
                        path: O,
                      }
                    : {
                        op: P,
                        path: O,
                        value: b,
                      }
                );
                c.push(
                  P === y
                    ? {
                        op: 'remove',
                        path: O,
                      }
                    : 'remove' === P
                    ? {
                        op: y,
                        path: O,
                        value: p(v),
                      }
                    : {
                        op: 'replace',
                        path: O,
                        value: p(v),
                      }
                );
              }
            });
          })(t, n, o, c);

        case 5:
        case 1:
          return (function (t, n, o, u) {
            var c = t.t,
              f = t.D,
              s = t.o;

            if (s.length < c.length) {
              var l = [s, c];
              c = l[0];
              s = l[1];
              var h = [u, o];
              o = h[0];
              u = h[1];
            }

            for (var v = 0; v < c.length; v++)
              if (f[v] && s[v] !== c[v]) {
                var b = n.concat([v]);
                o.push({
                  op: 'replace',
                  path: b,
                  value: p(s[v]),
                });
                u.push({
                  op: 'replace',
                  path: b,
                  value: p(c[v]),
                });
              }

            for (var P = c.length; P < s.length; P++) {
              var O = n.concat([P]);
              o.push({
                op: y,
                path: O,
                value: p(s[P]),
              });
            }

            if (c.length < s.length)
              u.push({
                op: 'replace',
                path: n.concat(['length']),
                value: c.length,
              });
          })(t, n, o, c);

        case 3:
          return (function (t, n, o, u) {
            var c = t.t,
              f = t.o,
              s = 0;
            c.forEach(function (t) {
              if (!f.has(t)) {
                var c = n.concat([s]);
                o.push({
                  op: 'remove',
                  path: c,
                  value: t,
                });
                u.unshift({
                  op: y,
                  path: c,
                  value: t,
                });
              }

              s++;
            });
            s = 0;
            f.forEach(function (t) {
              if (!c.has(t)) {
                var f = n.concat([s]);
                o.push({
                  op: y,
                  path: f,
                  value: t,
                });
                u.unshift({
                  op: 'remove',
                  path: f,
                  value: t,
                });
              }

              s++;
            });
          })(t, n, o, c);
      }
    },
    M: function (t, n, o, u) {
      o.push({
        op: 'replace',
        path: [],
        value: n,
      });
      u.push({
        op: 'replace',
        path: [],
        value: t.t,
      });
    },
  });
}

function X() {
  function n(t, n) {
    function o() {
      this.constructor = t;
    }

    l(t, n);
    t.prototype = ((o.prototype = n.prototype), new o());
  }

  function c(t) {
    if (!t.o) {
      t.D = new Map();
      t.o = new Map(t.t);
    }
  }

  function f(t) {
    if (!t.o) {
      t.o = new Set();
      t.t.forEach(function (n) {
        if (o(n)) {
          var u = N(t.A.h, n, t);
          t.p.set(n, u);
          t.o.add(u);
        } else t.o.add(n);
      });
    }
  }

  function s(n) {
    if (n.g) t(3, JSON.stringify(y(n)));
  }

  var l = function (t, n) {
      return (l =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (t, n) {
            t.__proto__ = n;
          }) ||
        function (t, n) {
          for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o]);
        })(t, n);
    },
    p = (function () {
      function t(t, n) {
        this[Z] = {
          i: 2,
          l: n,
          A: n ? n.A : D(),
          P: false,
          I: false,
          o: undefined,
          D: undefined,
          t: t,
          k: this,
          C: false,
          g: false,
        };
        return this;
      }

      n(t, Map);
      var f = t.prototype;
      Object.defineProperty(f, 'size', {
        get: function () {
          return y(this[Z]).size;
        },
      });

      f.has = function (t) {
        return y(this[Z]).has(t);
      };

      f.set = function (t, n) {
        var o = this[Z];
        s(o);

        if (!(y(o).has(t) && y(o).get(t) === n)) {
          c(o);
          W(o);
          o.D.set(t, true);
          o.o.set(t, n);
          o.D.set(t, true);
        }

        return this;
      };

      f.delete = function (t) {
        if (!this.has(t)) return false;
        var n = this[Z];
        s(n);
        c(n);
        W(n);
        n.D.set(t, false);
        n.o.delete(t);
        return true;
      };

      f.clear = function () {
        var t = this[Z];
        s(t);

        if (y(t).size) {
          c(t);
          W(t);
          t.D = new Map();
          u(t.t, function (n) {
            t.D.set(n, false);
          });
          t.o.clear();
        }
      };

      f.forEach = function (t, n) {
        var o = this;
        y(this[Z]).forEach(function (u, c) {
          t.call(n, o.get(c), c, o);
        });
      };

      f.get = function (t) {
        var n = this[Z];
        s(n);
        var u = y(n).get(t);
        if (n.I || !o(u)) return u;
        if (u !== n.t.get(t)) return u;
        var f = N(n.A.h, u, n);
        c(n);
        n.o.set(t, f);
        return f;
      };

      f.keys = function () {
        return y(this[Z]).keys();
      };

      f.values = function () {
        var t,
          n = this,
          o = this.keys();

        (t = {})[tt] = function () {
          return n.values();
        };

        t.next = function () {
          var t = o.next();
          return t.done
            ? t
            : {
                done: false,
                value: n.get(t.value),
              };
        };

        return t;
      };

      f.entries = function () {
        var t,
          n = this,
          o = this.keys();

        (t = {})[tt] = function () {
          return n.entries();
        };

        t.next = function () {
          var t = o.next();
          if (t.done) return t;
          var u = n.get(t.value);
          return {
            done: false,
            value: [t.value, u],
          };
        };

        return t;
      };

      f[tt] = function () {
        return this.entries();
      };

      return t;
    })(),
    h = (function () {
      function t(t, n) {
        this[Z] = {
          i: 3,
          l: n,
          A: n ? n.A : D(),
          P: false,
          I: false,
          o: undefined,
          t: t,
          k: this,
          p: new Map(),
          g: false,
          C: false,
        };
        return this;
      }

      n(t, Set);
      var o = t.prototype;
      Object.defineProperty(o, 'size', {
        get: function () {
          return y(this[Z]).size;
        },
      });

      o.has = function (t) {
        var n = this[Z];
        s(n);
        return n.o ? !!n.o.has(t) || !(!n.p.has(t) || !n.o.has(n.p.get(t))) : n.t.has(t);
      };

      o.add = function (t) {
        var n = this[Z];
        s(n);

        if (!this.has(t)) {
          f(n);
          W(n);
          n.o.add(t);
        }

        return this;
      };

      o.delete = function (t) {
        if (!this.has(t)) return false;
        var n = this[Z];
        s(n);
        f(n);
        W(n);
        return n.o.delete(t) || (!!n.p.has(t) && n.o.delete(n.p.get(t)));
      };

      o.clear = function () {
        var t = this[Z];
        s(t);

        if (y(t).size) {
          f(t);
          W(t);
          t.o.clear();
        }
      };

      o.values = function () {
        var t = this[Z];
        s(t);
        f(t);
        return t.o.values();
      };

      o.entries = function () {
        var t = this[Z];
        s(t);
        f(t);
        return t.o.entries();
      };

      o.keys = function () {
        return this.values();
      };

      o[tt] = function () {
        return this.values();
      };

      o.forEach = function (t, n) {
        for (var o = this.values(), u = o.next(); !u.done; ) {
          t.call(n, u.value, u.value, this);
          u = o.next();
        }
      };

      return t;
    })();

  j('MapSet', {
    N: function (t, n) {
      return new p(t, n);
    },
    T: function (t, n) {
      return new h(t, n);
    },
  });
}

exports.castDraft = function (t) {
  return t;
};

exports.castImmutable = function (t) {
  return t;
};

exports.current = U;

exports.enableAllPlugins = function () {
  J();
  X();
  T();
};

exports.enableES5 = J;
exports.enableMapSet = X;
exports.enablePatches = T;
exports.freeze = P;
exports.isDraft = n;
exports.isDraftable = o;

exports.original = function (o) {
  if (!n(o)) t(23, o);
  return o[Z].t;
};

var q,
  B,
  G = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
  H = 'undefined' != typeof Map,
  L = 'undefined' != typeof Set,
  Q = 'undefined' != typeof Proxy && undefined !== Proxy.revocable && 'undefined' != typeof Reflect,
  V = G ? Symbol.for('immer-nothing') : (((q = {})['immer-nothing'] = true), q),
  Y = G ? Symbol.for('immer-draftable') : '__$immer_draftable',
  Z = G ? Symbol.for('immer-state') : '__$immer_state',
  tt = ('undefined' != typeof Symbol && Symbol.iterator) || '@@iterator',
  et = '' + Object.prototype.constructor,
  rt =
    'undefined' != typeof Reflect && Reflect.ownKeys
      ? Reflect.ownKeys
      : undefined !== Object.getOwnPropertySymbols
      ? function (t) {
          return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
        }
      : Object.getOwnPropertyNames,
  nt =
    Object.getOwnPropertyDescriptors ||
    function (t) {
      var n = {};
      rt(t).forEach(function (o) {
        n[o] = Object.getOwnPropertyDescriptor(t, o);
      });
      return n;
    },
  ot = {},
  it = {
    get: function (t, n) {
      if (n === Z) return t;
      var u = y(t);
      if (!f(u, n))
        return (function (t, o, c) {
          var f,
            s = K(u, n);
          return s ? ('value' in s ? s.value : null === (f = s.get) || undefined === f ? undefined : f.call(t.k)) : undefined;
        })(t);
      var c = u[n];
      return t.I || !o(c) ? c : c === R(t.t, n) ? (C(t), (t.o[n] = N(t.A.h, c, t))) : c;
    },
    has: function (t, n) {
      return n in y(t);
    },
    ownKeys: function (t) {
      return Reflect.ownKeys(y(t));
    },
    set: function (t, n, o) {
      var u = K(y(t), n);

      if (null == u ? undefined : u.set) {
        u.set.call(t.k, o);
        return true;
      }

      if (!t.P) {
        var c = R(y(t), n),
          s = null == c ? undefined : c[Z];

        if (s && s.t === o) {
          t.o[n] = o;
          t.D[n] = false;
          return true;
        }

        if (p(o, c) && (undefined !== o || f(t.t, n))) return true;
        C(t);
        W(t);
      }

      return t.o[n] === o ? 'number' != typeof o : ((t.o[n] = o), (t.D[n] = true), true);
    },
    deleteProperty: function (t, n) {
      if (undefined !== R(t.t, n) || n in t.t) {
        t.D[n] = false;
        C(t);
        W(t);
      } else delete t.D[n];

      if (t.o) delete t.o[n];
      return true;
    },
    getOwnPropertyDescriptor: function (t, n) {
      var o = y(t),
        u = Reflect.getOwnPropertyDescriptor(o, n);
      return u
        ? {
            writable: true,
            configurable: 1 !== t.i || 'length' !== n,
            enumerable: u.enumerable,
            value: o[n],
          }
        : u;
    },
    defineProperty: function () {
      t(11);
    },
    getPrototypeOf: function (t) {
      return Object.getPrototypeOf(t.t);
    },
    setPrototypeOf: function () {
      t(12);
    },
  },
  ut = {};

exports.immerable = Y;
exports.nothing = V;
u(it, function (t, n) {
  ut[t] = function () {
    arguments[0] = arguments[0][0];
    return n.apply(this, arguments);
  };
});

ut.deleteProperty = function (t, n) {
  return it.deleteProperty.call(this, t[0], n);
};

ut.set = function (t, n, o) {
  return it.set.call(this, t[0], n, o, t[0]);
};

var at = (function () {
    function u(n) {
      var u = this;
      this.O = Q;
      this.F = true;

      this.produce = function (n, c, f) {
        if ('function' == typeof n && 'function' != typeof c) {
          var s = c;
          c = n;
          var l = u;
          return function (t) {
            var n = this;
            if (undefined === t) t = s;

            for (var o = arguments.length, u = Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++) u[f - 1] = arguments[f];

            return l.produce(t, function (t) {
              var o;
              return (o = c).call.apply(o, [n, t].concat(u));
            });
          };
        }

        var p;

        if (('function' != typeof c && t(6), undefined !== f && 'function' != typeof f && t(7), o(n))) {
          var h = x(u),
            v = N(u, n, undefined),
            y = true;

          try {
            p = c(v);
            y = false;
          } finally {
            if (y) _(h);
            else k(h);
          }

          if ('undefined' != typeof Promise && p instanceof Promise)
            return p.then(
              function (t) {
                S(h, f);
                return M(t, h);
              },
              function (t) {
                throw (_(h), t);
              }
            );
          else {
            S(h, f);
            return M(p, h);
          }
        }

        if (!n || 'object' != typeof n) {
          if ((p = c(n)) === V) return;
          if (undefined === p) p = n;
          if (u.F) P(p, true);
          return p;
        }

        t(21, n);
      };

      this.produceWithPatches = function (t, n) {
        return 'function' == typeof t
          ? function (n) {
              for (var o = arguments.length, c = Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++) c[f - 1] = arguments[f];

              return u.produceWithPatches(n, function (n) {
                return t.apply(undefined, [n].concat(c));
              });
            }
          : [
              u.produce(t, n, function (t, n) {
                o = t;
                c = n;
              }),
              o,
              c,
            ];
        var o, c;
      };

      if ('boolean' == typeof (null == n ? undefined : n.useProxies)) this.setUseProxies(n.useProxies);
      if ('boolean' == typeof (null == n ? undefined : n.autoFreeze)) this.setAutoFreeze(n.autoFreeze);
    }

    var c = u.prototype;

    c.createDraft = function (u) {
      if (!o(u)) t(8);
      if (n(u)) u = U(u);
      var c = x(this),
        f = N(this, u, undefined);
      f[Z].C = true;
      k(c);
      return f;
    };

    c.finishDraft = function (t, n) {
      var o = (t && t[Z]).A;
      S(o, n);
      return M(undefined, o);
    };

    c.setAutoFreeze = function (t) {
      this.F = t;
    };

    c.setUseProxies = function (n) {
      if (n && !Q) t(20);
      this.O = n;
    };

    c.applyPatches = function (t, o) {
      var u;

      for (u = o.length - 1; u >= 0; u--) {
        var c = o[u];

        if (0 === c.path.length && 'replace' === c.op) {
          t = c.value;
          break;
        }
      }

      var f = A('Patches').$;
      return n(t)
        ? f(t, o)
        : this.produce(t, function (t) {
            return f(t, o.slice(u + 1));
          });
    };

    return u;
  })(),
  ct = new at(),
  ft = ct.produce,
  st = ct.produceWithPatches.bind(ct),
  lt = ct.setAutoFreeze.bind(ct),
  pt = ct.setUseProxies.bind(ct),
  ht = ct.applyPatches.bind(ct),
  vt = ct.createDraft.bind(ct),
  yt = ct.finishDraft.bind(ct);

exports.finishDraft = yt;
exports.createDraft = vt;
exports.applyPatches = ht;
exports.setUseProxies = pt;
exports.setAutoFreeze = lt;
exports.produceWithPatches = st;
exports.produce = ft;
exports.Immer = at;
var dt = ft;
exports.default = dt;
