var regeneratorRuntime = require('regenerator-runtime'),
  module1142 = require('./1142');

function s(n) {
  return ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'OPTIONS', 'CONNECT', 'PATCH'][n];
}

module.exports = {
  request: function (o, c, u, p) {
    return regeneratorRuntime.async(
      function (C) {
        for (;;)
          switch ((C.prev = C.next)) {
            case 0:
              if ('function' == typeof u) {
                p = u;
                u = null;
              }

              l = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-CodePush-Plugin-Name': module1142.name,
                'X-CodePush-Plugin-Version': module1142.version,
                'X-CodePush-SDK-Version': module1142.dependencies['code-push'],
              };
              if (u && 'object' == typeof u) u = JSON.stringify(u);
              C.prev = 3;
              C.next = 6;
              return regeneratorRuntime.awrap(
                fetch(c, {
                  method: s(o),
                  headers: l,
                  body: u,
                })
              );

            case 6:
              f = C.sent;
              P = f.status;
              C.next = 10;
              return regeneratorRuntime.awrap(f.text());

            case 10:
              h = C.sent;
              p(null, {
                statusCode: P,
                body: h,
              });
              C.next = 17;
              break;

            case 14:
              C.prev = 14;
              C.t0 = C.catch(3);
              p(C.t0);

            case 17:
            case 'end':
              return C.stop();
          }
      },
      null,
      null,
      [[3, 14]],
      Promise
    );
    var l, f, P, h;
  },
};
