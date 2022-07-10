var module660 = require('./660'),
  module703 = require('./703'),
  module706 = require('./706'),
  c = module660 ? module660.isConcatSpreadable : undefined;

module.exports = function (n) {
  return module706(n) || module703(n) || !!(c && n && n[c]);
};
