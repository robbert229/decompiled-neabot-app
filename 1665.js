var regeneratorRuntime = require('regenerator-runtime'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, c, f);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module810 = require('./810'),
  module808 = require('./808'),
  module608 = require('./608');

require('./1666');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

var p = React.default.createContext();

exports.useAppContext = function () {
  return React.useContext(p);
};

exports.AppContextProvider = function (t) {
  var s = module608.useStoreActions(function (t) {
      return {
        loginUser: t.login.loginUser,
        setState: t.login.changeAppState,
        checkLogin: t.login.checkLogin,
      };
    }),
    v = s.loginUser,
    P = s.setState,
    y = s.checkLogin,
    A = module608.useStoreState(function (t) {
      return t.login.appstate;
    }),
    C = React.useCallback(
      function () {
        return regeneratorRuntime.default.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (module808.resetLoginCredentials()) P(module810.APP_STATE.PUBLIC);

                case 2:
                case 'end':
                  return t.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
      [P]
    ),
    b = React.useCallback(
      function () {
        ReactNative.Alert.alert('Please comfirm Logout', 'Are you sure you want to logout from the app', [
          {
            text: 'Yes, Logout',
            onPress: C,
          },
          {
            type: 'cancel',
            text: 'No, Stay here',
          },
        ]);
      },
      [C]
    ),
    h = React.useCallback(
      function (t) {
        v(t);
      },
      [v]
    );
  React.useEffect(
    function () {
      if (A === module810.APP_STATE.UNKNOWN) y();
    },
    [y, A]
  );
  return React.default.createElement(
    p.Provider,
    {
      value: {
        state: A,
        logout: b,
        login: h,
      },
    },
    t.children
  );
};

var v = p;
exports.default = v;
