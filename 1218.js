var ReactNative = require('react-native'),
  t = ReactNative.NativeModules.LdUtilApiModule,
  n = ReactNative.NativeModules.RNAliyunModule;

function u(o) {
  return !(!Config.needCheckISO || !o || ('CN' != o && 'TW' != o && 'MO' != o && 'HK' != o));
}

var l = {
  initMudule: function (l, f) {
    if (undefined != f) 'ios' == ReactNative.Platform.OS ? u(l) || n.initMudule(f) : t.initHaConfig(f);
  },
  setUserID: function (l, f) {
    if ('ios' == ReactNative.Platform.OS) {
      if (!u(l)) n.setUserID(f);
    } else t.buglySetUserId(f);
  },
  postLog: function (l, f, s, c, M) {
    if ('ios' == ReactNative.Platform.OS) {
      if (!u(l)) n.error(M, c);
    } else {
      t.emasLoge('fail', 'error', c);
      t.emsUploadLog('network');
    }
  },
  log: function (t, l, f, s, c) {
    if ('ios' == ReactNative.Platform.OS) u(t) || n.log(l, s);
  },
  setCountry: function (o) {
    n.setCountry(o);
  },
};
exports.default = l;
