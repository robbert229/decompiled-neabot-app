var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = y(n);
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
  module564 = require('./564'),
  module1505 = require('./1505'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  h = ['numeric', 'children', 'onPress', 'sortDirection', 'theme', 'style', 'numberOfLines'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (y = function (t) {
    return t ? l : n;
  })(t);
}

var b = function (t) {
  var p = t.numeric,
    y = t.children,
    b = t.onPress,
    O = t.sortDirection,
    w = t.theme,
    j = t.style,
    D = t.numberOfLines,
    P = undefined === D ? 1 : D,
    T = module52.default(t, h),
    E = React.useRef(new ReactNative.Animated.Value('ascending' === O ? 0 : 1)).current;
  React.useEffect(
    function () {
      ReactNative.Animated.timing(E, {
        toValue: 'ascending' === O ? 0 : 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    },
    [O, E]
  );

  var M = module564.default(w.colors.text).alpha(0.6).rgb().string(),
    _ = E.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    }),
    x = O
      ? React.createElement(
          ReactNative.Animated.View,
          {
            style: [
              v.icon,
              {
                transform: [
                  {
                    rotate: _,
                  },
                ],
              },
            ],
          },
          React.createElement(module1505.default, {
            name: 'arrow-up',
            size: 16,
            color: w.colors.text,
            direction: ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr',
          })
        )
      : null;

  return React.createElement(
    ReactNative.TouchableWithoutFeedback,
    module11.default(
      {
        disabled: !b,
        onPress: b,
      },
      T
    ),
    React.createElement(
      ReactNative.View,
      {
        style: [v.container, p && v.right, j],
      },
      x,
      React.createElement(
        module1529.default,
        {
          style: [
            v.cell,
            O
              ? v.sorted
              : {
                  color: M,
                },
          ],
          numberOfLines: P,
        },
        y
      )
    )
  );
};

exports.DataTableTitle = b;
b.displayName = 'DataTable.Title';
var v = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignContent: 'center',
      paddingVertical: 12,
    },
    right: {
      justifyContent: 'flex-end',
    },
    cell: {
      height: 24,
      lineHeight: 24,
      fontSize: 12,
      fontWeight: '500',
      alignItems: 'center',
    },
    sorted: {
      marginLeft: 8,
    },
    icon: {
      height: 24,
      justifyContent: 'center',
    },
  }),
  O = module1495.withTheme(b);
exports.default = O;
