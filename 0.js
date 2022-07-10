var ReactNative = require('react-native'),
  module399 = require('./399'),
  module804 = require('./804');

require('./1667');

ReactNative.LogBox.ignoreLogs(['Warning: ...']);
ReactNative.LogBox.ignoreAllLogs();
globals.console = {
  info: function () {},
  log: function () {},
  assert: function () {},
  warn: function () {},
  debug: function () {},
  error: function () {},
  time: function () {},
  timeEnd: function () {},
};
ReactNative.AppRegistry.registerComponent(module804.name, function () {
  return module399.default;
});
