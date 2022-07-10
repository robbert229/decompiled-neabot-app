exports.default = function (t) {
  var u = module471.default();

  if (undefined !== arguments[1]) {
    console.error(
      "You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect"
    );
  }

  React.useEffect(
    function () {
      var n,
        o = false,
        c = function () {
          var n = t();
          if (undefined === n || 'function' == typeof n) return n;
        };

      if (u.isFocused()) {
        n = c();
        o = true;
      }

      var f = u.addListener('focus', function () {
          if (!o) {
            if (undefined !== n) n();
            n = c();
            o = true;
          }
        }),
        s = u.addListener('blur', function () {
          if (undefined !== n) n();
          n = undefined;
          o = false;
        });
      return function () {
        if (undefined !== n) n();
        f();
        s();
      };
    },
    [t, u]
  );
};

var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var c = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (p && (p.get || p.set)) Object.defineProperty(c, s, p);
        else c[s] = t[s];
      }

    c.default = t;
    if (o) o.set(t, c);
    return c;
  })(require('react')),
  module471 = require('./471');

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}
