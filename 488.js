exports.default = function (t) {
  var c = t.getState,
    s = t.getStateListeners,
    p = React.useContext(module439.default).addKeyedListener,
    v = React.useContext(module442.default),
    y = v ? v.key : 'root',
    O = React.useCallback(
      function () {
        var t = c(),
          u = t.routes.map(function (t) {
            var u,
              o = null == (u = s[t.key]) ? undefined : u.call(s);
            return t.state === o
              ? t
              : module11.default({}, t, {
                  state: o,
                });
          });
        return module476.default(t.routes, u)
          ? t
          : module11.default({}, t, {
              routes: u,
            });
      },
      [c, s]
    );
  React.useEffect(
    function () {
      return null == p ? undefined : p('getState', y, O);
    },
    [p, O, y]
  );
};

var module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = c(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, l, s);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module476 = require('./476'),
  module439 = require('./439'),
  module442 = require('./442');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (c = function (t) {
    return t ? u : n;
  })(t);
}
