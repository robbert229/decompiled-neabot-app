module.exports = function (n, t) {
  for (var o = 0, f = t.length, u = Array(f); o < f; ) {
    u[o] = n(t[o]);
    o += 1;
  }

  return u;
};
