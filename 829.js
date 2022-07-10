var module830 = require('./830'),
  module831 = require('./831');

module.exports = function (u) {
  return function c(f, o) {
    switch (arguments.length) {
      case 0:
        return c;

      case 1:
        return module831(f)
          ? c
          : module830(function (n) {
              return u(f, n);
            });

      default:
        return module831(f) && module831(o)
          ? c
          : module831(f)
          ? module830(function (n) {
              return u(n, o);
            })
          : module831(o)
          ? module830(function (n) {
              return u(f, n);
            })
          : u(f, o);
    }
  };
};
