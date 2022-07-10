var module706 = require('./706'),
  module790 = require('./790'),
  module792 = require('./792'),
  module795 = require('./795');

module.exports = function (c, f) {
  return module706(c) ? c : module790(c, f) ? [c] : module792(module795(c));
};
