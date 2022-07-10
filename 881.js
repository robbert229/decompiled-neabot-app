var module829 = require('./829'),
  module882 = require('./882'),
  u = (function () {
    function t(t, n) {
      this.xf = n;
      this.f = t;
    }

    t.prototype['@@transducer/init'] = module882.init;
    t.prototype['@@transducer/result'] = module882.result;

    t.prototype['@@transducer/step'] = function (t, n) {
      return this.xf['@@transducer/step'](t, this.f(n));
    };

    return t;
  })(),
  s = module829(function (t, n) {
    return new u(t, n);
  });

module.exports = s;
