var module11 = require('./11'),
  module12 = require('./12'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = w(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1546 = require('./1546'),
  module1545 = require('./1545'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  y = ['visible', 'action', 'duration', 'onDismiss', 'children', 'wrapperStyle', 'style', 'theme'],
  b = ['style', 'label', 'onPress'];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
    return t ? o : n;
  })(t);
}

var O = function (t) {
  var v = t.visible,
    w = t.action,
    O = t.duration,
    h = undefined === O ? 7e3 : O,
    N = t.onDismiss,
    T = t.children,
    E = t.wrapperStyle,
    R = t.style,
    D = t.theme,
    _ = module52.default(t, y),
    P = React.useRef(new ReactNative.Animated.Value(0)).current,
    S = React.useState(!v),
    j = module12.default(S, 2),
    A = j[0],
    V = j[1],
    M = React.useRef(undefined),
    x = D.animation.scale;

  React.useEffect(function () {
    return function () {
      if (M.current) clearTimeout(M.current);
    };
  }, []);
  React.useLayoutEffect(
    function () {
      if (v) {
        if (M.current) clearTimeout(M.current);
        V(false);
        ReactNative.Animated.timing(P, {
          toValue: 1,
          duration: 200 * x,
          useNativeDriver: true,
        }).start(function (t) {
          var n = t.finished;

          if (n) {
            var o = h === Number.POSITIVE_INFINITY || h === Number.NEGATIVE_INFINITY;
            if (n && !o) M.current = setTimeout(N, h);
          }
        });
      } else {
        if (M.current) clearTimeout(M.current);
        ReactNative.Animated.timing(P, {
          toValue: 0,
          duration: 100 * x,
          useNativeDriver: true,
        }).start(function (t) {
          if (t.finished) V(true);
        });
      }
    },
    [v, h, P, x, N]
  );
  var k = D.colors,
    L = D.roundness;
  if (A) return null;
  var U = w || {},
    W = U.style,
    C = U.label,
    F = U.onPress,
    G = module52.default(U, b);
  return (
    <ReactNative.SafeAreaView pointerEvents="box-none" style={[I.wrapper, E]}>
      <module1545.default>
        <module1529.default
          style={[
            I.content,
            {
              marginRight: w ? 0 : 16,
              color: k.surface,
            },
          ]}
        >
          {T}
        </module1529.default>
        {w ? <module1546.default>{C}</module1546.default> : null}
      </module1545.default>
    </ReactNative.SafeAreaView>
  );
};

O.DURATION_SHORT = 4e3;
O.DURATION_MEDIUM = 7e3;
O.DURATION_LONG = 1e4;
var I = ReactNative.StyleSheet.create({
    wrapper: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    container: {
      elevation: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 8,
      borderRadius: 4,
    },
    content: {
      marginLeft: 16,
      marginVertical: 14,
      flexWrap: 'wrap',
      flex: 1,
    },
    button: {
      marginHorizontal: 8,
      marginVertical: 6,
    },
  }),
  h = module1495.withTheme(O);
exports.default = h;
