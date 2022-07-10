exports.default = function (n, t) {
  var o,
    s,
    v = t ? u(t) : {},
    c = null != n.index ? n.routes.slice(0, n.index + 1) : n.routes;
  if (0 === c.length) return;
  if (
    !(
      (1 === c.length && undefined === c[0].key) ||
      (2 === c.length && undefined === c[0].key && c[0].name === (null == v ? undefined : v.initialRouteName) && undefined === c[1].key)
    )
  )
    return {
      type: 'RESET',
      payload: n,
    };
  var f = n.routes[null != (o = n.index) ? o : n.routes.length - 1],
    p = null == f ? undefined : f.state,
    h = null == v ? undefined : null == (s = v.screens) ? undefined : s[null == f ? undefined : f.name],
    y = module11.default({}, f.params),
    k = f
      ? {
          name: f.name,
          path: f.path,
          params: y,
        }
      : undefined;

  for (; p; ) {
    var x, N, R;
    if (0 === p.routes.length) return;
    var b = null != p.index ? p.routes.slice(0, p.index + 1) : p.routes,
      _ = b[b.length - 1];

    if (
      (module11.default(y, {
        initial: undefined,
        screen: undefined,
        params: undefined,
        state: undefined,
      }),
      1 === b.length && undefined === b[0].key)
    ) {
      y.initial = true;
      y.screen = _.name;
    } else {
      if (2 !== b.length || undefined !== b[0].key || b[0].name !== (null == (x = h) ? undefined : x.initialRouteName) || undefined !== b[1].key) {
        y.state = p;
        break;
      }

      y.initial = false;
      y.screen = _.name;
    }

    if (_.state) {
      y.params = module11.default({}, _.params);
      y = y.params;
    } else {
      y.path = _.path;
      y.params = _.params;
    }

    p = _.state;
    h = null == (N = h) ? undefined : null == (R = N.screens) ? undefined : R[_.name];
  }

  if (!k) return;
  return {
    type: 'NAVIGATE',
    payload: k,
  };
};

var module12 = require('./12'),
  module11 = require('./11');

var u = function (n) {
    return 'object' == typeof n && null != n
      ? {
          initialRouteName: n.initialRouteName,
          screens: null != n.screens ? o(n.screens) : undefined,
        }
      : {};
  },
  o = function (n) {
    return Object.entries(n).reduce(function (n, l) {
      var o = module12.default(l, 2),
        s = o[0],
        v = o[1];
      n[s] = u(v);
      return n;
    }, {});
  };
