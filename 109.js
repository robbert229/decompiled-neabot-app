var module11 = require('./11');

function n(t, n) {
  var u = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (u) return (u = u.call(t)).next.bind(u);

  if (Array.isArray(t) || (u = o(t)) || (n && t && 'number' == typeof t.length)) {
    if (u) t = u;
    var l = 0;
    return function () {
      return l >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[l++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function o(t, n) {
  if (t) {
    if ('string' == typeof t) return u(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? u(t, n) : undefined;
  }
}

function u(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

var module110 = require('./110');

function c(t) {
  for (var o, u = [], l = n(t.entries); !(o = l()).done; ) {
    var c = o.value;

    if ('FRAME' === c.type) {
      var s = c.location,
        f = c.functionName;
      if ('NATIVE' !== s.type)
        u.push({
          methodName: f,
          file: s.sourceUrl,
          lineNumber: s.line1Based,
          column: 'SOURCE' === s.type ? s.column1Based - 1 : s.virtualOffset0Based,
        });
    }
  }

  return u;
}

module.exports = function (n) {
  if (!n || !n.stack) return [];

  var module111 = require('./111');

  return Array.isArray(n.stack)
    ? n.stack
    : globals.HermesInternal
    ? c(module110(n.stack))
    : module111.parse(n.stack).map(function (n) {
        return module11({}, n, {
          column: null != n.column ? n.column - 1 : null,
        });
      });
};
