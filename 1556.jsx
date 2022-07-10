var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = c(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var s = f ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, o, s);
        else u[o] = t[o];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  module1557 = require('./1557'),
  module1559 = require('./1559');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (c = function (t) {
    return t ? l : n;
  })(t);
}

var s = function (t) {
  var u = t.title,
    c = t.titleStyle,
    s = t.titleNumberOfLines,
    p = undefined === s ? 1 : s,
    b = t.subtitle,
    h = t.subtitleStyle,
    v = t.subtitleNumberOfLines,
    w = undefined === v ? 1 : v,
    O = t.left,
    j = t.leftStyle,
    C = t.right,
    E = t.rightStyle,
    P = t.style;
  return (
    <ReactNative.View
      style={[
        y.container,
        {
          minHeight: b || O || C ? 72 : 50,
        },
        P,
      ]}
    >
      {O ? (
        <ReactNative.View style={[y.left, j]}>
          {O({
            size: 40,
          })}
        </ReactNative.View>
      ) : null}
      <ReactNative.View style={[y.titles]}>
        {u ? (
          <module1559.default
            style={[
              y.title,
              {
                marginBottom: b ? 0 : 2,
              },
              c,
            ]}
            numberOfLines={p}
          >
            {u}
          </module1559.default>
        ) : null}
        {b ? (
          <module1557.default style={[y.subtitle, h]} numberOfLines={w}>
            {b}
          </module1557.default>
        ) : null}
      </ReactNative.View>
      <ReactNative.View style={E}>
        {C
          ? C({
              size: 24,
            })
          : null}
      </ReactNative.View>
    </ReactNative.View>
  );
};

exports.CardTitle = s;
s.displayName = 'Card.Title';
var y = ReactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 16,
    },
    left: {
      justifyContent: 'center',
      marginRight: 16,
      height: 40,
      width: 40,
    },
    titles: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      minHeight: 30,
    },
    subtitle: {
      minHeight: 20,
      marginVertical: 0,
    },
  }),
  p = module1495.withTheme(s);
exports.default = p;
