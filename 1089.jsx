var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  n = ['shouldUpdated'],
  React = require('react'),
  ReactNative = require('react-native'),
  u = ReactNative.View,
  module1090 = require('./1090');

module.exports = function (l) {
  var h = l.shouldUpdated,
    p = module52(l, n);
  return (
    <u>
      <module1090 shouldUpdate={h}>{p.children}</module1090>
    </u>
  );
};
