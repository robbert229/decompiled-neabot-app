var module684 = require('./684');

module.exports = function (t, n) {
  var h = module684(this, t),
    o = h.size;
  h.set(t, n);
  this.size += h.size == o ? 0 : 1;
  return this;
};
