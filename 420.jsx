var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, c, l);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  module513 = require('./513'),
  s = ['initialRouteName', 'children', 'screenOptions'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var v = module421.createNavigatorFactory(function (t) {
  var p = t.initialRouteName,
    v = t.children,
    O = t.screenOptions,
    y = module52.default(t, s),
    P = {
      gestureEnabled: 'ios' === ReactNative.Platform.OS,
      animationEnabled: 'web' !== ReactNative.Platform.OS && 'windows' !== ReactNative.Platform.OS && 'macos' !== ReactNative.Platform.OS,
    },
    b = module421.useNavigationBuilder(module421.StackRouter, {
      initialRouteName: p,
      children: v,
      screenOptions:
        'function' == typeof O
          ? function () {
              return module11.default({}, P, O.apply(undefined, arguments));
            }
          : module11.default({}, P, O),
    }),
    w = b.state,
    j = b.descriptors,
    k = b.navigation;
  React.useEffect(
    function () {
      return null == k.addListener
        ? undefined
        : k.addListener('tabPress', function (t) {
            var o = k.isFocused();
            requestAnimationFrame(function () {
              if (w.index > 0 && o && !t.defaultPrevented)
                k.dispatch(
                  module11.default({}, module421.StackActions.popToTop(), {
                    target: w.key,
                  })
                );
            });
          });
    },
    [k, w.index, w.key]
  );
  return <module513.default />;
});
exports.default = v;
