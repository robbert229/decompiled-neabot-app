var module11 = require('./11'),
  module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = v(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

function h() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var b = (function (t, ...args) {
  module35.default(k, t);

  var v = k,
    b = h(),
    O = function () {
      var t,
        n = module34.default(v);

      if (b) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k() {
    var t;
    module24.default(this, k);
    (t = O.call(this, ...args)).state = {
      portals: [],
    };

    t.mount = function (n, o) {
      t.setState(function (t) {
        return {
          portals: [].concat(module20.default(t.portals), [
            {
              key: n,
              children: o,
            },
          ]),
        };
      });
    };

    t.update = function (u, o) {
      return t.setState(function (t) {
        return {
          portals: t.portals.map(function (t) {
            return t.key === u
              ? module11.default({}, t, {
                  children: o,
                })
              : t;
          }),
        };
      });
    };

    t.unmount = function (n) {
      return t.setState(function (t) {
        return {
          portals: t.portals.filter(function (t) {
            return t.key !== n;
          }),
        };
      });
    };

    return t;
  }

  module25.default(k, [
    {
      key: 'render',
      value: function () {
        return this.state.portals.map(function (t) {
          var n = t.key,
            u = t.children;
          return (
            <ReactNative.View key={n} collapsable={false} pointerEvents="box-none" style={ReactNative.StyleSheet.absoluteFill}>
              {u}
            </ReactNative.View>
          );
        });
      },
    },
  ]);
  return k;
})(React.PureComponent);

exports.default = b;
