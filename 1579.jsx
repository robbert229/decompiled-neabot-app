var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = v(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, f, s);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1580 = require('./1580'),
  module1581 = require('./1581'),
  module1582 = require('./1582'),
  module1583 = require('./1583'),
  module1584 = require('./1584'),
  module1495 = require('./1495'),
  module1522 = require('./1522');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

var b = function (t) {
  var o = t.children,
    f = t.dismissable,
    s = undefined === f || f,
    c = t.onDismiss,
    p = t.visible,
    v = undefined !== p && p,
    b = t.style,
    h = t.theme;
  return (
    <module1580.default
      dismissable={s}
      onDismiss={c}
      visible={v}
      contentContainerStyle={[
        {
          borderRadius: h.roundness,
          backgroundColor: h.dark && 'adaptive' === h.mode ? module1522.default(24, h.colors.surface) : h.colors.surface,
        },
        O.container,
        b,
      ]}
    >
      {React.Children.toArray(o)
        .filter(function (t) {
          return null != t && 'boolean' != typeof t;
        })
        .map(function (t, o) {
          return 0 === o && React.isValidElement(t) && t.type === module1581.default
            ? React.cloneElement(t, {
                style: [
                  {
                    paddingTop: 24,
                  },
                  t.props.style,
                ],
              })
            : t;
        })}
    </module1580.default>
  );
};

b.Content = module1581.default;
b.Actions = module1582.default;
b.Title = module1583.default;
b.ScrollArea = module1584.default;
var O = ReactNative.StyleSheet.create({
    container: {
      marginVertical: 'android' === ReactNative.Platform.OS ? 44 : 0,
      marginHorizontal: 26,
      elevation: 24,
      justifyContent: 'flex-start',
    },
  }),
  h = module1495.withTheme(b);
exports.default = h;
