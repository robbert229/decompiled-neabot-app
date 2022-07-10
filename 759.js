var module760 = require('./760'),
  module766 = require('./766');

module.exports = function (t, u, v, o) {
  var l = v.length,
    c = l,
    s = !o;
  if (null == t) return !c;

  for (t = Object(t); l--; ) {
    var _ = v[l];
    if (s && _[2] ? _[1] !== t[_[0]] : !(_[0] in t)) return false;
  }

  for (; ++l < c; ) {
    var b = (_ = v[l])[0],
      h = t[b],
      j = _[1];

    if (s && _[2]) {
      if (undefined === h && !(b in t)) return false;
    } else {
      var p = new module760();
      if (o) var w = o(h, j, b, t, u, p);
      if (!(undefined === w ? module766(j, h, 3, o, p) : w)) return false;
    }
  }

  return true;
};
