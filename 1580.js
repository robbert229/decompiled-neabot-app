var module11 = require('./11'),
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
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(s, c, u);
        else s[c] = t[c];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module415 = require('./415'),
  module1545 = require('./1545'),
  module1495 = require('./1495');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
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

var w = 220,
  B = module415.getStatusBarHeight(true),
  E = module415.getBottomSpace(),
  M = (function (t, ...args) {
    module35.default(b, t);

    var module11 = b,
      module415 = k(),
      y = function () {
        var t,
          o = module34.default(module11);

        if (module415) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, s);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function b() {
      var t;
      module24.default(this, b);
      (t = y.call(this, ...args)).state = {
        opacity: new ReactNative.Animated.Value(t.props.visible ? 1 : 0),
        rendered: t.props.visible,
      };

      t.handleBack = function () {
        if (t.props.dismissable) t.hideModal();
        return true;
      };

      t.showModal = function () {
        ReactNative.BackHandler.removeEventListener('hardwareBackPress', t.handleBack);
        ReactNative.BackHandler.addEventListener('hardwareBackPress', t.handleBack);
        var n = t.state.opacity,
          o = t.props.theme.animation.scale;
        ReactNative.Animated.timing(n, {
          toValue: 1,
          duration: o * w,
          easing: ReactNative.Easing.out(ReactNative.Easing.cubic),
          useNativeDriver: true,
        }).start();
      };

      t.hideModal = function () {
        ReactNative.BackHandler.removeEventListener('hardwareBackPress', t.handleBack);
        var n = t.state.opacity,
          o = t.props.theme.animation.scale;
        ReactNative.Animated.timing(n, {
          toValue: 0,
          duration: o * w,
          easing: ReactNative.Easing.out(ReactNative.Easing.cubic),
          useNativeDriver: true,
        }).start(function (n) {
          if (n.finished) {
            if (t.props.visible && t.props.onDismiss) t.props.onDismiss();
            if (t.props.visible) t.showModal();
            else
              t.setState({
                rendered: false,
              });
          }
        });
      };

      return t;
    }

    module25.default(
      b,
      [
        {
          key: 'componentDidUpdate',
          value: function (t) {
            if (t.visible !== this.props.visible) this.props.visible ? this.showModal() : this.hideModal();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            ReactNative.BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this.state,
              n = t.rendered,
              o = t.opacity;
            if (!n) return null;
            var s = this.props,
              l = s.children,
              c = s.dismissable,
              u = s.style,
              v = s.theme,
              y = s.contentContainerStyle,
              b = s.overlayAccessibilityLabel,
              k = v.colors;
            return React.createElement(
              ReactNative.Animated.View,
              {
                pointerEvents: this.props.visible ? 'auto' : 'none',
                accessibilityViewIsModal: true,
                accessibilityLiveRegion: 'polite',
                style: ReactNative.StyleSheet.absoluteFill,
                onAccessibilityEscape: this.hideModal,
              },
              React.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  accessibilityLabel: b,
                  accessibilityRole: 'button',
                  disabled: !c,
                  onPress: c ? this.hideModal : undefined,
                  importantForAccessibility: 'no',
                },
                React.createElement(ReactNative.Animated.View, {
                  style: [
                    O.backdrop,
                    {
                      backgroundColor: k.backdrop,
                      opacity: o,
                    },
                  ],
                })
              ),
              React.createElement(
                ReactNative.View,
                {
                  style: [
                    O.wrapper,
                    {
                      marginTop: B,
                      marginBottom: E,
                    },
                    u,
                  ],
                  pointerEvents: 'box-none',
                },
                React.createElement(
                  module1545.default,
                  {
                    style: [
                      {
                        opacity: o,
                      },
                      O.content,
                      y,
                    ],
                  },
                  l
                )
              )
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            return t.visible && !n.rendered
              ? {
                  rendered: true,
                }
              : null;
          },
        },
      ]
    );
    return b;
  })(React.Component);

M.defaultProps = {
  dismissable: true,
  visible: false,
  overlayAccessibilityLabel: 'Close modal',
};
var P = module1495.withTheme(M);
exports.default = P;
var O = ReactNative.StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  wrapper: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
    justifyContent: 'center',
  }),
  content: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
});
