var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = h(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, s, c);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  module564 = require('./564'),
  module1571 = require('./1571'),
  module1622 = require('./1622'),
  module1494 = require('./1494'),
  y = ['icon', 'size', 'theme', 'accessibilityLabel', 'disabled', 'style', 'value', 'status', 'onPress'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (h = function (t) {
    return t ? l : n;
  })(t);
}

var v = function (t) {
    var u = t.icon,
      s = t.size,
      h = t.theme,
      v = t.accessibilityLabel,
      O = t.disabled,
      P = t.style,
      k = t.value,
      j = t.status,
      _ = t.onPress,
      C = module52.default(t, y),
      M = h.roundness;
    return React.createElement(module1622.ToggleButtonGroupContext.Consumer, null, function (t) {
      var module52,
        b = (t && t.value === k) || 'checked' === j;
      module52 = b ? (h.dark ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .08)') : 'transparent';
      return React.createElement(
        module1571.default,
        module11.default(
          {
            borderless: false,
            icon: u,
            onPress: function (n) {
              if (_) _(n);
              if (t) t.onValueChange(b ? null : k);
            },
            size: s,
            accessibilityLabel: v,
            accessibilityState: {
              disabled: O,
              selected: b,
            },
            disabled: O,
            style: [
              w.content,
              {
                backgroundColor: module52,
                borderRadius: M,
                borderColor: module564
                  .default(h.dark ? module1494.white : module1494.black)
                  .alpha(0.29)
                  .rgb()
                  .string(),
              },
              P,
            ],
          },
          C
        )
      );
    });
  },
  w = ReactNative.StyleSheet.create({
    content: {
      width: 42,
      height: 42,
      margin: 0,
    },
  }),
  O = module1495.withTheme(v);

exports.default = O;
var P = module1495.withTheme(v);
exports.ToggleButton = P;
