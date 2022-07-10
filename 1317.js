var ReactNative = require('react-native'),
  o = ReactNative.Dimensions.get('window'),
  n = o.width,
  l = o.height,
  u = function (o) {
    if (2 === ReactNative.PixelRatio) return n < 360 ? 0.95 * o : l < 667 ? o : l >= 667 && l <= 735 ? 1.15 * o : 1.25 * o;
    else if (3 === ReactNative.PixelRatio) return n <= 360 ? o : l < 667 ? 1.15 * o : l >= 667 && l <= 735 ? 1.2 * o : 1.27 * o;
    else return 3.5 === ReactNative.PixelRatio ? (n <= 360 ? o : l < 667 ? 1.2 * o : l >= 667 && l <= 735 ? 1.25 * o : 1.4 * o) : o;
  };

exports.default = u;
