exports.default = function (n, f) {
  var l = f.independent,
    v = f.enabled,
    h = undefined === v || v,
    p = f.prefixes,
    k = f.filter,
    y = f.config,
    b = f.getInitialURL,
    w =
      undefined === b
        ? function () {
            return Promise.race([
              ReactNative.Linking.getInitialURL(),
              new Promise(function (n) {
                return setTimeout(n, 150);
              }),
            ]);
          }
        : b,
    P = f.subscribe,
    R =
      undefined === P
        ? function (n) {
            var t = function (t) {
                var o = t.url;
                return n(o);
              },
              o = ReactNative.Linking.addEventListener('url', t);

            return function () {
              if (null != o && o.remove) o.remove();
              else ReactNative.Linking.removeEventListener('url', t);
            };
          }
        : P,
    L = f.getStateFromPath,
    O = undefined === L ? module424.getStateFromPath : L,
    j = f.getActionFromState,
    M = undefined === j ? module424.getActionFromState : j;
  React.useEffect(function () {
    if (!l) {
      if (false !== h && s)
        throw new Error(
          [
            'Looks like you have configured linking in multiple places. This is likely an error since deep links should only be handled in one place to avoid conflicts. Make sure that:',
            "- You are not using both 'linking' prop and 'useLinking'",
            "- You don't have 'useLinking' in multiple components",
            'android' === ReactNative.Platform.OS
              ? "- You have set 'android:launchMode=singleTask' in the '<activity />' section of the 'AndroidManifest.xml' file to avoid launching multiple instances"
              : '',
          ]
            .join('\n')
            .trim()
        );
      s = false !== h;
      return function () {
        s = false;
      };
    }
  });

  var S = React.useRef(h),
    E = React.useRef(p),
    _ = React.useRef(k),
    T = React.useRef(y),
    A = React.useRef(w),
    F = React.useRef(O),
    I = React.useRef(M);

  React.useEffect(function () {
    S.current = h;
    E.current = p;
    _.current = k;
    T.current = y;
    A.current = w;
    F.current = O;
    I.current = M;
  });
  var U = React.useCallback(function (n) {
      if (n && (!_.current || _.current(n))) {
        var t = module503.default(E.current, n);
        return t ? F.current(t, T.current) : undefined;
      }
    }, []),
    W = React.useCallback(
      function () {
        var n;

        if (S.current) {
          var t = A.current();
          if (null != t && 'string' != typeof t)
            return t.then(function (n) {
              var t = U(n);
              return t;
            });
          n = U(t);
        }

        var o = {
          then: function (t) {
            return Promise.resolve(t ? t(n) : n);
          },
          catch: function () {
            return o;
          },
        };
        return o;
      },
      [U]
    );
  React.useEffect(
    function () {
      return R(function (t) {
        if (h) {
          var o = n.current,
            u = o ? U(t) : undefined;

          if (o && u) {
            var c = o.getRootState();
            if (
              u.routes.some(function (n) {
                return !(null != c && c.routeNames.includes(n.name));
              })
            )
              return void console.warn(
                "The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration."
              );
            var f = I.current(u, T.current);
            if (undefined !== f)
              try {
                o.dispatch(f);
              } catch (n) {
                console.warn("An error occurred when trying to handle the link '" + t + "': " + n.message);
              }
            else o.resetRoot(u);
          }
        }
      });
    },
    [h, U, n, R]
  );
  return {
    getInitialState: W,
  };
};

var module424 = require('./424'),
  React = (function (n, t) {
    if (!t && n && n.__esModule) return n;
    if (null === n || ('object' != typeof n && 'function' != typeof n))
      return {
        default: n,
      };
    var o = f(t);
    if (o && o.has(n)) return o.get(n);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in n)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(n, s)) {
        var l = c ? Object.getOwnPropertyDescriptor(n, s) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, s, l);
        else u[s] = n[s];
      }

    u.default = n;
    if (o) o.set(n, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module503 = require('./503');

function f(n) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    o = new WeakMap();
  return (f = function (n) {
    return n ? o : t;
  })(n);
}

var s = false;
