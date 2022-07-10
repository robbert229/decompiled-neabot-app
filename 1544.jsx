var module11 = require('./11'),
  module12 = require('./12'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = E(n);
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
  module1545 = require('./1545'),
  module1529 = require('./1529'),
  module1546 = require('./1546'),
  module1525 = require('./1525'),
  module1495 = require('./1495'),
  module1521 = require('./1521'),
  w = ['visible', 'icon', 'children', 'actions', 'contentStyle', 'style', 'theme'],
  b = ['label'];

function E(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (E = function (t) {
    return t ? l : n;
  })(t);
}

var j = ReactNative.StyleSheet.create({
    container: {
      elevation: 1,
    },
    wrapper: {
      overflow: 'hidden',
      alignSelf: 'center',
      width: '100%',
      maxWidth: 960,
    },
    absolute: {
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginHorizontal: 8,
      marginTop: 16,
      marginBottom: 0,
    },
    icon: {
      margin: 8,
    },
    message: {
      flex: 1,
      margin: 8,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      margin: 4,
    },
    button: {
      margin: 4,
    },
  }),
  O = module1495.withTheme(function (t) {
    var h = t.visible,
      E = t.icon,
      O = t.children,
      V = t.actions,
      A = t.contentStyle,
      x = t.style,
      D = t.theme,
      P = module52.default(t, w),
      S = React.useRef(new ReactNative.Animated.Value(h ? 1 : 0)).current,
      _ = React.useState({
        height: 0,
        measured: false,
      }),
      M = module12.default(_, 2),
      k = M[0],
      W = M[1],
      z = D.animation.scale;

    React.useEffect(
      function () {
        if (h)
          ReactNative.Animated.timing(S, {
            duration: 250 * z,
            toValue: 1,
            useNativeDriver: false,
          }).start();
        else
          ReactNative.Animated.timing(S, {
            duration: 200 * z,
            toValue: 0,
            useNativeDriver: false,
          }).start();
      },
      [h, S, z]
    );
    var C = ReactNative.Animated.multiply(S, k.height),
      N = ReactNative.Animated.multiply(ReactNative.Animated.add(S, -1), k.height);
    return (
      <module1545.default>
        <ReactNative.View style={[j.wrapper, A]}>
          {React.createElement(ReactNative.Animated.View, {
            style: {
              height: C,
            },
          })}
          {React.createElement(
            ReactNative.Animated.View,
            {
              onLayout: function (t) {
                var n = t.nativeEvent.layout.height;
                W({
                  height: n,
                  measured: true,
                });
              },
              style: [
                k.measured || !h
                  ? [
                      j.absolute,
                      {
                        transform: [
                          {
                            translateY: N,
                          },
                        ],
                      },
                    ]
                  : null,
                k.measured || h
                  ? null
                  : {
                      opacity: 0,
                    },
              ],
            },
            React.createElement(
              ReactNative.View,
              {
                style: j.content,
              },
              E
                ? React.createElement(
                    ReactNative.View,
                    {
                      style: j.icon,
                    },
                    React.createElement(module1525.default, {
                      source: E,
                      size: 40,
                    })
                  )
                : null,
              React.createElement(
                module1529.default,
                {
                  style: j.message,
                },
                O
              )
            ),
            React.createElement(
              ReactNative.View,
              {
                style: j.actions,
              },
              V.map(function (t, l) {
                var c = t.label,
                  s = module52.default(t, b);
                return React.createElement(
                  module1546.default,
                  module11.default(
                    {
                      key: l,
                      compact: true,
                      mode: 'text',
                      style: j.button,
                    },
                    s
                  ),
                  c
                );
              })
            )
          )}
        </ReactNative.View>
      </module1545.default>
    );
  });
exports.default = O;
