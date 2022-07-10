module.exports = function (n, t, f) {
  for (var o = f - 1, u = n.length; ++o < u; ) if (n[o] === t) return o;

  return -1;
};
