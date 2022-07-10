var module802 = require('./802'),
  module803 = require('./803'),
  module790 = require('./790'),
  module797 = require('./797');

module.exports = function (c) {
  return module790(c) ? module802(module797(c)) : module803(c);
};
