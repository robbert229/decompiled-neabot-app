var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = P(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1603 = require('./1603'),
  module1604 = require('./1604'),
  module1605 = require('./1605'),
  module1545 = require('./1545'),
  module1495 = require('./1495'),
  module1494 = require('./1494'),
  module1522 = require('./1522'),
  w = ['children', 'dark', 'style', 'theme'],
  E = ['backgroundColor', 'elevation'];

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (P = function (t) {
    return t ? l : n;
  })(t);
}

exports.DEFAULT_APPBAR_HEIGHT = 56;

var k = function (t) {
    var v,
      P = t.children,
      k = t.dark,
      _ = t.style,
      A = t.theme,
      j = module52.default(t, w),
      T = A.colors,
      C = A.dark,
      D = A.mode,
      H = ReactNative.StyleSheet.flatten(_) || {},
      M = H.backgroundColor,
      S = H.elevation,
      I = undefined === S ? 4 : S,
      L = module52.default(H, E),
      V = M || (C && 'adaptive' === D ? module1522.default(I, T.surface) : T.primary);
    v = 'boolean' == typeof k ? k : 'transparent' !== V && ('string' != typeof V || !module564.default(V).isLight());
    var W = false,
      B = false,
      F = false;

    if ('ios' === ReactNative.Platform.OS) {
      var G = false,
        R = 0,
        U = 0;
      React.Children.forEach(P, function (t) {
        if (React.isValidElement(t)) t.type === module1603.default ? (G = true) : G ? U++ : R++;
      });
      B = (W = G && R < 2 && U < 2) && 0 === R;
      F = W && 0 === U;
    }

    return (
      <module1545.default>
        {B ? <ReactNative.View style={O.spacing} /> : null}
        {React.Children.toArray(P)
          .filter(function (t) {
            return null != t && 'boolean' != typeof t;
          })
          .map(function (t, n) {
            if (!React.isValidElement(t) || ![module1603.default, module1604.default, module1605.default].includes(t.type)) return t;
            var l = {
              color: undefined !== t.props.color ? t.props.color : v ? module1494.white : module1494.black,
            };
            if (t.type === module1603.default)
              l.style = [
                0 !== n && {
                  marginLeft: 8,
                },
                W && {
                  alignItems: 'center',
                },
                t.props.style,
              ];
            return React.cloneElement(t, l);
          })}
        {F ? <ReactNative.View style={O.spacing} /> : null}
      </module1545.default>
    );
  },
  O = ReactNative.StyleSheet.create({
    appbar: {
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 4,
      elevation: 4,
    },
    spacing: {
      width: 48,
    },
  }),
  _ = module1495.withTheme(k);

exports.default = _;
var A = module1495.withTheme(k);
exports.Appbar = A;
