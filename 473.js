exports.default = function (t, p) {
  var L = module490.default(),
    O = React.useContext(module442.default),
    x = p.children,
    V = p.screenListeners,
    W = module52.default(p, F),
    D = React.useRef(
      t(
        module11.default(
          {},
          W,
          null != O && O.params && null == O.params.state && false !== O.params.initial && 'string' == typeof O.params.screen
            ? {
                initialRouteName: O.params.screen,
              }
            : null
        )
      )
    ).current,
    T = K(x),
    H = T.reduce(function (t, n) {
      if (n[1].name in t) throw new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + n[1].name + "')");
      t[n[1].name] = n;
      return t;
    }, {}),
    J = T.map(function (t) {
      return t[1].name;
    }),
    q = J.reduce(function (t, n) {
      var u = H[n][1].initialParams;
      t[n] = u;
      return t;
    }, {}),
    z = J.reduce(function (t, n) {
      return module11.default(t, module260.default({}, n, H[n][1].getId));
    }, {});
  if (!J.length) throw new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
  var B = React.useCallback(
      function (t) {
        return undefined === t.type || t.type === D.type;
      },
      [D.type]
    ),
    Q = React.useCallback(
      function (t) {
        return undefined !== t && false === t.stale && B(t);
      },
      [B]
    ),
    U = React.useContext(module443.default),
    X = U.state,
    Y = U.getState,
    Z = U.setState,
    $ = U.setKey,
    ee = U.getKey,
    te = U.getIsInitial,
    ne = React.useRef(false),
    re = React.useCallback(
      function () {
        Z(undefined);
        ne.current = true;
      },
      [Z]
    ),
    ae = React.useCallback(
      function (t) {
        if (!ne.current) Z(t);
      },
      [Z]
    ),
    ue = React.useMemo(
      function () {
        var t,
          n,
          u,
          s = J.reduce(function (t, n) {
            var u,
              s,
              l,
              f = H[n][1].initialParams,
              c =
                null == (null == O ? undefined : null == (u = O.params) ? undefined : u.state) &&
                false !== (null == O ? undefined : null == (s = O.params) ? undefined : s.initial) &&
                (null == O ? undefined : null == (l = O.params) ? undefined : l.screen) === n
                  ? O.params.params
                  : undefined;
            t[n] = undefined !== f || undefined !== c ? module11.default({}, f, c) : undefined;
            return t;
          }, {});
        return (undefined !== X && B(X)) || null != (null == O ? undefined : null == (t = O.params) ? undefined : t.state)
          ? [
              D.getRehydratedState(null != (n = null == O ? undefined : null == (u = O.params) ? undefined : u.state) ? n : X, {
                routeNames: J,
                routeParamList: s,
                routeGetIdList: z,
              }),
              false,
            ]
          : [
              D.getInitialState({
                routeNames: J,
                routeParamList: s,
                routeGetIdList: z,
              }),
              true,
            ];
      },
      [X, D, B]
    ),
    ie = module12.default(ue, 2),
    oe = ie[0],
    se = ie[1],
    le = Q(X) ? X : oe,
    fe = le;
  if (!module476.default(le.routeNames, J))
    fe = D.getStateForRouteNamesChange(le, {
      routeNames: J,
      routeParamList: q,
      routeGetIdList: z,
    });
  var de = React.useRef(null == O ? undefined : O.params);

  if (
    (React.useEffect(
      function () {
        de.current = null == O ? undefined : O.params;
      },
      [null == O ? undefined : O.params]
    ),
    null != O && O.params)
  ) {
    var ce,
      pe = de.current;
    if ('object' == typeof O.params.state && null != O.params.state && O.params !== pe) ce = module426.CommonActions.reset(O.params.state);
    else if ('string' == typeof O.params.screen && ((false === O.params.initial && se) || O.params !== pe))
      ce = module426.CommonActions.navigate({
        name: O.params.screen,
        params: O.params.params,
        path: O.params.path,
      });
    var me = ce
      ? D.getStateForAction(fe, ce, {
          routeNames: J,
          routeParamList: q,
          routeGetIdList: z,
        })
      : null;
    fe =
      null !== me
        ? D.getRehydratedState(me, {
            routeNames: J,
            routeParamList: q,
            routeGetIdList: z,
          })
        : fe;
  }

  var ve = le !== fe;
  module449.default(function () {
    if (ve) ae(fe);
  });
  le = fe;
  React.useEffect(function () {
    $(L);
    if (!te()) ae(fe);
    return function () {
      setTimeout(function () {
        if (undefined !== Y() && ee() === L) re();
      }, 0);
    };
  }, []);
  var ye = React.useRef();
  ye.current = oe;
  var ge = React.useCallback(
      function () {
        var t = Y();
        return Q(t) ? t : ye.current;
      },
      [Y, Q]
    ),
    he = module446.default(function (t) {
      var n,
        u,
        o,
        s = [];

      if (t.target) {
        u = le.routes.find(function (n) {
          return n.key === t.target;
        });
        if (null != (o = u) && o.name) s.push(u.name);
      } else {
        u = le.routes[le.index];
        s.push.apply(
          s,
          module20.default(
            Object.keys(H).filter(function (t) {
              var n;
              return (null == (n = u) ? undefined : n.name) === t;
            })
          )
        );
      }

      if (null != u) {
        var f = je[u.key].navigation,
          c = (n = []).concat
            .apply(
              n,
              module20.default(
                [V]
                  .concat(
                    module20.default(
                      s.map(function (t) {
                        var n = H[t][1].listeners;
                        return n;
                      })
                    )
                  )
                  .map(function (n) {
                    var o =
                      'function' == typeof n
                        ? n({
                            route: u,
                            navigation: f,
                          })
                        : n;
                    return o
                      ? Object.keys(o)
                          .filter(function (n) {
                            return n === t.type;
                          })
                          .map(function (t) {
                            return null == o ? undefined : o[t];
                          })
                      : undefined;
                  })
              )
            )
            .filter(function (t, n, u) {
              return t && u.lastIndexOf(t) === n;
            });
        c.forEach(function (n) {
          return null == n ? undefined : n(t);
        });
      }
    });
  module484.default({
    state: le,
    emitter: he,
  });
  React.useEffect(
    function () {
      he.emit({
        type: 'state',
        data: {
          state: le,
        },
      });
    },
    [he, le]
  );
  var Se = module445.default(),
    Le = Se.listeners,
    Oe = Se.addListener,
    be = module447.default(),
    ke = be.keyedListeners,
    Pe = be.addKeyedListener,
    Ce = module486.default({
      router: D,
      getState: ge,
      setState: ae,
      key: null == O ? undefined : O.key,
      actionListeners: Le.action,
      beforeRemoveListeners: ke.beforeRemove,
      routerConfigOptions: {
        routeNames: J,
        routeParamList: q,
        routeGetIdList: z,
      },
      emitter: he,
    }),
    we = module489.default({
      router: D,
      key: null == O ? undefined : O.key,
      getState: ge,
      setState: ae,
    }),
    Re = module485.default({
      onAction: Ce,
      getState: ge,
      emitter: he,
      router: D,
    });
  module483.default({
    navigation: Re,
    focusedListeners: Le.focus,
  });
  module488.default({
    getState: ge,
    getStateListeners: ke.getState,
  });
  var je = module479.default({
    state: le,
    screens: H,
    navigation: Re,
    screenOptions: p.screenOptions,
    defaultScreenOptions: p.defaultScreenOptions,
    onAction: Ce,
    getState: ge,
    setState: ae,
    onRouteFocus: we,
    addListener: Oe,
    addKeyedListener: Pe,
    router: D,
    emitter: he,
  });
  module478.default({
    state: le,
    navigation: Re,
    descriptors: je,
  });
  var Ie = module477.default(module468.default.Provider, {
    value: Re,
  });
  return {
    state: le,
    navigation: Re,
    descriptors: je,
    NavigationContent: Ie,
  };
};

require('./475');

var module12 = require('./12'),
  module260 = require('./260'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module20 = require('./20'),
  module426 = require('./426'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = x(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, l, f);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module452 = require('./452'),
  module476 = require('./476'),
  module468 = require('./468'),
  module442 = require('./442'),
  module443 = require('./443'),
  module453 = require('./453'),
  module469 = require('./469'),
  module445 = require('./445'),
  module477 = require('./477'),
  module478 = require('./478'),
  module479 = require('./479'),
  module446 = require('./446'),
  module483 = require('./483'),
  module484 = require('./484'),
  module447 = require('./447'),
  module485 = require('./485'),
  module486 = require('./486'),
  module488 = require('./488'),
  module489 = require('./489'),
  module490 = require('./490'),
  module449 = require('./449'),
  F = ['children', 'screenListeners'];

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (x = function (t) {
    return t ? u : n;
  })(t);
}

module469.PrivateValueStore;

var K = function t(n, u) {
  return React.Children.toArray(n).reduce(function (n, o) {
    var s, f;

    if (React.isValidElement(o)) {
      if (o.type === module453.default) {
        n.push([u, o.props]);
        return n;
      }

      if (o.type === React.Fragment || o.type === module452.default) {
        n.push.apply(
          n,
          module20.default(t(o.props.children, o.type !== module452.default ? u : null != u ? [].concat(module20.default(u), [o.props.screenOptions]) : [o.props.screenOptions]))
        );
        return n;
      }
    }

    throw new Error(
      "A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " +
        (React.isValidElement(o)
          ? "'" +
            ('string' == typeof o.type ? o.type : null == (s = o.type) ? undefined : s.name) +
            "'" +
            (null != (f = o.props) && f.name ? " for the screen '" + o.props.name + "'" : '')
          : 'object' == typeof o
          ? JSON.stringify(o)
          : "'" + String(o) + "'") +
        "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'."
    );
  }, []);
};
