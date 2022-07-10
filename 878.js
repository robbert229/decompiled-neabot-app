var module841 = require('./841'),
  module879 = require('./879');

module.exports = function (p, f, l) {
  return function () {
    if (0 === arguments.length) return l();
    var o = Array.prototype.slice.call(arguments, 0),
      u = o.pop();

    if (!module841(u)) {
      for (var c = 0; c < p.length; ) {
        if ('function' == typeof u[p[c]]) return u[p[c]].apply(u, o);
        c += 1;
      }

      if (module879(u)) return f.apply(null, o)(u);
    }

    return l.apply(this, arguments);
  };
};
