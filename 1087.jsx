var module11 = require('./11'),
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

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, p, c);
        else u[p] = t[p];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react'));

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

exports.childrenWithOverriddenStyle = function (t) {
  return React.Children.map(t, function (t) {
    if (!t) return null;
    var l = module11.default({}, t.props, {
      style: [
        t.props.style,
        {
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: undefined,
          height: undefined,
        },
      ],
      collapsable: false,
    });
    return <t.type />;
  });
};
