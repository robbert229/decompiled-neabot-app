var module12 = require('./12'),
  module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = y(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, f, l);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  module1504 = require('./1504'),
  module1505 = require('./1505'),
  module1518 = require('./1518'),
  module1501 = require('./1501'),
  module1520 = require('./1520');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (y = function (t) {
    return t ? u : n;
  })(t);
}

var b = function (t) {
  var y = module11.default({}, t),
    b = (!y.theme && (null == ReactNative.Appearance ? undefined : ReactNative.Appearance.getColorScheme())) || 'light',
    O = React.useState(false),
    A = module12.default(O, 2),
    P = A[0],
    j = A[1],
    E = React.useState(b),
    M = module12.default(E, 2),
    _ = M[0],
    w = M[1],
    C = function (t) {
      var n = t.colorScheme;
      w(n);
    };

  React.useEffect(
    function () {
      if (!y.theme) ReactNative.AccessibilityInfo.addEventListener('reduceMotionChanged', j);
      return function () {
        if (!y.theme) ReactNative.AccessibilityInfo.removeEventListener('reduceMotionChanged', j);
      };
    },
    [y.theme]
  );
  React.useEffect(
    function () {
      if (!(y.theme || null == ReactNative.Appearance)) ReactNative.Appearance.addChangeListener(C);
      return function () {
        if (!(y.theme || null == ReactNative.Appearance)) ReactNative.Appearance.removeChangeListener(C);
      };
    },
    [y.theme]
  );
  var k = y.children,
    L = y.settings;
  return (
    <module1518.default>
      <module1504.Provider
        value={
          L || {
            icon: module1505.default,
          }
        }
      >
        <module1495.ThemeProvider
          theme={(function () {
            var t = y.theme;
            if (t) return t;
            var n = 'dark' === _ ? module1520.default : module1501.default;
            return module11.default({}, n, {
              animation: module11.default({}, n.animation, {
                scale: P ? 0 : 1,
              }),
            });
          })()}
        >
          {k}
        </module1495.ThemeProvider>
      </module1504.Provider>
    </module1518.default>
  );
};

exports.default = b;
