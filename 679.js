var module677 = require('./677');

module.exports = function (_) {
  var n = this.__data__,
    o = module677(n, _);
  return o < 0 ? undefined : n[o][1];
};
