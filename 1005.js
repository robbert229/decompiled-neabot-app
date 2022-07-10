require('react-native');

var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
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
    var o = w(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module957 = require('./957'),
  module1006 = require('./1006'),
  y = ['duration'];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
    return t ? o : n;
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

var D = (function (t) {
  module35.default(D, t);

  var module957 = D,
    module1006 = P(),
    w = function () {
      var t,
        n = module34.default(module957);

      if (module1006) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function D() {
    module24.default(this, D);
    return w.apply(this, arguments);
  }

  module25.default(D, null, [
    {
      key: 'show',
      value: function (t) {
        var o = this,
          u = t && 'object' == typeof t ? t : {},
          l = u.duration,
          f = module52.default(u, y),
          v = module32.default(module34.default(D), 'show', this).call(this, React.default.createElement(this.ToastView, f));
        if ('number' != typeof l)
          switch (l) {
            case 'long':
              l = 3500;
              break;

            default:
              l = 2e3;
          }
        setTimeout(function () {
          return o.hide(v);
        }, l);
        return v;
      },
    },
    {
      key: 'message',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.messageDefaultDuration,
          o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : this.messageDefaultPosition;
        return this.show({
          text: t,
          duration: n,
          position: o,
        });
      },
    },
    {
      key: 'success',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.defaultDuration,
          o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : this.defaultPosition;
        return this.show({
          text: t,
          duration: n,
          position: o,
          icon: 'success',
        });
      },
    },
    {
      key: 'fail',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.defaultDuration,
          o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : this.defaultPosition;
        return this.show({
          text: t,
          duration: n,
          position: o,
          icon: 'fail',
        });
      },
    },
    {
      key: 'smile',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.defaultDuration,
          o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : this.defaultPosition;
        return this.show({
          text: t,
          duration: n,
          position: o,
          icon: 'smile',
        });
      },
    },
    {
      key: 'sad',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.defaultDuration,
          o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : this.defaultPosition;
        return this.show({
          text: t,
          duration: n,
          position: o,
          icon: 'sad',
        });
      },
    },
    {
      key: 'info',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.defaultDuration,
          o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : this.defaultPosition;
        return this.show({
          text: t,
          duration: n,
          position: o,
          icon: 'info',
        });
      },
    },
    {
      key: 'stop',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.defaultDuration,
          o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : this.defaultPosition;
        return this.show({
          text: t,
          duration: n,
          position: o,
          icon: 'stop',
        });
      },
    },
  ]);
  return D;
})(module957.default);

exports.default = D;
D.ToastView = module1006.default;
D.defaultDuration = 'short';
D.defaultPosition = 'center';
D.messageDefaultDuration = 'short';
D.messageDefaultPosition = 'bottom';
