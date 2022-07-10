var module650 = require('./650'),
  module691 = require('./691'),
  module696 = require('./696'),
  module697 = require('./697'),
  module698 = require('./698'),
  module699 = require('./699'),
  h = 200;

module.exports = function (s, v, c, p) {
  var _ = -1,
    w = module691,
    x = true,
    b = s.length,
    j = [],
    k = v.length;

  if (!b) return j;
  if (c) v = module697(v, module698(c));

  if (p) {
    w = module696;
    x = false;
  } else if (v.length >= h) {
    w = module699;
    x = false;
    v = new module650(v);
  }

  n: for (; ++_ < b; ) {
    var q = s[_],
      y = null == c ? q : c(q);

    if (((q = p || 0 !== q ? q : 0), x && y == y)) {
      for (var z = k; z--; ) if (v[z] === y) continue n;

      j.push(q);
    } else w(v, y, p) || j.push(q);
  }

  return j;
};
