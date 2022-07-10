var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(l, f, p);
        else l[f] = t[f];
      }

    l.default = t;
    if (u) u.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

var u = React.createContext(null);
exports.RadioButtonContext = u;

var l = function (o) {
  var l = o.value,
    c = o.onValueChange,
    f = o.children;
  return (
    <u.Provider
      value={{
        value: l,
        onValueChange: c,
      }}
    >
      <ReactNative.View accessible accessibilityRole="radiogroup">
        {f}
      </ReactNative.View>
    </u.Provider>
  );
};

exports.RadioButtonGroup = l;
l.displayName = 'RadioButton.Group';
var c = l;
exports.default = c;
