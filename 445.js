exports.default = function () {
  var n = React.useRef({
      action: [],
      focus: [],
    }).current,
    u = React.useCallback(
      function (t, u) {
        n[t].push(u);
        return function () {
          var f = n[t].indexOf(u);
          n[t].splice(f, 1);
        };
      },
      [n]
    );
  return {
    listeners: n,
    addListener: u,
  };
};

var React = (function (t, u) {
  if (!u && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var f = n(u);
  if (f && f.has(t)) return f.get(t);
  var o = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (p && (p.get || p.set)) Object.defineProperty(o, l, p);
      else o[l] = t[l];
    }

  o.default = t;
  if (f) f.set(t, o);
  return o;
})(require('react'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    f = new WeakMap();
  return (n = function (t) {
    return t ? f : u;
  })(t);
}
