var module678 = require('./678');

module.exports = function (t, f) {
  for (var o = t.length; o--; ) if (module678(t[o][0], f)) return o;

  return -1;
};
