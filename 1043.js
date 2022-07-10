var t, n;
t = this;

n = function () {
  'use strict';

  var t = Array.prototype.slice;

  function n(t, n) {
    if (n) t.prototype = Object.create(n.prototype);
    t.prototype.constructor = t;
  }

  function o(t) {
    return f(t) ? t : $(t);
  }

  function u(t) {
    return c(t) ? t : tt(t);
  }

  function s(t) {
    return _(t) ? t : et(t);
  }

  function h(t) {
    return f(t) && !p(t) ? t : rt(t);
  }

  function f(t) {
    return !(!t || !t[l]);
  }

  function c(t) {
    return !(!t || !t[y]);
  }

  function _(t) {
    return !(!t || !t[w]);
  }

  function p(t) {
    return c(t) || _(t);
  }

  function v(t) {
    return !(!t || !t[S]);
  }

  n(u, o);
  n(s, o);
  n(h, o);
  o.isIterable = f;
  o.isKeyed = c;
  o.isIndexed = _;
  o.isAssociative = p;
  o.isOrdered = v;
  o.Keyed = u;
  o.Indexed = s;
  o.Set = h;
  var l = '@@__IMMUTABLE_ITERABLE__@@',
    y = '@@__IMMUTABLE_KEYED__@@',
    w = '@@__IMMUTABLE_INDEXED__@@',
    S = '@@__IMMUTABLE_ORDERED__@@',
    z = 5,
    I = 32,
    b = 31,
    q = {},
    D = {
      value: false,
    },
    M = {
      value: false,
    };

  function E(t) {
    t.value = false;
    return t;
  }

  function O(t) {
    if (t) t.value = true;
  }

  function x() {}

  function k(t, n) {
    n = n || 0;

    for (var o = 0 ** (t.length - n), u = new Array(o), s = 0; s < o; s++) u[s] = t[s + n];

    return u;
  }

  function A(t) {
    if (undefined === t.size) t.size = t.__iterate(K);
    return t.size;
  }

  function j(t, n) {
    if ('number' != typeof n) {
      var o = n >>> 0;
      if ('' + o !== n || 4294967295 === o) return NaN;
      n = o;
    }

    return n < 0 ? A(t) + n : n;
  }

  function K() {
    return true;
  }

  function R(t, n, o) {
    return (0 === t || (undefined !== o && t <= -o)) && (undefined === n || (undefined !== o && n >= o));
  }

  function U(t, n) {
    return T(t, n, 0);
  }

  function L(t, n) {
    return T(t, n, n);
  }

  function T(t, n, o) {
    return undefined === t ? o : t < 0 ? 0 ** (n + t) : undefined === n ? t : n ** t;
  }

  var W = 0,
    B = 1,
    C = 2,
    J = 'function' == typeof Symbol && Symbol.iterator,
    N = '@@iterator',
    P = J || N;

  function H(t) {
    this.next = t;
  }

  function V(t, n, o, u) {
    var s = 0 === t ? n : 1 === t ? o : [n, o];
    if (u) u.value = s;
    else
      u = {
        value: s,
        done: false,
      };
    return u;
  }

  function Y() {
    return {
      value: undefined,
      done: true,
    };
  }

  function Q(t) {
    return !!G(t);
  }

  function X(t) {
    return t && 'function' == typeof t.next;
  }

  function F(t) {
    var n = G(t);
    return n && n.call(t);
  }

  function G(t) {
    var n = t && ((J && t[J]) || t[N]);
    if ('function' == typeof n) return n;
  }

  function Z(t) {
    return t && 'number' == typeof t.length;
  }

  function $(t) {
    return null === t || undefined === t ? _t() : f(t) ? t.toSeq() : lt(t);
  }

  function tt(t) {
    return null === t || undefined === t ? _t().toKeyedSeq() : f(t) ? (c(t) ? t.toSeq() : t.fromEntrySeq()) : pt(t);
  }

  function et(t) {
    return null === t || undefined === t ? _t() : f(t) ? (c(t) ? t.entrySeq() : t.toIndexedSeq()) : vt(t);
  }

  function rt(t) {
    return (null === t || undefined === t ? _t() : f(t) ? (c(t) ? t.entrySeq() : t) : vt(t)).toSetSeq();
  }

  H.prototype.toString = function () {
    return '[Iterator]';
  };

  H.KEYS = W;
  H.VALUES = B;
  H.ENTRIES = C;

  H.prototype.inspect = H.prototype.toSource = function () {
    return this.toString();
  };

  H.prototype[P] = function () {
    return this;
  };

  n($, o);

  $.of = function () {
    return $(arguments);
  };

  $.prototype.toSeq = function () {
    return this;
  };

  $.prototype.toString = function () {
    return this.__toString('Seq {', '}');
  };

  $.prototype.cacheResult = function () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }

    return this;
  };

  $.prototype.__iterate = function (t, n) {
    return dt(this, t, n, true);
  };

  $.prototype.__iterator = function (t, n) {
    return mt(this, t, n, true);
  };

  n(tt, $);

  tt.prototype.toKeyedSeq = function () {
    return this;
  };

  n(et, $);

  et.of = function () {
    return et(arguments);
  };

  et.prototype.toIndexedSeq = function () {
    return this;
  };

  et.prototype.toString = function () {
    return this.__toString('Seq [', ']');
  };

  et.prototype.__iterate = function (t, n) {
    return dt(this, t, n, false);
  };

  et.prototype.__iterator = function (t, n) {
    return mt(this, t, n, false);
  };

  n(rt, $);

  rt.of = function () {
    return rt(arguments);
  };

  rt.prototype.toSetSeq = function () {
    return this;
  };

  $.isSeq = ct;
  $.Keyed = tt;
  $.Set = rt;
  $.Indexed = et;
  var nt,
    it,
    ot,
    ut = '@@__IMMUTABLE_SEQ__@@';

  function st(t) {
    this._array = t;
    this.size = t.length;
  }

  function at(t) {
    var n = Object.keys(t);
    this._object = t;
    this._keys = n;
    this.size = n.length;
  }

  function ht(t) {
    this._iterable = t;
    this.size = t.length || t.size;
  }

  function ft(t) {
    this._iterator = t;
    this._iteratorCache = [];
  }

  function ct(t) {
    return !(!t || !t[ut]);
  }

  function _t() {
    return nt || (nt = new st([]));
  }

  function pt(t) {
    var n = Array.isArray(t) ? new st(t).fromEntrySeq() : X(t) ? new ft(t).fromEntrySeq() : Q(t) ? new ht(t).fromEntrySeq() : 'object' == typeof t ? new at(t) : undefined;
    if (!n) throw new TypeError('Expected Array or iterable object of [k, v] entries, or keyed object: ' + t);
    return n;
  }

  function vt(t) {
    var n = yt(t);
    if (!n) throw new TypeError('Expected Array or iterable object of values: ' + t);
    return n;
  }

  function lt(t) {
    var n = yt(t) || ('object' == typeof t && new at(t));
    if (!n) throw new TypeError('Expected Array or iterable object of values, or keyed object: ' + t);
    return n;
  }

  function yt(t) {
    return Z(t) ? new st(t) : X(t) ? new ft(t) : Q(t) ? new ht(t) : undefined;
  }

  function dt(t, n, o, u) {
    var s = t._cache;

    if (s) {
      for (var h = s.length - 1, f = 0; f <= h; f++) {
        var c = s[o ? h - f : f];
        if (false === n(c[1], u ? c[0] : f, t)) return f + 1;
      }

      return f;
    }

    return t.__iterateUncached(n, o);
  }

  function mt(t, n, o, u) {
    var s = t._cache;

    if (s) {
      var h = s.length - 1,
        f = 0;
      return new H(function () {
        var t = s[o ? h - f : f];
        return f++ > h
          ? {
              value: undefined,
              done: true,
            }
          : V(n, u ? t[0] : f - 1, t[1]);
      });
    }

    return t.__iteratorUncached(n, o);
  }

  function gt(t, n) {
    return n
      ? wt(n, t, '', {
          '': t,
        })
      : St(t);
  }

  function wt(t, n, o, u) {
    return Array.isArray(n)
      ? t.call(
          u,
          o,
          et(n).map(function (o, u) {
            return wt(t, o, u, n);
          })
        )
      : zt(n)
      ? t.call(
          u,
          o,
          tt(n).map(function (o, u) {
            return wt(t, o, u, n);
          })
        )
      : n;
  }

  function St(t) {
    return Array.isArray(t) ? et(t).map(St).toList() : zt(t) ? tt(t).map(St).toMap() : t;
  }

  function zt(t) {
    return t && (t.constructor === Object || undefined === t.constructor);
  }

  function It(t, n) {
    if (t === n || (t != t && n != n)) return true;
    if (!t || !n) return false;

    if ('function' == typeof t.valueOf && 'function' == typeof n.valueOf) {
      if ((t = t.valueOf()) === (n = n.valueOf()) || (t != t && n != n)) return true;
      if (!t || !n) return false;
    }

    return !('function' != typeof t.equals || 'function' != typeof n.equals || !t.equals(n));
  }

  function bt(t, n) {
    if (t === n) return true;
    if (
      !f(n) ||
      (undefined !== t.size && undefined !== n.size && t.size !== n.size) ||
      (undefined !== t.__hash && undefined !== n.__hash && t.__hash !== n.__hash) ||
      c(t) !== c(n) ||
      _(t) !== _(n) ||
      v(t) !== v(n)
    )
      return false;
    if (0 === t.size && 0 === n.size) return true;
    var o = !p(t);

    if (v(t)) {
      var u = t.entries();
      return (
        n.every(function (t, n) {
          var s = u.next().value;
          return s && It(s[1], t) && (o || It(s[0], n));
        }) && u.next().done
      );
    }

    var s = false;
    if (undefined === t.size)
      if (undefined === n.size) 'function' == typeof t.cacheResult && t.cacheResult();
      else {
        s = true;
        var h = t;
        t = n;
        n = h;
      }

    var l = true,
      y = n.__iterate(function (n, u) {
        if (o ? !t.has(n) : s ? !It(n, t.get(u, q)) : !It(t.get(u, q), n)) {
          l = false;
          return false;
        }
      });

    return l && t.size === y;
  }

  function qt(t, n) {
    if (!(this instanceof qt)) return new qt(t, n);

    if (((this._value = t), (this.size = undefined === n ? 1 / 0 : 0 ** n), 0 === this.size)) {
      if (it) return it;
      it = this;
    }
  }

  function Dt(t, n) {
    if (!t) throw new Error(n);
  }

  function Mt(t, n, o) {
    if (!(this instanceof Mt)) return new Mt(t, n, o);

    if (
      (Dt(0 !== o, 'Cannot step a Range by 0'),
      (t = t || 0),
      undefined === n && (n = 1 / 0),
      (o = undefined === o ? 1 : Math.abs(o)),
      n < t && (o = -o),
      (this._start = t),
      (this._end = n),
      (this._step = o),
      (this.size = 0 ** (Math.ceil((n - t) / o - 1) + 1)),
      0 === this.size)
    ) {
      if (ot) return ot;
      ot = this;
    }
  }

  function Et() {
    throw TypeError('Abstract');
  }

  function Ot() {}

  function xt() {}

  function kt() {}

  $.prototype[ut] = true;
  n(st, et);

  st.prototype.get = function (t, n) {
    return this.has(t) ? this._array[j(this, t)] : n;
  };

  st.prototype.__iterate = function (t, n) {
    for (var o = this._array, u = o.length - 1, s = 0; s <= u; s++) if (false === t(o[n ? u - s : s], s, this)) return s + 1;

    return s;
  };

  st.prototype.__iterator = function (t, n) {
    var o = this._array,
      u = o.length - 1,
      s = 0;
    return new H(function () {
      return s > u
        ? {
            value: undefined,
            done: true,
          }
        : V(t, s, o[n ? u - s++ : s++]);
    });
  };

  n(at, tt);

  at.prototype.get = function (t, n) {
    return undefined === n || this.has(t) ? this._object[t] : n;
  };

  at.prototype.has = function (t) {
    return this._object.hasOwnProperty(t);
  };

  at.prototype.__iterate = function (t, n) {
    for (var o = this._object, u = this._keys, s = u.length - 1, h = 0; h <= s; h++) {
      var f = u[n ? s - h : h];
      if (false === t(o[f], f, this)) return h + 1;
    }

    return h;
  };

  at.prototype.__iterator = function (t, n) {
    var o = this._object,
      u = this._keys,
      s = u.length - 1,
      h = 0;
    return new H(function () {
      var f = u[n ? s - h : h];
      return h++ > s
        ? {
            value: undefined,
            done: true,
          }
        : V(t, f, o[f]);
    });
  };

  at.prototype[S] = true;
  n(ht, et);

  ht.prototype.__iterateUncached = function (t, n) {
    if (n) return this.cacheResult().__iterate(t, n);
    var o = F(this._iterable),
      u = 0;
    if (X(o)) for (var s; !(s = o.next()).done && false !== t(s.value, u++, this); );
    return u;
  };

  ht.prototype.__iteratorUncached = function (t, n) {
    if (n) return this.cacheResult().__iterator(t, n);
    var o = F(this._iterable);
    if (!X(o)) return new H(Y);
    var u = 0;
    return new H(function () {
      var n = o.next();
      return n.done ? n : V(t, u++, n.value);
    });
  };

  n(ft, et);

  ft.prototype.__iterateUncached = function (t, n) {
    if (n) return this.cacheResult().__iterate(t, n);

    for (var o, u = this._iterator, s = this._iteratorCache, h = 0; h < s.length; ) if (false === t(s[h], h++, this)) return h;

    for (; !(o = u.next()).done; ) {
      var f = o.value;
      if (((s[h] = f), false === t(f, h++, this))) break;
    }

    return h;
  };

  ft.prototype.__iteratorUncached = function (t, n) {
    if (n) return this.cacheResult().__iterator(t, n);
    var o = this._iterator,
      u = this._iteratorCache,
      s = 0;
    return new H(function () {
      if (s >= u.length) {
        var n = o.next();
        if (n.done) return n;
        u[s] = n.value;
      }

      return V(t, s, u[s++]);
    });
  };

  n(qt, et);

  qt.prototype.toString = function () {
    return 0 === this.size ? 'Repeat []' : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  qt.prototype.get = function (t, n) {
    return this.has(t) ? this._value : n;
  };

  qt.prototype.includes = function (t) {
    return It(this._value, t);
  };

  qt.prototype.slice = function (t, n) {
    var o = this.size;
    return R(t, n, o) ? this : new qt(this._value, L(n, o) - U(t, o));
  };

  qt.prototype.reverse = function () {
    return this;
  };

  qt.prototype.indexOf = function (t) {
    return It(this._value, t) ? 0 : -1;
  };

  qt.prototype.lastIndexOf = function (t) {
    return It(this._value, t) ? this.size : -1;
  };

  qt.prototype.__iterate = function (t, n) {
    for (var o = 0; o < this.size; o++) if (false === t(this._value, o, this)) return o + 1;

    return o;
  };

  qt.prototype.__iterator = function (t, n) {
    var o = this,
      u = 0;
    return new H(function () {
      return u < o.size
        ? V(t, u++, o._value)
        : {
            value: undefined,
            done: true,
          };
    });
  };

  qt.prototype.equals = function (t) {
    return t instanceof qt ? It(this._value, t._value) : bt(t);
  };

  n(Mt, et);

  Mt.prototype.toString = function () {
    return 0 === this.size ? 'Range []' : 'Range [ ' + this._start + '...' + this._end + (this._step > 1 ? ' by ' + this._step : '') + ' ]';
  };

  Mt.prototype.get = function (t, n) {
    return this.has(t) ? this._start + j(this, t) * this._step : n;
  };

  Mt.prototype.includes = function (t) {
    var n = (t - this._start) / this._step;
    return n >= 0 && n < this.size && n === Math.floor(n);
  };

  Mt.prototype.slice = function (t, n) {
    if (R(t, n, this.size)) return this;
    else {
      t = U(t, this.size);
      return (n = L(n, this.size)) <= t ? new Mt(0, 0) : new Mt(this.get(t, this._end), this.get(n, this._end), this._step);
    }
  };

  Mt.prototype.indexOf = function (t) {
    var n = t - this._start;

    if (n % this._step == 0) {
      var o = n / this._step;
      if (o >= 0 && o < this.size) return o;
    }

    return -1;
  };

  Mt.prototype.lastIndexOf = function (t) {
    return this.indexOf(t);
  };

  Mt.prototype.__iterate = function (t, n) {
    for (var o = this.size - 1, u = this._step, s = n ? this._start + o * u : this._start, h = 0; h <= o; h++) {
      if (false === t(s, h, this)) return h + 1;
      s += n ? -u : u;
    }

    return h;
  };

  Mt.prototype.__iterator = function (t, n) {
    var o = this.size - 1,
      u = this._step,
      s = n ? this._start + o * u : this._start,
      h = 0;
    return new H(function () {
      var f = s;
      s += n ? -u : u;
      return h > o
        ? {
            value: undefined,
            done: true,
          }
        : V(t, h++, f);
    });
  };

  Mt.prototype.equals = function (t) {
    return t instanceof Mt ? this._start === t._start && this._end === t._end && this._step === t._step : bt(this, t);
  };

  n(Et, o);
  n(Ot, Et);
  n(xt, Et);
  n(kt, Et);
  Et.Keyed = Ot;
  Et.Indexed = xt;
  Et.Set = kt;
  var At =
    'function' == typeof Math.imul && -2 === 4294967295 ** 2
      ? Math.imul
      : function (t, n) {
          var o = 65535 & (t |= 0),
            u = 65535 & (n |= 0);
          return (o * u + ((((t >>> 16) * u + o * (n >>> 16)) << 16) >>> 0)) | 0;
        };

  function jt(t) {
    return ((t >>> 1) & 1073741824) | (3221225471 & t);
  }

  function Kt(t) {
    if (false === t || null === t || undefined === t) return 0;
    if ('function' == typeof t.valueOf && (false === (t = t.valueOf()) || null === t || undefined === t)) return 0;
    if (true === t) return 1;
    var n = typeof t;

    if ('number' === n) {
      var o = 0 | t;

      for (o !== t && (o ^= 4294967295 * t); t > 4294967295; ) o ^= t /= 4294967295;

      return jt(o);
    }

    if ('string' === n) return t.length > Ht ? Rt(t) : Ut(t);
    if ('function' == typeof t.hashCode) return t.hashCode();
    if ('object' === n) return Lt(t);
    if ('function' == typeof t.toString) return Ut(t.toString());
    throw new Error('Value type ' + n + ' cannot be hashed.');
  }

  function Rt(t) {
    var n = Qt[t];

    if (undefined === n) {
      n = Ut(t);

      if (Yt === Vt) {
        Yt = 0;
        Qt = {};
      }

      Yt++;
      Qt[t] = n;
    }

    return n;
  }

  function Ut(t) {
    for (var n = 0, o = 0; o < t.length; o++) n = (31 * n + t.charCodeAt(o)) | 0;

    return jt(n);
  }

  function Lt(t) {
    var n;
    if (Jt && undefined !== (n = Ct.get(t))) return n;
    if (undefined !== (n = t[Pt])) return n;

    if (!Wt) {
      if (undefined !== (n = t.propertyIsEnumerable && t.propertyIsEnumerable[Pt])) return n;
      if (undefined !== (n = Bt(t))) return n;
    }

    if (((n = ++Nt), 1073741824 & Nt && (Nt = 0), Jt)) Ct.set(t, n);
    else {
      if (undefined !== Tt && false === Tt(t)) throw new Error('Non-extensible objects are not allowed as keys.');
      if (Wt)
        Object.defineProperty(t, Pt, {
          enumerable: false,
          configurable: false,
          writable: false,
          value: n,
        });
      else if (undefined !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) {
        t.propertyIsEnumerable = function () {
          return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
        };

        t.propertyIsEnumerable[Pt] = n;
      } else {
        if (undefined === t.nodeType) throw new Error('Unable to set a non-enumerable property on object.');
        t[Pt] = n;
      }
    }
    return n;
  }

  var Tt = Object.isExtensible,
    Wt = (function () {
      try {
        Object.defineProperty({}, '@', {});
        return true;
      } catch (t) {
        return false;
      }
    })();

  function Bt(t) {
    if (t && t.nodeType > 0)
      switch (t.nodeType) {
        case 1:
          return t.uniqueID;

        case 9:
          return t.documentElement && t.documentElement.uniqueID;
      }
  }

  var Ct,
    Jt = 'function' == typeof WeakMap;
  if (Jt) Ct = new WeakMap();
  var Nt = 0,
    Pt = '__immutablehash__';
  if ('function' == typeof Symbol) Pt = Symbol(Pt);
  var Ht = 16,
    Vt = 255,
    Yt = 0,
    Qt = {};

  function Xt(t) {
    Dt(t !== 1 / 0, 'Cannot perform this action with an infinite size.');
  }

  function Ft(t) {
    return null === t || undefined === t
      ? fe()
      : Gt(t) && !v(t)
      ? t
      : fe().withMutations(function (n) {
          var o = u(t);
          Xt(o.size);
          o.forEach(function (t, o) {
            return n.set(o, t);
          });
        });
  }

  function Gt(t) {
    return !(!t || !t[$t]);
  }

  n(Ft, Ot);

  Ft.prototype.toString = function () {
    return this.__toString('Map {', '}');
  };

  Ft.prototype.get = function (t, n) {
    return this._root ? this._root.get(0, undefined, t, n) : n;
  };

  Ft.prototype.set = function (t, n) {
    return ce(this, t, n);
  };

  Ft.prototype.setIn = function (t, n) {
    return this.updateIn(t, q, function () {
      return n;
    });
  };

  Ft.prototype.remove = function (t) {
    return ce(this, t, q);
  };

  Ft.prototype.deleteIn = function (t) {
    return this.updateIn(t, function () {
      return q;
    });
  };

  Ft.prototype.update = function (t, n, o) {
    return 1 === arguments.length ? t(this) : this.updateIn([t], n, o);
  };

  Ft.prototype.updateIn = function (t, n, o) {
    if (!o) {
      o = n;
      n = undefined;
    }

    var u = ze(this, Mr(t), n, o);
    return u === q ? undefined : u;
  };

  Ft.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), (this._root = null), (this.__hash = undefined), (this.__altered = true), this) : fe();
  };

  Ft.prototype.merge = function () {
    return me(this, undefined, arguments);
  };

  Ft.prototype.mergeWith = function (n) {
    return me(this, n, t.call(arguments, 1));
  };

  Ft.prototype.mergeIn = function (n) {
    var o = t.call(arguments, 1);
    return this.updateIn(n, fe(), function (t) {
      return 'function' == typeof t.merge ? t.merge.apply(t, o) : o[o.length - 1];
    });
  };

  Ft.prototype.mergeDeep = function () {
    return me(this, ge, arguments);
  };

  Ft.prototype.mergeDeepWith = function (n) {
    var o = t.call(arguments, 1);
    return me(this, we(n), o);
  };

  Ft.prototype.mergeDeepIn = function (n) {
    var o = t.call(arguments, 1);
    return this.updateIn(n, fe(), function (t) {
      return 'function' == typeof t.mergeDeep ? t.mergeDeep.apply(t, o) : o[o.length - 1];
    });
  };

  Ft.prototype.sort = function (t) {
    return Qe(yr(this, t));
  };

  Ft.prototype.sortBy = function (t, n) {
    return Qe(yr(this, n, t));
  };

  Ft.prototype.withMutations = function (t) {
    var n = this.asMutable();
    t(n);
    return n.wasAltered() ? n.__ensureOwner(this.__ownerID) : this;
  };

  Ft.prototype.asMutable = function () {
    return this.__ownerID ? this : this.__ensureOwner(new x());
  };

  Ft.prototype.asImmutable = function () {
    return this.__ensureOwner();
  };

  Ft.prototype.wasAltered = function () {
    return this.__altered;
  };

  Ft.prototype.__iterator = function (t, n) {
    return new ue(this, t, n);
  };

  Ft.prototype.__iterate = function (t, n) {
    var o = this,
      u = 0;
    if (this._root)
      this._root.iterate(function (n) {
        u++;
        return t(n[1], n[0], o);
      }, n);
    return u;
  };

  Ft.prototype.__ensureOwner = function (t) {
    return t === this.__ownerID ? this : t ? he(this.size, this._root, t, this.__hash) : ((this.__ownerID = t), (this.__altered = false), this);
  };

  Ft.isMap = Gt;
  var Zt,
    $t = '@@__IMMUTABLE_MAP__@@',
    te = Ft.prototype;

  function ee(t, n) {
    this.ownerID = t;
    this.entries = n;
  }

  function re(t, n, o) {
    this.ownerID = t;
    this.bitmap = n;
    this.nodes = o;
  }

  function ne(t, n, o) {
    this.ownerID = t;
    this.count = n;
    this.nodes = o;
  }

  function ie(t, n, o) {
    this.ownerID = t;
    this.keyHash = n;
    this.entries = o;
  }

  function oe(t, n, o) {
    this.ownerID = t;
    this.keyHash = n;
    this.entry = o;
  }

  function ue(t, n, o) {
    this._type = n;
    this._reverse = o;
    this._stack = t._root && ae(t._root);
  }

  function se(t, n) {
    return V(t, n[0], n[1]);
  }

  function ae(t, n) {
    return {
      node: t,
      index: 0,
      __prev: n,
    };
  }

  function he(t, n, o, u) {
    var s = Object.create(te);
    s.size = t;
    s._root = n;
    s.__ownerID = o;
    s.__hash = u;
    s.__altered = false;
    return s;
  }

  function fe() {
    return Zt || (Zt = he(0));
  }

  function ce(t, n, o) {
    var u, s;

    if (t._root) {
      var h = E(D),
        f = E(M);
      if (((u = _e(t._root, t.__ownerID, 0, undefined, n, o, h, f)), !f.value)) return t;
      s = t.size + (h.value ? (o === q ? -1 : 1) : 0);
    } else {
      if (o === q) return t;
      s = 1;
      u = new ee(t.__ownerID, [[n, o]]);
    }

    if (t.__ownerID) {
      t.size = s;
      t._root = u;
      t.__hash = undefined;
      t.__altered = true;
      return t;
    } else return u ? he(s, u) : fe();
  }

  function _e(t, n, o, u, s, h, f, c) {
    return t ? t.update(n, o, u, s, h, f, c) : h === q ? t : (O(c), O(f), new oe(n, u, [s, h]));
  }

  function pe(t) {
    return t.constructor === oe || t.constructor === ie;
  }

  function ve(t, n, o, u, s) {
    if (t.keyHash === u) return new ie(n, u, [t.entry, s]);
    var h,
      f = (0 === o ? t.keyHash : t.keyHash >>> o) & b,
      c = (0 === o ? u : u >>> o) & b;
    return new re(n, (1 << f) | (1 << c), f === c ? [ve(t, n, o + z, u, s)] : ((h = new oe(n, u, s)), f < c ? [t, h] : [h, t]));
  }

  function le(t, n, o, u) {
    if (!t) t = new x();

    for (var s = new oe(t, Kt(o), [o, u]), h = 0; h < n.length; h++) {
      var f = n[h];
      s = s.update(t, 0, undefined, f[0], f[1]);
    }

    return s;
  }

  function ye(t, n, o, u) {
    for (var s = 0, h = 0, f = new Array(o), c = 0, _ = 1, p = n.length; c < p; c++, _ <<= 1) {
      var v = n[c];

      if (undefined !== v && c !== u) {
        s |= _;
        f[h++] = v;
      }
    }

    return new re(t, s, f);
  }

  function de(t, n, o, u, s) {
    for (var h = 0, f = new Array(I), c = 0; 0 !== o; c++, o >>>= 1) f[c] = 1 & o ? n[h++] : undefined;

    f[u] = s;
    return new ne(t, h + 1, f);
  }

  function me(t, n, o) {
    for (var s = [], h = 0; h < o.length; h++) {
      var c = o[h],
        _ = u(c);

      if (!f(c))
        _ = _.map(function (t) {
          return gt(t);
        });
      s.push(_);
    }

    return Se(t, n, s);
  }

  function ge(t, n, o) {
    return t && t.mergeDeep && f(n) ? t.mergeDeep(n) : It(t, n) ? t : n;
  }

  function we(t) {
    return function (n, o, u) {
      if (n && n.mergeDeepWith && f(o)) return n.mergeDeepWith(t, o);
      var s = t(n, o, u);
      return It(n, s) ? n : s;
    };
  }

  function Se(t, n, o) {
    return 0 ===
      (o = o.filter(function (t) {
        return 0 !== t.size;
      })).length
      ? t
      : 0 !== t.size || t.__ownerID || 1 !== o.length
      ? t.withMutations(function (t) {
          for (
            var u = n
                ? function (o, u) {
                    t.update(u, q, function (t) {
                      return t === q ? o : n(t, o, u);
                    });
                  }
                : function (n, o) {
                    t.set(o, n);
                  },
              s = 0;
            s < o.length;
            s++
          )
            o[s].forEach(u);
        })
      : t.constructor(o[0]);
  }

  function ze(t, n, o, u) {
    var s = t === q,
      h = n.next();

    if (h.done) {
      var f = s ? o : t,
        c = u(f);
      return c === f ? t : c;
    }

    Dt(s || (t && t.set), 'invalid keyPath');
    var _ = h.value,
      p = s ? q : t.get(_, q),
      v = ze(p, n, o, u);
    return v === p ? t : v === q ? t.remove(_) : (s ? fe() : t).set(_, v);
  }

  function Ie(t) {
    t = ((t = (858993459 & (t -= (t >> 1) & 1431655765)) + ((t >> 2) & 858993459)) + (t >> 4)) & 252645135;
    t += t >> 8;
    return 127 & (t += t >> 16);
  }

  function be(t, n, o, u) {
    var s = u ? t : k(t);
    s[n] = o;
    return s;
  }

  function qe(t, n, o, u) {
    var s = t.length + 1;

    if (u && n + 1 === s) {
      t[n] = o;
      return t;
    }

    for (var h = new Array(s), f = 0, c = 0; c < s; c++) c === n ? ((h[c] = o), (f = -1)) : (h[c] = t[c + f]);

    return h;
  }

  function De(t, n, o) {
    var u = t.length - 1;

    if (o && n === u) {
      t.pop();
      return t;
    }

    for (var s = new Array(u), h = 0, f = 0; f < u; f++) {
      if (f === n) h = 1;
      s[f] = t[f + h];
    }

    return s;
  }

  te[$t] = true;
  te.delete = te.remove;
  te.removeIn = te.deleteIn;

  ee.prototype.get = function (t, n, o, u) {
    for (var s = this.entries, h = 0, f = s.length; h < f; h++) if (It(o, s[h][0])) return s[h][1];

    return u;
  };

  ee.prototype.update = function (t, n, o, u, s, h, f) {
    for (var c = s === q, _ = this.entries, p = 0, v = _.length; p < v && !It(u, _[p][0]); p++);

    var l = p < v;
    if (l ? _[p][1] === s : c) return this;

    if ((O(f), (c || !l) && O(h), !c || 1 !== _.length)) {
      if (!l && !c && _.length >= Me) return le(t, _, u, s);
      var y = t && t === this.ownerID,
        w = y ? _ : k(_);
      if (l) c ? (p === v - 1 ? w.pop() : (w[p] = w.pop())) : (w[p] = [u, s]);
      else w.push([u, s]);

      if (y) {
        this.entries = w;
        return this;
      } else return new ee(t, w);
    }
  };

  re.prototype.get = function (t, n, o, u) {
    if (undefined === n) n = Kt(o);
    var s = 1 << ((0 === t ? n : n >>> t) & b),
      h = this.bitmap;
    return 0 == (h & s) ? u : this.nodes[Ie(h & (s - 1))].get(t + z, n, o, u);
  };

  re.prototype.update = function (t, n, o, u, s, h, f) {
    if (undefined === o) o = Kt(u);

    var c = (0 === n ? o : o >>> n) & b,
      _ = 1 << c,
      p = this.bitmap,
      v = 0 != (p & _);

    if (!v && s === q) return this;

    var l = Ie(p & (_ - 1)),
      y = this.nodes,
      w = v ? y[l] : undefined,
      S = _e(w, t, n + z, o, u, s, h, f);

    if (S === w) return this;
    if (!v && S && y.length >= Ee) return de(t, y, p, c, S);
    if (v && !S && 2 === y.length && pe(y[1 ^ l])) return y[1 ^ l];
    if (v && S && 1 === y.length && pe(S)) return S;
    var I = t && t === this.ownerID,
      D = v ? (S ? p : p ^ _) : p | _,
      M = v ? (S ? be(y, l, S, I) : De(y, l, I)) : qe(y, l, S, I);

    if (I) {
      this.bitmap = D;
      this.nodes = M;
      return this;
    } else return new re(t, D, M);
  };

  ne.prototype.get = function (t, n, o, u) {
    if (undefined === n) n = Kt(o);
    var s = (0 === t ? n : n >>> t) & b,
      h = this.nodes[s];
    return h ? h.get(t + z, n, o, u) : u;
  };

  ne.prototype.update = function (t, n, o, u, s, h, f) {
    if (undefined === o) o = Kt(u);

    var c = (0 === n ? o : o >>> n) & b,
      _ = s === q,
      p = this.nodes,
      v = p[c];

    if (_ && !v) return this;

    var l = _e(v, t, n + z, o, u, s, h, f);

    if (l === v) return this;
    var y = this.count;

    if (v) {
      if (!l && --y < Oe) return ye(t, p, y, c);
    } else y++;

    var w = t && t === this.ownerID,
      S = be(p, c, l, w);

    if (w) {
      this.count = y;
      this.nodes = S;
      return this;
    } else return new ne(t, y, S);
  };

  ie.prototype.get = function (t, n, o, u) {
    for (var s = this.entries, h = 0, f = s.length; h < f; h++) if (It(o, s[h][0])) return s[h][1];

    return u;
  };

  ie.prototype.update = function (t, n, o, u, s, h, f) {
    if (undefined === o) o = Kt(u);
    var c = s === q;
    if (o !== this.keyHash)
      if (c) return this;
      else {
        O(f);
        O(h);
        return ve(this, t, n, o, [u, s]);
      }

    for (var _ = this.entries, p = 0, v = _.length; p < v && !It(u, _[p][0]); p++);

    var l = p < v;
    if (l ? _[p][1] === s : c) return this;
    if ((O(f), (c || !l) && O(h), c && 2 === v)) return new oe(t, this.keyHash, _[1 ^ p]);
    var y = t && t === this.ownerID,
      w = y ? _ : k(_);
    if (l) c ? (p === v - 1 ? w.pop() : (w[p] = w.pop())) : (w[p] = [u, s]);
    else w.push([u, s]);

    if (y) {
      this.entries = w;
      return this;
    } else return new ie(t, this.keyHash, w);
  };

  oe.prototype.get = function (t, n, o, u) {
    return It(o, this.entry[0]) ? this.entry[1] : u;
  };

  oe.prototype.update = function (t, n, o, u, s, h, f) {
    var c = s === q,
      _ = It(u, this.entry[0]);

    if (_ ? s === this.entry[1] : c) return this;
    else {
      O(f);
      return c ? void O(h) : _ ? (t && t === this.ownerID ? ((this.entry[1] = s), this) : new oe(t, this.keyHash, [u, s])) : (O(h), ve(this, t, n, Kt(u), [u, s]));
    }
  };

  ee.prototype.iterate = ie.prototype.iterate = function (t, n) {
    for (var o = this.entries, u = 0, s = o.length - 1; u <= s; u++) if (false === t(o[n ? s - u : u])) return false;
  };

  re.prototype.iterate = ne.prototype.iterate = function (t, n) {
    for (var o = this.nodes, u = 0, s = o.length - 1; u <= s; u++) {
      var h = o[n ? s - u : u];
      if (h && false === h.iterate(t, n)) return false;
    }
  };

  oe.prototype.iterate = function (t, n) {
    return t(this.entry);
  };

  n(ue, H);

  ue.prototype.next = function () {
    for (var t = this._type, n = this._stack; n; ) {
      var o,
        u = n.node,
        s = n.index++;

      if (u.entry) {
        if (0 === s) return se(t, u.entry);
      } else if (u.entries) {
        if (s <= (o = u.entries.length - 1)) return se(t, u.entries[this._reverse ? o - s : s]);
      } else if (s <= (o = u.nodes.length - 1)) {
        var h = u.nodes[this._reverse ? o - s : s];

        if (h) {
          if (h.entry) return se(t, h.entry);
          n = this._stack = ae(h, n);
        }

        continue;
      }

      n = this._stack = this._stack.__prev;
    }

    return {
      value: undefined,
      done: true,
    };
  };

  var Me = 8,
    Ee = 16,
    Oe = 8;

  function xe(t) {
    var n = Be();
    if (null === t || undefined === t) return n;
    if (ke(t)) return t;
    var o = s(t),
      u = o.size;
    if (0 === u) return n;
    else {
      Xt(u);
      return u > 0 && u < I
        ? We(0, u, z, null, new Ke(o.toArray()))
        : n.withMutations(function (t) {
            t.setSize(u);
            o.forEach(function (n, o) {
              return t.set(o, n);
            });
          });
    }
  }

  function ke(t) {
    return !(!t || !t[Ae]);
  }

  n(xe, xt);

  xe.of = function () {
    return this(arguments);
  };

  xe.prototype.toString = function () {
    return this.__toString('List [', ']');
  };

  xe.prototype.get = function (t, n) {
    if ((t = j(this, t)) >= 0 && t < this.size) {
      var o = Pe(this, (t += this._origin));
      return o && o.array[t & b];
    }

    return n;
  };

  xe.prototype.set = function (t, n) {
    return Ce(this, t, n);
  };

  xe.prototype.remove = function (t) {
    return this.has(t) ? (0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1)) : this;
  };

  xe.prototype.insert = function (t, n) {
    return this.splice(t, 0, n);
  };

  xe.prototype.clear = function () {
    return 0 === this.size
      ? this
      : this.__ownerID
      ? ((this.size = this._origin = this._capacity = 0), (this._level = z), (this._root = this._tail = null), (this.__hash = undefined), (this.__altered = true), this)
      : Be();
  };

  xe.prototype.push = function () {
    var t = arguments,
      n = this.size;
    return this.withMutations(function (o) {
      He(o, 0, n + t.length);

      for (var u = 0; u < t.length; u++) o.set(n + u, t[u]);
    });
  };

  xe.prototype.pop = function () {
    return He(this, 0, -1);
  };

  xe.prototype.unshift = function () {
    var t = arguments;
    return this.withMutations(function (n) {
      He(n, -t.length);

      for (var o = 0; o < t.length; o++) n.set(o, t[o]);
    });
  };

  xe.prototype.shift = function () {
    return He(this, 1);
  };

  xe.prototype.merge = function () {
    return Ve(this, undefined, arguments);
  };

  xe.prototype.mergeWith = function (n) {
    return Ve(this, n, t.call(arguments, 1));
  };

  xe.prototype.mergeDeep = function () {
    return Ve(this, ge, arguments);
  };

  xe.prototype.mergeDeepWith = function (n) {
    var o = t.call(arguments, 1);
    return Ve(this, we(n), o);
  };

  xe.prototype.setSize = function (t) {
    return He(this, 0, t);
  };

  xe.prototype.slice = function (t, n) {
    var o = this.size;
    return R(t, n, o) ? this : He(this, U(t, o), L(n, o));
  };

  xe.prototype.__iterator = function (t, n) {
    var o = 0,
      u = Te(this, n);
    return new H(function () {
      var n = u();
      return n === Le
        ? {
            value: undefined,
            done: true,
          }
        : V(t, o++, n);
    });
  };

  xe.prototype.__iterate = function (t, n) {
    for (var o, u = 0, s = Te(this, n); (o = s()) !== Le && false !== t(o, u++, this); );

    return u;
  };

  xe.prototype.__ensureOwner = function (t) {
    return t === this.__ownerID ? this : t ? We(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : ((this.__ownerID = t), this);
  };

  xe.isList = ke;
  var Ae = '@@__IMMUTABLE_LIST__@@',
    je = xe.prototype;

  function Ke(t, n) {
    this.array = t;
    this.ownerID = n;
  }

  je[Ae] = true;
  je.delete = je.remove;
  je.setIn = te.setIn;
  je.deleteIn = je.removeIn = te.removeIn;
  je.update = te.update;
  je.updateIn = te.updateIn;
  je.mergeIn = te.mergeIn;
  je.mergeDeepIn = te.mergeDeepIn;
  je.withMutations = te.withMutations;
  je.asMutable = te.asMutable;
  je.asImmutable = te.asImmutable;
  je.wasAltered = te.wasAltered;

  Ke.prototype.removeBefore = function (t, n, o) {
    if (o === n ? 1 << n : 0 === this.array.length) return this;
    var u = (o >>> n) & b;
    if (u >= this.array.length) return new Ke([], t);
    var s,
      h = 0 === u;

    if (n > 0) {
      var f = this.array[u];
      if ((s = f && f.removeBefore(t, n - z, o)) === f && h) return this;
    }

    if (h && !s) return this;
    var c = Ne(this, t);
    if (!h) for (var _ = 0; _ < u; _++) c.array[_] = undefined;
    if (s) c.array[u] = s;
    return c;
  };

  Ke.prototype.removeAfter = function (t, n, o) {
    if (o === (n ? 1 << n : 0) || 0 === this.array.length) return this;
    var u,
      s = ((o - 1) >>> n) & b;
    if (s >= this.array.length) return this;

    if (n > 0) {
      var h = this.array[s];
      if ((u = h && h.removeAfter(t, n - z, o)) === h && s === this.array.length - 1) return this;
    }

    var f = Ne(this, t);
    f.array.splice(s + 1);
    if (u) f.array[s] = u;
    return f;
  };

  var Re,
    Ue,
    Le = {};

  function Te(t, n) {
    var o = t._origin,
      u = t._capacity,
      s = Ye(u),
      h = t._tail;
    return f(t._root, t._level, 0);

    function f(t, n, o) {
      return 0 === n ? c(t, o) : _(t, n, o);
    }

    function c(t, f) {
      var c = f === s ? h && h.array : t && t.array,
        _ = f > o ? 0 : o - f,
        p = u - f;

      if (p > I) p = I;
      return function () {
        if (_ === p) return Le;
        var t = n ? --p : _++;
        return c && c[t];
      };
    }

    function _(t, s, h) {
      var c,
        _ = t && t.array,
        p = h > o ? 0 : (o - h) >> s,
        v = 1 + ((u - h) >> s);

      if (v > I) v = I;
      return function () {
        for (;;) {
          if (c) {
            var t = c();
            if (t !== Le) return t;
            c = null;
          }

          if (p === v) return Le;
          var o = n ? --v : p++;
          c = f(_ && _[o], s - z, h + (o << s));
        }
      };
    }
  }

  function We(t, n, o, u, s, h, f) {
    var c = Object.create(je);
    c.size = n - t;
    c._origin = t;
    c._capacity = n;
    c._level = o;
    c._root = u;
    c._tail = s;
    c.__ownerID = h;
    c.__hash = f;
    c.__altered = false;
    return c;
  }

  function Be() {
    return Re || (Re = We(0, 0, z));
  }

  function Ce(t, n, o) {
    if ((n = j(t, n)) != n) return t;
    if (n >= t.size || n < 0)
      return t.withMutations(function (t) {
        if (n < 0) He(t, n).set(0, o);
        else He(t, 0, n + 1).set(n, o);
      });
    n += t._origin;
    var u = t._tail,
      s = t._root,
      h = E(M);
    if (n >= Ye(t._capacity)) u = Je(u, t.__ownerID, 0, n, o, h);
    else s = Je(s, t.__ownerID, t._level, n, o, h);
    return h.value ? (t.__ownerID ? ((t._root = s), (t._tail = u), (t.__hash = undefined), (t.__altered = true), t) : We(t._origin, t._capacity, t._level, s, u)) : t;
  }

  function Je(t, n, o, u, s, h) {
    var f,
      c = (u >>> o) & b,
      _ = t && c < t.array.length;

    if (!_ && undefined === s) return t;

    if (o > 0) {
      var p = t && t.array[c],
        v = Je(p, n, o - z, u, s, h);
      if (v === p) return t;
      else {
        (f = Ne(t, n)).array[c] = v;
        return f;
      }
    }

    if (_ && t.array[c] === s) return t;
    else {
      O(h);
      f = Ne(t, n);
      if (undefined === s && c === f.array.length - 1) f.array.pop();
      else f.array[c] = s;
      return f;
    }
  }

  function Ne(t, n) {
    return n && t && n === t.ownerID ? t : new Ke(t ? t.array.slice() : [], n);
  }

  function Pe(t, n) {
    if (n >= Ye(t._capacity)) return t._tail;

    if (n < 1 << (t._level + z)) {
      for (var o = t._root, u = t._level; o && u > 0; ) {
        o = o.array[(n >>> u) & b];
        u -= z;
      }

      return o;
    }
  }

  function He(t, n, o) {
    if (undefined !== n) n |= 0;
    if (undefined !== o) o |= 0;
    var u = t.__ownerID || new x(),
      s = t._origin,
      h = t._capacity,
      f = s + n,
      c = undefined === o ? h : o < 0 ? h + o : s + o;
    if (f === s && c === h) return t;
    if (f >= c) return t.clear();

    for (var _ = t._level, p = t._root, v = 0; f + v < 0; ) {
      p = new Ke(p && p.array.length ? [undefined, p] : [], u);
      v += 1 << (_ += z);
    }

    if (v) {
      f += v;
      s += v;
      c += v;
      h += v;
    }

    for (var l = Ye(h), y = Ye(c); y >= 1 << (_ + z); ) {
      p = new Ke(p && p.array.length ? [p] : [], u);
      _ += z;
    }

    var w = t._tail,
      S = y < l ? Pe(t, c - 1) : y > l ? new Ke([], u) : w;

    if (w && y > l && f < h && w.array.length) {
      for (var I = (p = Ne(p, u)), q = _; q > z; q -= z) {
        var D = (l >>> q) & b;
        I = I.array[D] = Ne(I.array[D], u);
      }

      I.array[(l >>> z) & b] = w;
    }

    if ((c < h && (S = S && S.removeAfter(u, 0, c)), f >= y)) {
      f -= y;
      c -= y;
      _ = z;
      p = null;
      S = S && S.removeBefore(u, 0, f);
    } else if (f > s || y < l) {
      for (v = 0; p; ) {
        var M = (f >>> _) & b;
        if ((M !== y >>> _) & b) break;
        if (M) v += (1 << _) * M;
        _ -= z;
        p = p.array[M];
      }

      if (p && f > s) p = p.removeBefore(u, _, f - v);
      if (p && y < l) p = p.removeAfter(u, _, y - v);

      if (v) {
        f -= v;
        c -= v;
      }
    }

    if (t.__ownerID) {
      t.size = c - f;
      t._origin = f;
      t._capacity = c;
      t._level = _;
      t._root = p;
      t._tail = S;
      t.__hash = undefined;
      t.__altered = true;
      return t;
    } else return We(f, c, _, p, S);
  }

  function Ve(t, n, o) {
    for (var u = [], h = 0, c = 0; c < o.length; c++) {
      var _ = o[c],
        p = s(_);
      if (p.size > h) h = p.size;
      if (!f(_))
        p = p.map(function (t) {
          return gt(t);
        });
      u.push(p);
    }

    if (h > t.size) t = t.setSize(h);
    return Se(t, n, u);
  }

  function Ye(t) {
    return t < I ? 0 : ((t - 1) >>> z) << z;
  }

  function Qe(t) {
    return null === t || undefined === t
      ? Ge()
      : Xe(t)
      ? t
      : Ge().withMutations(function (n) {
          var o = u(t);
          Xt(o.size);
          o.forEach(function (t, o) {
            return n.set(o, t);
          });
        });
  }

  function Xe(t) {
    return Gt(t) && v(t);
  }

  function Fe(t, n, o, u) {
    var s = Object.create(Qe.prototype);
    s.size = t ? t.size : 0;
    s._map = t;
    s._list = n;
    s.__ownerID = o;
    s.__hash = u;
    return s;
  }

  function Ge() {
    return Ue || (Ue = Fe(fe(), Be()));
  }

  function Ze(t, n, o) {
    var u,
      s,
      h = t._map,
      f = t._list,
      c = h.get(n),
      _ = undefined !== c;

    if (o === q) {
      if (!_) return t;

      if (f.size >= I && f.size >= 2 * h.size) {
        u = (s = f.filter(function (t, n) {
          return undefined !== t && c !== n;
        }))
          .toKeyedSeq()
          .map(function (t) {
            return t[0];
          })
          .flip()
          .toMap();
        if (t.__ownerID) u.__ownerID = s.__ownerID = t.__ownerID;
      } else {
        u = h.remove(n);
        s = c === f.size - 1 ? f.pop() : f.set(c, undefined);
      }
    } else if (_) {
      if (o === f.get(c)[1]) return t;
      u = h;
      s = f.set(c, [n, o]);
    } else {
      u = h.set(n, f.size);
      s = f.set(f.size, [n, o]);
    }

    if (t.__ownerID) {
      t.size = u.size;
      t._map = u;
      t._list = s;
      t.__hash = undefined;
      return t;
    } else return Fe(u, s);
  }

  function $e(t, n) {
    this._iter = t;
    this._useKeys = n;
    this.size = t.size;
  }

  function tr(t) {
    this._iter = t;
    this.size = t.size;
  }

  function er(t) {
    this._iter = t;
    this.size = t.size;
  }

  function rr(t) {
    this._iter = t;
    this.size = t.size;
  }

  function nr(t) {
    var n = br(t);
    n._iter = t;
    n.size = t.size;

    n.flip = function () {
      return t;
    };

    n.reverse = function () {
      var n = t.reverse.apply(this);

      n.flip = function () {
        return t.reverse();
      };

      return n;
    };

    n.has = function (n) {
      return t.includes(n);
    };

    n.includes = function (n) {
      return t.has(n);
    };

    n.cacheResult = qr;

    n.__iterateUncached = function (n, o) {
      var u = this;
      return t.__iterate(function (t, o) {
        return false !== n(o, t, u);
      }, o);
    };

    n.__iteratorUncached = function (n, o) {
      if (n === C) {
        var u = t.__iterator(n, o);

        return new H(function () {
          var t = u.next();

          if (!t.done) {
            var n = t.value[0];
            t.value[0] = t.value[1];
            t.value[1] = n;
          }

          return t;
        });
      }

      return t.__iterator(n === B ? W : B, o);
    };

    return n;
  }

  function ir(t, n, o) {
    var u = br(t);
    u.size = t.size;

    u.has = function (n) {
      return t.has(n);
    };

    u.get = function (u, s) {
      var h = t.get(u, q);
      return h === q ? s : n.call(o, h, u, t);
    };

    u.__iterateUncached = function (u, s) {
      var h = this;
      return t.__iterate(function (t, s, f) {
        return false !== u(n.call(o, t, s, f), s, h);
      }, s);
    };

    u.__iteratorUncached = function (u, s) {
      var h = t.__iterator(C, s);

      return new H(function () {
        var s = h.next();
        if (s.done) return s;
        var f = s.value,
          c = f[0];
        return V(u, c, n.call(o, f[1], c, t), s);
      });
    };

    return u;
  }

  function or(t, n) {
    var o = br(t);
    o._iter = t;
    o.size = t.size;

    o.reverse = function () {
      return t;
    };

    if (t.flip)
      o.flip = function () {
        var n = nr(t);

        n.reverse = function () {
          return t.flip();
        };

        return n;
      };

    o.get = function (o, u) {
      return t.get(n ? o : -1 - o, u);
    };

    o.has = function (o) {
      return t.has(n ? o : -1 - o);
    };

    o.includes = function (n) {
      return t.includes(n);
    };

    o.cacheResult = qr;

    o.__iterate = function (n, o) {
      var u = this;
      return t.__iterate(function (t, o) {
        return n(t, o, u);
      }, !o);
    };

    o.__iterator = function (n, o) {
      return t.__iterator(n, !o);
    };

    return o;
  }

  function ur(t, n, o, u) {
    var s = br(t);

    if (u) {
      s.has = function (u) {
        var s = t.get(u, q);
        return s !== q && !!n.call(o, s, u, t);
      };

      s.get = function (u, s) {
        var h = t.get(u, q);
        return h !== q && n.call(o, h, u, t) ? h : s;
      };
    }

    s.__iterateUncached = function (s, h) {
      var f = this,
        c = 0;

      t.__iterate(function (t, h, _) {
        if (n.call(o, t, h, _)) {
          c++;
          return s(t, u ? h : c - 1, f);
        }
      }, h);

      return c;
    };

    s.__iteratorUncached = function (s, h) {
      var f = t.__iterator(C, h),
        c = 0;

      return new H(function () {
        for (;;) {
          var h = f.next();
          if (h.done) return h;
          var _ = h.value,
            p = _[0],
            v = _[1];
          if (n.call(o, v, p, t)) return V(s, u ? p : c++, v, h);
        }
      });
    };

    return s;
  }

  function sr(t, n, o) {
    var u = Ft().asMutable();

    t.__iterate(function (s, h) {
      u.update(n.call(o, s, h, t), 0, function (t) {
        return t + 1;
      });
    });

    return u.asImmutable();
  }

  function ar(t, n, o) {
    var u = c(t),
      s = (v(t) ? Qe() : Ft()).asMutable();

    t.__iterate(function (h, f) {
      s.update(n.call(o, h, f, t), function (t) {
        (t = t || []).push(u ? [f, h] : h);
        return t;
      });
    });

    var h = Ir(t);
    return s.map(function (n) {
      return wr(t, h(n));
    });
  }

  function hr(t, n, o, u) {
    var s = t.size;
    if ((undefined !== n && (n |= 0), undefined !== o && (o |= 0), R(n, o, s))) return t;
    var h = U(n, s),
      f = L(o, s);
    if (h != h || f != f) return hr(t.toSeq().cacheResult(), n, o, u);

    var c,
      _ = f - h;

    if (_ == _) c = _ < 0 ? 0 : _;
    var p = br(t);
    p.size = 0 === c ? c : (t.size && c) || undefined;
    if (!u && ct(t) && c >= 0)
      p.get = function (n, o) {
        return (n = j(this, n)) >= 0 && n < c ? t.get(n + h, o) : o;
      };

    p.__iterateUncached = function (n, o) {
      var s = this;
      if (0 === c) return 0;
      if (o) return this.cacheResult().__iterate(n, o);
      var f = 0,
        _ = true,
        p = 0;

      t.__iterate(function (t, o) {
        if (!_ || !(_ = f++ < h)) {
          p++;
          return false !== n(t, u ? o : p - 1, s) && p !== c;
        }
      });

      return p;
    };

    p.__iteratorUncached = function (n, o) {
      if (0 !== c && o) return this.cacheResult().__iterator(n, o);

      var s = 0 !== c && t.__iterator(n, o),
        f = 0,
        _ = 0;

      return new H(function () {
        for (; f++ < h; ) s.next();

        if (++_ > c)
          return {
            value: undefined,
            done: true,
          };
        var t = s.next();
        return u || n === B ? t : V(n, _ - 1, n === W ? undefined : t.value[1], t);
      });
    };

    return p;
  }

  function fr(t, n, o) {
    var u = br(t);

    u.__iterateUncached = function (u, s) {
      var h = this;
      if (s) return this.cacheResult().__iterate(u, s);
      var f = 0;

      t.__iterate(function (t, s, c) {
        return n.call(o, t, s, c) && ++f && u(t, s, h);
      });

      return f;
    };

    u.__iteratorUncached = function (u, s) {
      var h = this;
      if (s) return this.cacheResult().__iterator(u, s);

      var f = t.__iterator(C, s),
        c = true;

      return new H(function () {
        if (!c)
          return {
            value: undefined,
            done: true,
          };
        var t = f.next();
        if (t.done) return t;
        var s = t.value,
          _ = s[0],
          p = s[1];
        if (n.call(o, p, _, h)) return u === C ? t : V(u, _, p, t);
        else {
          c = false;
          return {
            value: undefined,
            done: true,
          };
        }
      });
    };

    return u;
  }

  function cr(t, n, o, u) {
    var s = br(t);

    s.__iterateUncached = function (s, h) {
      var f = this;
      if (h) return this.cacheResult().__iterate(s, h);
      var c = true,
        _ = 0;

      t.__iterate(function (t, h, p) {
        if (!c || !(c = n.call(o, t, h, p))) {
          _++;
          return s(t, u ? h : _ - 1, f);
        }
      });

      return _;
    };

    s.__iteratorUncached = function (s, h) {
      var f = this;
      if (h) return this.cacheResult().__iterator(s, h);

      var c = t.__iterator(C, h),
        _ = true,
        p = 0;

      return new H(function () {
        var t, h, v;

        do {
          if ((t = c.next()).done) return u || s === B ? t : V(s, p++, s === W ? undefined : t.value[1], t);
          var l = t.value;
          h = l[0];
          v = l[1];
          if (_) _ = n.call(o, v, h, f);
        } while (_);

        return s === C ? t : V(s, h, v, t);
      });
    };

    return s;
  }

  function _r(t, n) {
    var o = c(t),
      s = [t]
        .concat(n)
        .map(function (t) {
          if (f(t)) {
            if (o) t = u(t);
          } else t = o ? pt(t) : vt(Array.isArray(t) ? t : [t]);
          return t;
        })
        .filter(function (t) {
          return 0 !== t.size;
        });
    if (0 === s.length) return t;

    if (1 === s.length) {
      var h = s[0];
      if (h === t || (o && c(h)) || (_(t) && _(h))) return h;
    }

    var p = new st(s);
    if (o) p = p.toKeyedSeq();
    else if (!_(t)) p = p.toSetSeq();
    (p = p.flatten(true)).size = s.reduce(function (t, n) {
      if (undefined !== t) {
        var o = n.size;
        if (undefined !== o) return t + o;
      }
    }, 0);
    return p;
  }

  function pr(t, n, o) {
    var u = br(t);

    u.__iterateUncached = function (u, s) {
      var h = 0,
        c = false;

      (function t(_, p) {
        var v = this;

        _.__iterate(function (s, _) {
          if ((!n || p < n) && f(s)) t(s, p + 1);
          else if (false === u(s, o ? _ : h++, v)) c = true;
          return !c;
        }, s);
      })(t, 0);

      return h;
    };

    u.__iteratorUncached = function (u, s) {
      var h = t.__iterator(u, s),
        c = [],
        _ = 0;

      return new H(function () {
        for (; h; ) {
          var t = h.next();

          if (false === t.done) {
            var p = t.value;
            if ((u === C && (p = p[1]), (n && !(c.length < n)) || !f(p))) return o ? t : V(u, _++, p, t);
            c.push(h);
            h = p.__iterator(u, s);
          } else h = c.pop();
        }

        return {
          value: undefined,
          done: true,
        };
      });
    };

    return u;
  }

  function vr(t, n, o) {
    var u = Ir(t);
    return t
      .toSeq()
      .map(function (s, h) {
        return u(n.call(o, s, h, t));
      })
      .flatten(true);
  }

  function lr(t, n) {
    var o = br(t);
    o.size = t.size && 2 * t.size - 1;

    o.__iterateUncached = function (o, u) {
      var s = this,
        h = 0;

      t.__iterate(function (t, u) {
        return (!h || false !== o(n, h++, s)) && false !== o(t, h++, s);
      }, u);

      return h;
    };

    o.__iteratorUncached = function (o, u) {
      var s,
        h = t.__iterator(B, u),
        f = 0;

      return new H(function () {
        return (!s || f % 2) && (s = h.next()).done ? s : f % 2 ? V(o, f++, n) : V(o, f++, s.value, s);
      });
    };

    return o;
  }

  function yr(t, n, o) {
    if (!n) n = Dr;
    var u = c(t),
      s = 0,
      h = t
        .toSeq()
        .map(function (n, u) {
          return [u, n, s++, o ? o(n, u, t) : n];
        })
        .toArray();
    h.sort(function (t, o) {
      return n(t[3], o[3]) || t[2] - o[2];
    }).forEach(
      u
        ? function (t, n) {
            h[n].length = 2;
          }
        : function (t, n) {
            h[n] = t[1];
          }
    );
    return u ? tt(h) : _(t) ? et(h) : rt(h);
  }

  function dr(t, n, o) {
    if ((n || (n = Dr), o)) {
      var u = t
        .toSeq()
        .map(function (n, u) {
          return [n, o(n, u, t)];
        })
        .reduce(function (t, o) {
          return mr(n, t[1], o[1]) ? o : t;
        });
      return u && u[0];
    }

    return t.reduce(function (t, o) {
      return mr(n, t, o) ? o : t;
    });
  }

  function mr(t, n, o) {
    var u = t(o, n);
    return 0 === u && o !== n ? undefined === o || null === o || o != o : u > 0;
  }

  function gr(t, n, u) {
    var s = br(t);
    s.size = new st(u)
      .map(function (t) {
        return t.size;
      })
      .min();

    s.__iterate = function (t, n) {
      for (var o, u = this.__iterator(B, n), s = 0; !(o = u.next()).done && false !== t(o.value, s++, this); );

      return s;
    };

    s.__iteratorUncached = function (t, s) {
      var h = u.map(function (t) {
          t = o(t);
          return F(s ? t.reverse() : t);
        }),
        f = 0,
        c = false;
      return new H(function () {
        var o;

        if (!c) {
          o = h.map(function (t) {
            return t.next();
          });
          c = o.some(function (t) {
            return t.done;
          });
        }

        return c
          ? {
              value: undefined,
              done: true,
            }
          : V(
              t,
              f++,
              n.apply(
                null,
                o.map(function (t) {
                  return t.value;
                })
              )
            );
      });
    };

    return s;
  }

  function wr(t, n) {
    return ct(t) ? n : t.constructor(n);
  }

  function Sr(t) {
    if (t !== Object(t)) throw new TypeError('Expected [K, V] tuple: ' + t);
  }

  function zr(t) {
    Xt(t.size);
    return A(t);
  }

  function Ir(t) {
    return c(t) ? u : _(t) ? s : h;
  }

  function br(t) {
    return Object.create((c(t) ? tt : _(t) ? et : rt).prototype);
  }

  function qr() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();

      this.size = this._iter.size;
      return this;
    } else return $.prototype.cacheResult.call(this);
  }

  function Dr(t, n) {
    return t > n ? 1 : t < n ? -1 : 0;
  }

  function Mr(t) {
    var n = F(t);

    if (!n) {
      if (!Z(t)) throw new TypeError('Expected iterable or array-like: ' + t);
      n = F(o(t));
    }

    return n;
  }

  function Er(t, n) {
    var o,
      u = function (h) {
        if (h instanceof u) return h;
        if (!(this instanceof u)) return new u(h);

        if (!o) {
          o = true;
          var f = Object.keys(t);
          Ar(s, f);
          s.size = f.length;
          s._name = n;
          s._keys = f;
          s._defaultValues = t;
        }

        this._map = Ft(h);
      },
      s = (u.prototype = Object.create(Or));

    s.constructor = u;
    return u;
  }

  n(Qe, Ft);

  Qe.of = function () {
    return this(arguments);
  };

  Qe.prototype.toString = function () {
    return this.__toString('OrderedMap {', '}');
  };

  Qe.prototype.get = function (t, n) {
    var o = this._map.get(t);

    return undefined !== o ? this._list.get(o)[1] : n;
  };

  Qe.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), this._map.clear(), this._list.clear(), this) : Ge();
  };

  Qe.prototype.set = function (t, n) {
    return Ze(this, t, n);
  };

  Qe.prototype.remove = function (t) {
    return Ze(this, t, q);
  };

  Qe.prototype.wasAltered = function () {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  Qe.prototype.__iterate = function (t, n) {
    var o = this;
    return this._list.__iterate(function (n) {
      return n && t(n[1], n[0], o);
    }, n);
  };

  Qe.prototype.__iterator = function (t, n) {
    return this._list.fromEntrySeq().__iterator(t, n);
  };

  Qe.prototype.__ensureOwner = function (t) {
    if (t === this.__ownerID) return this;

    var n = this._map.__ensureOwner(t),
      o = this._list.__ensureOwner(t);

    if (t) return Fe(n, o, t, this.__hash);
    else {
      this.__ownerID = t;
      this._map = n;
      this._list = o;
      return this;
    }
  };

  Qe.isOrderedMap = Xe;
  Qe.prototype[S] = true;
  Qe.prototype.delete = Qe.prototype.remove;
  n($e, tt);

  $e.prototype.get = function (t, n) {
    return this._iter.get(t, n);
  };

  $e.prototype.has = function (t) {
    return this._iter.has(t);
  };

  $e.prototype.valueSeq = function () {
    return this._iter.valueSeq();
  };

  $e.prototype.reverse = function () {
    var t = this,
      n = or(this, true);
    if (!this._useKeys)
      n.valueSeq = function () {
        return t._iter.toSeq().reverse();
      };
    return n;
  };

  $e.prototype.map = function (t, n) {
    var o = this,
      u = ir(this, t, n);
    if (!this._useKeys)
      u.valueSeq = function () {
        return o._iter.toSeq().map(t, n);
      };
    return u;
  };

  $e.prototype.__iterate = function (t, n) {
    var o,
      u = this;
    return this._iter.__iterate(
      this._useKeys
        ? function (n, o) {
            return t(n, o, u);
          }
        : ((o = n ? zr(this) : 0),
          function (s) {
            return t(s, n ? --o : o++, u);
          }),
      n
    );
  };

  $e.prototype.__iterator = function (t, n) {
    if (this._useKeys) return this._iter.__iterator(t, n);

    var o = this._iter.__iterator(B, n),
      u = n ? zr(this) : 0;

    return new H(function () {
      var s = o.next();
      return s.done ? s : V(t, n ? --u : u++, s.value, s);
    });
  };

  $e.prototype[S] = true;
  n(tr, et);

  tr.prototype.includes = function (t) {
    return this._iter.includes(t);
  };

  tr.prototype.__iterate = function (t, n) {
    var o = this,
      u = 0;
    return this._iter.__iterate(function (n) {
      return t(n, u++, o);
    }, n);
  };

  tr.prototype.__iterator = function (t, n) {
    var o = this._iter.__iterator(B, n),
      u = 0;

    return new H(function () {
      var n = o.next();
      return n.done ? n : V(t, u++, n.value, n);
    });
  };

  n(er, rt);

  er.prototype.has = function (t) {
    return this._iter.includes(t);
  };

  er.prototype.__iterate = function (t, n) {
    var o = this;
    return this._iter.__iterate(function (n) {
      return t(n, n, o);
    }, n);
  };

  er.prototype.__iterator = function (t, n) {
    var o = this._iter.__iterator(B, n);

    return new H(function () {
      var n = o.next();
      return n.done ? n : V(t, n.value, n.value, n);
    });
  };

  n(rr, tt);

  rr.prototype.entrySeq = function () {
    return this._iter.toSeq();
  };

  rr.prototype.__iterate = function (t, n) {
    var o = this;
    return this._iter.__iterate(function (n) {
      if (n) {
        Sr(n);
        var u = f(n);
        return t(u ? n.get(1) : n[1], u ? n.get(0) : n[0], o);
      }
    }, n);
  };

  rr.prototype.__iterator = function (t, n) {
    var o = this._iter.__iterator(B, n);

    return new H(function () {
      for (;;) {
        var n = o.next();
        if (n.done) return n;
        var u = n.value;

        if (u) {
          Sr(u);
          var s = f(u);
          return V(t, s ? u.get(0) : u[0], s ? u.get(1) : u[1], n);
        }
      }
    });
  };

  tr.prototype.cacheResult = $e.prototype.cacheResult = er.prototype.cacheResult = rr.prototype.cacheResult = qr;
  n(Er, Ot);

  Er.prototype.toString = function () {
    return this.__toString(kr(this) + ' {', '}');
  };

  Er.prototype.has = function (t) {
    return this._defaultValues.hasOwnProperty(t);
  };

  Er.prototype.get = function (t, n) {
    if (!this.has(t)) return n;
    var o = this._defaultValues[t];
    return this._map ? this._map.get(t, o) : o;
  };

  Er.prototype.clear = function () {
    if (this.__ownerID) {
      if (this._map) this._map.clear();
      return this;
    }

    var t = this.constructor;
    return t._empty || (t._empty = xr(this, fe()));
  };

  Er.prototype.set = function (t, n) {
    if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + kr(this));

    var o = this._map && this._map.set(t, n);

    return this.__ownerID || o === this._map ? this : xr(this, o);
  };

  Er.prototype.remove = function (t) {
    if (!this.has(t)) return this;

    var n = this._map && this._map.remove(t);

    return this.__ownerID || n === this._map ? this : xr(this, n);
  };

  Er.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };

  Er.prototype.__iterator = function (t, n) {
    var o = this;
    return u(this._defaultValues)
      .map(function (t, n) {
        return o.get(n);
      })
      .__iterator(t, n);
  };

  Er.prototype.__iterate = function (t, n) {
    var o = this;
    return u(this._defaultValues)
      .map(function (t, n) {
        return o.get(n);
      })
      .__iterate(t, n);
  };

  Er.prototype.__ensureOwner = function (t) {
    if (t === this.__ownerID) return this;

    var n = this._map && this._map.__ensureOwner(t);

    if (t) return xr(this, n, t);
    else {
      this.__ownerID = t;
      this._map = n;
      return this;
    }
  };

  var Or = Er.prototype;

  function xr(t, n, o) {
    var u = Object.create(Object.getPrototypeOf(t));
    u._map = n;
    u.__ownerID = o;
    return u;
  }

  function kr(t) {
    return t._name || t.constructor.name || 'Record';
  }

  function Ar(t, n) {
    try {
      n.forEach(jr.bind(undefined, t));
    } catch (t) {}
  }

  function jr(t, n) {
    Object.defineProperty(t, n, {
      get: function () {
        return this.get(n);
      },
      set: function (t) {
        Dt(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(n, t);
      },
    });
  }

  function Kr(t) {
    return null === t || undefined === t
      ? Cr()
      : Rr(t) && !v(t)
      ? t
      : Cr().withMutations(function (n) {
          var o = h(t);
          Xt(o.size);
          o.forEach(function (t) {
            return n.add(t);
          });
        });
  }

  function Rr(t) {
    return !(!t || !t[Lr]);
  }

  Or.delete = Or.remove;
  Or.deleteIn = Or.removeIn = te.removeIn;
  Or.merge = te.merge;
  Or.mergeWith = te.mergeWith;
  Or.mergeIn = te.mergeIn;
  Or.mergeDeep = te.mergeDeep;
  Or.mergeDeepWith = te.mergeDeepWith;
  Or.mergeDeepIn = te.mergeDeepIn;
  Or.setIn = te.setIn;
  Or.update = te.update;
  Or.updateIn = te.updateIn;
  Or.withMutations = te.withMutations;
  Or.asMutable = te.asMutable;
  Or.asImmutable = te.asImmutable;
  n(Kr, kt);

  Kr.of = function () {
    return this(arguments);
  };

  Kr.fromKeys = function (t) {
    return this(u(t).keySeq());
  };

  Kr.prototype.toString = function () {
    return this.__toString('Set {', '}');
  };

  Kr.prototype.has = function (t) {
    return this._map.has(t);
  };

  Kr.prototype.add = function (t) {
    return Wr(this, this._map.set(t, true));
  };

  Kr.prototype.remove = function (t) {
    return Wr(this, this._map.remove(t));
  };

  Kr.prototype.clear = function () {
    return Wr(this, this._map.clear());
  };

  Kr.prototype.union = function () {
    var n = t.call(arguments, 0);
    return 0 ===
      (n = n.filter(function (t) {
        return 0 !== t.size;
      })).length
      ? this
      : 0 !== this.size || this.__ownerID || 1 !== n.length
      ? this.withMutations(function (t) {
          for (var o = 0; o < n.length; o++)
            h(n[o]).forEach(function (n) {
              return t.add(n);
            });
        })
      : this.constructor(n[0]);
  };

  Kr.prototype.intersect = function () {
    var n = t.call(arguments, 0);
    if (0 === n.length) return this;
    n = n.map(function (t) {
      return h(t);
    });
    var o = this;
    return this.withMutations(function (t) {
      o.forEach(function (o) {
        if (
          !n.every(function (t) {
            return t.includes(o);
          })
        )
          t.remove(o);
      });
    });
  };

  Kr.prototype.subtract = function () {
    var n = t.call(arguments, 0);
    if (0 === n.length) return this;
    n = n.map(function (t) {
      return h(t);
    });
    var o = this;
    return this.withMutations(function (t) {
      o.forEach(function (o) {
        if (
          n.some(function (t) {
            return t.includes(o);
          })
        )
          t.remove(o);
      });
    });
  };

  Kr.prototype.merge = function () {
    return this.union.apply(this, arguments);
  };

  Kr.prototype.mergeWith = function (n) {
    var o = t.call(arguments, 1);
    return this.union.apply(this, o);
  };

  Kr.prototype.sort = function (t) {
    return Jr(yr(this, t));
  };

  Kr.prototype.sortBy = function (t, n) {
    return Jr(yr(this, n, t));
  };

  Kr.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };

  Kr.prototype.__iterate = function (t, n) {
    var o = this;
    return this._map.__iterate(function (n, u) {
      return t(u, u, o);
    }, n);
  };

  Kr.prototype.__iterator = function (t, n) {
    return this._map
      .map(function (t, n) {
        return n;
      })
      .__iterator(t, n);
  };

  Kr.prototype.__ensureOwner = function (t) {
    if (t === this.__ownerID) return this;

    var n = this._map.__ensureOwner(t);

    if (t) return this.__make(n, t);
    else {
      this.__ownerID = t;
      this._map = n;
      return this;
    }
  };

  Kr.isSet = Rr;
  var Ur,
    Lr = '@@__IMMUTABLE_SET__@@',
    Tr = Kr.prototype;

  function Wr(t, n) {
    if (t.__ownerID) {
      t.size = n.size;
      t._map = n;
      return t;
    } else return n === t._map ? t : 0 === n.size ? t.__empty() : t.__make(n);
  }

  function Br(t, n) {
    var o = Object.create(Tr);
    o.size = t ? t.size : 0;
    o._map = t;
    o.__ownerID = n;
    return o;
  }

  function Cr() {
    return Ur || (Ur = Br(fe()));
  }

  function Jr(t) {
    return null === t || undefined === t
      ? Yr()
      : Nr(t)
      ? t
      : Yr().withMutations(function (n) {
          var o = h(t);
          Xt(o.size);
          o.forEach(function (t) {
            return n.add(t);
          });
        });
  }

  function Nr(t) {
    return Rr(t) && v(t);
  }

  Tr[Lr] = true;
  Tr.delete = Tr.remove;
  Tr.mergeDeep = Tr.merge;
  Tr.mergeDeepWith = Tr.mergeWith;
  Tr.withMutations = te.withMutations;
  Tr.asMutable = te.asMutable;
  Tr.asImmutable = te.asImmutable;
  Tr.__empty = Cr;
  Tr.__make = Br;
  n(Jr, Kr);

  Jr.of = function () {
    return this(arguments);
  };

  Jr.fromKeys = function (t) {
    return this(u(t).keySeq());
  };

  Jr.prototype.toString = function () {
    return this.__toString('OrderedSet {', '}');
  };

  Jr.isOrderedSet = Nr;
  var Pr,
    Hr = Jr.prototype;

  function Vr(t, n) {
    var o = Object.create(Hr);
    o.size = t ? t.size : 0;
    o._map = t;
    o.__ownerID = n;
    return o;
  }

  function Yr() {
    return Pr || (Pr = Vr(Ge()));
  }

  function Qr(t) {
    return null === t || undefined === t ? tn() : Xr(t) ? t : tn().unshiftAll(t);
  }

  function Xr(t) {
    return !(!t || !t[Gr]);
  }

  Hr[S] = true;
  Hr.__empty = Yr;
  Hr.__make = Vr;
  n(Qr, xt);

  Qr.of = function () {
    return this(arguments);
  };

  Qr.prototype.toString = function () {
    return this.__toString('Stack [', ']');
  };

  Qr.prototype.get = function (t, n) {
    var o = this._head;

    for (t = j(this, t); o && t--; ) o = o.next;

    return o ? o.value : n;
  };

  Qr.prototype.peek = function () {
    return this._head && this._head.value;
  };

  Qr.prototype.push = function () {
    if (0 === arguments.length) return this;

    for (var t = this.size + arguments.length, n = this._head, o = arguments.length - 1; o >= 0; o--)
      n = {
        value: arguments[o],
        next: n,
      };

    if (this.__ownerID) {
      this.size = t;
      this._head = n;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    } else return $r(t, n);
  };

  Qr.prototype.pushAll = function (t) {
    if (0 === (t = s(t)).size) return this;
    Xt(t.size);
    var n = this.size,
      o = this._head;
    t.reverse().forEach(function (t) {
      n++;
      o = {
        value: t,
        next: o,
      };
    });

    if (this.__ownerID) {
      this.size = n;
      this._head = o;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    } else return $r(n, o);
  };

  Qr.prototype.pop = function () {
    return this.slice(1);
  };

  Qr.prototype.unshift = function () {
    return this.push.apply(this, arguments);
  };

  Qr.prototype.unshiftAll = function (t) {
    return this.pushAll(t);
  };

  Qr.prototype.shift = function () {
    return this.pop.apply(this, arguments);
  };

  Qr.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), (this._head = undefined), (this.__hash = undefined), (this.__altered = true), this) : tn();
  };

  Qr.prototype.slice = function (t, n) {
    if (R(t, n, this.size)) return this;
    var o = U(t, this.size);
    if (L(n, this.size) !== this.size) return xt.prototype.slice.call(this, t, n);

    for (var u = this.size - o, s = this._head; o--; ) s = s.next;

    if (this.__ownerID) {
      this.size = u;
      this._head = s;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    } else return $r(u, s);
  };

  Qr.prototype.__ensureOwner = function (t) {
    return t === this.__ownerID ? this : t ? $r(this.size, this._head, t, this.__hash) : ((this.__ownerID = t), (this.__altered = false), this);
  };

  Qr.prototype.__iterate = function (t, n) {
    if (n) return this.reverse().__iterate(t);

    for (var o = 0, u = this._head; u && false !== t(u.value, o++, this); ) u = u.next;

    return o;
  };

  Qr.prototype.__iterator = function (t, n) {
    if (n) return this.reverse().__iterator(t);
    var o = 0,
      u = this._head;
    return new H(function () {
      if (u) {
        var n = u.value;
        u = u.next;
        return V(t, o++, n);
      }

      return {
        value: undefined,
        done: true,
      };
    });
  };

  Qr.isStack = Xr;
  var Fr,
    Gr = '@@__IMMUTABLE_STACK__@@',
    Zr = Qr.prototype;

  function $r(t, n, o, u) {
    var s = Object.create(Zr);
    s.size = t;
    s._head = n;
    s.__ownerID = o;
    s.__hash = u;
    s.__altered = false;
    return s;
  }

  function tn() {
    return Fr || (Fr = $r(0));
  }

  function en(t, n) {
    var o = function (o) {
      t.prototype[o] = n[o];
    };

    Object.keys(n).forEach(o);
    if (Object.getOwnPropertySymbols) Object.getOwnPropertySymbols(n).forEach(o);
    return t;
  }

  Zr[Gr] = true;
  Zr.withMutations = te.withMutations;
  Zr.asMutable = te.asMutable;
  Zr.asImmutable = te.asImmutable;
  Zr.wasAltered = te.wasAltered;
  o.Iterator = H;
  en(o, {
    toArray: function () {
      Xt(this.size);
      var t = new Array(this.size || 0);

      this.valueSeq().__iterate(function (n, o) {
        t[o] = n;
      });

      return t;
    },
    toIndexedSeq: function () {
      return new tr(this);
    },
    toJS: function () {
      return this.toSeq()
        .map(function (t) {
          return t && 'function' == typeof t.toJS ? t.toJS() : t;
        })
        .__toJS();
    },
    toJSON: function () {
      return this.toSeq()
        .map(function (t) {
          return t && 'function' == typeof t.toJSON ? t.toJSON() : t;
        })
        .__toJS();
    },
    toKeyedSeq: function () {
      return new $e(this, true);
    },
    toMap: function () {
      return Ft(this.toKeyedSeq());
    },
    toObject: function () {
      Xt(this.size);
      var t = {};

      this.__iterate(function (n, o) {
        t[o] = n;
      });

      return t;
    },
    toOrderedMap: function () {
      return Qe(this.toKeyedSeq());
    },
    toOrderedSet: function () {
      return Jr(c(this) ? this.valueSeq() : this);
    },
    toSet: function () {
      return Kr(c(this) ? this.valueSeq() : this);
    },
    toSetSeq: function () {
      return new er(this);
    },
    toSeq: function () {
      return _(this) ? this.toIndexedSeq() : c(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function () {
      return Qr(c(this) ? this.valueSeq() : this);
    },
    toList: function () {
      return xe(c(this) ? this.valueSeq() : this);
    },
    toString: function () {
      return '[Iterable]';
    },
    __toString: function (t, n) {
      return 0 === this.size ? t + n : t + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + n;
    },
    concat: function () {
      return wr(this, _r(this, t.call(arguments, 0)));
    },
    includes: function (t) {
      return this.some(function (n) {
        return It(n, t);
      });
    },
    entries: function () {
      return this.__iterator(C);
    },
    every: function (t, n) {
      Xt(this.size);
      var o = true;

      this.__iterate(function (u, s, h) {
        if (!t.call(n, u, s, h)) {
          o = false;
          return false;
        }
      });

      return o;
    },
    filter: function (t, n) {
      return wr(this, ur(this, t, n, true));
    },
    find: function (t, n, o) {
      var u = this.findEntry(t, n);
      return u ? u[1] : o;
    },
    findEntry: function (t, n) {
      var o;

      this.__iterate(function (u, s, h) {
        if (t.call(n, u, s, h)) {
          o = [s, u];
          return false;
        }
      });

      return o;
    },
    findLastEntry: function (t, n) {
      return this.toSeq().reverse().findEntry(t, n);
    },
    forEach: function (t, n) {
      Xt(this.size);
      return this.__iterate(n ? t.bind(n) : t);
    },
    join: function (t) {
      Xt(this.size);
      t = undefined !== t ? '' + t : ',';
      var n = '',
        o = true;

      this.__iterate(function (u) {
        if (o) o = false;
        else n += t;
        n += null !== u && undefined !== u ? u.toString() : '';
      });

      return n;
    },
    keys: function () {
      return this.__iterator(W);
    },
    map: function (t, n) {
      return wr(this, ir(this, t, n));
    },
    reduce: function (t, n, o) {
      var u, s;
      Xt(this.size);
      if (arguments.length < 2) s = true;
      else u = n;

      this.__iterate(function (n, h, f) {
        if (s) {
          s = false;
          u = n;
        } else u = t.call(o, u, n, h, f);
      });

      return u;
    },
    reduceRight: function (t, n, o) {
      var u = this.toKeyedSeq().reverse();
      return u.reduce.apply(u, arguments);
    },
    reverse: function () {
      return wr(this, or(this, true));
    },
    slice: function (t, n) {
      return wr(this, hr(this, t, n, true));
    },
    some: function (t, n) {
      return !this.every(sn(t), n);
    },
    sort: function (t) {
      return wr(this, yr(this, t));
    },
    values: function () {
      return this.__iterator(B);
    },
    butLast: function () {
      return this.slice(0, -1);
    },
    isEmpty: function () {
      return undefined !== this.size
        ? 0 === this.size
        : !this.some(function () {
            return true;
          });
    },
    count: function (t, n) {
      return A(t ? this.toSeq().filter(t, n) : this);
    },
    countBy: function (t, n) {
      return sr(this, t, n);
    },
    equals: function (t) {
      return bt(this, t);
    },
    entrySeq: function () {
      var t = this;
      if (t._cache) return new st(t._cache);
      var n = t.toSeq().map(un).toIndexedSeq();

      n.fromEntrySeq = function () {
        return t.toSeq();
      };

      return n;
    },
    filterNot: function (t, n) {
      return this.filter(sn(t), n);
    },
    findLast: function (t, n, o) {
      return this.toKeyedSeq().reverse().find(t, n, o);
    },
    first: function () {
      return this.find(K);
    },
    flatMap: function (t, n) {
      return wr(this, vr(this, t, n));
    },
    flatten: function (t) {
      return wr(this, pr(this, t, true));
    },
    fromEntrySeq: function () {
      return new rr(this);
    },
    get: function (t, n) {
      return this.find(
        function (n, o) {
          return It(o, t);
        },
        undefined,
        n
      );
    },
    getIn: function (t, n) {
      for (var o, u = this, s = Mr(t); !(o = s.next()).done; ) {
        var h = o.value;
        if ((u = u && u.get ? u.get(h, q) : q) === q) return n;
      }

      return u;
    },
    groupBy: function (t, n) {
      return ar(this, t, n);
    },
    has: function (t) {
      return this.get(t, q) !== q;
    },
    hasIn: function (t) {
      return this.getIn(t, q) !== q;
    },
    isSubset: function (t) {
      t = 'function' == typeof t.includes ? t : o(t);
      return this.every(function (n) {
        return t.includes(n);
      });
    },
    isSuperset: function (t) {
      return (t = 'function' == typeof t.isSubset ? t : o(t)).isSubset(this);
    },
    keySeq: function () {
      return this.toSeq().map(on).toIndexedSeq();
    },
    last: function () {
      return this.toSeq().reverse().first();
    },
    max: function (t) {
      return dr(this, t);
    },
    maxBy: function (t, n) {
      return dr(this, n, t);
    },
    min: function (t) {
      return dr(this, t ? an(t) : cn);
    },
    minBy: function (t, n) {
      return dr(this, n ? an(n) : cn, t);
    },
    rest: function () {
      return this.slice(1);
    },
    skip: function (t) {
      return this.slice(0 ** t);
    },
    skipLast: function (t) {
      return wr(this, this.toSeq().reverse().skip(t).reverse());
    },
    skipWhile: function (t, n) {
      return wr(this, cr(this, t, n, true));
    },
    skipUntil: function (t, n) {
      return this.skipWhile(sn(t), n);
    },
    sortBy: function (t, n) {
      return wr(this, yr(this, n, t));
    },
    take: function (t) {
      return this.slice(0, 0 ** t);
    },
    takeLast: function (t) {
      return wr(this, this.toSeq().reverse().take(t).reverse());
    },
    takeWhile: function (t, n) {
      return wr(this, fr(this, t, n));
    },
    takeUntil: function (t, n) {
      return this.takeWhile(sn(t), n);
    },
    valueSeq: function () {
      return this.toIndexedSeq();
    },
    hashCode: function () {
      return this.__hash || (this.__hash = _n(this));
    },
  });
  var rn = o.prototype;
  rn[l] = true;
  rn[P] = rn.values;
  rn.__toJS = rn.toArray;
  rn.__toStringMapper = hn;

  rn.inspect = rn.toSource = function () {
    return this.toString();
  };

  rn.chain = rn.flatMap;
  rn.contains = rn.includes;

  (function () {
    try {
      Object.defineProperty(rn, 'length', {
        get: function () {
          if (!o.noLengthWarning) {
            var t;

            try {
              throw new Error();
            } catch (n) {
              t = n.stack;
            }

            if (-1 === t.indexOf('_wrapObject')) {
              if (console && console.warn)
                console.warn('iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. ' + t);
              return this.size;
            }
          }
        },
      });
    } catch (t) {}
  })();

  en(u, {
    flip: function () {
      return wr(this, nr(this));
    },
    findKey: function (t, n) {
      var o = this.findEntry(t, n);
      return o && o[0];
    },
    findLastKey: function (t, n) {
      return this.toSeq().reverse().findKey(t, n);
    },
    keyOf: function (t) {
      return this.findKey(function (n) {
        return It(n, t);
      });
    },
    lastKeyOf: function (t) {
      return this.findLastKey(function (n) {
        return It(n, t);
      });
    },
    mapEntries: function (t, n) {
      var o = this,
        u = 0;
      return wr(
        this,
        this.toSeq()
          .map(function (s, h) {
            return t.call(n, [h, s], u++, o);
          })
          .fromEntrySeq()
      );
    },
    mapKeys: function (t, n) {
      var o = this;
      return wr(
        this,
        this.toSeq()
          .flip()
          .map(function (u, s) {
            return t.call(n, u, s, o);
          })
          .flip()
      );
    },
  });
  var nn = u.prototype;

  function on(t, n) {
    return n;
  }

  function un(t, n) {
    return [n, t];
  }

  function sn(t) {
    return function () {
      return !t.apply(this, arguments);
    };
  }

  function an(t) {
    return function () {
      return -t.apply(this, arguments);
    };
  }

  function hn(t) {
    return 'string' == typeof t ? JSON.stringify(t) : t;
  }

  function fn() {
    return k(arguments);
  }

  function cn(t, n) {
    return t < n ? 1 : t > n ? -1 : 0;
  }

  function _n(t) {
    if (t.size === 1 / 0) return 0;
    var n = v(t),
      o = c(t),
      u = n ? 1 : 0;
    return pn(
      t.__iterate(
        o
          ? n
            ? function (t, n) {
                u = (31 * u + vn(Kt(t), Kt(n))) | 0;
              }
            : function (t, n) {
                u = (u + vn(Kt(t), Kt(n))) | 0;
              }
          : n
          ? function (t) {
              u = (31 * u + Kt(t)) | 0;
            }
          : function (t) {
              u = (u + Kt(t)) | 0;
            }
      ),
      u
    );
  }

  function pn(t, n) {
    n = At(n, 3432918353);
    n = At((n << 15) | (n >>> -15), 461845907);
    n = At((n << 13) | (n >>> -13), 5);
    n = At((n = ((n + 3864292196) | 0) ^ t) ^ (n >>> 16), 2246822507);
    n = jt((n = At(n ^ (n >>> 13), 3266489909)) ^ (n >>> 16));
    return n;
  }

  function vn(t, n) {
    return (t ^ (n + 2654435769 + (t << 6) + (t >> 2))) | 0;
  }

  nn[y] = true;
  nn[P] = rn.entries;
  nn.__toJS = rn.toObject;

  nn.__toStringMapper = function (t, n) {
    return JSON.stringify(n) + ': ' + hn(t);
  };

  en(s, {
    toKeyedSeq: function () {
      return new $e(this, false);
    },
    filter: function (t, n) {
      return wr(this, ur(this, t, n, false));
    },
    findIndex: function (t, n) {
      var o = this.findEntry(t, n);
      return o ? o[0] : -1;
    },
    indexOf: function (t) {
      var n = this.toKeyedSeq().keyOf(t);
      return undefined === n ? -1 : n;
    },
    lastIndexOf: function (t) {
      var n = this.toKeyedSeq().reverse().keyOf(t);
      return undefined === n ? -1 : n;
    },
    reverse: function () {
      return wr(this, or(this, false));
    },
    slice: function (t, n) {
      return wr(this, hr(this, t, n, false));
    },
    splice: function (t, n) {
      var o = arguments.length;
      if (((n = (0 | n) ** 0), 0 === o || (2 === o && !n))) return this;
      t = U(t, t < 0 ? this.count() : this.size);
      var u = this.slice(0, t);
      return wr(this, 1 === o ? u : u.concat(k(arguments, 2), this.slice(t + n)));
    },
    findLastIndex: function (t, n) {
      var o = this.toKeyedSeq().findLastKey(t, n);
      return undefined === o ? -1 : o;
    },
    first: function () {
      return this.get(0);
    },
    flatten: function (t) {
      return wr(this, pr(this, t, false));
    },
    get: function (t, n) {
      return (t = j(this, t)) < 0 || this.size === 1 / 0 || (undefined !== this.size && t > this.size)
        ? n
        : this.find(
            function (n, o) {
              return o === t;
            },
            undefined,
            n
          );
    },
    has: function (t) {
      return (t = j(this, t)) >= 0 && (undefined !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
    },
    interpose: function (t) {
      return wr(this, lr(this, t));
    },
    interleave: function () {
      var t = [this].concat(k(arguments)),
        n = gr(this.toSeq(), et.of, t),
        o = n.flatten(true);
      if (n.size) o.size = n.size * t.length;
      return wr(this, o);
    },
    last: function () {
      return this.get(-1);
    },
    skipWhile: function (t, n) {
      return wr(this, cr(this, t, n, false));
    },
    zip: function () {
      return wr(this, gr(this, fn, [this].concat(k(arguments))));
    },
    zipWith: function (t) {
      var n = k(arguments);
      n[0] = this;
      return wr(this, gr(this, t, n));
    },
  });
  s.prototype[w] = true;
  s.prototype[S] = true;
  en(h, {
    get: function (t, n) {
      return this.has(t) ? t : n;
    },
    includes: function (t) {
      return this.has(t);
    },
    keySeq: function () {
      return this.valueSeq();
    },
  });
  h.prototype.has = rn.includes;
  en(tt, u.prototype);
  en(et, s.prototype);
  en(rt, h.prototype);
  en(Ot, u.prototype);
  en(xt, s.prototype);
  en(kt, h.prototype);
  return {
    Iterable: o,
    Seq: $,
    Collection: Et,
    Map: Ft,
    OrderedMap: Qe,
    List: xe,
    Stack: Qr,
    Set: Kr,
    OrderedSet: Jr,
    Record: Er,
    Range: Mt,
    Repeat: qt,
    is: It,
    fromJS: gt,
  };
};

if ('object' == typeof exports && undefined !== module) module.exports = n();
else if ('function' == typeof define && define.amd) define(n);
else t.Immutable = n();
