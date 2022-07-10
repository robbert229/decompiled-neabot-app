var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(l, f, p);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1522 = require('./1522'),
  module1602 = require('./1602'),
  module1521 = require('./1521'),
  module1495 = require('./1495'),
  module1577 = require('./1577'),
  y = ['statusBarHeight', 'style', 'dark'],
  b = ['height', 'elevation', 'backgroundColor', 'zIndex'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

var k = function (t) {
  var v = t.statusBarHeight,
    h = undefined === v ? module1577.APPROX_STATUSBAR_HEIGHT : v,
    k = t.style,
    H = t.dark,
    O = module52.default(t, y),
    P = O.theme,
    _ = P.dark,
    w = P.colors,
    T = P.mode,
    j = ReactNative.StyleSheet.flatten(k) || {},
    S = j.height,
    B = undefined === S ? module1602.DEFAULT_APPBAR_HEIGHT : S,
    E = j.elevation,
    I = undefined === E ? 4 : E,
    M = j.backgroundColor,
    C = j.zIndex,
    x = undefined === C ? 0 : C,
    z = module52.default(j, b),
    D = M || (_ && 'adaptive' === T ? module1522.default(I, w.surface) : w.primary),
    R = 'number' == typeof t.statusBarHeight ? ReactNative.View : ReactNative.SafeAreaView;
  return (
    <R
      style={[
        {
          backgroundColor: D,
          zIndex: x,
          elevation: I,
        },
        module1521.default(I),
      ]}
    >
      <module1602.Appbar />
    </R>
  );
};

k.displayName = 'Appbar.Header';
var A = ReactNative.StyleSheet.create({
    appbar: {
      elevation: 0,
    },
  }),
  H = module1495.withTheme(k);
exports.default = H;
var O = module1495.withTheme(k);
exports.AppbarHeader = O;
