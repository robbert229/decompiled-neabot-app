var module759 = require('./759'),
  module783 = require('./783'),
  module785 = require('./785');

module.exports = function (o) {
  var c = module783(o);
  return 1 == c.length && c[0][2]
    ? module785(c[0][0], c[0][1])
    : function (t) {
        return t === o || module759(t, o, c);
      };
};
