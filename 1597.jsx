var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = b(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, c, s);
        else o[c] = t[c];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  module1594 = require('./1594'),
  module1595 = require('./1595'),
  module1532 = require('./1532'),
  module1592 = require('./1592'),
  module1529 = require('./1529'),
  module1593 = require('./1593'),
  module1596 = require('./1596');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (b = function (t) {
    return t ? l : n;
  })(t);
}

var h = function (t) {
  var module1495,
    b = t.value,
    h = t.label,
    w = t.style,
    P = t.labelStyle,
    j = t.onPress,
    E = t.disabled,
    C = t.color,
    k = t.uncheckedColor,
    x = t.status,
    I = t.theme.colors,
    _ = t.accessibilityLabel,
    D = t.testID,
    M = t.mode,
    S = t.position,
    B = {
      value: b,
      disabled: E,
      status: x,
      color: C,
      uncheckedColor: k,
    },
    R = 'leading' === (undefined === S ? 'trailing' : S);
  module1495 = 'android' === M ? <module1593.default /> : 'ios' === M ? <module1596.default /> : <module1592.default />;
  return React.createElement(module1594.RadioButtonContext.Consumer, null, function (t) {
    return React.createElement(
      module1532.default,
      {
        onPress: E
          ? undefined
          : function () {
              return module1595.handlePress({
                onPress: j,
                onValueChange: null == t ? undefined : t.onValueChange,
                value: b,
              });
            },
        accessibilityLabel: _,
        testID: D,
      },
      React.createElement(
        ReactNative.View,
        {
          style: [O.container, w],
          pointerEvents: 'none',
        },
        R && module1495,
        React.createElement(
          module1529.default,
          {
            style: [
              O.label,
              {
                color: I.text,
                textAlign: R ? 'right' : 'left',
              },
              P,
            ],
          },
          h
        ),
        !R && module1495
      )
    );
  });
};

h.displayName = 'RadioButton.Item';
var w = module1495.withTheme(h);
exports.default = w;
var P = module1495.withTheme(h);
exports.RadioButtonItem = P;
var O = ReactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    flexShrink: 1,
    flexGrow: 1,
  },
});
