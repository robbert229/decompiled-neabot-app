exports.px2dp = function (t) {
  return (t * width) / c;
};

exports.setSpText = function (t) {
  return (t = Math.round(((t * v + 0.5) * o) / u)) / l;
};

exports.scaleSize = function (t) {
  return (t = Math.round(t * v + 0.5)) / l;
};

exports.isEmptyObject = function (t) {
  for (var n in t) return false;

  return true;
};

exports.isIphoneX = P;
exports.getStatusBarHeight = B;

require('./589');

var ReactNative = require('react-native'),
  u = ReactNative.PixelRatio.getFontScale();

exports.fontScale = u;
var o = ReactNative.PixelRatio.get();
exports.pixelRatio = o;
var h = ReactNative.Dimensions.get('window').width;
exports.deviceWidth = h;
var s = ReactNative.Dimensions.get('window').height;
exports.deviceHeight = s;
var c = 375,
  l = 2;
exports.defaultPixel = l;
var v = (s / 406) ** (h / 187.5);
var f = h / c;
exports.unitWidth = f;
var S = s / 812;
exports.unitHeight = S;
var H = {
  scaleSize: function (t) {
    return t * f;
  },
  scaleHeight: function (t) {
    return t * S;
  },
  setSpText: function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
    return (t * f ** S) / (n ? 1 : u);
  },
  onePixel: 1 / ReactNative.PixelRatio.get(),
};
exports.default = H;
var w = B();
exports.statusBarHeight = w;
var x = P() ? 34 : 0;

function P() {
  var t = ReactNative.Dimensions.get('window'),
    u = t.height,
    o = t.width;
  return ('ios' === ReactNative.Platform.OS && ((812 === u && 375 === o) || (375 === u && 812 === o))) || (896 === u && 414 === o) || (414 === u && 896 === o);
}

exports.safeAreaViewHeight = x;

var p = function () {
  return 'ios' === ReactNative.Platform.OS;
};

exports.isiOS = p;
var T = p() ? (P() ? 34 : 20) : ReactNative.StatusBar.currentHeight;
exports.STATUS_BAR_HEIGHT = T;

var _ = 11 + w;

function B() {
  return 'android' == ReactNative.Platform.OS ? ReactNative.StatusBar.currentHeight : P() ? 44 : 20;
}

exports.titleHeight = _;
