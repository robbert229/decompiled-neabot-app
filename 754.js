var module755 = require('./755'),
  module756 = require('./756'),
  o = Object.prototype.hasOwnProperty;

module.exports = function (c) {
  if (!module755(c)) return module756(c);
  var u = [];

  for (var p in Object(c)) o.call(c, p) && 'constructor' != p && u.push(p);

  return u;
};
