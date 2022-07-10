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
    var o = v(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var u = l ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (u && (u.get || u.set)) Object.defineProperty(s, p, u);
        else s[p] = t[p];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
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

var A = (function (t) {
    module35.default(R, t);

    var PropTypes = R,
      v = w(),
      A = function () {
        var t,
          n = module34.default(PropTypes);

        if (v) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function R(t) {
      var n;
      module24.default(this, R);

      (n = A.call(this, t)).ensureScrollEnabled = function () {
        if (!n.parentScrollEnabled) {
          n.parentScrollEnabled = true;
          if (n.props.setScrollEnabled) n.props.setScrollEnabled(true);
        }
      };

      n.combinedOnPress = function () {
        var t = n.props.children[1].props.onPress;
        n.onRowPress();
        if (t) t.apply(undefined, arguments);
      };

      n.isOpen = false;
      n.leftActionActivated = false;
      n.rightActionActivated = false;
      n.previousTrackedTranslateX = 0;
      n.currentTranslateX = 0;
      n.previousTrackedDirection = null;
      n.horizontalSwipeGestureBegan = false;
      n.swipeInitialX = null;
      n.parentScrollEnabled = true;
      n.ranPreview = false;
      n._ensureScrollEnabledTimer = null;
      n.isForceClosing = false;
      n.state = {
        leftActionActivated: false,
        rightActionActivated: false,
        leftActionState: n.props.initialLeftActionState || false,
        rightActionState: n.props.initialRightActionState || false,
        previewRepeatInterval: null,
        timeBetweenPreviewRepeats: null,
        dimensionsSet: false,
        hiddenHeight: n.props.disableHiddenLayoutCalculation ? '100%' : 0,
        hiddenWidth: n.props.disableHiddenLayoutCalculation ? '100%' : 0,
      };
      n._translateX = new ReactNative.Animated.Value(0);
      n._panResponder = ReactNative.PanResponder.create({
        onMoveShouldSetPanResponder: function (t, o) {
          return n.handleOnMoveShouldSetPanResponder(t, o);
        },
        onPanResponderMove: function (t, o) {
          return n.handlePanResponderMove(t, o);
        },
        onPanResponderRelease: function (t, o) {
          return n.handlePanResponderRelease(t, o);
        },
        onPanResponderTerminate: function (t, o) {
          return n.handlePanResponderEnd(t, o);
        },
        onShouldBlockNativeResponder: function () {
          return false;
        },
      });

      n._translateX.addListener(function (t) {
        var o = t.value;

        if (((n.currentTranslateX = o), n.props.onSwipeValueChange)) {
          var s = n.previousTrackedDirection;
          if (o !== n.previousTrackedTranslateX && Math.abs(o - n.previousTrackedTranslateX) > 0.5) s = o > n.previousTrackedTranslateX ? 'right' : 'left';
          if (n.props.onSwipeValueChange)
            n.props.onSwipeValueChange({
              isOpen: n.isOpen,
              direction: s,
              value: o,
              key: n.props.swipeKey,
            });
          n.previousTrackedTranslateX = o;
          n.previousTrackedDirection = s;
        }
      });

      if (n.props.forceCloseToRightThreshold && n.props.forceCloseToRightThreshold > 0)
        n._translateX.addListener(function (t) {
          var o = t.value;

          if (!n.isForceClosing && ReactNative.Dimensions.get('window').width + o < n.props.forceCloseToRightThreshold) {
            n.isForceClosing = true;
            n.forceCloseRow('right');
            if (n.props.onForceCloseToRight) n.props.onForceCloseToRight();
          }
        });
      if (n.props.forceCloseToLeftThreshold && n.props.forceCloseToRightThreshold > 0)
        n._translateX.addListener(function (t) {
          var o = t.value;

          if (!n.isForceClosing && ReactNative.Dimensions.get('window').width - o < n.props.forceCloseToLeftThreshold) {
            n.isForceClosing = true;
            n.forceCloseRow('left');
            if (n.props.onForceCloseToLeft) n.props.onForceCloseToLeft();
          }
        });
      if (n.props.onLeftActionStatusChange && n.props.leftActivationValue && n.props.leftActivationValue > 0)
        n._translateX.addListener(function (t) {
          var o = t.value,
            s = Math.abs(o) > n.props.leftActivationValue;

          if (n.leftActionActivated !== s && o > 0) {
            n.props.onLeftActionStatusChange({
              isActivated: s,
              value: o,
              key: n.props.swipeKey,
            });
            n.leftActionActivated = s;
            n.setState({
              leftActionActivated: s,
            });
          }
        });
      if (n.props.onRightActionStatusChange && n.props.rightActivationValue && n.props.rightActivationValue < 0)
        n._translateX.addListener(function (t) {
          var o = t.value,
            s = Math.abs(o) > Math.abs(n.props.rightActivationValue);

          if (n.rightActionActivated !== s && o < 0) {
            n.props.onRightActionStatusChange({
              isActivated: s,
              value: o,
              key: n.props.swipeKey,
            });
            n.rightActionActivated = s;
            n.setState({
              rightActionActivated: s,
            });
          }
        });
      return n;
    }

    module25.default(
      R,
      [
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this._ensureScrollEnabledTimer);

            this._translateX.removeAllListeners();
          },
        },
        {
          key: 'shouldComponentUpdate',
          value: function (t, n) {
            return !!(
              this.state.hiddenHeight !== n.hiddenHeight ||
              this.state.hiddenWidth !== n.hiddenWidth ||
              this.state.leftActionActivated !== n.leftActionActivated ||
              this.state.rightActionActivated !== n.rightActionActivated ||
              this.state.leftActionState !== n.leftActionState ||
              this.state.rightActionState !== n.rightActionState ||
              !this.props.shouldItemUpdate ||
              (this.props.shouldItemUpdate && this.props.shouldItemUpdate(this.props.item, t.item))
            );
          },
        },
        {
          key: 'getPreviewAnimation',
          value: function (t, n) {
            return ReactNative.Animated.timing(this._translateX, {
              duration: this.props.previewDuration,
              toValue: t,
              delay: n,
              useNativeDriver: this.props.useNativeDriver,
            });
          },
        },
        {
          key: 'onContentLayout',
          value: function (t) {
            var o = this;
            this.setState(
              module11.default(
                {
                  dimensionsSet: !this.props.recalculateHiddenLayout,
                },
                this.props.disableHiddenLayoutCalculation
                  ? {}
                  : {
                      hiddenHeight: t.nativeEvent.layout.height,
                      hiddenWidth: t.nativeEvent.layout.width,
                    }
              )
            );

            if (this.props.preview && !this.ranPreview) {
              this.ranPreview = true;
              this.doFullAnimation();
              if (this.props.previewRepeat)
                this.setState({
                  previewRepeatInterval: setInterval(function () {
                    o.doFullAnimation();
                  }, this.state.timeBetweenPreviewRepeats),
                });
            }
          },
        },
        {
          key: 'doFullAnimation',
          value: function () {
            var t = this,
              n = this.props.previewOpenValue || 0.5 * this.props.rightOpenValue;
            return this.getPreviewAnimation(n, this.props.previewOpenDelay).start(function () {
              t.getPreviewAnimation(0, 300).start(function () {
                if (t.props.onPreviewEnd) t.props.onPreviewEnd();
              });
            });
          },
        },
        {
          key: 'onRowPress',
          value: function () {
            if (this.props.onRowPress) this.props.onRowPress();
            else if (this.props.closeOnRowPress) this.closeRow();
          },
        },
        {
          key: 'handleOnMoveShouldSetPanResponder',
          value: function (t, n) {
            var o = n.dx;
            return Math.abs(o) > this.props.directionalDistanceChangeThreshold;
          },
        },
        {
          key: 'handlePanResponderMove',
          value: function (t, n) {
            if (!this.isForceClosing) {
              var o = n.dx,
                s = n.dy,
                l = Math.abs(o),
                p = Math.abs(s);

              if (l > this.props.directionalDistanceChangeThreshold || p > this.props.directionalDistanceChangeThreshold) {
                if (p > l && !this.horizontalSwipeGestureBegan) return;

                if (this.parentScrollEnabled) {
                  this.parentScrollEnabled = false;
                  if (this.props.setScrollEnabled) this.props.setScrollEnabled(false);
                }

                if (null === this.swipeInitialX) this.swipeInitialX = this.currentTranslateX;

                if (!this.horizontalSwipeGestureBegan) {
                  this.horizontalSwipeGestureBegan = true;
                  if (this.props.swipeGestureBegan) this.props.swipeGestureBegan();
                }

                var u = this.swipeInitialX + o;
                if (this.props.disableLeftSwipe && u < 0) u = 0;
                if (this.props.disableRightSwipe && u > 0) u = 0;
                if (this.props.stopLeftSwipe && u > this.props.stopLeftSwipe) u = this.props.stopLeftSwipe;
                if (this.props.stopRightSwipe && u < this.props.stopRightSwipe) u = this.props.stopRightSwipe;

                this._translateX.setValue(u);
              }
            }
          },
        },
        {
          key: 'handlePanResponderRelease',
          value: function (t, n) {
            if (this.props.swipeGestureEnded)
              this.props.swipeGestureEnded(this.props.swipeKey, {
                translateX: this.currentTranslateX,
                direction: this.previousTrackedDirection,
                event: t,
                gestureState: n,
              });
            if (!t.defaultPrevented) this.handlePanResponderEnd(t, n);
          },
        },
        {
          key: 'handlePanResponderEnd',
          value: function (t, n) {
            var o = this;
            if (this.isForceClosing)
              setTimeout(function () {
                o.isForceClosing = false;
              }, 500);
            var s = this.props.swipeToOpenVelocityContribution,
              l = this.props.rightOpenValue * s * (n.vx ** 5 / 5);
            if (((this._ensureScrollEnabledTimer = setTimeout(this.ensureScrollEnabled, 300)), this.currentTranslateX >= 0)) this.handleRightSwipe(l);
            else {
              if (this.props.disableLeftSwipe) return;
              this.handleLeftSwipe(l);
            }
          },
        },
        {
          key: 'handleRightSwipe',
          value: function (t) {
            var n,
              o = 0,
              s = this.props.leftActionValue || 0;

            if (this.swipeInitialX < this.currentTranslateX) {
              if (this.currentTranslateX - t > this.props.leftOpenValue * (this.props.swipeToOpenPercent / 100)) o = this.isForceClosing ? 0 : this.props.leftOpenValue;

              if (this.currentTranslateX - t > this.props.leftActivationValue) {
                o = this.isForceClosing ? 0 : s;
                n = 'left';
              }
            } else {
              if (this.currentTranslateX - t > this.props.leftOpenValue * (1 - this.props.swipeToClosePercent / 100)) o = this.isForceClosing ? 0 : this.props.leftOpenValue;

              if (this.currentTranslateX - t > this.props.leftActivationValue) {
                o = this.isForceClosing ? 0 : s;
                n = 'left';
              }
            }

            var l = this.determineAction(n);
            this.manuallySwipeRow(o, l);
          },
        },
        {
          key: 'handleLeftSwipe',
          value: function (t) {
            var n,
              o = 0,
              s = this.props.rightActionValue || 0;

            if (this.swipeInitialX > this.currentTranslateX) {
              if (this.currentTranslateX - t < this.props.rightOpenValue * (this.props.swipeToOpenPercent / 100)) o = this.isForceClosing ? 0 : this.props.rightOpenValue;

              if (this.currentTranslateX - t < this.props.rightActivationValue) {
                o = this.isForceClosing ? 0 : s;
                n = 'right';
              }
            } else {
              if (this.currentTranslateX - t < this.props.rightOpenValue) o = this.isForceClosing ? 0 : this.props.rightOpenValue;

              if (this.currentTranslateX - t < this.props.rightActivationValue * (1 - this.props.swipeToClosePercent / 100)) {
                o = this.isForceClosing ? 0 : s;
                n = 'right';
              }
            }

            var l = this.determineAction(n);
            this.manuallySwipeRow(o, l);
          },
        },
        {
          key: 'determineAction',
          value: function (t) {
            var n = this;
            return 'right' === t
              ? function () {
                  if (n.props.onRightAction) n.props.onRightAction();
                  n.setState({
                    rightActionState: !n.state.rightActionState,
                  });
                }
              : 'left' === t
              ? function () {
                  if (n.props.onLeftAction) n.props.onLeftAction();
                  n.setState({
                    leftActionState: !n.state.leftActionState,
                  });
                }
              : undefined;
          },
        },
        {
          key: 'closeRow',
          value: function () {
            this.manuallySwipeRow(0);
          },
        },
        {
          key: 'forceCloseRow',
          value: function (t) {
            var n = this;
            this.manuallySwipeRow(0, function () {
              if ('right' === t && n.props.onForceCloseToRightEnd) n.props.onForceCloseToRightEnd();
              else if ('left' === t && n.props.onForceCloseToLeftEnd) n.props.onForceCloseToLeftEnd();
            });
          },
        },
        {
          key: 'closeRowWithoutAnimation',
          value: function () {
            this._translateX.setValue(0);

            this.ensureScrollEnabled();
            this.isOpen = false;
            if (this.props.onRowDidClose) this.props.onRowDidClose();
            if (this.props.onRowClose) this.props.onRowClose();
            this.swipeInitialX = null;
            this.horizontalSwipeGestureBegan = false;
          },
        },
        {
          key: 'manuallySwipeRow',
          value: function (t, n) {
            var o = this;
            ReactNative.Animated.spring(this._translateX, {
              toValue: t,
              friction: this.props.friction,
              tension: this.props.tension,
              restSpeedThreshold: this.props.restSpeedThreshold,
              restDisplacementThreshold: this.props.restDisplacementThreshold,
              useNativeDriver: this.props.useNativeDriver,
            }).start(function () {
              o.ensureScrollEnabled();

              if (0 === t) {
                o.isOpen = false;
                if (o.props.onRowDidClose) o.props.onRowDidClose();
              } else {
                o.isOpen = true;
                if (o.props.onRowDidOpen) o.props.onRowDidOpen(t);
              }

              if (n) n();
            });
            if (0 === t) {
              if (this.props.onRowClose) this.props.onRowClose();
            } else if (this.props.onRowOpen) this.props.onRowOpen(t);
            this.swipeInitialX = null;
            this.horizontalSwipeGestureBegan = false;
          },
        },
        {
          key: 'renderVisibleContent',
          value: function () {
            return this.props.closeOnRowPress
              ? this.props.children[1].props.onPress
                ? React.default.cloneElement(
                    this.props.children[1],
                    module11.default({}, this.props.children[1].props, {
                      onPress: this.combinedOnPress,
                      leftActionActivated: this.state.leftActionActivated,
                      rightActionActivated: this.state.rightActionActivated,
                      leftActionState: this.state.leftActionState,
                      rightActionState: this.state.rightActionState,
                      swipeAnimatedValue: this._translateX,
                    })
                  )
                : React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      activeOpacity: 1,
                      onPress: this.combinedOnPress,
                      accessible: false,
                    },
                    React.default.cloneElement(
                      this.props.children[1],
                      module11.default({}, this.props.children[1].props, {
                        leftActionActivated: this.state.leftActionActivated,
                        rightActionActivated: this.state.rightActionActivated,
                        leftActionState: this.state.leftActionState,
                        rightActionState: this.state.rightActionState,
                        swipeAnimatedValue: this._translateX,
                      })
                    )
                  )
              : React.default.cloneElement(
                  this.props.children[1],
                  module11.default({}, this.props.children[1].props, {
                    leftActionActivated: this.state.leftActionActivated,
                    rightActionActivated: this.state.rightActionActivated,
                    leftActionState: this.state.leftActionState,
                    rightActionState: this.state.rightActionState,
                    swipeAnimatedValue: this._translateX,
                  })
                );
          },
        },
        {
          key: 'renderRowContent',
          value: function () {
            var t = this;
            return this.state.dimensionsSet
              ? React.default.createElement(
                  ReactNative.Animated.View,
                  module11.default(
                    {
                      manipulationModes: ['translateX'],
                    },
                    this._panResponder.panHandlers,
                    {
                      style: {
                        zIndex: 2,
                        transform: [
                          {
                            translateX: this._translateX,
                          },
                        ],
                      },
                    }
                  ),
                  this.renderVisibleContent()
                )
              : React.default.createElement(
                  ReactNative.Animated.View,
                  module11.default(
                    {
                      manipulationModes: ['translateX'],
                    },
                    this._panResponder.panHandlers,
                    {
                      onLayout: function (n) {
                        return t.onContentLayout(n);
                      },
                      style: {
                        zIndex: 2,
                        transform: [
                          {
                            translateX: this._translateX,
                          },
                        ],
                      },
                    }
                  ),
                  this.renderVisibleContent()
                );
          },
        },
        {
          key: 'render',
          value: function () {
            return React.default.createElement(
              ReactNative.View,
              {
                style: this.props.style ? this.props.style : S.container,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    S.hidden,
                    {
                      height: this.state.hiddenHeight,
                      width: this.state.hiddenWidth,
                    },
                  ],
                },
                React.default.cloneElement(
                  this.props.children[0],
                  module11.default({}, this.props.children[0].props, {
                    leftActionActivated: this.state.leftActionActivated,
                    rightActionActivated: this.state.rightActionActivated,
                    leftActionState: this.state.leftActionState,
                    rightActionState: this.state.rightActionState,
                    swipeAnimatedValue: this._translateX,
                  })
                )
              ),
              this.renderRowContent()
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            if (!t.previewRepeat) {
              clearInterval(n.previewRepeatInterval);
              n.previewRepeatInterval = null;
            }

            n.timeBetweenPreviewRepeats = 2 * t.previewDuration + t.previewOpenDelay + 300 + t.previewRepeatDelay;
            return n;
          },
        },
      ]
    );
    return R;
  })(React.Component),
  S = ReactNative.StyleSheet.create({
    container: {},
    hidden: {
      zIndex: 1,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0,
    },
  });

A.propTypes = {
  setScrollEnabled: PropTypes.default.func,
  swipeGestureBegan: PropTypes.default.func,
  swipeGestureEnded: PropTypes.default.func,
  onRowOpen: PropTypes.default.func,
  onRowDidOpen: PropTypes.default.func,
  leftOpenValue: PropTypes.default.number,
  rightOpenValue: PropTypes.default.number,
  leftActivationValue: PropTypes.default.number,
  rightActivationValue: PropTypes.default.number,
  leftActionValue: PropTypes.default.number,
  rightActionValue: PropTypes.default.number,
  initialLeftActionState: PropTypes.default.bool,
  initialRightActionState: PropTypes.default.bool,
  stopLeftSwipe: PropTypes.default.number,
  stopRightSwipe: PropTypes.default.number,
  friction: PropTypes.default.number,
  tension: PropTypes.default.number,
  restSpeedThreshold: PropTypes.default.number,
  restDisplacementThreshold: PropTypes.default.number,
  closeOnRowPress: PropTypes.default.bool,
  disableLeftSwipe: PropTypes.default.bool,
  disableRightSwipe: PropTypes.default.bool,
  recalculateHiddenLayout: PropTypes.default.bool,
  disableHiddenLayoutCalculation: PropTypes.default.bool,
  onRowClose: PropTypes.default.func,
  onRowDidClose: PropTypes.default.func,
  onLeftAction: PropTypes.default.func,
  onRightAction: PropTypes.default.func,
  onLeftActionStatusChange: PropTypes.default.func,
  onRightActionStatusChange: PropTypes.default.func,
  style: PropTypes.default.object,
  preview: PropTypes.default.bool,
  previewDuration: PropTypes.default.number,
  previewRepeat: PropTypes.default.bool,
  previewRepeatDelay: PropTypes.default.number,
  previewOpenValue: PropTypes.default.number,
  directionalDistanceChangeThreshold: PropTypes.default.number,
  swipeToOpenPercent: PropTypes.default.number,
  swipeToOpenVelocityContribution: PropTypes.default.number,
  swipeToClosePercent: PropTypes.default.number,
  shouldItemUpdate: PropTypes.default.func,
  onSwipeValueChange: PropTypes.default.func,
  forceCloseToLeftThreshold: PropTypes.default.number,
  forceCloseToRightThreshold: PropTypes.default.number,
  onForceCloseToLeft: PropTypes.default.func,
  onForceCloseToRight: PropTypes.default.func,
  onForceCloseToLeftEnd: PropTypes.default.func,
  onForceCloseToRightEnd: PropTypes.default.func,
  useNativeDriver: PropTypes.default.bool,
  children: PropTypes.default.node.isRequired,
  swipeKey: PropTypes.default.string,
  onPreviewEnd: PropTypes.default.func,
};
A.defaultProps = {
  leftOpenValue: 0,
  rightOpenValue: 0,
  closeOnRowPress: true,
  disableLeftSwipe: false,
  disableRightSwipe: false,
  recalculateHiddenLayout: false,
  disableHiddenLayoutCalculation: false,
  preview: false,
  previewDuration: 300,
  previewOpenDelay: 700,
  directionalDistanceChangeThreshold: 2,
  swipeToOpenPercent: 50,
  swipeToOpenVelocityContribution: 0,
  swipeToClosePercent: 50,
  item: {},
  useNativeDriver: true,
  previewRepeat: false,
  previewRepeatDelay: 1e3,
};
var R = A;
exports.default = R;
