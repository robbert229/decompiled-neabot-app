exports.default = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : module1520.default.colors.surface;

  if (f(t)) {
    var u = [0, 1, 2, 3, 8, 24];
    return t.interpolate({
      inputRange: u,
      outputRange: u.map(function (t) {
        return l(n, t);
      }),
    });
  }

  return l(n, t);
};

var module564 = require('./564'),
  ReactNative = require('react-native'),
  module1520 = require('./1520'),
  f = function (t) {
    return t instanceof ReactNative.Animated.Value;
  };

function l(t) {
  var ReactNative,
    o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1;
  ReactNative = o >= 1 && o <= 24 ? c[o] : o > 24 ? c[24] : c[1];
  return module564
    .default(t)
    .mix(module564.default('white'), 0.01 * ReactNative)
    .hex();
}

var c = {
  1: 5,
  2: 7,
  3: 8,
  4: 9,
  5: 10,
  6: 11,
  7: 11.5,
  8: 12,
  9: 12.5,
  10: 13,
  11: 13.5,
  12: 14,
  13: 14.25,
  14: 14.5,
  15: 14.75,
  16: 15,
  17: 15.12,
  18: 15.24,
  19: 15.36,
  20: 15.48,
  21: 15.6,
  22: 15.72,
  23: 15.84,
  24: 16,
};
