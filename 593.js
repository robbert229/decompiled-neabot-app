require('react');

var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module589 = require('./589'),
  c = (function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(t, null, [
      {
        key: 'get',
        value: function (t) {
          try {
            return module589.default.getItem(t).then(function (t) {
              if (t && undefined != t) return 'string' == typeof t ? JSON.parse(t) : t;
            });
          } catch (t) {
            return;
          }
        },
      },
      {
        key: 'getKeys',
        value: function (t) {
          module589.default.multiGet(t, function (t, n) {
            if (!t) console.log(n);
          });
        },
      },
      {
        key: 'save',
        value: function (t, n) {
          try {
            return module589.default.setItem(t, JSON.stringify(n)).then(function (t) {});
          } catch (t) {
            return;
          }
        },
      },
      {
        key: 'upnew',
        value: function (u, f) {
          return t.get(u).then(function (t) {
            module25 = 'string' == typeof module25 ? module25 : module11.default({}, t, module25);
            return module589.default.setItem(u, JSON.stringify(module25));
          });
        },
      },
      {
        key: 'delete',
        value: function (t) {
          return module589.default.removeItem(t, function (t) {});
        },
      },
      {
        key: 'cache',
        value: function (t) {
          module589.default.multiSet(t, function (t) {});
        },
      },
      {
        key: 'clear',
        value: function () {
          module589.default.clear(function (t) {});
        },
      },
      {
        key: 'change',
        value: function (t, n) {
          module589.default.setItem(t, n, function (t) {});
        },
      },
    ]);
    return t;
  })();

exports.default = c;
