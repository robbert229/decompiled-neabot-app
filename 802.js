module.exports = function (n) {
  return function (t) {
    return null == t ? undefined : t[n];
  };
};
