var n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  c = /\\(\\)?/g,
  module793 = require('./793')(function (t) {
    var u = [];
    if (46 === t.charCodeAt(0)) u.push('');
    t.replace(n, function (n, t, o, p) {
      u.push(o ? p.replace(c, '$1') : t || n);
    });
    return u;
  });

module.exports = module793;
