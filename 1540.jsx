var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module564 = require('./564'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = v(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1529 = require('./1529'),
  module1541 = require('./1541'),
  module1495 = require('./1495'),
  y = ['children', 'title', 'theme', 'style'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (v = function (t) {
    return t ? l : n;
  })(t);
}

var h = function (t) {
  var p = t.children,
    v = t.title,
    h = t.theme,
    b = t.style,
    w = module52.default(t, y),
    j = h.colors,
    P = h.fonts,
    _ = module564.default(j.text).alpha(0.54).rgb().string(),
    M = P.medium;

  return (
    <ReactNative.View>
      {v && (
        <ReactNative.View style={O.titleContainer}>
          <module1529.default
            numberOfLines={1}
            style={[
              module11.default(
                {
                  color: _,
                },
                M
              ),
              O.title,
            ]}
          >
            {v}
          </module1529.default>
        </ReactNative.View>
      )}
      {p}
      <module1541.default style={O.divider} />
    </ReactNative.View>
  );
};

h.displayName = 'Drawer.Section';
var O = ReactNative.StyleSheet.create({
    container: {
      marginBottom: 4,
    },
    titleContainer: {
      height: 40,
      justifyContent: 'center',
    },
    title: {
      marginLeft: 16,
    },
    divider: {
      marginTop: 4,
    },
  }),
  b = module1495.withTheme(h);
exports.default = b;
