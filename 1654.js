var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  module1493 = require('./1493'),
  c = ['label', 'color', 'style', 'mode', 'zeroMargin', 'onPress', 'loading', 'contentStyle'];

exports.default = function (o) {
  var s = o.label,
    f = o.color,
    y = o.style,
    v = o.mode,
    P = o.zeroMargin,
    _ = o.onPress,
    b = o.loading,
    p = o.contentStyle,
    M = module52.default(o, c);
  return React.default.createElement(
    module1493.Button,
    module11.default(
      {
        style: [
          {
            marginTop: P ? 0 : 20,
          },
          y,
        ],
        loading: b,
        mode: v || 'contained',
        contentStyle: module11.default(
          {
            padding: 8,
          },
          p
        ),
        color: f,
        onPress: b ? null : _,
      },
      M
    ),
    s
  );
};
