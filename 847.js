var module846 = require('./846'),
  module838 = require('./838')(
    module846('slice', function (t, c, n) {
      return Array.prototype.slice.call(n, t, c);
    })
  );

module.exports = module838;
