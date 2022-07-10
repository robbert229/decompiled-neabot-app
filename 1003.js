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
    var s = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var h = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (h && (h.get || h.set)) Object.defineProperty(s, l, h);
        else s[l] = t[l];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module1004 = require('./1004'),
  k = ['style', 'children', 'items', 'itemStyle', 'holeStyle', 'maskStyle', 'holeLine', 'index', 'defaultIndex', 'onChange', 'onLayout'];

function R(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (R = function (t) {
    return t ? o : n;
  })(t);
}

function x() {
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

var S = (function (t) {
  module35.default(S, t);

  var PropTypes = S,
    module1004 = x(),
    R = function () {
      var t,
        n = module34.default(PropTypes);

      if (module1004) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function S(t) {
    var n;
    module24.default(this, S);
    (n = R.call(this, t)).createPanResponder();
    n.prevTouches = [];
    n.index = t.index || 0 === t.index ? t.index : t.defaultIndex;
    n.lastRenderIndex = n.index;
    n.height = 0;
    n.holeHeight = 0;
    n.hiddenOffset = 0;
    n.currentPosition = new ReactNative.Animated.Value(0);
    n.targetPositionValue = null;
    return n;
  }

  module25.default(S, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        if (!this.positionListenerId)
          this.positionListenerId = this.currentPosition.addListener(function (n) {
            return t.handlePositionChange(n.value);
          });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.positionListenerId) {
          this.currentPosition.removeListener(this.positionListenerId);
          this.positionListenerId = null;
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        if (this.props.index || 0 === this.props.index) this.currentPosition.setValue(this.props.index * this.holeHeight);
      },
    },
    {
      key: 'createPanResponder',
      value: function () {
        var t = this;
        this.panResponder = ReactNative.PanResponder.create({
          onStartShouldSetPanResponder: function (t, n) {
            return true;
          },
          onStartShouldSetPanResponderCapture: function (t, n) {
            return false;
          },
          onMoveShouldSetPanResponder: function (t, n) {
            return true;
          },
          onMoveShouldSetPanResponderCapture: function (t, n) {
            return false;
          },
          onPanResponderGrant: function (n, o) {
            return t.onPanResponderGrant(n, o);
          },
          onPanResponderMove: function (n, o) {
            return t.onPanResponderMove(n, o);
          },
          onPanResponderTerminationRequest: function (t, n) {
            return true;
          },
          onPanResponderRelease: function (n, o) {
            return t.onPanResponderRelease(n, o);
          },
          onPanResponderTerminate: function (t, n) {
            return null;
          },
          onShouldBlockNativeResponder: function (t, n) {
            return true;
          },
        });
      },
    },
    {
      key: 'onPanResponderGrant',
      value: function (t, n) {
        this.currentPosition.stopAnimation();
        this.prevTouches = t.nativeEvent.touches;
        this.speed = 0;
      },
    },
    {
      key: 'onPanResponderMove',
      value: function (t, n) {
        var o = t.nativeEvent.touches,
          s = this.prevTouches;

        if (((this.prevTouches = o), 1 == o.length && o[0].identifier == s[0].identifier)) {
          var u = o[0].pageY - s[0].pageY,
            l = this.currentPosition._value - u;
          this.currentPosition.setValue(l);
          var h = o[0].timestamp - s[0].timestamp;
          if (h) this.speed = u / h;
        }
      },
    },
    {
      key: 'onPanResponderRelease',
      value: function (t, n) {
        this.prevTouches = [];
        if (Math.abs(this.speed) > 0.1) this.handleSwipeScroll();
        else this.handleStopScroll();
      },
    },
    {
      key: 'handlePositionChange',
      value: function (t) {
        var n = Math.round(t / this.holeHeight);

        if (n != this.index && n >= 0 && n < this.props.items.length) {
          var o = Math.abs(n - this.lastRenderIndex);
          this.index = n;
          if (o > this.constructor.preRenderCount) this.forceUpdate();
        }

        if (null != this.targetPositionValue && Math.abs(this.targetPositionValue - t) <= 2) {
          this.targetPositionValue = null;
          this.currentPosition.stopAnimation();
        }
      },
    },
    {
      key: 'handleSwipeScroll',
      value: function () {
        var t = this,
          n = this.props.items,
          o = this.currentPosition._value - 300 * this.speed,
          s = Math.round(o / this.holeHeight);
        if (s < 0) s = 0;
        else if (s > n.length - 1) s = n.length - 1;
        var u = s * this.holeHeight;
        this.targetPositionValue = u;
        ReactNative.Animated.spring(this.currentPosition, {
          toValue: u,
          friction: 9,
          useNativeDriver: false,
        }).start(function () {
          t.currentPosition.setValue(u);
          if (t.props.onChange) t.props.onChange(s);
        });
      },
    },
    {
      key: 'handleStopScroll',
      value: function () {
        var t = this,
          n = this.index * this.holeHeight;
        this.targetPositionValue = n;
        ReactNative.Animated.spring(this.currentPosition, {
          toValue: n,
          friction: 9,
          useNativeDriver: false,
        }).start(function () {
          t.currentPosition.setValue(n);
          if (t.props.onChange) t.props.onChange(t.index);
        });
      },
    },
    {
      key: 'handleLayout',
      value: function (t, n) {
        var o = this;

        if (((this.height = t), (this.holeHeight = n), n)) {
          var s = (t - n) / 2;
          this.hiddenOffset = Math.ceil(s / n) + this.constructor.preRenderCount;
        }

        this.forceUpdate(function () {
          o.currentPosition.setValue(o.index * n);
        });
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        this.handleLayout(t.nativeEvent.layout.height, this.holeHeight);
        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'onHoleLayout',
      value: function (t) {
        this.handleLayout(this.height, t.nativeEvent.layout.height);
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            backgroundColor: module945.default.wheelColor,
            overflow: 'hidden',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderItem',
      value: function (t, n) {
        var module52 = this.props.itemStyle;
        module52 = [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fontSize: module945.default.wheelFontSize,
            color: module945.default.wheelTextColor,
          },
        ].concat(module52);
        if (Math.abs(this.index - n) > this.hiddenOffset) return null;
        else {
          if (!('string' != typeof t && 'number' != typeof t))
            t = React.default.createElement(
              ReactNative.Text,
              {
                style: module52,
              },
              t
            );
          return React.default.createElement(
            this.constructor.Item,
            {
              itemHeight: this.holeHeight,
              wheelHeight: this.height,
              index: n,
              currentPosition: this.currentPosition,
              key: n,
            },
            t
          );
        }
      },
    },
    {
      key: 'renderMask',
      value: function () {
        var t = this.props.maskStyle;
        t = [
          {
            backgroundColor: module945.default.wheelMaskColor,
            opacity: module945.default.wheelMaskOpacity,
            flex: 1,
            zIndex: 100,
          },
        ].concat(t);
        return React.default.createElement(ReactNative.View, {
          style: t,
        });
      },
    },
    {
      key: 'renderHole',
      value: function () {
        var t = this,
          module11 = this.props.holeStyle;
        module11 = [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            height: module945.default.wheelHoleHeight,
            zIndex: 1,
          },
        ].concat(module11);
        return React.default.createElement(ReactNative.View, {
          style: module11,
          onLayout: function (n) {
            return t.onHoleLayout(n);
          },
        });
      },
    },
    {
      key: 'renderHoleLine',
      value: function () {
        var t = this.props.holeLine;
        if (undefined === t)
          t = React.default.createElement(ReactNative.View, {
            style: {
              height: module945.default.wheelHoleLineWidth,
              backgroundColor: module945.default.wheelHoleLineColor,
            },
          });
        else if ('number' == typeof t)
          t = React.default.createElement(ReactNative.View, {
            style: {
              height: t,
              backgroundColor: module945.default.wheelHoleLineColor,
            },
          });
        return t;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          s = this.props,
          u = s.items,
          l = s.index,
          h = module52.default(s, k);
        if (l || 0 === l) this.index = l;
        this.lastRenderIndex = this.index;
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {},
            h,
            {
              style: this.buildStyle(),
              onLayout: function (n) {
                return t.onLayout(n);
              },
            },
            this.panResponder.panHandlers
          ),
          u.map(function (n, o) {
            return t.renderItem(n, o);
          }),
          this.renderMask(),
          this.renderHoleLine(),
          this.renderHole(),
          this.renderHoleLine(),
          this.renderMask()
        );
      },
    },
  ]);
  return S;
})(React.Component);

exports.default = S;
S.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  items: PropTypes.default.arrayOf(PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number])).isRequired,
  itemStyle: ReactNative.Text.propTypes.style,
  holeStyle: ReactNative.ViewPropTypes.style,
  maskStyle: ReactNative.ViewPropTypes.style,
  holeLine: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.number]),
  index: PropTypes.default.number,
  defaultIndex: PropTypes.default.number,
  onChange: PropTypes.default.func,
});
S.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  pointerEvents: 'box-only',
  defaultIndex: 0,
});
S.Item = module1004.default;
S.preRenderCount = 10;
