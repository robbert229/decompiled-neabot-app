var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = p(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  c = ['style', 'theme'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

var s = ReactNative.StyleSheet.create({
    text: {
      textAlign: 'left',
    },
  }),
  v = module1495.withTheme(
    React.forwardRef(function (t, l) {
      var p = t.style,
        v = t.theme,
        y = module52.default(t, c),
        O = React.useRef(null);
      React.useImperativeHandle(l, function () {
        return {
          setNativeProps: function (t) {
            var n;
            return null == (n = O.current) ? undefined : n.setNativeProps(t);
          },
        };
      });
      return <ReactNative.Text />;
    })
  );
exports.default = v;
