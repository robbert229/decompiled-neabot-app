var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, s) {
    if (!s && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = O(s);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
        else o[c] = t[c];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module254 = require('./254'),
  module80 = require('./80'),
  P = ['onBlur', 'onFocus'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var s = new WeakMap(),
    n = new WeakMap();
  return (O = function (t) {
    return t ? n : s;
  })(t);
}

function w() {
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

if (0 === ReactNative.Platform.constants.reactNativeVersion.major && ReactNative.Platform.constants.reactNativeVersion.minor < 62)
  console.error('this teaset edition need react native 0.62.0 or above, please use teaset@0.7.1 in earlier version of react native');

var F = (function (t) {
  module35.default(R, t);

  var PropTypes = R,
    O = w(),
    module970 = function () {
      var t,
        s = module34.default(PropTypes);

      if (O) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(s, arguments, n);
      } else t = s.apply(this, arguments);

      return module37.default(this, t);
    };

  function R(t) {
    var s;
    module24.default(this, R);
    (s = module970.call(this, t)).state = {
      anim: new ReactNative.Animated.Value(s._getChildStyleOpacityWithDefault()),
      pressability: null,
    };
    return s;
  }

  module25.default(R, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;

        require('./970')(d[13], 'react-native/Libraries/Pressability/Pressability.js')
          .then(function (s) {
            return t.initPressability(s.default);
          })
          .catch(function (t) {
            return console.error(t);
          });
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t, s) {
        if (this.props.disabled !== t.disabled) this._opacityInactive(250);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.state.pressability) this.state.pressability.reset();
      },
    },
    {
      key: 'initPressability',
      value: function (t) {
        var s = this,
          n = new t({
            getHitSlop: function () {
              return s.props.hitSlop;
            },
            getLongPressDelayMS: function () {
              if (null != s.props.delayLongPress) {
                var t = s.props.delayLongPress;
                if ('number' == typeof t) return t;
              }

              return 500;
            },
            getPressDelayMS: function () {
              return s.props.delayPressIn;
            },
            getPressOutDelayMS: function () {
              return s.props.delayPressOut;
            },
            getPressRectOffset: function () {
              return s.props.pressRetentionOffset;
            },
            onBlur: function (t) {
              if (null != s.props.onBlur) s.props.onBlur(t);
            },
            onFocus: function (t) {
              if (null != s.props.onFocus) s.props.onFocus(t);
            },
            onLongPress: function (t) {
              return s.touchableHandleLongPress(t);
            },
            onPress: function (t) {
              return s.touchableHandlePress(t);
            },
            onPressIn: function (t) {
              s._opacityActive('onResponderGrant' === t.dispatchConfig.registrationName ? 0 : 150);

              if (null != s.props.onPressIn) s.props.onPressIn(t);
            },
            onPressOut: function (t) {
              return s.touchableHandleActivePressOut(t);
            },
            onPressMove: function (t) {
              return s.touchableHandleResponderMove(t);
            },
            onResponderTerminationRequest: function () {
              return !s.props.rejectResponderTermination;
            },
            onStartShouldSetResponder: function () {
              return !s.props.disabled;
            },
          });
        this.setState({
          pressability: n,
        });
      },
    },
    {
      key: 'measureInWindow',
      value: function (t) {
        if (this.refs.animatedView) this.refs.animatedView.measureInWindow(t);
      },
    },
    {
      key: 'measure',
      value: function (t) {
        if (this.refs.animatedView) this.refs.animatedView.measure(t);
      },
    },
    {
      key: 'touchableHandleResponderMove',
      value: function (t) {},
    },
    {
      key: 'touchableHandleActivePressOut',
      value: function (t) {
        this._opacityInactive(250);

        if (null != this.props.onPressOut) this.props.onPressOut(t);
      },
    },
    {
      key: 'touchableHandlePress',
      value: function (t) {
        if (null != this.props.onPress) this.props.onPress(t);
      },
    },
    {
      key: 'touchableHandleLongPress',
      value: function (t) {
        if (null != this.props.onLongPress) this.props.onLongPress(t);
      },
    },
    {
      key: '_setOpacityTo',
      value: function (t, s) {
        ReactNative.Animated.timing(this.state.anim, {
          toValue: t,
          duration: s,
          easing: module254.default.inOut(module254.default.quad),
          useNativeDriver: true,
        }).start();
      },
    },
    {
      key: '_opacityActive',
      value: function (t) {
        var s;

        this._setOpacityTo(null != (s = this.props.activeOpacity) ? s : 0.2, t);
      },
    },
    {
      key: '_opacityInactive',
      value: function (t) {
        this._setOpacityTo(this._getChildStyleOpacityWithDefault(), t);
      },
    },
    {
      key: '_getChildStyleOpacityWithDefault',
      value: function () {
        var t,
          s = null == (t = module80.default(this.props.style)) ? undefined : t.opacity;
        return 'number' == typeof s ? s : 1;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.state.pressability ? this.state.pressability.getEventHandlers() : {},
          o = module52.default(t, P);
        return React.default.createElement(
          ReactNative.Animated.View,
          module11.default(
            {
              accessible: false !== this.props.accessible,
              accessibilityLabel: this.props.accessibilityLabel,
              accessibilityHint: this.props.accessibilityHint,
              accessibilityRole: this.props.accessibilityRole,
              accessibilityState: this.props.accessibilityState,
              accessibilityActions: this.props.accessibilityActions,
              onAccessibilityAction: this.props.onAccessibilityAction,
              accessibilityValue: this.props.accessibilityValue,
              importantForAccessibility: this.props.importantForAccessibility,
              accessibilityLiveRegion: this.props.accessibilityLiveRegion,
              accessibilityViewIsModal: this.props.accessibilityViewIsModal,
              accessibilityElementsHidden: this.props.accessibilityElementsHidden,
              style: [
                this.props.style,
                {
                  opacity: this.state.anim,
                },
              ],
              nativeID: this.props.nativeID,
              testID: this.props.testID,
              onLayout: this.props.onLayout,
              nextFocusDown: this.props.nextFocusDown,
              nextFocusForward: this.props.nextFocusForward,
              nextFocusLeft: this.props.nextFocusLeft,
              nextFocusRight: this.props.nextFocusRight,
              nextFocusUp: this.props.nextFocusUp,
              hasTVPreferredFocus: this.props.hasTVPreferredFocus,
              hitSlop: this.props.hitSlop,
              focusable: false !== this.props.focusable && undefined !== this.props.onPress,
              ref: 'animatedView',
            },
            o
          ),
          this.props.children
        );
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = F;
F.propTypes = module11.default({}, ReactNative.TouchableWithoutFeedback.propTypes, {
  activeOpacity: PropTypes.default.number,
  style: ReactNative.ViewPropTypes.style,
});
F.defaultProps = {
  activeOpacity: 0.2,
};
