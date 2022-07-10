var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module539 = E(require('./539')),
  React = E(require('react')),
  v = ['style'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (O = function (t) {
    return t ? u : n;
  })(t);
}

function E(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = O(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var f = l ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (f && (f.get || f.set)) Object.defineProperty(o, c, f);
      else o[c] = t[c];
    }

  o.default = t;
  if (u) u.set(t, o);
  return o;
}

function T() {
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

var S = (function (t, ...args) {
  module35.default(A, t);

  var O = A,
    E = T(),
    S = function () {
      var t,
        n = module34.default(O);

      if (E) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function A() {
    var t;
    module24.default(this, A);

    (t = S.call(this, ...args)).getChildStyleOpacityWithDefault = function () {
      var n = ReactNative.StyleSheet.flatten(t.props.style) || {};
      return null == n.opacity ? 1 : n.opacity;
    };

    t.opacity = new ReactNative.Animated.Value(t.getChildStyleOpacityWithDefault());

    t.setOpacityTo = function (n, u) {
      ReactNative.Animated.timing(t.opacity, {
        toValue: n,
        duration: u,
        easing: ReactNative.Easing.inOut(ReactNative.Easing.quad),
        useNativeDriver: true,
      }).start();
    };

    t.onStateChange = function (n, u) {
      if (u === module539.TOUCHABLE_STATE.BEGAN) t.setOpacityTo(t.props.activeOpacity, 0);
      else if (!(u !== module539.TOUCHABLE_STATE.UNDETERMINED && u !== module539.TOUCHABLE_STATE.MOVED_OUTSIDE)) t.setOpacityTo(t.getChildStyleOpacityWithDefault(), 150);
    };

    return t;
  }

  module25.default(A, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.style,
          l = undefined === o ? {} : o,
          c = module52.default(t, v);
        return <module539.default>{this.props.children ? this.props.children : <ReactNative.View />}</module539.default>;
      },
    },
  ]);
  return A;
})(React.Component);

exports.default = S;
S.defaultProps = module11.default({}, module539.default.defaultProps, {
  activeOpacity: 0.2,
});
