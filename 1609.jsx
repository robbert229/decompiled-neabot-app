var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = w(o);
    if (n && n.has(t)) return n.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var h = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (h && (h.get || h.set)) Object.defineProperty(u, s, h);
        else u[s] = t[s];
      }

    u.default = t;
    if (n) n.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1610 = require('./1610'),
  module1619 = require('./1619'),
  module1612 = require('./1612'),
  module1613 = require('./1613'),
  module1495 = require('./1495'),
  A = ['mode'];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (w = function (t) {
    return t ? n : o;
  })(t);
}

function P() {
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

var C = 180,
  T = 150,
  F = (function (t, ...args) {
    module35.default(w, t);

    var module1612 = w,
      module1613 = P(),
      x = function () {
        var t,
          o = module34.default(module1612);

        if (module1613) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function w() {
      var t;
      module24.default(this, w);
      (t = x.call(this, ...args)).validInputValue = undefined !== t.props.value ? t.props.value : t.props.defaultValue;
      t.state = {
        labeled: new ReactNative.Animated.Value(t.validInputValue ? 0 : 1),
        error: new ReactNative.Animated.Value(t.props.error ? 1 : 0),
        focused: false,
        placeholder: '',
        value: t.validInputValue,
        labelLayout: {
          measured: false,
          width: 0,
          height: 0,
        },
        leftLayout: {
          width: null,
          height: null,
        },
        rightLayout: {
          width: null,
          height: null,
        },
      };

      t.showPlaceholder = function () {
        if (t.timer) clearTimeout(t.timer);
        t.timer = setTimeout(function () {
          return t.setState({
            placeholder: t.props.placeholder,
          });
        }, 50);
      };

      t.hidePlaceholder = function () {
        return t.setState({
          placeholder: '',
        });
      };

      t.showError = function () {
        var o = t.props.theme.animation.scale;
        ReactNative.Animated.timing(t.state.error, {
          toValue: 1,
          duration: T * o,
          useNativeDriver: ReactNative.Platform.select({
            ios: false,
            default: true,
          }),
        }).start();
      };

      t.hideError = function () {
        var o = t.props.theme.animation.scale;
        ReactNative.Animated.timing(t.state.error, {
          toValue: 0,
          duration: C * o,
          useNativeDriver: ReactNative.Platform.select({
            ios: false,
            default: true,
          }),
        }).start();
      };

      t.restoreLabel = function () {
        var o = t.props.theme.animation.scale;
        ReactNative.Animated.timing(t.state.labeled, {
          toValue: 1,
          duration: T * o,
          useNativeDriver: ReactNative.Platform.select({
            ios: false,
            default: true,
          }),
        }).start();
      };

      t.minimizeLabel = function () {
        var o = t.props.theme.animation.scale;
        ReactNative.Animated.timing(t.state.labeled, {
          toValue: 0,
          duration: C * o,
          useNativeDriver: ReactNative.Platform.select({
            ios: false,
            default: true,
          }),
        }).start();
      };

      t.onLeftAffixLayoutChange = function (o) {
        t.setState({
          leftLayout: {
            height: o.nativeEvent.layout.height,
            width: o.nativeEvent.layout.width,
          },
        });
      };

      t.onRightAffixLayoutChange = function (o) {
        t.setState({
          rightLayout: {
            width: o.nativeEvent.layout.width,
            height: o.nativeEvent.layout.height,
          },
        });
      };

      t.handleFocus = function (o) {
        if (!t.props.disabled && t.props.editable) {
          t.setState({
            focused: true,
          });
          if (t.props.onFocus) t.props.onFocus(o);
        }
      };

      t.handleBlur = function (o) {
        if (t.props.editable) {
          t.setState({
            focused: false,
          });
          if (t.props.onBlur) t.props.onBlur(o);
        }
      };

      t.handleChangeText = function (o) {
        if (t.props.editable) {
          t.setState({
            value: o,
          });
          if (t.props.onChangeText) t.props.onChangeText(o);
        }
      };

      t.handleLayoutAnimatedText = function (o) {
        t.setState({
          labelLayout: {
            width: o.nativeEvent.layout.width,
            height: o.nativeEvent.layout.height,
            measured: true,
          },
        });
      };

      t.forceFocus = function () {
        var o;
        return null == (o = t.root) ? undefined : o.focus();
      };

      return t;
    }

    module25.default(
      w,
      [
        {
          key: 'componentDidUpdate',
          value: function (t, o) {
            var n = o.focused !== this.state.focused,
              u = o.value !== this.state.value,
              l = o.labelLayout !== this.state.labelLayout,
              s = t.label !== this.props.label,
              h = t.error !== this.props.error;
            if (n || u || l) this.state.value || this.state.focused ? this.minimizeLabel() : this.restoreLabel();
            if (n || s) this.state.focused || !this.props.label ? this.showPlaceholder() : this.hidePlaceholder();
            if (h) this.props.error ? this.showError() : this.hideError();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            if (this.timer) clearTimeout(this.timer);
          },
        },
        {
          key: 'setNativeProps',
          value: function (t) {
            return this.root && this.root.setNativeProps(t);
          },
        },
        {
          key: 'isFocused',
          value: function () {
            return this.root && this.root.isFocused();
          },
        },
        {
          key: 'clear',
          value: function () {
            return this.root && this.root.clear();
          },
        },
        {
          key: 'focus',
          value: function () {
            return this.root && this.root.focus();
          },
        },
        {
          key: 'blur',
          value: function () {
            return this.root && this.root.blur();
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this,
              u = this.props,
              l = u.mode,
              s = module52.default(u, A);
            return 'outlined' === l ? <module1610.default /> : <module1619.default />;
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, o) {
            return {
              value: undefined !== t.value ? t.value : o.value,
            };
          },
        },
      ]
    );
    return w;
  })(React.Component);

F.Icon = module1612.default;
F.Affix = module1613.default;
F.defaultProps = {
  mode: 'flat',
  dense: false,
  disabled: false,
  error: false,
  multiline: false,
  editable: true,
  render: function (t) {
    return <ReactNative.TextInput />;
  },
};
var E = module1495.withTheme(F);
exports.default = E;
