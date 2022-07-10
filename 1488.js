var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  ReactNative = require('react-native'),
  module810 = require('./810'),
  c = ['children', 'useSafeAreaView'];

exports.default = function (t) {
  var o = t.children,
    s = t.useSafeAreaView,
    v = module52.default(t, c),
    w = s && module810.isIos ? ReactNative.SafeAreaView : ReactNative.View;
  return React.default.createElement(w, v, o);
};
