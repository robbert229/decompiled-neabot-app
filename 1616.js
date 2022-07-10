var module11 = require('./11'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1589 = require('./1589'),
  p = function (t) {
    var p = t.parentState,
      s = t.labelBackground,
      f = t.labelProps,
      b = f.label,
      c = f.error,
      y = f.onLayoutAnimatedText,
      v = f.hasActiveOutline,
      R = f.activeColor,
      S = f.placeholderStyle,
      O = f.baseLabelTranslateX,
      h = f.baseLabelTranslateY,
      L = f.font,
      P = f.fontSize,
      X = f.fontWeight,
      E = f.placeholderOpacity,
      T = f.wiggleOffsetX,
      _ = f.labelScale,
      A = f.topPosition,
      C = f.paddingOffset,
      w = f.placeholderColor,
      z = f.errorColor,
      W = f.labelTranslationXOffset,
      Y = {
        transform: [
          {
            translateX: p.labeled.interpolate({
              inputRange: [0, 1],
              outputRange: [O, W || 0],
            }),
          },
        ],
      },
      j = module11.default({}, L, {
        fontSize: P,
        fontWeight: X,
        transform: [
          {
            translateX: p.error.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, p.value && c ? T : 0, 0],
            }),
          },
          {
            translateY: p.labeled.interpolate({
              inputRange: [0, 1],
              outputRange: [h, 0],
            }),
          },
          {
            scale: p.labeled.interpolate({
              inputRange: [0, 1],
              outputRange: [_, 1],
            }),
          },
        ],
      });
    return b
      ? React.default.createElement(
          ReactNative.Animated.View,
          {
            pointerEvents: 'none',
            style: [
              ReactNative.StyleSheet.absoluteFill,
              {
                opacity: p.value || p.focused ? (p.labelLayout.measured ? 1 : 0) : 1,
              },
              Y,
            ],
          },
          null == s
            ? undefined
            : s({
                parentState: p,
                labelStyle: j,
                labelProps: t.labelProps,
              }),
          React.default.createElement(
            module1589.default,
            {
              onLayout: y,
              style: [
                S,
                {
                  top: A,
                },
                j,
                C || {},
                {
                  color: R,
                  opacity: p.labeled.interpolate({
                    inputRange: [0, 1],
                    outputRange: [v ? 1 : 0, 0],
                  }),
                },
              ],
              numberOfLines: 1,
            },
            b
          ),
          React.default.createElement(
            module1589.default,
            {
              style: [
                S,
                {
                  top: A,
                },
                j,
                C,
                {
                  color: c && z ? z : w,
                  opacity: E,
                },
              ],
              numberOfLines: 1,
            },
            b
          )
        )
      : null;
  };

exports.default = p;
