var module684 = require('./684');

module.exports = function (n) {
  var s = module684(this, n).delete(n);
  this.size -= s ? 1 : 0;
  return s;
};
