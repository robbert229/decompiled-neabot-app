var module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var c = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(c, l, p);
        else c[l] = t[l];
      }

    c.default = t;
    if (o) o.set(t, c);
    return c;
  })(require('react'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

var c = React.createContext(null);
exports.ListAccordionGroupContext = c;

var f = function (t) {
  var u = t.expandedId,
    f = t.onAccordionPress,
    l = t.children,
    p = React.useState(undefined),
    s = module12.default(p, 2),
    v = s[0],
    y = s[1];
  return (
    <c.Provider
      value={{
        expandedId: u || v,
        onAccordionPress:
          f ||
          function (t) {
            y(function (n) {
              return n === t ? undefined : t;
            });
          },
      }}
    >
      {l}
    </c.Provider>
  );
};

f.displayName = 'List.AccordionGroup';
var l = f;
exports.default = l;
