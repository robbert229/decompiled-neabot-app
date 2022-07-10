var module260 = require('./260'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  module408 = require('./408'),
  module1119 = require('./1119'),
  module1120 = require('./1120'),
  module1118 = require('./1118'),
  module1127 = require('./1127'),
  module402 = require('./402'),
  T = (function (t) {
    module35.default(T, t);
    var C = module401.default(T);

    function T(t) {
      var n;
      module24.default(this, T);

      (n = C.call(this, t)).onBackAndroid = function () {
        var t = n.props.onBackHandler;

        if ('function' == typeof t) {
          var s = t();
          if (s) n.onClose();
          return s;
        }

        return !!n.state.visible && (n.onClose(), true);
      };

      n.onClose = function () {
        n.setState({
          visible: false,
        });
      };

      n.state = {
        visible: true,
        text: t.defaultValue,
        password: 'secure-text' === t.type ? t.defaultValue : '',
      };
      return n;
    }

    module25.default(T, [
      {
        key: 'onChangeText',
        value: function (t, s) {
          this.setState(module260.default({}, t, s));
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            s = n.title,
            o = n.onAnimationEnd,
            u = n.message,
            l = n.type,
            C = n.actions,
            T = n.placeholders,
            E = this.state,
            w = E.text,
            P = E.password,
            b = function (t) {
              return 'login-password' === l ? t.apply(this, [w, P]) : 'secure-text' === l ? t.apply(this, [P]) : t.apply(this, [w]);
            },
            k = module1119.getComponentLocale(this.props, this.context, 'Modal', function () {
              return module1120.default;
            }),
            A = ('function' == typeof C
              ? [
                  {
                    text: k.cancelText,
                    style: 'cancel',
                    onPress: function () {},
                  },
                  {
                    text: k.okText,
                    onPress: function () {
                      return b(C);
                    },
                  },
                ]
              : C.map(function (t) {
                  return {
                    text: t.text,
                    onPress: function () {
                      if (t.onPress) return b(t.onPress);
                    },
                    style: t.style || {},
                  };
                })
            ).map(function (n) {
              var s = n.onPress || function () {};

              n.onPress = function () {
                var n = s();
                if (n && n.then)
                  n.then(function () {
                    t.onClose();
                  });
                else t.onClose();
              };

              return n;
            });

          return React.default.createElement(
            module408.WithTheme,
            {
              styles: this.props.styles,
              themeStyles: module1127.default,
            },
            function (n) {
              var f = [n.inputWrapper],
                h = [n.inputWrapper];

              if ('login-password' === l) {
                f.push(n.inputFirst);
                h.push(n.inputLast);
              } else if ('secure-text' === l) {
                h.push(n.inputFirst);
                h.push(n.inputLast);
              } else {
                f.push(n.inputFirst);
                f.push(n.inputLast);
              }

              return React.default.createElement(
                module1118.default,
                {
                  transparent: true,
                  title: s,
                  visible: t.state.visible,
                  footer: A,
                  onAnimationEnd: o,
                  onRequestClose: t.onBackAndroid,
                },
                u
                  ? React.default.createElement(
                      ReactNative.Text,
                      {
                        style: n.message,
                      },
                      u
                    )
                  : null,
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: n.inputGroup,
                  },
                  'secure-text' !== l &&
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: f,
                      },
                      React.default.createElement(ReactNative.TextInput, {
                        autoFocus: true,
                        onChangeText: function (n) {
                          t.onChangeText('text', n);
                        },
                        value: t.state.text,
                        style: n.input,
                        underlineColorAndroid: 'transparent',
                        placeholder: T[0],
                      })
                    ),
                  ('secure-text' === l || 'login-password' === l) &&
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: h,
                      },
                      React.default.createElement(ReactNative.TextInput, {
                        autoFocus: true,
                        secureTextEntry: true,
                        onChangeText: function (n) {
                          t.onChangeText('password', n);
                        },
                        value: t.state.password,
                        style: n.input,
                        underlineColorAndroid: 'transparent',
                        placeholder: T[1],
                      })
                    )
                )
              );
            }
          );
        },
      },
    ]);
    return T;
  })(React.default.Component);

exports.default = T;
T.defaultProps = {
  type: 'default',
  defaultValue: '',
};
T.contextType = module402.LocaleContext;
