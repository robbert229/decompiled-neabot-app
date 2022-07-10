var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = y(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, f, s);
        else o[f] = t[f];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  module1494 = require('./1494'),
  p = ['color', 'subtitle', 'subtitleStyle', 'onPress', 'style', 'titleRef', 'titleStyle', 'theme', 'title'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (y = function (t) {
    return t ? n : l;
  })(t);
}

var h = function (t) {
  var c = t.color,
    y = undefined === c ? module1494.white : c,
    h = t.subtitle,
    v = t.subtitleStyle,
    P = t.onPress,
    S = t.style,
    w = t.titleRef,
    j = t.titleStyle,
    _ = t.theme,
    M = t.title,
    k = module52.default(t, p),
    E = _.fonts,
    T = module564.default(y).alpha(0.7).rgb().string();
  return (
    <ReactNative.TouchableWithoutFeedback onPress={P} disabled={!P}>
      <ReactNative.View>
        <module1529.default
          ref={w}
          style={[
            module11.default(
              {
                color: y,
              },
              'ios' === ReactNative.Platform.OS ? E.regular : E.medium
            ),
            O.title,
            j,
          ]}
          numberOfLines={1}
          accessible
          accessibilityTraits="header"
          accessibilityRole={'web' === ReactNative.Platform.OS ? 'heading' : 'header'}
        >
          {M}
        </module1529.default>
        {h ? (
          <module1529.default
            style={[
              O.subtitle,
              {
                color: T,
              },
              v,
            ]}
            numberOfLines={1}
          >
            {h}
          </module1529.default>
        ) : null}
      </ReactNative.View>
    </ReactNative.TouchableWithoutFeedback>
  );
};

h.displayName = 'Appbar.Content';
var O = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
    },
    title: {
      fontSize: 'ios' === ReactNative.Platform.OS ? 17 : 20,
    },
    subtitle: {
      fontSize: 'ios' === ReactNative.Platform.OS ? 11 : 14,
    },
  }),
  v = module1495.withTheme(h);
exports.default = v;
var P = module1495.withTheme(h);
exports.AppbarContent = P;
