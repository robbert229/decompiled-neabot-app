var React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = f(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(l, c, p);
        else l[c] = t[c];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1622 = require('./1622'),
  module1621 = require('./1621');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (f = function (t) {
    return t ? n : o;
  })(t);
}

var c = function (t) {
  var f = t.value,
    c = t.onValueChange,
    s = t.children,
    y = t.style,
    b = React.Children.count(s);
  return (
    <module1622.default value={f} onValueChange={c}>
      <ReactNative.View style={[p.row, y]}>
        <s />
      </ReactNative.View>
    </module1622.default>
  );
};

exports.ToggleButtonRow = c;
c.displayName = 'ToggleButton.Row';
var p = ReactNative.StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    button: {
      borderWidth: ReactNative.StyleSheet.hairlineWidth,
    },
    first: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    middle: {
      borderRadius: 0,
      borderLeftWidth: 0,
    },
    last: {
      borderLeftWidth: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }),
  s = c;
exports.default = s;
