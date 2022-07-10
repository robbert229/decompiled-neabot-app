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
    var l = k(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, f, s);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module949 = require('./949'),
  module968 = require('./968'),
  module971 = require('./971'),
  P = [
    'style',
    'children',
    'title',
    'detail',
    'titleStyle',
    'detailStyle',
    'detailMultiLine',
    'icon',
    'accessory',
    'topSeparator',
    'bottomSeparator',
    'titlePlace',
    'swipeActions',
    'activeOpacity',
    'onLayout',
    'onPress',
  ];

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (k = function (t) {
    return t ? l : n;
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

var module974 = (function (t) {
  module35.default(module972, t);

  var PropTypes = module972,
    module971 = O(),
    k = function () {
      var t,
        n = module34.default(PropTypes);

      if (module971) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function module972(t) {
    var n;
    module24.default(this, module972);
    (n = k.call(this, t)).state = {
      swipeSts: 'none',
      swipeWidth: 0,
    };
    return n;
  }

  module25.default(module972, [
    {
      key: 'measureInWindow',
      value: function (t) {
        if (this.refs.containerView) this.refs.containerView.measureInWindow(t);
      },
    },
    {
      key: 'measure',
      value: function (t) {
        if (this.refs.containerView) this.refs.containerView.measure(t);
      },
    },
    {
      key: 'closeSwipeActions',
      value: function () {
        if (this.refs.containerView) this.refs.containerView.timingClose();
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            backgroundColor: module945.default.rowColor,
            paddingLeft: module945.default.rowPaddingLeft,
            paddingRight: module945.default.rowPaddingRight,
            paddingTop: module945.default.rowPaddingTop,
            paddingBottom: module945.default.rowPaddingBottom,
            minHeight: module945.default.rowMinHeight,
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderSeparator',
      value: function (t) {
        var n = {
            backgroundColor: module945.default.rowSeparatorColor,
            height: module945.default.rowSeparatorLineWidth,
          },
          l = {
            backgroundColor: 'rgba(0,0,0,0)',
            paddingLeft: module945.default.rowPaddingLeft,
          };

        switch (t) {
          case 'full':
            return React.default.createElement(ReactNative.View, {
              style: n,
            });

          case 'indent':
            return React.default.createElement(
              ReactNative.View,
              {
                style: l,
              },
              React.default.createElement(ReactNative.View, {
                style: n,
              })
            );

          default:
            return null;
        }
      },
    },
    {
      key: 'renderSwipeActionView',
      value: function () {
        var t = this,
          n = this.props.swipeActions;
        if (!(n instanceof Array) || 0 == n.length) return null;
        var l = {
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          opacity: 'none' === this.state.swipeSts ? 0 : 1,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'flex-end',
        };
        return React.default.createElement(
          ReactNative.View,
          {
            style: l,
            onLayout: function (n) {
              return t.setState({
                swipeWidth: n.nativeEvent.layout.width,
              });
            },
          },
          n.map(function (n, l) {
            return React.default.cloneElement(n, {
              key: n.key ? n.key : 'action' + l,
              onPress: function () {
                if (t.refs.containerView) t.refs.containerView.timingClose();
                if (n.props.onPress) n.props.onPress();
              },
            });
          })
        );
      },
    },
    {
      key: 'renderIcon',
      value: function () {
        var t = this.props.icon;
        return null === t || undefined === t || React.default.isValidElement(t)
          ? t
          : React.default.createElement(
              ReactNative.View,
              {
                style: {
                  paddingRight: module945.default.rowIconPaddingRight,
                },
              },
              React.default.createElement(ReactNative.Image, {
                style: {
                  width: module945.default.rowIconWidth,
                  height: module945.default.rowIconHeight,
                },
                source: t,
              })
            );
      },
    },
    {
      key: 'renderAccessory',
      value: function () {
        var t,
          n,
          l = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
        if ((l || (l = this.props.accessory), React.default.isValidElement(l))) return l;
        if ('none' === l || ('auto' === l && !this.props.onPress)) return null;

        switch (l) {
          case 'empty':
            t = require('./972');
            break;

          case 'check':
            t = require('./973');
            n = module945.default.rowAccessoryCheckColor;
            break;

          case 'indicator':
          case 'auto':
            t = require('./974');
            n = module945.default.rowAccessoryIndicatorColor;
            break;

          default:
            t = l;
        }

        var o = {
          width: module945.default.rowAccessoryWidth,
          height: module945.default.rowAccessoryHeight,
          tintColor: n,
        };
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              paddingLeft: module945.default.rowAccessoryPaddingLeft,
            },
          },
          React.default.createElement(ReactNative.Image, {
            style: o,
            source: t,
          })
        );
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props,
          n = t.title,
          l = t.detail,
          o = t.titleStyle,
          u = t.titlePlace;
        if ('none' === u) return null;

        if ('string' == typeof n || 'number' == typeof n) {
          var f =
            l || 'left' !== u
              ? null
              : {
                  flexGrow: 1,
                  flexShrink: 1,
                };
          return React.default.createElement(module949.default, {
            style: [f, o],
            type: 'title',
            text: n,
          });
        }

        return n;
      },
    },
    {
      key: 'renderDetail',
      value: function () {
        var t = this.props,
          n = t.title,
          l = t.detail,
          o = t.detailStyle,
          u = t.detailMultiLine,
          f = t.titlePlace;

        if ('string' == typeof l || 'number' == typeof l) {
          var s =
            'top' === f
              ? {
                  lineHeight: module945.default.rowDetailLineHeight,
                  color: module945.default.labelTextColor,
                }
              : {
                  flexGrow: 1,
                  flexShrink: 1,
                  textAlign: 'right',
                };
          if (n) 'left' === f ? (s.paddingLeft = module945.default.rowPaddingTitleDetail) : (s.paddingTop = module945.default.rowPaddingTitleDetail);
          if (!(u || false === u)) u = 'top' === f;
          return React.default.createElement(module949.default, {
            style: [s, o],
            type: 'detail',
            text: l,
            numberOfLines: u ? 0 : 1,
          });
        }

        return l;
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t = this.props,
          n = t.titlePlace,
          l = t.children,
          o = this.renderTitle(),
          u = this.renderDetail();
        if (!o && !u) return l;
        var f = {
          flex: 1,
          overflow: 'hidden',
          flexDirection: 'top' === n ? 'column' : 'row',
          alignItems: 'top' === n ? 'stretch' : 'center',
          justifyContent: 'space-between',
        };
        return React.default.createElement(
          ReactNative.View,
          {
            style: f,
          },
          o,
          u
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          o = this.props,
          u = o.topSeparator,
          f = o.bottomSeparator,
          s = o.swipeActions,
          c = o.activeOpacity,
          y = o.onLayout,
          w = o.onPress,
          v = module52.default(o, P);
        return React.default.createElement(
          ReactNative.View,
          {
            onLayout: y,
          },
          this.renderSeparator(u),
          this.renderSwipeActionView(),
          React.default.createElement(
            module968.default,
            module11.default({}, v, {
              style: this.buildStyle(),
              activeOpacity: c || 0 === c ? c : w ? 0.2 : 1,
              swipeable: s instanceof Array && s.length > 0,
              swipeWidth: this.state.swipeWidth,
              onPress: w,
              onSwipeStsChange: function (n) {
                return t.setState({
                  swipeSts: n,
                });
              },
              ref: 'containerView',
            }),
            this.renderIcon(),
            this.renderContent(),
            this.renderAccessory()
          ),
          this.renderSeparator(f)
        );
      },
    },
  ]);
  return module972;
})(React.Component);

exports.default = module974;
module974.propTypes = module11.default({}, module968.default.propTypes, {
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  detail: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  titleStyle: ReactNative.Text.propTypes.style,
  detailStyle: ReactNative.Text.propTypes.style,
  detailMultiLine: PropTypes.default.bool,
  icon: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
  ]),
  accessory: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
    PropTypes.default.oneOf(['none', 'auto', 'empty', 'check', 'indicator']),
  ]),
  topSeparator: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.oneOf(['none', 'full', 'indent'])]),
  bottomSeparator: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.oneOf(['none', 'full', 'indent'])]),
  titlePlace: PropTypes.default.oneOf(['none', 'left', 'top']),
  swipeActions: PropTypes.default.arrayOf(PropTypes.default.element),
});
module974.defaultProps = module11.default({}, module968.default.defaultProps, {
  activeOpacity: null,
  accessory: 'auto',
  topSeparator: 'none',
  bottomSeparator: 'indent',
  titlePlace: 'left',
});
module974.SwipeActionButton = module971.default;
