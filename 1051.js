var ReactNative = require('react-native'),
  module1028 = require('./1028'),
  module1047 = require('./1047'),
  l = ReactNative.Dimensions.get('window').width,
  f = {
    Title: {
      position: 'absolute',
      top: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
      height: 44,
      backgroundColor: 'transparent',
    },
    LeftButton: {
      position: 'absolute',
      top: 20,
      left: 0,
      overflow: 'hidden',
      opacity: 1,
      height: 44,
      backgroundColor: 'transparent',
    },
    RightButton: {
      position: 'absolute',
      top: 20,
      right: 0,
      overflow: 'hidden',
      opacity: 1,
      alignItems: 'flex-end',
      height: 44,
      backgroundColor: 'transparent',
    },
  },
  p = {
    Left: {
      Title: module1047(f.Title, {
        left: -l / 2,
        opacity: 0,
      }),
      LeftButton: module1047(f.LeftButton, {
        left: 0,
        opacity: 0,
      }),
      RightButton: module1047(f.RightButton, {
        opacity: 0,
      }),
    },
    Center: {
      Title: module1047(f.Title, {
        left: 0,
        opacity: 1,
      }),
      LeftButton: module1047(f.LeftButton, {
        left: 0,
        opacity: 1,
      }),
      RightButton: module1047(f.RightButton, {
        opacity: 1,
      }),
    },
    Right: {
      Title: module1047(f.Title, {
        left: l / 2,
        opacity: 0,
      }),
      LeftButton: module1047(f.LeftButton, {
        left: 0,
        opacity: 0,
      }),
      RightButton: module1047(f.RightButton, {
        opacity: 0,
      }),
    },
  },
  u = 100;

function h(t, n) {
  return {
    Title: module1028({
      opacity: {
        type: 'linear',
        from: t.Title.opacity,
        to: n.Title.opacity,
        min: 0,
        max: 1,
      },
      left: {
        type: 'linear',
        from: t.Title.left,
        to: n.Title.left,
        min: 0,
        max: 1,
        extrapolate: true,
      },
    }),
    LeftButton: module1028({
      opacity: {
        type: 'linear',
        from: t.LeftButton.opacity,
        to: n.LeftButton.opacity,
        min: 0,
        max: 1,
        round: u,
      },
      left: {
        type: 'linear',
        from: t.LeftButton.left,
        to: n.LeftButton.left,
        min: 0,
        max: 1,
      },
    }),
    RightButton: module1028({
      opacity: {
        type: 'linear',
        from: t.RightButton.opacity,
        to: n.RightButton.opacity,
        min: 0,
        max: 1,
        round: u,
      },
      left: {
        type: 'linear',
        from: t.RightButton.left,
        to: n.RightButton.left,
        min: 0,
        max: 1,
        extrapolate: true,
      },
    }),
  };
}

var c = {
  RightToCenter: h(p.Right, p.Center),
  CenterToLeft: h(p.Center, p.Left),
  RightToLeft: h(p.Right, p.Left),
};
module.exports = {
  General: {
    NavBarHeight: 44,
    StatusBarHeight: 20,
    TotalNavHeight: 64,
  },
  Interpolators: c,
  Stages: p,
};
