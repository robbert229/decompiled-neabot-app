exports.SafeAreaProvider = function (t) {
  var n,
    s,
    h,
    y,
    S,
    w = t.children,
    C = t.initialMetrics,
    x = t.initialSafeAreaInsets,
    A = t.style,
    b = React.useContext(c),
    P = React.useContext(v),
    O = React.useState(null != (n = null != (s = null != (h = null == C ? undefined : C.insets) ? h : x) ? s : b) ? n : null),
    E = module12.default(O, 2),
    M = E[0],
    j = E[1],
    I = React.useState(
      null != (y = null != (S = null == C ? undefined : C.frame) ? S : P)
        ? y
        : {
            x: 0,
            y: 0,
            width: ReactNative.Dimensions.get('window').width,
            height: ReactNative.Dimensions.get('window').height,
          }
    ),
    k = module12.default(I, 2),
    _ = k[0],
    D = k[1],
    F = React.useCallback(
      function (t) {
        var n = t.nativeEvent,
          o = n.frame,
          u = n.insets;
        if (!(!o || (o.height === _.height && o.width === _.width && o.x === _.x && o.y === _.y))) D(o);
        if (!(M && u.bottom === M.bottom && u.left === M.left && u.right === M.right && u.top === M.top)) j(u);
      },
      [_, M]
    );
  return (
    <module516.default style={[p.fill, A]} onInsetsChange={F}>
      {null != M ? (
        <v.Provider value={_}>
          <c.Provider value={M}>{w}</c.Provider>
        </v.Provider>
      ) : null}
    </module516.default>
  );
};

exports.useSafeAreaInsets = h;

exports.useSafeAreaFrame = function () {
  var t = React.useContext(v);
  if (null == t) throw new Error('No safe area frame value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');
  return t;
};

exports.withSafeAreaInsets = function (t) {
  return React.forwardRef(function (o, l) {
    return (
      <y>
        {function (f) {
          return <t />;
        }}
      </y>
    );
  });
};

exports.useSafeArea = function () {
  return h();
};

var module11 = require('./11'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module516 = require('./516');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

var c = React.createContext(null);
exports.SafeAreaInsetsContext = c;
c.displayName = 'SafeAreaInsetsContext';
var v = React.createContext(null);
exports.SafeAreaFrameContext = v;
v.displayName = 'SafeAreaFrameContext';
var p = ReactNative.StyleSheet.create({
  fill: {
    flex: 1,
  },
});

function h() {
  var t = React.useContext(c);
  if (null == t) throw new Error('No safe area insets value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');
  return t;
}

var y = c.Consumer;
exports.SafeAreaConsumer = y;
var S = c;
exports.SafeAreaContext = S;
