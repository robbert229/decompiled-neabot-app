var module11 = require('./11'),
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
    var u = y(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, f, s);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module816 = require('./816'),
  PropTypes = require('prop-types');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (y = function (t) {
    return t ? u : n;
  })(t);
}

function _(t) {
  var n = b();
  return function () {
    var u,
      o = module34.default(t);

    if (n) {
      var l = module34.default(this).constructor;
      u = Reflect.construct(o, arguments, l);
    } else u = o.apply(this, arguments);

    return module37.default(this, u);
  };
}

function b() {
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

var O = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
    },
  }),
  j = (function (t) {
    module35.default(f, t);

    var n = _(f);

    function f() {
      module24.default(this, f);
      return n.apply(this, arguments);
    }

    module25.default(f, [
      {
        key: 'getChildContext',
        value: function () {
          return {
            store: this.props.store,
          };
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children;
        },
      },
    ]);
    return f;
  })(React.Component);

function k(t) {
  return React.default.createElement(
    ReactNative.View,
    {
      style: O.container,
      pointerEvents: 'box-none',
    },
    t.children,
    React.default.createElement(E, null)
  );
}

j.childContextTypes = {
  store: PropTypes.default.shape({
    subscribe: PropTypes.default.func.isRequired,
    dispatch: PropTypes.default.func.isRequired,
    getState: PropTypes.default.func.isRequired,
  }),
};

if (!globals.__rootSiblingsInjected) {
  ReactNative.AppRegistry.setWrapperComponentProvider(function () {
    return k;
  });
  globals.__rootSiblingsInjected = true;
}

var R = 0,
  S = [],
  E = (function (t) {
    module35.default(s, t);

    var f = _(s);

    function s(t) {
      var o;
      module24.default(this, s);
      (o = f.call(this, t))._updatedSiblings = {};
      o._siblings = {};
      o._stores = {};

      o._update = function (t, u, l, f) {
        var s = module11.default({}, o._siblings),
          c = module11.default({}, o._stores);

        if (s[t] && !u) {
          delete s[t];
          delete c[t];
        } else if (u) {
          s[t] = u;
          c[t] = f;
        }

        o._updatedSiblings[t] = true;
        o._siblings = s;
        o._stores = c;
        o.forceUpdate(l);
      };

      o._siblings = {};
      S.push(o._update);
      return o;
    }

    module25.default(s, [
      {
        key: 'componentWillUnmount',
        value: function () {
          S.splice(S.indexOf(this._update), 1);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this._siblings,
            u = this._stores,
            o = [];
          Object.keys(n).forEach(function (l) {
            var f = n[l];

            if (f) {
              var s = React.default.createElement(
                  module816.default,
                  {
                    key: 'root-sibling-' + l,
                    shouldUpdate: !!t._updatedSiblings[l],
                  },
                  f
                ),
                p = u[l];
              if (p)
                o.push(
                  React.default.createElement(
                    j,
                    {
                      store: p,
                      key: 'root-sibling-' + l + '-provider',
                    },
                    s
                  )
                );
              else o.push(s);
            }
          });
          this._updatedSiblings = {};
          return o;
        },
      },
    ]);
    return s;
  })(React.Component);

exports.default = function t(n, o, l) {
  module24.default(this, t);
  var f = R++;

  function s(t, n, u) {
    S.forEach(function (o) {
      o(f, t, n, u);
    });
  }

  s(n, o, l);
  this.update = s;

  this.destroy = function (t) {
    S.forEach(function (n) {
      n(f, null, t);
    });
  };
};
