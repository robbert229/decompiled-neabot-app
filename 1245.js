var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1098 = require('./1098'),
  module408 = require('./408'),
  module1246 = require('./1246'),
  module1247 = require('./1247'),
  v = function (t, n) {
    var l = {};

    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && n.indexOf(o) < 0 && (l[o] = t[o]);

    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var u = 0;

      for (o = Object.getOwnPropertySymbols(t); u < o.length; u++) n.indexOf(o[u]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[u]) && (l[o[u]] = t[o[u]]);
    }

    return l;
  },
  E = function () {};

function x(t) {
  return undefined === t || null === t ? '' : t;
}

var C = (function (t) {
  module35.default(C, t);
  var E = module401.default(C);

  function C() {
    var t;
    module24.default(this, C);
    (t = E.apply(this, arguments)).state = {
      focus: false,
    };

    t.onChange = function (n) {
      var l = t.props,
        o = l.onChange,
        u = l.type,
        s = t.props.maxLength;

      switch (u) {
        case 'bankCard':
          n = n.replace(/\D/g, '');
          if (s > 0) n = n.substring(0, s);
          n = n.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
          break;

        case 'phone':
          var c = (n = n.replace(/\D/g, '').substring(0, 11)).length;
          if (c > 3 && c < 8) n = ''.concat(n.substr(0, 3), ' ').concat(n.substr(3));
          else if (c >= 8) n = ''.concat(n.substr(0, 3), ' ').concat(n.substr(3, 4), ' ').concat(n.substr(7));
      }

      if (o) o(n);
    };

    t.onInputBlur = function () {
      t.setState(
        {
          focus: false,
        },
        function () {
          if (t.props.onBlur) t.props.onBlur(t.props.value);
        }
      );
    };

    t.onInputFocus = function () {
      t.setState(
        {
          focus: true,
        },
        function () {
          if (t.props.onFocus) t.props.onFocus(t.props.value);
        }
      );
    };

    t.onInputClear = function () {
      if (t.inputRef) t.inputRef.clear();
      t.onChange('');
    };

    t.focus = function () {
      if (t.inputRef) t.inputRef.focus();
    };

    return t;
  }

  module25.default(C, [
    {
      key: 'render',
      value: function () {
        var t,
          l = this,
          o = 'android' === ReactNative.Platform.OS,
          u = this.props,
          s = u.type,
          E = u.editable,
          C = u.clear,
          w = u.children,
          _ = u.error,
          k = u.extra,
          O = u.labelNumber,
          P = u.last,
          S = u.onExtraClick,
          B = u.onErrorClick,
          F = u.styles,
          I = u.disabled,
          T = v(u, ['type', 'editable', 'clear', 'children', 'error', 'extra', 'labelNumber', 'last', 'onExtraClick', 'onErrorClick', 'styles', 'disabled']),
          V = this.state.focus,
          j = T.value,
          R = T.defaultValue,
          W = T.style;
        t =
          'value' in this.props
            ? {
                value: x(j),
              }
            : {
                defaultValue: R,
              };
        return React.default.createElement(
          module408.WithTheme,
          {
            styles: F,
            themeStyles: module1247.default,
          },
          function (u, h) {
            var y = {
                borderBottomWidth: P ? 0 : ReactNative.StyleSheet.hairlineWidth,
              },
              v = {
                width: h.font_size_heading * O * 1.05,
              },
              x = {
                width: 'string' == typeof k && k.length > 0 ? k.length * h.font_size_heading : 0,
              },
              F = 'default';
            if ('number' === s) F = 'numeric';
            else if ('bankCard' === s) F = 'number-pad';
            else if ('phone' === s) F = 'phone-pad';
            else if (
              s &&
              [
                'default',
                'email-address',
                'numeric',
                'phone-pad',
                'ascii-capable',
                'numbers-and-punctuation',
                'url',
                'number-pad',
                'name-phone-pad',
                'decimal-pad',
                'twitter',
                'web-search',
              ].indexOf(s) > -1
            )
              F = s;
            var R = I ? u.inputDisabled : {};
            return React.default.createElement(
              ReactNative.View,
              {
                style: [u.container, y],
              },
              w
                ? 'string' == typeof w
                  ? React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [u.text, v],
                      },
                      w
                    )
                  : React.default.createElement(
                      ReactNative.View,
                      {
                        style: v,
                      },
                      w
                    )
                : null,
              React.default.createElement(
                module1246.default,
                module11.default(
                  {
                    editable: !I && E,
                    clearButtonMode: C ? 'while-editing' : 'never',
                    underlineColorAndroid: 'transparent',
                    ref: function (t) {
                      return (l.inputRef = t);
                    },
                  },
                  T,
                  t,
                  {
                    style: [
                      {
                        height: o ? h.list_item_height : h.list_item_height_sm,
                      },
                      u.input,
                      _ ? u.inputErrorColor : null,
                      R,
                      W,
                    ],
                    keyboardType: F,
                    onChange: function (t) {
                      return l.onChange(t.nativeEvent.text);
                    },
                    secureTextEntry: 'password' === s,
                    onBlur: l.onInputBlur,
                    onFocus: l.onInputFocus,
                  }
                )
              ),
              E && C && j && V && o
                ? React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [u.clear],
                      onPress: l.onInputClear,
                      hitSlop: {
                        top: 5,
                        left: 5,
                        bottom: 5,
                        right: 5,
                      },
                    },
                    React.default.createElement(module1098.default, {
                      name: 'close',
                      color: 'white',
                      size: 'xxs',
                    })
                  )
                : null,
              k
                ? React.default.createElement(
                    ReactNative.TouchableWithoutFeedback,
                    {
                      onPress: S,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      null,
                      'string' == typeof k
                        ? React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [u.extra, x],
                            },
                            k
                          )
                        : k
                    )
                  )
                : null,
              _ &&
                React.default.createElement(
                  ReactNative.TouchableWithoutFeedback,
                  {
                    onPress: B,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [u.errorIcon],
                    },
                    React.default.createElement(module1098.default, {
                      name: 'info-circle',
                      style: {
                        color: h.brand_error,
                      },
                    })
                  )
                )
            );
          }
        );
      },
    },
  ]);
  return C;
})(React.default.Component);

exports.default = C;
C.defaultProps = {
  type: 'text',
  editable: true,
  clear: false,
  onChange: E,
  onBlur: E,
  onFocus: E,
  extra: '',
  onExtraClick: E,
  error: false,
  onErrorClick: E,
  labelNumber: 4,
  labelPosition: 'left',
  textAlign: 'left',
  last: false,
};
