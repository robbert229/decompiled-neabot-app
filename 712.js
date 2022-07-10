var module713 = require('./713'),
  module714 = require('./714'),
  module708 = require('./708'),
  o = module714
    ? function (u, o) {
        return module714(u, 'toString', {
          configurable: true,
          enumerable: false,
          value: module713(o),
          writable: true,
        });
      }
    : module708;

module.exports = o;
