for (
  var module1046 = require('./1046'),
    module1028 = require('./1028'),
    module1047 = require('./1047'),
    n = module1046.General.NavBarHeight,
    c = n,
    l = {
      position: 'absolute',
      flexDirection: 'row',
      top: 0,
      width: 49,
      height: c,
      backgroundColor: 'transparent',
    },
    y = {
      width: 40,
      height: c,
    },
    h = {
      width: 9,
      height: c,
    },
    f = {
      position: 'absolute',
      top: 0,
      height: c,
      backgroundColor: 'transparent',
      alignItems: 'flex-start',
    },
    u = module1047(f, {
      left: 0,
      right: 0,
    }),
    I = {
      position: 'absolute',
      top: 0,
      right: 0,
      overflow: 'hidden',
      opacity: 1,
      height: c,
      backgroundColor: 'transparent',
    },
    s = [],
    T = [],
    b = [],
    C = 0;
  C < 10;
  C++
) {
  var x = 49 * C + 8;
  s[C] = {
    Crumb: module1047(l, {
      left: x,
    }),
    Icon: module1047(y, {
      opacity: 0.6,
    }),
    Separator: module1047(h, {
      opacity: 1,
    }),
    Title: module1047(f, {
      left: x,
      opacity: 0,
    }),
    RightItem: module1047(I, {
      opacity: 0,
    }),
  };
  T[C] = {
    Crumb: module1047(l, {
      left: x,
    }),
    Icon: module1047(y, {
      opacity: 1,
    }),
    Separator: module1047(h, {
      opacity: 0,
    }),
    Title: module1047(f, {
      left: x + 40,
      opacity: 1,
    }),
    RightItem: module1047(I, {
      opacity: 1,
    }),
  };
  var R = x + 50;
  b[C] = {
    Crumb: module1047(l, {
      left: R,
    }),
    Icon: module1047(y, {
      opacity: 0,
    }),
    Separator: module1047(h, {
      opacity: 0,
    }),
    Title: module1047(f, {
      left: R + 40,
      opacity: 0,
    }),
    RightItem: module1047(I, {
      opacity: 0,
    }),
  };
}

T[0] = {
  Crumb: module1047(l, {
    left: 57,
  }),
  Icon: module1047(y, {
    opacity: 0,
  }),
  Separator: module1047(h, {
    opacity: 0,
  }),
  Title: module1047(u, {
    opacity: 1,
  }),
  RightItem: T[0].RightItem,
};
s[0].Title = module1047(u, {
  opacity: 0,
});
b[0].Title = module1047(u, {
  opacity: 0,
});

var S = function (t, p) {
    return {
      Crumb: module1028({
        left: {
          type: 'linear',
          from: t.Crumb.left,
          to: p.Crumb.left,
          min: 0,
          max: 1,
          extrapolate: true,
        },
      }),
      Icon: module1028({
        opacity: {
          type: 'linear',
          from: t.Icon.opacity,
          to: p.Icon.opacity,
          min: 0,
          max: 1,
        },
      }),
      Separator: module1028({
        opacity: {
          type: 'linear',
          from: t.Separator.opacity,
          to: p.Separator.opacity,
          min: 0,
          max: 1,
        },
      }),
      Title: module1028({
        opacity: {
          type: 'linear',
          from: t.Title.opacity,
          to: p.Title.opacity,
          min: 0,
          max: 1,
        },
        left: {
          type: 'linear',
          from: t.Title.left,
          to: p.Title.left,
          min: 0,
          max: 1,
          extrapolate: true,
        },
      }),
      RightItem: module1028({
        opacity: {
          type: 'linear',
          from: t.RightItem.opacity,
          to: p.RightItem.opacity,
          min: 0,
          max: 1,
          round: 100,
        },
      }),
    };
  },
  v = T.map(function (t, o) {
    return {
      RightToCenter: S(b[o], T[o]),
      CenterToLeft: S(T[o], s[o]),
      RightToLeft: S(b[o], s[o]),
    };
  });

module.exports = {
  Interpolators: v,
  Left: s,
  Center: T,
  Right: b,
  IconWidth: 40,
  IconHeight: n,
  SeparatorWidth: 9,
  SeparatorHeight: n,
};
