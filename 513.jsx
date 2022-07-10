var module20 = require('./20'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = P(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, c, l);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module514 = require('./514'),
  module421 = require('./421'),
  module520 = require('./520'),
  module547 = require('./547'),
  module579 = require('./579'),
  module580 = require('./580'),
  module584 = require('./584'),
  module560 = require('./560'),
  O = ['state', 'navigation', 'keyboardHandlingEnabled', 'mode', 'headerMode', 'descriptors'];

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
  })(t);
}

function w() {
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

var C = null != module520.GestureHandlerRootView ? module520.GestureHandlerRootView : ReactNative.View,
  H = (function (t, ...args) {
    module35.default(M, t);

    var module520 = M,
      P = w(),
      H = function () {
        var t,
          n = module34.default(module520);

        if (P) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function M() {
      var t;
      module24.default(this, M);
      (t = H.call(this, ...args)).state = {
        routes: [],
        previousRoutes: [],
        previousDescriptors: {},
        openingRouteKeys: [],
        closingRouteKeys: [],
        replacingRouteKeys: [],
        descriptors: {},
      };

      t.getGesturesEnabled = function (n) {
        var o = n.route,
          u = t.state.descriptors[o.key];

        if (u) {
          var s = u.options,
            c = s.gestureEnabled;
          return false !== s.animationEnabled && false !== c;
        }

        return false;
      };

      t.getPreviousRoute = function (n) {
        var o = n.route,
          u = t.state,
          s = u.closingRouteKeys,
          c = u.replacingRouteKeys,
          l = t.state.routes.filter(function (t) {
            return t.key === o.key || (!s.includes(t.key) && !c.includes(t.key));
          });
        return l[
          l.findIndex(function (t) {
            return t.key === o.key;
          }) - 1
        ];
      };

      t.renderScene = function (n) {
        var o = n.route,
          u = t.state.descriptors[o.key] || t.props.descriptors[o.key];
        return u ? u.render() : null;
      };

      t.renderHeader = function (t) {
        return <module580.default />;
      };

      t.handleOpenRoute = function (n) {
        var o = n.route,
          u = t.props,
          s = u.state,
          c = u.navigation,
          l = t.state,
          f = l.closingRouteKeys,
          p = l.replacingRouteKeys;
        if (
          f.some(function (t) {
            return t === o.key;
          }) &&
          p.every(function (t) {
            return t !== o.key;
          }) &&
          s.routeNames.includes(o.name) &&
          !s.routes.some(function (t) {
            return t.key === o.key;
          })
        )
          c.navigate(o);
        else
          t.setState(function (t) {
            return {
              routes: t.replacingRouteKeys.length
                ? t.routes.filter(function (n) {
                    return !t.replacingRouteKeys.includes(n.key);
                  })
                : t.routes,
              openingRouteKeys: t.openingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              closingRouteKeys: t.closingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              replacingRouteKeys: [],
            };
          });
      };

      t.handleCloseRoute = function (n) {
        var o = n.route,
          s = t.props,
          c = s.state,
          l = s.navigation;
        if (
          c.routes.some(function (t) {
            return t.key === o.key;
          })
        )
          l.dispatch(
            module11.default({}, module421.StackActions.pop(), {
              source: o.key,
              target: c.key,
            })
          );
        else
          t.setState(function (t) {
            return {
              routes: t.routes.filter(function (t) {
                return t.key !== o.key;
              }),
              openingRouteKeys: t.openingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              closingRouteKeys: t.closingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
            };
          });
      };

      t.handleTransitionStart = function (n, o) {
        var u = n.route;
        return t.props.navigation.emit({
          type: 'transitionStart',
          data: {
            closing: o,
          },
          target: u.key,
        });
      };

      t.handleTransitionEnd = function (n, o) {
        var u = n.route;
        return t.props.navigation.emit({
          type: 'transitionEnd',
          data: {
            closing: o,
          },
          target: u.key,
        });
      };

      t.handleGestureStart = function (n) {
        var o = n.route;
        t.props.navigation.emit({
          type: 'gestureStart',
          target: o.key,
        });
      };

      t.handleGestureEnd = function (n) {
        var o = n.route;
        t.props.navigation.emit({
          type: 'gestureEnd',
          target: o.key,
        });
      };

      t.handleGestureCancel = function (n) {
        var o = n.route;
        t.props.navigation.emit({
          type: 'gestureCancel',
          target: o.key,
        });
      };

      return t;
    }

    module25.default(
      M,
      [
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.props,
              s = n.state,
              c = n.navigation,
              l = n.keyboardHandlingEnabled,
              f = n.mode,
              p = undefined === f ? 'card' : f,
              h = n.headerMode,
              S = undefined === h ? ('card' === p && 'ios' === ReactNative.Platform.OS ? 'float' : 'screen') : h,
              P = module52.default(n, O),
              w = this.state,
              H = w.routes,
              M = w.descriptors,
              T = w.openingRouteKeys,
              j = w.closingRouteKeys;
            return React.createElement(
              module421.NavigationHelpersContext.Provider,
              {
                value: c,
              },
              React.createElement(
                C,
                {
                  style: D.container,
                },
                React.createElement(
                  module584.default,
                  null,
                  React.createElement(module514.SafeAreaConsumer, null, function (n) {
                    return React.createElement(
                      module579.default,
                      {
                        enabled: false !== l,
                      },
                      function (o) {
                        return React.createElement(module560.default.Consumer, null, function (c) {
                          return React.createElement(
                            module547.default,
                            module11.default(
                              {
                                mode: p,
                                insets: n,
                                isParentHeaderShown: c,
                                getPreviousRoute: t.getPreviousRoute,
                                getGesturesEnabled: t.getGesturesEnabled,
                                routes: H,
                                openingRouteKeys: T,
                                closingRouteKeys: j,
                                onOpenRoute: t.handleOpenRoute,
                                onCloseRoute: t.handleCloseRoute,
                                onTransitionStart: t.handleTransitionStart,
                                onTransitionEnd: t.handleTransitionEnd,
                                renderHeader: t.renderHeader,
                                renderScene: t.renderScene,
                                headerMode: S,
                                state: s,
                                descriptors: M,
                                onGestureStart: t.handleGestureStart,
                                onGestureEnd: t.handleGestureEnd,
                                onGestureCancel: t.handleGestureCancel,
                              },
                              P,
                              o
                            )
                          );
                        });
                      }
                    );
                  })
                )
              )
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, o) {
            if (
              (t.state.routes === o.previousRoutes ||
                ((p = t.state.routes.map(function (t) {
                  return t.key;
                })),
                (y = o.previousRoutes.map(function (t) {
                  return t.key;
                })),
                p.length === y.length &&
                  p.every(function (t, n) {
                    return t === y[n];
                  }))) &&
              o.routes.length
            ) {
              var u = o.routes,
                s = o.previousRoutes,
                c = t.descriptors,
                l = o.previousDescriptors;

              if (
                (t.descriptors !== o.previousDescriptors &&
                  ((c = o.routes.reduce(function (n, u) {
                    n[u.key] = t.descriptors[u.key] || o.descriptors[u.key];
                    return n;
                  }, {})),
                  (l = t.descriptors)),
                t.state.routes !== o.previousRoutes)
              ) {
                var f = t.state.routes.reduce(function (t, n) {
                  t[n.key] = n;
                  return t;
                }, {});
                u = o.routes.map(function (t) {
                  return f[t.key] || t;
                });
                s = t.state.routes;
              }

              return {
                routes: u,
                previousRoutes: s,
                descriptors: c,
                previousDescriptors: l,
              };
            }

            var p,
              y,
              v,
              k,
              R = t.state.index < t.state.routes.length - 1 ? t.state.routes.slice(0, t.state.index + 1) : t.state.routes,
              h = o.openingRouteKeys,
              K = o.closingRouteKeys,
              E = o.replacingRouteKeys,
              S = o.previousRoutes,
              b = S[S.length - 1],
              G = R[R.length - 1],
              O = function (n) {
                var u = t.descriptors[n] || o.descriptors[n];
                return !u || false !== u.options.animationEnabled;
              };

            if (b && b.key !== G.key)
              S.some(function (t) {
                return t.key === G.key;
              })
                ? R.some(function (t) {
                    return t.key === b.key;
                  }) ||
                  (O(b.key) &&
                    !K.includes(b.key) &&
                    ((K = [].concat(module20.default(K), [b.key])),
                    (h = h.filter(function (t) {
                      return t !== b.key;
                    })),
                    (E = E.filter(function (t) {
                      return t !== b.key;
                    })),
                    (R = [].concat(module20.default(R), [b]))))
                : O(G.key) &&
                  !h.includes(G.key) &&
                  ((h = [].concat(module20.default(h), [G.key])),
                  (K = K.filter(function (t) {
                    return t !== G.key;
                  })),
                  (E = E.filter(function (t) {
                    return t !== G.key;
                  })),
                  R.some(function (t) {
                    return t.key === b.key;
                  }) ||
                    ((h = h.filter(function (t) {
                      return t !== b.key;
                    })),
                    'pop' === ((v = G.key), null != (k = (t.descriptors[v] || o.descriptors[v]).options.animationTypeForReplace) ? k : 'push')
                      ? ((K = [].concat(module20.default(K), [b.key])),
                        (h = h.filter(function (t) {
                          return t !== G.key;
                        })),
                        (R = [].concat(module20.default(R), [b])))
                      : ((E = [].concat(module20.default(E), [b.key])),
                        (K = K.filter(function (t) {
                          return t !== b.key;
                        })),
                        (R = R.slice()).splice(R.length - 1, 0, b))));
            else if (E.length || K.length) {
              var P;
              (P = R = R.slice()).splice.apply(
                P,
                [R.length - 1, 0].concat(
                  module20.default(
                    o.routes.filter(function (t) {
                      var n = t.key;
                      return !!O(n) && (E.includes(n) || K.includes(n));
                    })
                  )
                )
              );
            }
            if (!R.length) throw new Error('There should always be at least one route in the navigation state.');
            var w = R.reduce(function (n, u) {
              n[u.key] = t.descriptors[u.key] || o.descriptors[u.key];
              return n;
            }, {});
            return {
              routes: R,
              previousRoutes: t.state.routes,
              previousDescriptors: t.descriptors,
              openingRouteKeys: h,
              closingRouteKeys: K,
              replacingRouteKeys: E,
              descriptors: w,
            };
          },
        },
      ]
    );
    return M;
  })(React.Component);

exports.default = H;
var D = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
