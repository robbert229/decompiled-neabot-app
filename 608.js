var module11 = require('./11');

var React = require('react'),
  module609 = require('./609'),
  module610 = require('./610'),
  module611 = require('./611'),
  module612 = require('./612');

function s(t) {
  return t && 'object' == typeof t && 'default' in t
    ? t
    : {
        default: t,
      };
}

var l = s(React),
  p = s(module609),
  v = s(module611),
  y = React.createContext(),
  h = 'undefined' != typeof window ? React.useLayoutEffect : React.useEffect;

function _(t) {
  return function (u, o) {
    var c = React.useContext(t),
      f = React.useRef(u),
      s = React.useRef(),
      l = React.useRef(true),
      p = React.useRef(),
      v = React.useReducer(function (t) {
        return t + 1;
      }, 0)[1];
    if (p.current || f.current !== u || undefined === s.current)
      try {
        s.current = u(c.getState());
      } catch (t) {
        throw p.current || t;
      }
    h(function () {
      f.current = u;
      p.current = undefined;
    });
    h(function () {
      var t = function () {
          try {
            var t = f.current(c.getState());
            if ('function' == typeof o ? o(s.current, t) : s.current === t) return;
            s.current = t;
          } catch (t) {
            p.current = t;
          }

          if (l.current) v({});
        },
        n = c.subscribe(t);

      t();
      return function () {
        l.current = false;
        n();
      };
    }, []);
    return s.current;
  };
}

var S = _(y);

function O(t) {
  return function (u) {
    return u(React.useContext(t).getActions());
  };
}

var b = O(y);

function C(t) {
  return function () {
    return React.useContext(t).dispatch;
  };
}

var T = C(y);

function k() {
  return React.useContext(y);
}

function R(t) {
  return function () {
    var u = React.useContext(t),
      o = React.useState(false),
      c = o[0],
      f = o[1];
    React.useEffect(function () {
      u.persist.resolveRehydration().then(function () {
        return f(true);
      });
    }, []);
    return c;
  };
}

var j = R(y);

var w = '$_a',
  E = '$_aO',
  P = '$_c',
  I = '$_e',
  A = '$_p',
  D = '$_r',
  x = '$_tO',
  M = '$_t',
  N = function (t) {
    var n;
    (n = {})[w] = true;
    n.fn = t;
    return n;
  },
  H = [
    function (t) {
      return t;
    },
  ];

var $;

function L(t) {
  if ('object' != typeof t || null === t) return false;

  for (var n = t; null !== Object.getPrototypeOf(n); ) n = Object.getPrototypeOf(n);

  return Object.getPrototypeOf(t) === n;
}

function X(t) {
  return (function t(n) {
    var u = Object.keys(n).reduce(function (t, u) {
      if (null == Object.getOwnPropertyDescriptor(n, u).get) t[u] = n[u];
      return t;
    }, {});
    Object.keys(u).forEach(function (n) {
      if (L(u[n])) u[n] = t(u[n]);
    });
    return u;
  })(t);
}

function q(t) {
  return null != t && 'object' == typeof t && 'function' == typeof t.then;
}

function F(t, n) {
  return t.reduce(function (t, n) {
    return L(t) ? t[n] : undefined;
  }, n);
}

function J(t, n, u) {
  if (0 === t.length) return u;
  var o = p.default({}, n),
    c = t[0];
  if (1 === t.length) o[c] = u;
  else o[c] = J(t.slice(1), o[c], u);
  return o;
}

function U(t, n, u) {
  if (0 !== t.length)
    t.reduce(function (n, o, c) {
      if (c + 1 === t.length) n[o] = u;
      else n[o] = n[o] || {};
      return n[o];
    }, n);
  else if ('object' == typeof u) {
    Object.keys(n).forEach(function (t) {
      delete n[t];
    });
    Object.keys(u).forEach(function (t) {
      n[t] = u[t];
    });
  }
}

function V(t) {
  if (undefined === t) t = false;
  return function (n, u, o) {
    if (t) {
      var c = F(n, u),
        s = o(c);
      return c !== s ? J(n, u, s) : u;
    }

    if (
      ($ ||
        ($ = new module612.Immer({
          useProxies: 'undefined' != typeof Proxy && undefined !== Proxy.revocable && 'undefined' != typeof Reflect,
          autoFreeze: false,
        })),
      0 === n.length)
    ) {
      var l = $.createDraft(u),
        p = o(l);
      return p ? (module612.isDraft(p) ? $.finishDraft(p) : p) : $.finishDraft(l);
    }

    var v = n.slice(0, n.length - 1),
      y = $.createDraft(u),
      h = F(v, u),
      _ = o(F(n, y));

    if (_) h[n[n.length - 1]] = _;
    return $.finishDraft(y);
  };
}

var z = function (t) {
  var n,
    u,
    o,
    c = [];
  return ((n = t),
  (u = function (t, n) {
    return n().then(function (t) {
      c.push(t);
    });
  }),
  new Promise(function (t, c) {
    var f = n[Symbol.iterator](),
      s = 0;
    !(function n(o) {
      var l = f.next();
      if (l.done) t(o);
      else
        Promise.all([o, l.value])
          .then(function (t) {
            return n(u(t[0], t[1], s++));
          })
          .catch(function (t) {
            return c(t);
          });
    })(o);
  })).then(function () {
    return c;
  });
};

function B(t, n) {
  if (t.length !== n.length) return false;

  for (var u = 0; u < t.length; u += 1) if (t[u] !== n[u]) return false;

  return true;
}

function G(t, n) {
  var u = l.default.useState(function () {
      return {
        inputs: n,
        result: t(),
      };
    })[0],
    o = l.default.useRef(u),
    c = Boolean(n && o.current.inputs && B(n, o.current.inputs))
      ? o.current
      : {
          inputs: n,
          result: t(),
        };
  l.default.useEffect(
    function () {
      o.current = c;
    },
    [c]
  );
  return c.result;
}

function K(t, n, u, o) {
  var c = V(t),
    s = function (t, n, u, o) {
      return c(o, t, function (t) {
        return u(t, n.payload);
      });
    },
    l = function (t, u) {
      var o = n[u.type];
      return o ? s(t, u, o, o.def.meta.parent) : t;
    },
    p = function (t, n) {
      return u.reduce(function (t, u) {
        var o = u.parentPath,
          s = u.key,
          l = u.reducer;
        return c(o, t, function (t) {
          t[s] = l(module612.isDraft(t[s]) ? module612.original(t[s]) : t[s], n);
          return t;
        });
      }, t);
    };

  return function (t, n) {
    var c = l(t, n),
      f = u.length > 0 ? p(c, n) : c;
    if (t !== f)
      o.forEach(function (t) {
        var n = t.parentPath,
          u = t.bindComputedProperty,
          o = F(n, f);
        if (null != o) u(o, f);
      });
    return f;
  };
}

var Q = {
    getItem: function () {},
    setItem: function () {},
    removeItem: function () {},
  },
  W = function (t) {
    var n;
    return function () {
      if (!n) {
        try {
          if ('undefined' != typeof window && undefined !== window[t]) n = window[t];
        } catch (t) {}

        if (!n) n = Q;
      }

      return n;
    };
  },
  Y = W('localStorage'),
  Z = W('sessionStorage');

function ee(t, n) {
  if (undefined === n) n = [];
  if (null == t) t = Z();
  if ('string' == typeof t) t = 'localStorage' === t ? Y() : 'sessionStorage' === t ? Z() : Q;

  var u = [].concat(n).reverse(),
    o = function (u) {
      if (n.length > 0 && null != u && 'object' == typeof u)
        Object.keys(u).forEach(function (t) {
          u[t] = n.reduce(function (n, u) {
            return u.in(n, t);
          }, u[t]);
        });
      return t === Y() || t === Z()
        ? JSON.stringify({
            data: u,
          })
        : u;
    },
    c = function (n) {
      var o = t === Y() || t === Z() ? JSON.parse(n).data : n;
      if (u.length > 0 && null != o && 'object' == typeof o)
        Object.keys(o).forEach(function (t) {
          o[t] = u.reduce(function (n, u) {
            return u.out(n, t);
          }, o[t]);
        });
      return o;
    },
    f = q(t.getItem('_'));

  return {
    getItem: function (n) {
      if (f)
        return t.getItem(n).then(function (t) {
          return null != t ? c(t) : undefined;
        });
      var u = t.getItem(n);
      return null != u ? c(u) : undefined;
    },
    setItem: function (n, u) {
      return t.setItem(n, o(u));
    },
    removeItem: function (n) {
      return t.removeItem(n);
    },
  };
}

function te(t, n) {
  if (undefined === n) n = {};
  return {
    path: t,
    config: {
      allow: n.allow || [],
      deny: n.deny || [],
      mergeStrategy: n.mergeStrategy || 'mergeDeep',
      storage: ee(n.storage, n.transformers),
    },
  };
}

function ne(t, n, u) {
  var o = Object.keys(t);
  if (n.length > 0)
    o = o.reduce(function (t, u) {
      return -1 !==
        n.findIndex(function (t) {
          return t === u;
        })
        ? [].concat(t, [u])
        : t;
    }, []);
  if (u.length > 0)
    o = o.reduce(function (t, n) {
      return -1 !==
        u.findIndex(function (t) {
          return t === n;
        })
        ? t
        : [].concat(t, [n]);
    }, []);
  return o;
}

function re(t, n) {
  return function () {
    return 0 === n._i._persistenceConfig.length
      ? Promise.resolve()
      : z(
          n._i._persistenceConfig.map(function (n) {
            var u = n.path,
              o = n.config;
            return function () {
              return Promise.resolve(o.storage.removeItem(t(u)));
            };
          })
        );
  };
}

function ue(t, n) {
  var u,
    o = Promise.resolve(),
    c = false,
    f =
      'undefined' == typeof window
        ? function (t) {
            return t();
          }
        : null != window.requestIdleCallback
        ? window.requestIdleCallback
        : window.requestAnimationFrame;
  return {
    persist: function (s) {
      if (0 !== n._i._persistenceConfig.length) {
        var l = function () {
          c = true;
          o = new Promise(function (o) {
            f(function () {
              z(
                n._i._persistenceConfig.map(function (n) {
                  var u = n.path,
                    o = n.config;
                  return function () {
                    var n = o.storage,
                      c = o.allow,
                      f = o.deny,
                      l = {};
                    ne(X(F(u, s)), c, f).map(function (t) {
                      var n = F([].concat(u, [t]), s),
                        o = L(n) ? X(n) : n;
                      l[t] = o;
                    });
                    return Promise.resolve(n.setItem(t(u), l));
                  };
                })
              ).finally(function () {
                if (((c = false), u)) {
                  var t = u;
                  u = null;
                  t();
                } else o();
              });
            });
          });
        };

        if (c) u = l;
        else l();
      }
    },
    clear: re(t, n),
    flush: function () {
      if (u) u();
      return o;
    },
  };
}

function oe(t, n) {
  return function (u) {
    var o = u.getState;
    return function (u) {
      return function (c) {
        var f = u(c);
        if (c && '@action.ePRS' !== c.type && n._i._persistenceConfig.length > 0) t.persist(o());
        return f;
      };
    };
  };
}

function ie(t, n, u, o) {
  if (0 === u._i._persistenceConfig.length) return Promise.resolve();
  var c = X(u._i._dS),
    f = false;
  return z(
    u._i._persistenceConfig.map(function (n) {
      return function () {
        var u = n.path,
          s = n.config,
          l = s.mergeStrategy,
          p = s.storage;
        if (o && (u.length < 1 || u[0] !== o)) return Promise.resolve();

        var v = function (t, n) {
            return null != t && null != n && (typeof t != typeof n || (Array.isArray(t) && !Array.isArray(n)));
          },
          y = function (t) {
            if ('overwrite' === l) U(u, c, t);
            else if ('mergeShallow' === l) {
              var n = F(u, c);
              Object.keys(t).forEach(function (u) {
                if (!v(n[u], t[u])) n[u] = t[u];
              });
            } else if ('mergeDeep' === l) {
              !(function t(n, u) {
                Object.keys(u).forEach(function (o) {
                  if (!v(n[o], u[o])) L(u[o]) ? ((n[o] = n[o] || {}), t(n[o], u[o])) : (n[o] = u[o]);
                });
              })(F(u, c), t);
            }
          },
          h = function (t) {
            if (null != t) {
              y(t);
              f = true;
            }
          },
          _ = p.getItem(t(u));

        return q(_) ? _.then(h) : Promise.resolve(h(_));
      };
    })
  ).then(function () {
    if (f) n(c);
  });
}

function ce(t, n) {
  function u(u) {
    var o = {
      type: t.meta.type,
      payload: u,
    };
    if (t[E] && t.meta.resolvedTargets) u.resolvedTargets = [].concat(t.meta.resolvedTargets);
    return n.dispatch(o);
  }

  u.type = t.meta.type;
  return u;
}

function ae(t, n, u, o) {
  return function (c, f) {
    var s = {
      dispatch: n.dispatch,
      fail: f,
      getState: function () {
        return F(t.meta.parent, n.getState());
      },
      getStoreActions: function () {
        return o;
      },
      getStoreState: n.getState,
      injections: u,
      meta: {
        key: t.meta.actionName,
        parent: t.meta.parent,
        path: t.meta.path,
      },
    };
    if (t[x] && t.meta.resolvedTargets) c.resolvedTargets = [].concat(t.meta.resolvedTargets);
    return t.fn(F(t.meta.parent, o), c, s);
  };
}

var fe = function (t, n) {
    console.log('Error in ' + t);
    console.log(n);
  },
  se = function (t, n) {
    return function () {
      try {
        var u = n.apply(undefined, arguments);
        if (q(u))
          u.catch(function (n) {
            fe(t, n);
          });
      } catch (n) {
        fe(t, n);
      }
    };
  };

function le(t, n) {
  var u = function (u) {
    var o = se(t.meta.startType, function () {
        return n.dispatch({
          type: t.meta.startType,
          payload: u,
        });
      }),
      c = se(t.meta.failType, function (o) {
        return n.dispatch({
          type: t.meta.failType,
          payload: u,
          error: o,
        });
      }),
      f = se(t.meta.successType, function (o) {
        return n.dispatch({
          type: t.meta.successType,
          payload: u,
          result: o,
        });
      });
    o();

    var s = null,
      l = function (t) {
        s = t;
      },
      p = n.dispatch(function () {
        return t.thunkHandler(u, l);
      });

    if (q(p))
      return p.then(function (t) {
        if (s) c(s);
        else f(t);
        return t;
      });
    else {
      if (s) c(s);
      else f(p);
      return p;
    }
  };

  u.type = t.meta.type;
  u.successType = t.meta.successType;
  u.failType = t.meta.failType;
  u.startType = t.meta.startType;
  return u;
}

function pe(t) {
  return function () {
    return function (n) {
      return function (u) {
        var o = n(u);

        if (u && t._i._lAM[u.type] && t._i._lAM[u.type].length > 0) {
          var c = t._i._aCD[u.type];

          t._i._lAM[u.type].forEach(function (t) {
            t({
              type: c ? c.def.meta.type : u.type,
              payload: u.payload,
              error: u.error,
              result: u.result,
            });
          });
        }

        return o;
      };
    };
  };
}

function de(t, n, u, o) {
  t.forEach(function (t) {
    var c = t.targetResolver(F(t.meta.parent, n), n),
      f = (Array.isArray(c) ? c : [c]).reduce(function (t, n) {
        if ('function' == typeof n && n.def.meta.type && u[n.def.meta.type]) n.def.meta.successType ? t.push(n.def.meta.successType) : t.push(n.def.meta.type);
        else if ('string' == typeof n) t.push(n);
        return t;
      }, []);
    t.meta.resolvedTargets = f;
    f.forEach(function (n) {
      var c = o[n] || [];
      c.push(u[t.meta.type]);
      o[n] = c;
    });
  });
}

function ve(t, n, u, o) {
  var c,
    f = false,
    s = [];
  return function (t, l) {
    Object.defineProperty(t, n, {
      configurable: true,
      enumerable: true,
      get: function () {
        var n = u.stateResolvers.map(function (n) {
          return n(t, l);
        });
        if (f && (B(s, n) || (o._i._cS.isInReducer && null !== new Error().stack.match(/shallowCopy/gi)))) return c;
        else {
          s = n;
          c = u.fn.apply(u, n);
          f = true;
          return c;
        }
      },
    });
  };
}

function ye(t) {
  return function () {
    return function (n) {
      return function (u) {
        t._i._cS.isInReducer = true;
        var o = n(u);
        t._i._cS.isInReducer = false;
        return o;
      };
    };
  };
}

function he(t) {
  return function (n) {
    return function (u) {
      return function (o) {
        if (0 === t._i._e.length) return u(o);
        var c = n.getState(),
          f = u(o),
          s = n.getState();

        t._i._e.forEach(function (t) {
          var n = F(t.meta.parent, c),
            u = F(t.meta.parent, s);

          if (n !== u) {
            var f = t.dependencyResolvers.map(function (t) {
                return t(n);
              }),
              l = t.dependencyResolvers.map(function (t) {
                return t(u);
              });
            if (
              f.some(function (t, n) {
                return t !== l[n];
              })
            )
              t.actionCreator(f, l, o);
          }
        });

        return f;
      };
    };
  };
}

var me = function (t) {
  console.log(t);
};

function ge(t, n, u, o) {
  var c,
    f = F(t.meta.parent, o);
  return function (s) {
    var l = {
      dispatch: n.dispatch,
      getState: function () {
        return F(t.meta.parent, n.getState());
      },
      getStoreActions: function () {
        return o;
      },
      getStoreState: n.getState,
      injections: u,
      meta: {
        key: t.meta.actionName,
        parent: t.meta.parent,
        path: t.meta.path,
      },
    };

    if (undefined !== c) {
      var p = c();
      c = undefined;
      if (q(p)) p.catch(me);
    }

    var v = t.fn(f, s, l);
    if (q(v)) return v.then(function (t) {});
    if ('function' == typeof v) c = v;
  };
}

var _e = function (t, n) {
    console.log('Error in ' + t);
    console.log(n);
  },
  Se = function (t, n) {
    return function () {
      try {
        var u = n.apply(undefined, arguments);
        if (q(u))
          u.catch(function (n) {
            _e(t, n);
          });
      } catch (n) {
        _e(t, n);
      }
    };
  };

function Oe(t, n, u) {
  var o = function (o, c, f) {
    var s = {
        prev: o,
        current: c,
        action: f,
      },
      l = Se(t.meta.startType, function () {
        return n.dispatch({
          type: t.meta.startType,
          change: s,
        });
      }),
      p = Se(t.meta.successType, function () {
        return n.dispatch({
          type: t.meta.successType,
          change: s,
        });
      });
    l();

    try {
      var v = n.dispatch(function () {
        return u(s);
      });
      if (q(v))
        return v.then(function (t) {
          p(t);
          return t;
        }, me);
      else {
        p(v);
        return v;
      }
    } catch (t) {
      me(t);
    }
  };

  o.type = t.meta.type;
  o.startType = t.meta.startType;
  o.successType = t.meta.successType;
  o.failType = t.meta.failType;
  return o;
}

function be(t, n, u, o) {
  var c = n,
    f = {},
    s = {},
    l = {},
    v = {},
    y = [],
    h = [],
    _ = [],
    S = {},
    O = {},
    b = [],
    C = [];
  C = C.sort(function (t, n) {
    var u = t.path.join('.'),
      o = n.path.join('.');
    return u < o ? -1 : u > o ? 1 : 0;
  });

  (function t(O, T) {
    return Object.keys(O).forEach(function (k) {
      var R = O[k],
        j = [].concat(T, [k]),
        N = {
          parent: T,
          path: j,
          key: k,
        },
        H = function () {
          var t = F(T, n);
          U(j, c, t && k in t ? t[k] : R);
        };

      if (k !== A) {
        if (null != R && 'object' == typeof R) {
          if (R[w] || R[E]) {
            var $ = p.default({}, R),
              X = $[w] ? '@action' : '@actionOn';
            $.meta = {
              actionName: N.key,
              category: X,
              type: X + '.' + N.path.join('.'),
              parent: N.parent,
              path: N.path,
            };
            $.actionCreator = ce($, o);
            $.actionCreator.def = $;
            $.fn.def = $;
            f[$.meta.type] = $.actionCreator;
            l[$.meta.type] = $.fn;
            if ('ePRS' !== N.key) $[E] ? (b.push($), U(j, S, $.actionCreator)) : U(j, s, $.actionCreator);
          } else if (R[M] || R[x]) {
            var q = p.default({}, R),
              J = (q[M] ? '@thunk' : '@thunkOn') + '.' + N.path.join('.');
            q.meta = {
              actionName: N.key,
              parent: N.parent,
              path: N.path,
              type: J,
              startType: J + '(start)',
              successType: J + '(success)',
              failType: J + '(fail)',
            };
            q.thunkHandler = ae(q, o, u, s);
            U(j, v, q.thunkHandler);
            q.actionCreator = le(q, o);
            q.actionCreator.def = q;
            f[q.meta.type] = q.actionCreator;

            if (q[x]) {
              b.push(q);
              U(j, S, q.actionCreator);
            } else U(j, s, q.actionCreator);
          } else if (R[P]) {
            var V = F(T, c),
              z = ve(0, k, R, o);
            z(V, c);
            y.push({
              key: k,
              parentPath: T,
              bindComputedProperty: z,
            });
          } else if (R[D])
            h.push({
              key: k,
              parentPath: T,
              reducer: R.fn,
            });
          else if (R[I]) {
            var B = p.default({}, R),
              G = '@effectOn.' + N.path.join('.');
            B.meta = {
              type: G,
              actionName: N.key,
              parent: N.parent,
              path: N.path,
              startType: G + '(start)',
              successType: G + '(success)',
              failType: G + '(fail)',
            };
            var K = ge(B, o, u, s),
              Q = Oe(B, o, K);
            B.actionCreator = Q;

            _.push(B);
          } else L(R) ? (null == F(j, c) && U(j, c, {}), t(R, j)) : H();
        } else H();
      } else C.push(te(T, R));
    });
  })(t, []);

  de(b, s, f, O);
  return {
    _aCD: f,
    _aC: s,
    _aRD: l,
    _cP: y,
    _cR: h,
    _cS: {
      isInReducer: false,
    },
    _dS: c,
    _e: _,
    _lAC: S,
    _lAM: O,
    _persistenceConfig: C,
  };
}

function Ce(n, u) {
  if (undefined === u) u = {};

  var c = X(n),
    f = u,
    s = f.compose,
    l = f.devTools,
    y = undefined !== l && l,
    h = f.disableImmer,
    _ = undefined !== h && h,
    S = f.enhancers,
    O = undefined === S ? [] : S,
    b = f.initialState,
    C = undefined === b ? {} : b,
    T = f.injections,
    k = undefined === T ? {} : T,
    R = f.middleware,
    j = undefined === R ? [] : R,
    w = f.mockActions,
    E = undefined !== w && w,
    P = f.name,
    I = undefined === P ? 'EasyPeasyStore' : P,
    A = f.version,
    D = undefined === A ? 0 : A,
    x = f.reducerEnhancer,
    M =
      undefined === x
        ? function (t) {
            return t;
          }
        : x,
    H = function (t) {
      return p.default(
        p.default({}, t),
        {},
        {
          ePRS: N(function (t, n) {
            return n;
          }),
        }
      );
    },
    $ = {},
    L = H(c),
    q = [],
    F = function (t) {
      return '[' + I + '][' + D + ']' + (t.length > 0 ? '[' + t.join('.') + ']' : '');
    },
    J = ue(F, $),
    U = oe(J, $),
    V = function (t) {
      return $._i._aCD['@action.ePRS'](t);
    },
    z = function (t) {
      if (undefined === t) t = {};
      var n = be(L, t, k, $);
      $._i = p.default(
        p.default({}, n),
        {},
        {
          reducer: M(K(_, n._aRD, n._cR, n._cP)),
        }
      );
    },
    B =
      s ||
      (y && 'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: I,
          })
        : module610.compose);

  z(C);
  var G = [ye($)].concat(j, [v.default, pe($), he($), U]);
  if (E)
    G.push(function () {
      return function () {
        return function (t) {
          if (null != t) q.push(t);
        };
      };
    });
  var Q = module610.createStore($._i.reducer, $._i._dS, B.apply(undefined, [module610.applyMiddleware.apply(undefined, G)].concat(O)));
  Q.subscribe(function () {
    $._i._cS.isInReducer = false;
  });
  $.dispatch = Q.dispatch;
  $.getState = Q.getState;

  var W = function () {
    Object.keys(Q.dispatch).forEach(function (t) {
      delete Q.dispatch[t];
    });
    Object.keys($._i._aC).forEach(function (t) {
      Q.dispatch[t] = $._i._aC[t];
    });
  };

  W();

  var Y = function (t) {
      var n = Q.getState();
      if (t) delete n[t];
      z(n);
      Q.replaceReducer($._i.reducer);
      V($._i._dS);
      W();
    },
    Z = ie(F, V, $);

  return module11(Q, {
    addModel: function (t, n) {
      L[t] = n;
      Y();
      var u = ie(F, V, $, t);
      return {
        resolveRehydration: function () {
          return u;
        },
      };
    },
    clearMockedActions: function () {
      q = [];
    },
    getActions: function () {
      return $._i._aC;
    },
    getListeners: function () {
      return $._i._lAC;
    },
    getMockedActions: function () {
      return [].concat(q);
    },
    persist: {
      clear: J.clear,
      flush: J.flush,
      resolveRehydration: function () {
        return Z;
      },
    },
    reconfigure: function (t) {
      L = H(t);
      Y();
    },
    removeModel: function (t) {
      if (L[t]) {
        delete L[t];
        Y(t);
      }
    },
  });
}

exports.StoreProvider = function (t) {
  var n = t.children,
    u = t.store;
  return l.default.createElement(
    y.Provider,
    {
      value: u,
    },
    n
  );
};

exports.action = N;

exports.actionOn = function (t, n) {
  var u;
  (u = {})[E] = true;
  u.fn = n;
  u.targetResolver = t;
  return u;
};

exports.computed = function (t, n) {
  var u, o;

  if ('function' == typeof n) {
    (o = {})[P] = true;
    o.fn = n;
    o.stateResolvers = t;
    return o;
  } else {
    (u = {})[P] = true;
    u.fn = t;
    u.stateResolvers = H;
    return u;
  }
};

exports.createContextStore = function (u, o) {
  if (undefined === o) o = {};
  var c = o.injections,
    f = undefined === c ? {} : c,
    s = React.createContext();
  return {
    Provider: function (n) {
      var c = n.children,
        v = n.runtimeModel,
        y = n.injections;

      if (null != y) {
        var h = 'function' == typeof y ? y(f) : y,
          _ = Object.keys(h);

        Object.keys(f)
          .filter(function (t) {
            return !_.includes(t);
          })
          .forEach(function (t) {
            delete f[t];
          });
        module11(f, h);
      }

      var S = G(function () {
        return Ce(
          'function' == typeof u ? u(v) : u,
          p.default(
            p.default({}, o),
            {},
            {
              originalInjections: f,
            }
          )
        );
      }, []);
      return l.default.createElement(
        s.Provider,
        {
          value: S,
        },
        c
      );
    },
    useStore: function () {
      return React.useContext(s);
    },
    useStoreState: _(s),
    useStoreActions: O(s),
    useStoreDispatch: C(s),
    useStoreRehydrated: R(s),
  };
};

exports.createStore = Ce;
exports.createStoreActionsHook = O;
exports.createStoreDispatchHook = C;
exports.createStoreRehydratedHook = R;
exports.createStoreStateHook = _;

exports.createTransform = function (t, n, u) {
  if (undefined === u) u = {};
  var o = u.whitelist || null,
    c = u.blacklist || null;

  function f(t) {
    return !(!o || -1 !== o.indexOf(t)) || !(!c || -1 === c.indexOf(t));
  }

  return {
    in: function (n, u, o) {
      return !f(u) && t ? t(n, u, o) : n;
    },
    out: function (t, u, o) {
      return !f(u) && n ? n(t, u, o) : t;
    },
  };
};

exports.createTypedHooks = function () {
  return {
    useStoreActions: b,
    useStoreDispatch: T,
    useStoreState: S,
    useStoreRehydrated: j,
    useStore: k,
  };
};

exports.debug = function (t) {
  return module612.isDraft(t) ? module612.current(t) : t;
};

exports.generic = function (t) {
  return t;
};

exports.persist = function (t, n) {
  var u;
  return 'undefined' == typeof window ? t : p.default(p.default({}, t), {}, (((u = {})[A] = n), u));
};

exports.reducer = function (t) {
  var n;
  (n = {})[D] = true;
  n.fn = t;
  return n;
};

exports.thunk = function (t) {
  var n;
  (n = {})[M] = true;
  n.fn = t;
  return n;
};

exports.thunkOn = function (t, n) {
  var u;
  (u = {})[x] = true;
  u.fn = n;
  u.targetResolver = t;
  return u;
};

exports.unstable_effectOn = function (t, n) {
  var u;
  (u = {})[I] = true;
  u.dependencyResolvers = t;
  u.fn = n;
  return u;
};

exports.useLocalStore = function (t, u, o) {
  if (undefined === u) u = [];
  var c = React.useRef(),
    f = React.useRef(),
    s = G(function () {
      var n = null != c.current ? c.current.getState() : undefined,
        u = null != o ? o(n, f.current) : undefined,
        s = Ce(t(n), u);
      f.current = u;
      c.current = s;
      return s;
    }, u),
    l = React.useState(function () {
      return s.getState();
    }),
    p = l[0],
    v = l[1];
  React.useEffect(
    function () {
      return s.subscribe(function () {
        var t = s.getState();
        if (p !== t) v(t);
      });
    },
    [s]
  );
  return [p, s.getActions(), s];
};

exports.useStore = k;
exports.useStoreActions = b;
exports.useStoreDispatch = T;
exports.useStoreRehydrated = j;
exports.useStoreState = S;
