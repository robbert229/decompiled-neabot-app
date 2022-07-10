exports.uniq = function (n) {
  return n.filter(function (t, u) {
    return null != t && n.indexOf(t) === u;
  });
};
