var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module221 = require('./221'),
  module3 = require('./3'),
  module214 = require('./214'),
  module222 = require('./222'),
  module48 = require('./48'),
  module44 = require('./44');

!(function (E, t) {
  if (!t && E && E.__esModule) return E;
  if (null === E || ('object' != typeof E && 'function' != typeof E))
    return {
      default: E,
    };
  var n = T(t);
  if (n && n.has(E)) return n.get(E);

  var R = {},
    _ = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var o in E)
    if ('default' !== o && Object.prototype.hasOwnProperty.call(E, o)) {
      var l = _ ? Object.getOwnPropertyDescriptor(E, o) : null;
      if (l && (l.get || l.set)) Object.defineProperty(R, o, l);
      else R[o] = E[o];
    }

  R.default = E;
  if (n) n.set(E, R);
})(require('react'));

function T(E) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (T = function (E) {
    return E ? n : t;
  })(E);
}

var P = Object.freeze({
    NOT_RESPONDER: {
      DELAY: 'ERROR',
      RESPONDER_GRANT: 'RESPONDER_INACTIVE_PRESS_IN',
      RESPONDER_RELEASE: 'ERROR',
      RESPONDER_TERMINATED: 'ERROR',
      ENTER_PRESS_RECT: 'ERROR',
      LEAVE_PRESS_RECT: 'ERROR',
      LONG_PRESS_DETECTED: 'ERROR',
    },
    RESPONDER_INACTIVE_PRESS_IN: {
      DELAY: 'RESPONDER_ACTIVE_PRESS_IN',
      RESPONDER_GRANT: 'ERROR',
      RESPONDER_RELEASE: 'NOT_RESPONDER',
      RESPONDER_TERMINATED: 'NOT_RESPONDER',
      ENTER_PRESS_RECT: 'RESPONDER_INACTIVE_PRESS_IN',
      LEAVE_PRESS_RECT: 'RESPONDER_INACTIVE_PRESS_OUT',
      LONG_PRESS_DETECTED: 'ERROR',
    },
    RESPONDER_INACTIVE_PRESS_OUT: {
      DELAY: 'RESPONDER_ACTIVE_PRESS_OUT',
      RESPONDER_GRANT: 'ERROR',
      RESPONDER_RELEASE: 'NOT_RESPONDER',
      RESPONDER_TERMINATED: 'NOT_RESPONDER',
      ENTER_PRESS_RECT: 'RESPONDER_INACTIVE_PRESS_IN',
      LEAVE_PRESS_RECT: 'RESPONDER_INACTIVE_PRESS_OUT',
      LONG_PRESS_DETECTED: 'ERROR',
    },
    RESPONDER_ACTIVE_PRESS_IN: {
      DELAY: 'ERROR',
      RESPONDER_GRANT: 'ERROR',
      RESPONDER_RELEASE: 'NOT_RESPONDER',
      RESPONDER_TERMINATED: 'NOT_RESPONDER',
      ENTER_PRESS_RECT: 'RESPONDER_ACTIVE_PRESS_IN',
      LEAVE_PRESS_RECT: 'RESPONDER_ACTIVE_PRESS_OUT',
      LONG_PRESS_DETECTED: 'RESPONDER_ACTIVE_LONG_PRESS_IN',
    },
    RESPONDER_ACTIVE_PRESS_OUT: {
      DELAY: 'ERROR',
      RESPONDER_GRANT: 'ERROR',
      RESPONDER_RELEASE: 'NOT_RESPONDER',
      RESPONDER_TERMINATED: 'NOT_RESPONDER',
      ENTER_PRESS_RECT: 'RESPONDER_ACTIVE_PRESS_IN',
      LEAVE_PRESS_RECT: 'RESPONDER_ACTIVE_PRESS_OUT',
      LONG_PRESS_DETECTED: 'ERROR',
    },
    RESPONDER_ACTIVE_LONG_PRESS_IN: {
      DELAY: 'ERROR',
      RESPONDER_GRANT: 'ERROR',
      RESPONDER_RELEASE: 'NOT_RESPONDER',
      RESPONDER_TERMINATED: 'NOT_RESPONDER',
      ENTER_PRESS_RECT: 'RESPONDER_ACTIVE_LONG_PRESS_IN',
      LEAVE_PRESS_RECT: 'RESPONDER_ACTIVE_LONG_PRESS_OUT',
      LONG_PRESS_DETECTED: 'RESPONDER_ACTIVE_LONG_PRESS_IN',
    },
    RESPONDER_ACTIVE_LONG_PRESS_OUT: {
      DELAY: 'ERROR',
      RESPONDER_GRANT: 'ERROR',
      RESPONDER_RELEASE: 'NOT_RESPONDER',
      RESPONDER_TERMINATED: 'NOT_RESPONDER',
      ENTER_PRESS_RECT: 'RESPONDER_ACTIVE_LONG_PRESS_IN',
      LEAVE_PRESS_RECT: 'RESPONDER_ACTIVE_LONG_PRESS_OUT',
      LONG_PRESS_DETECTED: 'ERROR',
    },
    ERROR: {
      DELAY: 'NOT_RESPONDER',
      RESPONDER_GRANT: 'RESPONDER_INACTIVE_PRESS_IN',
      RESPONDER_RELEASE: 'NOT_RESPONDER',
      RESPONDER_TERMINATED: 'NOT_RESPONDER',
      ENTER_PRESS_RECT: 'NOT_RESPONDER',
      LEAVE_PRESS_RECT: 'NOT_RESPONDER',
      LONG_PRESS_DETECTED: 'NOT_RESPONDER',
    },
  }),
  O = function (E) {
    return 'RESPONDER_ACTIVE_PRESS_IN' === E || 'RESPONDER_ACTIVE_LONG_PRESS_IN' === E;
  },
  c = function (E) {
    return 'RESPONDER_ACTIVE_PRESS_OUT' === E || 'RESPONDER_ACTIVE_PRESS_IN' === E;
  },
  N = function (E) {
    return 'RESPONDER_INACTIVE_PRESS_IN' === E || 'RESPONDER_ACTIVE_PRESS_IN' === E || 'RESPONDER_ACTIVE_LONG_PRESS_IN' === E;
  },
  D = function (E) {
    return 'RESPONDER_TERMINATED' === E || 'RESPONDER_RELEASE' === E;
  },
  h = 30,
  f = 20,
  v = 20,
  I = 20,
  A = (function () {
    function E(t) {
      var R = this;
      module24.default(this, E);
      this._eventHandlers = null;
      this._hoverInDelayTimeout = null;
      this._hoverOutDelayTimeout = null;
      this._isHovered = false;
      this._longPressDelayTimeout = null;
      this._pressDelayTimeout = null;
      this._pressOutDelayTimeout = null;
      this._responderID = null;
      this._responderRegion = null;
      this._touchState = 'NOT_RESPONDER';

      this._measureCallback = function (E, t, n, _, o, l) {
        if (E || t || n || _ || o || l)
          R._responderRegion = {
            bottom: l + _,
            left: o,
            right: o + n,
            top: l,
          };
      };

      this.configure(t);
    }

    module25.default(E, [
      {
        key: 'configure',
        value: function (E) {
          this._config = E;
        },
      },
      {
        key: 'reset',
        value: function () {
          this._cancelHoverInDelayTimeout();

          this._cancelHoverOutDelayTimeout();

          this._cancelLongPressDelayTimeout();

          this._cancelPressDelayTimeout();

          this._cancelPressOutDelayTimeout();
        },
      },
      {
        key: 'getEventHandlers',
        value: function () {
          if (null == this._eventHandlers) this._eventHandlers = this._createEventHandlers();
          return this._eventHandlers;
        },
      },
      {
        key: '_createEventHandlers',
        value: function () {
          var E = this,
            n = {
              onBlur: function (t) {
                var n = E._config.onBlur;
                if (null != n) n(t);
              },
              onFocus: function (t) {
                var n = E._config.onFocus;
                if (null != n) n(t);
              },
            },
            R = {
              onStartShouldSetResponder: function () {
                var t = E._config.disabled;

                if (null == t) {
                  var n = E._config.onStartShouldSetResponder_DEPRECATED;
                  return null == n || n();
                }

                return !t;
              },
              onResponderGrant: function (t) {
                t.persist();

                E._cancelPressOutDelayTimeout();

                E._responderID = t.currentTarget;
                E._touchState = 'NOT_RESPONDER';

                E._receiveSignal('RESPONDER_GRANT', t);

                var n = y(E._config.delayPressIn);
                if (n > 0)
                  E._pressDelayTimeout = setTimeout(function () {
                    E._receiveSignal('DELAY', t);
                  }, n);
                else E._receiveSignal('DELAY', t);
                var R = y(E._config.delayLongPress, 10, 500 - n);
                E._longPressDelayTimeout = setTimeout(function () {
                  E._handleLongPress(t);
                }, R + n);
              },
              onResponderMove: function (t) {
                if (null != E._config.onPressMove) E._config.onPressMove(t);
                var n = E._responderRegion;

                if (null != n) {
                  var R = p(t);

                  if (null == R) {
                    E._cancelLongPressDelayTimeout();

                    return void E._receiveSignal('LEAVE_PRESS_RECT', t);
                  }

                  if (null != E._touchActivatePosition) {
                    var _ = E._touchActivatePosition.pageX - R.pageX,
                      o = E._touchActivatePosition.pageY - R.pageY;

                    if (_ ** o > 10) E._cancelLongPressDelayTimeout();
                  }

                  if (E._isTouchWithinResponderRegion(R, n)) E._receiveSignal('ENTER_PRESS_RECT', t);
                  else {
                    E._cancelLongPressDelayTimeout();

                    E._receiveSignal('LEAVE_PRESS_RECT', t);
                  }
                }
              },
              onResponderRelease: function (t) {
                E._receiveSignal('RESPONDER_RELEASE', t);
              },
              onResponderTerminate: function (t) {
                E._receiveSignal('RESPONDER_TERMINATED', t);
              },
              onResponderTerminationRequest: function () {
                var t = E._config.cancelable;

                if (null == t) {
                  var n = E._config.onResponderTerminationRequest_DEPRECATED;
                  return null == n || n();
                }

                return t;
              },
              onClick: function (t) {
                var n = E._config.onPress;
                if (null != n) n(t);
              },
            },
            o =
              'ios' === module48.default.OS || 'android' === module48.default.OS
                ? null
                : {
                    onMouseEnter: function (t) {
                      if (module221.isHoverEnabled()) {
                        E._isHovered = true;

                        E._cancelHoverOutDelayTimeout();

                        var n = E._config.onHoverIn;

                        if (null != n) {
                          var R = y(E._config.delayHoverIn);
                          if (R > 0)
                            E._hoverInDelayTimeout = setTimeout(function () {
                              n(t);
                            }, R);
                          else n(t);
                        }
                      }
                    },
                    onMouseLeave: function (t) {
                      if (E._isHovered) {
                        E._isHovered = false;

                        E._cancelHoverInDelayTimeout();

                        var n = E._config.onHoverOut;

                        if (null != n) {
                          var R = y(E._config.delayHoverOut);
                          if (R > 0)
                            E._hoverInDelayTimeout = setTimeout(function () {
                              n(t);
                            }, R);
                          else n(t);
                        }
                      }
                    },
                  };
          return module11.default({}, n, R, o);
        },
      },
      {
        key: '_receiveSignal',
        value: function (E, t) {
          var n,
            R = this._touchState,
            _ = null == (n = P[R]) ? undefined : n[E];

          if (!(null == this._responderID && 'RESPONDER_RELEASE' === E)) {
            module3.default(
              null != _ && 'ERROR' !== _,
              'Pressability: Invalid signal `%s` for state `%s` on responder: %s',
              E,
              R,
              'number' == typeof this._responderID ? this._responderID : '<<host component>>'
            );

            if (R !== _) {
              this._performTransitionSideEffects(R, _, E, t);

              this._touchState = _;
            }
          }
        },
      },
      {
        key: '_performTransitionSideEffects',
        value: function (E, t, n, R) {
          if (D(n)) {
            this._touchActivatePosition = null;

            this._cancelLongPressDelayTimeout();
          }

          var _ = 'NOT_RESPONDER' === E && 'RESPONDER_INACTIVE_PRESS_IN' === t,
            o = !c(E) && c(t);

          if (((_ || o) && this._measureResponderRegion(), N(E) && 'LONG_PRESS_DETECTED' === n)) {
            var u = this._config.onLongPress;
            if (null != u) u(R);
          }

          var S = O(E),
            T = O(t);

          if ((!S && T ? this._activate(R) : S && !T && this._deactivate(R), N(E) && 'RESPONDER_RELEASE' === n)) {
            var P = this._config,
              h = P.onLongPress,
              f = P.onPress,
              v = P.android_disableSound;
            if (null != f)
              (null != h && 'RESPONDER_ACTIVE_LONG_PRESS_IN' === E && this._shouldLongPressCancelPress()) ||
                (T || S || (this._activate(R), this._deactivate(R)), 'android' === module48.default.OS && true !== v && module214.default.playTouchSound(), f(R));
          }

          this._cancelPressDelayTimeout();
        },
      },
      {
        key: '_activate',
        value: function (E) {
          var t = this._config.onPressIn,
            n = p(E);
          this._touchActivatePosition = {
            pageX: n.pageX,
            pageY: n.pageY,
          };
          this._touchActivateTime = Date.now();
          if (null != t) t(E);
        },
      },
      {
        key: '_deactivate',
        value: function (E) {
          var t = this._config.onPressOut;

          if (null != t) {
            var n,
              R = y(this._config.minPressDuration, 0, 130),
              _ = Date.now() - (null != (n = this._touchActivateTime) ? n : 0),
              o = (R - _) ** y(this._config.delayPressOut);

            if (o > 0)
              this._pressOutDelayTimeout = setTimeout(function () {
                t(E);
              }, o);
            else t(E);
          }

          this._touchActivateTime = null;
        },
      },
      {
        key: '_measureResponderRegion',
        value: function () {
          if (null != this._responderID)
            'number' == typeof this._responderID ? module44.default.measure(this._responderID, this._measureCallback) : this._responderID.measure(this._measureCallback);
        },
      },
      {
        key: '_isTouchWithinResponderRegion',
        value: function (E, t) {
          var n,
            R,
            _,
            o,
            l = module222.normalizeRect(this._config.hitSlop),
            s = module222.normalizeRect(this._config.pressRectOffset),
            module44 = t.bottom,
            T = t.left,
            P = t.right,
            O = t.top;

          if (null != l) {
            if (null != l.bottom) module44 += l.bottom;
            if (null != l.left) T -= l.left;
            if (null != l.right) P += l.right;
            if (null != l.top) O -= l.top;
          }

          module44 += null != (n = null == s ? undefined : s.bottom) ? n : h;
          T -= null != (R = null == s ? undefined : s.left) ? R : f;
          P += null != (_ = null == s ? undefined : s.right) ? _ : v;
          O -= null != (o = null == s ? undefined : s.top) ? o : I;
          return E.pageX > T && E.pageX < P && E.pageY > O && E.pageY < module44;
        },
      },
      {
        key: '_handleLongPress',
        value: function (E) {
          if (!('RESPONDER_ACTIVE_PRESS_IN' !== this._touchState && 'RESPONDER_ACTIVE_LONG_PRESS_IN' !== this._touchState)) this._receiveSignal('LONG_PRESS_DETECTED', E);
        },
      },
      {
        key: '_shouldLongPressCancelPress',
        value: function () {
          return null == this._config.onLongPressShouldCancelPress_DEPRECATED || this._config.onLongPressShouldCancelPress_DEPRECATED();
        },
      },
      {
        key: '_cancelHoverInDelayTimeout',
        value: function () {
          if (null != this._hoverInDelayTimeout) {
            clearTimeout(this._hoverInDelayTimeout);
            this._hoverInDelayTimeout = null;
          }
        },
      },
      {
        key: '_cancelHoverOutDelayTimeout',
        value: function () {
          if (null != this._hoverOutDelayTimeout) {
            clearTimeout(this._hoverOutDelayTimeout);
            this._hoverOutDelayTimeout = null;
          }
        },
      },
      {
        key: '_cancelLongPressDelayTimeout',
        value: function () {
          if (null != this._longPressDelayTimeout) {
            clearTimeout(this._longPressDelayTimeout);
            this._longPressDelayTimeout = null;
          }
        },
      },
      {
        key: '_cancelPressDelayTimeout',
        value: function () {
          if (null != this._pressDelayTimeout) {
            clearTimeout(this._pressDelayTimeout);
            this._pressDelayTimeout = null;
          }
        },
      },
      {
        key: '_cancelPressOutDelayTimeout',
        value: function () {
          if (null != this._pressOutDelayTimeout) {
            clearTimeout(this._pressOutDelayTimeout);
            this._pressOutDelayTimeout = null;
          }
        },
      },
    ]);
    return E;
  })();

function y(E) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 0;
  return t ** (null != E ? E : n);
}

exports.default = A;

var p = function (E) {
  var t = E.nativeEvent,
    n = t.changedTouches,
    R = t.touches;
  return null != R && R.length > 0 ? R[0] : null != n && n.length > 0 ? n[0] : E.nativeEvent;
};
