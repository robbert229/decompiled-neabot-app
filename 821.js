var module11 = require('./11'),
  regeneratorRuntime = require('regenerator-runtime'),
  module608 = require('./608'),
  module810 = require('./810'),
  c = {
    setTest: module608.action(function (t, n) {
      t.istest = n;
    }),
    setName: module608.action(function (t, n) {
      var u = n.key,
        s = n.value;
      t[u] = s;
    }),
  },
  f = {
    updateName: module608.thunk(function (t, n) {
      t.setName({
        key: 'firstName',
        value: 'HARISH',
      });
      t.setName({
        key: 'lastName',
        value: 'JANGRA',
      });
    }),
  },
  o = module608.thunk(function (t, n, s) {
    return regeneratorRuntime.default.async(
      function (u) {
        for (;;)
          switch ((u.prev = u.next)) {
            case 0:
              if ((s.dispatch, n.input)) {
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
  N = module11.default({}, c, f, {
    istest: 'TEST',
    firstName: '',
    lastName: '',
    testPing: o,
  });

exports.default = N;
