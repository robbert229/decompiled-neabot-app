var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  p = ['active', 'enabled', 'onComponentRef'],
  h = ['enabled', 'active', 'activityState'],
  N = ['enabled'];

function b(t) {
  var n = k();
  return function () {
    var c,
      o = module34.default(t);

    if (n) {
      var u = module34.default(this).constructor;
      c = Reflect.construct(o, arguments, u);
    } else c = o.apply(this, arguments);

    return module37.default(this, c);
  };
}

function k() {
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

var y = false;
var C, w, R, H, E, A;

var V = {
    get NativeScreen() {
      C = C || ReactNative.requireNativeComponent('RNSScreen');
      return C;
    },

    get NativeScreenContainer() {
      w = w || ReactNative.requireNativeComponent('RNSScreenContainer');
      return w;
    },

    get NativeScreenStack() {
      R = R || ReactNative.requireNativeComponent('RNSScreenStack');
      return R;
    },

    get NativeScreenStackHeaderConfig() {
      H = H || ReactNative.requireNativeComponent('RNSScreenStackHeaderConfig');
      return H;
    },

    get NativeScreenStackHeaderSubview() {
      E = E || ReactNative.requireNativeComponent('RNSScreenStackHeaderSubview');
      return E;
    },
  },
  q = (function (t, ...args) {
    module35.default(v, t);
    var f = b(v);

    function v() {
      var t;
      module24.default(this, v);
      (t = f.call(this, ...args)).ref = null;

      t.setRef = function (n) {
        t.ref = n;
        if (!(null == t.props.onComponentRef)) t.props.onComponentRef(n);
      };

      return t;
    }

    module25.default(v, [
      {
        key: 'setNativeProps',
        value: function (t) {
          var n;
          if (!(null == (n = this.ref))) n.setNativeProps(t);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props.enabled;

          if (y && (undefined === t || t)) {
            A = A || ReactNative.Animated.createAnimatedComponent(V.NativeScreen);
            var o = this.props,
              u = o.active,
              l = o.activityState,
              f = module52.default(o, h);

            if (undefined !== u && undefined === l) {
              console.warn(
                'It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens'
              );
              l = 0 !== u ? 2 : 0;
            }

            return React.default.createElement(
              A,
              module11.default({}, f, {
                activityState: l,
                ref: this.setRef,
              })
            );
          }

          var v = this.props,
            N = module52.default(v, p);
          return React.default.createElement(
            ReactNative.Animated.View,
            module11.default({}, N, {
              ref: this.setRef,
            })
          );
        },
      },
    ]);
    return v;
  })(React.default.Component),
  I = (function (t) {
    module35.default(f, t);
    var n = b(f);

    function f() {
      module24.default(this, f);
      return n.apply(this, arguments);
    }

    module25.default(f, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.enabled,
            o = undefined === n || n,
            u = module52.default(t, N);
          return y && o ? React.default.createElement(V.NativeScreenContainer, this.props) : React.default.createElement(ReactNative.View, u);
        },
      },
    ]);
    return f;
  })(React.default.Component),
  P = ReactNative.StyleSheet.create({
    headerSubview: {
      position: 'absolute',
      top: 0,
      right: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

module.exports = {
  Screen: q,
  ScreenContainer: I,

  get NativeScreen() {
    return V.NativeScreen;
  },

  get NativeScreenContainer() {
    return V.NativeScreenContainer;
  },

  get ScreenStack() {
    return V.NativeScreenStack;
  },

  get ScreenStackHeaderConfig() {
    return V.NativeScreenStackHeaderConfig;
  },

  get ScreenStackHeaderSubview() {
    return V.NativeScreenStackHeaderSubview;
  },

  ScreenStackHeaderBackButtonImage: function (t) {
    return React.default.createElement(
      V.NativeScreenStackHeaderSubview,
      {
        type: 'back',
        style: P.headerSubview,
      },
      React.default.createElement(
        ReactNative.Image,
        module11.default(
          {
            resizeMode: 'center',
            fadeDuration: 0,
          },
          t
        )
      )
    );
  },
  ScreenStackHeaderRightView: function (t) {
    return React.default.createElement(
      V.NativeScreenStackHeaderSubview,
      module11.default({}, t, {
        type: 'right',
        style: P.headerSubview,
      })
    );
  },
  ScreenStackHeaderLeftView: function (t) {
    return React.default.createElement(
      V.NativeScreenStackHeaderSubview,
      module11.default({}, t, {
        type: 'left',
        style: P.headerSubview,
      })
    );
  },
  ScreenStackHeaderCenterView: function (t) {
    return React.default.createElement(
      V.NativeScreenStackHeaderSubview,
      module11.default({}, t, {
        type: 'center',
        style: P.headerSubview,
      })
    );
  },
  enableScreens: function () {
    var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
    if ((y = t) && !ReactNative.UIManager.getViewManagerConfig('RNSScreen'))
      console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
  },
  screensEnabled: function () {
    return y;
  },
  shouldUseActivityState: true,
};
