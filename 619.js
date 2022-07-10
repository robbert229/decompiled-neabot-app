var module618 = require('./618'),
  module616 = require('./616');

exports.getRegexFlags = function (n) {
  var t = '';
  if (n.ignoreCase) t += 'i';
  if (n.global) t += 'g';
  if (n.multiline) t += 'm';
  return t;
};

exports.stringifyFunction = function (n, t) {
  if ('function' == typeof t) return t(n);
  var c = n.toString(),
    u = c.match(/^[^{]*{|^[^=]*=>/),
    s = u ? u[0] : '<function> ',
    o = '}' === c[c.length - 1] ? '}' : '';
  return s.replace(/\r\n|\n/g, ' ').replace(/\s+/g, ' ') + ' /* ... */ ' + o;
};

exports.restore = function (c, u) {
  var s = c[0],
    o = c.slice(1);

  switch (s) {
    case '$':
      return module618(u, c);

    case 'r':
      var l = o.indexOf(','),
        f = o.slice(0, l),
        p = o.slice(l + 1);
      return RegExp(p, f);

    case 'd':
      return new Date(+o);

    case 'f':
      var w = function () {
        throw new Error("can't run jsan parsed function");
      };

      w.toString = function () {
        return o;
      };

      return w;

    case 'u':
      return;

    case 'e':
      var v = new Error(o);
      v.stack = 'Stack is unavailable for jsan parsed errors';
      return v;

    case 's':
      return Symbol(o);

    case 'g':
      return Symbol.for(o);

    case 'm':
      return new Map(module616.parse(o));

    case 'l':
      return new Set(module616.parse(o));

    case 'n':
      return NaN;

    case 'i':
      return 1 / 0;

    case 'y':
      return -1 / 0;

    default:
      console.warn('unknown type', c);
      return c;
  }
};
