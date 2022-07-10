require('./48');

var module64 = require('./64');

module.exports = function (t) {
  if (undefined === t || null === t) return t;
  var o = module64(t);

  if (null !== o && undefined !== o) {
    if ('object' == typeof o) {
      var module65 = require('./65').processColorObject(o);

      if (null != module65) return module65;
    }

    if ('number' != typeof o) return null;
    else {
      o = ((o << 24) | (o >>> 8)) >>> 0;
      o |= 0;
      return o;
    }
  }
};
