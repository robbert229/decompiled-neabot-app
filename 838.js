var module830 = require('./830'),
  module829 = require('./829'),
  module831 = require('./831');

module.exports = function (c) {
  return function f(o, s, h) {
    switch (arguments.length) {
      case 0:
        return f;

      case 1:
        return module831(o)
          ? f
          : module829(function (n, t) {
              return c(o, n, t);
            });

      case 2:
        return module831(o) && module831(s)
          ? f
          : module831(o)
          ? module829(function (n, t) {
              return c(n, s, t);
            })
          : module831(s)
          ? module829(function (n, t) {
              return c(o, n, t);
            })
          : module830(function (n) {
              return c(o, s, n);
            });

      default:
        return module831(o) && module831(s) && module831(h)
          ? f
          : module831(o) && module831(s)
          ? module829(function (n, t) {
              return c(n, t, h);
            })
          : module831(o) && module831(h)
          ? module829(function (n, t) {
              return c(n, s, t);
            })
          : module831(s) && module831(h)
          ? module829(function (n, t) {
              return c(o, n, t);
            })
          : module831(o)
          ? module830(function (n) {
              return c(n, s, h);
            })
          : module831(s)
          ? module830(function (n) {
              return c(o, n, h);
            })
          : module831(h)
          ? module830(function (n) {
              return c(o, s, n);
            })
          : c(o, s, h);
    }
  };
};
