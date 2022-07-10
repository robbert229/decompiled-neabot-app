exports.default = function (t, l) {
  var f;
  if (l) module465.default(l);
  var s = [];
  if (null != l && l.initialRouteName)
    s.push({
      initialRouteName: l.initialRouteName,
      parentScreens: [],
    });
  var c = null == l ? undefined : l.screens,
    h = t.replace(/\/+/g, '/').replace(/^\//, '').replace(/\?.*$/, '');

  if (((h = h.endsWith('/') ? h : h + '/'), undefined === c)) {
    var v = h
      .split('/')
      .filter(Boolean)
      .map(function (t) {
        var n = decodeURIComponent(t);
        return {
          name: n,
        };
      });
    return v.length ? R(t, v, s) : undefined;
  }

  var y,
    b,
    N = (f = []).concat
      .apply(
        f,
        module20.default(
          Object.keys(c).map(function (t) {
            return w(t, c, [], s, []);
          })
        )
      )
      .sort(function (t, n) {
        if (t.pattern === n.pattern) return n.routeNames.join('>').localeCompare(t.routeNames.join('>'));
        if (t.pattern.startsWith(n.pattern)) return -1;
        if (n.pattern.startsWith(t.pattern)) return 1;

        for (var o = t.pattern.split('/'), u = n.pattern.split('/'), l = 0; l < o.length ** u.length; l++) {
          if (null == o[l]) return 1;
          if (null == u[l]) return -1;
          var f = '*' === o[l] || o[l].startsWith(':'),
            s = '*' === u[l] || u[l].startsWith(':');

          if (!f || !s) {
            if (f) return 1;
            if (s) return -1;
          }
        }

        return u.length - o.length;
      });

  if (
    (N.reduce(function (t, u) {
      if (t[u.pattern]) {
        var l = t[u.pattern].routeNames,
          f = u.routeNames;
        if (
          !(l.length > f.length
            ? f.every(function (t, n) {
                return l[n] === t;
              })
            : l.every(function (t, n) {
                return f[n] === t;
              }))
        )
          throw new Error(
            "Found conflicting screens with the same pattern. The pattern '" +
              u.pattern +
              "' resolves to both '" +
              l.join(' > ') +
              "' and '" +
              f.join(' > ') +
              "'. Patterns must be unique and cannot resolve to more than one screen."
          );
      }

      return module11.default(t, module260.default({}, u.pattern, u));
    }, {}),
    '/' === h)
  ) {
    var x = N.find(function (t) {
      return (
        '' === t.path &&
        t.routeNames.every(function (t) {
          var n;
          return !(
            null !=
              (n = N.find(function (n) {
                return n.screen === t;
              })) && n.path
          );
        })
      );
    });
    return x
      ? R(
          t,
          x.routeNames.map(function (t) {
            return {
              name: t,
            };
          }),
          s,
          N
        )
      : undefined;
  }

  var O = j(
      h,
      N.map(function (t) {
        return module11.default({}, t, {
          regex: t.regex ? new RegExp(t.regex.source + '$') : undefined,
        });
      })
    ),
    k = O.routes,
    W = O.remainingPath;

  if (undefined !== k) {
    b = R(t, k, s, N);
    h = W;
    y = b;
  }

  if (null == b || null == y) return;
  return y;
};

var module260 = require('./260'),
  module11 = require('./11'),
  module20 = require('./20'),
  module467 = require('./467'),
  module459 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, f, s);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./459')),
  module438 = require('./438'),
  module465 = require('./465');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

function h(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = v(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var u = 0;
    return function () {
      return u >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[u++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function v(t, n) {
  if (t) {
    if ('string' == typeof t) return y(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? y(t, n) : undefined;
  }
}

function y(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

var b = function (...args) {
    return (t = []).concat
      .apply(
        t,
        module20.default(
          args.map(function (t) {
            return t.split('/');
          })
        )
      )
      .filter(Boolean)
      .join('/');
  },
  j = function (t, u) {
    for (
      var module467,
        f,
        module438 = t,
        p = function (t) {
          if (!t.regex) return 'continue';
          var f = module438.match(t.regex);

          if (f) {
            var p,
              c =
                null == (p = t.pattern)
                  ? undefined
                  : p
                      .split('/')
                      .filter(function (t) {
                        return t.startsWith(':');
                      })
                      .reduce(function (t, u, l) {
                        return module11.default(t, module260.default({}, u, f[2 * (l + 1)].replace(/\//, '')));
                      }, {});
            module467 = t.routeNames.map(function (t) {
              var n,
                o = u.find(function (n) {
                  return n.screen === t;
                }),
                l =
                  null == o
                    ? undefined
                    : null == (n = o.path)
                    ? undefined
                    : n
                        .split('/')
                        .filter(function (t) {
                          return t.startsWith(':');
                        })
                        .reduce(function (t, n) {
                          var u = c[n];

                          if (u) {
                            var l,
                              f = n.replace(/^:/, '').replace(/\?$/, '');
                            t[f] = null != (l = o.parse) && l[f] ? o.parse[f](u) : u;
                          }

                          return t;
                        }, {});
              return l && Object.keys(l).length
                ? {
                    name: t,
                    params: l,
                  }
                : {
                    name: t,
                  };
            });
            module438 = module438.replace(f[1], '');
            return 'break';
          }
        },
        c = h(u);
      !(f = c()).done;

    ) {
      var v = p(f.value);
      if ('continue' !== v && 'break' === v) break;
    }

    return {
      routes: module467,
      remainingPath: module438,
    };
  },
  w = function t(n, o) {
    var l = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [],
      f = arguments.length > 3 ? arguments[3] : undefined,
      s = arguments.length > 4 ? arguments[4] : undefined,
      p = arguments.length > 5 ? arguments[5] : undefined,
      c = [];
    l.push(n);
    s.push(n);
    var h = o[n];

    if ('string' == typeof h) {
      var v = p ? b(p, h) : h;
      c.push(N(n, l, v, h));
    } else if ('object' == typeof h) {
      var y;

      if ('string' == typeof h.path) {
        if (h.exact && undefined === h.path)
          throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
        y = true !== h.exact ? b(p || '', h.path || '') : h.path || '';
        c.push(N(n, l, y, h.path, h.parse));
      }

      if (h.screens) {
        if (h.initialRouteName)
          f.push({
            initialRouteName: h.initialRouteName,
            parentScreens: s,
          });
        Object.keys(h.screens).forEach(function (n) {
          var o,
            v = t(n, h.screens, l, f, module20.default(s), null != (o = y) ? o : p);
          c.push.apply(c, module20.default(v));
        });
      }
    }

    l.pop();
    return c;
  },
  N = function (t, n, o, f, s) {
    return {
      screen: t,
      regex: (o = o.split('/').filter(Boolean).join('/'))
        ? new RegExp(
            '^(' +
              o
                .split('/')
                .map(function (t) {
                  return t.startsWith(':') ? '(([^/]+\\/)' + (t.endsWith('?') ? '?' : '') + ')' : ('*' === t ? '.*' : module467.default(t)) + '\\/';
                })
                .join('') +
              ')'
          )
        : undefined,
      pattern: o,
      path: f,
      routeNames: module20.default(n),
      parse: s,
    };
  },
  x = function (t, n) {
    for (var o, u = h(n); !(o = u()).done; ) {
      var l = o.value;
      if (t === l.routeNames[l.routeNames.length - 1]) return l.parse;
    }
  },
  O = function (t, n, o) {
    for (var u, l = h(o); !(u = l()).done; ) {
      var f = u.value;

      if (n.length === f.parentScreens.length) {
        for (var s = true, p = 0; p < n.length; p++)
          if (0 !== n[p].localeCompare(f.parentScreens[p])) {
            s = false;
            break;
          }

        if (s) return t !== f.initialRouteName ? f.initialRouteName : undefined;
      }
    }
  },
  k = function (t, n, u) {
    if (u)
      return t
        ? {
            index: 1,
            routes: [
              {
                name: t,
              },
              n,
            ],
          }
        : {
            routes: [n],
          };
    else
      return t
        ? {
            index: 1,
            routes: [
              {
                name: t,
              },
              module11.default({}, n, {
                state: {
                  routes: [],
                },
              }),
            ],
          }
        : {
            routes: [
              module11.default({}, n, {
                state: {
                  routes: [],
                },
              }),
            ],
          };
  },
  R = function (t, n, u, l) {
    var f,
      p = n.shift(),
      c = [],
      h = O(p.name, c, u);
    if ((c.push(p.name), (f = k(h, p, 0 === n.length)), n.length > 0))
      for (var v = f; (p = n.shift()); ) {
        h = O(p.name, c, u);
        var y = v.index || v.routes.length - 1;
        v.routes[y].state = k(h, p, 0 === n.length);
        if (n.length > 0) v = v.routes[y].state;
        c.push(p.name);
      }
    (p = module438.default(f)).path = t;
    var b = W(t, l ? x(p.name, l) : undefined);
    if (b) p.params = module11.default({}, p.params, b);
    return f;
  },
  W = function (t, n) {
    var o = t.split('?')[1],
      u = module459.parse(o);
    if (n)
      Object.keys(u).forEach(function (t) {
        if (n[t] && 'string' == typeof u[t]) u[t] = n[t](u[t]);
      });
    return Object.keys(u).length ? u : undefined;
  };
