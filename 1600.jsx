var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = b(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  module1494 = require('./1494'),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1495 = require('./1495'),
  v = ['value', 'disabled', 'onValueChange', 'color', 'theme'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (b = function (t) {
    return t ? n : o;
  })(t);
}

var p = ReactNative.NativeModules.PlatformConstants ? ReactNative.NativeModules.PlatformConstants.reactNativeVersion : undefined,
  h = module1495.withTheme(function (t) {
    var s = t.value,
      b = t.disabled,
      h = t.onValueChange,
      y = t.color,
      C = t.theme,
      O = module52.default(t, v),
      P = y || C.colors.accent,
      k =
        'ios' === ReactNative.Platform.OS
          ? P
          : b
          ? C.dark
            ? module564.default(module1494.white).alpha(0.1).rgb().string()
            : module564.default(module1494.black).alpha(0.12).rgb().string()
          : module564.default(P).alpha(0.5).rgb().string(),
      w = 'ios' === ReactNative.Platform.OS ? undefined : b ? (C.dark ? module1494.grey800 : module1494.grey400) : s ? P : C.dark ? module1494.grey400 : module1494.grey50,
      j =
        p && 0 === p.major && p.minor <= 56
          ? {
              onTintColor: k,
              thumbTintColor: w,
            }
          : 'web' === ReactNative.Platform.OS
          ? {
              activeTrackColor: k,
              thumbColor: w,
              activeThumbColor: P,
            }
          : {
              thumbColor: w,
              trackColor: {
                true: k,
                false: '',
              },
            };
    return <ReactNative.Switch />;
  });
exports.default = h;
