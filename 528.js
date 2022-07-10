var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, f) {
    if (!f && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = X(f);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, o, c);
        else l[o] = t[o];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  module529 = require('./529'),
  module532 = require('./532');

function X(t) {
  if ('function' != typeof WeakMap) return null;
  var f = new WeakMap(),
    n = new WeakMap();
  return (X = function (t) {
    return t ? n : f;
  })(t);
}

function Y() {
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

var p = [
  'id',
  'enabled',
  'minPointers',
  'waitFor',
  'simultaneousHandlers',
  'shouldCancelWhenOutside',
  'hitSlop',
  'onBegan',
  'onFailed',
  'onCancelled',
  'onActivated',
  'onEnded',
  'onGestureEvent',
  'onHandlerStateChange',
];
exports.baseProps = p;
var h = module529.default({
  name: 'TapGestureHandler',
  allowedProps: [].concat(p, ['maxDurationMs', 'maxDelayMs', 'numberOfTaps', 'maxDeltaX', 'maxDeltaY', 'maxDist', 'minPointers']),
  config: {},
});
exports.TapGestureHandler = h;
var y = module529.default({
  name: 'FlingGestureHandler',
  allowedProps: [].concat(p, ['numberOfPointers', 'direction']),
  config: {},
});
exports.FlingGestureHandler = y;

var P = (function (t) {
  module35.default(v, t);

  var module11 = v,
    React = Y(),
    O = function () {
      var t,
        n = module34.default(module11);

      if (React) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    module24.default(this, v);
    return O.apply(this, arguments);
  }

  module25.default(v, [
    {
      key: 'componentDidMount',
      value: function () {
        console.warn(
          'ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase'
        );
      },
    },
    {
      key: 'render',
      value: function () {
        return this.props.children;
      },
    },
  ]);
  return v;
})(React.Component);

P.forceTouchAvailable = false;
var D =
  null != module532.default && module532.default.forceTouchAvailable
    ? module529.default({
        name: 'ForceTouchGestureHandler',
        allowedProps: [].concat(p, ['minForce', 'maxForce', 'feedbackOnActivation']),
        config: {},
      })
    : P;
exports.ForceTouchGestureHandler = D;
D.forceTouchAvailable = (null == module532.default ? undefined : module532.default.forceTouchAvailable) || false;
var G = module529.default({
  name: 'LongPressGestureHandler',
  allowedProps: [].concat(p, ['minDurationMs', 'maxDist']),
  config: {},
});

function H(t) {
  var n = module11.default({}, t);

  if (undefined !== t.minDeltaX) {
    delete n.minDeltaX;
    n.activeOffsetXStart = -t.minDeltaX;
    n.activeOffsetXEnd = t.minDeltaX;
  }

  if (undefined !== t.maxDeltaX) {
    delete n.maxDeltaX;
    n.failOffsetXStart = -t.maxDeltaX;
    n.failOffsetXEnd = t.maxDeltaX;
  }

  if (undefined !== t.minOffsetX) {
    delete n.minOffsetX;
    if (t.minOffsetX < 0) n.activeOffsetXStart = t.minOffsetX;
    else n.activeOffsetXEnd = t.minOffsetX;
  }

  if (undefined !== t.minDeltaY) {
    delete n.minDeltaY;
    n.activeOffsetYStart = -t.minDeltaY;
    n.activeOffsetYEnd = t.minDeltaY;
  }

  if (undefined !== t.maxDeltaY) {
    delete n.maxDeltaY;
    n.failOffsetYStart = -t.maxDeltaY;
    n.failOffsetYEnd = t.maxDeltaY;
  }

  if (undefined !== t.minOffsetY) {
    delete n.minOffsetY;
    if (t.minOffsetY < 0) n.activeOffsetYStart = t.minOffsetY;
    else n.activeOffsetYEnd = t.minOffsetY;
  }

  if (undefined !== t.activeOffsetX) {
    delete n.activeOffsetX;

    if (Array.isArray(t.activeOffsetX)) {
      n.activeOffsetXStart = t.activeOffsetX[0];
      n.activeOffsetXEnd = t.activeOffsetX[1];
    } else if (t.activeOffsetX < 0) n.activeOffsetXStart = t.activeOffsetX;
    else n.activeOffsetXEnd = t.activeOffsetX;
  }

  if (undefined !== t.activeOffsetY) {
    delete n.activeOffsetY;

    if (Array.isArray(t.activeOffsetY)) {
      n.activeOffsetYStart = t.activeOffsetY[0];
      n.activeOffsetYEnd = t.activeOffsetY[1];
    } else if (t.activeOffsetY < 0) n.activeOffsetYStart = t.activeOffsetY;
    else n.activeOffsetYEnd = t.activeOffsetY;
  }

  if (undefined !== t.failOffsetX) {
    delete n.failOffsetX;

    if (Array.isArray(t.failOffsetX)) {
      n.failOffsetXStart = t.failOffsetX[0];
      n.failOffsetXEnd = t.failOffsetX[1];
    } else if (t.failOffsetX < 0) n.failOffsetXStart = t.failOffsetX;
    else n.failOffsetXEnd = t.failOffsetX;
  }

  if (undefined !== t.failOffsetY) {
    delete n.failOffsetY;

    if (Array.isArray(t.failOffsetY)) {
      n.failOffsetYStart = t.failOffsetY[0];
      n.failOffsetYEnd = t.failOffsetY[1];
    } else if (t.failOffsetY < 0) n.failOffsetYStart = t.failOffsetY;
    else n.failOffsetYEnd = t.failOffsetY;
  }

  return n;
}

exports.LongPressGestureHandler = G;
var b = module529.default({
  name: 'PanGestureHandler',
  allowedProps: [].concat(p, [
    'activeOffsetY',
    'activeOffsetX',
    'failOffsetY',
    'failOffsetX',
    'minDist',
    'minVelocity',
    'minVelocityX',
    'minVelocityY',
    'minPointers',
    'maxPointers',
    'avgTouches',
    'enableTrackpadTwoFingerGesture',
  ]),
  config: {},
  transformProps: function (t) {
    return H(t);
  },
  customNativeProps: [
    'activeOffsetYStart',
    'activeOffsetYEnd',
    'activeOffsetXStart',
    'activeOffsetXEnd',
    'failOffsetYStart',
    'failOffsetYEnd',
    'failOffsetXStart',
    'failOffsetXEnd',
  ],
});
exports.PanGestureHandler = b;
var E = module529.default({
  name: 'PinchGestureHandler',
  allowedProps: p,
  config: {},
});
exports.PinchGestureHandler = E;
var S = module529.default({
  name: 'RotationGestureHandler',
  allowedProps: p,
  config: {},
});
exports.RotationGestureHandler = S;
