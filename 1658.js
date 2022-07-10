var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  module1487 = require('./1487'),
  ReactNative = require('react-native'),
  u = ['children', 'onRefresh', 'loading', 'fixed', 'renderHeader', 'noData'],
  c = function (n) {
    var l = n.fixed,
      u = n.children,
      c = n.onRefresh,
      s = n.loading;
    return l
      ? React.default.createElement(module1487.Container, null, u)
      : React.default.createElement(
          ReactNative.ScrollView,
          {
            keyboardShouldPersistTaps: 'always',
            nestedScrollEnabled: true,
            refreshControl: React.default.createElement(ReactNative.RefreshControl, {
              enabled: !!c,
              refreshing: !(!c || !s),
              onRefresh: c || function () {},
            }),
          },
          u
        );
  },
  s = function () {
    return null;
  },
  h = function () {
    return null;
  };

exports.default = function (n) {
  var f = n.children,
    E = n.onRefresh,
    v = n.loading,
    R = n.fixed;
  module52.default(n, u);
  return React.default.createElement(
    module1487.Container,
    null,
    React.default.createElement(s, null),
    React.default.createElement(c, {
      onRefresh: E,
      fixed: R,
      loading: v,
      children: f,
    }),
    React.default.createElement(h, null)
  );
};
