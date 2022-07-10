var module717 = require('./717'),
  module705 = require('./705');

module.exports = function (o) {
  return module705(o) && module717(o);
};
