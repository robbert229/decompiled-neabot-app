module.exports = function (n) {
  return function (t) {
    return n.apply(null, t);
  };
};
