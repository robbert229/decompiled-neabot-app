var module84 = require('./84');

var t = function (t) {
  var o = {};
  t.supportedCommands.forEach(function (t) {
    o[t] = function (o) {
      for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++) f[c - 1] = arguments[c];

      module84.dispatchCommand(o, t, f);
    };
  });
  return o;
};

exports.default = t;
