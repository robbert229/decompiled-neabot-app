var ReactNative = require('react-native').NativeModules.WifiManager;

exports.CONNECT_ERRORS = {
  unavailableForOSVersion: 'unavailableForOSVersion',
  invalid: 'invalid',
  invalidSSID: 'invalidSSID',
  invalidSSIDPrefix: 'invalidSSIDPrefix',
  invalidPassphrase: 'invalidPassphrase',
  userDenied: 'userDenied',
  locationPermissionDenied: 'locationPermissionDenied',
  unableToConnect: 'unableToConnect',
  locationPermissionRestricted: 'locationPermissionRestricted',
  locationPermissionMissing: 'locationPermissionMissing',
  locationServicesOff: 'locationServicesOff',
  couldNotEnableWifi: 'couldNotEnableWifi',
  couldNotScan: 'couldNotScan',
  couldNotDetectSSID: 'couldNotDetectSSID',
  didNotFindNetwork: 'didNotFindNetwork',
  authenticationErrorOccurred: 'authenticationErrorOccurred',
  android10ImmediatelyDroppedConnection: 'android10ImmediatelyDroppedConnection',
  timeoutOccurred: 'timeoutOccurred',
};
exports.DISCONNECT_ERRORS = {
  couldNotGetWifiManager: 'couldNotGetWifiManager',
};
exports.IS_REMOVE_WIFI_NETWORK_ERRORS = {
  locationPermissionMissing: 'locationPermissionMissing',
  couldNotGetWifiManager: 'couldNotGetWifiManager',
  couldNotGetConnectivityManager: 'couldNotGetConnectivityManager',
  couldNotRemove: 'couldNotRemove',
};
exports.FORCE_WIFI_USAGE_ERRORS = {
  couldNotGetConnectivityManager: 'couldNotGetConnectivityManager',
};
exports.LOAD_WIFI_LIST_ERRORS = {
  locationPermissionMissing: 'locationPermissionMissing',
  locationServicesOff: 'locationServicesOff',
  jsonParsingException: 'jsonParsingException',
  illegalViewOperationException: 'illegalViewOperationException',
};
var n = ReactNative;
exports.default = n;
