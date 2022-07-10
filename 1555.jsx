var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  module1494 = require('./1494'),
  p = ['index', 'total', 'style', 'theme'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

var y = function (t) {
  var l,
    c = t.index,
    s = t.total,
    y = t.style,
    h = t.theme,
    b = module52.default(t, p),
    w = h.roundness;
  if (0 === c)
    l =
      1 === s
        ? {
            borderRadius: w,
          }
        : {
            borderTopLeftRadius: w,
            borderTopRightRadius: w,
          };
  else if ('number' == typeof s && c === s - 1)
    l = {
      borderBottomLeftRadius: w,
    };
  return (
    <ReactNative.View style={[v.container, l, y]}>
      <ReactNative.Image />
    </ReactNative.View>
  );
};

exports.CardCover = y;
y.displayName = 'Card.Cover';
var v = ReactNative.StyleSheet.create({
    container: {
      height: 195,
      backgroundColor: module1494.grey200,
      overflow: 'hidden',
    },
    image: {
      flex: 1,
      height: undefined,
      width: undefined,
      padding: 16,
      justifyContent: 'flex-end',
    },
  }),
  h = module1495.withTheme(y);
exports.default = h;
