var module654 = require('./654'),
  module670 = require('./670'),
  module671 = require('./671'),
  module672 = require('./672'),
  module673 = require('./673');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module654;
s.prototype.delete = module670;
s.prototype.get = module671;
s.prototype.has = module672;
s.prototype.set = module673;
module.exports = s;
