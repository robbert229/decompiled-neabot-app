var module11 = require('./11'),
  module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  y = (function (t) {
    module35.default(v, t);
    var y = module401.default(v);

    function v() {
      var t;
      module24.default(this, v);
      (t = y.apply(this, arguments)).state = {
        portals: [],
      };

      t.mount = function (n, l) {
        t.setState(function (t) {
          return {
            portals: [].concat(module20.default(t.portals), [
              {
                key: n,
                children: l,
              },
            ]),
          };
        });
      };

      t.update = function (u, l) {
        return t.setState(function (t) {
          return {
            portals: t.portals.map(function (t) {
              return t.key === u
                ? module11.default(module11.default({}, t), {
                    children: l,
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

    module25.default(v, [
      {
        key: 'render',
        value: function () {
          return this.state.portals.map(function (t, n) {
            var u = t.key,
              l = t.children;
            return React.default.createElement(
              ReactNative.View,
              {
                key: u,
                collapsable: false,
                pointerEvents: 'box-none',
                style: [
                  ReactNative.StyleSheet.absoluteFill,
                  {
                    zIndex: 1e3 + n,
                  },
                ],
              },
              l
            );
          });
        },
      },
    ]);
    return v;
  })(React.default.PureComponent);

exports.default = y;
