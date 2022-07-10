var module1252 = (function (T) {
    var E,
      L = {};

    for (var o in T)
      for (var t, S = 0, _ = (E = T[o]).length; S < _; S++) {
        t = E.charCodeAt(S);
        if (L.hasOwnProperty(t)) L[t] += ',' + o;
        else L[t] = o;
      }

    return L;
  })(require('./1252')),
  module1253 = require('./1253'),
  L = new module1253(module1252);

module.exports = L.convert.bind(L);
module.exports.compare = L.compare.bind(L);
module.exports.STYLE_NORMAL = module1253.STYLE_NORMAL;
module.exports.STYLE_TONE = module1253.STYLE_TONE;
module.exports.STYLE_TONE2 = module1253.STYLE_TONE2;
module.exports.STYLE_TO3NE = module1253.STYLE_TO3NE;
module.exports.STYLE_INITIALS = module1253.STYLE_INITIALS;
module.exports.STYLE_FIRST_LETTER = module1253.STYLE_FIRST_LETTER;
