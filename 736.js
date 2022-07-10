var module11 = require('./11');

function t(n, t, _) {
  return {
    data: _ ? n[_]() : n,
    __serializedType__: t,
  };
}

module.exports = {
  mark: t,
  extract: function (t, _) {
    return {
      data: module11({}, t),
      __serializedType__: _,
    };
  },
  refer: function (n, _, f, u) {
    var o = t(n, _, f);
    if (!u) return o;

    for (var c = 0; c < u.length; c++) {
      var s = u[c];

      if ('function' == typeof s && n instanceof s) {
        o.__serializedRef__ = c;
        return o;
      }
    }

    return o;
  },
};
