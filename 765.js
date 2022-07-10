var module674 = require('./674'),
  module682 = require('./682'),
  module651 = require('./651');

module.exports = function (n, h) {
  var f = this.__data__;

  if (f instanceof module674) {
    var u = f.__data__;

    if (!module682 || u.length < 199) {
      u.push([n, h]);
      this.size = ++f.size;
      return this;
    }

    f = this.__data__ = new module651(u);
  }

  f.set(n, h);
  this.size = f.size;
  return this;
};
