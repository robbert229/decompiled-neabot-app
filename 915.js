var ReactNative = require('react-native'),
  t = {
    getSecurityCode: function (t, n, u, l) {
      return ReactNative.NativeModules.LdLoginHelperModule.getSecurityCode(t, n, u, l);
    },
    checkSecurityCode: function (t, n, u, l) {
      return ReactNative.NativeModules.LdLoginHelperModule.checkSecurityCode(t, n, u, l);
    },
    registerAccount: function (t, n, u, l, s) {
      return ReactNative.NativeModules.LdLoginHelperModule.registerAccount(t, n, u, l, s);
    },
    unregister: function (t, n) {
      return ReactNative.NativeModules.LdLoginHelperModule.unregister(t, n);
    },
    login: function (t, n, u) {
      return ReactNative.NativeModules.LdLoginHelperModule.login(t, n, u);
    },
    editUserName: function (t, n) {
      return ReactNative.NativeModules.LdLoginHelperModule.editUserName(t, n);
    },
    uploadAvatarFile: function (t, n) {
      return ReactNative.NativeModules.LdLoginHelperModule.uploadAvatarFile(t, n);
    },
    getUserSTS: function (t) {
      return ReactNative.NativeModules.LdLoginHelperModule.getUserSTS(t);
    },
    createUserAuthURL: function (t) {
      return ReactNative.NativeModules.LdLoginHelperModule.createUserAuthURL(t);
    },
    createDeviceAuthURL: function (t, n, u) {
      return ReactNative.NativeModules.LdLoginHelperModule.createDeviceAuthURL(t, n, u);
    },
    getDeviceSTS: function (t, n, u, l) {
      return ReactNative.NativeModules.LdLoginHelperModule.getDeviceSTS(t, n, u, l);
    },
    synchronizeAppInfo: function (t, n) {
      return ReactNative.NativeModules.LdLoginHelperModule.synchronizeAppInfo(t, n);
    },
    getUserInfoByAliIdentityIds: function (t, n) {
      return ReactNative.NativeModules.LdLoginHelperModule.getUserInfoByAliIdentityIds(t, n);
    },
    addShareUser: function (t, n, u, l) {
      return ReactNative.NativeModules.LdLoginHelperModule.addShareUser(t, n, u, l);
    },
    forgetPassword: function (t, n, u, l, s) {
      return ReactNative.NativeModules.LdLoginHelperModule.forgetPassword(t, n, u, l, s);
    },
    setServerLanguage: function (t) {
      return ReactNative.NativeModules.LdLoginHelperModule.setServerLanguage(t);
    },
    restartApp: function () {
      return ReactNative.NativeModules.LdLoginHelperModule.restartApp();
    },
    isLocationOpen: function () {
      return ReactNative.NativeModules.LdLoginHelperModule.isLocationOpen();
    },
    openLocationSetting: function () {
      return ReactNative.NativeModules.LdLoginHelperModule.openLocationSetting();
    },
    hasPermissions: function () {
      return ReactNative.NativeModules.LdLoginHelperModule.hasPermissions();
    },
    requestPermission: function () {
      return ReactNative.NativeModules.LdLoginHelperModule.requestPermission();
    },
  };

exports.default = t;
