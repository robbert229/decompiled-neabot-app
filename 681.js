var module677 = require('./677');

module.exports = function (s, _) {
  var n = this.__data__,
    h = module677(n, s);

  if (h < 0) {
    ++this.size;
    n.push([s, _]);
  } else n[h][1] = _;

  return this;
};
