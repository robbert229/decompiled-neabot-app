function n(n) {
  for (var t, o = /(?:\.(\w+))|(?:\[(\d+)\])|(?:\["((?:[^\\"]|\\.)*)"\])/g, f = []; (t = o.exec(n)); ) f.push(t[1] || t[2] || t[3]);

  return f;
}

module.exports = function (t, o) {
  if ('$' !== o)
    for (var f = n(o), u = 0; u < f.length; u++) {
      o = f[u].toString().replace(/\\"/g, '"');
      if (!(undefined === t[o] && u !== f.length - 1)) t = t[o];
    }
  return t;
};
