var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = O(require('react')),
  module1575 = require('./1575'),
  module1518 = O(require('./1518')),
  module1504 = require('./1504'),
  module1495 = require('./1495');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
  })(t);
}

function O(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = h(n);
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
}

function P() {
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

var b = (function (t) {
  module35.default(j, t);

  var h = j,
    O = P(),
    b = function () {
      var t,
        n = module34.default(h);

      if (O) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function j() {
    module24.default(this, j);
    return b.apply(this, arguments);
  }

  module25.default(j, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.children,
          u = t.theme;
        return (
          <module1504.Consumer>
            {function (t) {
              return React.createElement(module1518.PortalContext.Consumer, null, function (o) {
                return React.createElement(
                  module1575.default,
                  {
                    manager: o,
                  },
                  React.createElement(
                    module1504.Provider,
                    {
                      value: t,
                    },
                    React.createElement(
                      module1495.ThemeProvider,
                      {
                        theme: u,
                      },
                      n
                    )
                  )
                );
              });
            }}
          </module1504.Consumer>
        );
      },
    },
  ]);
  return j;
})(React.Component);

b.Host = module1518.default;
var j = module1495.withTheme(b);
exports.default = j;
