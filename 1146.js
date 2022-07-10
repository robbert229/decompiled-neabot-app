var ReactNative = require('react-native'),
  n = {
    setOssLog: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.setOssLog(n);
    },
    setUserOssClient: function (n, o, u) {
      return ReactNative.NativeModules.OssManagerApiModule.setUserOssClient(n, o, u);
    },
    setDeviceOssClient: function (n, o, u, s) {
      return ReactNative.NativeModules.OssManagerApiModule.setDeviceOssClient(n, o, u, s);
    },
    checkAppUpdate: function () {
      return ReactNative.NativeModules.OssManagerApiModule.checkAppUpdate();
    },
    appNativeUpdate: function (n, o) {
      ReactNative.NativeModules.OssManagerApiModule.appNativeUpdate(n, o);
    },
    getCommentGuideVersion: function () {
      return ReactNative.NativeModules.OssManagerApiModule.getCommentGuideVersion();
    },
    getGuideContent: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getGuideContent(n);
    },
    getSweepHistoryRecord: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getSweepHistoryRecord(n);
    },
    getRecordDetail: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getRecordDetail(n);
    },
    getMapManagerData: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getMapManagerData(n);
    },
    deleteMap: function (n, o) {
      return ReactNative.NativeModules.OssManagerApiModule.deleteMap(n, o);
    },
    restoreMap: function (n, o, u) {
      return ReactNative.NativeModules.OssManagerApiModule.restoreMap(n, o, u);
    },
    getProtocolVersion: function () {
      return ReactNative.NativeModules.OssManagerApiModule.getProtocolVersion();
    },
    getProtocolUrl: function () {
      return ReactNative.NativeModules.OssManagerApiModule.getProtocolUrl();
    },
    getVoiceVersionUrl: function () {
      return ReactNative.NativeModules.OssManagerApiModule.getVoiceVersionUrl();
    },
    getVoiceDetail: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getVoiceDetail(n);
    },
    getHandleGuideVer: function () {
      return ReactNative.NativeModules.OssManagerApiModule.getHandleGuideVer();
    },
    getHandleGuideDetail: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getHandleGuideDetail(n);
    },
    getProductGuideVer: function () {
      return ReactNative.NativeModules.OssManagerApiModule.getProductGuideVer();
    },
    getProductGuideDetail: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getProductGuideDetail(n);
    },
    getVoiceImage: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getVoiceImage(n);
    },
    getAppFunctionVersion: function () {
      return ReactNative.NativeModules.OssManagerApiModule.getAppFunctionVersion();
    },
    getAppFunctionContent: function (n) {
      return ReactNative.NativeModules.OssManagerApiModule.getAppFunctionContent(n);
    },
  };

exports.default = n;
