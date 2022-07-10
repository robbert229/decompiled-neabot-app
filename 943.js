var ReactNative = require('react-native'),
  module596 = require('./596'),
  u = {
    getProductByAppKey: function () {
      return ReactNative.NativeModules.ConfigApiModule.getProductByAppKey();
    },
    getCurrentSsid: function () {
      return 'android' == ReactNative.Platform.OS ? ReactNative.NativeModules.ReloadAppModule.getCurrentSSID() : ReactNative.NativeModules.ConfigApiModule.getCurrentSsid();
    },
    getWifiType: function () {
      return ReactNative.NativeModules.ConfigApiModule.getWifiType();
    },
    switchWifiByPhone: function () {
      return ReactNative.NativeModules.ConfigApiModule.switchWifiByPhone();
    },
    startDiscovery: function (o) {
      ReactNative.NativeModules.ConfigApiModule.startDiscovery(o);
    },
    stopDiscovery: function () {
      return ReactNative.NativeModules.ConfigApiModule.stopDiscovery();
    },
    setGetProductByAppKey: function (o) {
      return ReactNative.NativeModules.ConfigApiModule.setGetProductByAppKey(o);
    },
    setAliProvisionMode: function () {
      return ReactNative.NativeModules.ConfigApiModule.setAliProvisionMode();
    },
    setDevice: function (o, n, u, l) {
      return ReactNative.NativeModules.ConfigApiModule.setDevice(o, n, u, l);
    },
    startAddDevice: function () {
      return ReactNative.NativeModules.ConfigApiModule.startAddDevice();
    },
    stopAddDevice: function () {
      return ReactNative.NativeModules.ConfigApiModule.stopAddDevice();
    },
    toggleProvision: function (o, n, u) {
      return ReactNative.NativeModules.ConfigApiModule.toggleProvision(o, n, u);
    },
    bindDevice: function (o, n, u) {
      return ReactNative.NativeModules.ConfigApiModule.bindDevice(o, n, u);
    },
    getBindToken: function (o, n) {
      return ReactNative.NativeModules.ConfigApiModule.getBindToken(o, n);
    },
    checkBLEEnable: function () {
      return ReactNative.NativeModules.ConfigApiModule.checkBLEEnable();
    },
    startBLEScan: function (o) {
      return ReactNative.NativeModules.ConfigApiModule.startBLEScan(o);
    },
    stopBLEScan: function () {
      return ReactNative.NativeModules.ConfigApiModule.stopBLEScan();
    },
    connectBLE: function (o) {
      return ReactNative.NativeModules.ConfigApiModule.connectBLE(o);
    },
    sendBLEData: function (o) {
      return ReactNative.NativeModules.ConfigApiModule.sendBLEData(o);
    },
    checkToken: function (o) {
      return ReactNative.NativeModules.ConfigApiModule.checkToken(o);
    },
    closeBLE: function () {
      return ReactNative.NativeModules.ConfigApiModule.closeBLE();
    },
    getCurrentCountryCode: function () {
      return 'android' == ReactNative.Platform.OS
        ? ReactNative.NativeModules.ReloadAppModule.getCurrentCountryCode()
        : new Promise(function (o, t) {
            o(module596.default.getCountry());
          });
    },
    getAndroidSystemLanguage: function () {
      return ReactNative.NativeModules.ReloadAppModule.getSystemLanguage();
    },
  };

exports.default = u;
