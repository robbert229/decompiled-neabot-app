var t,
  n,
  module11 = require('./11');

t = this;

n = function (t) {
  'use strict';

  function n(t, n) {
    t.super_ = n;
    t.prototype = Object.create(n.prototype, {
      constructor: {
        value: t,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
  }

  function c(t, n) {
    Object.defineProperty(this, 'kind', {
      value: t,
      enumerable: true,
    });
    if (n && n.length)
      Object.defineProperty(this, 'path', {
        value: n,
        enumerable: true,
      });
  }

  function l(t, n, o) {
    l.super_.call(this, 'E', t);
    Object.defineProperty(this, 'lhs', {
      value: n,
      enumerable: true,
    });
    Object.defineProperty(this, 'rhs', {
      value: o,
      enumerable: true,
    });
  }

  function u(t, n) {
    u.super_.call(this, 'N', t);
    Object.defineProperty(this, 'rhs', {
      value: n,
      enumerable: true,
    });
  }

  function f(t, n) {
    f.super_.call(this, 'D', t);
    Object.defineProperty(this, 'lhs', {
      value: n,
      enumerable: true,
    });
  }

  function s(t, n, o) {
    s.super_.call(this, 'A', t);
    Object.defineProperty(this, 'index', {
      value: n,
      enumerable: true,
    });
    Object.defineProperty(this, 'item', {
      value: o,
      enumerable: true,
    });
  }

  function p(t, n, o) {
    var c = t.slice((o || n) + 1 || t.length);
    t.length = n < 0 ? t.length + n : n;
    t.push.apply(t, c);
    return t;
  }

  function h(t) {
    var n = undefined === t ? 'undefined' : T(t);
    return 'object' !== n
      ? n
      : t === Math
      ? 'math'
      : null === t
      ? 'null'
      : Array.isArray(t)
      ? 'array'
      : '[object Date]' === Object.prototype.toString.call(t)
      ? 'date'
      : 'function' == typeof t.toString && /^\/.*\//.test(t.toString())
      ? 'regexp'
      : 'object';
  }

  function v(t, n, o, c, y, b, w) {
    y = y || [];
    w = w || [];
    var x = y.slice(0);

    if (undefined !== b) {
      if (c) {
        if ('function' == typeof c && c(x, b)) return;

        if ('object' === (undefined === c ? 'undefined' : T(c))) {
          if (c.prefilter && c.prefilter(x, b)) return;

          if (c.normalize) {
            var S = c.normalize(x, b, t, n);

            if (S) {
              t = S[0];
              n = S[1];
            }
          }
        }
      }

      x.push(b);
    }

    if ('regexp' === h(t) && 'regexp' === h(n)) {
      t = t.toString();
      n = n.toString();
    }

    var j = undefined === t ? 'undefined' : T(t),
      k = undefined === n ? 'undefined' : T(n),
      E = 'undefined' !== j || (w && w[w.length - 1].lhs && w[w.length - 1].lhs.hasOwnProperty(b)),
      A = 'undefined' !== k || (w && w[w.length - 1].rhs && w[w.length - 1].rhs.hasOwnProperty(b));
    if (!E && A) o(new u(x, n));
    else if (!A && E) o(new f(x, t));
    else if (h(t) !== h(n)) o(new l(x, t, n));
    else if ('date' === h(t) && t - n != 0) o(new l(x, t, n));
    else if ('object' === j && null !== t && null !== n) {
      if (
        w.filter(function (n) {
          return n.lhs === t;
        }).length
      )
        t !== n && o(new l(x, t, n));
      else {
        if (
          (w.push({
            lhs: t,
            rhs: n,
          }),
          Array.isArray(t))
        ) {
          var D;

          for (t.length, D = 0; D < t.length; D++) D >= n.length ? o(new s(x, D, new f(undefined, t[D]))) : v(t[D], n[D], o, c, x, D, w);

          for (; D < n.length; ) o(new s(x, D, new u(undefined, n[D++])));
        } else {
          var O = Object.keys(t),
            N = Object.keys(n);
          O.forEach(function (l, u) {
            var f = N.indexOf(l);

            if (f >= 0) {
              v(t[l], n[l], o, c, x, l, w);
              N = p(N, f);
            } else v(t[l], undefined, o, c, x, l, w);
          });
          N.forEach(function (t) {
            v(undefined, n[t], o, c, x, t, w);
          });
        }

        w.length = w.length - 1;
      }
    } else t !== n && (('number' === j && isNaN(t) && isNaN(n)) || o(new l(x, t, n)));
  }

  function y(t, n, o, c) {
    c = c || [];
    v(
      t,
      n,
      function (t) {
        if (t) c.push(t);
      },
      o
    );
    return c.length ? c : undefined;
  }

  function b(t, n, o) {
    if (o.path && o.path.length) {
      var c,
        l = t[n],
        u = o.path.length - 1;

      for (c = 0; c < u; c++) l = l[o.path[c]];

      switch (o.kind) {
        case 'A':
          b(l[o.path[c]], o.index, o.item);
          break;

        case 'D':
          delete l[o.path[c]];
          break;

        case 'E':
        case 'N':
          l[o.path[c]] = o.rhs;
      }
    } else
      switch (o.kind) {
        case 'A':
          b(t[n], o.index, o.item);
          break;

        case 'D':
          t = p(t, n);
          break;

        case 'E':
        case 'N':
          t[n] = o.rhs;
      }

    return t;
  }

  function w(t, n, o) {
    if (t && n && o && o.kind) {
      for (var c = t, l = -1, u = o.path ? o.path.length - 1 : 0; ++l < u; ) {
        if (undefined === c[o.path[l]]) c[o.path[l]] = 'number' == typeof o.path[l] ? [] : {};
        c = c[o.path[l]];
      }

      switch (o.kind) {
        case 'A':
          b(o.path ? c[o.path[l]] : c, o.index, o.item);
          break;

        case 'D':
          delete c[o.path[l]];
          break;

        case 'E':
        case 'N':
          c[o.path[l]] = o.rhs;
      }
    }
  }

  function x(t, n, o) {
    if (o.path && o.path.length) {
      var c,
        l = t[n],
        u = o.path.length - 1;

      for (c = 0; c < u; c++) l = l[o.path[c]];

      switch (o.kind) {
        case 'A':
          x(l[o.path[c]], o.index, o.item);
          break;

        case 'D':
        case 'E':
          l[o.path[c]] = o.lhs;
          break;

        case 'N':
          delete l[o.path[c]];
      }
    } else
      switch (o.kind) {
        case 'A':
          x(t[n], o.index, o.item);
          break;

        case 'D':
        case 'E':
          t[n] = o.lhs;
          break;

        case 'N':
          t = p(t, n);
      }

    return t;
  }

  function S(t) {
    var n = t.kind,
      o = t.path,
      c = t.lhs,
      l = t.rhs,
      u = t.index,
      f = t.item;

    switch (n) {
      case 'E':
        return [o.join('.'), c, '\u2192', l];

      case 'N':
        return [o.join('.'), l];

      case 'D':
        return [o.join('.')];

      case 'A':
        return [o.join('.') + '[' + u + ']', f];

      default:
        return [];
    }
  }

  function j(t, n, o, c) {
    var l = y(t, n);

    try {
      if (c) o.groupCollapsed('diff');
      else o.group('diff');
    } catch (t) {
      o.log('diff');
    }

    if (l)
      l.forEach(function (t) {
        var n,
          c = t.kind,
          l = S(t);
        o.log('%c ' + G[c].text, ((n = c), 'color: ' + G[n].color + '; font-weight: bold'), ..._(l));
      });
    else o.log('\u2014\u2014 no diff \u2014\u2014');

    try {
      o.groupEnd();
    } catch (t) {
      o.log('\u2014\u2014 diff end \u2014\u2014 ');
    }
  }

  function k(t, n, o, c) {
    switch (undefined === t ? 'undefined' : T(t)) {
      case 'object':
        return 'function' == typeof t[c] ? t[c].apply(t, _(o)) : t[c];

      case 'function':
        return t(n);

      default:
        return t;
    }
  }

  function E(t) {
    var n = t.timestamp,
      o = t.duration;
    return function (t, c, l) {
      var u = ['action'];
      u.push('%c' + String(t.type));
      if (n) u.push('%c@ ' + c);
      if (o) u.push('%c(in ' + l.toFixed(2) + ' ms)');
      return u.join(' ');
    };
  }

  function A(t, n) {
    var o = n.logger,
      c = n.actionTransformer,
      l = n.titleFormatter,
      u = undefined === l ? E(n) : l,
      f = n.collapsed,
      s = n.colors,
      p = n.level,
      h = n.diff,
      v = undefined === n.titleFormatter;
    t.forEach(function (l, y) {
      var b = l.started,
        w = l.startedTime,
        x = l.action,
        S = l.prevState,
        E = l.error,
        A = l.took,
        D = l.nextState,
        O = t[y + 1];

      if (O) {
        D = O.prevState;
        A = O.started - b;
      }

      var N = c(x),
        P =
          'function' == typeof f
            ? f(
                function () {
                  return D;
                },
                x,
                l
              )
            : f,
        C = F(w),
        L = s.title ? 'color: ' + s.title(N) + ';' : '',
        T = ['color: gray; font-weight: lighter;'];
      T.push(L);
      if (n.timestamp) T.push('color: gray; font-weight: lighter;');
      if (n.duration) T.push('color: gray; font-weight: lighter;');

      var _ = u(N, C, A);

      try {
        if (P) s.title && v ? o.groupCollapsed('%c ' + _, ...T) : o.groupCollapsed(_);
        else if (s.title && v) o.group('%c ' + _, ...T);
        else o.group(_);
      } catch (t) {
        o.log(_);
      }

      var M = k(p, N, [S], 'prevState'),
        G = k(p, N, [N], 'action'),
        H = k(p, N, [E, S], 'error'),
        R = k(p, N, [D], 'nextState');
      if (M)
        if (s.prevState) {
          var z = 'color: ' + s.prevState(S) + '; font-weight: bold';
          o[M]('%c prev state', z, S);
        } else o[M]('prev state', S);
      if (G)
        if (s.action) {
          var B = 'color: ' + s.action(N) + '; font-weight: bold';
          o[G]('%c action    ', B, N);
        } else o[G]('action    ', N);
      if (E && H)
        if (s.error) {
          var I = 'color: ' + s.error(E, S) + '; font-weight: bold;';
          o[H]('%c error     ', I, E);
        } else o[H]('error     ', E);
      if (R)
        if (s.nextState) {
          var K = 'color: ' + s.nextState(D) + '; font-weight: bold';
          o[R]('%c next state', K, D);
        } else o[R]('next state', D);
      if (h) j(S, D, o, P);

      try {
        o.groupEnd();
      } catch (t) {
        o.log('\u2014\u2014 log end \u2014\u2014');
      }
    });
  }

  function D() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
      n = module11({}, H, t),
      c = n.logger,
      l = n.stateTransformer,
      u = n.errorTransformer,
      f = n.predicate,
      s = n.logErrors,
      p = n.diffPredicate;
    if (undefined === c)
      return function () {
        return function (t) {
          return function (n) {
            return t(n);
          };
        };
      };

    if (t.getState && t.dispatch) {
      console.error(
        "[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"
      );
      return function () {
        return function (t) {
          return function (n) {
            return t(n);
          };
        };
      };
    }

    var h = [];
    return function (t) {
      var c = t.getState;
      return function (t) {
        return function (v) {
          if ('function' == typeof f && !f(c, v)) return t(v);
          var y = {};
          h.push(y);
          y.started = L.now();
          y.startedTime = new Date();
          y.prevState = l(c());
          y.action = v;
          var b = undefined;
          if (s)
            try {
              b = t(v);
            } catch (t) {
              y.error = u(t);
            }
          else b = t(v);
          y.took = L.now() - y.started;
          y.nextState = l(c());
          var w = n.diff && 'function' == typeof p ? p(c, v) : n.diff;
          if (
            (A(
              h,
              module11({}, n, {
                diff: w,
              })
            ),
            (h.length = 0),
            y.error)
          )
            throw y.error;
          return b;
        };
      };
    };
  }

  var O,
    N,
    P = function (t, n) {
      return new Array(n + 1).join(t);
    },
    C = function (t, n) {
      return P('0', n - t.toString().length) + t;
    },
    F = function (t) {
      return C(t.getHours(), 2) + ':' + C(t.getMinutes(), 2) + ':' + C(t.getSeconds(), 2) + '.' + C(t.getMilliseconds(), 3);
    },
    L = 'undefined' != typeof performance && null !== performance && 'function' == typeof performance.now ? performance : Date,
    T =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
          },
    _ = function (t) {
      if (Array.isArray(t)) {
        for (var n = 0, o = Array(t.length); n < t.length; n++) o[n] = t[n];

        return o;
      }

      return Array.from(t);
    },
    M = [];

  O = 'object' === (undefined === globals ? 'undefined' : T(globals)) && globals ? globals : 'undefined' != typeof window ? window : {};
  if ((N = O.DeepDiff))
    M.push(function () {
      if (undefined !== N && O.DeepDiff === y) {
        O.DeepDiff = N;
        N = undefined;
      }
    });
  n(l, c);
  n(u, c);
  n(f, c);
  n(s, c);
  Object.defineProperties(y, {
    diff: {
      value: y,
      enumerable: true,
    },
    observableDiff: {
      value: v,
      enumerable: true,
    },
    applyDiff: {
      value: function (t, n, o) {
        if (t && n)
          v(t, n, function (c) {
            if (!(o && !o(t, n, c))) w(t, n, c);
          });
      },
      enumerable: true,
    },
    applyChange: {
      value: w,
      enumerable: true,
    },
    revertChange: {
      value: function (t, n, o) {
        if (t && n && o && o.kind) {
          var c,
            l,
            u = t;

          for (l = o.path.length - 1, c = 0; c < l; c++) {
            if (undefined === u[o.path[c]]) u[o.path[c]] = {};
            u = u[o.path[c]];
          }

          switch (o.kind) {
            case 'A':
              x(u[o.path[c]], o.index, o.item);
              break;

            case 'D':
            case 'E':
              u[o.path[c]] = o.lhs;
              break;

            case 'N':
              delete u[o.path[c]];
          }
        }
      },
      enumerable: true,
    },
    isConflict: {
      value: function () {
        return undefined !== N;
      },
      enumerable: true,
    },
    noConflict: {
      value: function () {
        if (M) {
          M.forEach(function (t) {
            t();
          });
          M = null;
        }

        return y;
      },
      enumerable: true,
    },
  });

  var G = {
      E: {
        color: '#2196F3',
        text: 'CHANGED:',
      },
      N: {
        color: '#4CAF50',
        text: 'ADDED:',
      },
      D: {
        color: '#F44336',
        text: 'DELETED:',
      },
      A: {
        color: '#2196F3',
        text: 'ARRAY:',
      },
    },
    H = {
      level: 'log',
      logger: console,
      logErrors: true,
      collapsed: undefined,
      predicate: undefined,
      duration: false,
      timestamp: true,
      stateTransformer: function (t) {
        return t;
      },
      actionTransformer: function (t) {
        return t;
      },
      errorTransformer: function (t) {
        return t;
      },
      colors: {
        title: function () {
          return 'inherit';
        },
        prevState: function () {
          return '#9E9E9E';
        },
        action: function () {
          return '#03A9F4';
        },
        nextState: function () {
          return '#4CAF50';
        },
        error: function () {
          return '#F20404';
        },
      },
      diff: false,
      diffPredicate: undefined,
      transformer: undefined,
    },
    R = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
        n = t.dispatch,
        o = t.getState;
      return 'function' == typeof n || 'function' == typeof o
        ? D()({
            dispatch: n,
            getState: o,
          })
        : void console.error(
            "\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n"
          );
    };

  t.defaults = H;
  t.createLogger = D;
  t.logger = R;
  t.default = R;
  Object.defineProperty(t, '__esModule', {
    value: true,
  });
};

if ('object' == typeof exports && undefined !== module) n(exports);
else if ('function' == typeof define && define.amd) define(['exports'], n);
else n((t.reduxLogger = t.reduxLogger || {}));
