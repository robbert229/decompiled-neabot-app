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
    var u = S(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  v = ['style', 'children', 'type', 'count', 'countStyle', 'maxCount'];

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (S = function (t) {
    return t ? u : n;
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

var O = (function (t) {
  module35.default(C, t);

  var PropTypes = C,
    S = w(),
    O = function () {
      var t,
        n = module34.default(PropTypes);

      if (S) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function C() {
    module24.default(this, C);
    return O.apply(this, arguments);
  }

  module25.default(C, [
    {
      key: 'buildStyle',
      value: function () {
        var t,
          n,
          u,
          o,
          l,
          f,
          c = this.props,
          s = c.style,
          p = c.type,
          y = c.count;

        switch (p) {
          case 'capsule':
            n = module945.default.badgeSize;
            u = module945.default.badgeSize;
            o = module945.default.badgeSize / 2;
            l = module945.default.badgeBorderWidth;
            f = 1 === (y + '').length ? 0 : module945.default.badgePadding;
            break;

          case 'square':
            n = module945.default.badgeSize;
            u = module945.default.badgeSize;
            o = 2;
            l = module945.default.badgeBorderWidth;
            f = 1 === (y + '').length ? 0 : module945.default.badgePadding;
            break;

          case 'dot':
            t = module945.default.badgeDotSize;
            n = module945.default.badgeDotSize;
            o = module945.default.badgeDotSize / 2;
            l = 0;
            f = 0;
        }

        s = [
          {
            backgroundColor: module945.default.badgeColor,
            width: t,
            height: n,
            minWidth: u,
            borderRadius: o,
            borderColor: module945.default.badgeBorderColor,
            borderWidth: l,
            paddingLeft: f,
            paddingRight: f,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          },
        ].concat(s);
        return s;
      },
    },
    {
      key: 'renderInner',
      value: function () {
        var t = this.props,
          n = t.type,
          u = t.count,
          o = t.countStyle,
          l = t.maxCount,
          f = t.children;
        return 'dot' === n
          ? null
          : u || 0 === u
          ? ((o = [
              {
                color: module945.default.badgeTextColor,
                fontSize: module945.default.badgeFontSize,
              },
            ].concat(o)),
            React.default.createElement(
              ReactNative.Text,
              {
                style: o,
                allowFontScaling: false,
                numberOfLines: 1,
              },
              u > l ? l + '+' : u
            ))
          : f;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = module52.default(t, v);
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: this.buildStyle(),
            },
            o
          ),
          this.renderInner()
        );
      },
    },
  ]);
  return C;
})(React.Component);

exports.default = O;
O.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  type: PropTypes.default.oneOf(['capsule', 'square', 'dot']),
  count: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
  countStyle: ReactNative.Text.propTypes.style,
  maxCount: PropTypes.default.number,
});
O.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  type: 'capsule',
  maxCount: 99,
});
