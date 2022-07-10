exports.default = function () {
  if (!n) {
    if ('android' === module1508.Platform.OS)
      throw new Error('RNVectorIconsModule not available, did you properly integrate the module? Try running `react-native link react-native-vector-icons` and recompiling.');
    throw new Error(
      'RNVectorIconsManager not available, did you add the library to your project and link with libRNVectorIcons.a? Try running `react-native link react-native-vector-icons` and recompiling.'
    );
  }
};

var module1508 = require('./1508'),
  n = module1508.NativeModules.RNVectorIconsManager || module1508.NativeModules.RNVectorIconsModule;
