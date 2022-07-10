exports.isIphoneX = n;
exports.ifIphoneX = o;

exports.getStatusBarHeight = function (n) {
  return ReactNative.Platform.select({
    ios: o(n ? 44 : 30, 20),
    android: ReactNative.StatusBar.currentHeight,
    default: 0,
  });
};

exports.getBottomSpace = function () {
  return n() ? 34 : 0;
};

var ReactNative = require('react-native');

function n() {
  var n = ReactNative.Dimensions.get('window');
  return !(
    'ios' !== ReactNative.Platform.OS ||
    ReactNative.Platform.isPad ||
    ReactNative.Platform.isTVOS ||
    (812 !== n.height && 812 !== n.width && 896 !== n.height && 896 !== n.width)
  );
}

function o(t, o) {
  return n() ? t : o;
}
