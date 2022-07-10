var ReactNative = (function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = n(o);
  if (u && u.has(t)) return u.get(t);
  var f = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (s && (s.get || s.set)) Object.defineProperty(f, c, s);
      else f[c] = t[c];
    }

  f.default = t;
  if (u) u.set(t, f);
  return f;
})(require('react-native'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

var o = ReactNative.default.Alert;

if ('android' === ReactNative.Platform.OS) {
  var u = ReactNative.default.NativeModules.CodePushDialog;
  o = {
    alert: function (t, n, o) {
      if (o.length > 2) throw 'Can only show 2 buttons for Android dialog.';
      var f = o[0] ? o[0].text : null,
        l = o[1] ? o[1].text : null;
      u.showDialog(
        t,
        n,
        f,
        l,
        function (t) {
          if (o[t].onPress) o[t].onPress();
        },
        function (t) {
          throw t;
        }
      );
    },
  };
}

module.exports = {
  Alert: o,
};
