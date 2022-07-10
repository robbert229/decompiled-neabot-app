exports.default = function (t, l) {
  for (var u, c = o(t); !(u = c()).done; ) {
    var f,
      p,
      v = u.value,
      y = null != (f = null == (p = v.match(/^[^:]+:/)) ? undefined : p[0]) ? f : '',
      s = v
        .replace(new RegExp('^' + module504.default(y)), '')
        .replace(/\/+/g, '/')
        .replace(/^\//, ''),
      b = new RegExp(
        '^' +
          module504.default(y) +
          '(/)*' +
          s
            .split('.')
            .map(function (t) {
              return '*' === t ? '[^/]+' : module504.default(t);
            })
            .join('\\.')
      ),
      h = l.replace(/\/+/g, '/');
    if (b.test(h)) return h.replace(b, '');
  }

  return;
};

var module504 = require('./504');

function o(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = l(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var u = 0;
    return function () {
      return u >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[u++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function l(t, n) {
  if (t) {
    if ('string' == typeof t) return u(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? u(t, n) : undefined;
  }
}

function u(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, l = new Array(n); o < n; o++) l[o] = t[o];

  return l;
}
