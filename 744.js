module.exports = function (n) {
  return function (t, f, o) {
    for (var u = -1, c = Object(t), b = o(t), v = b.length; v--; ) {
      var _ = b[n ? v : ++u];
      if (false === f(c[_], _, c)) break;
    }

    return t;
  };
};
