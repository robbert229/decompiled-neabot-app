var regeneratorRuntime = require('regenerator-runtime'),
  module1117 = require('./1117'),
  module1181 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var s = S(n);
    if (s && s.has(t)) return s.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, u, l);
        else o[u] = t[u];
      }

    o.default = t;
    if (s) s.set(t, o);
    return o;
  })(require('./1181')),
  ReactNative = require('react-native'),
  module593 = require('./593');

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (S = function (t) {
    return t ? s : n;
  })(t);
}

var l = {
  openSettings: function () {
    return module1181.default.openSettings();
  },
  checkNotifications: function () {
    return module1181.default.checkNotifications().then(function (t) {
      switch ((console.log('notifications.status:' + t.status + '----notifications.settings:' + JSON.stringify(t.settings)), t.status)) {
        case 'unavailable':
          break;

        case 'denied':
          module1181.default
            .requestNotifications(['alert', 'badge', 'sound'])
            .then(function () {})
            .catch(function (t) {
              return console.error(t);
            });
          break;

        case 'granted':
          break;

        case 'blocked':
          module1117.default.alert(I18n.t('haveCleaningTask'), I18n.t('isBtnhaveCleaningTask'), [
            {
              text: I18n.t('cancel'),
              style: 'cancel',
            },
            {
              text: I18n.t('btnConfirm'),
              onPress: function () {
                module1181.default.openSettings();
              },
            },
          ]);
      }
    });
  },
  requestNotifications: function () {
    return module1181.default
      .requestNotifications(['alert', 'badge', 'sound'])
      .then(function (t) {})
      .catch(function (t) {
        return console.error(t);
      });
  },
  checkLocation: function (t, n, s, S) {
    var l = ReactNative.Platform.select({
      ios: function () {
        return [module1181.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];
      },
      android: function () {
        return [module1181.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
      },
    })();
    module1181.checkMultiple(l).then(function (E) {
      var f = module1181.RESULTS.UNAVAILABLE,
        L = '';

      switch (
        (l.map(function (t, n) {
          var s = E[t];

          if (f != module1181.RESULTS.LIMITED && f != module1181.RESULTS.GRANTED) {
            if (!(s != module1181.RESULTS.LIMITED && s != module1181.RESULTS.GRANTED)) L = t;
            f = s;
          }
        }),
        f)
      ) {
        case module1181.RESULTS.UNAVAILABLE:
          if (n) n();
          break;

        case module1181.RESULTS.DENIED:
          if ('ios' == ReactNative.Platform.OS) Premissions.requestLocation(t, l, L, s, n, S);
          else {
            module593.default.save('android_location_never_ask_again', S);
            if ('never_ask_again' == S || 'denied' == S) {
              if (n) n();
            } else Premissions.requestLocation(t, l, L, s, n, S);
          }
          break;

        case module1181.RESULTS.LIMITED:
        case module1181.RESULTS.GRANTED:
          if (t) t();
          break;

        case module1181.RESULTS.BLOCKED:
        default:
          if (n) n();
      }
    });
  },
  requestLocation: function (t, n, s, u, S, l) {
    if ('ios' === ReactNative.Platform.OS) module1181.requestMultiple(n).then(function (t) {});
    else Premissions.requestLocationPermission(t, u, S, l);
  },
  requestLocationPermission: function (t, s, o, S) {
    return regeneratorRuntime.default.async(
      function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              t.prev = 0;
              t.next = 3;
              return regeneratorRuntime.default.awrap(ReactNative.PermissionsAndroid.request(ReactNative.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION));

            case 3:
              if ((l = t.sent) === ReactNative.PermissionsAndroid.RESULTS.GRANTED || true === l) {
                ReactNative.DeviceEventEmitter.emit('locationGranted', l);
                module593.default.save('location_never_ask_again', false);
                module593.default.save('android_location_never_ask_again', 'granted');
              } else if ('never_ask_again' === l) {
                ReactNative.DeviceEventEmitter.emit('locationDenied', l);
                module593.default.save('location_never_ask_again', true);
                module593.default.save('android_location_never_ask_again', 'never_ask_again');
              } else if (l === ReactNative.PermissionsAndroid.RESULTS.BLOCKED) {
                if (o) o();
              } else if ('denied' === l) {
                ReactNative.DeviceEventEmitter.emit('locationDenied', l);
                module593.default.save('location_never_ask_again', false);
                module593.default.save('android_location_never_ask_again', 'denied');
              }

              t.next = 9;
              break;

            case 7:
              t.prev = 7;
              t.t0 = t.catch(0);

            case 9:
            case 'end':
              return t.stop();
          }
      },
      null,
      null,
      [[0, 7]],
      Promise
    );
    var l;
  },
  checkLocationAccuracy: function () {},
  requestLocationAccuracy: function () {},
  openLimitedPhotoLibraryPicker: function () {},
  checkCamera: function (t, n) {
    var s = ReactNative.Platform.select({
      ios: function () {
        return module1181.PERMISSIONS.IOS.CAMERA;
      },
      android: function () {
        return module1181.PERMISSIONS.ANDROID.CAMERA;
      },
    })();
    module1181.checkMultiple([s]).then(function (c) {
      switch (((result = c[s]), result)) {
        case module1181.RESULTS.UNAVAILABLE:
          break;

        case module1181.RESULTS.DENIED:
          Premissions.requestCamera(t, s, n);
          break;

        case module1181.RESULTS.LIMITED:
        case module1181.RESULTS.GRANTED:
          if (t) t();
          break;

        case module1181.RESULTS.BLOCKED:
          if (n) n();
      }
    });
  },
  requestCamera: function (t, n, s) {
    module1181.request(n).then(function (n) {
      switch ((console.log('request ====== CAMERA'), n)) {
        case module1181.RESULTS.UNAVAILABLE:
        case module1181.RESULTS.DENIED:
          break;

        case module1181.RESULTS.LIMITED:
        case module1181.RESULTS.GRANTED:
          if (t) t();
          break;

        case module1181.RESULTS.BLOCKED:
      }
    });
  },
  checkBlueTooth: function (t, n, s) {
    var u = ReactNative.Platform.select({
      ios: function () {
        return module1181.PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL;
      },
      android: function () {
        return [module1181.PERMISSIONS.ANDROID.BLUETOOTH, module1181.PERMISSIONS.ANDROID.BLUETOOTH_ADMIN];
      },
    })();
    module1181.checkMultiple([u]).then(function (c) {
      switch (((result = c[u]), result)) {
        case module1181.RESULTS.UNAVAILABLE:
          if (s) s();
          break;

        case module1181.RESULTS.DENIED:
          Premissions.requestBlueTooth(t, u, n);
          break;

        case module1181.RESULTS.LIMITED:
        case module1181.RESULTS.GRANTED:
          if (t) t();
          break;

        case module1181.RESULTS.BLOCKED:
          if (n) n();
      }
    });
  },
  requestBlueTooth: function (t, n, s) {
    module1181.request(n).then(function (n) {
      switch ((console.log('request ====== BlueTooth'), n)) {
        case module1181.RESULTS.UNAVAILABLE:
        case module1181.RESULTS.DENIED:
          break;

        case module1181.RESULTS.LIMITED:
        case module1181.RESULTS.GRANTED:
          if (t) t();
          break;

        case module1181.RESULTS.BLOCKED:
      }
    });
  },
  checkLibrary: function (t, n, s) {
    var u = ReactNative.Platform.select({
      ios: function () {
        return [module1181.PERMISSIONS.IOS.PHOTO_LIBRARY];
      },
      android: function () {
        return [module1181.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, module1181.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE];
      },
    })();
    module1181.checkMultiple(u).then(function (c) {
      var S = module1181.RESULTS.UNAVAILABLE,
        l = '';

      switch (
        (u.map(function (t, n) {
          var s = c[t];

          if (S != module1181.RESULTS.LIMITED && S != module1181.RESULTS.GRANTED) {
            if (!(s != module1181.RESULTS.LIMITED && s != module1181.RESULTS.GRANTED)) l = t;
            S = s;
          }
        }),
        S)
      ) {
        case module1181.RESULTS.UNAVAILABLE:
          break;

        case module1181.RESULTS.DENIED:
          Premissions.requestLibrary(t, u, l, s);
          break;

        case module1181.RESULTS.LIMITED:
        case module1181.RESULTS.GRANTED:
          if (t) t();
          break;

        case module1181.RESULTS.BLOCKED:
          if (n) n();
      }
    });
  },
  requestLibrary: function (t, n, s, c) {
    module1181.requestMultiple(n).then(function (t) {});
  },
  checkPermission: function (t, n) {
    var s = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [],
      c = this,
      u = true,
      S = [];
    if (!(s.length <= 0))
      module1181.default.checkMultiple(s).then(function (s) {
        Log('status', s);
        Object.keys(s).map(function (t, n) {
          if (!('authorized' == s[t])) {
            S.push(t);
            u = false;
          }
        });
        if (u) t();
        else if (S.length > 0) c.request(t, n, S, 0);
      });
  },
  request: function (t, n, s, o) {
    if (o < s.length) {
      Log('per', s);
      this.requestPermission(t, n, s, o);
    } else t();
  },
  requestPermission: function (t, n, s, u) {
    var S = this;
    Log('per[i]', s[u]);
    module1181.default
      .request(s[u])
      .then(function (l) {
        if ((Log('res', l), 'authorized' != l)) {
          if (n) return void n();

          switch (s[u]) {
            case 'camera':
              ReactNative.Alert.alert('\u65e0\u6cd5\u4f7f\u7528!', '\u8bf7\u6388\u4e88\u5e94\u7528\u4f7f\u7528\u76f8\u673a\u6743\u9650', [
                {
                  text: '\u53d6\u6d88',
                  style: 'cancel',
                },
                {
                  text: '\u8bbe\u7f6e\u6743\u9650',
                  onPress: module1181.default.openSettings,
                },
              ]);
              break;

            case 'photo':
              ReactNative.Alert.alert('\u65e0\u6cd5\u8bbf\u95ee!', '\u8bf7\u6388\u4e88\u5e94\u7528\u8bbf\u95ee\u5b58\u50a8sd\u5361\u6743\u9650', [
                {
                  text: '\u53d6\u6d88',
                  style: 'cancel',
                },
                {
                  text: '\u8bbe\u7f6e\u6743\u9650',
                  onPress: module1181.default.openSettings,
                },
              ]);
              break;

            case 'location':
              ReactNative.Alert.alert('\u65e0\u6cd5\u8bbf\u95ee!', '\u8bf7\u6388\u4e88\u5e94\u7528\u8bbf\u95ee\u4f4d\u7f6e\u4fe1\u606f\u6743\u9650', [
                {
                  text: '\u53d6\u6d88',
                  style: 'cancel',
                },
                {
                  text: '\u8bbe\u7f6e\u6743\u9650',
                  onPress: module1181.default.openSettings,
                },
              ]);
              break;

            case 'microphone':
              ReactNative.Alert.alert('\u65e0\u6cd5\u8bbf\u95ee!', '\u8bf7\u6388\u4e88\u5e94\u7528\u5f55\u97f3\u6743\u9650', [
                {
                  text: '\u53d6\u6d88',
                  style: 'cancel',
                },
                {
                  text: '\u8bbe\u7f6e\u6743\u9650',
                  onPress: module1181.default.openSettings,
                },
              ]);
              break;

            case 'contacts':
              ReactNative.Alert.alert('\u65e0\u6cd5\u8bbf\u95ee!', '\u8bf7\u6388\u4e88\u5e94\u7528\u83b7\u53d6\u8054\u7cfb\u4eba\u6743\u9650', [
                {
                  text: '\u53d6\u6d88',
                  style: 'cancel',
                },
                {
                  text: '\u8bbe\u7f6e\u6743\u9650',
                  onPress: module1181.default.openSettings,
                },
              ]);
              break;

            default:
              ReactNative.Alert.alert('\u65e0\u6cd5\u8bbf\u95ee!', '\u8bf7\u6388\u4e88\u5e94\u7528\u6743\u9650', [
                {
                  text: '\u53d6\u6d88',
                  style: 'cancel',
                },
                {
                  text: '\u8bbe\u7f6e\u6743\u9650',
                  onPress: module1181.default.openSettings,
                },
              ]);
          }
        } else S.request(t, n, s, ++u);
      })
      .catch(function (t) {
        return Log(t);
      });
  },
};
exports.default = l;
