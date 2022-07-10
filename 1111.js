var ReactNative = require('react-native'),
  t = {
    listBindingByAccount: function (t, u) {
      return ReactNative.NativeModules.DeviceApiModule.listBindingByAccount(t, u);
    },
    listBindingByDev: function (t, u, o, c) {
      return ReactNative.NativeModules.DeviceApiModule.listBindingByDev(t, u, o, c);
    },
    openCamera: function () {
      return ReactNative.NativeModules.DeviceApiModule.openCamera();
    },
    scanBindByShareQrCode: function (t) {
      return ReactNative.NativeModules.DeviceApiModule.scanBindByShareQrCode(t);
    },
    generateShareQrCode: function (t) {
      return ReactNative.NativeModules.DeviceApiModule.generateShareQrCode(t);
    },
    createBitmapStr: function (t) {
      return ReactNative.NativeModules.DeviceApiModule.createBitmapStr(t);
    },
    getDeviceInfo: function (t) {
      return ReactNative.NativeModules.DeviceApiModule.getDeviceInfo(t);
    },
    unbindAccountAndDev: function (t) {
      return ReactNative.NativeModules.DeviceApiModule.unbindAccountAndDev(t);
    },
    shareDevicesAndScenes: function (t, u, o, c, v) {
      return ReactNative.NativeModules.DeviceApiModule.shareDevicesAndScenes(t, u, o, c, v);
    },
    queryMsg: function (t, u, o) {
      return ReactNative.NativeModules.DeviceApiModule.queryMsg(t, u, o);
    },
    getShareNoticeList: function (t, u) {
      return ReactNative.NativeModules.DeviceApiModule.getShareNoticeList(t, u);
    },
    confirmShare: function (t, u) {
      return ReactNative.NativeModules.DeviceApiModule.confirmShare(t, u);
    },
    removeMessage: function (t, u, o) {
      return ReactNative.NativeModules.DeviceApiModule.removeMessage(t, u, o);
    },
    unbindByManager: function (t, u) {
      return ReactNative.NativeModules.DeviceApiModule.unbindByManager(t, u);
    },
    addFeedback: function (t, u, o, c, v, l, M) {
      return ReactNative.NativeModules.DeviceApiModule.addFeedback(t, u, o, c, v, l, M);
    },
    feedbackDetail: function (t) {
      return ReactNative.NativeModules.DeviceApiModule.feedbackDetail(t);
    },
    feedbackReply: function (t, u, o) {
      return ReactNative.NativeModules.DeviceApiModule.feedbackReply(t, u, o);
    },
    feedbackList: function (t, u) {
      return ReactNative.NativeModules.DeviceApiModule.feedbackList(t, u);
    },
  };

exports.default = t;
