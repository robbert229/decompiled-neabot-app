var module609 = require('./609');

var n,
  o =
    (n = module609) && 'object' == typeof n && 'default' in n
      ? n
      : {
          default: n,
        };

function f(t) {
  return 'Minified Redux error #' + t + '; visit https://redux.js.org/Errors?code=' + t + ' for the full message or use the non-minified dev environment for full errors. ';
}

var u = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
  c = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  p = {
    INIT: '@@redux/INIT' + c(),
    REPLACE: '@@redux/REPLACE' + c(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + c();
    },
  };

function l(t) {
  if ('object' != typeof t || null === t) return false;

  for (var n = t; null !== Object.getPrototypeOf(n); ) n = Object.getPrototypeOf(n);

  return Object.getPrototypeOf(t) === n;
}

function y(t) {
  Object.keys(t).forEach(function (n) {
    var o = t[n];
    if (
      undefined ===
      o(undefined, {
        type: p.INIT,
      })
    )
      throw new Error(f(12));
    if (
      undefined ===
      o(undefined, {
        type: p.PROBE_UNKNOWN_ACTION(),
      })
    )
      throw new Error(f(13));
  });
}

function v(t, n) {
  return function () {
    return n(t.apply(this, arguments));
  };
}

function h() {
  return 0 === args.length
    ? function (t) {
        return t;
      }
    : 1 === args.length
    ? args[0]
    : args.reduce(function (t, n) {
        return function () {
          return t(n.apply(undefined, arguments));
        };
      });
}

exports.__DO_NOT_USE__ActionTypes = p;

exports.applyMiddleware = function (...args) {
  return function (t) {
    return function () {
      var u = t.apply(undefined, arguments),
        c = function () {
          throw new Error(f(15));
        },
        p = {
          getState: u.getState,
          dispatch: function () {
            return c.apply(undefined, arguments);
          },
        },
        l = args.map(function (t) {
          return t(p);
        });

      c = h.apply(undefined, l)(u.dispatch);
      return o.default(
        o.default({}, u),
        {},
        {
          dispatch: c,
        }
      );
    };
  };
};

exports.bindActionCreators = function (t, n) {
  if ('function' == typeof t) return v(t, n);
  if ('object' != typeof t || null === t) throw new Error(f(16));
  var o = {};

  for (var u in t) {
    var c = t[u];
    if ('function' == typeof c) o[u] = v(c, n);
  }

  return o;
};

exports.combineReducers = function (t) {
  for (var n = Object.keys(t), o = {}, u = 0; u < n.length; u++) {
    var c = n[u];
    if ('function' == typeof t[c]) o[c] = t[c];
  }

  var p,
    l = Object.keys(o);

  try {
    y(o);
  } catch (t) {
    p = t;
  }

  return function (t, n) {
    if ((undefined === t && (t = {}), p)) throw p;

    for (var u = false, c = {}, y = 0; y < l.length; y++) {
      var v = l[y],
        h = o[v],
        s = t[v],
        w = h(s, n);
      if (undefined === w) throw (n && n.type, new Error(f(14)));
      c[v] = w;
      u = u || w !== s;
    }

    return (u = u || l.length !== Object.keys(t).length) ? c : t;
  };
};

exports.compose = h;

exports.createStore = function t(n, o, c) {
  var y;
  if (('function' == typeof o && 'function' == typeof c) || ('function' == typeof c && 'function' == typeof arguments[3])) throw new Error(f(0));

  if (('function' == typeof o && undefined === c && ((c = o), (o = undefined)), undefined !== c)) {
    if ('function' != typeof c) throw new Error(f(1));
    return c(t)(n, o);
  }

  if ('function' != typeof n) throw new Error(f(2));
  var v = n,
    h = o,
    s = [],
    w = s,
    E = false;

  function b() {
    if (w === s) w = s.slice();
  }

  function O() {
    if (E) throw new Error(f(3));
    return h;
  }

  function N(t) {
    if ('function' != typeof t) throw new Error(f(4));
    if (E) throw new Error(f(5));
    var n = true;
    b();
    w.push(t);
    return function () {
      if (n) {
        if (E) throw new Error(f(6));
        n = false;
        b();
        var o = w.indexOf(t);
        w.splice(o, 1);
        s = null;
      }
    };
  }

  function _(t) {
    if (!l(t)) throw new Error(f(7));
    if (undefined === t.type) throw new Error(f(8));
    if (E) throw new Error(f(9));

    try {
      E = true;
      h = v(h, t);
    } finally {
      E = false;
    }

    for (var n = (s = w), o = 0; o < n.length; o++) n[o]();

    return t;
  }

  _({
    type: p.INIT,
  });

  (y = {
    dispatch: _,
    subscribe: N,
    getState: O,
    replaceReducer: function (t) {
      if ('function' != typeof t) throw new Error(f(10));
      v = t;

      _({
        type: p.REPLACE,
      });
    },
  })[u] = function () {
    var t,
      n = N;

    (t = {
      subscribe: function (t) {
        if ('object' != typeof t || null === t) throw new Error(f(11));

        function o() {
          if (t.next) t.next(O());
        }

        o();
        return {
          unsubscribe: n(o),
        };
      },
    })[u] = function () {
      return this;
    };

    return t;
  };

  return y;
};
