module.exports = function (n, t, f, o) {
  for (var u = n.length, c = f + (o ? 1 : -1); o ? c-- : ++c < u; ) if (t(n[c], c, n)) return c;

  return -1;
};
