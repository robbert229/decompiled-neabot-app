var module766 = require('./766'),
  module787 = require('./787'),
  module798 = require('./798'),
  module790 = require('./790'),
  module784 = require('./784'),
  module785 = require('./785'),
  module797 = require('./797');

module.exports = function (_, p) {
  return module790(_) && module784(p)
    ? module785(module797(_), p)
    : function (u) {
        var c = module787(u, _);
        return undefined === c && c === p ? module798(u, _) : module766(p, c, 3);
      };
};
