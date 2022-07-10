var n = function (n) {
  switch (typeof n) {
    case 'string':
      return n;

    case 'boolean':
      return n ? 'true' : 'false';

    case 'number':
      return isFinite(n) ? n : '';

    default:
      return '';
  }
};

module.exports = function (o, t, c, u) {
  t = t || '&';
  c = c || '=';
  if (null === o) o = undefined;
  return 'object' == typeof o
    ? Object.keys(o)
        .map(function (u) {
          var s = encodeURIComponent(n(u)) + c;
          return Array.isArray(o[u])
            ? o[u]
                .map(function (o) {
                  return s + encodeURIComponent(n(o));
                })
                .join(t)
            : s + encodeURIComponent(n(o[u]));
        })
        .join(t)
    : u
    ? encodeURIComponent(n(u)) + c + encodeURIComponent(n(o))
    : '';
};
