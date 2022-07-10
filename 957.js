require('react-native');

var module24 = require('./24'),
  module25 = require('./25'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = s(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, f, p);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module958 = require('./958'),
  module959 = require('./959'),
  module961 = require('./961'),
  module962 = require('./962'),
  module963 = require('./963');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (s = function (t) {
    return t ? u : n;
  })(t);
}

var y = (function () {
  function t() {
    module24.default(this, t);
  }

  module25.default(t, null, [
    {
      key: 'show',
      value: function (t) {
        var n,
          u = t.props.onDisappearCompleted,
          f = React.default.cloneElement(t, {
            onDisappearCompleted: function () {
              module958.default.remove(n);
              if (u) u();
            },
          });
        n = module958.default.add(f);
        return n;
      },
    },
    {
      key: 'hide',
      value: function (t) {
        module958.default.remove(t);
      },
    },
    {
      key: 'transformRoot',
      value: function (t, n) {
        var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
        module958.default.transform(t, n, u);
      },
    },
    {
      key: 'restoreRoot',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        module958.default.restore(t, n);
      },
    },
  ]);
  return t;
})();

exports.default = y;
y.View = module959.default;
y.PullView = module961.default;
y.PopView = module962.default;
y.PopoverView = module963.default;
