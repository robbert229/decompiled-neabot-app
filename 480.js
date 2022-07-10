exports.default = function (t) {
  var s = t.screen,
    p = t.route,
    v = t.navigation,
    y = t.routeState,
    k = t.getState,
    b = t.setState,
    O = t.options,
    j = t.clearOptions,
    C = React.useRef(),
    P = React.useCallback(function () {
      return C.current;
    }, []),
    E = module448.default({
      key: p.key,
      options: O,
      navigation: v,
    }).addOptionsGetter,
    M = React.useCallback(function (t) {
      C.current = t;
    }, []),
    _ = React.useCallback(
      function () {
        var t = k(),
          n = t.routes.find(function (t) {
            return t.key === p.key;
          });
        return n ? n.state : undefined;
      },
      [k, p.key]
    ),
    h = React.useCallback(
      function (t) {
        var u = k();
        b(
          module11.default({}, u, {
            routes: u.routes.map(function (u) {
              return u.key === p.key
                ? module11.default({}, u, {
                    state: t,
                  })
                : u;
            }),
          })
        );
      },
      [k, p.key, b]
    ),
    w = React.useRef(true);

  React.useEffect(function () {
    w.current = false;
  });
  React.useEffect(function () {
    return j;
  }, []);
  var S = React.useCallback(function () {
      return w.current;
    }, []),
    W = React.useMemo(
      function () {
        return {
          state: y,
          getState: _,
          setState: h,
          getKey: P,
          setKey: M,
          getIsInitial: S,
          addOptionsGetter: E,
        };
      },
      [y, _, h, P, M, S, E]
    ),
    D = s.getComponent ? s.getComponent() : s.component;
  return React.createElement(
    module443.default.Provider,
    {
      value: W,
    },
    React.createElement(
      module437.default,
      null,
      React.createElement(
        module481.default,
        {
          name: s.name,
          render: D || s.children,
          navigation: v,
          route: p,
        },
        undefined !== D
          ? React.createElement(D, {
              navigation: v,
              route: p,
            })
          : undefined !== s.children
          ? s.children({
              navigation: v,
              route: p,
            })
          : null
      )
    )
  );
};

var module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = s(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, f, l);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module437 = require('./437'),
  module443 = require('./443'),
  module481 = require('./481'),
  module448 = require('./448');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (s = function (t) {
    return t ? u : n;
  })(t);
}
