var module652 = require('./652'),
  module683 = require('./683'),
  module686 = require('./686'),
  module687 = require('./687'),
  module688 = require('./688');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module652;
s.prototype.delete = module683;
s.prototype.get = module686;
s.prototype.has = module687;
s.prototype.set = module688;
module.exports = s;
