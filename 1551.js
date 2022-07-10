exports.default = function () {
  var t = React.useState({
      height: 0,
      width: 0,
      measured: false,
    }),
    o = module12.default(t, 2),
    f = o[0],
    c = o[1],
    l = React.useCallback(
      function (t) {
        var n = t.nativeEvent.layout,
          u = n.height,
          o = n.width;
        if (!(u === f.height && o === f.width))
          c({
            height: u,
            width: o,
            measured: true,
          });
      },
      [f.height, f.width]
    );
  return [f, l];
};

var module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var h = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (h && (h.get || h.set)) Object.defineProperty(f, l, h);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}
