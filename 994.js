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
    var l = S(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module982 = require('./982'),
  T = ['style', 'children', 'title', 'titleStyle', 'activeTitleStyle', 'active', 'badge', 'onAddWidth'];

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (S = function (t) {
    return t ? l : n;
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
  module35.default(O, t);

  var PropTypes = O,
    S = B(),
    P = function () {
      var t,
        n = module34.default(PropTypes);

      if (S) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O(t) {
    var n;
    module24.default(this, O);
    (n = P.call(this, t)).state = {
      badgeWidth: 0,
    };
    return n;
  }

  module25.default(O, [
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style,
          n = this.state.badgeWidth;
        t = [
          {
            paddingTop: module945.default.sbBtnPaddingTop,
            paddingBottom: module945.default.sbBtnPaddingBottom,
            paddingLeft: module945.default.sbBtnPaddingLeft + n / 2,
            paddingRight: module945.default.sbBtnPaddingRight + n / 2,
            overflow: 'visible',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t,
          n = this.props,
          l = n.title,
          u = n.titleStyle,
          o = n.activeTitleStyle,
          f = n.active;
        return null === l || undefined === l
          ? null
          : React.default.isValidElement(l)
          ? l
          : ((t = f
              ? [
                  {
                    color: module945.default.sbBtnActiveTitleColor,
                    fontSize: module945.default.sbBtnActiveTextFontSize,
                  },
                ].concat(o)
              : [
                  {
                    color: module945.default.sbBtnTitleColor,
                    fontSize: module945.default.sbBtnTextFontSize,
                  },
                ].concat(u)),
            React.default.createElement(
              ReactNative.Text,
              {
                key: 'title',
                style: t,
                numberOfLines: 1,
              },
              l
            ));
      },
    },
    {
      key: 'renderBadge',
      value: function () {
        var t = this,
          n = this.props,
          l = n.badge,
          u = n.onAddWidth;
        if (!l) return null;
        if (React.default.isValidElement(l)) return l;
        return React.default.createElement(module982.default, {
          style: {
            position: 'absolute',
            right: 0,
            top: 0,
          },
          count: l,
          onLayout: function (n) {
            var l = n.nativeEvent.layout.width;

            if (l != t.state.badgeWidth) {
              t.setState({
                badgeWidth: l,
              });
              if (u) u(l);
            }
          },
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = module52.default(t, T);
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: this.buildStyle(),
            },
            u
          ),
          this.renderTitle(),
          this.renderBadge()
        );
      },
    },
  ]);
  return O;
})(React.Component);

exports.default = P;
P.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  titleStyle: ReactNative.Text.propTypes.style,
  activeTitleStyle: ReactNative.Text.propTypes.style,
  active: PropTypes.default.bool,
  badge: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  onAddWidth: PropTypes.default.func,
});
P.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  active: false,
});
