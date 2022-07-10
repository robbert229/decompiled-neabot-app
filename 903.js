var module886 = require('./886'),
  o = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ];

module.exports = function (n) {
  var f,
    s,
    c,
    u = {};

  if (n) {
    module886.forEach(n.split('\n'), function (n) {
      if (((c = n.indexOf(':')), (f = module886.trim(n.substr(0, c)).toLowerCase()), (s = module886.trim(n.substr(c + 1))), f)) {
        if (u[f] && o.indexOf(f) >= 0) return;
        u[f] = 'set-cookie' === f ? (u[f] ? u[f] : []).concat([s]) : u[f] ? u[f] + ', ' + s : s;
      }
    });
    return u;
  } else return u;
};
