require('react-native');

var module24 = require('./24'),
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
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (c && (c.get || c.set)) Object.defineProperty(f, o, c);
        else f[o] = t[o];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  module957 = require('./957'),
  module1024 = require('./1024');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
  })(t);
}

function v() {
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

var O = null,
  w = null,
  b = (function (t) {
    module35.default(b, t);

    var module957 = b,
      module1024 = v(),
      h = function () {
        var t,
          n = module34.default(module957);

        if (module1024) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function b() {
      module24.default(this, b);
      return h.apply(this, arguments);
    }

    module25.default(b, null, [
      {
        key: 'show',
        value: function (t) {
          if (w) w.text = t;
          else
            O = module32.default(module34.default(b), 'show', this).call(
              this,
              React.default.createElement(this.IndicatorView, {
                text: t,
                ref: function (t) {
                  w = t;
                  return w;
                },
              })
            );
        },
      },
      {
        key: 'hide',
        value: function () {
          if (O) {
            module32.default(module34.default(b), 'hide', this).call(this, O);
            O = null;
            w = null;
          }
        },
      },
    ]);
    return b;
  })(module957.default);

exports.default = b;
b.IndicatorView = module1024.default;
