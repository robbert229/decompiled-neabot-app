var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = w(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1494 = require('./1494'),
  module1553 = require('./1553'),
  module1554 = require('./1554'),
  module1555 = require('./1555'),
  module1556 = require('./1556'),
  module1545 = require('./1545'),
  module1495 = require('./1495'),
  P = ['elevation', 'onLongPress', 'onPress', 'mode', 'children', 'style', 'theme', 'testID', 'accessible'];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
    return t ? o : n;
  })(t);
}

var O = function (t) {
  var f = t.elevation,
    v = undefined === f ? 1 : f,
    p = t.onLongPress,
    b = t.onPress,
    h = t.mode,
    w = undefined === h ? 'elevated' : h,
    O = t.children,
    C = t.style,
    j = t.theme,
    D = t.testID,
    E = t.accessible,
    V = module52.default(t, P),
    _ = React.useRef(new ReactNative.Animated.Value(v)).current,
    x = j.animation,
    I = j.dark,
    M = j.mode,
    W = j.roundness,
    A = React.Children.count(O),
    L = React.Children.map(O, function (t) {
      return React.isValidElement(t) && t.type ? t.type.displayName : null;
    }),
    N = module564
      .default(j.dark ? module1494.white : module1494.black)
      .alpha(0.12)
      .rgb()
      .string();
  return (
    <module1545.default>
      <ReactNative.TouchableWithoutFeedback
        delayPressIn={0}
        disabled={!(b || p)}
        onLongPress={p}
        onPress={b}
        onPressIn={
          b || p
            ? function () {
                var t = j.dark,
                  n = j.mode,
                  o = j.animation.scale;
                ReactNative.Animated.timing(_, {
                  toValue: 8,
                  duration: 150 * o,
                  useNativeDriver: !t || 'exact' === n,
                }).start();
              }
            : undefined
        }
        onPressOut={
          b || p
            ? function () {
                ReactNative.Animated.timing(_, {
                  toValue: v,
                  duration: 150 * x.scale,
                  useNativeDriver: !I || 'exact' === M,
                }).start();
              }
            : undefined
        }
        testID={D}
        accessible={E}
      >
        <ReactNative.View style={k.innerContainer}>
          <O />
        </ReactNative.View>
      </ReactNative.TouchableWithoutFeedback>
    </module1545.default>
  );
};

O.Content = module1553.default;
O.Actions = module1554.default;
O.Cover = module1555.default;
O.Title = module1556.default;
var k = ReactNative.StyleSheet.create({
    innerContainer: {
      flexGrow: 1,
      flexShrink: 1,
    },
    outlined: {
      elevation: 0,
      borderWidth: 1,
    },
  }),
  C = module1495.withTheme(O);
exports.default = C;
