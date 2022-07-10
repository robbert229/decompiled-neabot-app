var module886 = require('./886'),
  module893 = require('./893');

module.exports = function (c, o, u) {
  var f = this || module893;
  module886.forEach(u, function (t) {
    c = t.call(f, c, o);
  });
  return c;
};
