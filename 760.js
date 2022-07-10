var module674 = require('./674'),
  module761 = require('./761'),
  module762 = require('./762'),
  module763 = require('./763'),
  module764 = require('./764'),
  module765 = require('./765');

function y(o) {
  var p = (this.__data__ = new module674(o));
  this.size = p.size;
}

y.prototype.clear = module761;
y.prototype.delete = module762;
y.prototype.get = module763;
y.prototype.has = module764;
y.prototype.set = module765;
module.exports = y;
