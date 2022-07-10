var module11 = require('./11'),
  module429 = require('./429'),
  o = {
    getStateForAction: function (t, o) {
      switch (o.type) {
        case 'SET_PARAMS':
          var s = o.source
            ? t.routes.findIndex(function (t) {
                return t.key === o.source;
              })
            : t.index;
          return -1 === s
            ? null
            : module11.default({}, t, {
                routes: t.routes.map(function (t, n) {
                  return n === s
                    ? module11.default({}, t, {
                        params: module11.default({}, t.params, o.payload.params),
                      })
                    : t;
                }),
              });

        case 'RESET':
          var l = o.payload;
          return 0 === l.routes.length ||
            l.routes.some(function (u) {
              return !t.routeNames.includes(u.name);
            })
            ? null
            : false === l.stale
            ? t.routeNames.length !== l.routeNames.length ||
              l.routeNames.some(function (u) {
                return !t.routeNames.includes(u);
              })
              ? null
              : module11.default({}, l, {
                  routes: l.routes.map(function (t) {
                    return t.key
                      ? t
                      : module11.default({}, t, {
                          key: t.name + '-' + module429.nanoid(),
                        });
                  }),
                })
            : l;

        default:
          return null;
      }
    },
    shouldActionChangeFocus: function (t) {
      return 'NAVIGATE' === t.type;
    },
  };

exports.default = o;
