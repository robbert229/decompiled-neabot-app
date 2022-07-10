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
    var u = I(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, s, f);
        else o[s] = t[s];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module1025 = require('./1025'),
  module1062 = require('./1062'),
  module983 = require('./983'),
  module960 = require('./960'),
  P = ['style', 'children', 'scene', 'autoKeyboardInsets', 'keyboardTopInsets', 'title', 'showBackButton', 'navigationBarInsets'];

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (I = function (t) {
    return t ? u : n;
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

var R = (function (t) {
  module35.default(I, t);

  var PropTypes = I,
    module1025 = O(),
    B = function () {
      var t,
        n = module34.default(PropTypes);

      if (module1025) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function I(t) {
    var n;
    module24.default(this, I);
    (n = B.call(this, t)).screenWidth = ReactNative.Dimensions.get('window').width;
    return n;
  }

  module25.default(I, [
    {
      key: 'onLayout',
      value: function (t) {
        var n = ReactNative.Dimensions.get('window').width;

        if (n != this.screenWidth) {
          this.screenWidth = n;
          this.forceUpdate();
        }

        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'renderNavigationTitle',
      value: function () {
        return this.props.title;
      },
    },
    {
      key: 'renderNavigationLeftView',
      value: function () {
        var t = this;
        return this.props.showBackButton
          ? React.default.createElement(module983.default.BackButton, {
              title: module945.default.backButtonTitle,
              onPress: function () {
                return t.navigator.pop();
              },
            })
          : null;
      },
    },
    {
      key: 'renderNavigationRightView',
      value: function () {
        return null;
      },
    },
    {
      key: 'renderNavigationBar',
      value: function () {
        return React.default.createElement(module983.default, {
          title: this.renderNavigationTitle(),
          leftView: this.renderNavigationLeftView(),
          rightView: this.renderNavigationRightView(),
        });
      },
    },
    {
      key: 'renderPage',
      value: function () {
        return null;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          o = this.props,
          l = o.autoKeyboardInsets,
          s = o.keyboardTopInsets,
          f = o.navigationBarInsets,
          c = module52.default(o, P),
          h = module945.default.screenInset,
          w = [
            {
              flex: 1,
              paddingLeft: h.left,
              paddingRight: h.right,
              marginTop: f ? module945.default.navBarContentHeight + module945.default.statusBarHeight : 0,
            },
          ];
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: this.buildStyle(),
              onLayout: function (n) {
                return t.onLayout(n);
              },
            },
            c
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: w,
              },
              this.renderPage()
            ),
            this.renderNavigationBar()
          ),
          l
            ? React.default.createElement(module960.default, {
                topInsets: s,
              })
            : null
        );
      },
    },
  ]);
  return I;
})(module1062.default);

exports.default = R;
R.propTypes = module11.default({}, module1062.default.propTypes, {
  title: PropTypes.default.string,
  showBackButton: PropTypes.default.bool,
  navigationBarInsets: PropTypes.default.bool,
});
R.defaultProps = module11.default({}, module1062.default.defaultProps, {
  scene: module1025.default.SceneConfigs.PushFromRight,
  title: null,
  showBackButton: false,
  navigationBarInsets: true,
});
