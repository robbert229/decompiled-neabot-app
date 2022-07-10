require('react');

module11.default({}, p, {
  transformTranslate: {
    from: {
      x: 0,
      y: 0,
      z: 0,
    },
    to: {
      x: Math.round(0.3 * x),
      y: 0,
      z: 0,
    },
  },
  translateX: {
    from: 0,
    to: Math.round(0.3 * x),
  },
});
ReactNative.Dimensions.get('window').width;
ReactNative.PixelRatio.get();
ReactNative.Dimensions.get('window').width;
ReactNative.PixelRatio.get();
ReactNative.Dimensions.get('window').height;
ReactNative.PixelRatio.get();
ReactNative.Dimensions.get('window').height;
ReactNative.PixelRatio.get();
ReactNative.Dimensions.get('window').height;
ReactNative.PixelRatio.get();
ReactNative.Dimensions.get('window').height;
ReactNative.PixelRatio.get();
module11.default({}, f, {
  transformTranslate: {
    from: {
      x: -x,
      y: 0,
      z: 0,
    },
    to: {
      x: 0,
      y: 0,
      z: 0,
    },
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: ReactNative.PixelRatio.get(),
  },
  translateX: {
    from: -x,
    to: 0,
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: ReactNative.PixelRatio.get(),
  },
});
module11.default({}, f, {
  transformTranslate: {
    from: {
      y: u,
      x: 0,
      z: 0,
    },
    to: {
      x: 0,
      y: 0,
      z: 0,
    },
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: ReactNative.PixelRatio.get(),
  },
  translateY: {
    from: u,
    to: 0,
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: ReactNative.PixelRatio.get(),
  },
});
ReactNative.PixelRatio.get();
ReactNative.Dimensions.get('window').height;
ReactNative.PixelRatio.get();
ReactNative.Dimensions.get('window').height;
ReactNative.PixelRatio.get();
ReactNative.PixelRatio.get();
ReactNative.PixelRatio.get();
module11.default({}, c, {
  direction: 'right-to-left',
});
module11.default({}, c, {
  fullDistance: u,
  direction: 'down-to-up',
});
module11.default({}, c, {
  fullDistance: u,
  direction: 'up-to-down',
});

var module11 = require('./11'),
  ReactNative = require('react-native'),
  module1027 = require('./1027'),
  module1028 = require('./1028'),
  x = ReactNative.Dimensions.get('window').width,
  u = ReactNative.Dimensions.get('window').height,
  p = {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: -Math.round(0.3 * ReactNative.Dimensions.get('window').width),
        y: 0,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: ReactNative.PixelRatio.get(),
    },
    transformScale: {
      from: {
        x: 1,
        y: 1,
        z: 1,
      },
      to: {
        x: 1,
        y: 1,
        z: 1,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
    opacity: {
      from: 1,
      to: 0.6,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: false,
      round: 100,
    },
    translateX: {
      from: 0,
      to: -Math.round(0.3 * ReactNative.Dimensions.get('window').width),
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: ReactNative.PixelRatio.get(),
    },
    scaleX: {
      from: 1,
      to: 1,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
    scaleY: {
      from: 1,
      to: 1,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
  },
  f = {
    opacity: {
      value: 1,
      type: 'constant',
    },
    transformTranslate: {
      from: {
        x: ReactNative.Dimensions.get('window').width,
        y: 0,
        z: 0,
      },
      to: {
        x: 0,
        y: 0,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: ReactNative.PixelRatio.get(),
    },
    translateX: {
      from: ReactNative.Dimensions.get('window').width,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: ReactNative.PixelRatio.get(),
    },
    scaleX: {
      value: 1,
      type: 'constant',
    },
    scaleY: {
      value: 1,
      type: 'constant',
    },
  },
  y = module11.default({}, f, {
    transformTranslate: {
      from: {
        y: -u,
        x: 0,
        z: 0,
      },
      to: {
        x: 0,
        y: 0,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: ReactNative.PixelRatio.get(),
    },
    translateX: {
      value: 1,
      type: 'constant',
    },
    translateY: {
      from: -u,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: ReactNative.PixelRatio.get(),
    },
  }),
  w = {
    opacity: {
      from: 1,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: false,
      round: 100,
    },
  },
  c = {
    isDetachable: false,
    gestureDetectMovement: 2,
    notMoving: 0.3,
    directionRatio: 0.66,
    snapVelocity: 2,
    edgeHitWidth: 30,
    stillCompletionRatio: 0.6,
    fullDistance: x,
    direction: 'left-to-right',
  },
  h = {
    gestures: {
      pop: c,
    },
    springFriction: 26,
    springTension: 200,
    defaultTransitionVelocity: 1.5,
    animationInterpolators: {
      into: module1028.default(f),
      out: module1028.default(p),
    },
  },
  R = module11.default({}, module1027.default, {
    PushFromRight: module11.default({}, h),
    FloatFromTop: module11.default({}, h, {
      gestures: {
        pop: module11.default({}, c, {
          edgeHitWidth: 150,
          direction: 'bottom-to-top',
          fullDistance: u,
        }),
      },
      animationInterpolators: {
        into: module1028.default(y),
        out: module1028.default({
          opacity: {
            from: 1,
            to: 0.6,
            min: 0,
            max: 1,
            type: 'linear',
            extrapolate: false,
            round: 100,
          },
        }),
      },
    }),
    Replace: module11.default({}, h, {
      gestures: null,
      animationInterpolators: {
        into: module1028.default({
          opacity: {
            from: 0,
            to: 1,
            min: 0,
            max: 1,
            type: 'linear',
            extrapolate: false,
            round: 100,
          },
        }),
        out: module1028.default(w),
      },
    }),
    Suspension: module11.default({}, h, {
      gestures: null,
      animationInterpolators: {
        into: module1028.default({
          opacity: {
            value: 1,
            type: 'constant',
          },
        }),
        out: module1028.default(w),
      },
    }),
  });

module.exports = R;
