var module1035 = require('./1035');

module.exports = function (t) {
  var o,
    s = {};

  for (o in ((t instanceof Object && !Array.isArray(t)) || module1035(false), t)) t.hasOwnProperty(o) && (s[o] = o);

  return s;
};
