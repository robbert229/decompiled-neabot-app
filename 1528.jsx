var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = v(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, c, f);
        else o[c] = t[c];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  module1494 = require('./1494'),
  module1526 = require('./1526'),
  p = ['label', 'size', 'style', 'theme', 'labelStyle', 'color'],
  b = ['backgroundColor'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (v = function (t) {
    return t ? l : n;
  })(t);
}

var h = function (t) {
  var f = t.label,
    v = t.size,
    h = undefined === v ? 64 : v,
    w = t.style,
    j = t.theme,
    S = t.labelStyle,
    k = t.color,
    P = module52.default(t, p),
    _ = ReactNative.StyleSheet.flatten(w) || {},
    x = _.backgroundColor,
    M = undefined === x ? j.colors.primary : x,
    C = module52.default(_, b),
    z = null != k ? k : module1526.default(M, module1494.white, 'rgba(0, 0, 0, .54)');

  return (
    <ReactNative.View>
      <module1529.default
        style={[
          O.text,
          {
            color: z,
            fontSize: h / 2,
            lineHeight: h,
          },
          S,
        ]}
        numberOfLines={1}
      >
        {f}
      </module1529.default>
    </ReactNative.View>
  );
};

h.displayName = 'Avatar.Text';
var O = ReactNative.StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  }),
  w = module1495.withTheme(h);
exports.default = w;
