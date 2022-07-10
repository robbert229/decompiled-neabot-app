var module12 = require('./12'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module424 = require('./424'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = y(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  module495 = require('./495'),
  module497 = require('./497'),
  module498 = require('./498'),
  module500 = require('./500'),
  module501 = require('./501'),
  module502 = require('./502'),
  module505 = require('./505'),
  b = ['theme', 'linking', 'fallback', 'documentTitle', 'onReady'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (y = function (t) {
    return t ? l : n;
  })(t);
}

globals.REACT_NAVIGATION_DEVTOOLS = new WeakMap();
var h = React.forwardRef(function (t, y) {
  var h = t.theme,
    E = undefined === h ? module497.default : h,
    _ = t.linking,
    k = t.fallback,
    A = undefined === k ? null : k,
    F = t.documentTitle,
    T = t.onReady,
    j = module52.default(t, b),
    w = !!_ && false !== _.enabled;
  if (null != _ && _.config) module424.validatePathConfig(_.config);
  var M = React.useRef(null);
  module500.default(M);
  module501.default(M, F);
  var R = module502.default(
    M,
    module11.default(
      {
        independent: j.independent,
        enabled: w,
        prefixes: [],
      },
      _
    )
  ).getInitialState;
  React.useEffect(function () {
    if (M.current)
      REACT_NAVIGATION_DEVTOOLS.set(M.current, {
        get linking() {
          var t, n, u, f;
          return module11.default({}, _, {
            enabled: w,
            prefixes: null != (t = null == _ ? undefined : _.prefixes) ? t : [],
            getStateFromPath: null != (n = null == _ ? undefined : _.getStateFromPath) ? n : module424.getStateFromPath,
            getPathFromState: null != (u = null == _ ? undefined : _.getPathFromState) ? u : module424.getPathFromState,
            getActionFromState: null != (f = null == _ ? undefined : _.getActionFromState) ? f : module424.getActionFromState,
          });
        },
      });
  });
  var I = module505.default(R),
    N = module12.default(I, 2),
    C = N[0],
    D = N[1];
  React.useImperativeHandle(y, function () {
    return M.current;
  });
  var V = React.useMemo(
      function () {
        return {
          options: _,
        };
      },
      [_]
    ),
    W = null != j.initialState || !w || C,
    x = React.useRef(T);
  React.useEffect(function () {
    x.current = T;
  });
  React.useEffect(
    function () {
      if (W) null == x.current || x.current();
    },
    [W]
  );
  return W
    ? React.createElement(
        module495.default.Provider,
        {
          value: V,
        },
        React.createElement(
          module498.default,
          {
            value: E,
          },
          React.createElement(
            module424.BaseNavigationContainer,
            module11.default({}, j, {
              initialState: null == j.initialState ? D : j.initialState,
              ref: M,
            })
          )
        )
      )
    : A;
});
exports.default = h;
