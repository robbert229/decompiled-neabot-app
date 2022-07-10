var module828 = require('./828'),
  module829 = require('./829');

module.exports = function (u) {
  return module829(function (t, o) {
    return module828(0 ** (t.length - o.length), function () {
      return t.apply(this, u(o, arguments));
    });
  });
};
