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
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  module564 = require('./564'),
  ReactNative = require('react-native'),
  module1532 = require('./1532'),
  module1494 = require('./1494'),
  module1495 = require('./1495'),
  y = ['onPress', 'style', 'theme', 'children', 'pointerEvents'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

var v = function (t) {
  var p = t.onPress,
    h = t.style,
    v = t.theme,
    w = t.children,
    O = t.pointerEvents,
    P = module52.default(t, y),
    j = module564
      .default(v.dark ? module1494.white : module1494.black)
      .alpha(0.12)
      .rgb()
      .string();
  return (
    <module1532.default>
      <ReactNative.View style={b.content} pointerEvents={O}>
        {w}
      </ReactNative.View>
    </module1532.default>
  );
};

exports.DataTableRow = v;
var b = ReactNative.StyleSheet.create({
    container: {
      borderStyle: 'solid',
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      minHeight: 48,
      paddingHorizontal: 16,
    },
    content: {
      flex: 1,
      flexDirection: 'row',
    },
  }),
  w = module1495.withTheme(v);
exports.default = w;
