exports.default = function (t) {
  var s = t.isVisible,
    y = t.children,
    v = t.style,
    b = module52.default(t, u);
  if (null != module548.screensEnabled && module548.screensEnabled() && 'web' !== ReactNative.Platform.OS)
    return module548.shouldUseActivityState ? <module548.Screen>{y}</module548.Screen> : <module548.Screen>{y}</module548.Screen>;
  if ('web' === ReactNative.Platform.OS) return <ReactNative.View>{y}</ReactNative.View>;
  return (
    <ReactNative.View style={[p.container, v]} pointerEvents={s ? 'auto' : 'none'}>
      <ReactNative.View collapsable={false} removeClippedSubviews={'ios' !== ReactNative.Platform.OS || !s} pointerEvents={s ? 'auto' : 'none'} style={s ? p.attached : p.detached}>
        {y}
      </ReactNative.View>
    </ReactNative.View>
  );
};

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = s(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, f, u);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module548 = require('./548'),
  u = ['isVisible', 'children', 'style'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (s = function (t) {
    return t ? l : n;
  })(t);
}

var p = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  attached: {
    flex: 1,
  },
  detached: {
    flex: 1,
    top: 3e4,
  },
});
