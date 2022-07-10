var module789 = require('./789'),
  module797 = require('./797');

module.exports = function (t, u) {
  for (var f = 0, l = (u = module789(u, t)).length; null != t && f < l; ) t = t[module797(u[f++])];

  return f && f == l ? t : undefined;
};
