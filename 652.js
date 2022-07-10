var module653 = require('./653'),
  module674 = require('./674'),
  module682 = require('./682');

module.exports = function () {
  this.size = 0;
  this.__data__ = {
    hash: new module653(),
    map: new (module682 || module674)(),
    string: new module653(),
  };
};
