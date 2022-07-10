exports.default = function (t) {
  var o = React.useState(t),
    c = module12.default(o, 1)[0],
    l = [false, undefined];
  c.then(function (t) {
    l = [true, t];
  });
  var s = React.useState(l),
    p = module12.default(s, 2),
    v = p[0],
    y = p[1],
    O = module12.default(v, 1)[0];
  React.useEffect(
    function () {
      var t,
        u = false;
      if (!O)
        regeneratorRuntime.default.async(
          function (f) {
            for (;;)
              switch ((f.prev = f.next)) {
                case 0:
                  f.prev = 0;
                  f.next = 3;
                  return regeneratorRuntime.default.awrap(c);

                case 3:
                  t = f.sent;

                case 4:
                  f.prev = 4;
                  if (!u) y([true, t]);
                  return f.finish(4);

                case 7:
                case 'end':
                  return f.stop();
              }
          },
          null,
          null,
          [[0, , 4, 7]],
          Promise
        );
      return function () {
        u = true;
      };
    },
    [c, O]
  );
  return v;
};

var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
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
        var s = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, l, s);
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
