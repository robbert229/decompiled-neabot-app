var module38 = require('./38').default,
  module39 = require('./39');

module.exports = function (n, u) {
  if (u && ('object' === module38(u) || 'function' == typeof u)) return u;
  if (undefined !== u) throw new TypeError('Derived constructors may only return object or undefined');
  return module39(n);
};

module.exports.default = module.exports;
module.exports.__esModule = true;
