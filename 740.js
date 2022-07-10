var module741 = require('./741'),
  module742 = require('./742'),
  module757 = require('./757');

module.exports = function (u, c) {
  var f = {};
  c = module757(c, 3);
  module742(u, function (t, o, u) {
    module741(f, o, c(t, o, u));
  });
  return f;
};
