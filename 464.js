exports.default = function (t) {
  return t.reduce(function (t, u) {
    var o = module12.default(u, 2),
      f = o[0],
      c = o[1];
    if (t.hasOwnProperty(f)) throw new Error("A value for key '" + f + "' already exists in the object.");
    t[f] = c;
    return t;
  }, {});
};

var module12 = require('./12');
