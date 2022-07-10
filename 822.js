var module11 = require('./11'),
  regeneratorRuntime = require('regenerator-runtime'),
  module608 = require('./608'),
  module810 = require('./810'),
  module811 = require('./811'),
  module599 = require('./599'),
  ReactNative = require('react-native'),
  S = module608.thunk(function (n, t, o) {
    var l, f;
    return regeneratorRuntime.default.async(
      function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              l = o.injections;
              n.updateStatus(module810.STATUS.FETCHING);
              f = module599.default.getVersion();
              n.setVersion(f);
              n.updateStatus(module810.STATUS.SUCCESS);

            case 6:
            case 'end':
              return t.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  }),
  v = module11.default({}, module811.default(), {
    checkAppVersion: S,
    setVersion: module608.action(function (n, t) {
      n.version = t;
    }),
    locale: module810.LOCALES.SYSTEM,
    onLanguageChange: module608.action(function (n, t) {
      n.locale = t;
      ReactNative.DeviceEventEmitter.emit('onChangeLanguageUI', t);
    }),
  });

exports.default = v;
