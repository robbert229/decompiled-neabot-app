var module651 = require('./651'),
  module689 = require('./689'),
  module690 = require('./690');

function n(o) {
  var p = -1,
    n = null == o ? 0 : o.length;

  for (this.__data__ = new module651(); ++p < n; ) this.add(o[p]);
}

n.prototype.add = n.prototype.push = module689;
n.prototype.has = module690;
module.exports = n;
