var module568 = require('./568'),
  n = Array.prototype.concat,
  o = Array.prototype.slice,
  c = (module.exports = function (c) {
    for (var u = [], p = 0, l = c.length; p < l; p++) {
      var f = c[p];
      if (module568(f)) u = n.call(u, o.call(f));
      else u.push(f);
    }

    return u;
  });

c.wrap = function (t) {
  return function () {
    return t(c(arguments));
  };
};
