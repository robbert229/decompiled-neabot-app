require('./945');

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
  module996 = require('./996'),
  module993 = require('./993'),
  module992 = require('./992'),
  module990 = require('./990'),
  I = [
    'style',
    'children',
    'type',
    'barPosition',
    'barStyle',
    'justifyItem',
    'indicatorType',
    'indicatorPosition',
    'indicatorLineColor',
    'indicatorLineWidth',
    'indicatorPositionPadding',
    'animated',
    'autoScroll',
    'activeIndex',
    'onChange',
  ];

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

var j = (function (t) {
  module35.default(j, t);

  var PropTypes = j,
    module996 = S(),
    C = function () {
      var t,
        n = module34.default(PropTypes);

      if (module996) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function j(t) {
    var n;
    module24.default(this, j);
    (n = C.call(this, t)).state = {
      activeIndex: n.props.activeIndex ? n.props.activeIndex : 0,
    };
    return n;
  }

  module25.default(j, [
    {
      key: 'componentDidUpdate',
      value: function (t) {
        if (t.activeIndex != this.props.activeIndex && this.refs.carousel) this.refs.carousel.scrollToPage(this.props.activeIndex);
      },
    },
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
      key: 'onSegmentedBarChange',
      value: function (t) {
        var n = this;
        if (t != this.activeIndex)
          this.setState(
            {
              activeIndex: t,
            },
            function () {
              if (n.refs.carousel) n.refs.carousel.scrollToPage(t, false);
              if (n.props.onChange) n.props.onChange(t);
            }
          );
      },
    },
    {
      key: 'onCarouselChange',
      value: function (t) {
        var n = this;
        if (t != this.state.activeIndex)
          this.setState(
            {
              activeIndex: t,
            },
            function () {
              if (n.props.onChange) n.props.onChange(t);
            }
          );
      },
    },
    {
      key: 'renderBar',
      value: function () {
        var t = this,
          n = this.props,
          o = n.barPosition,
          l = n.barStyle,
          u = n.justifyItem,
          c = n.indicatorType,
          s = n.indicatorPosition,
          f = n.indicatorLineColor,
          h = n.indicatorLineWidth,
          v = n.indicatorPositionPadding,
          b = n.animated,
          x = n.autoScroll;
        n.onChange;
        if (!(s || 'bottom' != o)) s = 'top';
        return React.default.createElement(
          ReactNative.View,
          null,
          React.default.createElement(
            module993.default,
            {
              style: l,
              justifyItem: u,
              indicatorType: c,
              indicatorPosition: s,
              indicatorLineColor: f,
              indicatorLineWidth: h,
              indicatorPositionPadding: v,
              animated: b,
              autoScroll: x,
              activeIndex: this.activeIndex,
              onChange: function (n) {
                return t.onSegmentedBarChange(n);
              },
            },
            this.sheets.map(function (t, n) {
              return React.default.createElement(module993.default.Item, {
                key: n,
                title: t.props.title,
                titleStyle: t.props.titleStyle,
                activeTitleStyle: t.props.activeTitleStyle,
                badge: t.props.badge,
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
          this.sheets
        );
      },
    },
    {
      key: 'renderCarousel',
      value: function () {
        var t = this;
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
            onChange: function (n) {
              return t.onCarouselChange(n);
            },
          },
          this.sheets
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          l = t.type,
          u = t.barPosition,
          c = module52.default(t, I);
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: this.buildStyle(),
            },
            c
          ),
          'top' === u ? this.renderBar() : null,
          'carousel' === l ? this.renderCarousel() : this.renderProjector(),
          'bottom' === u ? this.renderBar() : null
        );
      },
    },
  ]);
  return j;
})(React.Component);

exports.default = j;
j.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  type: PropTypes.default.oneOf(['projector', 'carousel']),
  barPosition: PropTypes.default.oneOf(['top', 'bottom']),
  barStyle: ReactNative.ViewPropTypes.style,
  justifyItem: PropTypes.default.oneOf(['fixed', 'scrollable']),
  indicatorType: PropTypes.default.oneOf(['none', 'boxWidth', 'itemWidth']),
  indicatorPosition: PropTypes.default.oneOf(['top', 'bottom']),
  indicatorLineColor: PropTypes.default.string,
  indicatorLineWidth: PropTypes.default.number,
  indicatorPositionPadding: PropTypes.default.number,
  animated: PropTypes.default.bool,
  autoScroll: PropTypes.default.bool,
  activeIndex: PropTypes.default.number,
  onChange: PropTypes.default.func,
});
j.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  type: 'projector',
  barPosition: 'top',
});
j.Sheet = module996.default;
