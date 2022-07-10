var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  module403 = require('./403'),
  f = ReactNative.StyleSheet.create({
    wrap: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    mask: {
      backgroundColor: 'black',
      opacity: 0.5,
    },
    content: {
      backgroundColor: 'white',
    },
    absolute: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  }),
  v = ReactNative.Dimensions.get('window'),
  k = (function (t) {
    module35.default(h, t);
    var k = module401.default(h);

    function h(t) {
      var o;
      module24.default(this, h);

      (o = k.call(this, t)).onBackAndroid = function () {
        var t = o.props.onRequestClose;
        return 'function' == typeof t && t();
      };

      o.animateMask = function (t) {
        o.stopMaskAnim();
        o.state.opacity.setValue(o.getOpacity(!t));
        o.animMask = ReactNative.Animated.timing(o.state.opacity, {
          toValue: o.getOpacity(t),
          duration: o.props.animationDuration,
          useNativeDriver: true,
        });
        o.animMask.start(function () {
          o.animMask = null;
        });
      };

      o.stopMaskAnim = function () {
        if (o.animMask) {
          o.animMask.stop();
          o.animMask = null;
        }
      };

      o.stopDialogAnim = function () {
        if (o.animDialog) {
          o.animDialog.stop();
          o.animDialog = null;
        }
      };

      o.animateDialog = function (t) {
        o.stopDialogAnim();
        o.animateMask(t);
        var n = o.props,
          s = n.animationType,
          l = n.animationDuration;
        l = l;

        if ('none' !== s) {
          if ('slide-up' === s || 'slide-down' === s) {
            o.state.position.setValue(o.getPosition(!t));
            o.animDialog = ReactNative.Animated.timing(o.state.position, {
              toValue: o.getPosition(t),
              duration: l,
              easing: t ? ReactNative.Easing.elastic(0.8) : undefined,
              useNativeDriver: true,
            });
          } else if ('fade' === s)
            o.animDialog = ReactNative.Animated.parallel([
              ReactNative.Animated.timing(o.state.opacity, {
                toValue: o.getOpacity(t),
                duration: l,
                easing: t ? ReactNative.Easing.elastic(0.8) : undefined,
                useNativeDriver: true,
              }),
              ReactNative.Animated.spring(o.state.scale, {
                toValue: o.getScale(t),
                useNativeDriver: true,
              }),
            ]);

          o.animDialog.start(function () {
            o.animDialog = null;

            if (!t) {
              o.setState({
                modalVisible: false,
              });
              ReactNative.BackHandler.removeEventListener('hardwareBackPress', o.onBackAndroid);
            }

            if (o.props.onAnimationEnd) o.props.onAnimationEnd(t);
          });
        } else if (!t) {
          o.setState({
            modalVisible: false,
          });
          ReactNative.BackHandler.removeEventListener('hardwareBackPress', o.onBackAndroid);
        }
      };

      o.close = function () {
        o.animateDialog(false);
      };

      o.onMaskClose = function () {
        if (o.props.maskClosable && o.props.onClose) {
          o.props.onClose();
          ReactNative.BackHandler.removeEventListener('hardwareBackPress', o.onBackAndroid);
        }
      };

      o.getPosition = function (t) {
        return t ? 0 : 'slide-down' === o.props.animationType ? -v.height : v.height;
      };

      o.getScale = function (t) {
        return t ? 1 : 1.05;
      };

      o.getOpacity = function (t) {
        return t ? 1 : 0;
      };

      var s = t.visible;
      o.state = {
        position: new ReactNative.Animated.Value(o.getPosition(s)),
        scale: new ReactNative.Animated.Value(o.getScale(s)),
        opacity: new ReactNative.Animated.Value(o.getOpacity(s)),
        modalVisible: s,
      };
      return o;
    }

    module25.default(h, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          if (this.shouldComponentUpdate(t, null))
            this.setState({
              modalVisible: true,
            });
        },
      },
      {
        key: 'shouldComponentUpdate',
        value: function (t, n) {
          return !(!this.props.visible && this.props.visible === t.visible) || !(!n || n.modalVisible === this.state.modalVisible);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.animateAppear && 'none' !== this.props.animationType) {
            ReactNative.BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
            this.componentDidUpdate({});
          }
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this.props;
          if (t.visible !== n.visible) this.animateDialog(n.visible);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          ReactNative.BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
          this.stopDialogAnim();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props;
          if (!this.state.modalVisible) return null;
          var n = {
            none: {},
            'slide-up': {
              transform: [
                {
                  translateY: this.state.position,
                },
              ],
            },
            'slide-down': {
              transform: [
                {
                  translateY: this.state.position,
                },
              ],
            },
            fade: {
              transform: [
                {
                  scale: this.state.scale,
                },
              ],
              opacity: this.state.opacity,
            },
          };
          return React.default.createElement(
            module403.default,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: [f.wrap, t.wrapStyle],
              },
              React.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  onPress: this.onMaskClose,
                },
                React.default.createElement(
                  ReactNative.Animated.View,
                  {
                    style: [
                      f.absolute,
                      {
                        opacity: this.state.opacity,
                      },
                    ],
                  },
                  React.default.createElement(ReactNative.View, {
                    style: [f.absolute, t.maskStyle],
                  })
                )
              ),
              React.default.createElement(
                ReactNative.Animated.View,
                {
                  style: [f.content, t.style, n[t.animationType]],
                },
                this.props.children
              )
            )
          );
        },
      },
    ]);
    return h;
  })(React.default.Component);

exports.default = k;
k.defaultProps = {
  wrapStyle: f.wrap,
  maskStyle: f.mask,
  animationType: 'slide-up',
  animateAppear: false,
  animationDuration: 300,
  visible: false,
  maskClosable: true,
  onClose: function () {},
  onAnimationEnd: function (t) {},
};
