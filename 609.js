var module260 = require('./260');

function o(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

module.exports = function (n) {
  for (var c = 1; c < arguments.length; c++) {
    var p = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      o(Object(p), true).forEach(function (o) {
        module260(n, o, p[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(p));
    else
      o(Object(p)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(p, t));
      });
  }

  return n;
};

module.exports.default = module.exports;
module.exports.__esModule = true;
