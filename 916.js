var ReactNative = require('react-native'),
  o = {
    testPing: function () {
      return ReactNative.NativeModules.AccountApiModule.testPing();
    },
    getCountryList: function () {
      return ReactNative.NativeModules.AccountApiModule.getCountryList();
    },
    setCountry: function (o) {
      ReactNative.NativeModules.AccountApiModule.setCountry(o);
    },
    setLanguage: function (o) {
      ReactNative.NativeModules.AccountApiModule.setLanguage(o);
    },
    getLanguage: function () {
      return ReactNative.NativeModules.AccountApiModule.getLanguage();
    },
    authCodeLogin: function (o) {
      return ReactNative.NativeModules.AccountApiModule.authCodeLogin(o);
    },
    setProductScope: function (o) {
      ReactNative.NativeModules.AccountApiModule.setProductScope(o);
    },
    setDebug: function (o) {
      ReactNative.NativeModules.AccountApiModule.setDebug(o);
    },
    login: function () {
      return ReactNative.NativeModules.AccountApiModule.login();
    },
    updateDisplayName: function (o) {
      return ReactNative.NativeModules.AccountApiModule.updateDisplayName(o);
    },
    pickImage: function () {
      return ReactNative.NativeModules.AccountApiModule.pickImage();
    },
    updateAvatarUrl: function (o) {
      return ReactNative.NativeModules.AccountApiModule.updateAvatarUrl(o);
    },
    getUserInfo: function () {
      return ReactNative.NativeModules.AccountApiModule.getUserInfo();
    },
    logout: function () {
      return ReactNative.NativeModules.AccountApiModule.logout();
    },
    getIdentifyId: function () {
      return ReactNative.NativeModules.AccountApiModule.getIdentifyId();
    },
    startTMAuth: function (o, u) {
      return ReactNative.NativeModules.AccountApiModule.startTMAuth(o, u);
    },
    isbindTaobaoAccount: function () {
      return ReactNative.NativeModules.AccountApiModule.isbindTaobaoAccount();
    },
    bindTaobaoAccount: function (o) {
      return ReactNative.NativeModules.AccountApiModule.bindTaobaoAccount(o);
    },
    unbindTaobaoAccount: function () {
      return ReactNative.NativeModules.AccountApiModule.unbindTaobaoAccount();
    },
    findLocation: function () {
      return ReactNative.NativeModules.AccountApiModule.findLocation();
    },
    stopLocation: function () {
      return ReactNative.NativeModules.AccountApiModule.stopLocation();
    },
  };

exports.default = o;
