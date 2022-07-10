var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  module408 = require('./408'),
  module1119 = require('./1119'),
  module1120 = require('./1120'),
  module1121 = require('./1121'),
  module1122 = require('./1122'),
  module402 = require('./402'),
  E = (function (t) {
    module35.default(E, t);
    var h = module401.default(E);

    function E() {
      module24.default(this, E);
      return h.apply(this, arguments);
    }

    module25.default(E, [
      {
        key: 'render',
        value: function () {
          var t = this,
            l = this.props,
            n = l.title,
            o = l.closable,
            s = l.footer,
            h = l.children,
            E = l.style,
            C = l.animateAppear,
            w = l.maskClosable,
            T = l.popup,
            V = l.transparent,
            x = l.visible,
            A = l.onClose,
            k = l.bodyStyle,
            P = l.onAnimationEnd,
            S = l.onRequestClose,
            W = module1119.getComponentLocale(this.props, this.context, 'Modal', function () {
              return module1120.default;
            });
          return React.default.createElement(
            module408.WithTheme,
            {
              styles: this.props.styles,
              themeStyles: module1122.default,
            },
            function (l) {
              var c = l.buttonGroupV,
                f = {};

              if (s && 2 === s.length && !t.props.operation) {
                c = l.buttonGroupH;
                f = {
                  flex: 1,
                };
              }

              var y,
                v = s && 2 === s.length ? l.buttonWrapH : l.buttonWrapV;

              if (s && s.length) {
                var R = s.map(function (n, o) {
                  var c = {};

                  if ((t.props.operation && (c = l.buttonTextOperation), n.style && 'string' == typeof (c = n.style))) {
                    c =
                      {
                        cancel: {},
                        default: {},
                        destructive: {
                          color: 'red',
                        },
                      }[c] || {};
                  }

                  var y =
                    s && 2 === s.length && 1 === o
                      ? {
                          borderRightWidth: 0,
                        }
                      : {};
                  return React.default.createElement(
                    ReactNative.TouchableHighlight,
                    {
                      key: o,
                      style: f,
                      underlayColor: '#ddd',
                      onPress: function () {
                        if (n.onPress) n.onPress();
                        if (A) A();
                      },
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [v, y],
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [l.buttonText, c],
                        },
                        n.text || ''.concat(W.buttonText).concat(o)
                      )
                    )
                  );
                });
                y = React.default.createElement(
                  ReactNative.View,
                  {
                    style: [c, l.footer],
                  },
                  R
                );
              }

              var q = t.props.animationType;

              if (V) {
                if ('slide' === q) q = 'slide-up';

                var _ = o
                  ? React.default.createElement(
                      ReactNative.View,
                      {
                        style: [l.closeWrap],
                      },
                      React.default.createElement(
                        ReactNative.TouchableWithoutFeedback,
                        {
                          onPress: A,
                        },
                        React.default.createElement(
                          ReactNative.View,
                          null,
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [l.close],
                            },
                            '\xd7'
                          )
                        )
                      )
                    )
                  : null;

                return React.default.createElement(
                  ReactNative.View,
                  {
                    style: l.container,
                  },
                  React.default.createElement(
                    module1121.default,
                    {
                      onClose: A,
                      animationType: q,
                      wrapStyle: V ? l.wrap : undefined,
                      style: l.wrap,
                      visible: x,
                      onAnimationEnd: P,
                      onRequestClose: S,
                      animateAppear: C,
                      maskClosable: w,
                    },
                    React.default.createElement(
                      ReactNative.KeyboardAvoidingView,
                      {
                        behavior: 'padding',
                        enabled: 'ios' === ReactNative.Platform.OS,
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: [l.innerContainer, E],
                        },
                        n
                          ? React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [l.header],
                              },
                              n
                            )
                          : null,
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: [l.body, k],
                          },
                          h
                        ),
                        y,
                        _
                      )
                    )
                  )
                );
              }

              if (T) {
                var H = 'SlideDown';

                if ('slide-up' === q) {
                  q = 'slide-up';
                  H = 'SlideUp';
                } else q = 'slide-down';

                return React.default.createElement(
                  ReactNative.View,
                  {
                    style: l.container,
                  },
                  React.default.createElement(
                    module1121.default,
                    {
                      onClose: A,
                      animationType: q,
                      style: [l.popupContainer, l['popup'.concat(H)], E],
                      visible: x,
                      onAnimationEnd: P,
                      onRequestClose: S,
                      animateAppear: C,
                      maskClosable: w,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: k,
                      },
                      h
                    )
                  )
                );
              }

              if ('slide' === q) q = undefined;
              return React.default.createElement(
                ReactNative.View,
                {
                  style: l.container,
                },
                React.default.createElement(
                  module1121.default,
                  {
                    visible: x,
                    animationType: q,
                    onRequestClose: S,
                    onClose: A,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: E,
                    },
                    h
                  )
                )
              );
            }
          );
        },
      },
    ]);
    return E;
  })(React.default.Component);

E.defaultProps = {
  visible: false,
  closable: false,
  maskClosable: false,
  style: {},
  bodyStyle: {},
  animationType: 'fade',
  onClose: function () {},
  footer: [],
  transparent: false,
  popup: false,
  animateAppear: true,
  operation: false,
};
E.contextType = module402.LocaleContext;
var C = E;
exports.default = C;
