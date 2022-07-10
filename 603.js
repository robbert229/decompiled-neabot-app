var regeneratorRuntime = require('regenerator-runtime'),
  ReactNative = require('react-native'),
  o = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.RNDeviceInfo),
  s = false,
  c = -1,
  l = {},
  f = function (t) {
    var n = t.level,
      u = t.charging,
      o = t.chargingtime,
      s = t.dischargingtime;
    return {
      batteryLevel: n,
      lowPowerMode: false,
      batteryState: 1 === n ? 'full' : u ? 'charging' : 'unplugged',
      chargingtime: o,
      dischargingtime: s,
    };
  },
  v = function () {
    return window.performance && window.performance.memory ? window.performance.memory.jsHeapSizeLimit : -1;
  };

exports.getMaxMemorySync = v;

var y = function () {
  return document.referrer;
};

exports.getInstallReferrerSync = y;

var p = function () {
  return !!navigator.onLine;
};

exports.isAirplaneModeSync = p;

var w = function () {
  return window.navigator.userAgent;
};

exports.getUserAgentSync = w;

var S = function () {
  return !!navigator.geolocation;
};

exports.isLocationEnabledSync = S;

var x = function () {
  return navigator.deviceMemory ? 1e9 * navigator.deviceMemory : -1;
};

exports.getTotalMemorySync = x;

var b = function () {
  return window.performance && window.performance.memory ? window.performance.memory.usedJSHeapSize : -1;
};

exports.getUsedMemorySync = b;
var h;
regeneratorRuntime.default.async(
  function (t) {
    for (;;)
      switch ((t.prev = t.next)) {
        case 0:
          if (!navigator.getBattery) {
            t.next = 7;
            break;
          }

          t.next = 3;
          return regeneratorRuntime.default.awrap(navigator.getBattery());

        case 3:
          h = t.sent;
          s = h.charging;
          h.addEventListener('chargingchange', function () {
            var t = h.charging;
            s = t;
            l = f(h);
            o.emit('RNDeviceInfo_powerStateDidChange', l);
          });
          h.addEventListener('levelchange', function () {
            var t = h.level;
            c = t;
            l = f(h);
            o.emit('RNDeviceInfo_batteryLevelDidChange', t);
            if (t < 0.2) o.emit('RNDeviceInfo_batteryLevelIsLow', t);
          });

        case 7:
        case 'end':
          return t.stop();
      }
  },
  null,
  null,
  null,
  Promise
);

exports.getInstallReferrer = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', y());

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getUserAgent = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', w());

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.isBatteryCharging = function () {
  var t;
  return regeneratorRuntime.default.async(
    function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            if (!navigator.getBattery) {
              u.next = 5;
              break;
            }

            u.next = 3;
            return regeneratorRuntime.default.awrap(navigator.getBattery());

          case 3:
            t = u.sent;
            return u.abrupt('return', t.level);

          case 5:
            return u.abrupt('return', false);

          case 6:
          case 'end':
            return u.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.isBatteryChargingSync = function () {
  return s;
};

exports.isCameraPresent = function () {
  var t;
  return regeneratorRuntime.default.async(
    function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            if (!navigator.getBattery) {
              u.next = 5;
              break;
            }

            u.next = 3;
            return regeneratorRuntime.default.awrap(navigator.mediaDevices.enumerateDevices());

          case 3:
            t = u.sent;
            return u.abrupt(
              'return',
              !!t.find(function (t) {
                return 'videoinput' === t.kind;
              })
            );

          case 5:
            return u.abrupt('return', false);

          case 6:
          case 'end':
            return u.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.isCameraPresentSync = function () {
  console.log('[react-native-device-info] isCameraPresentSync not supported - please use isCameraPresent');
  return false;
};

exports.getBatteryLevel = function () {
  var t;
  return regeneratorRuntime.default.async(
    function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            if (!navigator.getBattery) {
              u.next = 5;
              break;
            }

            u.next = 3;
            return regeneratorRuntime.default.awrap(navigator.getBattery());

          case 3:
            t = u.sent;
            return u.abrupt('return', t.level);

          case 5:
            return u.abrupt('return', -1);

          case 6:
          case 'end':
            return u.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getBatteryLevelSync = function () {
  return c;
};

exports.isLocationEnabled = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', S());

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.isAirplaneMode = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', p());

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getBaseOs = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt(
              'return',
              ((o = undefined),
              (n = window.navigator.userAgent),
              (u = window.navigator.platform),
              (o = u),
              -1 !== ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(u)
                ? (o = 'Mac OS')
                : -1 !== ['iPhone', 'iPad', 'iPod'].indexOf(u)
                ? (o = 'iOS')
                : -1 !== ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(u)
                ? (o = 'Windows')
                : /Android/.test(n)
                ? (o = 'Android')
                : !o && /Linux/.test(u) && (o = 'Linux'),
              o)
            );

          case 1:
          case 'end':
            return t.stop();
        }

      var n, u, o;
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getTotalDiskCapacity = function () {
  var t, ReactNative;
  return regeneratorRuntime.default.async(
    function (o) {
      for (;;)
        switch ((o.prev = o.next)) {
          case 0:
            if (!navigator.storage || !navigator.storage.estimate) {
              o.next = 6;
              break;
            }

            o.next = 3;
            return regeneratorRuntime.default.awrap(navigator.storage.estimate());

          case 3:
            t = o.sent;
            ReactNative = t.quota;
            return o.abrupt('return', ReactNative);

          case 6:
            return o.abrupt('return', -1);

          case 7:
          case 'end':
            return o.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getTotalDiskCapacitySync = function () {
  console.log('[react-native-device-info] getTotalDiskCapacitySync not supported - please use getTotalDiskCapacity');
  return -1;
};

exports.getFreeDiskStorage = function () {
  var t, ReactNative, o;
  return regeneratorRuntime.default.async(
    function (s) {
      for (;;)
        switch ((s.prev = s.next)) {
          case 0:
            if (!navigator.storage || !navigator.storage.estimate) {
              s.next = 7;
              break;
            }

            s.next = 3;
            return regeneratorRuntime.default.awrap(navigator.storage.estimate());

          case 3:
            t = s.sent;
            ReactNative = t.quota;
            o = t.usage;
            return s.abrupt('return', ReactNative - o);

          case 7:
            return s.abrupt('return', -1);

          case 8:
          case 'end':
            return s.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getFreeDiskStorageSync = function () {
  console.log('[react-native-device-info] getFreeDiskStorageSync not supported - please use getFreeDiskStorage');
  return -1;
};

exports.getMaxMemory = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', v());

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getUsedMemory = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', b());

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getTotalMemory = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', x());

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getPowerState = function () {
  var t;
  return regeneratorRuntime.default.async(
    function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            if (!navigator.getBattery) {
              u.next = 5;
              break;
            }

            u.next = 3;
            return regeneratorRuntime.default.awrap(navigator.getBattery());

          case 3:
            t = u.sent;
            return u.abrupt('return', f(t));

          case 5:
            return u.abrupt('return', {});

          case 6:
          case 'end':
            return u.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.getPowerStateSync = function () {
  return l;
};
