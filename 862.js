var module863 = require('./863');

module.exports = function (t, f, u) {
  var o, c;
  if ('function' == typeof t.indexOf)
    switch (typeof f) {
      case 'number':
        if (0 === f) {
          for (o = 1 / f; u < t.length; ) {
            if (0 === (c = t[u]) && 1 / c === o) return u;
            u += 1;
          }

          return -1;
        }

        if (f != f) {
          for (; u < t.length; ) {
            if ('number' == typeof (c = t[u]) && c != c) return u;
            u += 1;
          }

          return -1;
        }

        return t.indexOf(f, u);

      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return t.indexOf(f, u);

      case 'object':
        if (null === f) return t.indexOf(f, u);
    }

  for (; u < t.length; ) {
    if (module863(t[u], f)) return u;
    u += 1;
  }

  return -1;
};
