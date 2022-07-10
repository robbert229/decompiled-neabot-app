var module901 = require('./901'),
  module902 = require('./902');

module.exports = function (u, c) {
  return u && !module901(c) ? module902(u, c) : c;
};
