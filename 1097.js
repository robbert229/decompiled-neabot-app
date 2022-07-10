var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1098 = require('./1098'),
  module408 = require('./408'),
  module1102 = require('./1102'),
  p = (function (t) {
    module35.default(y, t);
    var p = module401.default(y);

    function y(t) {
      var l;
      module24.default(this, y);
      (l = p.call(this, t)).state = {
        fadeAnim: new ReactNative.Animated.Value(0),
      };
      return l;
    }

    module25.default(y, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            n = this.props,
            l = n.onClose,
            o = n.onAnimationEnd,
            s = this.props.duration,
            u = ReactNative.Animated.timing;
          if (this.anim) this.anim = null;
          var f = [
            u(this.state.fadeAnim, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }),
            ReactNative.Animated.delay(1e3 * s),
          ];
          if (s > 0)
            f.push(
              u(this.state.fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              })
            );
          this.anim = ReactNative.Animated.sequence(f);
          this.anim.start(function () {
            if (s > 0) {
              t.anim = null;
              if (l) l();
              if (o) o();
            }
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.anim) {
            this.anim.stop();
            this.anim = null;
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            l = n.type,
            o = undefined === l ? '' : l,
            s = n.content,
            p = n.mask;
          return React.default.createElement(
            module408.WithTheme,
            {
              styles: this.props.styles,
              themeStyles: module1102.default,
            },
            function (n) {
              var l = null;
              l =
                'loading' === o
                  ? React.default.createElement(ReactNative.ActivityIndicator, {
                      animating: true,
                      style: [n.centering],
                      color: 'white',
                      size: 'large',
                    })
                  : 'info' === o
                  ? null
                  : React.default.createElement(module1098.default, {
                      name: {
                        success: 'check-circle',
                        fail: 'close-circle',
                        offline: 'frown',
                      }[o],
                      style: n.image,
                      color: 'white',
                      size: 36,
                    });
              return React.default.createElement(
                ReactNative.View,
                {
                  style: [n.container],
                  pointerEvents: p ? undefined : 'box-none',
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [n.innerContainer],
                  },
                  React.default.createElement(
                    ReactNative.Animated.View,
                    {
                      style: {
                        opacity: t.state.fadeAnim,
                      },
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [n.innerWrap, l ? n.iconToast : n.textToast],
                      },
                      l,
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: n.content,
                        },
                        s
                      )
                    )
                  )
                )
              );
            }
          );
        },
      },
    ]);
    return y;
  })(React.default.Component);

exports.default = p;
p.defaultProps = {
  duration: 3,
  mask: true,
  onClose: function () {},
};
