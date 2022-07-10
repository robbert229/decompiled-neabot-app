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
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1594 = require('./1594'),
  module1595 = require('./1595'),
  module1505 = require('./1505'),
  module1532 = require('./1532'),
  module1495 = require('./1495'),
  y = ['disabled', 'onPress', 'theme', 'status', 'value', 'testID'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

var O = function (t) {
  var module1495,
    h = t.disabled,
    O = t.onPress,
    k = t.theme,
    w = t.status,
    _ = t.value,
    j = t.testID,
    C = module52.default(t, y),
    R = h ? k.colors.disabled : C.color || k.colors.accent;
  module1495 = h ? module564.default(k.colors.text).alpha(0.16).rgb().string() : module564.default(R).fade(0.32).rgb().string();
  return React.createElement(module1594.RadioButtonContext.Consumer, null, function (t) {
    var o =
      'checked' ===
      module1595.isChecked({
        contextValue: null == t ? undefined : t.value,
        status: w,
        value: _,
      });
    return React.createElement(
      module1532.default,
      module11.default({}, C, {
        borderless: true,
        rippleColor: module1495,
        onPress: h
          ? undefined
          : function () {
              module1595.handlePress({
                onPress: O,
                value: _,
                onValueChange: null == t ? undefined : t.onValueChange,
              });
            },
        accessibilityTraits: h ? ['button', 'disabled'] : 'button',
        accessibilityComponentType: o ? 'radiobutton_checked' : 'radiobutton_unchecked',
        accessibilityRole: 'radio',
        accessibilityState: {
          disabled: h,
          checked: o,
        },
        accessibilityLiveRegion: 'polite',
        style: P.container,
        testID: j,
      }),
      React.createElement(
        ReactNative.View,
        {
          style: {
            opacity: o ? 1 : 0,
          },
        },
        React.createElement(module1505.default, {
          allowFontScaling: false,
          name: 'check',
          size: 24,
          color: R,
          direction: 'ltr',
        })
      )
    );
  });
};

O.displayName = 'RadioButton.IOS';
var P = ReactNative.StyleSheet.create({
    container: {
      borderRadius: 18,
      padding: 6,
    },
  }),
  k = module1495.withTheme(O);
exports.default = k;
var w = module1495.withTheme(O);
exports.RadioButtonIOS = w;
