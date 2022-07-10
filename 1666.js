var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, s, f);
        else l[s] = t[s];
      }

    l.default = t;
    if (u) u.set(t, l);
    return l;
  })(require('react')),
  module608 = require('./608'),
  module1137 = require('./1137');

require('./810');

require('./812');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

exports.default = function () {
  var t = React.useState(''),
    o = module12.default(t, 2),
    f = React.useState(true),
    p = module12.default(f, 2),
    y = p[1],
    S = React.useCallback(function (t) {}, []),
    A = module608.useStoreActions(function (t) {
      return t.app.checkAppVersion;
    }),
    b = module608.useStoreState(function (t) {
      return {
        status: t.app.status,
        version: t.app.version,
      };
    }),
    k = b.version,
    O = React.useCallback(
      function (t) {
        switch (t) {
          case module1137.default.SyncStatus.CHECKING_FOR_UPDATE:
            S('Checking for update');
            break;

          case module1137.default.SyncStatus.DOWNLOADING_PACKAGE:
            S('Downloading package');
            break;

          case module1137.default.SyncStatus.AWAITING_USER_ACTION:
            S('Awaiting user action');
            break;

          case module1137.default.SyncStatus.INSTALLING_UPDATE:
            S('Installing update');
            break;

          case module1137.default.SyncStatus.UP_TO_DATE:
            S('App up to date.');
            y(false);
            break;

          case module1137.default.SyncStatus.UPDATE_IGNORED:
            S('Update cancelled by user.');
            y(false);
            break;

          case module1137.default.SyncStatus.UPDATE_INSTALLED:
            S('Update installed and will be applied on restart.');
            y(false);
            break;

          case module1137.default.SyncStatus.UNKNOWN_ERROR:
            S('An unknown error occurred.');
            y(false);
        }
      },
      [S]
    ),
    _ = React.useCallback(function (t) {
      y(t);
    }, []);

  React.useEffect(
    function () {
      A();
    },
    [A]
  );
  var v = React.useCallback(function () {
    return regeneratorRuntime.default.async(
      function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              t.next = 2;
              return regeneratorRuntime.default.awrap(module1137.default.getUpdateMetadata());

            case 2:
              t.sent;

            case 3:
            case 'end':
              return t.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  }, []);
  React.useEffect(
    function () {
      module1137.default.notifyAppReady();
      module1137.default.sync(
        {
          installMode: module1137.default.InstallMode.ON_NEXT_RESTART,
          updateDialog: {
            title: 'An OTA update is available',
            description: 'Would you like to install it?',
          },
          rollbackRetryOptions: {
            delayInHours: 0.1,
            maxRetryAttempts: 1,
          },
        },
        O,
        _
      );
      v();
    },
    [v, O, _]
  );
  React.useEffect(function () {}, [k]);
  return k;
};
