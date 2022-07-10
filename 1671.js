function t(t, n) {
  return Object.prototype.hasOwnProperty.call(t, n);
}

module.exports = function (n, o, s, p) {
  o = o || '&';
  s = s || '=';
  var u = {};
  if ('string' != typeof n || 0 === n.length) return u;
  var c = /\+/g;
  n = n.split(o);
  var f = 1e3;
  if (p && 'number' == typeof p.maxKeys) f = p.maxKeys;
  var y = n.length;
  if (f > 0 && y > f) y = f;

  for (var l = 0; l < y; ++l) {
    var v,
      b,
      h,
      x,
      O = n[l].replace(c, '%20'),
      A = O.indexOf(s);

    if (A >= 0) {
      v = O.substr(0, A);
      b = O.substr(A + 1);
    } else {
      v = O;
      b = '';
    }

    h = decodeURIComponent(v);
    x = decodeURIComponent(b);
    if (t(u, h)) Array.isArray(u[h]) ? u[h].push(x) : (u[h] = [u[h], x]);
    else u[h] = x;
  }

  return u;
};
