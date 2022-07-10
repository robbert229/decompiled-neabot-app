require('./945');

var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = S(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var h = o ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (h && (h.get || h.set)) Object.defineProperty(u, s, h);
        else u[s] = t[s];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module182 = require('./182'),
  module1000 = require('./1000');

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (S = function (t) {
    return t ? l : n;
  })(t);
}

function W() {
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

var b = (function (t) {
  module35.default(b, t);

  var PropTypes = b,
    module1000 = W(),
    S = function () {
      var t,
        n = module34.default(PropTypes);

      if (module1000) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t) {
    var module25;
    module24.default(this, b);
    module25 = S.call(this, t);
    module11.default(module25.state, {
      position: t.defaultPosition,
      imageLoaded: false,
      thumbLoaded: false,
      actualWidth: 0,
      actualHeight: 0,
      fitWidth: 0,
      fitHeight: 0,
      viewWidth: 0,
      viewHeight: 0,
    });
    return module25;
  }

  module25.default(b, [
    {
      key: 'componentDidMount',
      value: function () {
        this.loadImage();
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        if (!(t.image == this.props.image && t.load == this.props.load)) this.loadImage();
      },
    },
    {
      key: 'loadImage',
      value: function () {
        var t = this,
          n = this.props,
          l = n.image,
          u = n.thumb,
          o = n.load,
          s = n.onWillLoadImage,
          h = n.onLoadImageSuccess,
          f = n.onLoadImageFailure,
          v = this.state,
          p = v.imageLoaded,
          y = v.thumbLoaded;
        if (o)
          if (React.default.isValidElement(l)) {
            var w = this.getElementSize(l),
              S = w.width,
              W = w.height;
            this.imageSizeChange(S, W);
            this.setState({
              imageLoaded: true,
            });
          } else {
            if (u && !y)
              this.getImageSize(u, function (n, l) {
                if (!t.state.imageLoaded) t.imageSizeChange(n, l);
                t.setState({
                  thumbLoaded: true,
                });
              });

            if (l && !p) {
              if (s) s();
              this.getImageSize(
                l,
                function (n, l) {
                  t.imageSizeChange(n, l);
                  t.setState({
                    imageLoaded: true,
                  });
                  if (h) h(n, l);
                },
                function (t) {
                  if (f) f(t);
                }
              );
            }
          }
      },
    },
    {
      key: 'getImageSize',
      value: function (t, n, l) {
        if ('number' == typeof t) {
          var u = module182.default(t),
            o = u.width,
            s = u.height;
          if (n) n(o, s);
        } else
          t && 'object' == typeof t && t.uri
            ? ReactNative.Image.getSize(
                t.uri,
                function (t, l) {
                  return n && n(t, l);
                },
                function (t) {
                  return l && l(t);
                }
              )
            : l && l('source error');
      },
    },
    {
      key: 'getElementSize',
      value: function (t) {
        var n = 0,
          l = 0;

        if (React.default.isValidElement(t)) {
          var u = ReactNative.StyleSheet.flatten(t.props.style);
          if (null === u.width || undefined === u.width || null === u.height || undefined === u.height)
            console.error('You need to specify the width and height style when the image is a element');
          else {
            n = u.width;
            l = u.height;
          }
        }

        return {
          width: n,
          height: l,
        };
      },
    },
    {
      key: 'getFitSize',
      value: function (t, n, l, u) {
        var o = 0,
          s = 0;
        if (t && n) {
          if ((s = (n * (o = l)) / t) > u) o = (t * (s = u)) / n;
        } else if (t) o = l;
        else if (n) s = u;
        return {
          fitWidth: o,
          fitHeight: s,
        };
      },
    },
    {
      key: 'getScrollValue',
      value: function () {
        var t = this.props.space,
          n = this.state,
          l = n.fitWidth,
          u = n.viewWidth,
          o = l * n.scale._value,
          s = o > u ? o - u : 0;
        return {
          leftX: -(u + t + s / 2),
          rightX: u + t + s / 2,
          centerLeftX: -s / 2,
          centerRightX: s / 2,
        };
      },
    },
    {
      key: 'scrollTo',
      value: function (t) {
        var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
          l = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null,
          u = this.state,
          o = u.position,
          s = u.translateX,
          h = u.translateY,
          f = this.getScrollValue(),
          c = f.leftX,
          v = f.rightX,
          y = f.centerLeftX,
          w = f.centerRightX,
          S = 0;
        S = 'left' === t ? c : 'right' === t ? v : 'left' == o ? y : w;
        var W = h._value,
          b = this.contentLayout,
          L = b.y,
          k = b.height;
        if (k > this.viewLayout.height) L > 0 ? (W = h._value - L) : L + k < this.viewLayout.height && (W = h._value + (this.viewLayout.height - (L + k)));

        if (l) {
          l(s, S);
          l(h, W);
        } else if (n)
          ReactNative.Animated.parallel([
            ReactNative.Animated.timing(s, {
              toValue: S,
              easing: ReactNative.Easing.elastic(0),
              duration: 200,
              useNativeDriver: false,
            }),
            ReactNative.Animated.timing(h, {
              toValue: W,
              easing: ReactNative.Easing.elastic(0),
              duration: 200,
              useNativeDriver: false,
            }),
          ]).start();
        else {
          s.setValue(S);
          h.setValue(W);
        }

        this.setState({
          position: t,
        });
      },
    },
    {
      key: 'scrollX',
      value: function (t) {
        var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
          l = this.state,
          u = l.position,
          o = l.translateX,
          s = this.getScrollValue(),
          h = s.leftX,
          f = s.rightX,
          c = 0;
        if ('left' === u) c = h;
        else if ('right' === u) c = f;
        c += t;
        if (n)
          ReactNative.Animated.timing(o, {
            toValue: c,
            easing: ReactNative.Easing.elastic(0),
            duration: 200,
            useNativeDriver: false,
          }).start();
        else o.setValue(c);
      },
    },
    {
      key: 'restoreImage',
      value: function () {
        var t = this.props.space,
          n = this.state,
          l = n.position,
          u = n.viewWidth,
          o = n.translateX,
          s = n.translateY;

        switch ((n.scale.setValue(1), s.setValue(0), l)) {
          case 'left':
            o.setValue(-(u + t));
            break;

          case 'right':
            o.setValue(u + t);
            break;

          default:
            o.setValue(0);
        }
      },
    },
    {
      key: 'layoutChange',
      value: function (t, n) {
        var l = this,
          u = this.state,
          o = u.actualWidth,
          s = u.actualHeight,
          h = u.fitWidth,
          f = u.fitHeight,
          c = u.viewWidth,
          v = u.viewHeight,
          p = false;

        if (((c = t), (v = n), o && s)) {
          var y = this.getFitSize(o, s, c, v);
          h = y.fitWidth;
          f = y.fitHeight;
          p = true;
        }

        this.setState(
          {
            actualWidth: o,
            actualHeight: s,
            fitWidth: h,
            fitHeight: f,
            viewWidth: c,
            viewHeight: v,
          },
          function () {
            if (p) l.restoreImage();
          }
        );
      },
    },
    {
      key: 'imageSizeChange',
      value: function (t, n) {
        var l = this,
          u = this.state,
          o = u.actualWidth,
          s = u.actualHeight,
          h = u.fitWidth,
          f = u.fitHeight,
          c = u.viewWidth,
          v = u.viewHeight,
          p = false;

        if (((o = t), (s = n), c && v)) {
          var y = this.getFitSize(o, s, c, v);
          h = y.fitWidth;
          f = y.fitHeight;
          p = true;
        }

        this.setState(
          {
            actualWidth: o,
            actualHeight: s,
            fitWidth: h,
            fitHeight: f,
            viewWidth: c,
            viewHeight: v,
          },
          function () {
            if (p) l.restoreImage();
          }
        );
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        return [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
        ].concat(module32.default(module34.default(b.prototype), 'buildStyle', this).call(this));
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        var n = t.nativeEvent.layout,
          l = n.width,
          u = n.height;
        this.layoutChange(l, u);
        module32.default(module34.default(b.prototype), 'onLayout', this).call(this, t);
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t = this.props,
          n = t.image,
          l = t.thumb,
          u = this.state,
          o = u.imageLoaded,
          s = {
            width: u.fitWidth,
            height: u.fitHeight,
          };
        return React.default.isValidElement(n)
          ? React.default.cloneElement(n, {
              style: s,
            })
          : o || !l
          ? React.default.createElement(ReactNative.Image, {
              style: s,
              resizeMode: 'contain',
              source: n,
            })
          : React.default.createElement(ReactNative.Image, {
              style: s,
              resizeMode: 'contain',
              source: l,
            });
      },
    },
  ]);
  return b;
})(module1000.default);

exports.default = b;
b.propTypes = module11.default({}, module1000.default.propTypes, {
  image: PropTypes.default.oneOfType([ReactNative.Image.propTypes.source, PropTypes.default.element]).isRequired,
  thumb: ReactNative.Image.propTypes.source,
  defaultPosition: PropTypes.default.oneOf(['center', 'left', 'right']),
  space: PropTypes.default.number,
  load: PropTypes.default.bool,
  onWillLoadImage: PropTypes.default.func,
  onLoadImageSuccess: PropTypes.default.func,
  onLoadImageFailure: PropTypes.default.func,
});
b.defaultProps = module11.default({}, module1000.default.defaultProps, {
  maxScale: 3,
  minScale: 1,
  defaultPosition: 'center',
  space: 20,
  load: true,
});
