var module24 = require('./24'),
  module25 = require('./25'),
  module1456 = require('./1456'),
  c = (function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(t, null, [
      {
        key: 'createSocket',
        value: function (t, n) {
          if (n) console.warn('react-native-udp: createSocket() ignores callback parameter');
          if ('string' == typeof t)
            t = {
              type: t,
            };
          return new module1456.default(t);
        },
      },
    ]);
    return t;
  })();

c.Socket = module1456.default;
var l = c;
exports.default = l;
module.exports = c;
