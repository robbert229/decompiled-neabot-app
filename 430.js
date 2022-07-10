exports.default = function (t) {
  var u = t.defaultStatus,
    l = module52.default(t, s),
    O = module431.default(l);
  return module11.default({}, O, {
    type: 'drawer',
    getInitialState: function (t) {
      var n = t.routeNames,
        c = t.routeParamList,
        s = t.routeGetIdList,
        l = O.getInitialState({
          routeNames: n,
          routeParamList: c,
          routeGetIdList: s,
        });
      if ('open' === u) l = w(l);
      return module11.default({}, l, {
        stale: false,
        type: 'drawer',
        key: 'drawer-' + module429.nanoid(),
      });
    },
    getRehydratedState: function (t, n) {
      var u = n.routeNames,
        c = n.routeParamList,
        s = n.routeGetIdList;
      if (false === t.stale) return t;
      var l = O.getRehydratedState(t, {
        routeNames: u,
        routeParamList: c,
        routeGetIdList: s,
      });
      if (y(t)) l = w(l);
      return module11.default({}, l, {
        type: 'drawer',
        key: 'drawer-' + module429.nanoid(),
      });
    },
    getStateForRouteFocus: function (t, n) {
      var o = O.getStateForRouteFocus(t, n);
      return 'open' === u ? w(o) : v(o);
    },
    getStateForAction: function (t, n, o) {
      switch (n.type) {
        case 'OPEN_DRAWER':
          return w(t);

        case 'CLOSE_DRAWER':
          return v(t);

        case 'TOGGLE_DRAWER':
          return y(t) ? v(t) : w(t);

        case 'GO_BACK':
          if ('open' === u) {
            if (!y(t)) return w(t);
          } else if (y(t)) return v(t);

          return O.getStateForAction(t, n, o);

        default:
          return O.getStateForAction(t, n, o);
      }
    },
    actionCreators: p,
  });
};

var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module20 = require('./20'),
  module11 = require('./11'),
  module429 = require('./429'),
  module431 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = l(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, c, s);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./431')),
  s = ['defaultStatus'];

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (l = function (t) {
    return t ? u : n;
  })(t);
}

var p = module11.default({}, module431.TabActions, {
  openDrawer: function () {
    return {
      type: 'OPEN_DRAWER',
    };
  },
  closeDrawer: function () {
    return {
      type: 'CLOSE_DRAWER',
    };
  },
  toggleDrawer: function () {
    return {
      type: 'TOGGLE_DRAWER',
    };
  },
});
exports.DrawerActions = p;

var y = function (t) {
    var n;
    return Boolean(
      null == (n = t.history)
        ? undefined
        : n.some(function (t) {
            return 'drawer' === t.type;
          })
    );
  },
  w = function (t) {
    return y(t)
      ? t
      : module11.default({}, t, {
          history: [].concat(module20.default(t.history), [
            {
              type: 'drawer',
              status: 'open',
            },
          ]),
        });
  },
  v = function (t) {
    return y(t)
      ? module11.default({}, t, {
          history: t.history.filter(function (t) {
            return 'drawer' !== t.type;
          }),
        })
      : t;
  };
