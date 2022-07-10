exports.default = function (t) {
  var b = t.state,
    P = t.screens,
    S = t.navigation,
    j = t.screenOptions,
    h = t.defaultScreenOptions,
    w = t.onAction,
    M = t.getState,
    _ = t.setState,
    E = t.addListener,
    A = t.addKeyedListener,
    D = t.onRouteFocus,
    L = t.router,
    R = t.emitter,
    C = React.useState({}),
    W = module12.default(C, 2),
    F = W[0],
    K = W[1],
    x = React.useContext(module439.default),
    B = x.onDispatchAction,
    N = x.onOptionsChange,
    T = x.stackRef,
    q = React.useMemo(
      function () {
        return {
          navigation: S,
          onAction: w,
          addListener: E,
          addKeyedListener: A,
          onRouteFocus: D,
          onDispatchAction: B,
          onOptionsChange: N,
          stackRef: T,
        };
      },
      [S, w, E, A, D, B, N, T]
    ),
    z = module482.default({
      state: b,
      getState: M,
      navigation: S,
      setOptions: K,
      router: L,
      emitter: R,
    });
  return module457.default(b.routes).reduce(function (t, f, y) {
    var O = P[f.name],
      S = O[1],
      w = z[f.key],
      E = [j].concat(module20.default(O[0] ? O[0].filter(Boolean) : []), [S.options, F[f.key]]),
      A = E.reduce(function (t, n) {
        return module11.default(
          t,
          'function' != typeof n
            ? n
            : n({
                route: f,
                navigation: w,
              })
        );
      }, {}),
      D = module11.default(
        {},
        'function' == typeof h
          ? h({
              route: f,
              navigation: w,
              options: A,
            })
          : h,
        A
      ),
      L = function () {
        return K(function (t) {
          if (f.key in t) {
            var o = f.key,
              u = module52.default(t, [o].map(k));
            return u;
          }

          return t;
        });
      };

    t[f.key] = {
      route: f,
      navigation: w,
      render: function () {
        return React.createElement(
          module439.default.Provider,
          {
            key: f.key,
            value: q,
          },
          React.createElement(
            module441.default.Provider,
            {
              value: w,
            },
            React.createElement(
              module442.default.Provider,
              {
                value: f,
              },
              React.createElement(module480.default, {
                navigation: w,
                route: f,
                screen: S,
                routeState: b.routes[y].state,
                getState: M,
                setState: _,
                options: D,
                clearOptions: L,
              })
            )
          )
        );
      },
      options: D,
    };
    return t;
  }, {});
};

var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
  module20 = require('./20'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module439 = require('./439'),
  module441 = require('./441'),
  module442 = require('./442'),
  module480 = require('./480'),
  module482 = require('./482'),
  module457 = require('./457');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function k(t) {
  var n = P(t, 'string');
  return 'symbol' == typeof n ? n : String(n);
}

function P(t, n) {
  if ('object' != typeof t || null === t) return t;
  var o = t[Symbol.toPrimitive];

  if (undefined !== o) {
    var u = o.call(t, n || 'default');
    if ('object' != typeof u) return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }

  return ('string' === n ? String : Number)(t);
}
