var regeneratorRuntime = require('regenerator-runtime');

var ReactNative = require('react-native'),
  module1183 = require('./1183'),
  module1184 = require('./1184'),
  u = ReactNative.NativeModules.RNPermissions;

function o() {
  return u.checkNotifications();
}

var l = {
  check: function (t) {
    return u.checkPermission(t);
  },
  checkLocationAccuracy: module1183.checkLocationAccuracy,
  checkMultiple: function (t) {
    var n = module1184.uniq(t);
    return u.checkMultiplePermissions(n);
  },
  checkNotifications: o,
  openLimitedPhotoLibraryPicker: module1183.openLimitedPhotoLibraryPicker,
  openSettings: function () {
    return regeneratorRuntime.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.awrap(u.openSettings());

            case 2:
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
  request: function (s, c) {
    var o, l, f, h, p;
    return regeneratorRuntime.async(
      function (P) {
        for (;;)
          switch ((P.prev = P.next)) {
            case 0:
              if (!c) {
                P.next = 7;
                break;
              }

              P.next = 3;
              return regeneratorRuntime.awrap(u.shouldShowRequestPermissionRationale(s));

            case 3:
              if (!P.sent) {
                P.next = 7;
                break;
              }

              o = c.title;
              l = c.message;
              f = c.buttonPositive;
              h = c.buttonNegative;
              p = c.buttonNeutral;
              return P.abrupt(
                'return',
                new Promise(function (t) {
                  var c = [];

                  if (h) {
                    var P = function () {
                      return t(u.checkPermission(s));
                    };

                    if (p)
                      c.push({
                        text: p,
                        onPress: P,
                      });
                    c.push({
                      text: h,
                      onPress: P,
                    });
                  }

                  c.push({
                    text: f,
                    onPress: function () {
                      return t(u.requestPermission(s));
                    },
                  });
                  ReactNative.Alert.alert(o, l, c, {
                    cancelable: false,
                  });
                })
              );

            case 7:
              return P.abrupt('return', u.requestPermission(s));

            case 8:
            case 'end':
              return P.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  },
  requestLocationAccuracy: module1183.requestLocationAccuracy,
  requestMultiple: function (t) {
    var n = module1184.uniq(t);
    return u.requestMultiplePermissions(n);
  },
  requestNotifications: o,
};
exports.methods = l;
