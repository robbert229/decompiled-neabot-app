exports.useDynamicValue = function (t, n) {
  var l = module1197.useColorSchemeContext();
  return arguments.length > 1 ? ('dark' === l ? n : t) : t[l];
};

var module24 = require('./24'),
  module1197 = require('./1197');

exports.DynamicValue = function t(u, l) {
  module24.default(this, t);
  this.light = u;
  this.dark = l;
};
