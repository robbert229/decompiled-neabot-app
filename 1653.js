require('./1631');

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = b(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  module1493 = require('./1493'),
  ReactNative = require('react-native'),
  module1489 = require('./1489'),
  s = ['style', 'title', 'color', 'zeroMargin', 'mode', 'onPress', 'loading', 'contentStyle', 'icon', 'label', 'borderMode', 'borderRadius'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (b = function (t) {
    return t ? n : o;
  })(t);
}

function p(t, b) {
  t.style;
  module52.default(t, s);
  module1489.default().theme;
  React.useRef();
  var p = t.title,
    y = t.onPress,
    v = t.icon,
    R = t.label,
    w = t.borderMode,
    M = t.borderRadius,
    O = {};
  O =
    'top' === w
      ? {
          borderTopRightRadius: M || 8,
          borderTopLeftRadius: M || 8,
        }
      : 'bottom' === w
      ? {
          borderBottomRightRadius: M || 8,
          borderBottomLeftRadius: M || 8,
        }
      : {
          borderRadius: M || 0,
        };
  return React.default.createElement(
    ReactNative.View,
    {
      style: [
        {
          backgroundColor: '#fff',
          marginHorizontal: 20,
          backgroundColor: 'white',
        },
        O,
      ],
      opacity: 1,
    },
    React.default.createElement(module1493.List.Item, {
      title: p,
      titleStyle: {
        color: '#aaa',
      },
      right: function (t) {
        return React.default.createElement(
          ReactNative.View,
          null,
          React.default.createElement(
            module1493.Button,
            {
              icon: v,
              mode: 'text',
              contentStyle: {
                flexDirection: 'row-reverse',
              },
              onPress: y,
            },
            R
          )
        );
      },
      rightIcon: function (t) {
        return React.default.createElement(
          module1493.List.Icon,
          module11.default({}, t, {
            icon: 'folder',
          })
        );
      },
    })
  );
}

p = React.forwardRef(p);
var y = React.default.memo(p);
exports.default = y;
