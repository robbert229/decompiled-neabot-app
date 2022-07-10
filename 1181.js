var t = {
  check: true,
  checkLocationAccuracy: true,
  checkMultiple: true,
  checkNotifications: true,
  openLimitedPhotoLibraryPicker: true,
  openSettings: true,
  request: true,
  requestLocationAccuracy: true,
  requestMultiple: true,
  requestNotifications: true,
  PERMISSIONS: true,
  RESULTS: true,
};
Object.defineProperty(exports, 'PERMISSIONS', {
  enumerable: true,
  get: function () {
    return module1185.PERMISSIONS;
  },
});
Object.defineProperty(exports, 'RESULTS', {
  enumerable: true,
  get: function () {
    return module1186.RESULTS;
  },
});

var ReactNative = require('react-native'),
  module1182 = require('./1182'),
  module1185 = require('./1185'),
  module1186 = require('./1186'),
  module1187 = require('./1187');

if (
  (Object.keys(module1187).forEach(function (o) {
    if ('default' !== o && '__esModule' !== o)
      Object.prototype.hasOwnProperty.call(t, o) ||
        (o in exports && exports[o] === module1187[o]) ||
        Object.defineProperty(exports, o, {
          enumerable: true,
          get: function () {
            return module1187[o];
          },
        });
  }),
  null == ReactNative.NativeModules.RNPermissions)
)
  throw new Error(
    'react-native-permissions: NativeModule.RNPermissions is null. To fix this issue try these steps:\n\u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then clean, rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n\u2022 If you are getting this error while unit testing you need to mock the native module. You can use this to get started: https://github.com/zoontek/react-native-permissions/blob/master/mock.js\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/zoontek/react-native-permissions'
  );
var h = module1182.methods.check;
exports.check = h;
var l = module1182.methods.checkLocationAccuracy;
exports.checkLocationAccuracy = l;
var p = module1182.methods.checkMultiple;
exports.checkMultiple = p;
var S = module1182.methods.checkNotifications;
exports.checkNotifications = S;
var f = module1182.methods.openLimitedPhotoLibraryPicker;
exports.openLimitedPhotoLibraryPicker = f;
var k = module1182.methods.openSettings;
exports.openSettings = k;
var y = module1182.methods.request;
exports.request = y;
var L = module1182.methods.requestLocationAccuracy;
exports.requestLocationAccuracy = L;
var P = module1182.methods.requestMultiple;
exports.requestMultiple = P;
var v = module1182.methods.requestNotifications;
exports.requestNotifications = v;
var b = {
  PERMISSIONS: module1185.PERMISSIONS,
  RESULTS: module1186.RESULTS,
  check: h,
  checkLocationAccuracy: l,
  checkMultiple: p,
  checkNotifications: S,
  openLimitedPhotoLibraryPicker: f,
  openSettings: k,
  request: y,
  requestLocationAccuracy: L,
  requestMultiple: P,
  requestNotifications: v,
};
exports.default = b;
