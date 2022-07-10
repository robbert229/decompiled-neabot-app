var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(l);
    if (o && o.has(t)) return o.get(t);
    var n = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(n, f, c);
        else n[f] = t[f];
      }

    n.default = t;
    if (o) o.set(t, n);
    return n;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1495 = require('./1495'),
  s = ['style', 'background', 'borderless', 'disabled', 'rippleColor', 'underlayColor', 'children', 'theme'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : l;
  })(t);
}

var b = function t(c) {
  var p = c.style,
    b = c.background,
    v = c.borderless,
    h = undefined !== v && v,
    w = c.disabled,
    O = c.rippleColor,
    P = c.underlayColor,
    k = c.children,
    j = c.theme,
    C = module52.default(c, s),
    _ = j.dark,
    M = j.colors,
    H = w || !C.onPress,
    S =
      O ||
      module564
        .default(M.text)
        .alpha(_ ? 0.32 : 0.2)
        .rgb()
        .string(),
    T = 'android' === ReactNative.Platform.OS && ReactNative.Platform.Version >= 28 && h;
  return t.supported ? (
    <ReactNative.TouchableNativeFeedback>
      <ReactNative.View style={[h && y.overflowHidden, p]}>
        <k />
      </ReactNative.View>
    </ReactNative.TouchableNativeFeedback>
  ) : (
    <ReactNative.TouchableHighlight>
      <k />
    </ReactNative.TouchableHighlight>
  );
};

b.supported = 'android' === ReactNative.Platform.OS && ReactNative.Platform.Version >= 21;
var y = ReactNative.StyleSheet.create({
    overflowHidden: {
      overflow: 'hidden',
    },
  }),
  v = module1495.withTheme(b);
exports.default = v;
