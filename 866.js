module.exports = function (n, t, f) {
  for (var o = 0, u = f.length; o < u; ) {
    if (n(t, f[o])) return true;
    o += 1;
  }

  return false;
};
