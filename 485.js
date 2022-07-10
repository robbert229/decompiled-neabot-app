exports.default = function (t) {
  var f = t.onAction,
    s = t.getState,
    p = t.emitter,
    v = t.router,
    y = React.useContext(module444.default),
    O = React.useContext(module441.default);
  return React.useMemo(
    function () {
      var t = function (t) {
          var n = 'function' == typeof t ? t(s()) : t,
            o = f(n);
          if (!(o || null == y)) y(n);
        },
        u = module11.default({}, v.actionCreators, module426.CommonActions),
        c = Object.keys(u).reduce(function (n, o) {
          n[o] = function () {
            return t(u[o].apply(u, arguments));
          };

          return n;
        }, {});

      return module11.default({}, O, c, {
        dispatch: t,
        emit: p.emit,
        isFocused: O
          ? O.isFocused
          : function () {
              return true;
            },
        canGoBack: function () {
          var t = s();
          return (
            null !==
              v.getStateForAction(t, module426.CommonActions.goBack(), {
                routeNames: t.routeNames,
                routeParamList: {},
                routeGetIdList: {},
              }) ||
            (null == O ? undefined : O.canGoBack()) ||
            false
          );
        },
        getParent: function () {
          return O;
        },
        getState: s,
      });
    },
    [p.emit, s, f, y, O, v]
  );
};

var module11 = require('./11'),
  module426 = require('./426'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, f, l);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module441 = require('./441'),
  module469 = require('./469'),
  module444 = require('./444');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

module469.PrivateValueStore;
