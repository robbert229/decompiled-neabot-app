var module38 = require('./38');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  module405 = require('./405'),
  module406 = (function (t, u) {
    if (!u && t && t.__esModule) return t;
    if (null === t || ('object' !== module38(t) && 'function' != typeof t))
      return {
        default: t,
      };
    var o = v(u);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
        else f[c] = t[c];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('./406'));

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

var y = (function (t) {
  module35.default(v, t);
  var n = module401.default(v);

  function v() {
    module24.default(this, v);
    return n.apply(this, arguments);
  }

  module25.default(v, [
    {
      key: 'render',
      value: function () {
        var t = this.props.children;
        return React.default.createElement(module406.PortalContext.Consumer, null, function (n) {
          return React.default.createElement(
            module405.default,
            {
              manager: n,
            },
            t
          );
        });
      },
    },
  ]);
  return v;
})(React.default.Component);

y.Host = module406.default;
y.add = module406.portal.add;
y.remove = module406.portal.remove;
var O = y;
exports.default = O;
