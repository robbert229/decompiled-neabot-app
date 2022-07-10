module.exports = function (t, n) {
  switch (t) {
    case 0:
      return function () {
        return n.apply(this, arguments);
      };

    case 1:
      return function (t) {
        return n.apply(this, arguments);
      };

    case 2:
      return function (t, u) {
        return n.apply(this, arguments);
      };

    case 3:
      return function (t, u, s) {
        return n.apply(this, arguments);
      };

    case 4:
      return function (t, u, s, c) {
        return n.apply(this, arguments);
      };

    case 5:
      return function (t, u, s, c, p) {
        return n.apply(this, arguments);
      };

    case 6:
      return function (t, u, s, c, p, o) {
        return n.apply(this, arguments);
      };

    case 7:
      return function (t, u, s, c, p, o, f) {
        return n.apply(this, arguments);
      };

    case 8:
      return function (t, u, s, c, p, o, f, h) {
        return n.apply(this, arguments);
      };

    case 9:
      return function (t, u, s, c, p, o, f, h, l) {
        return n.apply(this, arguments);
      };

    case 10:
      return function (t, u, s, c, p, o, f, h, l, y) {
        return n.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};
