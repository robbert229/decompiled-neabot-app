var module659 = require('./659'),
  module705 = require('./705'),
  n = '[object Symbol]';

module.exports = function (b) {
  return 'symbol' == typeof b || (module705(b) && module659(b) == n);
};
