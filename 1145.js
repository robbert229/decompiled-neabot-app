var ReactNative = require('react-native'),
  o = {
    getStatus: function (o) {
      return ReactNative.NativeModules.ControlApiModule.getStatus(o);
    },
    getProperties: function (o) {
      return ReactNative.NativeModules.ControlApiModule.getProperties(o);
    },
    sendAppState: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.sendAppState(o, n);
    },
    setPanelDevice: function (o) {
      ReactNative.NativeModules.ControlApiModule.setPanelDevice(o);
    },
    addSingleListener: function () {
      ReactNative.NativeModules.ControlApiModule.addSingleListener();
    },
    addTotalListener: function () {
      ReactNative.NativeModules.ControlApiModule.addTotalListener();
    },
    removeTotalListener: function () {
      ReactNative.NativeModules.ControlApiModule.removeTotalListener();
    },
    findRobot: function (o) {
      return ReactNative.NativeModules.ControlApiModule.findRobot(o);
    },
    startTotalSweep: function (o, n, u) {
      return ReactNative.NativeModules.ControlApiModule.startTotalSweep(o, n, u);
    },
    startPointSweep: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.startPointSweep(o, n);
    },
    startAreaSweep: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.startAreaSweep(o, n);
    },
    startSmartAreaSweep: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.startSmartAreaSweep(o, n);
    },
    startCurPointSweep: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.startCurPointSweep(o, n);
    },
    pauseSweep: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.pauseSweep(o, n);
    },
    resumeSweepService: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.resumeSweepService(o, n);
    },
    continueSweep: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.continueSweep(o, n);
    },
    goCharge: function (o) {
      return ReactNative.NativeModules.ControlApiModule.goCharge(o);
    },
    lightSwitch: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.lightSwitch(o, n);
    },
    setVoiceLv: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.setVoiceLv(o, n);
    },
    saveAreas2Service: function (o) {
      return ReactNative.NativeModules.ControlApiModule.saveAreas2Service(o);
    },
    deleteMap: function (o) {
      return ReactNative.NativeModules.ControlApiModule.deleteMap(o);
    },
    setDeviceNickName: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.setDeviceNickName(o, n);
    },
    setNickNameRobotProperty: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.setNickNameRobotProperty(o, n);
    },
    setWindLv: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.setWindLv(o, n);
    },
    setWaterLv: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.setWaterLv(o, n);
    },
    robotDebugMode: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.robotDebugMode(o, n);
    },
    setRobotProperty: function (o) {
      return ReactNative.NativeModules.ControlApiModule.setRobotProperty('FindRobot', 1, o);
    },
    autoClearAreaService: function (o) {
      return ReactNative.NativeModules.ControlApiModule.autoClearAreaService(o);
    },
    autoResetAreaService: function (o) {
      return ReactNative.NativeModules.ControlApiModule.autoResetAreaService(o);
    },
    autoSplitAreaService: function (o) {
      return ReactNative.NativeModules.ControlApiModule.autoSplitAreaService(o);
    },
    autoMergeAreaService: function (o) {
      return ReactNative.NativeModules.ControlApiModule.autoMergeAreaService(o);
    },
    hasAutoArea: function () {
      return ReactNative.NativeModules.ControlApiModule.hasAutoArea();
    },
    panelDestroy: function () {
      return ReactNative.NativeModules.ControlApiModule.panelDestroy();
    },
    setAppointments: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.setAppointments(o, n);
    },
    queryByUser: function (o) {
      return ReactNative.NativeModules.ControlApiModule.queryByUser(o);
    },
    batchUpgradeByUser: function (o) {
      return ReactNative.NativeModules.ControlApiModule.batchUpgradeByUser(o);
    },
    otaProgress: function (o) {
      return ReactNative.NativeModules.ControlApiModule.otaProgress(o);
    },
    setDustFreq: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.setDustFreq(o, n);
    },
    startDust: function (o) {
      return ReactNative.NativeModules.ControlApiModule.startDust(o);
    },
    resetLoss: function (o, n) {
      return ReactNative.NativeModules.ControlApiModule.resetLoss(o, n);
    },
    backMap: function (o, n, u) {
      return ReactNative.NativeModules.ControlApiModule.backMap(o, n, u);
    },
    getLocalControlParam: function (o) {
      return ReactNative.NativeModules.ControlApiModule.getLocalControlParam(o);
    },
    createUdpSocket: function () {
      ReactNative.NativeModules.ControlApiModule.createUdpSocket();
    },
    sendByUdp: function (o, n, u, l, s) {
      ReactNative.NativeModules.ControlApiModule.sendByUdp(o, n, u, l, s);
    },
    destroyUdpSocket: function () {
      ReactNative.NativeModules.ControlApiModule.destroyUdpSocket();
    },
    saveAreas2ServiceNew: function (o, n) {
      ReactNative.NativeModules.ControlApiModule.saveAreas2ServiceNew(o, n);
    },
    getSweepMapBitmap: function (o) {
      return ReactNative.NativeModules.ControlApiModule.getSweepMapBitmap(o);
    },
    getSweepMapBitmapWithParam: function (o, n, u, l) {
      return ReactNative.NativeModules.ControlApiModule.getSweepMapBitmap(o, n, u, l);
    },
    updateVoice: function (o, n, u) {
      return ReactNative.NativeModules.ControlApiModule.updateVoice(o, n, u);
    },
    getCurVoice: function (o) {
      return ReactNative.NativeModules.ControlApiModule.getCurVoice(o);
    },
    updateWifiInfo: function (o) {
      return ReactNative.NativeModules.ControlApiModule.updateWifiInfo(o);
    },
    operateMap: function (o, n, u) {
      return ReactNative.NativeModules.ControlApiModule.operateMap(o, n, u);
    },
  };

exports.default = o;
