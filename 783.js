var module784 = require('./784'),
  module745 = require('./745');

module.exports = function (o) {
  for (var f = module745(o), u = f.length; u--; ) {
    var v = f[u],
      c = o[v];
    f[u] = [v, c, module784(c)];
  }

  return f;
};
