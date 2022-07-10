for (var t = [], n = 0; n < 256; ++n) t[n] = (n + 256).toString(16).substr(1);

module.exports = function (n, o) {
  var u = o || 0,
    f = t;
  return (
    f[n[u++]] +
    f[n[u++]] +
    f[n[u++]] +
    f[n[u++]] +
    '-' +
    f[n[u++]] +
    f[n[u++]] +
    '-' +
    f[n[u++]] +
    f[n[u++]] +
    '-' +
    f[n[u++]] +
    f[n[u++]] +
    '-' +
    f[n[u++]] +
    f[n[u++]] +
    f[n[u++]] +
    f[n[u++]] +
    f[n[u++]] +
    f[n[u++]]
  );
};
