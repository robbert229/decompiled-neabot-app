var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = s(o);
    if (n && n.has(t)) return n.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
        else u[l] = t[l];
      }

    u.default = t;
    if (n) n.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  c = ['size', 'source', 'style', 'theme'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (s = function (t) {
    return t ? n : o;
  })(t);
}

var p = function (t) {
  var l = t.size,
    s = undefined === l ? 64 : l,
    p = t.source,
    y = t.style,
    v = t.theme,
    h = module52.default(t, c),
    b = v.colors,
    w = (ReactNative.StyleSheet.flatten(y) || {}).backgroundColor,
    O = undefined === w ? b.primary : w;
  return (
    <ReactNative.View>
      {'function' == typeof p &&
        p({
          size: s,
        })}
      {'function' != typeof p && (
        <ReactNative.Image
          source={p}
          style={{
            width: s,
            height: s,
            borderRadius: s / 2,
          }}
        />
      )}
    </ReactNative.View>
  );
};

p.displayName = 'Avatar.Image';
var y = module1495.withTheme(p);
exports.default = y;
