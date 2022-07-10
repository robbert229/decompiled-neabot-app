var module11 = require('@babel/runtime/helpers/interopRequireDefault')(require('./11')),
  ReactNative = require('react-native'),
  module1028 = require('./1028'),
  l = ReactNative.I18nManager.isRTL,
  s = ReactNative.Dimensions.get('window').width,
  p = ReactNative.Dimensions.get('window').height,
  u = ReactNative.PixelRatio.get(),
  x = {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: 0.3 * -s,
        y: 0,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
    opacity: {
      value: 1,
      type: 'constant',
    },
  },
  f = module11.default({}, x, {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: 0.3 * s,
        y: 0,
        z: 0,
      },
    },
  }),
  y = {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: -Math.round(0.3 * s),
        y: 0,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
    transformScale: {
      from: {
        x: 1,
        y: 1,
        z: 1,
      },
      to: {
        x: 0.95,
        y: 0.95,
        z: 1,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
    opacity: {
      from: 1,
      to: 0.3,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: false,
      round: 100,
    },
    translateX: {
      from: 0,
      to: -Math.round(0.3 * s),
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
    scaleX: {
      from: 1,
      to: 0.95,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
    scaleY: {
      from: 1,
      to: 0.95,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
  },
  T = module11.default({}, y, {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: Math.round(0.3 * s),
        y: 0,
        z: 0,
      },
    },
    translateX: {
      from: 0,
      to: Math.round(0.3 * s),
    },
  }),
  c = {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: -s,
        y: 0,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
    opacity: {
      value: 1,
      type: 'constant',
    },
    translateX: {
      from: 0,
      to: -s,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
  },
  h = {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: s,
        y: 0,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
    opacity: {
      value: 1,
      type: 'constant',
    },
    translateX: {
      from: 0,
      to: s,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
  },
  S = {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: 0,
        y: -p,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
    opacity: {
      value: 1,
      type: 'constant',
    },
    translateY: {
      from: 0,
      to: -p,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
  },
  F = {
    transformTranslate: {
      from: {
        x: 0,
        y: 0,
        z: 0,
      },
      to: {
        x: 0,
        y: p,
        z: 0,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
    opacity: {
      value: 1,
      type: 'constant',
    },
    translateY: {
      from: 0,
      to: p,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
  },
  z = {
    opacity: {
      value: 1,
      type: 'constant',
    },
    transformTranslate: {
      from: {
        x: s,
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
      round: u,
    },
    translateX: {
      from: s,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
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
  E = module11.default({}, z, {
    transformTranslate: {
      from: {
        x: -s,
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
      round: u,
    },
    translateX: {
      from: -s,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
  }),
  w = module11.default({}, z, {
    transformTranslate: {
      from: {
        y: p,
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
      round: u,
    },
    translateY: {
      from: p,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
  }),
  v = module11.default({}, z, {
    transformTranslate: {
      from: {
        y: -p,
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
      round: u,
    },
    translateY: {
      from: -p,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
  }),
  B = {
    transformTranslate: {
      from: {
        x: 0,
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
      round: u,
    },
    transformScale: {
      from: {
        x: 1,
        y: 1,
        z: 1,
      },
      to: {
        x: 0.95,
        y: 0.95,
        z: 1,
      },
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
    opacity: {
      from: 1,
      to: 0.3,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: false,
      round: 100,
    },
    scaleX: {
      from: 1,
      to: 0.95,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
    scaleY: {
      from: 1,
      to: 0.95,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
    },
  },
  D = {
    opacity: {
      value: 1,
      type: 'constant',
    },
    transformTranslate: {
      from: {
        x: 0,
        y: p,
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
      round: u,
    },
    translateY: {
      from: p,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
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
  I = {
    opacity: {
      from: 0,
      to: 1,
      min: 0.5,
      max: 1,
      type: 'linear',
      extrapolate: false,
      round: 100,
    },
    transformTranslate: {
      from: {
        x: 0,
        y: 100,
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
      round: u,
    },
    translateY: {
      from: 100,
      to: 0,
      min: 0,
      max: 1,
      type: 'linear',
      extrapolate: true,
      round: u,
    },
  },
  G = {
    frictionConstant: 1,
    frictionByDistance: 1.5,
  },
  H = {
    isDetachable: false,
    gestureDetectMovement: 2,
    notMoving: 0.3,
    directionRatio: 0.66,
    snapVelocity: 2,
    edgeHitWidth: 30,
    stillCompletionRatio: 0.6,
    fullDistance: s,
    direction: 'left-to-right',
  },
  b = module11.default({}, H, {
    direction: 'right-to-left',
  }),
  W = module11.default({}, H, {
    fullDistance: p,
    direction: 'bottom-to-top',
  }),
  j = module11.default({}, H, {
    fullDistance: p,
    direction: 'top-to-bottom',
  }),
  X = {
    ToTheStartIOS: x,
    ToTheEndIOS: f,
    FadeToTheStart: y,
    FadeToTheEnd: T,
    ToTheStart: c,
    ToTheEnd: h,
    FromTheStart: E,
    FromTheEnd: z,
    BaseStartToEndGesture: H,
    BaseEndToStartGesture: b,
  };

if (l)
  X = {
    ToTheStartIOS: f,
    ToTheEndIOS: x,
    FadeToTheStart: T,
    FadeToTheEnd: y,
    ToTheStart: h,
    ToTheEnd: c,
    FromTheStart: z,
    FromTheEnd: E,
    BaseStartToEndGesture: b,
    BaseEndToStartGesture: H,
  };
var Y = {
    gestures: {
      pop: X.BaseStartToEndGesture,
    },
    springFriction: 26,
    springTension: 200,
    defaultTransitionVelocity: 1.5,
    animationInterpolators: {
      into: module1028(X.FromTheEnd),
      out: module1028(X.FadeToTheStart),
    },
  },
  M = {
    PushFromRight: module11.default({}, Y, {
      animationInterpolators: {
        into: module1028(X.FromTheEnd),
        out: module1028(X.ToTheStartIOS),
      },
    }),
    PushFromLeft: module11.default({}, Y, {
      animationInterpolators: {
        into: module1028(X.FromTheStart),
        out: module1028(X.ToTheEndIOS),
      },
    }),
    FloatFromRight: module11.default({}, Y),
    FloatFromLeft: module11.default({}, Y, {
      gestures: {
        pop: X.BaseEndToStartGesture,
      },
      animationInterpolators: {
        into: module1028(X.FromTheStart),
        out: module1028(X.FadeToTheEnd),
      },
    }),
    FloatFromBottom: module11.default({}, Y, {
      gestures: {
        pop: module11.default({}, X.BaseStartToEndGesture, {
          edgeHitWidth: 150,
          direction: 'top-to-bottom',
          fullDistance: p,
        }),
      },
      animationInterpolators: {
        into: module1028(D),
        out: module1028(B),
      },
    }),
    FloatFromBottomAndroid: module11.default({}, Y, {
      gestures: null,
      defaultTransitionVelocity: 3,
      springFriction: 20,
      animationInterpolators: {
        into: module1028(I),
        out: module1028({
          opacity: {
            value: 1,
            type: 'constant',
          },
        }),
      },
    }),
    FadeAndroid: module11.default({}, Y, {
      gestures: null,
      animationInterpolators: {
        into: module1028({
          opacity: {
            from: 0,
            to: 1,
            min: 0.5,
            max: 1,
            type: 'linear',
            extrapolate: false,
            round: 100,
          },
        }),
        out: module1028({
          opacity: {
            from: 1,
            to: 0,
            min: 0,
            max: 0.5,
            type: 'linear',
            extrapolate: false,
            round: 100,
          },
        }),
      },
    }),
    SwipeFromLeft: module11.default({}, Y, {
      gestures: {
        jumpBack: module11.default({}, X.BaseEndToStartGesture, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
        jumpForward: module11.default({}, X.BaseStartToEndGesture, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
      },
      animationInterpolators: {
        into: module1028(X.FromTheStart),
        out: module1028(X.ToTheEnd),
      },
    }),
    HorizontalSwipeJump: module11.default({}, Y, {
      gestures: {
        jumpBack: module11.default({}, X.BaseStartToEndGesture, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
        jumpForward: module11.default({}, X.BaseEndToStartGesture, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
      },
      animationInterpolators: {
        into: module1028(X.FromTheEnd),
        out: module1028(X.ToTheStart),
      },
    }),
    HorizontalSwipeJumpFromRight: module11.default({}, Y, {
      gestures: {
        jumpBack: module11.default({}, X.BaseEndToStartGesture, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
        jumpForward: module11.default({}, X.BaseStartToEndGesture, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
        pop: X.BaseEndToStartGesture,
      },
      animationInterpolators: {
        into: module1028(X.FromTheStart),
        out: module1028(X.FadeToTheEnd),
      },
    }),
    HorizontalSwipeJumpFromLeft: module11.default({}, Y, {
      gestures: {
        jumpBack: module11.default({}, X.BaseEndToStartGesture, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
        jumpForward: module11.default({}, X.BaseStartToEndGesture, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
        pop: X.BaseEndToStartGesture,
      },
      animationInterpolators: {
        into: module1028(X.FromTheStart),
        out: module1028(X.ToTheEnd),
      },
    }),
    VerticalUpSwipeJump: module11.default({}, Y, {
      gestures: {
        jumpBack: module11.default({}, j, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
        jumpForward: module11.default({}, W, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
      },
      animationInterpolators: {
        into: module1028(w),
        out: module1028(S),
      },
    }),
    VerticalDownSwipeJump: module11.default({}, Y, {
      gestures: {
        jumpBack: module11.default({}, W, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
        jumpForward: module11.default({}, j, {
          overswipe: G,
          edgeHitWidth: null,
          isDetachable: true,
        }),
      },
      animationInterpolators: {
        into: module1028(v),
        out: module1028(F),
      },
    }),
  };
module.exports = M;
