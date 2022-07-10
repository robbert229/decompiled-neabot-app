var module11 = require('./11'),
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
    var o = E(s);
    if (o && o.has(t)) return o.get(t);
    var n = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (p && (p.get || p.set)) Object.defineProperty(n, u, p);
        else n[u] = t[u];
      }

    n.default = t;
    if (o) o.set(t, n);
    return n;
  })(require('react')),
  ReactNative = require('react-native'),
  module524 = require('./524'),
  module535 = require('./535');

function E(t) {
  if ('function' != typeof WeakMap) return null;
  var s = new WeakMap(),
    o = new WeakMap();
  return (E = function (t) {
    return t ? o : s;
  })(t);
}

function v() {
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

var y = {
  UNDETERMINED: 0,
  BEGAN: 1,
  MOVED_OUTSIDE: 2,
};
exports.TOUCHABLE_STATE = y;

var S = (function (t, ...args) {
  module35.default(O, t);

  var E = O,
    S = v(),
    D = function () {
      var t,
        s = module34.default(E);

      if (S) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(s, arguments, o);
      } else t = s.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    var t;
    module24.default(this, O);
    (t = D.call(this, ...args)).longPressDetected = false;
    t.pointerInside = true;
    t.STATE = y.UNDETERMINED;

    t.onGestureEvent = function (s) {
      var o = s.nativeEvent.pointerInside;
      if (t.pointerInside !== o) o ? t.onMoveIn() : t.onMoveOut();
      t.pointerInside = o;
    };

    t.onHandlerStateChange = function (s) {
      var o = s.nativeEvent.state;
      if (o === module524.State.CANCELLED || o === module524.State.FAILED) t.moveToState(y.UNDETERMINED);
      else if (o === ('android' !== ReactNative.Platform.OS ? module524.State.ACTIVE : module524.State.BEGAN) && t.STATE === y.UNDETERMINED) t.handlePressIn();
      else if (o === module524.State.END) {
        var n = !t.longPressDetected && t.STATE !== y.MOVED_OUTSIDE && null === t.pressOutTimeout;
        t.handleGoToUndetermined();
        if (n) null == t.props.onPress || t.props.onPress();
      }
    };

    t.onLongPressDetected = function () {
      t.longPressDetected = true;
      if (!(null == t.props.onLongPress)) t.props.onLongPress();
    };

    return t;
  }

  module25.default(O, [
    {
      key: 'handlePressIn',
      value: function () {
        var t = this;

        if (
          (this.props.delayPressIn
            ? (this.pressInTimeout = setTimeout(function () {
                t.moveToState(y.BEGAN);
                t.pressInTimeout = null;
              }, this.props.delayPressIn))
            : this.moveToState(y.BEGAN),
          this.props.onLongPress)
        ) {
          var s = (this.props.delayPressIn || 0) + (this.props.delayLongPress || 0);
          this.longPressTimeout = setTimeout(this.onLongPressDetected, s);
        }
      },
    },
    {
      key: 'handleMoveOutside',
      value: function () {
        var t = this;
        if (this.props.delayPressOut)
          this.pressOutTimeout =
            this.pressOutTimeout ||
            setTimeout(function () {
              t.moveToState(y.MOVED_OUTSIDE);
              t.pressOutTimeout = null;
            }, this.props.delayPressOut);
        else this.moveToState(y.MOVED_OUTSIDE);
      },
    },
    {
      key: 'handleGoToUndetermined',
      value: function () {
        var t = this;
        clearTimeout(this.pressOutTimeout);
        if (this.props.delayPressOut)
          this.pressOutTimeout = setTimeout(function () {
            if (t.STATE === y.UNDETERMINED) t.moveToState(y.BEGAN);
            t.moveToState(y.UNDETERMINED);
            t.pressOutTimeout = null;
          }, this.props.delayPressOut);
        else {
          if (this.STATE === y.UNDETERMINED) this.moveToState(y.BEGAN);
          this.moveToState(y.UNDETERMINED);
        }
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        this.reset();
      },
    },
    {
      key: 'reset',
      value: function () {
        this.longPressDetected = false;
        this.pointerInside = true;
        clearTimeout(this.pressInTimeout);
        clearTimeout(this.pressOutTimeout);
        clearTimeout(this.longPressTimeout);
        this.pressOutTimeout = null;
        this.longPressTimeout = null;
        this.pressInTimeout = null;
      },
    },
    {
      key: 'moveToState',
      value: function (t) {
        var s, o;

        if (t !== this.STATE) {
          var n, l;
          if (t === y.BEGAN) null == (n = (l = this.props).onPressIn) || n.call(l);
          else if (t === y.MOVED_OUTSIDE) {
            var u, p;
            if (!(null == (u = (p = this.props).onPressOut))) u.call(p);
          } else if (t === y.UNDETERMINED) {
            var c, h;
            if ((this.reset(), this.STATE === y.BEGAN)) null == (c = (h = this.props).onPressOut) || c.call(h);
          }
          if (!(null == (s = (o = this.props).onStateChange))) s.call(o, this.STATE, t);
          this.STATE = t;
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.reset();
      },
    },
    {
      key: 'onMoveIn',
      value: function () {
        if (this.STATE === y.MOVED_OUTSIDE) this.moveToState(y.BEGAN);
      },
    },
    {
      key: 'onMoveOut',
      value: function () {
        clearTimeout(this.longPressTimeout);
        this.longPressTimeout = null;
        if (this.STATE === y.BEGAN) this.handleMoveOutside();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = {
          accessible: false !== this.props.accessible,
          accessibilityLabel: this.props.accessibilityLabel,
          accessibilityHint: this.props.accessibilityHint,
          accessibilityRole: this.props.accessibilityRole,
          accessibilityState: this.props.accessibilityState,
          nativeID: this.props.nativeID,
          onLayout: this.props.onLayout,
          hitSlop: this.props.hitSlop,
        };
        return (
          <module535.BaseButton>
            {React.createElement(
              ReactNative.Animated.View,
              module11.default({}, t, {
                style: this.props.style,
              }),
              this.props.children
            )}
          </module535.BaseButton>
        );
      },
    },
  ]);
  return O;
})(React.Component);

exports.default = S;
S.defaultProps = {
  delayLongPress: 600,
  extraButtonProps: {
    rippleColor: 'transparent',
  },
};
