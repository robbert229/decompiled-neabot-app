exports.saveValue = function (t, u) {
  return regeneratorRuntime.default.async(
    function (c) {
      for (;;)
        switch ((c.prev = c.next)) {
          case 0:
            if (((c.prev = 0), null != u)) {
              c.next = 7;
              break;
            }

            c.next = 4;
            return regeneratorRuntime.default.awrap(l(t));

          case 4:
            return c.abrupt('return', {
              success: true,
            });

          case 7:
            c.next = 9;
            return regeneratorRuntime.default.awrap(module589.default.setItem(t, u));

          case 9:
            return c.abrupt('return', {
              success: true,
            });

          case 10:
            c.next = 15;
            break;

          case 12:
            c.prev = 12;
            c.t0 = c.catch(0);
            return c.abrupt('return', {
              error: c.t0,
            });

          case 15:
          case 'end':
            return c.stop();
        }
    },
    null,
    null,
    [[0, 12]],
    Promise
  );
};

var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = f(n);
    if (u && u.has(t)) return u.get(t);
    var c = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var o = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (o && (o.get || o.set)) Object.defineProperty(c, l, o);
        else c[l] = t[l];
      }

    c.default = t;
    if (u) u.set(t, c);
    return c;
  })(require('react')),
  module589 = require('./589');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}

function l(t) {
  return regeneratorRuntime.default.async(
    function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            u.prev = 0;
            u.next = 3;
            return regeneratorRuntime.default.awrap(module589.default.removeItem(t));

          case 3:
            return u.abrupt('return', {
              success: true,
            });

          case 6:
            u.prev = 6;
            u.t0 = u.catch(0);
            return u.abrupt('return', {
              error: u.t0,
            });

          case 9:
          case 'end':
            return u.stop();
        }
    },
    null,
    null,
    [[0, 6]],
    Promise
  );
}

var o = function (t, f) {
  var l = React.useState(f),
    o = module12.default(l, 2),
    p = o[0],
    v = o[1];
  React.useEffect(function () {
    var module12;
    regeneratorRuntime.default.async(
      function (c) {
        for (;;)
          switch ((c.prev = c.next)) {
            case 0:
              module12 = f;
              c.prev = 1;
              c.t1 = JSON;
              c.next = 5;
              return regeneratorRuntime.default.awrap(module589.default.getItem(t));

            case 5:
              if (((c.t2 = c.sent), (c.t0 = c.t1.parse.call(c.t1, c.t2)), c.t0)) {
                c.next = 9;
                break;
              }

              c.t0 = f;

            case 9:
              module12 = c.t0;
              c.next = 14;
              break;

            case 12:
              c.prev = 12;
              c.t3 = c.catch(1);

            case 14:
              c.prev = 14;
              v(module12);
              return c.finish(14);

            case 17:
            case 'end':
              return c.stop();
          }
      },
      null,
      null,
      [[1, 12, 14, 17]],
      Promise
    );
  }, []);
  return [
    p,
    function (u) {
      var React;
      return regeneratorRuntime.default.async(
        function (f) {
          for (;;)
            switch ((f.prev = f.next)) {
              case 0:
                if (((f.prev = 0), null !== u)) {
                  f.next = 6;
                  break;
                }

                f.next = 4;
                return regeneratorRuntime.default.awrap(module589.default.removeItem(t));

              case 4:
                f.next = 9;
                break;

              case 6:
                React = JSON.stringify(u);
                f.next = 9;
                return regeneratorRuntime.default.awrap(module589.default.setItem(t, React));

              case 9:
                f.next = 13;
                break;

              case 11:
                f.prev = 11;
                f.t0 = f.catch(0);

              case 13:
                f.prev = 13;
                v(u);
                return f.finish(13);

              case 16:
              case 'end':
                return f.stop();
            }
        },
        null,
        null,
        [[0, 11, 13, 16]],
        Promise
      );
    },
  ];
};

exports.default = o;
