var module650 = require('./650'),
  module691 = require('./691'),
  module696 = require('./696'),
  module699 = require('./699'),
  module721 = require('./721'),
  module724 = require('./724'),
  h = 200;

module.exports = function (o, p, v) {
  var c = -1,
    _ = module691,
    w = o.length,
    x = true,
    b = [],
    j = b;

  if (v) {
    x = false;
    _ = module696;
  } else if (w >= h) {
    var k = p ? null : module721(o);
    if (k) return module724(k);
    x = false;
    _ = module699;
    j = new module650();
  } else j = p ? [] : b;

  e: for (; ++c < w; ) {
    var q = o[c],
      y = p ? p(q) : q;

    if (((q = v || 0 !== q ? q : 0), x && y == y)) {
      for (var z = j.length; z--; ) if (j[z] === y) continue e;

      if (p) j.push(y);
      b.push(q);
    } else _(j, y, v) || (j !== b && j.push(y), b.push(q));
  }

  return b;
};
