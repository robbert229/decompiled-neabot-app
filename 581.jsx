var module11 = require('./11'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = p(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  module421 = require('./421'),
  module550 = require('./550'),
  module582 = require('./582'),
  module583 = require('./583');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (p = function (t) {
    return t ? n : o;
  })(t);
}

var s = React.memo(function (t) {
  var p,
    s = t.scene,
    v = t.previous,
    y = t.layout,
    h = t.insets,
    k = t.navigation,
    T = t.styleInterpolator,
    b = s.descriptor.options,
    O = 'function' != typeof b.headerTitle && undefined !== b.headerTitle ? b.headerTitle : undefined !== b.title ? b.title : s.route.name;
  if (undefined !== b.headerBackTitle) p = b.headerBackTitle;
  else if (v) {
    var j = v.descriptor.options;
    p = 'function' != typeof j.headerTitle && undefined !== j.headerTitle ? j.headerTitle : undefined !== j.title ? j.title : v.route.name;
  }
  var P = React.useCallback(
    module583.default(function () {
      if (k.isFocused() && k.canGoBack())
        k.dispatch(
          module11.default({}, module421.StackActions.pop(), {
            source: s.route.key,
          })
        );
    }, 50),
    [k, s.route.key]
  );
  return <module550.default />;
});
exports.default = s;
