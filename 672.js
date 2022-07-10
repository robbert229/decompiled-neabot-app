var module655 = require('./655'),
  o = Object.prototype.hasOwnProperty;

module.exports = function (n) {
  var _ = this.__data__;
  return module655 ? undefined !== _[n] : o.call(_, n);
};
