var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module564 = require('./564'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = v(n);
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
  module1529 = require('./1529'),
  module1525 = require('./1525'),
  module1532 = require('./1532'),
  module1495 = require('./1495'),
  p = ['icon', 'label', 'active', 'theme', 'style', 'onPress', 'accessibilityLabel', 'right'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (v = function (t) {
    return t ? l : n;
  })(t);
}

var w = function (t) {
  var y = t.icon,
    v = t.label,
    w = t.active,
    O = t.theme,
    P = t.style,
    j = t.onPress,
    E = t.accessibilityLabel,
    _ = t.right,
    D = module52.default(t, p),
    L = O.colors,
    M = O.roundness,
    k = w ? module564.default(L.primary).alpha(0.12).rgb().string() : 'transparent',
    x = w ? L.primary : module564.default(L.text).alpha(0.68).rgb().string(),
    I = O.fonts.medium,
    R = y ? 32 : 0;
  return (
    <ReactNative.View>
      <module1532.default
        borderless
        delayPressIn={0}
        onPress={j}
        style={{
          borderRadius: M,
        }}
        accessibilityTraits={w ? ['button', 'selected'] : 'button'}
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityState={{
          selected: w,
        }}
        accessibilityLabel={E}
      >
        <ReactNative.View style={h.wrapper}>
          <ReactNative.View style={h.content}>
            {y ? <module1525.default source={y} size={24} color={x} /> : null}
            <module1529.default
              selectable={false}
              numberOfLines={1}
              style={[
                h.label,
                module11.default(
                  {
                    color: x,
                  },
                  I,
                  {
                    marginLeft: R,
                  }
                ),
              ]}
            >
              {v}
            </module1529.default>
          </ReactNative.View>
          {null == _
            ? undefined
            : _({
                color: x,
              })}
        </ReactNative.View>
      </module1532.default>
    </ReactNative.View>
  );
};

w.displayName = 'Drawer.Item';
var h = ReactNative.StyleSheet.create({
    container: {
      marginHorizontal: 10,
      marginVertical: 4,
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      marginRight: 32,
    },
  }),
  O = module1495.withTheme(w);
exports.default = O;
