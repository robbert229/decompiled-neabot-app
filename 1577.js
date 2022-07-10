var o,
  l,
  n,
  t,
  ReactNative = require('react-native'),
  u =
    null !=
    (o =
      null == (l = ReactNative.NativeModules.NativeUnimoduleProxy)
        ? undefined
        : null == (n = l.modulesConstants)
        ? undefined
        : null == (t = n.ExponentConstants)
        ? undefined
        : t.statusBarHeight)
      ? o
      : 0,
  v = ReactNative.Platform.select({
    android: u,
    ios: ReactNative.Platform.Version < 11 ? u : 0,
  });

exports.APPROX_STATUSBAR_HEIGHT = v;
