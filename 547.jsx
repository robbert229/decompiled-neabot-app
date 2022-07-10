var module260 = require('./260'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module11 = require('./11'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = w(o);
    if (n && n.has(t)) return n.get(t);
    var s = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, l, c);
        else s[l] = t[l];
      }

    s.default = t;
    if (n) n.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module548 = require('./548'),
  module549 = require('./549'),
  module550 = require('./550'),
  module562 = require('./562'),
  module419 = require('./419'),
  module417 = require('./417'),
  module414 = require('./414'),
  module575 = require('./575');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (w = function (t) {
    return t ? n : o;
  })(t);
}

function H() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var D = Object.freeze({
    options: {},
  }),
  E = function (t, o, n, s, u, l) {
    return t.reduce(function (t, c) {
      var p = (s[c.key] || {}).options,
        y = undefined === p ? {} : p,
        v = ReactNative.StyleSheet.flatten(y.headerStyle || {}),
        b = 'number' == typeof v.height ? v.height : l[c.key],
        k = module11.default({}, o, y.safeAreaInsets),
        I = y.headerStatusBarHeight,
        R = undefined === I ? (n ? 0 : k.top) : I;
      t[c.key] = 'number' == typeof b ? b : module550.getDefaultHeaderHeight(u, R);
      return t;
    }, {});
  },
  C = function (t, o, n) {
    var s = ((null == n ? undefined : n.options) || {}).gestureDirection,
      u = undefined === s ? ('modal' === t ? module419.ModalTransition.gestureDirection : module419.DefaultTransition.gestureDirection) : s;
    return module575.default(o, u);
  },
  O = function (t, o, n, s) {
    var u = C(
      t,
      {
        width: 1 ** n.width,
        height: 1 ** n.height,
      },
      s
    );
    return u > 0
      ? o.interpolate({
          inputRange: [0, u],
          outputRange: [1, 0],
        })
      : o.interpolate({
          inputRange: [u, 0],
          outputRange: [0, 1],
        });
  },
  x = (function (t) {
    module35.default(x, t);

    var module550 = x,
      module575 = H(),
      w = function () {
        var t,
          o = module34.default(module550);

        if (module575) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function x(t) {
      var s;
      module24.default(this, x);

      (s = w.call(this, t)).handleLayout = function (t) {
        var o = t.nativeEvent.layout,
          n = o.height,
          u = o.width,
          l = {
            width: u,
            height: n,
          };
        s.setState(function (t, o) {
          return n === t.layout.height && u === t.layout.width
            ? null
            : {
                layout: l,
                headerHeights: E(o.routes, o.insets, o.isParentHeaderShown, t.descriptors, l, t.headerHeights),
              };
        });
      };

      s.handleHeaderLayout = function (t) {
        var n = t.route,
          u = t.height;
        s.setState(function (t) {
          var s = t.headerHeights;
          return s[n.key] === u
            ? null
            : {
                headerHeights: module11.default({}, s, module260.default({}, n.key, u)),
              };
        });
      };

      s.getFocusedRoute = function () {
        var t = s.props.state;
        return t.routes[t.index];
      };

      s.getPreviousScene = function (t) {
        var o = t.route,
          n = s.props.getPreviousRoute,
          u = s.state.scenes,
          l = n({
            route: o,
          });
        if (l)
          return u.find(function (t) {
            return t.route.key === l.key;
          });
      };

      var u = ReactNative.Dimensions.get('window'),
        l = u.height,
        c = undefined === l ? 0 : l,
        p = u.width,
        y = undefined === p ? 0 : p;
      s.state = {
        routes: [],
        scenes: [],
        gestures: {},
        layout: {
          height: c,
          width: y,
        },
        descriptors: s.props.descriptors,
        headerHeights: {},
      };
      return s;
    }

    module25.default(
      x,
      [
        {
          key: 'render',
          value: function () {
            var t = this,
              o = this.props,
              n = o.mode,
              s = o.insets,
              u = o.descriptors,
              l = o.state,
              c = o.routes,
              S = o.closingRouteKeys,
              P = o.onOpenRoute,
              w = o.onCloseRoute,
              H = o.getGesturesEnabled,
              D = o.renderHeader,
              E = o.renderScene,
              C = o.headerMode,
              O = o.isParentHeaderShown,
              x = o.onTransitionStart,
              M = o.onTransitionEnd,
              _ = o.onPageChangeStart,
              T = o.onPageChangeConfirm,
              F = o.onPageChangeCancel,
              j = o.onGestureStart,
              G = o.onGestureEnd,
              L = o.onGestureCancel,
              B = o.detachInactiveScreens,
              N = undefined === B ? 'web' === ReactNative.Platform.OS || module549.shouldUseActivityState : B,
              V = this.state,
              W = V.scenes,
              z = V.layout,
              K = V.gestures,
              U = V.headerHeights,
              q = l.routes[l.index],
              J = u[q.key],
              Q = J ? J.options : {},
              X = U[q.key],
              Y = 'modal' === n ? module419.ModalTransition : module419.DefaultTransition;
            if ('screen' === C)
              Y = module11.default({}, Y, {
                headerStyleInterpolator: module417.forNoAnimation,
              });

            for (
              var Z = Q.safeAreaInsets || {},
                $ = Z.top,
                ee = undefined === $ ? s.top : $,
                te = Z.right,
                re = undefined === te ? s.right : te,
                oe = Z.bottom,
                ne = undefined === oe ? s.bottom : oe,
                ae = Z.left,
                ie = undefined === ae ? s.left : ae,
                se = 1,
                ue = W.length - 1;
              ue >= 0;
              ue--
            ) {
              var le = W[ue].descriptor.options.detachPreviousScreen;
              if (false !== (undefined === le ? 'modal' !== n || ue !== W.length - 1 : le)) break;
              se++;
            }

            var de =
                'float' === C &&
                this.state.scenes.slice(-2).some(function (t) {
                  var o = t.descriptor,
                    n = o ? o.options : {},
                    s = n.headerTransparent,
                    u = n.headerShown;
                  return !(!s && false !== (undefined === u || u));
                }),
              ce =
                'float' === C ? (
                  <React.Fragment key="header">
                    {D({
                      mode: 'float',
                      layout: z,
                      insets: {
                        top: ee,
                        right: re,
                        bottom: ne,
                        left: ie,
                      },
                      scenes: W,
                      getPreviousScene: this.getPreviousScene,
                      getFocusedRoute: this.getFocusedRoute,
                      onContentHeightChange: this.handleHeaderLayout,
                      gestureDirection: undefined !== Q.gestureDirection ? Q.gestureDirection : Y.gestureDirection,
                      styleInterpolator: undefined !== Q.headerStyleInterpolator ? Q.headerStyleInterpolator : Y.headerStyleInterpolator,
                      style: [
                        A.floating,
                        de && [
                          {
                            height: X,
                          },
                          A.absolute,
                        ],
                      ],
                    })}
                  </React.Fragment>
                ) : null,
              he = (null == module548.screensEnabled ? undefined : module548.screensEnabled()) && N;
            return (
              <React.Fragment>
                {de ? null : ce}
                <module549.MaybeScreenContainer enabled={he} style={A.container} onLayout={this.handleLayout}>
                  {c.map(function (o, u, l) {
                    var c = q.key === o.key,
                      y = K[o.key],
                      k = W[u],
                      I = 1;
                    if (module549.shouldUseActivityState || 'web' === ReactNative.Platform.OS) {
                      if (u < l.length - se - 1) I = 0;
                      else {
                        var A = W[l.length - 1],
                          B = u === l.length - 1 ? 2 : u >= l.length - se ? 1 : 0;
                        I = A
                          ? A.progress.current.interpolate({
                              inputRange: [0, 0.99, 1],
                              outputRange: [1, 1, B],
                              extrapolate: 'clamp',
                            })
                          : 1;
                      }
                    } else
                      I = k.progress.next
                        ? k.progress.next.interpolate({
                            inputRange: [0, 0.99, 1],
                            outputRange: [1, 1, 0],
                            extrapolate: 'clamp',
                          })
                        : 1;
                    var N = k.descriptor ? k.descriptor.options : {},
                      V = N.safeAreaInsets,
                      J = N.headerShown,
                      Q = undefined === J || J,
                      X = N.headerTransparent,
                      Z = N.cardShadowEnabled,
                      $ = N.cardOverlayEnabled,
                      ee = N.cardOverlay,
                      te = N.cardStyle,
                      re = N.animationEnabled,
                      oe = N.gestureResponseDistance,
                      ne = N.gestureVelocityImpact,
                      ae = N.gestureDirection,
                      ie = undefined === ae ? Y.gestureDirection : ae,
                      ue = N.transitionSpec,
                      le = undefined === ue ? Y.transitionSpec : ue,
                      ce = N.cardStyleInterpolator,
                      pe = undefined === ce ? (false === re ? module414.forNoAnimation : Y.cardStyleInterpolator) : ce,
                      fe = N.headerStyleInterpolator,
                      ge = {
                        gestureDirection: ie,
                        transitionSpec: le,
                        cardStyleInterpolator: pe,
                        headerStyleInterpolator: undefined === fe ? Y.headerStyleInterpolator : fe,
                      };

                    if (u !== l.length - 1) {
                      var ye = W[u + 1];

                      if (ye) {
                        var ve = ye.descriptor ? ye.descriptor.options : {},
                          Se = ve.animationEnabled,
                          me = ve.gestureDirection,
                          be = undefined === me ? Y.gestureDirection : me,
                          ke = ve.transitionSpec,
                          Ie = undefined === ke ? Y.transitionSpec : ke,
                          Re = ve.cardStyleInterpolator,
                          Pe = undefined === Re ? (false === Se ? module414.forNoAnimation : Y.cardStyleInterpolator) : Re,
                          we = ve.headerStyleInterpolator;
                        ge = {
                          gestureDirection: be,
                          transitionSpec: Ie,
                          cardStyleInterpolator: Pe,
                          headerStyleInterpolator: undefined === we ? Y.headerStyleInterpolator : we,
                        };
                      }
                    }

                    var He = V || {},
                      De = He.top,
                      Ee = undefined === De ? s.top : De,
                      Ce = He.right,
                      Oe = undefined === Ce ? s.right : Ce,
                      xe = He.bottom,
                      Ae = undefined === xe ? s.bottom : xe,
                      Me = He.left,
                      _e = undefined === Me ? s.left : Me,
                      Te = 'none' !== C && false !== Q ? U[o.key] : 0;

                    return (
                      <module549.MaybeScreen key={o.key} style={ReactNative.StyleSheet.absoluteFill} enabled={he} active={I} pointerEvents="box-none">
                        <module562.default />
                      </module549.MaybeScreen>
                    );
                  })}
                </module549.MaybeScreenContainer>
                {de ? ce : null}
              </React.Fragment>
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, o) {
            if (t.routes === o.routes && t.descriptors === o.descriptors) return null;
            var n = t.routes.reduce(function (n, s) {
              var u = t.descriptors[s.key],
                l = ((null == u ? undefined : u.options) || {}).animationEnabled;
              n[s.key] = o.gestures[s.key] || new ReactNative.Animated.Value(t.openingRouteKeys.includes(s.key) && false !== l ? C(t.mode, o.layout, u) : 0);
              return n;
            }, {});
            return {
              routes: t.routes,
              scenes: t.routes.map(function (s, u, l) {
                var c = l[u - 1],
                  h = l[u + 1],
                  p = o.scenes[u],
                  f = n[s.key],
                  y = c ? n[c.key] : undefined,
                  v = h ? n[h.key] : undefined,
                  S = t.descriptors[s.key] || o.descriptors[s.key] || (p ? p.descriptor : D),
                  b = t.descriptors[null == h ? undefined : h.key] || o.descriptors[null == h ? undefined : h.key],
                  k = t.descriptors[null == c ? undefined : c.key] || o.descriptors[null == c ? undefined : c.key],
                  I = {
                    route: s,
                    descriptor: S,
                    progress: {
                      current: O(t.mode, f, o.layout, S),
                      next: v ? O(t.mode, v, o.layout, b) : undefined,
                      previous: y ? O(t.mode, y, o.layout, k) : undefined,
                    },
                    __memo: [s, o.layout, S, b, k, f, v, y],
                  };
                return p &&
                  I.__memo.every(function (t, o) {
                    return p.__memo[o] === t;
                  })
                  ? p
                  : I;
              }),
              gestures: n,
              descriptors: t.descriptors,
              headerHeights: E(t.routes, t.insets, t.isParentHeaderShown, o.descriptors, o.layout, o.headerHeights),
            };
          },
        },
      ]
    );
    return x;
  })(React.Component);

exports.default = x;
var A = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  floating: {
    zIndex: 1,
  },
});
