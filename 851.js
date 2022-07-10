var module846 = require('./846'),
  module829 = require('./829')(
    module846('forEach', function (n, o) {
      for (var t = o.length, f = 0; f < t; ) {
        n(o[f]);
        f += 1;
      }

      return o;
    })
  );

module.exports = module829;
