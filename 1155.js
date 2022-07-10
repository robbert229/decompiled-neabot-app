var module11 = require('./11'),
  React = require('react');

module.exports = function (c, l) {
  for (var o = l.ref, f = c.ref, p = arguments.length, u = new Array(p > 2 ? p - 2 : 0), y = 2; y < p; y++) u[y - 2] = arguments[y];

  return null == f || null == o
    ? React.cloneElement(c, l, ...u)
    : 'function' != typeof f
    ? React.cloneElement(c, l, ...u)
    : React.cloneElement(
        c,
        module11({}, l, {
          ref: function (n) {
            o(n);
            f(n);
          },
        }),
        ...u
      );
};
