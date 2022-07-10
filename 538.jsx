var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, f, p);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module539 = require('./539'),
  v = ['style'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

function B() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var P = (function (t) {
  module35.default(R, t);

  var ReactNative = R,
    h = B(),
    P = function () {
      var t,
        n = module34.default(ReactNative);

      if (h) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function R() {
    module24.default(this, R);
    return P.apply(this, arguments);
  }

  module25.default(R, [
    {
      key: 'getExtraButtonProps',
      value: function () {
        var t = {},
          n = this.props.background;

        if (n) {
          if ('RippleAndroid' === n.type) {
            t.borderless = n.borderless;
            t.rippleColor = n.color;
          } else if ('ThemeAttrAndroid' === n.type) t.borderless = 'selectableItemBackgroundBorderless' === n.attribute;

          t.rippleRadius = n.rippleRadius;
        }

        t.foreground = this.props.useForeground;
        return t;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.style,
          l = undefined === u ? {} : u,
          f = module52.default(t, v);
        return <module539.default />;
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = P;
P.defaultProps = module11.default({}, module539.default.defaultProps, {
  useForeground: true,
  extraButtonProps: {
    rippleColor: null,
  },
});

P.SelectableBackground = function (t) {
  return {
    type: 'ThemeAttrAndroid',
    attribute: 'selectableItemBackground',
    rippleRadius: t,
  };
};

P.SelectableBackgroundBorderless = function (t) {
  return {
    type: 'ThemeAttrAndroid',
    attribute: 'selectableItemBackgroundBorderless',
    rippleRadius: t,
  };
};

P.Ripple = function (t, n, o) {
  return {
    type: 'RippleAndroid',
    color: t,
    borderless: n,
    rippleRadius: o,
  };
};

P.canUseNativeForeground = function () {
  return ReactNative.Platform.Version >= 23;
};
