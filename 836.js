module.exports = function (n, t) {
  return function () {
    var u = this;
    return n.apply(u, arguments).then(function (n) {
      return t.call(u, n);
    });
  };
};
