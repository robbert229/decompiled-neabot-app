var module701 = require('./701'),
  module706 = require('./706');

module.exports = function (o, u, c) {
  var f = u(o);
  return module706(o) ? f : module701(f, c(o));
};
