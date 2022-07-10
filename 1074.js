exports.default = function (t) {
  var s = t.horizontal,
    u = t.badge,
    f = t.badgeStyle,
    y = t.activeOpacity,
    b = t.inactiveOpacity,
    p = t.activeTintColor,
    v = t.inactiveTintColor,
    h = t.renderIcon,
    z = t.style;
  return React.default.createElement(
    ReactNative.View,
    {
      style: [s ? c.iconHorizontal : c.iconVertical, z],
    },
    React.default.createElement(
      ReactNative.View,
      {
        style: [
          c.icon,
          {
            opacity: y,
          },
        ],
      },
      h({
        focused: true,
        size: 25,
        color: p,
      })
    ),
    React.default.createElement(
      ReactNative.View,
      {
        style: [
          c.icon,
          {
            opacity: b,
          },
        ],
      },
      h({
        focused: false,
        size: 25,
        color: v,
      })
    ),
    React.default.createElement(
      module1075.default,
      {
        visible: null != u,
        style: [c.badge, s ? c.badgeHorizontal : c.badgeVertical, f],
        size: 18.75,
      },
      u
    )
  );
};

var React = require('react'),
  ReactNative = require('react-native'),
  module1075 = require('./1075');

var c = ReactNative.StyleSheet.create({
  icon: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    minWidth: 25,
  },
  iconVertical: {
    flex: 1,
  },
  iconHorizontal: {
    height: '100%',
    marginTop: 3,
  },
  badge: {
    position: 'absolute',
    left: 3,
  },
  badgeVertical: {
    top: 3,
  },
  badgeHorizontal: {
    top: 7,
  },
});
