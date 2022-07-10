var module24 = require('./24'),
  ReactNative = require('react-native'),
  l = function o() {
    module24.default(this, o);
  };

exports.default = l;
l.isAndroid = 'android' === ReactNative.Platform.OS;
l.isIOS = 'ios' === ReactNative.Platform.OS;
