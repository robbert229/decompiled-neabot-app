require('./182');

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
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module1002 = require('./1002'),
  module991 = require('./991'),
  L = [
    'images',
    'thumbs',
    'defaultIndex',
    'index',
    'maxScale',
    'space',
    'control',
    'children',
    'onLayout',
    'onWillChange',
    'onChange',
    'onPress',
    'onLongPress',
    'onWillLoadImage',
    'onLoadImageSuccess',
    'onLoadImageFailure',
  ];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function S() {
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

var P = (function (t) {
  module35.default(P, t);

  var PropTypes = P,
    module991 = S(),
    b = function () {
      var t,
        n = module34.default(PropTypes);

      if (module991) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P(t) {
    var n;
    module24.default(this, P);
    (n = b.call(this, t)).animateActions = [];
    n.layout = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    var o = t.index || 0 === t.index ? t.index : t.defaultIndex;
    n.state = {
      index: o,
    };
    return n;
  }

  module25.default(P, [
    {
      key: 'componentDidUpdate',
      value: function (t) {
        if (!((!this.props.index && 0 !== this.props.index) || t.index == this.props.index)) this.changeIndex(this.props.index);
      },
    },
    {
      key: 'needLoad',
      value: function (t) {
        return t >= this.state.index - 1 && t <= this.state.index + 1;
      },
    },
    {
      key: 'changeIndex',
      value: function (t) {
        var n = this,
          o = this.state.index;

        if (t != o) {
          if (this.props.onWillChange) this.props.onWillChange(o, t);
          this.setState({
            index: t,
          });
          var l = this.refs['sheet' + o],
            s = this.refs['sheet' + t],
            u = t > o ? 'left' : 'right';
          this.animateActions = [];
          if (l)
            l.scrollTo(u, true, function (t, o) {
              n.animateActions.push({
                variable: t,
                toValue: o,
              });
            });
          if (s)
            s.scrollTo('center', true, function (t, o) {
              n.animateActions.push({
                variable: t,
                toValue: o,
              });
            });
          if (0 !== this.animateActions.length)
            ReactNative.Animated.parallel(
              this.animateActions.map(function (t, n) {
                return ReactNative.Animated.spring(t.variable, {
                  toValue: t.toValue,
                  friction: 9,
                  useNativeDriver: false,
                });
              })
            ).start(function (l) {
              if (n.props.onChange) n.props.onChange(t, o);
            });
        }
      },
    },
    {
      key: 'checkStopScroll',
      value: function () {
        this.animateActions.map(function (t, n) {
          t.variable.stopAnimation();
          t.variable.setValue(t.toValue);
        });
        this.animateActions = [];
      },
    },
    {
      key: 'checkScroll',
      value: function (t) {
        var n = this.props.images,
          o = this.state.index,
          l = this.refs['sheet' + o].contentLayout,
          s = l.x,
          u = l.width,
          c = t,
          f = t;

        if (u > this.layout.width) {
          c = s;
          f = s + (u - this.layout.width);
        }

        var h = this.layout.width / 3;

        if ((c < h && f > -h) || (c >= h && 0 === o) || (f <= -h && o === n.length - 1)) {
          if (o > 0) this.refs['sheet' + (o - 1)].scrollX(0, true);
          if (o < n.length - 1) this.refs['sheet' + (o + 1)].scrollX(0, true);
          return true;
        } else {
          this.changeIndex(c >= h ? o - 1 : o + 1);
          return false;
        }
      },
    },
    {
      key: 'scrollToPage',
      value: function (t) {
        this.changeIndex(t);
      },
    },
    {
      key: 'onTransforming',
      value: function (t, n, o) {
        var l = this.saveScale;

        if (((this.saveScale = o), !(o < 1 || (l && o < l)))) {
          var s = this.props.images,
            u = this.state.index,
            c = this.refs['sheet' + u].contentLayout,
            f = c.x,
            h = c.width,
            p = t,
            y = t;

          if (h > this.layout.width) {
            p = f;
            y = f + (h - this.layout.width);
          }

          if (u > 0) this.refs['sheet' + (u - 1)].scrollX(p, false);
          if (u < s.length - 1) this.refs['sheet' + (u + 1)].scrollX(y, false);
        }
      },
    },
    {
      key: 'onWillInertialMove',
      value: function (t, n, o, l) {
        return this.checkScroll(o);
      },
    },
    {
      key: 'onWillMagnetic',
      value: function (t, n, o, l, s, u) {
        return o < 1 || this.checkScroll(t);
      },
    },
    {
      key: 'renderImage',
      value: function (t) {
        var n = this,
          o = this.props,
          l = o.images,
          s = o.thumbs,
          u = o.maxScale,
          c = o.space,
          f = o.onPress,
          p = o.onLongPress,
          y = o.onWillLoadImage,
          v = o.onLoadImageSuccess,
          I = o.onLoadImageFailure,
          L = 'center';
        if (t < this.state.index) L = 'left';
        else if (t > this.state.index) L = 'right';
        return React.default.createElement(module1002.default, {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
          pointerEvents: t === this.state.index ? 'auto' : 'none',
          minScale: 1,
          maxScale: u,
          magnetic: true,
          tension: false,
          image: l[t],
          thumb: s instanceof Array && s.length > t ? s[t] : null,
          defaultPosition: L,
          space: c,
          load: t >= this.state.index - 1 && t <= this.state.index + 1,
          onWillTransform: function () {
            return n.checkStopScroll();
          },
          onTransforming: function (t, o, l) {
            return n.onTransforming(t, o, l);
          },
          onWillInertialMove: function (t, o, l, s) {
            return n.onWillInertialMove(t, o, l, s);
          },
          onWillMagnetic: function (t, o, l, s, u, c) {
            return n.onWillMagnetic(t, o, l, s, u, c);
          },
          onPress: function (n) {
            return f && f(t, n);
          },
          onLongPress: function (n) {
            return p && p(t, n);
          },
          onWillLoadImage: function () {
            return y && y(t);
          },
          onLoadImageSuccess: function (n, o) {
            return v && v(t, n, o);
          },
          onLoadImageFailure: function (n) {
            return I && I(t, n);
          },
          ref: 'sheet' + t,
          key: 'sheet' + t,
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = this.props,
          s = l.images,
          u = l.control,
          c = l.onLayout,
          f = module52.default(l, L);
        if (React.default.isValidElement(u))
          u = React.default.cloneElement(u, {
            index: this.state.index,
            total: s.length,
            carousel: this,
          });
        else if (u)
          u = React.default.createElement(this.constructor.Control, {
            style: {
              paddingBottom: module945.default.screenInset.bottom,
            },
            index: this.state.index,
            total: s.length,
            carousel: this,
          });
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              onLayout: function (n) {
                t.layout = n.nativeEvent.layout;
                if (c) c(n);
              },
            },
            f
          ),
          s.map(function (n, o) {
            return t.renderImage(o);
          }),
          u
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = P;
P.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  images: PropTypes.default.arrayOf(PropTypes.default.oneOfType([ReactNative.Image.propTypes.source, PropTypes.default.element])).isRequired,
  thumbs: PropTypes.default.arrayOf(ReactNative.Image.propTypes.source),
  defaultIndex: PropTypes.default.number,
  index: PropTypes.default.number,
  maxScale: PropTypes.default.number,
  space: PropTypes.default.number,
  control: PropTypes.default.oneOfType([PropTypes.default.bool, PropTypes.default.element]),
  onWillChange: PropTypes.default.func,
  onChange: PropTypes.default.func,
  onPress: PropTypes.default.func,
  onLongPress: PropTypes.default.func,
  onWillLoadImage: PropTypes.default.func,
  onLoadImageSuccess: PropTypes.default.func,
  onLoadImageFailure: PropTypes.default.func,
});
P.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  defaultIndex: 0,
  maxScale: 3,
  space: 20,
  control: false,
});
P.Sheet = module1002.default;
P.Control = module991.default;
