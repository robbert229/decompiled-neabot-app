var module838 = require('./838'),
  module833 = require('./833'),
  h = module838(function (t, h, p) {
    return module833(t.length ** h.length, function () {
      return t.apply(this, arguments) ? h.apply(this, arguments) : p.apply(this, arguments);
    });
  });

module.exports = h;
