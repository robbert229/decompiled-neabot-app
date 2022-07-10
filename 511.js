exports.default = function () {
  var t = React.useContext(module424.NavigationHelpersContext),
    n = React.useContext(module495.default);
  return React.useCallback(
    function (u, f) {
      var l = n.options;

      if (false !== (null == l ? undefined : l.enabled)) {
        var p = t
            ? c(t, {
                index: 0,
                routes: [
                  {
                    name: u,
                    params: f,
                  },
                ],
              })
            : {
                index: 0,
                routes: [
                  {
                    name: u,
                    params: f,
                  },
                ],
              },
          s = null != l && l.getPathFromState ? l.getPathFromState(p, null == l ? undefined : l.config) : module424.getPathFromState(p, null == l ? undefined : l.config);
        return s;
      }
    },
    [n, t]
  );
};

var module11 = require('./11'),
  module424 = require('./424'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = l(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module495 = require('./495');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

var c = function t(o, u) {
  var f = o.getParent();

  if (f) {
    var l = f.getState();
    return t(f, {
      index: 0,
      routes: [
        module11.default({}, l.routes[l.index], {
          state: u,
        }),
      ],
    });
  }

  return u;
};
