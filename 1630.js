exports.PasswordInputX = w;

var module12 = require('./12'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = v(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(f, l, c);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  module1493 = require('./1493'),
  ReactNative = require('react-native'),
  module1631 = require('./1631'),
  module1489 = require('./1489'),
  y = ['style'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

function b(t, n) {
  var c = t.style,
    s = module52.default(t, y),
    v = module1489.default().theme,
    b = React.useRef();
  React.useImperativeHandle(n, function () {
    return {
      focus: function () {
        b.current.focus();
      },
      blur: function () {
        b.current.blur();
      },
    };
  });
  return React.default.createElement(
    module1493.TextInput,
    module11.default(
      {
        ref: b,
        theme: {
          colors: {
            background: v.colors.surface,
          },
        },
      },
      s,
      {
        style: [c],
      }
    )
  );
}

function w(t, f) {
  var l = React.useRef();
  React.useImperativeHandle(f, function () {
    return {
      focus: function () {
        l.current.focus();
      },
    };
  });
  var p = React.useState(false),
    y = module12.default(p, 2),
    v = y[0],
    w = y[1];
  return React.default.createElement(
    ReactNative.View,
    null,
    React.default.createElement(
      b,
      module11.default(
        {
          ref: l,
        },
        t,
        {
          secureTextEntry: !v,
        }
      )
    ),
    React.default.createElement(
      ReactNative.View,
      {
        style: {
          position: 'absolute',
          justifyContent: 'flex-end',
          top: 0,
          bottom: 0,
          right: 0,
        },
      },
      React.default.createElement(
        ReactNative.TouchableOpacity,
        {
          onPress: function () {
            w(!v);
          },
        },
        React.default.createElement(
          ReactNative.View,
          {
            style: {
              padding: 10,
              marginBottom: 5,
            },
          },
          React.default.createElement(module1631.IconX, {
            name: v ? 'md-eye' : 'md-eye-off',
          })
        )
      )
    )
  );
}

b = React.forwardRef(b);
exports.PasswordInputX = w = React.default.memo(React.forwardRef(w));
var O = React.default.memo(b);
exports.default = O;
