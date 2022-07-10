var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = x(l);
    if (n && n.has(t)) return n.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, o, c);
        else u[o] = t[o];
      }

    u.default = t;
    if (n) n.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  v = ['style', 'type', 'size', 'text', 'children'];

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (x = function (t) {
    return t ? n : l;
  })(t);
}

function O() {
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

var k = (function (t) {
  module35.default(S, t);

  var PropTypes = S,
    x = O(),
    k = function () {
      var t,
        l = module34.default(PropTypes);

      if (x) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, n);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function S() {
    module24.default(this, S);
    return k.apply(this, arguments);
  }

  module25.default(S, [
    {
      key: 'buildStyle',
      value: function () {
        var t,
          l,
          n = this.props,
          u = n.type,
          f = n.size,
          o = n.style;

        switch (f) {
          case 'xl':
            l = module945.default.labelFontSizeXL;
            break;

          case 'lg':
            l = module945.default.labelFontSizeLG;
            break;

          case 'sm':
            l = module945.default.labelFontSizeSM;
            break;

          case 'xs':
            l = module945.default.labelFontSizeXS;
            break;

          default:
            l = module945.default.labelFontSizeMD;
        }

        switch (u) {
          case 'title':
            t = module945.default.labelTextTitleColor;
            l = Math.round(l * module945.default.labelTitleScale);
            break;

          case 'detail':
            t = module945.default.labelTextDetailColor;
            l = Math.round(l * module945.default.labelDetailScale);
            break;

          case 'danger':
            t = module945.default.labelTextDangerColor;
            l = Math.round(l * module945.default.labelDangerScale);
            break;

          default:
            t = module945.default.labelTextColor;
        }

        o = [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: t,
            fontSize: l,
            overflow: 'hidden',
          },
        ].concat(o);
        return o;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.text,
          f = t.children,
          o = module52.default(t, v);
        return React.default.createElement(
          ReactNative.Text,
          module11.default(
            {
              style: this.buildStyle(),
            },
            o
          ),
          u || '' === u || 0 === u ? u : f
        );
      },
    },
  ]);
  return S;
})(React.Component);

exports.default = k;
k.propTypes = module11.default({}, ReactNative.Text.propTypes, {
  type: PropTypes.default.oneOf(['default', 'title', 'detail', 'danger']),
  size: PropTypes.default.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  text: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
});
k.defaultProps = module11.default({}, ReactNative.Text.defaultProps, {
  type: 'default',
  size: 'md',
  numberOfLines: 1,
});
