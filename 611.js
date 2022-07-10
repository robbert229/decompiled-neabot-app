function t(t) {
  return function (n) {
    var u = n.dispatch,
      c = n.getState;
    return function (n) {
      return function (f) {
        return 'function' == typeof f ? f(u, c, t) : n(f);
      };
    };
  };
}

exports.__esModule = true;
var n = t();
n.withExtraArgument = t;
exports.default = n;
