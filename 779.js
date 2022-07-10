var module780 = require('./780'),
  module682 = require('./682'),
  module781 = require('./781'),
  module722 = require('./722'),
  module782 = require('./782'),
  module659 = require('./659'),
  module668 = require('./668'),
  u = module668(module780),
  w = module668(module682),
  f = module668(module781),
  p = module668(module722),
  v = module668(module782),
  M = module659;

if (
  (module780 && '[object DataView]' != M(new module780(new ArrayBuffer(1)))) ||
  (module682 && '[object Map]' != M(new module682())) ||
  (module781 && '[object Promise]' != M(module781.resolve())) ||
  (module722 && '[object Set]' != M(new module722())) ||
  (module782 && '[object WeakMap]' != M(new module782()))
)
  M = function (t) {
    var c = module659(t),
      o = '[object Object]' == c ? t.constructor : undefined,
      n = o ? module668(o) : '';
    if (n)
      switch (n) {
        case u:
          return '[object DataView]';

        case w:
          return '[object Map]';

        case f:
          return '[object Promise]';

        case p:
          return '[object Set]';

        case v:
          return '[object WeakMap]';
      }
    return c;
  };
module.exports = M;
