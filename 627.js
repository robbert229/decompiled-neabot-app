module.exports = function (t) {
  var n = [],
    o = [];
  return (function t(f, c) {
    var p, s, u;

    if (!('object' != typeof f || null === f || f instanceof Boolean || f instanceof Date || f instanceof Number || f instanceof RegExp || f instanceof String)) {
      for (p = 0; p < n.length; p += 1)
        if (n[p] === f)
          return {
            $ref: o[p],
          };

      if ((n.push(f), o.push(c), '[object Array]' === Object.prototype.toString.apply(f))) for (u = [], p = 0; p < f.length; p += 1) u[p] = t(f[p], c + '[' + p + ']');
      else for (s in ((u = {}), f)) Object.prototype.hasOwnProperty.call(f, s) && (u[s] = t(f[s], c + '[' + JSON.stringify(s) + ']'));
      return u;
    }

    return f;
  })(t, '$');
};
