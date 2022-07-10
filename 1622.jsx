var React = (function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = n(o);
  if (u && u.has(t)) return u.get(t);
  var l = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var p in t)
    if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
      var c = f ? Object.getOwnPropertyDescriptor(t, p) : null;
      if (c && (c.get || c.set)) Object.defineProperty(l, p, c);
      else l[p] = t[p];
    }

  l.default = t;
  if (u) u.set(t, l);
  return l;
})(require('react'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

var o = React.createContext(null);
exports.ToggleButtonGroupContext = o;

var u = function (n) {
  var u = n.value,
    l = n.onValueChange,
    f = n.children;
  return (
    <o.Provider
      value={{
        value: u,
        onValueChange: l,
      }}
    >
      {f}
    </o.Provider>
  );
};

exports.ToggleButtonGroup = u;
u.displayName = 'ToggleButton.Group';
var l = u;
exports.default = l;
