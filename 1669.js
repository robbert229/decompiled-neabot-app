var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module885 = require('./885'),
  module1670 = require('./1670'),
  module1673 = require('./1673');

module885.default.defaults.baseURL = module1673.default.baseUrl + module1673.default.prefix;
module885.default.defaults.timeout = 1e5;
module885.default.interceptors.response.use(function (t) {
  if ('200' === t.status || 200 === t.status) return t.data.data || t.data;
  throw Error(t.opt || '\u670d\u52a1\u5f02\u5e38');
});

var p = (function () {
  function t() {
    module24.default(this, t);
  }

  module25.default(t, null, [
    {
      key: 'get',
      value: function (t, n) {
        var s;
        return regeneratorRuntime.default.async(
          function (f) {
            for (;;)
              switch ((f.prev = f.next)) {
                case 0:
                  if ((module1670.default.stringify(n), (s = null), n)) {
                    f.next = 8;
                    break;
                  }

                  f.next = 5;
                  return regeneratorRuntime.default.awrap(module885.default.get(t));

                case 5:
                  s = f.sent;
                  f.next = 11;
                  break;

                case 8:
                  f.next = 10;
                  return regeneratorRuntime.default.awrap(module885.default.get(t + '?' + n));

                case 10:
                  s = f.sent;

                case 11:
                  return f.abrupt('return', s);

                case 12:
                case 'end':
                  return f.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
    },
    {
      key: 'post',
      value: function (t, n) {
        var module25;
        return regeneratorRuntime.default.async(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  c.prev = 0;
                  c.next = 3;
                  return regeneratorRuntime.default.awrap(module885.default.post(t, n));

                case 3:
                  module25 = c.sent;
                  return c.abrupt('return', module25);

                case 7:
                  c.prev = 7;
                  c.t0 = c.catch(0);
                  return c.abrupt('return', c.t0);

                case 10:
                case 'end':
                  return c.stop();
              }
          },
          null,
          null,
          [[0, 7]],
          Promise
        );
      },
    },
    {
      key: 'patch',
      value: function (t, n) {
        var module25;
        return regeneratorRuntime.default.async(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  c.prev = 0;
                  c.next = 3;
                  return regeneratorRuntime.default.awrap(module885.default.patch(t, n));

                case 3:
                  module25 = c.sent;
                  return c.abrupt('return', module25);

                case 7:
                  c.prev = 7;
                  c.t0 = c.catch(0);
                  return c.abrupt('return', c.t0);

                case 10:
                case 'end':
                  return c.stop();
              }
          },
          null,
          null,
          [[0, 7]],
          Promise
        );
      },
    },
    {
      key: 'put',
      value: function (t, n) {
        var module25;
        return regeneratorRuntime.default.async(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  c.prev = 0;
                  c.next = 3;
                  return regeneratorRuntime.default.awrap(module885.default.put(t, n));

                case 3:
                  module25 = c.sent;
                  return c.abrupt('return', module25);

                case 7:
                  c.prev = 7;
                  c.t0 = c.catch(0);
                  return c.abrupt('return', c.t0);

                case 10:
                case 'end':
                  return c.stop();
              }
          },
          null,
          null,
          [[0, 7]],
          Promise
        );
      },
    },
    {
      key: 'delete',
      value: function (t, n) {
        var module25;
        return regeneratorRuntime.default.async(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  c.prev = 0;
                  c.next = 3;
                  return regeneratorRuntime.default.awrap(module885.default.post(t, n));

                case 3:
                  module25 = c.sent;
                  return c.abrupt('return', module25);

                case 7:
                  c.prev = 7;
                  c.t0 = c.catch(0);
                  return c.abrupt('return', c.t0);

                case 10:
                case 'end':
                  return c.stop();
              }
          },
          null,
          null,
          [[0, 7]],
          Promise
        );
      },
    },
  ]);
  return t;
})();

exports.default = p;
