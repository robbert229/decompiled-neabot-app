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
    var o = S(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, s, f);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module984 = require('./984'),
  module985 = require('./985'),
  module986 = require('./986'),
  module987 = require('./987'),
  module988 = require('./988'),
  C = [
    'style',
    'children',
    'type',
    'title',
    'titleStyle',
    'leftView',
    'rightView',
    'tintColor',
    'background',
    'hidden',
    'animated',
    'statusBarStyle',
    'statusBarColor',
    'statusBarHidden',
    'statusBarInsets',
    'onLayout',
  ];

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (S = function (t) {
    return t ? o : n;
  })(t);
}

function L() {
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
  module35.default(B, t);

  var PropTypes = B,
    module984 = L(),
    b = function () {
      var t,
        n = module34.default(PropTypes);

      if (module984) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function B(t) {
    var n;
    module24.default(this, B);
    (n = b.call(this, t)).screenWidth = ReactNative.Dimensions.get('window').width;
    n.state = {
      leftViewWidth: 0,
      rightViewWidth: 0,
      barTop: new ReactNative.Animated.Value(t.hidden ? -(module945.default.navBarContentHeight + module945.default.statusBarHeight) : 0),
      barOpacity: new ReactNative.Animated.Value(t.hidden ? 0 : 1),
    };
    return n;
  }

  module25.default(B, [
    {
      key: 'componentDidUpdate',
      value: function (t) {
        if (t.hidden != this.props.hidden) this.checkBarHidden();
      },
    },
    {
      key: 'getChildContext',
      value: function () {
        return {
          tintColor: undefined === this.props.tintColor ? module945.default.navTintColor : this.props.tintColor,
        };
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t,
          n = this.props,
          o = n.style,
          u = n.type,
          l = n.statusBarInsets;

        switch ('auto' === u ? ReactNative.Platform.OS : u) {
          case 'ios':
            t = 'space-between';
            break;

          case 'android':
            t = 'flex-end';
        }

        var s = module945.default.screenInset,
          f = s.left,
          c = s.right;
        o = [
          {
            backgroundColor: module945.default.navColor,
            position: 'absolute',
            left: 0,
            right: 0,
            height: module945.default.navBarContentHeight + (l ? module945.default.statusBarHeight : 0),
            paddingTop: l ? module945.default.statusBarHeight : 0,
            paddingLeft: 4 + f,
            paddingRight: 4 + c,
            borderBottomWidth: module945.default.navSeparatorLineWidth,
            borderBottomColor: module945.default.navSeparatorColor,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: t,
          },
        ]
          .concat(o)
          .concat({
            top: this.state.barTop,
          });
        return o;
      },
    },
    {
      key: 'checkBarHidden',
      value: function () {
        var t = this.props,
          n = t.hidden,
          o = t.animated,
          u = this.state,
          l = u.barTop,
          s = u.barOpacity,
          f = n ? -this.barHeight : 0,
          c = n ? 0 : 1;
        if (!(l._value == f && s._value == c))
          o
            ? ReactNative.Animated.parallel([
                ReactNative.Animated.spring(l, {
                  toValue: f,
                  friction: 9,
                  useNativeDriver: false,
                }),
                ReactNative.Animated.spring(s, {
                  toValue: c,
                  friction: 9,
                  useNativeDriver: false,
                }),
              ]).start()
            : (l.setValue(f), s.setValue(c));
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        if (t.nativeEvent.layout.height != this.barHeight) {
          this.barHeight = t.nativeEvent.layout.height;
          this.checkBarHidden();
        }

        var n = ReactNative.Dimensions.get('window').width;

        if (n != this.screenWidth) {
          this.screenWidth = n;
          this.forceUpdate();
        }

        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'onLeftViewLayout',
      value: function (t) {
        if (t.nativeEvent.layout.width != this.state.leftViewWidth)
          this.setState({
            leftViewWidth: t.nativeEvent.layout.width,
          });
      },
    },
    {
      key: 'onRightViewLayout',
      value: function (t) {
        if (t.nativeEvent.layout.width != this.state.rightViewWidth)
          this.setState({
            rightViewWidth: t.nativeEvent.layout.width,
          });
      },
    },
    {
      key: 'renderStatusBar',
      value: function (t) {
        var n = this.props,
          o = n.statusBarColor,
          u = n.statusBarStyle,
          l = n.statusBarHidden,
          s = n.statusBarInsets,
          f = n.animated;
        if (!o) o = s && ('ios' === ReactNative.Platform.OS || ReactNative.Platform.Version > 20) ? 'rgba(0,0,0,0)' : t.backgroundColor;
        if (!u) u = module945.default.navStatusBarStyle ? module945.default.navStatusBarStyle : 'default';
        return React.default.createElement(ReactNative.StatusBar, {
          backgroundColor: o,
          translucent: true,
          barStyle: u,
          animated: f,
          hidden: l,
        });
      },
    },
    {
      key: 'renderBackground',
      value: function () {
        var t = {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: this.state.barOpacity,
        };
        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: t,
          },
          this.props.background
        );
      },
    },
    {
      key: 'renderTitle',
      value: function (t) {
        var n,
          o,
          u = this.props,
          l = u.type,
          s = u.title,
          f = u.titleStyle,
          c = u.statusBarInsets,
          p = this.state,
          w = p.leftViewWidth,
          b = p.rightViewWidth,
          B = t.paddingLeft ? t.paddingLeft : t.padding ? t.padding : 0,
          V = t.paddingRight ? t.paddingRight : t.padding ? t.padding : 0;

        switch ('auto' === l ? ReactNative.Platform.OS : l) {
          case 'ios':
            var k = (w + B) ** (b + V);
            n = k;
            o = k;
            break;

          case 'android':
            n = B;
            o = w + b + V;
        }

        var C = {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          position: 'absolute',
          top: c ? module945.default.statusBarHeight : 0,
          left: 0,
          right: 0,
          height: module945.default.navBarContentHeight,
          paddingLeft: n,
          paddingRight: o,
          opacity: this.state.barOpacity,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        };

        if ('string' == typeof s) {
          var S;

          switch ('auto' === l ? ReactNative.Platform.OS : l) {
            case 'ios':
              S = 'center';
              break;

            case 'android':
              S = 'left';
          }

          s = React.default.createElement(this.constructor.Title, {
            style: [
              {
                textAlign: S,
                color: module945.default.navTitleColor,
              },
            ].concat(f),
            text: s,
          });
        }

        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: C,
          },
          s
        );
      },
    },
    {
      key: 'renderLeftView',
      value: function () {
        var t = this,
          n = this.props.leftView,
          o = this.state.barOpacity;
        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: {
              opacity: o,
            },
            onLayout: function (n) {
              return t.onLeftViewLayout(n);
            },
          },
          n
        );
      },
    },
    {
      key: 'renderRightView',
      value: function () {
        var t = this,
          n = this.props.rightView,
          o = this.state.barOpacity;
        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: {
              opacity: o,
            },
            onLayout: function (n) {
              return t.onRightViewLayout(n);
            },
          },
          n
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          u = this.props,
          l = module52.default(u, C),
          s = ReactNative.StyleSheet.flatten(this.buildStyle());
        return React.default.createElement(
          ReactNative.Animated.View,
          module11.default(
            {
              style: s,
              onLayout: function (n) {
                return t.onLayout(n);
              },
            },
            l
          ),
          this.renderStatusBar(s),
          this.renderBackground(),
          this.renderTitle(s),
          this.renderLeftView(),
          this.renderRightView()
        );
      },
    },
  ]);
  return B;
})(React.Component);

exports.default = O;
O.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  type: PropTypes.default.oneOf(['auto', 'ios', 'android']),
  title: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.element]),
  titleStyle: ReactNative.Text.propTypes.style,
  leftView: PropTypes.default.element,
  rightView: PropTypes.default.element,
  tintColor: PropTypes.default.string,
  background: PropTypes.default.element,
  hidden: PropTypes.default.bool,
  animated: PropTypes.default.bool,
  statusBarStyle: PropTypes.default.oneOf(['default', 'light-content', 'dark-content']),
  statusBarColor: PropTypes.default.string,
  statusBarHidden: PropTypes.default.bool,
  statusBarInsets: PropTypes.default.bool,
});
O.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  type: 'ios',
  hidden: false,
  animated: true,
  statusBarInsets: true,
});
O.childContextTypes = {
  tintColor: PropTypes.default.string,
};
O.Title = module984.default;
O.Button = module985.default;
O.LinkButton = module986.default;
O.IconButton = module987.default;
O.BackButton = module988.default;
