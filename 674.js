var module675 = require('./675'),
  module676 = require('./676'),
  module679 = require('./679'),
  module680 = require('./680'),
  module681 = require('./681');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module675;
s.prototype.delete = module676;
s.prototype.get = module679;
s.prototype.has = module680;
s.prototype.set = module681;
module.exports = s;
