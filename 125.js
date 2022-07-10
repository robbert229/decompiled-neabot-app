var n,
  module126 = require('./126');

n = module126.now
  ? function () {
      return module126.now();
    }
  : function () {
      return Date.now();
    };
module.exports = n;
