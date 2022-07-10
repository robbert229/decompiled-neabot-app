var module777 = require('./777'),
  module778 = require('./778'),
  o = Object.prototype.propertyIsEnumerable,
  c = Object.getOwnPropertySymbols,
  u = c
    ? function (n) {
        if (null == n) return [];
        else {
          n = Object(n);
          return module777(c(n), function (t) {
            return o.call(n, t);
          });
        }
      }
    : module778;

module.exports = u;
