var module260 = require('./260'),
  React = require('react'),
  module564 = require('./564'),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  module1614 = require('./1614'),
  p = React.default.createContext({
    textStyle: {
      fontFamily: '',
      color: '',
    },
    topPosition: null,
    side: module1614.AdornmentSide.Left,
  });

exports.AffixAdornment = function (t) {
  var n = t.affix,
    l = t.side,
    u = t.textStyle,
    f = t.topPosition,
    s = t.onLayout,
    x = t.visible,
    y = t.paddingHorizontal;
  return React.default.createElement(
    p.Provider,
    {
      value: {
        side: l,
        textStyle: u,
        topPosition: f,
        onLayout: s,
        visible: x,
        paddingHorizontal: y,
      },
    },
    n
  );
};

var x = function (t) {
  var f = t.text,
    s = t.textStyle,
    x = t.theme,
    c = React.default.useContext(p),
    v = c.textStyle,
    A = c.onLayout,
    S = c.topPosition,
    b = c.side,
    P = c.visible,
    h = c.paddingHorizontal,
    L = module564
      .default(x.colors.text)
      .alpha(x.dark ? 0.7 : 0.54)
      .rgb()
      .string(),
    T = 'number' == typeof h ? h : 12,
    I = module260.default(
      {
        top: S,
      },
      b,
      T
    );
  return React.default.createElement(
    ReactNative.Animated.View,
    {
      style: [
        y.container,
        I,
        {
          opacity:
            (null == P
              ? undefined
              : P.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                })) || 1,
        },
      ],
      onLayout: A,
    },
    React.default.createElement(
      ReactNative.Text,
      {
        style: [
          {
            color: L,
          },
          v,
          s,
        ],
      },
      f
    )
  );
};

exports.TextInputAffix = x;
x.displayName = 'TextInput.Affix';
var y = ReactNative.StyleSheet.create({
    container: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  c = module1495.withTheme(x);
exports.default = c;
