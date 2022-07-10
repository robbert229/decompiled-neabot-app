var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, s) {
    if (!s && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = w(s);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var h = o ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (h && (h.get || h.set)) Object.defineProperty(l, u, h);
        else l[u] = t[u];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native');

require('./945');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var s = new WeakMap(),
    n = new WeakMap();
  return (w = function (t) {
    return t ? n : s;
  })(t);
}

function y() {
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

var module969 = (function (t) {
  module35.default(S, t);

  var PropTypes = S,
    w = y(),
    X = function () {
      var t,
        s = module34.default(PropTypes);

      if (w) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(s, arguments, n);
      } else t = s.apply(this, arguments);

      return module37.default(this, t);
    };

  function S(t) {
    var l;
    module24.default(this, S);
    (l = X.call(this, t))._swipeSts = 'none';
    l.translateX = 0;
    l.prevTouches = [];
    l.replaceSuperFunction();
    l.state = module11.default({}, l.state, {
      translateX: new ReactNative.Animated.Value(0),
    });
    return l;
  }

  module25.default(S, [
    {
      key: 'swipeSts',
      get: function () {
        return this._swipeSts;
      },
      set: function (t) {
        this._swipeSts = t;
        if (this.props.onSwipeStsChange) this.props.onSwipeStsChange(this._swipeSts);
      },
    },
    {
      key: 'replaceSuperFunction',
      value: function () {
        var t = this,
          s = this.touchableHandleResponderMove;

        this.touchableHandleResponderMove = function (n) {
          s.call(t, n);
          t.swiping(n);
        };

        var n = this.touchableHandleActivePressOut;

        this.touchableHandleActivePressOut = function (s) {
          t.swipeOver();
          n.call(t, s);
        };

        var l = this.touchableHandlePress;

        this.touchableHandlePress = function (s) {
          if (!t.checkPress()) l.call(t, s);
        };

        var o = this.touchableHandleLongPress;

        this.touchableHandleLongPress = function (s) {
          if (!t.checkPress()) o.call(t, s);
        };
      },
    },
    {
      key: 'swiping',
      value: function (t) {
        if (this.props.swipeable && 'opened' !== this.swipeSts) {
          var s = t.nativeEvent.touches,
            n = this.prevTouches;

          if (((this.prevTouches = s), 0 != s.length && s.length == n.length)) {
            for (var l = 0; l < s.length; ++l) if (s[l].identifier != n[l].identifier) return;

            var o = s[0].pageX - n[0].pageX;
            if (
              (Math.abs(this.translateX) > this.props.swipeWidth ? (this.translateX += o / 3) : (this.translateX += o),
              this.translateX > 16 && (this.translateX = 16),
              'moving' === this.swipeSts)
            )
              this.state.translateX.setValue(this.translateX);
            else if (Math.abs(this.translateX) > 5) {
              var u = ReactNative.StyleSheet.flatten(this.props.style) || {};
              this.state.anim.setValue(undefined === u.opacity ? 1 : u.opacity);
              this.state.translateX.setValue(this.translateX);
              this.swipeSts = 'moving';
            }
          }
        }
      },
    },
    {
      key: 'swipeOver',
      value: function () {
        this.prevTouches = [];
        if ('moving' === this.swipeSts)
          this.translateX > 0 ? this.springClose() : -this.translateX > 40 || -this.translateX > this.props.swipeWidth / 2 ? this.timingOpen() : this.timingClose();
      },
    },
    {
      key: 'checkPress',
      value: function () {
        if ('opened' === this.swipeSts) this.timingClose();
        return 'none' !== this.swipeSts;
      },
    },
    {
      key: 'springClose',
      value: function () {
        var t = this;
        this.swipeSts = 'closing';
        this.translateX = 0;
        ReactNative.Animated.spring(this.state.translateX, {
          toValue: this.translateX,
          friction: 5,
          useNativeDriver: true,
        }).start(function () {
          t.swipeSts = 'none';
        });
      },
    },
    {
      key: 'timingClose',
      value: function () {
        var t = this;
        this.swipeSts = 'closing';
        this.translateX = 0;
        ReactNative.Animated.timing(this.state.translateX, {
          toValue: this.translateX,
          duration: 150,
          useNativeDriver: true,
        }).start(function () {
          t.swipeSts = 'none';
        });
      },
    },
    {
      key: 'timingOpen',
      value: function () {
        var t = this;
        this.swipeSts = 'opening';
        this.translateX = -this.props.swipeWidth;
        ReactNative.Animated.timing(this.state.translateX, {
          toValue: this.translateX,
          duration: 150,
          useNativeDriver: true,
        }).start(function () {
          t.swipeSts = 'opened';
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = module32.default(module34.default(S.prototype), 'render', this).call(this);
        return React.default.cloneElement(t, {
          style: t.props.style.concat({
            transform: [
              {
                translateX: this.state.translateX,
              },
            ],
          }),
        });
      },
    },
  ]);
  return S;
})(require('./969').default);

exports.default = module969;
module969.propTypes = {
  swipeable: PropTypes.default.bool,
  swipeWidth: PropTypes.default.number,
  onSwipeStsChange: PropTypes.default.func,
};
module969.defaultProps = {
  swipeable: true,
  swipeWidth: 100,
};
