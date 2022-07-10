require('./434');

require('./435');

var module12 = require('./12'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module426 = require('./426'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = I(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, c, s);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module436 = require('./436'),
  module437 = require('./437'),
  module438 = require('./438'),
  module439 = require('./439'),
  module440 = require('./440'),
  module441 = require('./441'),
  module442 = require('./442'),
  module443 = require('./443'),
  module444 = require('./444'),
  module445 = require('./445'),
  module446 = require('./446'),
  module447 = require('./447'),
  module448 = require('./448'),
  module449 = require('./449'),
  module450 = require('./450'),
  S = ['key', 'routeNames'];

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (I = function (t) {
    return t ? u : n;
  })(t);
}

var M = function t(n) {
    if (undefined !== n) {
      var l = module52.default(n, S);
      return module11.default({}, l, {
        stale: true,
        routes: n.routes.map(function (n) {
          return undefined === n.state
            ? n
            : module11.default({}, n, {
                state: t(n.state),
              });
        }),
      });
    }
  },
  N = React.forwardRef(function (t, o) {
    var S = t.initialState,
      I = t.onStateChange,
      N = t.onUnhandledAction,
      j = t.independent,
      A = t.children;
    if (!React.useContext(module443.default).isDefault && !j)
      throw new Error(
        "Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them."
      );
    var L = module450.default(function () {
        return M(null == S ? undefined : S);
      }),
      D = module12.default(L, 5),
      G = D[0],
      K = D[1],
      T = D[2],
      U = D[3],
      x = D[4],
      W = React.useRef(true),
      B = React.useRef(),
      Z = React.useCallback(function () {
        return B.current;
      }, []),
      H = React.useCallback(function (t) {
        B.current = t;
      }, []),
      q = module445.default(),
      z = q.listeners,
      F = q.addListener,
      J = module447.default(),
      Q = J.keyedListeners,
      V = J.addKeyedListener,
      X = React.useCallback(
        function (t) {
          if (null == z.focus[0]) console.error(module436.NOT_INITIALIZED_ERROR);
          else
            z.focus[0](function (n) {
              return n.dispatch(t);
            });
        },
        [z.focus]
      ),
      Y = React.useCallback(
        function () {
          if (null == z.focus[0]) return false;
          var t = z.focus[0](function (t) {
              return t.canGoBack();
            }),
            n = t.result;
          return !!t.handled && n;
        },
        [z.focus]
      ),
      $ = React.useCallback(
        function (t) {
          var n,
            o = null != (n = null == t ? undefined : t.key) ? n : null == Q.getState.root ? undefined : Q.getState.root().key;
          if (null == o) console.error(module436.NOT_INITIALIZED_ERROR);
          else
            z.focus[0](function (n) {
              return n.dispatch(
                module11.default({}, module426.CommonActions.reset(t), {
                  target: o,
                })
              );
            });
        },
        [Q.getState, z.focus]
      ),
      ee = React.useCallback(
        function () {
          return null == Q.getState.root ? undefined : Q.getState.root();
        },
        [Q.getState]
      ),
      te = React.useCallback(
        function () {
          var t = ee();
          if (null != t) return module438.default(t);
        },
        [ee]
      ),
      ne = module446.default(),
      re = module448.default({}),
      ue = re.addOptionsGetter,
      ae = re.getCurrentOptions,
      oe = React.useMemo(
        function () {
          return module11.default(
            {},
            Object.keys(module426.CommonActions).reduce(function (t, n) {
              t[n] = function () {
                return X(module426.CommonActions[n].apply(module426.CommonActions, arguments));
              };

              return t;
            }, {}),
            ne.create('root'),
            {
              resetRoot: $,
              dispatch: X,
              canGoBack: Y,
              getRootState: ee,
              getState: function () {
                return he.current;
              },
              getParent: function () {},
              getCurrentRoute: te,
              getCurrentOptions: ae,
              isReady: function () {
                return null != z.focus[0];
              },
            }
          );
        },
        [Y, X, ne, ae, te, ee, z.focus, $]
      );
    React.useImperativeHandle(
      o,
      function () {
        return oe;
      },
      [oe]
    );
    var ie = React.useCallback(
        function (t, n) {
          ne.emit({
            type: '__unsafe_action__',
            data: {
              action: t,
              noop: n,
              stack: se.current,
            },
          });
        },
        [ne]
      ),
      le = React.useRef(),
      ce = React.useCallback(
        function (t) {
          if (le.current !== t) {
            le.current = t;
            ne.emit({
              type: 'options',
              data: {
                options: t,
              },
            });
          }
        },
        [ne]
      ),
      se = React.useRef(),
      fe = React.useMemo(
        function () {
          return {
            addListener: F,
            addKeyedListener: V,
            onDispatchAction: ie,
            onOptionsChange: ce,
            stackRef: se,
          };
        },
        [F, V, ie, ce]
      ),
      de = React.useMemo(
        function () {
          return {
            scheduleUpdate: U,
            flushUpdates: x,
          };
        },
        [U, x]
      ),
      pe = React.useRef(true),
      ve = React.useCallback(function () {
        return pe.current;
      }, []),
      ye = React.useMemo(
        function () {
          return {
            state: G,
            getState: K,
            setState: T,
            getKey: Z,
            setKey: H,
            getIsInitial: ve,
            addOptionsGetter: ue,
          };
        },
        [G, K, T, Z, H, ve, ue]
      ),
      me = React.useRef(I),
      he = React.useRef(G);
    React.useEffect(function () {
      pe.current = false;
      me.current = I;
      he.current = G;
    });
    React.useEffect(
      function () {
        var t = ee();
        ne.emit({
          type: 'state',
          data: {
            state: G,
          },
        });
        if (!W.current && me.current) me.current(t);
        W.current = false;
      },
      [ee, ne, G]
    );
    var ke = React.useCallback(function (t) {}, []),
      ge = React.createElement(
        module440.default.Provider,
        {
          value: oe,
        },
        React.createElement(
          module449.ScheduleUpdateContext.Provider,
          {
            value: de,
          },
          React.createElement(
            module439.default.Provider,
            {
              value: fe,
            },
            React.createElement(
              module443.default.Provider,
              {
                value: ye,
              },
              React.createElement(
                module444.default.Provider,
                {
                  value: null != N ? N : ke,
                },
                React.createElement(module437.default, null, A)
              )
            )
          )
        )
      );
    if (j)
      ge = React.createElement(
        module442.default.Provider,
        {
          value: undefined,
        },
        React.createElement(
          module441.default.Provider,
          {
            value: undefined,
          },
          ge
        )
      );
    return ge;
  });

exports.default = N;
