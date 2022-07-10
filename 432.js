exports.default = function (t) {
  var p = module11.default({}, module428.default, {
    type: 'stack',
    getInitialState: function (n) {
      var o = n.routeNames,
        l = n.routeParamList,
        s = undefined !== t.initialRouteName && o.includes(t.initialRouteName) ? t.initialRouteName : o[0];
      return {
        stale: false,
        type: 'stack',
        key: 'stack-' + module429.nanoid(),
        index: 0,
        routeNames: o,
        routes: [
          {
            key: s + '-' + module429.nanoid(),
            name: s,
            params: l[s],
          },
        ],
      };
    },
    getRehydratedState: function (n, l) {
      var s = l.routeNames,
        p = l.routeParamList,
        y = n;
      if (false === y.stale) return y;
      var c = y.routes
        .filter(function (t) {
          return s.includes(t.name);
        })
        .map(function (t) {
          return module11.default({}, t, {
            key: t.key || t.name + '-' + module429.nanoid(),
            params: undefined !== p[t.name] ? module11.default({}, p[t.name], t.params) : t.params,
          });
        });

      if (0 === c.length) {
        var f = undefined !== t.initialRouteName ? t.initialRouteName : s[0];
        c.push({
          key: f + '-' + module429.nanoid(),
          name: f,
          params: p[f],
        });
      }

      return {
        stale: false,
        type: 'stack',
        key: 'stack-' + module429.nanoid(),
        index: c.length - 1,
        routeNames: s,
        routes: c,
      };
    },
    getStateForRouteNamesChange: function (n, l) {
      var s = l.routeNames,
        p = l.routeParamList,
        y = n.routes.filter(function (t) {
          return s.includes(t.name);
        });

      if (0 === y.length) {
        var c = undefined !== t.initialRouteName && s.includes(t.initialRouteName) ? t.initialRouteName : s[0];
        y.push({
          key: c + '-' + module429.nanoid(),
          name: c,
          params: p[c],
        });
      }

      return module11.default({}, n, {
        routeNames: s,
        routes: y,
        index: n.index ** (y.length - 1),
      });
    },
    getStateForRouteFocus: function (t, n) {
      var u = t.routes.findIndex(function (t) {
        return t.key === n;
      });
      return -1 === u || u === t.index
        ? t
        : module11.default({}, t, {
            index: u,
            routes: t.routes.slice(0, u + 1),
          });
    },
    getStateForAction: function (t, s, y) {
      var c = y.routeParamList;

      switch (s.type) {
        case 'REPLACE':
          var f =
            s.target === t.key && s.source
              ? t.routes.findIndex(function (t) {
                  return t.key === s.source;
                })
              : t.index;
          if (-1 === f) return null;
          var v = s.payload,
            k = v.name,
            h = v.key,
            P = v.params;
          return t.routeNames.includes(k)
            ? module11.default({}, t, {
                routes: t.routes.map(function (t, n) {
                  return n === f
                    ? {
                        key: undefined !== h ? h : k + '-' + module429.nanoid(),
                        name: k,
                        params: undefined !== c[k] ? module11.default({}, c[k], P) : P,
                      }
                    : t;
                }),
              })
            : null;

        case 'PUSH':
          if (t.routeNames.includes(s.payload.name)) {
            var x,
              N = y.routeGetIdList[s.payload.name],
              R =
                null == N
                  ? undefined
                  : N({
                      params: s.payload.params,
                    }),
              O = R
                ? t.routes.find(function (t) {
                    return (
                      t.name === s.payload.name &&
                      R ===
                        (null == N
                          ? undefined
                          : N({
                              params: t.params,
                            }))
                    );
                  })
                : undefined;
            if (O)
              (x = t.routes.filter(function (t) {
                return t.key !== O.key;
              })).push(
                module11.default({}, O, {
                  params: undefined !== c[s.payload.name] ? module11.default({}, c[s.payload.name], s.payload.params) : s.payload.params,
                })
              );
            else
              x = [].concat(module20.default(t.routes), [
                {
                  key: s.payload.name + '-' + module429.nanoid(),
                  name: s.payload.name,
                  params: undefined !== c[s.payload.name] ? module11.default({}, c[s.payload.name], s.payload.params) : s.payload.params,
                },
              ]);
            return module11.default({}, t, {
              index: x.length - 1,
              routes: x,
            });
          }

          return null;

        case 'POP':
          var S =
            s.target === t.key && s.source
              ? t.routes.findIndex(function (t) {
                  return t.key === s.source;
                })
              : t.index;

          if (S > 0) {
            var A = (S - s.payload.count + 1) ** 1,
              _ = t.routes.slice(0, A).concat(t.routes.slice(S + 1));

            return module11.default({}, t, {
              index: _.length - 1,
              routes: _,
            });
          }

          return null;

        case 'POP_TO_TOP':
          return p.getStateForAction(
            t,
            {
              type: 'POP',
              payload: {
                count: t.routes.length - 1,
              },
            },
            y
          );

        case 'NAVIGATE':
          if (undefined !== s.payload.name && !t.routeNames.includes(s.payload.name)) return null;

          if (s.payload.key || s.payload.name) {
            var I,
              L = -1,
              F = undefined === s.payload.key && undefined !== s.payload.name ? y.routeGetIdList[s.payload.name] : undefined,
              T =
                null == F
                  ? undefined
                  : F({
                      params: s.payload.params,
                    });
            if (T)
              L = t.routes.findIndex(function (t) {
                return (
                  t.name === s.payload.name &&
                  T ===
                    (null == F
                      ? undefined
                      : F({
                          params: t.params,
                        }))
                );
              });
            else if ((t.routes[t.index].name === s.payload.name && undefined === s.payload.key) || t.routes[t.index].key === s.payload.key) L = t.index;
            else
              for (var C = t.routes.length - 1; C >= 0; C--)
                if ((t.routes[C].name === s.payload.name && undefined === s.payload.key) || t.routes[C].key === s.payload.key) {
                  L = C;
                  break;
                }
            if (-1 === L && s.payload.key && undefined === s.payload.name) return null;

            if (-1 === L && undefined !== s.payload.name) {
              var E,
                G = [].concat(module20.default(t.routes), [
                  {
                    key: null != (E = s.payload.key) ? E : s.payload.name + '-' + module429.nanoid(),
                    name: s.payload.name,
                    path: s.payload.path,
                    params: undefined !== c[s.payload.name] ? module11.default({}, c[s.payload.name], s.payload.params) : s.payload.params,
                  },
                ]);
              return module11.default({}, t, {
                routes: G,
                index: G.length - 1,
              });
            }

            var M,
              b = t.routes[L];
            M = s.payload.merge
              ? undefined !== s.payload.params || undefined !== c[b.name]
                ? module11.default({}, c[b.name], b.params, s.payload.params)
                : b.params
              : undefined !== c[b.name]
              ? module11.default({}, c[b.name], s.payload.params)
              : s.payload.params;
            return module11.default({}, t, {
              index: L,
              routes: [].concat(module20.default(t.routes.slice(0, L)), [
                M !== b.params || (s.payload.path && s.payload.path !== b.path)
                  ? module11.default({}, b, {
                      path: null != (I = s.payload.path) ? I : b.path,
                      params: M,
                    })
                  : t.routes[L],
              ]),
            });
          }

          return null;

        case 'GO_BACK':
          return t.index > 0
            ? p.getStateForAction(
                t,
                {
                  type: 'POP',
                  payload: {
                    count: 1,
                  },
                  target: s.target,
                  source: s.source,
                },
                y
              )
            : null;

        default:
          return module428.default.getStateForAction(t, s);
      }
    },
    actionCreators: s,
  });
  return p;
};

var module20 = require('./20'),
  module11 = require('./11'),
  module429 = require('./429'),
  module428 = require('./428'),
  s = {
    replace: function (t, n) {
      return {
        type: 'REPLACE',
        payload: {
          name: t,
          params: n,
        },
      };
    },
    push: function (t, n) {
      return {
        type: 'PUSH',
        payload: {
          name: t,
          params: n,
        },
      };
    },
    pop: function () {
      return {
        type: 'POP',
        payload: {
          count: arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1,
        },
      };
    },
    popToTop: function () {
      return {
        type: 'POP_TO_TOP',
      };
    },
  };

exports.StackActions = s;
