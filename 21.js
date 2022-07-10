var module16 = require('./16');

module.exports = function (o) {
  if (Array.isArray(o)) return module16(o);
};

module.exports.default = module.exports;
module.exports.__esModule = true;
