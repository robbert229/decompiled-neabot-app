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
    var l = b(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  O = ['style', 'children', 'type', 'title', 'titleStyle'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (b = function (t) {
    return t ? l : n;
  })(t);
}

function w() {
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

var T = (function (t) {
  module35.default(P, t);

  var PropTypes = P,
    b = w(),
    T = function () {
      var t,
        n = module34.default(PropTypes);

      if (b) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P() {
    module24.default(this, P);
    return T.apply(this, arguments);
  }

  module25.default(P, [
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props,
          n = t.style;
        n = [
          {
            backgroundColor: 'danger' === t.type ? module945.default.rowActionButtonDangerColor : module945.default.rowActionButtonColor,
            paddingHorizontal: module945.default.rowActionButtonPaddingHorizontal,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ].concat(n);
        return n;
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props,
          n = t.type,
          l = t.title,
          o = t.titleStyle,
          u = t.children;
        return React.default.isValidElement(l)
          ? l
          : null === l || undefined === l
          ? u
          : ((o = [
              {
                color: 'danger' === n ? module945.default.rowActionButtonDangerTitleColor : module945.default.rowActionButtonTitleColor,
                fontSize: module945.default.rowActionButtonTitleFontSize,
                overflow: 'hidden',
              },
            ].concat(o)),
            React.default.createElement(
              ReactNative.Text,
              {
                style: o,
                numberOfLines: 1,
              },
              l
            ));
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = module52.default(t, O);
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          module11.default(
            {
              style: this.buildStyle(),
            },
            o
          ),
          this.renderTitle()
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = T;
T.propTypes = {
  type: PropTypes.default.oneOf(['default', 'danger']),
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  titleStyle: ReactNative.Text.propTypes.style,
};
T.defaultProps = {
  type: 'default',
};
