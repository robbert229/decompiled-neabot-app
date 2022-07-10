var n,
  l,
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
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
    var l = w(n);
    if (l && l.has(t)) return l.get(t);
    var c = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (f && (f.get || f.set)) Object.defineProperty(c, o, f);
        else c[o] = t[o];
      }

    c.default = t;
    if (l) l.set(t, c);
    return c;
  })(require('react')),
  ReactNative = require('react-native'),
  h = ['active', 'style'],
  S = ['enabled'],
  O = ['enabled', 'active'];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (w = function (t) {
    return t ? l : n;
  })(t);
}

function E() {
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

try {
  l = require('./548');
} catch (t) {}

var M = (function (t) {
    module35.default(O, t);

    var n = O,
      l = E(),
      S = function () {
        var t,
          c = module34.default(n);

        if (l) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(c, arguments, u);
        } else t = c.apply(this, arguments);

        return module37.default(this, t);
      };

    function O() {
      module24.default(this, O);
      return S.apply(this, arguments);
    }

    module25.default(O, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.active,
            l = t.style,
            o = module52.default(t, h);
          return <ReactNative.View />;
        },
      },
    ]);
    return O;
  })(React.Component),
  P = ReactNative.Animated.createAnimatedComponent(M),
  j = null == (n = l) ? undefined : n.shouldUseActivityState;

exports.shouldUseActivityState = j;

exports.MaybeScreenContainer = function (t) {
  var n,
    o = t.enabled,
    f = module52.default(t, S);
  return o && 'web' !== ReactNative.Platform.OS && null != (n = l) && n.screensEnabled() ? <l.ScreenContainer /> : <ReactNative.View />;
};

exports.MaybeScreen = function (t) {
  var n,
    o = t.enabled,
    f = t.active,
    s = module52.default(t, O);
  return o && 'web' === ReactNative.Platform.OS ? <P /> : o && null != (n = l) && n.screensEnabled() ? j ? <l.Screen /> : <l.Screen /> : <ReactNative.View />;
};
