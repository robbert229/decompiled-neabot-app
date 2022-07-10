var module660 = require('./660'),
  module771 = require('./771'),
  module678 = require('./678'),
  module768 = require('./768'),
  module772 = require('./772'),
  module724 = require('./724'),
  f = 1,
  u = 2,
  j = '[object Boolean]',
  y = '[object Date]',
  l = '[object Error]',
  v = '[object Map]',
  h = '[object Number]',
  p = '[object RegExp]',
  w = '[object Set]',
  L = '[object String]',
  O = '[object Symbol]',
  S = '[object ArrayBuffer]',
  x = '[object DataView]',
  z = module660 ? module660.prototype : undefined,
  B = z ? z.valueOf : undefined;

module.exports = function (t, z, D, E, _, A, M) {
  switch (D) {
    case x:
      if (t.byteLength != z.byteLength || t.byteOffset != z.byteOffset) return false;
      t = t.buffer;
      z = z.buffer;

    case S:
      return !(t.byteLength != z.byteLength || !A(new module771(t), new module771(z)));

    case j:
    case y:
    case h:
      return module678(+t, +z);

    case l:
      return t.name == z.name && t.message == z.message;

    case p:
    case L:
      return t == z + '';

    case v:
      var N = module772;

    case w:
      var R = E & f;
      if ((N || (N = module724), t.size != z.size && !R)) return false;
      var V = M.get(t);
      if (V) return V == z;
      E |= u;
      M.set(t, z);
      var k = module768(N(t), N(z), E, _, A, M);
      M.delete(t);
      return k;

    case O:
      if (B) return B.call(t) == B.call(z);
  }

  return false;
};
