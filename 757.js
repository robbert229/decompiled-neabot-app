var module758 = require('./758'),
  module786 = require('./786'),
  module708 = require('./708'),
  module706 = require('./706'),
  module801 = require('./801');

module.exports = function (c) {
  return 'function' == typeof c ? c : null == c ? module708 : 'object' == typeof c ? (module706(c) ? module786(c[0], c[1]) : module758(c)) : module801(c);
};
