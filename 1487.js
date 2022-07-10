var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  module1488 = require('./1488'),
  module1489 = require('./1489'),
  module1627 = require('./1627'),
  b = ['style', 'bg'],
  C = ['style'];

function R() {
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

var k = function (t) {
    var n = t.style,
      u = t.bg,
      l = module52.default(t, b),
      o = module1489.default().theme;
    return React.default.createElement(
      module1488.default,
      module11.default({}, l, {
        style: [
          module1627.default.container,
          {
            backgroundColor: u ? o.colors.background : 'transparent',
          },
          n,
        ],
        forceInset: {
          top: 'never',
          bottom: 'never',
          right: 'always',
          left: 'always',
        },
      })
    );
  },
  _ = (function (t) {
    module35.default(v, t);

    var module11 = v,
      module52 = R(),
      p = function () {
        var t,
          n = module34.default(module11);

        if (module52) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function v() {
      module24.default(this, v);
      return p.apply(this, arguments);
    }

    module25.default(v, [
      {
        key: 'render',
        value: function () {
          return React.default.createElement(k, this.props);
        },
      },
    ]);
    return v;
  })(React.default.Component);

exports.Container = _;

exports.default = function (t) {
  var n = t.style,
    u = module52.default(t, C);
  return React.default.createElement(
    module1488.default,
    module11.default({}, u, {
      style: [
        module1627.default.container,
        n,
        {
          backgroundColor: 'transparent',
        },
      ],
    })
  );
};
