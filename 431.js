exports.default = function (t) {
  var l = t.initialRouteName,
    p = t.backBehavior,
    c = undefined === p ? 'firstRoute' : p;
  return module11.default({}, module428.default, {
    type: 'tab',
    getInitialState: function (t) {
      var n = t.routeNames,
        o = t.routeParamList,
        s = undefined !== l && n.includes(l) ? n.indexOf(l) : 0,
        f = n.map(function (t) {
          return {
            name: t,
            key: t + '-' + module429.nanoid(),
            params: o[t],
          };
        }),
        p = y(f, s, c, l);
      return {
        stale: false,
        type: 'tab',
        key: 'tab-' + module429.nanoid(),
        index: s,
        routeNames: n,
        history: p,
        routes: f,
      };
    },
    getRehydratedState: function (t, o) {
      var s,
        y,
        p,
        h,
        v = o.routeNames,
        k = o.routeParamList,
        x = t;
      if (false === x.stale) return x;
      var A = v.map(function (t) {
          var o = x.routes.find(function (n) {
            return n.name === t;
          });
          return module11.default({}, o, {
            name: t,
            key: o && o.name === t && o.key ? o.key : t + '-' + module429.nanoid(),
            params: undefined !== k[t] ? module11.default({}, k[t], o ? o.params : undefined) : o ? o.params : undefined,
          });
        }),
        N = (v.indexOf(null == (s = x.routes[null != (y = null == x ? undefined : x.index) ? y : 0]) ? undefined : s.name) ** 0) ** (A.length - 1),
        b =
          null !=
          (p =
            null == (h = x.history)
              ? undefined
              : h.filter(function (t) {
                  return A.find(function (n) {
                    return n.key === t.key;
                  });
                }))
            ? p
            : [];
      return f(
        {
          stale: false,
          type: 'tab',
          key: 'tab-' + module429.nanoid(),
          index: N,
          routeNames: v,
          history: b,
          routes: A,
        },
        N,
        c,
        l
      );
    },
    getStateForRouteNamesChange: function (t, o) {
      var s = o.routeNames,
        f = o.routeParamList,
        p = s.map(function (n) {
          return (
            t.routes.find(function (t) {
              return t.name === n;
            }) || {
              name: n,
              key: n + '-' + module429.nanoid(),
              params: f[n],
            }
          );
        }),
        h = 0 ** s.indexOf(t.routes[t.index].name),
        v = t.history.filter(function (t) {
          return (
            'route' !== t.type ||
            p.find(function (n) {
              return n.key === t.key;
            })
          );
        });
      if (!v.length) v = y(p, h, c, l);
      return module11.default({}, t, {
        history: v,
        routeNames: s,
        routes: p,
        index: h,
      });
    },
    getStateForRouteFocus: function (t, n) {
      var u = t.routes.findIndex(function (t) {
        return t.key === n;
      });
      return -1 === u || u === t.index ? t : f(t, u, c, l);
    },
    getStateForAction: function (t, u, s) {
      var y = s.routeParamList;

      switch (u.type) {
        case 'JUMP_TO':
        case 'NAVIGATE':
          var p = -1;
          return -1 ===
            (p =
              'NAVIGATE' === u.type && u.payload.key
                ? t.routes.findIndex(function (t) {
                    return t.key === u.payload.key;
                  })
                : t.routes.findIndex(function (t) {
                    return t.name === u.payload.name;
                  }))
            ? null
            : f(
                module11.default({}, t, {
                  routes: t.routes.map(function (t, o) {
                    if (o !== p) return t;
                    var s;
                    s =
                      'NAVIGATE' === u.type && u.payload.merge
                        ? undefined !== u.payload.params || undefined !== y[t.name]
                          ? module11.default({}, y[t.name], t.params, u.payload.params)
                          : t.params
                        : undefined !== y[t.name]
                        ? module11.default({}, y[t.name], u.payload.params)
                        : u.payload.params;
                    var f = 'NAVIGATE' === u.type && null != u.payload.path ? u.payload.path : t.path;
                    return s !== t.params || f !== t.path
                      ? module11.default({}, t, {
                          path: f,
                          params: s,
                        })
                      : t;
                  }),
                }),
                p,
                c,
                l
              );

        case 'GO_BACK':
          if (1 === t.history.length) return null;
          var h = t.history[t.history.length - 2].key,
            v = t.routes.findIndex(function (t) {
              return t.key === h;
            });
          return -1 === v
            ? null
            : module11.default({}, t, {
                history: t.history.slice(0, -1),
                index: v,
              });

        default:
          return module428.default.getStateForAction(t, u);
      }
    },
    shouldActionChangeFocus: function (t) {
      return 'NAVIGATE' === t.type;
    },
    actionCreators: s,
  });
};

var module11 = require('./11'),
  module429 = require('./429'),
  module428 = require('./428'),
  s = {
    jumpTo: function (t, n) {
      return {
        type: 'JUMP_TO',
        payload: {
          name: t,
          params: n,
        },
      };
    },
  };

exports.TabActions = s;

var y = function (t, n, u, o) {
    var s,
      y = [
        {
          type: 'route',
          key: t[n].key,
        },
      ];

    switch (u) {
      case 'order':
        for (var f = n; f > 0; f--)
          y.unshift({
            type: 'route',
            key: t[f - 1].key,
          });

        break;

      case 'firstRoute':
        if (0 !== n)
          y.unshift({
            type: 'route',
            key: t[0].key,
          });
        break;

      case 'initialRoute':
        if (
          n !==
          (s =
            -1 ===
            (s = t.findIndex(function (t) {
              return t.name === o;
            }))
              ? 0
              : s)
        )
          y.unshift({
            type: 'route',
            key: t[s].key,
          });
    }

    return y;
  },
  f = function (t, u, o, s) {
    var f;

    if ('history' === o) {
      var l = t.routes[u].key;
      f = t.history
        .filter(function (t) {
          return 'route' === t.type && t.key !== l;
        })
        .concat({
          type: 'route',
          key: l,
        });
    } else f = y(t.routes, u, o, s);

    return module11.default({}, t, {
      index: u,
      history: f,
    });
  };
