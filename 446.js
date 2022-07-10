exports.default = function (t) {
  var c = React.useRef(t);
  React.useEffect(function () {
    c.current = t;
  });
  var f = React.useRef({}),
    o = React.useCallback(function (t) {
      var n = function (n, u) {
        var c = f.current[n] ? f.current[n][t] : undefined;

        if (c) {
          var o = c.indexOf(u);
          c.splice(o, 1);
        }
      };

      return {
        addListener: function (u, c) {
          f.current[u] = f.current[u] || {};
          f.current[u][t] = f.current[u][t] || [];
          f.current[u][t].push(c);
          return function () {
            return n(u, c);
          };
        },
        removeListener: n,
      };
    }, []),
    l = React.useCallback(function (t) {
      var u,
        o,
        l = t.type,
        p = t.data,
        v = t.target,
        s = t.canPreventDefault,
        b = f.current[l] || {},
        y =
          undefined !== v
            ? null == (u = b[v])
              ? undefined
              : u.slice()
            : (o = []).concat
                .apply(
                  o,
                  module20.default(
                    Object.keys(b).map(function (t) {
                      return b[t];
                    })
                  )
                )
                .filter(function (t, n, u) {
                  return u.lastIndexOf(t) === n;
                }),
        O = {
          get type() {
            return l;
          },
        };

      if (
        (undefined !== v &&
          Object.defineProperty(O, 'target', {
            enumerable: true,
            get: function () {
              return v;
            },
          }),
        undefined !== p &&
          Object.defineProperty(O, 'data', {
            enumerable: true,
            get: function () {
              return p;
            },
          }),
        s)
      ) {
        var j = false;
        Object.defineProperties(O, {
          defaultPrevented: {
            enumerable: true,
            get: function () {
              return j;
            },
          },
          preventDefault: {
            enumerable: true,
            value: function () {
              j = true;
            },
          },
        });
      }

      if (!(null == c.current)) c.current(O);
      if (!(null == y))
        y.forEach(function (t) {
          return t(O);
        });
      return O;
    }, []);
  return React.useMemo(
    function () {
      return {
        create: o,
        emit: l,
      };
    },
    [o, l]
  );
};

var module20 = require('./20'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = c(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = o ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, l, p);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react'));

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (c = function (t) {
    return t ? u : n;
  })(t);
}
