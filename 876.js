var module828 = require('./828'),
  module830 = require('./830'),
  module877 = require('./877'),
  module883 = require('./883'),
  module837 = require('./837'),
  p = module830(function (t) {
    var p = module837(
      module883,
      0,
      module877(function (n) {
        return n[0].length;
      }, t)
    );
    return module828(p, function () {
      for (var n = 0; n < t.length; ) {
        if (t[n][0].apply(this, arguments)) return t[n][1].apply(this, arguments);
        n += 1;
      }
    });
  });

module.exports = p;
