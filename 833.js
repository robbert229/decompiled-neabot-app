var module828 = require('./828'),
  module830 = require('./830'),
  module829 = require('./829'),
  module834 = require('./834'),
  c = module829(function (o, c) {
    return 1 === o ? module830(c) : module828(o, module834(o, [], c));
  });

module.exports = c;
