var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = M(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, f, p);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  v = ['style', 'size', 'disabled', 'placeholderTextColor', 'pointerEvents', 'opacity'];

function M(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (M = function (t) {
    return t ? u : n;
  })(t);
}

function P() {
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

var z = (function (t) {
  module35.default(O, t);

  var PropTypes = O,
    M = P(),
    z = function () {
      var t,
        n = module34.default(PropTypes);

      if (M) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    module24.default(this, O);
    return z.apply(this, arguments);
  }

  module25.default(O, [
    {
      key: 'buildStyle',
      value: function () {
        var t,
          n,
          u,
          o,
          l,
          f = this.props,
          p = f.style;

        switch (f.size) {
          case 'lg':
            t = module945.default.inputBorderRadiusLG;
            n = module945.default.inputFontSizeLG;
            u = module945.default.inputPaddingVerticalLG;
            o = module945.default.inputPaddingHorizontalLG;
            l = module945.default.inputHeightLG;
            break;

          case 'sm':
            t = module945.default.inputBorderRadiusSM;
            n = module945.default.inputFontSizeSM;
            u = module945.default.inputPaddingVerticalSM;
            o = module945.default.inputPaddingHorizontalSM;
            l = module945.default.inputHeightSM;
            break;

          default:
            t = module945.default.inputBorderRadiusMD;
            n = module945.default.inputFontSizeMD;
            u = module945.default.inputPaddingVerticalMD;
            o = module945.default.inputPaddingHorizontalMD;
            l = module945.default.inputHeightMD;
        }

        p = [
          {
            backgroundColor: module945.default.inputColor,
            color: module945.default.inputTextColor,
            borderColor: module945.default.inputBorderColor,
            borderWidth: module945.default.inputBorderWidth,
            borderRadius: t,
            fontSize: n,
            paddingVertical: u,
            paddingHorizontal: o,
            height: l,
          },
        ].concat(p);
        return p;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.disabled,
          l = t.placeholderTextColor,
          f = t.pointerEvents,
          p = t.opacity,
          c = module52.default(t, v);
        return React.default.createElement(
          ReactNative.TextInput,
          module11.default(
            {
              style: this.buildStyle(),
              placeholderTextColor: l || module945.default.inputPlaceholderTextColor,
              pointerEvents: o ? 'none' : f,
              opacity: o ? module945.default.inputDisabledOpacity : p,
            },
            c
          )
        );
      },
    },
  ]);
  return O;
})(React.Component);

exports.default = z;
z.propTypes = {
  size: PropTypes.default.oneOf(['lg', 'md', 'sm']),
  disabled: PropTypes.default.bool,
};
z.defaultProps = {
  size: 'md',
  disabled: false,
  underlineColorAndroid: 'rgba(0, 0, 0, 0)',
};
