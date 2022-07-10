var module34 = require('./34'),
  module96 = require('./96'),
  module37 = require('./37');

module.exports = function (n) {
  var u = module96();
  return function () {
    var o,
      c = module34(n);

    if (u) {
      var f = module34(this).constructor;
      o = Reflect.construct(c, arguments, f);
    } else o = c.apply(this, arguments);

    return module37(this, o);
  };
};

module.exports.default = module.exports;
module.exports.__esModule = true;
