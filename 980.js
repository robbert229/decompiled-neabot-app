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
    var o = x(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  C = [
    'style',
    'children',
    'inputStyle',
    'iconSize',
    'disabled',
    'value',
    'placeholder',
    'placeholderTextColor',
    'selectionColor',
    'pointerEvents',
    'onBlur',
    'onFocus',
    'onChangeText',
  ];

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (x = function (t) {
    return t ? o : n;
  })(t);
}

function b() {
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

var I = (function (t) {
  module35.default(T, t);

  var PropTypes = T,
    x = b(),
    I = function () {
      var t,
        n = module34.default(PropTypes);

      if (x) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function T(t) {
    var n;
    module24.default(this, T);
    (n = I.call(this, t)).state = {
      value: undefined === t.value ? t.defaultValue : t.value,
      editing: false,
      width: null,
      placeholderWidth: null,
      selectionColor: null,
    };
    return n;
  }

  module25.default(T, [
    {
      key: 'componentDidUpdate',
      value: function (t, n) {
        if (n.editing !== this.state.editing)
          ReactNative.LayoutAnimation.configureNext({
            duration: 500,
            create: {
              duration: 300,
              type: ReactNative.LayoutAnimation.Types.easeInEaseOut,
              property: ReactNative.LayoutAnimation.Properties.opacity,
            },
            update: {
              type: ReactNative.LayoutAnimation.Types.spring,
              springDamping: 200,
            },
          });
      },
    },
    {
      key: 'focus',
      value: function () {
        return this.refs.textInput && this.refs.textInput.focus();
      },
    },
    {
      key: 'blur',
      value: function () {
        return this.refs.textInput && this.refs.textInput.blur();
      },
    },
    {
      key: 'isFocused',
      value: function () {
        return this.refs.textInput && this.refs.textInput.isFocused();
      },
    },
    {
      key: 'clear',
      value: function () {
        return this.refs.textInput && this.refs.textInput.clear();
      },
    },
    {
      key: 'onContainerLayout',
      value: function (t) {
        this.setState({
          width: t.nativeEvent.layout.width,
        });
      },
    },
    {
      key: 'onPlaceholderLayout',
      value: function (t) {
        this.setState({
          placeholderWidth: t.nativeEvent.layout.width,
        });
      },
    },
    {
      key: 'onInputFocus',
      value: function () {
        var t = this;
        this.setState({
          editing: true,
          selectionColor: 'rgba(0, 0, 0, 0)',
        });
        if (this.props.onFocus) this.props.onFocus();
        setTimeout(function () {
          return t.setState({
            selectionColor: null,
          });
        }, 500);
      },
    },
    {
      key: 'onInputBlur',
      value: function () {
        this.setState({
          editing: false,
        });
        if (this.props.onBlur) this.props.onBlur();
      },
    },
    {
      key: 'onChangeText',
      value: function (t) {
        this.setState({
          value: t,
        });
        if (this.props.onChangeText) this.props.onChangeText(t);
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = this.props,
          u = l.style,
          s = l.inputStyle,
          c = l.iconSize,
          f = l.disabled,
          h = l.value,
          x = l.placeholder,
          b = l.placeholderTextColor,
          module981 = l.selectionColor,
          T = l.pointerEvents,
          w = module52.default(l, C);
        u = [
          {
            backgroundColor: module945.default.siColor,
            borderColor: module945.default.siBorderColor,
            borderWidth: module945.default.siBorderWidth,
            borderRadius: module945.default.siBorderRadius,
          },
        ].concat(u);
        if (f)
          u = u.concat({
            opacity: module945.default.siDisabledOpacity,
          });
        var k,
          L = ReactNative.StyleSheet.flatten(u).height;
        s = [
          {
            color: module945.default.siTextColor,
            fontSize: module945.default.siFontSize,
            height: L || module945.default.siHeight,
            paddingVertical: module945.default.siPaddingVertical,
            paddingHorizontal: module945.default.siPaddingHorizontal,
          },
        ]
          .concat(s)
          .concat({
            backgroundColor: 'rgba(0, 0, 0, 0)',
          });
        var P = ReactNative.StyleSheet.flatten(s);
        k =
          P.paddingLeft || 0 === P.paddingLeft
            ? P.paddingLeft
            : P.paddingHorizontal || 0 === P.paddingHorizontal
            ? P.paddingHorizontal
            : P.padding || 0 === P.padding
            ? P.padding
            : 0;
        if (undefined === h) h = this.state.value;
        if (!(c || 0 === c)) c = module945.default.siIconSize;
        if (!b) b = module945.default.siPlaceholderTextColor;
        if (f) T = 'none';
        return React.default.createElement(
          ReactNative.View,
          {
            style: u,
            pointerEvents: T,
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: S.container,
              onLayout: function (n) {
                return t.onContainerLayout(n);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style:
                  this.state.editing || h
                    ? {
                        width: this.state.width,
                      }
                    : null,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: S.placeholderContainer,
                  onLayout: function (n) {
                    return t.onPlaceholderLayout(n);
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      paddingLeft: 0.5 * c,
                      alignItems: 'center',
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    style: {
                      width: c,
                      height: c,
                      tintColor: b,
                    },
                    source: require('./981'),
                  })
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      paddingLeft: k,
                      color: b,
                      fontSize: P.fontSize,
                    },
                  },
                  h ? null : x
                )
              )
            )
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                paddingLeft: 1.5 * c,
              },
            },
            React.default.createElement(
              ReactNative.TextInput,
              module11.default(
                {
                  style: s,
                  value: h,
                  onBlur: function () {
                    return t.onInputBlur();
                  },
                  onFocus: function () {
                    return t.onInputFocus();
                  },
                  onChangeText: function (n) {
                    return t.onChangeText(n);
                  },
                  selectionColor: this.state.selectionColor ? this.state.selectionColor : module981,
                },
                w,
                {
                  ref: 'textInput',
                }
              )
            )
          )
        );
      },
    },
  ]);
  return T;
})(React.Component);

exports.default = I;
I.propTypes = module11.default({}, ReactNative.TextInput.propTypes, {
  style: ReactNative.ViewPropTypes.style,
  inputStyle: ReactNative.TextInput.propTypes.style,
  iconSize: PropTypes.default.number,
  disabled: PropTypes.default.bool,
});
I.defaultProps = module11.default({}, ReactNative.TextInput.defaultProps, {
  disabled: false,
  underlineColorAndroid: 'rgba(0, 0, 0, 0)',
});
var S = ReactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
