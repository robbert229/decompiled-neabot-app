exports.default = function (t) {
  module52.default(le, c);
  var p = React.useState(undefined),
    R = module12.default(p, 2),
    v = R[0],
    w = R[1],
    C = React.useState(undefined),
    B = module12.default(C, 2),
    E = B[0],
    T = B[1],
    L = React.useContext(module560.default),
    W = module561.default(function (t, o, n, l, h, s, b) {
      return t({
        current: {
          progress: n,
        },
        next: l && {
          progress: l,
        },
        layouts: {
          header: {
            height: b,
            width: o.width,
          },
          screen: o,
          title: h,
          leftLabel: s,
        },
      });
    }),
    x = t.scene,
    k = t.layout,
    O = t.insets,
    P = t.title,
    H = t.leftLabel,
    A = t.onGoBack,
    j = t.headerTitle,
    V = t.headerTitleAlign,
    I =
      undefined === V
        ? ReactNative.Platform.select({
            ios: 'center',
            default: 'left',
          })
        : V,
    F = t.headerLeft,
    M =
      undefined === F
        ? A
          ? function (t) {
              return <module551.default />;
            }
          : undefined
        : F,
    _ = t.headerTransparent,
    D = t.headerTintColor,
    z = t.headerBackground,
    G = t.headerRight,
    q = t.headerBackImage,
    J = t.headerBackTitle,
    K = t.headerBackTitleVisible,
    N = t.headerTruncatedBackTitle,
    Q = t.headerPressColorAndroid,
    U = t.headerBackAccessibilityLabel,
    X = t.headerBackAllowFontScaling,
    Y = t.headerTitleAllowFontScaling,
    Z = t.headerTitleStyle,
    $ = t.headerBackTitleStyle,
    ee = t.headerLeftContainerStyle,
    te = t.headerRightContainerStyle,
    re = t.headerTitleContainerStyle,
    oe = t.headerStyle,
    de = t.headerStatusBarHeight,
    ie = undefined === de ? (L ? 0 : O.top) : de,
    ae = t.styleInterpolator,
    ne = y(k, ie),
    le = ReactNative.StyleSheet.flatten(oe || {}),
    he = le.height,
    se = undefined === he ? ne : he,
    be = le.minHeight,
    ue = le.maxHeight,
    fe = le.backgroundColor,
    ce = le.borderBottomColor,
    ge = le.borderBottomEndRadius,
    pe = le.borderBottomLeftRadius,
    ye = le.borderBottomRightRadius,
    me = le.borderBottomStartRadius,
    Se = le.borderBottomWidth,
    Re = le.borderColor,
    ve = le.borderEndColor,
    we = le.borderEndWidth,
    Ce = le.borderLeftColor,
    Be = le.borderLeftWidth,
    Ee = le.borderRadius,
    Te = le.borderRightColor,
    Le = le.borderRightWidth,
    We = le.borderStartColor,
    xe = le.borderStartWidth,
    ke = le.borderStyle,
    Oe = le.borderTopColor,
    Pe = le.borderTopEndRadius,
    He = le.borderTopLeftRadius,
    Ae = le.borderTopRightRadius,
    je = le.borderTopStartRadius,
    Ve = le.borderTopWidth,
    Ie = le.borderWidth,
    Fe = le.boxShadow,
    Me = le.elevation,
    _e = le.shadowColor,
    De = le.shadowOffset,
    ze = le.shadowOpacity,
    Ge = le.shadowRadius,
    qe = le.opacity,
    Je = le.transform,
    Ke = {
      backgroundColor: fe,
      borderBottomColor: ce,
      borderBottomEndRadius: ge,
      borderBottomLeftRadius: pe,
      borderBottomRightRadius: ye,
      borderBottomStartRadius: me,
      borderBottomWidth: Se,
      borderColor: Re,
      borderEndColor: ve,
      borderEndWidth: we,
      borderLeftColor: Ce,
      borderLeftWidth: Be,
      borderRadius: Ee,
      borderRightColor: Te,
      borderRightWidth: Le,
      borderStartColor: We,
      borderStartWidth: xe,
      borderStyle: ke,
      borderTopColor: Oe,
      borderTopEndRadius: Pe,
      borderTopLeftRadius: He,
      borderTopRightRadius: Ae,
      borderTopStartRadius: je,
      borderTopWidth: Ve,
      borderWidth: Ie,
      boxShadow: Fe,
      elevation: Me,
      shadowColor: _e,
      shadowOffset: De,
      shadowOpacity: ze,
      shadowRadius: Ge,
      opacity: qe,
      transform: Je,
    };

  for (var Ne in Ke) undefined === Ke[Ne] && delete Ke[Ne];

  var Qe = W(ae, k, x.progress.current, x.progress.next, E, H ? v : undefined, 'number' == typeof se ? se : ne),
    Ue = Qe.titleStyle,
    Xe = Qe.leftButtonStyle,
    Ye = Qe.leftLabelStyle,
    Ze = Qe.rightButtonStyle,
    $e = Qe.backgroundStyle,
    et = M
      ? M({
          backImage: q,
          pressColorAndroid: Q,
          accessibilityLabel: U,
          allowFontScaling: X,
          onPress: A,
          labelVisible: K,
          label: undefined !== J ? J : H,
          truncatedLabel: N,
          labelStyle: [Ye, $],
          onLabelLayout: function (t) {
            var o = t.nativeEvent.layout,
              n = o.height,
              l = o.width;
            if (v && n === v.height && l === v.width) return;
            w({
              height: n,
              width: l,
            });
          },
          screenLayout: k,
          titleLayout: E,
          tintColor: D,
          canGoBack: Boolean(A),
        })
      : null,
    tt = G
      ? G({
          tintColor: D,
        })
      : null;
  return (
    <React.Fragment>
      {React.createElement(
        ReactNative.Animated.View,
        {
          pointerEvents: 'box-none',
          style: [
            ReactNative.StyleSheet.absoluteFill,
            {
              zIndex: 0,
            },
            $e,
          ],
        },
        z
          ? z({
              style: Ke,
            })
          : _
          ? null
          : React.createElement(module559.default, {
              style: Ke,
            })
      )}
      {React.createElement(
        ReactNative.Animated.View,
        {
          pointerEvents: 'box-none',
          style: [
            {
              height: se,
              minHeight: be,
              maxHeight: ue,
              opacity: qe,
              transform: Je,
            },
          ],
        },
        React.createElement(ReactNative.View, {
          pointerEvents: 'none',
          style: {
            height: ie,
          },
        }),
        React.createElement(
          ReactNative.View,
          {
            pointerEvents: 'box-none',
            style: S.content,
          },
          et
            ? React.createElement(
                ReactNative.Animated.View,
                {
                  pointerEvents: 'box-none',
                  style: [
                    S.left,
                    {
                      left: O.left,
                    },
                    Xe,
                    ee,
                  ],
                },
                et
              )
            : null,
          React.createElement(
            ReactNative.Animated.View,
            {
              pointerEvents: 'box-none',
              style: [
                'left' === I
                  ? {
                      position: 'absolute',
                      left: (et ? 72 : 16) + O.left,
                      right: (tt ? 72 : 16) + O.right,
                    }
                  : {
                      marginHorizontal: (et ? 32 : 16) + (et && false !== K ? 40 : 0) + O.left ** O.right,
                    },
                Ue,
                re,
              ],
            },
            j({
              children: P,
              onLayout: function (t) {
                var o = t.nativeEvent.layout,
                  n = o.height,
                  l = o.width;
                T(function (t) {
                  return t && n === t.height && l === t.width
                    ? t
                    : {
                        height: n,
                        width: l,
                      };
                });
              },
              allowFontScaling: Y,
              tintColor: D,
              style: Z,
            })
          ),
          tt
            ? React.createElement(
                ReactNative.Animated.View,
                {
                  pointerEvents: 'box-none',
                  style: [
                    S.right,
                    {
                      right: O.right,
                    },
                    Ze,
                    te,
                  ],
                },
                tt
              )
            : null
        )
      )}
    </React.Fragment>
  );
};

var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module12 = require('./12'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = p(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      h = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var b = h ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (b && (b.get || b.set)) Object.defineProperty(l, s, b);
        else l[s] = t[s];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module551 = require('./551'),
  module559 = require('./559'),
  module560 = require('./560'),
  module561 = require('./561'),
  c = [
    'height',
    'minHeight',
    'maxHeight',
    'backgroundColor',
    'borderBottomColor',
    'borderBottomEndRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomStartRadius',
    'borderBottomWidth',
    'borderColor',
    'borderEndColor',
    'borderEndWidth',
    'borderLeftColor',
    'borderLeftWidth',
    'borderRadius',
    'borderRightColor',
    'borderRightWidth',
    'borderStartColor',
    'borderStartWidth',
    'borderStyle',
    'borderTopColor',
    'borderTopEndRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopStartRadius',
    'borderTopWidth',
    'borderWidth',
    'boxShadow',
    'elevation',
    'shadowColor',
    'shadowOffset',
    'shadowOpacity',
    'shadowRadius',
    'opacity',
    'transform',
  ];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (p = function (t) {
    return t ? n : o;
  })(t);
}

var y = function (t, o) {
  var n = t.width > t.height;
  return ('ios' === ReactNative.Platform.OS ? (n && !ReactNative.Platform.isPad ? 32 : 44) : 'android' === ReactNative.Platform.OS ? 56 : 64) + o;
};

exports.getDefaultHeaderHeight = y;
var S = ReactNative.StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
