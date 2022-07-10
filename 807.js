require('./812');

var module11 = require('./11'),
  regeneratorRuntime = require('regenerator-runtime'),
  module608 = require('./608'),
  module808 = require('./808'),
  module810 = require('./810'),
  module810 = require('./810'),
  module811 = require('./811'),
  f = module608.thunk(function (t, n, s) {
    var module810, l;
    return regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              module810 = s.injections;
              n.next = 4;
              return regeneratorRuntime.default.awrap(module808.getLoginCredentials());

            case 4:
              if ((l = n.sent)) {
                t.changeAppState(module810.APP_STATE.PRIVATE);
                t.mergeState(l);
              } else t.changeAppState(module810.APP_STATE.PUBLIC);

            case 6:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  }),
  S = module608.thunk(function (t, n, s) {
    return regeneratorRuntime.default.async(
      function (u) {
        for (;;)
          switch ((u.prev = u.next)) {
            case 0:
              if ((s.dispatch, n.userName && n.password && n.areaCode && n.userAppVersion && n.productId)) {
                u.next = 3;
                break;
              }

              return u.abrupt('return');

            case 3:
              t.updateStatus(module810.STATUS.FETCHING);

            case 4:
            case 'end':
              return u.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  }),
  A = module608.thunk(function (t, n, s) {
    return regeneratorRuntime.default.async(
      function (u) {
        for (;;)
          switch ((u.prev = u.next)) {
            case 0:
              if ((s.dispatch, n.areaCode && n.phone && n.type && n.productId)) {
                u.next = 3;
                break;
              }

              return u.abrupt('return');

            case 3:
              t.updateStatus(module810.STATUS.FETCHING);

            case 4:
            case 'end':
              return u.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  }),
  h = module608.thunk(function (t, n, s) {
    var c, p;
    return regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              c = s.injections;
              t.updateStatus(module810.STATUS.FETCHING);
              p = '86';
              t.setAreaCode(p);
              t.updateStatus(module810.STATUS.SUCCESS);

            case 6:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  }),
  T = module11.default({}, module811.default(), {
    sendCode: A,
    loginUser: S,
    checkLogin: f,
    checkAreaCode: h,
    setAreaCode: module608.action(function (t, n) {
      t.setAreaCode = n;
    }),
    appstate: module810.APP_STATE.UNKNOWN,
    changeAppState: module608.action(function (t, n) {
      t.appstate = n;
    }),
    onLoginInputChange: module608.action(function (t, n) {
      var u = n.key,
        s = n.value;
      t[u] = s;
    }),
  });

exports.default = T;
