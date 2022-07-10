var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native'),
  module1324 = require('./1324'),
  f = ReactNative.NativeModules.SystemSetting,
  p = new ReactNative.NativeEventEmitter(f),
  v = (function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(t, null, [
      {
        key: 'setAppStore',
        value: function () {
          console.warn("You don't need call setAppStore() anymore since V1.7.0");
        },
      },
      {
        key: 'getBrightness',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(f.getBrightness());

                  case 2:
                    return t.abrupt('return', t.sent);

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
        },
      },
      {
        key: 'setBrightness',
        value: function (t) {
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    u.prev = 0;
                    u.next = 3;
                    return regeneratorRuntime.default.awrap(f.setBrightness(t));

                  case 3:
                    return u.abrupt('return', true);

                  case 6:
                    u.prev = 6;
                    u.t0 = u.catch(0);
                    return u.abrupt('return', false);

                  case 9:
                  case 'end':
                    return u.stop();
                }
            },
            null,
            null,
            [[0, 6]],
            Promise
          );
        },
      },
      {
        key: 'setBrightnessForce',
        value: function (u) {
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (!module1324.default.isAndroid) {
                      s.next = 6;
                      break;
                    }

                    s.next = 3;
                    return regeneratorRuntime.default.awrap(t.setScreenMode(0));

                  case 3:
                    if (s.sent) {
                      s.next = 6;
                      break;
                    }

                    return s.abrupt('return', false);

                  case 6:
                    s.next = 8;
                    return regeneratorRuntime.default.awrap(t.setBrightness(u));

                  case 8:
                    return s.abrupt('return', s.sent);

                  case 9:
                  case 'end':
                    return s.stop();
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
        key: 'setAppBrightness',
        value: function (n) {
          if (module1324.default.isAndroid) f.setAppBrightness(n);
          else t.setBrightness(n);
          return true;
        },
      },
      {
        key: 'getAppBrightness',
        value: function () {
          return regeneratorRuntime.default.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (!module1324.default.isAndroid) {
                      n.next = 4;
                      break;
                    }

                    return n.abrupt('return', f.getAppBrightness());

                  case 4:
                    return n.abrupt('return', t.getBrightness());

                  case 5:
                  case 'end':
                    return n.stop();
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
        key: 'grantWriteSettingPremission',
        value: function () {
          t.grantWriteSettingPermission();
        },
      },
      {
        key: 'grantWriteSettingPermission',
        value: function () {
          if (module1324.default.isAndroid) f.openWriteSetting();
        },
      },
      {
        key: 'getScreenMode',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!module1324.default.isAndroid) {
                      t.next = 4;
                      break;
                    }

                    t.next = 3;
                    return regeneratorRuntime.default.awrap(f.getScreenMode());

                  case 3:
                    return t.abrupt('return', t.sent);

                  case 4:
                    return t.abrupt('return', -1);

                  case 5:
                  case 'end':
                    return t.stop();
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
        key: 'setScreenMode',
        value: function (t) {
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    if (!module1324.default.isAndroid) {
                      u.next = 9;
                      break;
                    }

                    u.prev = 1;
                    u.next = 4;
                    return regeneratorRuntime.default.awrap(f.setScreenMode(t));

                  case 4:
                    u.next = 9;
                    break;

                  case 6:
                    u.prev = 6;
                    u.t0 = u.catch(1);
                    return u.abrupt('return', false);

                  case 9:
                    return u.abrupt('return', true);

                  case 10:
                  case 'end':
                    return u.stop();
                }
            },
            null,
            null,
            [[1, 6]],
            Promise
          );
        },
      },
      {
        key: 'saveBrightness',
        value: function () {
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    u.next = 2;
                    return regeneratorRuntime.default.awrap(t.getBrightness());

                  case 2:
                    t.saveBrightnessVal = u.sent;
                    u.next = 5;
                    return regeneratorRuntime.default.awrap(t.getScreenMode());

                  case 5:
                    t.saveScreenModeVal = u.sent;

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
        },
      },
      {
        key: 'restoreBrightness',
        value: function () {
          if (-1 == t.saveBrightnessVal) console.warn('you should call saveBrightness() at least once');
          else {
            t.setBrightness(t.saveBrightnessVal);
            t.setScreenMode(t.saveScreenModeVal);
          }
          return t.saveBrightnessVal;
        },
      },
      {
        key: 'getVolume',
        value: function () {
          var t,
            u = arguments;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    t = u.length > 0 && undefined !== u[0] ? u[0] : 'music';
                    s.next = 3;
                    return regeneratorRuntime.default.awrap(f.getVolume(t));

                  case 3:
                    return s.abrupt('return', s.sent);

                  case 4:
                  case 'end':
                    return s.stop();
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
        key: 'setVolume',
        value: function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};

          if ('string' == typeof n) {
            console.log('setVolume(val, type) is deprecated since 1.2.2, use setVolume(val, config) instead');
            n = {
              type: n,
            };
          }

          n = module11.default(
            {
              playSound: false,
              type: 'music',
              showUI: false,
            },
            n
          );
          f.setVolume(t, n);
        },
      },
      {
        key: 'addVolumeListener',
        value: function (t) {
          return p.addListener('EventVolume', t);
        },
      },
      {
        key: 'removeVolumeListener',
        value: function (t) {
          if (t) t.remove();
        },
      },
      {
        key: 'isWifiEnabled',
        value: function () {
          var t;
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    u.next = 2;
                    return regeneratorRuntime.default.awrap(f.isWifiEnabled());

                  case 2:
                    t = u.sent;
                    return u.abrupt('return', t > 0);

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
        },
      },
      {
        key: 'switchWifiSilence',
        value: function (n) {
          if (module1324.default.isAndroid) {
            t.listenEvent(n);
            f.switchWifiSilence();
          } else t.switchWifi(n);
        },
      },
      {
        key: 'switchWifi',
        value: function (n) {
          t.listenEvent(n);
          f.switchWifi();
        },
      },
      {
        key: 'isLocationEnabled',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(f.isLocationEnabled());

                  case 2:
                    return t.abrupt('return', t.sent);

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
        },
      },
      {
        key: 'getLocationMode',
        value: function () {
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    if (!module1324.default.isAndroid) {
                      u.next = 6;
                      break;
                    }

                    u.next = 3;
                    return regeneratorRuntime.default.awrap(f.getLocationMode());

                  case 3:
                    return u.abrupt('return', u.sent);

                  case 6:
                    u.next = 8;
                    return regeneratorRuntime.default.awrap(t.isLocationEnabled());

                  case 8:
                    if (!u.sent) {
                      u.next = 12;
                      break;
                    }

                    u.t0 = 1;
                    u.next = 13;
                    break;

                  case 12:
                    u.t0 = 0;

                  case 13:
                    return u.abrupt('return', u.t0);

                  case 14:
                  case 'end':
                    return u.stop();
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
        key: 'switchLocation',
        value: function (n) {
          t.listenEvent(n);
          f.switchLocation();
        },
      },
      {
        key: 'isBluetoothEnabled',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(f.isBluetoothEnabled());

                  case 2:
                    return t.abrupt('return', t.sent);

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
        },
      },
      {
        key: 'switchBluetooth',
        value: function (n) {
          t.listenEvent(n);
          f.switchBluetooth();
        },
      },
      {
        key: 'switchBluetoothSilence',
        value: function (n) {
          if (module1324.default.isAndroid) {
            t.listenEvent(n);
            f.switchBluetoothSilence();
          } else f.switchBluetooth(n);
        },
      },
      {
        key: 'isAirplaneEnabled',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(f.isAirplaneEnabled());

                  case 2:
                    return t.abrupt('return', t.sent);

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
        },
      },
      {
        key: 'switchAirplane',
        value: function (n) {
          t.listenEvent(n);
          f.switchAirplane();
        },
      },
      {
        key: 'openAppSystemSettings',
        value: function () {
          var t;
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    u.t0 = ReactNative.Platform.OS;
                    u.next = 'ios' === u.t0 ? 3 : 'android' === u.t0 ? 11 : 14;
                    break;

                  case 3:
                    t = 'app-settings:';
                    u.next = 6;
                    return regeneratorRuntime.default.awrap(ReactNative.Linking.canOpenURL(t));

                  case 6:
                    if (!u.sent) {
                      u.next = 10;
                      break;
                    }

                    u.next = 10;
                    return regeneratorRuntime.default.awrap(ReactNative.Linking.openURL(t));

                  case 10:
                    return u.abrupt('break', 16);

                  case 11:
                    u.next = 13;
                    return regeneratorRuntime.default.awrap(f.openAppSystemSettings());

                  case 13:
                    return u.abrupt('break', 16);

                  case 14:
                    throw new Error('unknown platform');

                  case 16:
                  case 'end':
                    return u.stop();
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
        key: 'addBluetoothListener',
        value: function (u) {
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    s.next = 2;
                    return regeneratorRuntime.default.awrap(t._addListener(false, 'bluetooth', 'EventBluetoothChange', u));

                  case 2:
                    return s.abrupt('return', s.sent);

                  case 3:
                  case 'end':
                    return s.stop();
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
        key: 'addWifiListener',
        value: function (u) {
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    s.next = 2;
                    return regeneratorRuntime.default.awrap(t._addListener(true, 'wifi', 'EventWifiChange', u));

                  case 2:
                    return s.abrupt('return', s.sent);

                  case 3:
                  case 'end':
                    return s.stop();
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
        key: 'addLocationListener',
        value: function (u) {
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    s.next = 2;
                    return regeneratorRuntime.default.awrap(t._addListener(true, 'location', 'EventLocationChange', u));

                  case 2:
                    return s.abrupt('return', s.sent);

                  case 3:
                  case 'end':
                    return s.stop();
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
        key: 'addLocationModeListener',
        value: function (u) {
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    s.next = 2;
                    return regeneratorRuntime.default.awrap(t._addListener(true, 'locationMode', 'EventLocationModeChange', u));

                  case 2:
                    return s.abrupt('return', s.sent);

                  case 3:
                  case 'end':
                    return s.stop();
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
        key: 'addAirplaneListener',
        value: function (u) {
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    s.next = 2;
                    return regeneratorRuntime.default.awrap(t._addListener(true, 'airplane', 'EventAirplaneChange', u));

                  case 2:
                    return s.abrupt('return', s.sent);

                  case 3:
                  case 'end':
                    return s.stop();
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
        key: '_addListener',
        value: function (u, s, l, c) {
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    if (u && !module1324.default.isAndroid) {
                      f.next = 6;
                      break;
                    }

                    f.next = 3;
                    return regeneratorRuntime.default.awrap(t._activeListener(s));

                  case 3:
                    if (!f.sent) {
                      f.next = 6;
                      break;
                    }

                    return f.abrupt('return', p.addListener(l, c));

                  case 6:
                    return f.abrupt('return', null);

                  case 7:
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
        key: '_activeListener',
        value: function (t) {
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    u.prev = 0;
                    u.next = 3;
                    return regeneratorRuntime.default.awrap(f.activeListener(t));

                  case 3:
                    u.next = 9;
                    break;

                  case 5:
                    u.prev = 5;
                    u.t0 = u.catch(0);
                    console.warn(u.t0.message);
                    return u.abrupt('return', false);

                  case 9:
                    return u.abrupt('return', true);

                  case 10:
                  case 'end':
                    return u.stop();
                }
            },
            null,
            null,
            [[0, 5]],
            Promise
          );
        },
      },
      {
        key: 'removeListener',
        value: function (t) {
          if (t) t.remove();
        },
      },
      {
        key: 'listenEvent',
        value: function (t) {
          if (t)
            var n = p.addListener('EventEnterForeground', function () {
              n.remove();
              t();
            });
        },
      },
    ]);
    return t;
  })();

exports.default = v;
v.saveBrightnessVal = -1;
v.saveScreenModeVal = 1;
