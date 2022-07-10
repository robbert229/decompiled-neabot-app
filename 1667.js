exports.Log = T;

(function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var n = O(o);
  if (n && n.has(t)) return n.get(t);
  var f = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var u in t)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
      var p = l ? Object.getOwnPropertyDescriptor(t, u) : null;
      if (p && (p.get || p.set)) Object.defineProperty(f, u, p);
      else f[u] = t[u];
    }

  f.default = t;
  if (n) n.set(t, f);
})(require('react'));

var module1117 = require('./1117'),
  ReactNative = require('react-native'),
  module593 = require('./593'),
  module944 = require('./944'),
  module1201 = require('./1201'),
  module1668 = require('./1668'),
  module1669 = require('./1669'),
  module1316 = require('./1316'),
  module1674 = require('./1674');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (O = function (t) {
    return t ? n : o;
  })(t);
}

var y = ReactNative.Dimensions.get('window'),
  v = y.height,
  w = y.width;

function T() {}

globals.iOS = 'ios' === ReactNative.Platform.OS;
globals.Android = 'android' === ReactNative.Platform.OS;
globals.SCREEN_WIDTH = w;
globals.SCREEN_HEIGHT = v;
globals.PixelRatio = ReactNative.PixelRatio.get();
globals.pixel = 1 / ReactNative.PixelRatio;
globals.px2dp = module1674.px2dp;
globals.Theme = module944.Theme;
globals.Config = module1668.default;
globals.Images = module1201.Images;
globals.Alert = ReactNative.Alert;
globals.AsyncStorage = module593.default;
globals.Toast = module944.Toast;
globals.Premissions = module1316.default;
globals.Modal = module1117.default;
globals.Log = T;
globals.HTTP = module1669.default;
