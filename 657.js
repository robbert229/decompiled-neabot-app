var module658 = require('./658'),
  module666 = require('./666'),
  module665 = require('./665'),
  module668 = require('./668'),
  p = /^\[object .+?Constructor\]$/,
  u = Function.prototype,
  s = Object.prototype,
  $ = u.toString,
  f = s.hasOwnProperty,
  l = RegExp(
    '^' +
      $.call(f)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );

module.exports = function (u) {
  return !(!module665(u) || module666(u)) && (module658(u) ? l : p).test(module668(u));
};
