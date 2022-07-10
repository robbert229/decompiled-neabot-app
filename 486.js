exports.default = function (t) {
  var f = t.router,
    c = t.getState,
    s = t.setState,
    l = t.key,
    v = t.actionListeners,
    p = t.beforeRemoveListeners,
    y = t.routerConfigOptions,
    b = t.emitter,
    O = React.useContext(module439.default),
    h = O.onAction,
    k = O.onRouteFocus,
    j = O.addListener,
    P = O.onDispatchAction,
    w = React.useRef(y);
  React.useEffect(function () {
    w.current = y;
  });

  var _ = React.useCallback(
    function (t) {
      var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : new Set(),
        o = c();
      if (n.has(o.key)) return false;

      if ((n.add(o.key), 'string' != typeof t.target || t.target === o.key)) {
        var y = f.getStateForAction(o, t, w.current);

        if (null !== (y = null === y && t.target === o.key ? o : y)) {
          if ((P(t, o === y), o !== y)) {
            var O = module487.shouldPreventRemove(b, p, o.routes, y.routes, t);
            if (O) return true;
            s(y);
          }

          if (undefined !== k) {
            var j = f.shouldActionChangeFocus(t);
            if (j && undefined !== l) k(l);
          }

          return true;
        }
      }

      if (undefined !== h && h(t, n)) return true;

      for (var _ = v.length - 1; _ >= 0; _--) {
        var M = v[_];
        if (M(t, n)) return true;
      }

      return false;
    },
    [v, p, b, c, l, h, P, k, f, s]
  );

  module487.default({
    getState: c,
    emitter: b,
    beforeRemoveListeners: p,
  });
  React.useEffect(
    function () {
      return null == j ? undefined : j('action', _);
    },
    [j, _]
  );
  return _;
};

var React = c(require('react')),
  module439 = require('./439'),
  module487 = c(require('./487'));

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

function c(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = f(n);
  if (o && o.has(t)) return o.get(t);
  var u = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var l = c ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (l && (l.get || l.set)) Object.defineProperty(u, s, l);
      else u[s] = t[s];
    }

  u.default = t;
  if (o) o.set(t, u);
  return u;
}
