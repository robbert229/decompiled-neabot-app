var ReactNative = require('react-native').UIManager.getViewManagerConfig('RNCSafeAreaProvider'),
  t = null != ReactNative && null != ReactNative.Constants ? ReactNative.Constants.initialWindowMetrics : null;

exports.initialWindowMetrics = t;
var l = null == t ? undefined : t.insets;
exports.initialWindowSafeAreaInsets = l;
