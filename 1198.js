var module24 = require('./24'),
  ReactNative = require('react-native'),
  module1199 = require('./1199');

function y(t, n) {
  var c = {};

  for (var y in t) {
    var u = t[y],
      S = {};

    for (var h in u) {
      var v = u[h];

      if (v instanceof module1199.DynamicValue) {
        true;
        S[h] = v[n];
      } else S[h] = v;
    }

    c[y] = S;
  }

  return c;
}

exports.DynamicStyleSheet = function t(l) {
  module24.default(this, t);
  this.dark = ReactNative.StyleSheet.create(y(l, 'dark'));
  this.light = ReactNative.StyleSheet.create(y(l, 'light'));
};

var u = module1199.useDynamicValue;
exports.useDynamicStyleSheet = u;
