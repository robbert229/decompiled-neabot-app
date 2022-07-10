var module13 = require('./13'),
  module14 = require('./14'),
  module15 = require('./15'),
  module17 = require('./17');

module.exports = function (u, p) {
  return module13(u) || module14(u, p) || module15(u, p) || module17();
};

module.exports.default = module.exports;
module.exports.__esModule = true;
