Object.defineProperty(exports, 'PureNativeButton', {
  enumerable: true,
  get: function () {
    return module536.default;
  },
});

var module11 = require('./11'),
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
    var o = R(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module533 = require('./533'),
  module536 = require('./536'),
  module524 = require('./524'),
  S = ['rippleColor'],
  A = ['children', 'style'],
  b = ['children', 'style'];

function R(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (R = function (t) {
    return t ? o : n;
  })(t);
}

function O(t) {
  var n = B();
  return function () {
    var o,
      u = module34.default(t);

    if (n) {
      var l = module34.default(this).constructor;
      o = Reflect.construct(u, arguments, l);
    } else o = u.apply(this, arguments);

    return module37.default(this, o);
  };
}

function B() {
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

var E = module533.default(module536.default, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: false,
});
exports.RawButton = E;

var P = (function (t) {
  module35.default(p, t);
  var s = O(p);

  function p(t) {
    var n;
    module24.default(this, p);

    (n = s.call(this, t)).handleEvent = function (t) {
      var o = t.nativeEvent,
        u = o.state,
        l = o.oldState,
        c = o.pointerInside && u === module524.State.ACTIVE;
      if (c !== n.lastActive && n.props.onActiveStateChange) n.props.onActiveStateChange(c);
      if (l === module524.State.ACTIVE && u !== module524.State.CANCELLED && n.lastActive && n.props.onPress) n.props.onPress(c);
      n.lastActive = c;
    };

    n.onHandlerStateChange = function (t) {
      if (!(null == n.props.onHandlerStateChange)) n.props.onHandlerStateChange(t);
      n.handleEvent(t);
    };

    n.onGestureEvent = function (t) {
      if (!(null == n.props.onGestureEvent)) n.props.onGestureEvent(t);
      n.handleEvent(t);
    };

    n.lastActive = false;
    return n;
  }

  module25.default(p, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.rippleColor,
          l = module52.default(t, S);
        return <E />;
      },
    },
  ]);
  return p;
})(React.Component);

exports.BaseButton = P;

var w = ReactNative.Animated.createAnimatedComponent(P),
  j = ReactNative.StyleSheet.create({
    underlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
  }),
  k = (function (t) {
    module35.default(p, t);
    var s = O(p);

    function p(t) {
      var n;
      module24.default(this, p);

      (n = s.call(this, t)).onActiveStateChange = function (t) {
        if ('android' !== ReactNative.Platform.OS) n.opacity.setValue(t ? n.props.activeOpacity : 0);
        if (!(null == n.props.onActiveStateChange)) n.props.onActiveStateChange(t);
      };

      n.opacity = new ReactNative.Animated.Value(0);
      return n;
    }

    module25.default(p, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            u = t.children,
            l = t.style,
            c = module52.default(t, A),
            s = ReactNative.StyleSheet.flatten(null != l ? l : {});
          return (
            <P>
              {React.createElement(ReactNative.Animated.View, {
                style: [
                  j.underlay,
                  {
                    opacity: this.opacity,
                    backgroundColor: this.props.underlayColor,
                    borderRadius: s.borderRadius,
                    borderTopLeftRadius: s.borderTopLeftRadius,
                    borderTopRightRadius: s.borderTopRightRadius,
                    borderBottomLeftRadius: s.borderBottomLeftRadius,
                    borderBottomRightRadius: s.borderBottomRightRadius,
                  },
                ],
              })}
              {u}
            </P>
          );
        },
      },
    ]);
    return p;
  })(React.Component);

exports.RectButton = k;
k.defaultProps = {
  activeOpacity: 0.105,
  underlayColor: 'black',
};

var V = (function (t) {
  module35.default(p, t);
  var s = O(p);

  function p(t) {
    var n;
    module24.default(this, p);

    (n = s.call(this, t)).onActiveStateChange = function (t) {
      if ('android' !== ReactNative.Platform.OS) n.opacity.setValue(t ? n.props.activeOpacity : 1);
      if (!(null == n.props.onActiveStateChange)) n.props.onActiveStateChange(t);
    };

    n.opacity = new ReactNative.Animated.Value(1);
    return n;
  }

  module25.default(p, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.children,
          l = t.style,
          c = module52.default(t, b);
        return React.createElement(
          w,
          module11.default({}, c, {
            onActiveStateChange: this.onActiveStateChange,
            style: [
              l,
              'ios' === ReactNative.Platform.OS && {
                opacity: this.opacity,
              },
            ],
          }),
          u
        );
      },
    },
  ]);
  return p;
})(React.Component);

exports.BorderlessButton = V;
V.defaultProps = {
  activeOpacity: 0.3,
  borderless: true,
};
