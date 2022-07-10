require('./3');

var module278 = require('@babel/runtime/helpers/interopRequireDefault')(require('./278')),
  module279 = require('./279'),
  module140 = require('./140'),
  module280 = require('./280'),
  s = new module140(module278.default);

s.dismiss = module280;

s.scheduleLayoutAnimation = function (n) {
  var u = n.duration,
    o = n.easing;
  if (null != u && 0 !== u)
    module279.configureNext({
      duration: u,
      update: {
        duration: u,
        type: (null != o && module279.Types[o]) || 'keyboard',
      },
    });
};

module.exports = s;
