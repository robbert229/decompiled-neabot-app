var module849 = require('./849');

module.exports = function (o) {
  if (null == o) throw new TypeError('Cannot convert undefined or null to object');

  for (var t = Object(o), f = 1, l = arguments.length; f < l; ) {
    var u = arguments[f];
    if (null != u) for (var c in u) module849(c, u) && (t[c] = u[c]);
    f += 1;
  }

  return t;
};
