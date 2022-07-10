var module828 = require('./828'),
  module829 = require('./829')(function (t, u) {
    return module828(t.length, function () {
      return t.apply(u, arguments);
    });
  });

module.exports = module829;
