var module747 = require('./747'),
  module703 = require('./703'),
  module706 = require('./706'),
  module748 = require('./748'),
  module750 = require('./750'),
  module751 = require('./751'),
  l = Object.prototype.hasOwnProperty;

module.exports = function (s, u) {
  var b = module706(s),
    c = !b && module703(s),
    y = !b && !c && module748(s),
    v = !b && !c && !y && module751(s),
    O = b || c || y || v,
    _ = O ? module747(s.length, String) : [],
    j = _.length;

  for (var w in s)
    (!u && !l.call(s, w)) ||
      (O && ('length' == w || (y && ('offset' == w || 'parent' == w)) || (v && ('buffer' == w || 'byteLength' == w || 'byteOffset' == w)) || module750(w, j))) ||
      _.push(w);

  return _;
};
