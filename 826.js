module.exports = function (n, t) {
  var o;
  n = n || [];
  t = t || [];
  var f = n.length,
    h = t.length,
    l = [];

  for (o = 0; o < f; ) {
    l[l.length] = n[o];
    o += 1;
  }

  for (o = 0; o < h; ) {
    l[l.length] = t[o];
    o += 1;
  }

  return l;
};
