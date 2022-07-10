var module908 = require('./908'),
  o = {};

['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (n, t) {
  o[n] = function (o) {
    return typeof o === n || 'a' + (t < 1 ? 'n ' : ' ') + n;
  };
});
var t = {},
  s = module908.version.split('.');

function f(n, o) {
  for (var t = o ? o.split('.') : s, f = n.split('.'), u = 0; u < 3; u++) {
    if (t[u] > f[u]) return true;
    if (t[u] < f[u]) return false;
  }

  return false;
}

o.transitional = function (o, s, u) {
  var c = s && f(s);

  function v(o, t) {
    return '[Axios v' + module908.version + "] Transitional option '" + o + "'" + t + (u ? '. ' + u : '');
  }

  return function (n, f, u) {
    if (false === o) throw new Error(v(f, ' has been removed in ' + s));

    if (c && !t[f]) {
      t[f] = true;
      console.warn(v(f, ' has been deprecated since v' + s + ' and will be removed in the near future'));
    }

    return !o || o(n, f, u);
  };
};

module.exports = {
  isOlderVersion: f,
  assertOptions: function (n, o, t) {
    if ('object' != typeof n) throw new TypeError('options must be an object');

    for (var s = Object.keys(n), f = s.length; f-- > 0; ) {
      var u = s[f],
        c = o[u];

      if (c) {
        var v = n[u],
          l = undefined === v || c(v, u, n);
        if (true !== l) throw new TypeError('option ' + u + ' must be ' + l);
      } else if (true !== t) throw Error('Unknown option ' + u);
    }
  },
  validators: o,
};
