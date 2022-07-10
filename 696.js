module.exports = function (n, t, u) {
  for (var f = -1, o = null == n ? 0 : n.length; ++f < o; ) if (u(t, n[f])) return true;

  return false;
};
