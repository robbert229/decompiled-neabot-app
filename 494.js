exports.default = function () {
  var t = React.useContext(module424.NavigationContainerRefContext),
    f = React.useContext(module495.default);
  return React.useCallback(
    function (o) {
      if (undefined === t) throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");

      if ('string' == typeof o) {
        if (!o.startsWith('/')) throw new Error("The path must start with '/' (" + o + ').');
        var u = f.options,
          c = null != u && u.getStateFromPath ? u.getStateFromPath(o, u.config) : module424.getStateFromPath(o, null == u ? undefined : u.config);
        if (!c) throw new Error('Failed to parse the path to a navigation state.');
        var l = module424.getActionFromState(c, null == u ? undefined : u.config);
        if (undefined !== l) t.dispatch(l);
        else t.reset(c);
      } else t.navigate(o.screen, o.params);
    },
    [f, t]
  );
};

var module424 = require('./424'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, l, s);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module495 = require('./495');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}
