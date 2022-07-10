exports.default = function (t) {
  React.useContext(module439.default).stackRef;
  var y = t.state,
    p = t.getState,
    v = t.navigation,
    k = t.setOptions,
    O = t.router,
    b = t.emitter,
    j = React.useMemo(
      function () {
        return {
          current: {},
        };
      },
      [p, v, k, O, b]
    ),
    w = module11.default({}, O.actionCreators, module426.CommonActions);
  j.current = y.routes.reduce(function (t, f) {
    var c = j.current[f.key];
    if (c) t[f.key] = c;
    else {
      v.emit;

      var l = module52.default(v, s),
        y = function (t) {
          var n = 'function' == typeof t ? t(p()) : t;
          if (null != n)
            v.dispatch(
              module11.default(
                {
                  source: f.key,
                },
                n
              )
            );
        },
        O = function (t) {
          try {
            t();
          } finally {
          }
        },
        M = Object.keys(w).reduce(function (t, n) {
          t[n] = function (...args) {
            return O(function () {
              return y(w[n].apply(w, args));
            });
          };

          return t;
        }, {});

      t[f.key] = module11.default({}, l, M, b.create(f.key), {
        dispatch: function (t) {
          return O(function () {
            return y(t);
          });
        },
        setOptions: function (t) {
          return k(function (u) {
            return module11.default({}, u, module260.default({}, f.key, module11.default({}, u[f.key], t)));
          });
        },
        isFocused: function () {
          var t = p();
          return t.routes[t.index].key === f.key && (!v || v.isFocused());
        },
      });
    }
    return t;
  }, {});
  return j.current;
};

var module260 = require('./260'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
  module426 = require('./426'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = y(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module439 = require('./439'),
  s = ['emit'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (y = function (t) {
    return t ? u : n;
  })(t);
}
