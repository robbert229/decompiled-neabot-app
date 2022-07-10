var module829 = require('./829'),
  module878 = require('./878'),
  module880 = require('./880'),
  module839 = require('./839'),
  module881 = require('./881'),
  module833 = require('./833'),
  module848 = require('./848'),
  s = module829(
    module878(['fantasy-land/map', 'map'], module881, function (t, n) {
      switch (Object.prototype.toString.call(n)) {
        case '[object Function]':
          return module833(n.length, function () {
            return t.call(this, n.apply(this, arguments));
          });

        case '[object Object]':
          return module839(
            function (c, o) {
              c[o] = t(n[o]);
              return c;
            },
            {},
            module848(n)
          );

        default:
          return module880(t, n);
      }
    })
  );

module.exports = s;
