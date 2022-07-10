var module760 = require('./760'),
  module768 = require('./768'),
  module770 = require('./770'),
  module773 = require('./773'),
  module779 = require('./779'),
  module706 = require('./706'),
  module748 = require('./748'),
  module751 = require('./751'),
  l = 1,
  v = '[object Arguments]',
  w = '[object Array]',
  b = '[object Object]',
  j = Object.prototype.hasOwnProperty;

module.exports = function (s, y, O, A, h, x) {
  var P = module706(s),
    k = module706(y),
    q = P ? w : module779(s),
    z = k ? w : module779(y),
    B = (q = q == v ? b : q) == b,
    C = (z = z == v ? b : z) == b,
    D = q == z;

  if (D && module748(s)) {
    if (!module748(y)) return false;
    P = true;
    B = false;
  }

  if (D && !B) {
    if (!x) x = new module760();
    return P || module751(s) ? module768(s, y, O, A, h, x) : module770(s, y, q, O, A, h, x);
  }

  if (!(O & l)) {
    var E = B && j.call(s, '__wrapped__'),
      F = C && j.call(y, '__wrapped__');

    if (E || F) {
      var G = E ? s.value() : s,
        H = F ? y.value() : y;
      if (!x) x = new module760();
      return h(G, H, O, A, x);
    }
  }

  return !!D && (x || (x = new module760()), module773(s, y, O, A, h, x));
};
