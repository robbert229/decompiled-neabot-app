((undefined === c ? {} : c).reactNativeVersion || {}).minor;

var module11 = require('./11'),
  ReactNative = require('react-native'),
  module946 = require('./946'),
  module947 = require('./947'),
  module948 = require('./948'),
  u = ReactNative.Dimensions.get('window'),
  l = u.width,
  P = u.height,
  c = ReactNative.NativeModules.PlatformConstants,
  w =
    'web' !== ReactNative.Platform.OS &&
    (('ios' === ReactNative.Platform.OS && ((812 === P && 375 === l) || (375 === P && 812 === l))) ||
      (896 === P && 414 === l) ||
      (414 === P && 896 === l) ||
      (844 === P && 390 === l) ||
      (390 === P && 844 === l)),
  I = !('ios' !== ReactNative.Platform.OS || w || (P > l && l < 768) || (l > P && P < 768)),
  p = {
    themes: {
      default: module946.default,
      black: module947.default,
      violet: module948.default,
    },
    set: function (t) {
      module11.default(this, t);
    },
    isPad: I,
    isIPhoneX: w,
    fitIPhoneX: true,

    get isLandscape() {
      return ReactNative.Dimensions.get('window').width > ReactNative.Dimensions.get('window').height;
    },

    get statusBarHeight() {
      if ('ios' === ReactNative.Platform.OS) {
        if (this.isIPhoneX) return this.isLandscape ? 0 : this.fitIPhoneX ? 44 : 20;
        if (this.isPad) return 20;
      } else if ('android' === ReactNative.Platform.OS) return ReactNative.Platform.Version > 20 ? ReactNative.StatusBar.currentHeight : 0;

      return this.isLandscape ? 0 : 20;
    },

    get screenInset() {
      var t = this.isLandscape,
        s = this.isIPhoneX,
        n = this.fitIPhoneX;
      return {
        left: t && s && n ? 44 : 0,
        right: t && s && n ? 44 : 0,
        top: this.statusBarHeight,
        bottom: s && n ? (t ? 24 : 34) : 0,
      };
    },
  };

p.set(module946.default);
module.exports = p;
