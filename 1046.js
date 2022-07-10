var module1028 = require('./1028'),
  module1047 = require('./1047'),
  n = {
    Title: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'flex-start',
      height: 56,
      backgroundColor: 'transparent',
      marginLeft: 72,
    },
    LeftButton: {
      position: 'absolute',
      top: 0,
      left: 4,
      overflow: 'hidden',
      height: 56,
      backgroundColor: 'transparent',
    },
    RightButton: {
      position: 'absolute',
      top: 0,
      right: 4,
      overflow: 'hidden',
      alignItems: 'flex-end',
      height: 56,
      backgroundColor: 'transparent',
    },
  },
  l = {
    Left: {
      Title: module1047(n.Title, {
        opacity: 0,
      }),
      LeftButton: module1047(n.LeftButton, {
        opacity: 0,
      }),
      RightButton: module1047(n.RightButton, {
        opacity: 0,
      }),
    },
    Center: {
      Title: module1047(n.Title, {
        opacity: 1,
      }),
      LeftButton: module1047(n.LeftButton, {
        opacity: 1,
      }),
      RightButton: module1047(n.RightButton, {
        opacity: 1,
      }),
    },
    Right: {
      Title: module1047(n.Title, {
        opacity: 0,
      }),
      LeftButton: module1047(n.LeftButton, {
        opacity: 0,
      }),
      RightButton: module1047(n.RightButton, {
        opacity: 0,
      }),
    },
  },
  f = 100;

function u(o, n) {
  return {
    Title: module1028({
      opacity: {
        type: 'linear',
        from: o.Title.opacity,
        to: n.Title.opacity,
        min: 0,
        max: 1,
      },
      left: {
        type: 'linear',
        from: o.Title.left,
        to: n.Title.left,
        min: 0,
        max: 1,
        extrapolate: true,
      },
    }),
    LeftButton: module1028({
      opacity: {
        type: 'linear',
        from: o.LeftButton.opacity,
        to: n.LeftButton.opacity,
        min: 0,
        max: 1,
        round: f,
      },
      left: {
        type: 'linear',
        from: o.LeftButton.left,
        to: n.LeftButton.left,
        min: 0,
        max: 1,
      },
    }),
    RightButton: module1028({
      opacity: {
        type: 'linear',
        from: o.RightButton.opacity,
        to: n.RightButton.opacity,
        min: 0,
        max: 1,
        round: f,
      },
      left: {
        type: 'linear',
        from: o.RightButton.left,
        to: n.RightButton.left,
        min: 0,
        max: 1,
        extrapolate: true,
      },
    }),
  };
}

var p = {
  RightToCenter: u(l.Right, l.Center),
  CenterToLeft: u(l.Center, l.Left),
  RightToLeft: u(l.Right, l.Left),
};
module.exports = {
  General: {
    NavBarHeight: 56,
    StatusBarHeight: 0,
    TotalNavHeight: 56,
  },
  Interpolators: p,
  Stages: l,
};
