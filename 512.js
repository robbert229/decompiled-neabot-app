exports.default = function (o) {
  var c = module424.useNavigation(),
    u = module424.useRoute();
  React.useEffect(
    function () {
      for (var t = c; t && 'tab' !== t.getState().type; ) t = t.getParent();

      if (t) {
        var n = t.addListener('tabPress', function (n) {
          var f = c.isFocused(),
            s = c === t || c.getState().routes[0].key === u.key;
          requestAnimationFrame(function () {
            var t = l(o);
            if (f && s && t && !n.defaultPrevented)
              'scrollToTop' in t
                ? t.scrollToTop()
                : 'scrollTo' in t
                ? t.scrollTo({
                    y: 0,
                    animated: true,
                  })
                : 'scrollToOffset' in t
                ? t.scrollToOffset({
                    offset: 0,
                    animated: true,
                  })
                : 'scrollResponderScrollTo' in t &&
                  t.scrollResponderScrollTo({
                    y: 0,
                    animated: true,
                  });
          });
        });
        return n;
      }
    },
    [c, o, u.key]
  );
};

var module424 = require('./424'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = o(n);
    if (l && l.has(t)) return l.get(t);
    var c = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(c, f, s);
        else c[f] = t[f];
      }

    c.default = t;
    if (l) l.set(t, c);
    return c;
  })(require('react'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (o = function (t) {
    return t ? l : n;
  })(t);
}

function l(t) {
  return null == t.current
    ? null
    : 'scrollToTop' in t.current || 'scrollTo' in t.current || 'scrollToOffset' in t.current || 'scrollResponderScrollTo' in t.current
    ? t.current
    : 'getScrollResponder' in t.current
    ? t.current.getScrollResponder()
    : 'getNode' in t.current
    ? t.current.getNode()
    : t.current;
}
