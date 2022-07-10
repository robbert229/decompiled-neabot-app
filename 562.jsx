var module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
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
  module421 = require('./421'),
  module563 = require('./563'),
  module577 = require('./577'),
  module560 = require('./560'),
  module578 = require('./578');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var y = 0.1;
var h = React.memo(function (t) {
  var p = t.active,
    h = t.cardOverlay,
    S = t.cardOverlayEnabled,
    E = t.cardShadowEnabled,
    P = t.cardStyle,
    O = t.cardStyleInterpolator,
    w = t.closing,
    x = t.gesture,
    C = t.focused,
    I = t.gestureDirection,
    D = t.gestureEnabled,
    H = t.gestureResponseDistance,
    j = t.gestureVelocityImpact,
    R = t.getPreviousScene,
    A = t.getFocusedRoute,
    G = t.mode,
    M = t.headerMode,
    T = t.headerShown,
    _ = t.headerStyleInterpolator,
    k = t.hasAbsoluteHeader,
    L = t.headerHeight,
    F = t.onHeaderHeightChange,
    V = t.isParentHeaderShown,
    W = t.index,
    B = t.layout,
    q = t.onCloseRoute,
    z = t.onOpenRoute,
    J = t.onPageChangeCancel,
    K = t.onPageChangeConfirm,
    N = t.onPageChangeStart,
    Q = t.onGestureCancel,
    U = t.onGestureEnd,
    X = t.onGestureStart,
    Y = t.onTransitionEnd,
    Z = t.onTransitionStart,
    $ = t.renderHeader,
    ee = t.renderScene,
    te = t.safeAreaInsetBottom,
    ne = t.safeAreaInsetLeft,
    re = t.safeAreaInsetRight,
    oe = t.safeAreaInsetTop,
    ae = t.scene,
    le = t.transitionSpec,
    ue = {
      top: oe,
      right: re,
      bottom: te,
      left: ne,
    },
    se = module421.useTheme().colors,
    ie = React.useState('box-none'),
    ce = module12.default(ie, 2),
    de = ce[0],
    fe = ce[1];
  React.useEffect(
    function () {
      var t,
        n =
          null == (t = ae.progress.next)
            ? undefined
            : null == t.addListener
            ? undefined
            : t.addListener(function (t) {
                var n = t.value;
                fe(n <= y ? 'box-none' : 'none');
              });
      return function () {
        var t;
        if (n) null == (t = ae.progress.next) || null == t.removeListener || t.removeListener(n);
      };
    },
    [de, ae.progress.next]
  );
  var ge = 'none' !== M && false !== T,
    ve = R({
      route: ae.route,
    });
  return (
    <module563.default
      index={W}
      gestureDirection={I}
      layout={B}
      insets={ue}
      gesture={x}
      current={ae.progress.current}
      next={ae.progress.next}
      closing={w}
      onOpen={function () {
        var t = ae.route;
        if (!(null == Y))
          Y(
            {
              route: t,
            },
            false
          );
        z({
          route: t,
        });
      }}
      onClose={function () {
        var t = ae.route;
        if (!(null == Y))
          Y(
            {
              route: t,
            },
            true
          );
        q({
          route: t,
        });
      }}
      overlay={h}
      overlayEnabled={S}
      shadowEnabled={E}
      onTransition={function (t) {
        var n = t.closing,
          o = t.gesture,
          l = ae.route;
        if (o) p && n ? null == K || K(false) : null == J || J();
        else if (!(null == K)) K(true);
        if (!(null == Z))
          Z(
            {
              route: l,
            },
            n
          );
      }}
      onGestureBegin={function () {
        var t = ae.route;
        if (!(null == N)) N();
        if (!(null == X))
          X({
            route: t,
          });
      }}
      onGestureCanceled={function () {
        var t = ae.route;
        if (!(null == J)) J();
        if (!(null == Q))
          Q({
            route: t,
          });
      }}
      onGestureEnd={function () {
        var t = ae.route;
        if (!(null == U))
          U({
            route: t,
          });
      }}
      gestureEnabled={D}
      gestureResponseDistance={H}
      gestureVelocityImpact={j}
      transitionSpec={le}
      styleInterpolator={O}
      accessibilityElementsHidden={!C}
      importantForAccessibility={C ? 'auto' : 'no-hide-descendants'}
      pointerEvents={p ? 'box-none' : de}
      pageOverflowEnabled={'screen' === M && 'card' === G}
      containerStyle={
        k
          ? {
              marginTop: L,
            }
          : null
      }
      contentStyle={[
        {
          backgroundColor: se.background,
        },
        P,
      ]}
      style={[
        {
          overflow: p ? undefined : 'hidden',
        },
        ReactNative.StyleSheet.absoluteFill,
      ]}
    >
      <ReactNative.View style={b.container}>
        <ReactNative.View style={b.scene}>
          {React.createElement(
            module578.default.Provider,
            {
              value: ve,
            },
            React.createElement(
              module560.default.Provider,
              {
                value: V || ge,
              },
              React.createElement(
                module577.default.Provider,
                {
                  value: L,
                },
                ee({
                  route: ae.route,
                })
              )
            )
          )}
        </ReactNative.View>
        {'screen' === M
          ? $({
              mode: 'screen',
              layout: B,
              insets: ue,
              scenes: [ve, ae],
              getPreviousScene: R,
              getFocusedRoute: A,
              gestureDirection: I,
              styleInterpolator: _,
              onContentHeightChange: F,
            })
          : null}
      </ReactNative.View>
    </module563.default>
  );
});
exports.default = h;
var b = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  scene: {
    flex: 1,
  },
});
