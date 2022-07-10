var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  c = require('./37'),
  module34 = require('./34'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = v(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  k = ['style', 'type', 'size', 'title', 'titleStyle', 'disabled', 'activeOpacity', 'children'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (v = function (t) {
    return t ? n : l;
  })(t);
}

function S() {
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

var O = (function (t) {
  module35.default(P, t);

  var PropTypes = P,
    v = S(),
    O = function () {
      var t,
        l = module34.default(PropTypes);

      if (v) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, n);
      } else t = l.apply(this, arguments);

      return c.default(this, t);
    };

  function P() {
    module24.default(this, P);
    return O.apply(this, arguments);
  }

  module25.default(P, [
    {
      key: 'measureInWindow',
      value: function (t) {
        if (this.refs.touchableOpacity) this.refs.touchableOpacity.measureInWindow(t);
      },
    },
    {
      key: 'measure',
      value: function (t) {
        if (this.refs.touchableOpacity) this.refs.touchableOpacity.measure(t);
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t,
          l,
          n,
          o,
          u,
          f = this.props,
          c = f.style,
          s = f.type,
          b = f.size,
          y = f.disabled;

        switch (s) {
          case 'primary':
            t = module945.default.btnPrimaryColor;
            l = module945.default.btnPrimaryBorderColor;
            break;

          case 'secondary':
            t = module945.default.btnSecondaryColor;
            l = module945.default.btnSecondaryBorderColor;
            break;

          case 'danger':
            t = module945.default.btnDangerColor;
            l = module945.default.btnDangerBorderColor;
            break;

          case 'link':
            t = module945.default.btnLinkColor;
            l = module945.default.btnLinkBorderColor;
            break;

          default:
            t = module945.default.btnColor;
            l = module945.default.btnBorderColor;
        }

        switch (b) {
          case 'xl':
            n = module945.default.btnBorderRadiusXL;
            o = module945.default.btnPaddingVerticalXL;
            u = module945.default.btnPaddingHorizontalXL;
            break;

          case 'lg':
            n = module945.default.btnBorderRadiusLG;
            o = module945.default.btnPaddingVerticalLG;
            u = module945.default.btnPaddingHorizontalLG;
            break;

          case 'sm':
            n = module945.default.btnBorderRadiusSM;
            o = module945.default.btnPaddingVerticalSM;
            u = module945.default.btnPaddingHorizontalSM;
            break;

          case 'xs':
            n = module945.default.btnBorderRadiusXS;
            o = module945.default.btnPaddingVerticalXS;
            u = module945.default.btnPaddingHorizontalXS;
            break;

          default:
            n = module945.default.btnBorderRadiusMD;
            o = module945.default.btnPaddingVerticalMD;
            u = module945.default.btnPaddingHorizontalMD;
        }

        c = [
          {
            backgroundColor: t,
            borderColor: l,
            borderWidth: module945.default.btnBorderWidth,
            borderRadius: n,
            paddingVertical: o,
            paddingHorizontal: u,
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ].concat(c);
        c = ReactNative.StyleSheet.flatten(c);
        if (y) c.opacity = module945.default.btnDisabledOpacity;
        return c;
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props,
          l = t.type,
          n = t.size,
          o = t.title,
          u = t.titleStyle,
          f = t.children;

        if (!React.default.isValidElement(o) && (o || '' === o || 0 === o)) {
          var c, s;

          switch (l) {
            case 'primary':
              c = module945.default.btnPrimaryTitleColor;
              break;

            case 'secondary':
              c = module945.default.btnSecondaryTitleColor;
              break;

            case 'danger':
              c = module945.default.btnDangerTitleColor;
              break;

            case 'link':
              c = module945.default.btnLinkTitleColor;
              break;

            default:
              c = module945.default.btnTitleColor;
          }

          switch (n) {
            case 'xl':
              s = module945.default.btnFontSizeXL;
              break;

            case 'lg':
              s = module945.default.btnFontSizeLG;
              break;

            case 'sm':
              s = module945.default.btnFontSizeSM;
              break;

            case 'xs':
              s = module945.default.btnFontSizeXS;
              break;

            default:
              s = module945.default.btnFontSizeMD;
          }

          u = [
            {
              color: c,
              fontSize: s,
              overflow: 'hidden',
            },
          ].concat(u);
          o = React.default.createElement(
            ReactNative.Text,
            {
              style: u,
              numberOfLines: 1,
            },
            o
          );
        }

        return o || f;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          module24 = t.style,
          u = t.disabled,
          f = t.activeOpacity,
          c = module52.default(t, k);
        module24 = this.buildStyle();
        if (u) f = module24.opacity;
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          module11.default(
            {
              style: module24,
              disabled: u,
              activeOpacity: f,
            },
            c,
            {
              ref: 'touchableOpacity',
            }
          ),
          this.renderTitle()
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = O;
O.propTypes = {
  type: PropTypes.default.oneOf(['default', 'primary', 'secondary', 'danger', 'link']),
  size: PropTypes.default.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  titleStyle: ReactNative.Text.propTypes.style,
};
O.defaultProps = {
  type: 'default',
  size: 'md',
};
