module.exports = function (o) {
  if (('undefined' != typeof Symbol && null != o[Symbol.iterator]) || null != o['@@iterator']) return Array.from(o);
};

module.exports.default = module.exports;
module.exports.__esModule = true;
