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
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(f, l, c);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  module957 = require('./957'),
  module976 = require('./976');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
  })(t);
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

var O = (function (t) {
  module35.default(O, t);

  var module957 = O,
    module976 = P(),
    h = function () {
      var t,
        n = module34.default(module957);

      if (module976) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    module24.default(this, O);
    return h.apply(this, arguments);
  }

  module25.default(O, null, [
    {
      key: 'show',
      value: function (t, u, f, l) {
        var c = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : {};
        return module32.default(module34.default(O), 'show', this).call(
          this,
          React.default.createElement(
            this.PopoverPickerView,
            module11.default(
              {
                fromBounds: t,
                items: u,
                selectedIndex: f,
                onSelected: l,
              },
              c
            )
          )
        );
      },
    },
  ]);
  return O;
})(module957.default);

exports.default = O;
O.PopoverPickerView = module976.default;
