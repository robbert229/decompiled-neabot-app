var ReactNative = require('react-native').NativeModules,
  o = ReactNative.PlatformLocalStorage || ReactNative.RNC_AsyncSQLiteDBStorage || ReactNative.RNCAsyncStorage;

exports.default = o;
