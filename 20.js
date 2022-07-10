var module21 = require('./21'),
  module22 = require('./22'),
  module15 = require('./15'),
  module23 = require('./23');

module.exports = function (u) {
  return module21(u) || module22(u) || module15(u) || module23();
};

module.exports.default = module.exports;
module.exports.__esModule = true;
