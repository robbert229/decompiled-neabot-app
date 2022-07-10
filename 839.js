var module840 = require('./840'),
  module843 = require('./843'),
  module844 = require('./844');

function c(t, n, u) {
  for (var c = 0, f = u.length; c < f; ) {
    if ((n = t['@@transducer/step'](n, u[c])) && n['@@transducer/reduced']) {
      n = n['@@transducer/value'];
      break;
    }

    c += 1;
  }

  return t['@@transducer/result'](n);
}

function f(t, n, u) {
  for (var c = u.next(); !c.done; ) {
    if ((n = t['@@transducer/step'](n, c.value)) && n['@@transducer/reduced']) {
      n = n['@@transducer/value'];
      break;
    }

    c = u.next();
  }

  return t['@@transducer/result'](n);
}

function o(t, n, c, f) {
  return t['@@transducer/result'](c[f](module844(t['@@transducer/step'], t), n));
}

var s = 'undefined' != typeof Symbol ? Symbol.iterator : '@@iterator';

module.exports = function (u, l, y) {
  if (('function' == typeof u && (u = module843(u)), module840(y))) return c(u, l, y);
  if ('function' == typeof y['fantasy-land/reduce']) return o(u, l, y, 'fantasy-land/reduce');
  if (null != y[s]) return f(u, l, y[s]());
  if ('function' == typeof y.next) return f(u, l, y);
  if ('function' == typeof y.reduce) return o(u, l, y, 'reduce');
  throw new TypeError('reduce: list must be array or iterable');
};
