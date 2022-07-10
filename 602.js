var ReactNative = require('react-native'),
  o = ReactNative.NativeModules.RNDeviceInfo;

if (
  (('web' !== ReactNative.Platform.OS && 'dom' !== ReactNative.Platform.OS) || (o = require('./603')),
  !o && ('android' === ReactNative.Platform.OS || 'ios' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS || 'dom' === ReactNative.Platform.OS))
)
  throw new Error(
    '@react-native-community/react-native-device-info: NativeModule.RNDeviceInfo is null. To fix this issue try these steps:\n  \u2022 For react-native <= 0.59: Run `react-native link react-native-device-info` in the project root.\n  \u2022 Rebuild and re-run the app.\n  \u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n  If none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-device-info'
  );
var n = o;
exports.default = n;
