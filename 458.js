exports.default = function (t, n) {
  if (null == t) throw Error("Got 'undefined' for the navigation state. You must pass a valid state object.");
  if (n) module465.default(n);

  var c = null != n && n.screens ? b(null == n ? undefined : n.screens) : {},
    y = '/',
    h = t,
    j = {},
    w = function () {
      for (var n = 'number' == typeof h.index ? h.index : 0, l = h.routes[n], b = undefined, w = undefined, O = p(t), x = c, P = [], W = true; l.name in x && W; )
        if (
          ((b = x[l.name].pattern),
          P.push(l.name),
          l.params &&
            (function () {
              var t,
                n,
                f = null == (t = x[l.name]) ? undefined : t.stringify,
                c = module464.default(
                  Object.entries(l.params).map(function (t) {
                    var n = module12.default(t, 2),
                      o = n[0],
                      s = n[1];
                    return [o, null != f && f[o] ? f[o](s) : String(s)];
                  })
                );

              if ((b && module11.default(j, c), O === l)) {
                w = module11.default({}, c);
                if (!(null == (n = b)))
                  n.split('/')
                    .filter(function (t) {
                      return t.startsWith(':');
                    })
                    .forEach(function (t) {
                      var n = v(t);
                      if (w) delete w[n];
                    });
              }
            })(),
          x[l.name].screens && undefined !== l.state)
        ) {
          n = 'number' == typeof l.state.index ? l.state.index : l.state.routes.length - 1;
          var _ = l.state.routes[n],
            M = x[l.name].screens;

          if (M && _.name in M) {
            l = _;
            x = M;
          } else W = false;
        } else W = false;

      if (
        (undefined === b && (b = P.join('/')),
        undefined !== x[l.name]
          ? (y += b
              .split('/')
              .map(function (t) {
                var n = v(t);
                if ('*' === t) return l.name;

                if (t.startsWith(':')) {
                  var o = j[n];
                  return undefined === o && t.endsWith('?') ? '' : encodeURIComponent(o);
                }

                return encodeURIComponent(t);
              })
              .join('/'))
          : (y += encodeURIComponent(l.name)),
        w || (w = O.params),
        l.state)
      )
        y += '/';
      else if (w) {
        for (var I in w) 'undefined' === w[I] && delete w[I];

        var R = module459.stringify(w, {
          sort: false,
        });
        if (R) y += '?' + R;
      }
      h = l.state;
    };

  for (; h; ) w();

  y = (y = y.replace(/\/+/g, '/')).length > 1 ? y.replace(/\/$/, '') : y;
  return y;
};

var module20 = require('./20'),
  module11 = require('./11'),
  module12 = require('./12'),
  module459 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, s, l);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./459')),
  module464 = require('./464'),
  module465 = require('./465');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

var p = function t(n) {
  var o = 'number' == typeof n.index ? n.routes[n.index] : n.routes[n.routes.length - 1];
  return o.state ? t(o.state) : o;
};

var v = function (t) {
    return t.replace(/^:/, '').replace(/\?$/, '');
  },
  y = function (...args) {
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
  h = function (t, n) {
    var o, u;
    if ('string' == typeof t)
      return {
        pattern: n ? y(n, t) : t,
      };
    if (t.exact && undefined === t.path)
      throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
    u = true !== t.exact ? y(n || '', t.path || '') : t.path || '';
    var f = t.screens ? b(t.screens, u) : undefined;
    return {
      pattern: null == (o = u) ? undefined : o.split('/').filter(Boolean).join('/'),
      stringify: t.stringify,
      screens: f,
    };
  },
  b = function (t, n) {
    return module464.default(
      Object.entries(t).map(function (t) {
        var o = module12.default(t, 2),
          f = o[0],
          s = o[1];
        return [f, h(s, n)];
      })
    );
  };
