exports.default = function (t) {
  var n = t.name,
    o = t.allowedProps,
    h = undefined === o ? [] : o,
    w = t.config,
    S = undefined === w ? {} : w,
    N = t.transformProps,
    R = t.customNativeProps,
    b = undefined === R ? [] : R,
    D = (function (t) {
      module35.default(D, t);

      var o = D,
        w = C(),
        R = function () {
          var t,
            n = module34.default(o);

          if (w) {
            var u = module34.default(this).constructor;
            t = Reflect.construct(n, arguments, u);
          } else t = n.apply(this, arguments);

          return module37.default(this, t);
        };

      function D(t) {
        var o;

        if (
          (module24.default(this, D),
          ((o = R.call(this, t)).updateEnqueued = null),
          (o.onGestureHandlerEvent = function (t) {
            if (t.nativeEvent.handlerTag === o.handlerTag) {
              if (!(null == o.props.onGestureEvent)) o.props.onGestureEvent(t);
            } else if (!(null == o.props.onGestureHandlerEvent)) o.props.onGestureHandlerEvent(t);
          }),
          (o.onGestureHandlerStateChange = function (t) {
            if (t.nativeEvent.handlerTag === o.handlerTag) {
              if (!(null == o.props.onHandlerStateChange)) o.props.onHandlerStateChange(t);
              var n = t.nativeEvent.state,
                u = J[n],
                l = u && o.props[u];
              if (l && 'function' == typeof l) l(t);
            } else null == o.props.onGestureHandlerStateChange || o.props.onGestureHandlerStateChange(t);
          }),
          (o.refHandler = function (t) {
            o.viewNode = t;
            var n = React.Children.only(o.props.children),
              u = n.ref;
            if (null !== u) 'function' == typeof u ? u(t) : (u.current = t);
          }),
          (o.createGestureHandler = function (t) {
            o.config = t;
            module531.default.createGestureHandler(n, o.handlerTag, t);
          }),
          (o.attachGestureHandler = function (t) {
            o.viewTag = t;
            if ('web' === ReactNative.Platform.OS) module531.default.attachGestureHandler(o.handlerTag, t, o.propsRef);
            else module531.default.attachGestureHandler(o.handlerTag, t);
          }),
          (o.updateGestureHandler = function (t) {
            o.config = t;
            module531.default.updateGestureHandler(o.handlerTag, t);
          }),
          (o.handlerTag = _++),
          (o.config = {}),
          (o.propsRef = React.createRef()),
          t.id)
        ) {
          if (undefined !== j[t.id]) throw new Error('Handler with ID "' + t.id + '" already registered');
          j[t.id] = o.handlerTag;
        }

        return o;
      }

      module25.default(D, [
        {
          key: 'componentDidMount',
          value: function () {
            var t = this,
              n = this.props;
            if (B(n))
              this.updateEnqueued = setImmediate(function () {
                t.updateEnqueued = null;
                t.update();
              });
            this.createGestureHandler(k(N ? N(this.props) : this.props, [].concat(module20.default(h), module20.default(b)), S));
            this.attachGestureHandler(T(this.viewNode));
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            var t = T(this.viewNode);
            if (this.viewTag !== t) this.attachGestureHandler(t);
            this.update();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            module531.default.dropGestureHandler(this.handlerTag);
            if (this.updateEnqueued) clearImmediate(this.updateEnqueued);
            var t = this.props.id;
            if (t) delete j[t];
          },
        },
        {
          key: 'update',
          value: function () {
            var t = k(N ? N(this.props) : this.props, [].concat(module20.default(h), module20.default(b)), S);
            if (!module530.default(this.config, t)) this.updateGestureHandler(t);
          },
        },
        {
          key: 'setNativeProps',
          value: function (t) {
            var n = module11.default({}, this.props, t),
              o = k(N ? N(n) : n, [].concat(module20.default(h), module20.default(b)), S);
            this.updateGestureHandler(o);
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this.onGestureHandlerEvent,
              n = this.props,
              o = n.onGestureEvent,
              u = n.onGestureHandlerEvent;

            if (o && 'function' != typeof o) {
              if (u) throw new Error('Nesting touch handlers with native animated driver is not supported yet');
              t = o;
            } else if (u && 'function' != typeof u) throw new Error('Nesting touch handlers with native animated driver is not supported yet');

            var l = this.onGestureHandlerStateChange,
              s = this.props,
              f = s.onHandlerStateChange,
              c = s.onGestureHandlerStateChange;

            if (f && 'function' != typeof f) {
              if (c) throw new Error('Nesting touch handlers with native animated driver is not supported yet');
              l = f;
            } else if (c && 'function' != typeof c) throw new Error('Nesting touch handlers with native animated driver is not supported yet');

            var p = {
              onGestureHandlerEvent: t,
              onGestureHandlerStateChange: l,
            };
            this.propsRef.current = p;
            var h = React.Children.only(this.props.children),
              H = h.props.children;
            if (ReactNative.Touchable.TOUCH_TARGET_DEBUG && h.type && ('RNGestureHandlerButton' === h.type || 'View' === h.type.name || 'View' === h.type.displayName))
              (H = React.Children.toArray(H)).push(
                ReactNative.Touchable.renderDebugView({
                  color: 'mediumspringgreen',
                  hitSlop: h.props.hitSlop,
                })
              );
            return React.cloneElement(
              h,
              module11.default(
                {
                  ref: this.refHandler,
                  collapsable: false,
                },
                p
              ),
              H
            );
          },
        },
      ]);
      return D;
    })(React.Component);

  D.displayName = n;
  return D;
};

var n,
  o,
  module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module260 = require('./260'),
  module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = S(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, s, f);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module530 = require('./530'),
  module531 = require('./531'),
  module524 = require('./524');

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (S = function (t) {
    return t ? o : n;
  })(t);
}

function C() {
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

function T(t) {
  return 'web' === ReactNative.Platform.OS ? t : ReactNative.findNodeHandle(t);
}

var N = ReactNative.NativeModules.UIManager,
  R = undefined === N ? {} : N,
  b = {
    onGestureHandlerEvent: {
      registrationName: 'onGestureHandlerEvent',
    },
    onGestureHandlerStateChange: {
      registrationName: 'onGestureHandlerStateChange',
    },
  };
R.genericDirectEventTypes = module11.default({}, R.genericDirectEventTypes, b);
var D = null != (n = null == R.getViewManagerConfig ? undefined : R.getViewManagerConfig('getConstants')) ? n : null == R.getConstants ? undefined : R.getConstants();
if (D) D.genericDirectEventTypes = module11.default({}, D.genericDirectEventTypes, b);
var O = R.setJSResponder,
  P = undefined === O ? function () {} : O,
  A = R.clearJSResponder,
  M = undefined === A ? function () {} : A;

R.setJSResponder = function (t, n) {
  module531.default.handleSetJSResponder(t, n);
  P(t, n);
};

R.clearJSResponder = function () {
  module531.default.handleClearJSResponder();
  M();
};

var _ = 1,
  j = {};

function k(t, n) {
  var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
    u = module11.default({}, o);
  n.forEach(function (n) {
    var o,
      l,
      s = t[n];

    if (((l = n), !(undefined === (o = s) || (o === Object(o) && '__isNative' in o) || 'onHandlerStateChange' === l || 'onGestureEvent' === l))) {
      var f = t[n];
      if ('simultaneousHandlers' === n || 'waitFor' === n) f = I(t[n]);
      else if ('hitSlop' === n && 'object' != typeof f)
        f = {
          top: f,
          left: f,
          bottom: f,
          right: f,
        };
      u[n] = f;
    }
  });
  return u;
}

function I(t) {
  if (!Array.isArray(t)) t = [t];
  return 'web' === ReactNative.Platform.OS
    ? t
        .map(function (t) {
          return t.current;
        })
        .filter(function (t) {
          return t;
        })
    : t
        .map(function (t) {
          var n;
          return j[t] || (null == (n = t.current) ? undefined : n.handlerTag) || -1;
        })
        .filter(function (t) {
          return t > 0;
        });
}

function B(t) {
  var n = function (t) {
    return Array.isArray(t)
      ? t.some(function (t) {
          return t && null === t.current;
        })
      : t && null === t.current;
  };

  return n(t.simultaneousHandlers) || n(t.waitFor);
}

o = {};
module260.default(o, module524.State.UNDETERMINED, undefined);
module260.default(o, module524.State.BEGAN, 'onBegan');
module260.default(o, module524.State.FAILED, 'onFailed');
module260.default(o, module524.State.CANCELLED, 'onCancelled');
module260.default(o, module524.State.ACTIVE, 'onActivated');
module260.default(o, module524.State.END, 'onEnded');
var J = o;
