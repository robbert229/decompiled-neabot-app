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
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, s, u);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1571 = require('./1571'),
  module1545 = require('./1545'),
  module1495 = require('./1495'),
  module1505 = require('./1505'),
  y = ['clearAccessibilityLabel', 'clearIcon', 'icon', 'iconColor', 'inputStyle', 'onIconPress', 'placeholder', 'searchAccessibilityLabel', 'style', 'theme', 'value'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (v = function (t) {
    return t ? l : n;
  })(t);
}

var h = React.forwardRef(function (t, p) {
    var v = t.clearAccessibilityLabel,
      h = undefined === v ? 'clear' : v,
      P = t.clearIcon,
      C = t.icon,
      I = t.iconColor,
      w = t.inputStyle,
      L = t.onIconPress,
      x = t.placeholder,
      O = t.searchAccessibilityLabel,
      R = undefined === O ? 'search' : O,
      M = t.style,
      j = t.theme,
      A = t.value,
      E = module52.default(t, y),
      k = React.useRef(null);
    React.useImperativeHandle(p, function () {
      var t = k.current;
      if (t)
        return {
          focus: function () {
            return t.focus();
          },
          clear: function () {
            return t.clear();
          },
          setNativeProps: function (n) {
            return t.setNativeProps(n);
          },
          isFocused: function () {
            return t.isFocused();
          },
          blur: function () {
            return t.blur();
          },
        };

      var n = function () {
        throw new Error('TextInput is not available');
      };

      return {
        focus: n,
        clear: n,
        setNativeProps: n,
        isFocused: n,
        blur: n,
      };
    });
    var S = j.colors,
      _ = j.roundness,
      z = j.dark,
      W = j.fonts,
      D = S.text,
      F = W.regular,
      N = I || (z ? D : module564.default(D).alpha(0.54).rgb().string()),
      H = module564.default(D).alpha(0.32).rgb().string();
    return (
      <module1545.default
        style={[
          {
            borderRadius: _,
            elevation: 4,
          },
          T.container,
          M,
        ]}
      >
        <module1571.default
          accessibilityTraits="button"
          accessibilityComponentType="button"
          accessibilityRole="button"
          borderless
          rippleColor={H}
          onPress={L}
          color={N}
          icon={
            C ||
            function (t) {
              var n = t.size,
                l = t.color;
              return <module1505.default name="magnify" color={l} size={n} direction={ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr'} />;
            }
          }
          accessibilityLabel={R}
        />
        <ReactNative.TextInput />
        <module1571.default
          borderless
          disabled={!A}
          accessibilityLabel={h}
          color={A ? N : 'rgba(255, 255, 255, 0)'}
          rippleColor={H}
          onPress={function () {
            var t;
            if (!(null == (t = k.current))) t.clear();
            if (!(null == E.onChangeText)) E.onChangeText('');
          }}
          icon={
            P ||
            function (t) {
              var n = t.size,
                l = t.color;
              return <module1505.default name="close" color={l} size={n} direction={ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr'} />;
            }
          }
          accessibilityTraits="button"
          accessibilityComponentType="button"
          accessibilityRole="button"
        />
      </module1545.default>
    );
  }),
  T = ReactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      fontSize: 18,
      paddingLeft: 8,
      alignSelf: 'stretch',
      textAlign: ReactNative.I18nManager.isRTL ? 'right' : 'left',
      minWidth: 0,
    },
  }),
  P = module1495.withTheme(h);
exports.default = P;
