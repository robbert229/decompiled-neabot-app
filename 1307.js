var module1308 = require('./1308'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1309 = require('./1309'),
  f =
    (this && this.__spreadArrays) ||
    function () {
      for (var t = 0, n = 0, l = arguments.length; n < l; n++) t += arguments[n].length;

      var u = Array(t),
        o = 0;

      for (n = 0; n < l; n++) for (var f = arguments[n], c = 0, s = f.length; c < s; c++, o++) u[o] = f[c];

      return u;
    };

exports.defaultOriginWhitelist = ['http://*', 'https://*'];

var c = function (t) {
    var n = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(t);
    return null === n ? '' : n[0];
  },
  s = function (t) {
    return '^' + module1308.default(t).replace(/\\\*/g, '.*');
  },
  E = function (t, n) {
    var l = c(n);
    return t.some(function (t) {
      return new RegExp(t).test(l);
    });
  },
  h = function (t) {
    return f(['about:blank'], t || []).map(s);
  };

exports.createOnShouldStartLoadWithRequest = function (t, n, l) {
  return function (o) {
    var f = o.nativeEvent,
      c = true,
      s = f.url,
      v = f.lockIdentifier;
    if (E(h(n), s)) {
      if (l) c = l(f);
    } else {
      ReactNative.Linking.canOpenURL(s)
        .then(function (t) {
          if (t) return ReactNative.Linking.openURL(s);
          console.warn("Can't open url: " + s);
        })
        .catch(function (t) {
          console.warn('Error opening URL: ', t);
        });
      c = false;
    }
    t(c, s, v);
  };
};

exports.defaultRenderLoading = function () {
  return React.default.createElement(
    ReactNative.View,
    {
      style: module1309.default.loadingOrErrorView,
    },
    React.default.createElement(ReactNative.ActivityIndicator, null)
  );
};

exports.defaultRenderError = function (t, n, f) {
  return React.default.createElement(
    ReactNative.View,
    {
      style: module1309.default.loadingOrErrorView,
    },
    React.default.createElement(
      ReactNative.Text,
      {
        style: module1309.default.errorTextTitle,
      },
      'Error loading page'
    ),
    React.default.createElement(
      ReactNative.Text,
      {
        style: module1309.default.errorText,
      },
      'Domain: ' + t
    ),
    React.default.createElement(
      ReactNative.Text,
      {
        style: module1309.default.errorText,
      },
      'Error Code: ' + n
    ),
    React.default.createElement(
      ReactNative.Text,
      {
        style: module1309.default.errorText,
      },
      'Description: ' + f
    )
  );
};
