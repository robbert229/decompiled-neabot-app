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
    var o = C(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module998 = require('./998'),
  module999 = require('./999'),
  module992 = require('./992'),
  module990 = require('./990'),
  B = ['style', 'children', 'type', 'barStyle', 'activeIndex', 'onChange'];

function C(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (C = function (t) {
    return t ? o : n;
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

var w = (function (t) {
  module35.default(C, t);

  var PropTypes = C,
    module998 = S(),
    x = function () {
      var t,
        n = module34.default(PropTypes);

      if (module998) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function C(t) {
    var n;
    module24.default(this, C);
    (n = x.call(this, t)).state = {
      activeIndex: n.props.activeIndex ? n.props.activeIndex : 0,
    };
    return n;
  }

  module25.default(C, [
    {
      key: 'sheets',
      get: function () {
        var t = this.props.children;
        if (!(t instanceof Array)) t = t ? [t] : [];
        t = t.filter(function (t) {
          return t;
        });
        return t;
      },
    },
    {
      key: 'activeIndex',
      get: function () {
        var t = this.props.activeIndex;
        return t || 0 === t ? t : this.state.activeIndex;
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            flexDirection: 'column',
            alignItems: 'stretch',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderBar',
      value: function () {
        var t = this,
          n = this.props,
          o = n.barStyle,
          l = n.onChange,
          u = module945.default.screenInset.bottom;
        o = [
          {
            backgroundColor: module945.default.tvBarColor,
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            height: module945.default.tvBarHeight + u,
            paddingTop: module945.default.tvBarPaddingTop,
            paddingBottom: module945.default.tvBarPaddingBottom + u,
            borderTopWidth: module945.default.tvBarSeparatorWidth,
            borderColor: module945.default.tvBarSeparatorColor,
          },
        ].concat(o);
        var c = (o = ReactNative.StyleSheet.flatten(o)),
          s = c.height,
          f = c.paddingTop,
          h = c.paddingBottom,
          b = {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            paddingTop: f,
            paddingBottom: h,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
          },
          x = {
            minHeight: s - f - h,
          },
          I = 0;
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              height: o.height,
            },
            pointerEvents: 'box-none',
          },
          React.default.createElement(ReactNative.View, {
            style: o,
          }),
          React.default.createElement(
            ReactNative.View,
            {
              style: b,
              pointerEvents: 'box-none',
            },
            this.sheets.map(function (n, o) {
              var u = n.props,
                c = u.type,
                s = u.title,
                f = u.icon,
                h = u.activeIcon,
                y = u.iconContainerStyle,
                v = u.badge,
                b = u.onPress,
                P = I;
              if ('sheet' === c) I += 1;
              return React.default.createElement(t.constructor.Button, {
                key: o,
                style: x,
                title: s,
                icon: f,
                activeIcon: h,
                active: 'sheet' === c && P === t.activeIndex,
                iconContainerStyle: y,
                badge: v,
                onPress: function (n) {
                  if ('sheet' === c)
                    t.setState(
                      {
                        activeIndex: P,
                      },
                      function () {
                        if (t.refs.carousel) t.refs.carousel.scrollToPage(P);
                        if (l) l(P);
                      }
                    );
                  if (b) b(n);
                },
              });
            })
          )
        );
      },
    },
    {
      key: 'renderProjector',
      value: function () {
        return React.default.createElement(
          module992.default,
          {
            style: {
              flex: 1,
            },
            index: this.activeIndex,
          },
          this.sheets.filter(function (t) {
            return t && 'sheet' === t.props.type;
          })
        );
      },
    },
    {
      key: 'renderCarousel',
      value: function () {
        var t = this,
          n = this.props.onChange;
        return React.default.createElement(
          module990.default,
          {
            style: {
              flex: 1,
            },
            carousel: false,
            startIndex: this.activeIndex,
            cycle: false,
            ref: 'carousel',
            onChange: function (o) {
              if ('number' == typeof o)
                t.setState(
                  {
                    activeIndex: o,
                  },
                  function () {
                    return n && n(o);
                  }
                );
            },
          },
          this.sheets.filter(function (t) {
            return t && 'sheet' === t.props.type;
          })
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          l = t.type,
          u = module52.default(t, B);
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: this.buildStyle(),
            },
            u
          ),
          'carousel' === l ? this.renderCarousel() : this.renderProjector(),
          this.renderBar()
        );
      },
    },
  ]);
  return C;
})(React.Component);

exports.default = w;
w.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  type: PropTypes.default.oneOf(['projector', 'carousel']),
  barStyle: ReactNative.ViewPropTypes.style,
  activeIndex: PropTypes.default.number,
  onChange: PropTypes.default.func,
});
w.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  type: 'projector',
});
w.Sheet = module998.default;
w.Button = module999.default;
