var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var c = o(n);
    if (c && c.has(t)) return c.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, l, p);
        else u[l] = t[l];
      }

    u.default = t;
    if (c) c.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    c = new WeakMap();
  return (o = function (t) {
    return t ? c : n;
  })(t);
}

var c = function (o) {
  var module1607 = o.size,
    f = o.color,
    l = module1607 - 3;
  return (
    <ReactNative.View
      style={[
        u.wrapper,
        {
          width: module1607,
          height: module1607,
          transform: [
            {
              scaleX: ReactNative.I18nManager.isRTL ? -1 : 1,
            },
          ],
        },
      ]}
    >
      <ReactNative.Image
        source={require('./1607')}
        style={[
          u.icon,
          {
            tintColor: f,
            width: l,
            height: l,
          },
        ]}
      />
    </ReactNative.View>
  );
};

exports.AppbarBackIcon = c;
var u = ReactNative.StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      resizeMode: 'contain',
    },
  }),
  f = c;
exports.default = f;
