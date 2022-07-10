var module791 = require('./791');

module.exports = function (t) {
  if ('string' == typeof t || module791(t)) return t;
  var f = t + '';
  return '0' == f && 1 / t == -1 / 0 ? '-0' : f;
};
