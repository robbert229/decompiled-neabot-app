function t(t) {
  return {
    bottom: t,
    left: t,
    right: t,
    top: t,
  };
}

exports.createSquare = t;

exports.normalizeRect = function (n) {
  return 'number' == typeof n ? t(n) : n;
};
