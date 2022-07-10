exports.MenuItem = p;

var module564 = require('./564'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = b(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, s, u);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1525 = require('./1525'),
  module1532 = require('./1532'),
  module1529 = require('./1529'),
  module1494 = require('./1494'),
  module1495 = require('./1495');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (b = function (t) {
    return t ? l : n;
  })(t);
}

function p(t) {
  var b = t.icon,
    p = t.title,
    w = t.disabled,
    v = t.onPress,
    O = t.style,
    W = t.contentStyle,
    j = t.testID,
    E = t.titleStyle,
    P = t.accessibilityLabel,
    x = module1495.useTheme(),
    M = module564
      .default(x.dark ? module1494.white : module1494.black)
      .alpha(0.32)
      .rgb()
      .string(),
    I = w ? M : module564.default(x.colors.text).alpha(0.87).rgb().string(),
    S = w ? M : module564.default(x.colors.text).alpha(0.54).rgb().string();
  return (
    <module1532.default
      style={[h.container, O]}
      onPress={v}
      disabled={w}
      testID={j}
      accessibilityLabel={P}
      accessibilityRole="menuitem"
      accessibilityState={{
        disabled: w,
      }}
    >
      <ReactNative.View style={h.row}>
        {b ? (
          <ReactNative.View style={[h.item, h.icon]} pointerEvents="box-none">
            <module1525.default source={b} size={24} color={S} />
          </ReactNative.View>
        ) : null}
        <ReactNative.View style={[h.item, h.content, b ? h.widthWithIcon : null, W]} pointerEvents="none">
          <module1529.default
            selectable={false}
            numberOfLines={1}
            style={[
              h.title,
              {
                color: I,
              },
              E,
            ]}
          >
            {p}
          </module1529.default>
        </ReactNative.View>
      </ReactNative.View>
    </module1532.default>
  );
}

p.displayName = 'Menu.Item';
var h = ReactNative.StyleSheet.create({
    container: {
      paddingHorizontal: 8,
      minWidth: 112,
      maxWidth: 280,
      height: 48,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    icon: {
      width: 40,
    },
    title: {
      fontSize: 16,
    },
    item: {
      marginHorizontal: 8,
    },
    content: {
      justifyContent: 'center',
      minWidth: 96,
      maxWidth: 264,
    },
    widthWithIcon: {
      maxWidth: 192,
    },
  }),
  w = p;
exports.default = w;
