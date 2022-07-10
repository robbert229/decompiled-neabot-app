require('react-native');

var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
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
  })(require('react')),
  module957 = require('./957'),
  module1017 = require('./1017');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
  })(t);
}

function O() {
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

var w = (function (t) {
  module35.default(w, t);

  var module957 = w,
    module1017 = O(),
    h = function () {
      var t,
        n = module34.default(module957);

      if (module1017) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    module24.default(this, w);
    return h.apply(this, arguments);
  }

  module25.default(w, null, [
    {
      key: 'show',
      value: function (t, u) {
        var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        return module32.default(module34.default(w), 'show', this).call(
          this,
          React.default.createElement(
            this.ActionPopoverView,
            module11.default(
              {
                fromBounds: t,
                items: u,
              },
              o
            )
          )
        );
      },
    },
  ]);
  return w;
})(module957.default);

exports.default = w;
w.ActionPopoverView = module1017.default;
