var module20 = require("./20"),
    React = function (t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || "object" != typeof t && "function" != typeof t) return {
    default: t
  };
  var o = c(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var p in t) if ("default" !== p && Object.prototype.hasOwnProperty.call(t, p)) {
    var f = u ? Object.getOwnPropertyDescriptor(t, p) : null;
    if (f && (f.get || f.set)) Object.defineProperty(l, p, f);else l[p] = t[p];
  }

  l.default = t;
  if (o) o.set(t, l);
  return l;
}(require("react")),
    ReactNative = require("react-native"),
    module1589 = require("./1589"),
    module1495 = require("./1495");

function c(t) {
  if ("function" != typeof WeakMap) return null;
  var n = new WeakMap(),
      o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

var f = function (t) {
  var c = t.parentState,
      f = t.labelProps,
      b = f.placeholderStyle,
      y = f.baseLabelTranslateX,
      v = f.topPosition,
      O = f.hasActiveOutline,
      k = f.label,
      w = f.backgroundColor,
      h = t.labelStyle,
      P = O || c.value,
      j = c.labeled.interpolate({
    inputRange: [0, 1],
    outputRange: [P ? 1 : 0, 0]
  }),
      S = module1495.useTheme().roundness,
      M = {
    transform: [{
      translateX: c.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [-y, 0]
      })
    }]
  };
  return k ? [{React.createElement(ReactNative.Animated.View, {
    key: "labelBackground-view",
    pointerEvents: "none",
    style: [ReactNative.StyleSheet.absoluteFill, s.view, {
      backgroundColor: w,
      opacity: j,
      bottom: S ** 2
    }, M]
  })}, React.createElement(module1589.default, {
    key: "labelBackground-text",
    style: [b, h, s.outlinedLabel, {
      top: v + 1,
      backgroundColor: w,
      opacity: j,
      transform: [].concat(module20.default(h.transform), [{
        scaleY: c.labeled.interpolate({
          inputRange: [0, 1],
          outputRange: [.2, 1]
        })
      }])
    }],
    numberOfLines: 1
  }, k)] : null;
};

exports.default = f;
var s = ReactNative.StyleSheet.create({
  view: {
    position: 'absolute',
    top: 6,
    left: 10,
    width: 8
  },
  outlinedLabel: {
    position: 'absolute',
    left: 18,
    paddingHorizontal: 0,
    color: 'transparent'
  }
});