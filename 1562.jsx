var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = y(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, s, u);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1505 = require('./1505'),
  module1532 = require('./1532'),
  module1495 = require('./1495'),
  p = ['status', 'disabled', 'onPress', 'theme', 'testID'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

var h = function (t) {
  var b,
    y = t.status,
    h = t.disabled,
    O = t.onPress,
    k = t.theme,
    w = t.testID,
    P = module52.default(t, p),
    j = 'checked' === y,
    S = 'indeterminate' === y,
    I = h ? k.colors.disabled : P.color || k.colors.accent;
  b = h ? module564.default(k.colors.text).alpha(0.16).rgb().string() : module564.default(I).fade(0.32).rgb().string();

  var _ = S ? 'minus' : 'check';

  return (
    <module1532.default>
      <ReactNative.View
        style={{
          opacity: S || j ? 1 : 0,
        }}
      >
        <module1505.default allowFontScaling={false} name={_} size={24} color={I} direction="ltr" />
      </ReactNative.View>
    </module1532.default>
  );
};

h.displayName = 'Checkbox.IOS';
var v = ReactNative.StyleSheet.create({
    container: {
      borderRadius: 18,
      padding: 6,
    },
  }),
  O = module1495.withTheme(h);
exports.default = O;
var k = module1495.withTheme(h);
exports.CheckboxIOS = k;
