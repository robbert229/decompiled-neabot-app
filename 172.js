var module3 = require('./3'),
  n = {},
  o = {};

exports.customBubblingEventTypes = n;
exports.customDirectEventTypes = o;
var s = new Map(),
  u = new Map();

function l(t) {
  var s = t.bubblingEventTypes,
    u = t.directEventTypes;
  if (null != s) for (var l in s) null == n[l] && (n[l] = s[l]);
  if (null != u) for (var c in u) null == o[c] && (o[c] = u[c]);
}

exports.register = function (n, o) {
  module3(!s.has(n), 'Tried to register two views with the same name %s', n);
  module3('function' == typeof o, 'View config getter callback for component `%s` must be a function (received `%s`)', n, null === o ? 'null' : typeof o);
  s.set(n, o);
  return n;
};

exports.get = function (n) {
  var o;
  if (u.has(n)) o = u.get(n);
  else {
    var c = s.get(n);
    if ('function' != typeof c)
      module3(
        false,
        'View config getter callback for component `%s` must be a function (received `%s`).%s',
        n,
        null === c ? 'null' : typeof c,
        'string' == typeof n[0] && /[a-z]/.test(n[0]) ? ' Make sure to start component names with a capital letter.' : ''
      );
    l((o = c()));
    u.set(n, o);
    s.set(n, null);
  }
  module3(o, 'View config not found for name %s', n);
  return o;
};
