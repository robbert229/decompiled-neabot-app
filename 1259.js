require('./1260');

require('prop-types');

var ReactNative = require('react-native'),
  u = {
    installApk: function (u) {
      return ReactNative.NativeModules.LdUtilApiModule.installApk(u);
    },
    initAliIoTSmart: function () {
      return ReactNative.NativeModules.LdUtilApiModule.initAliIoTSmart();
    },
    initHaConfig: function (u) {
      return ReactNative.NativeModules.LdUtilApiModule.initHaConfig(u);
    },
    emasLoge: function (u, l, o) {
      return ReactNative.NativeModules.LdUtilApiModule.emasLoge(u, l, o);
    },
    emsUploadLog: function (u) {
      return ReactNative.NativeModules.LdUtilApiModule.emsUploadLog(u);
    },
    buglyPutUserData: function (u, l) {
      return ReactNative.NativeModules.LdUtilApiModule.buglyPutUserData(u, l);
    },
    buglyPostException: function (u, l) {
      return ReactNative.NativeModules.LdUtilApiModule.buglyPostException(u, l);
    },
    buglySetUserId: function (u) {
      return ReactNative.NativeModules.LdUtilApiModule.buglySetUserId(u);
    },
    buglyLogD: function (u, l) {
      return ReactNative.NativeModules.LdUtilApiModule.buglyLogD(u, l);
    },
    buglyLogV: function (u, l) {
      return ReactNative.NativeModules.LdUtilApiModule.buglyLogV(u, l);
    },
    buglyLogE: function (u, l) {
      return ReactNative.NativeModules.LdUtilApiModule.buglyLogE(u, l);
    },
    buglyLogI: function (u, l) {
      return ReactNative.NativeModules.LdUtilApiModule.buglyLogI(u, l);
    },
  };

exports.default = u;
