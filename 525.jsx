exports.default = function (t, u) {
  function l(o) {
    return (
      <module527.default style={[c.container, u]}>
        <t />
      </module527.default>
    );
  }

  l.displayName = 'gestureHandlerRootHOC(' + (t.displayName || t.name) + ')';
  module526.default(l, t);
  return l;
};

var React = (function (t, n) {
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
        var p = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, c, p);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module526 = require('./526'),
  module527 = require('./527');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (l = function (t) {
    return t ? u : n;
  })(t);
}

var c = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
