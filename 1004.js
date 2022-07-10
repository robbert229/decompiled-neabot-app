require('./945');

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
    var o = y(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, l, c);
        else s[l] = t[l];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  P = ['style', 'itemHeight', 'wheelHeight', 'index', 'currentPosition', 'children'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function w() {
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
  module35.default(M, t);

  var PropTypes = M,
    y = w(),
    b = function () {
      var t,
        n = module34.default(PropTypes);

      if (y) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function M(t) {
    var n;
    module24.default(this, M);
    (n = b.call(this, t)).lastPosition = null;
    n.state = {
      translateY: new ReactNative.Animated.Value(1e5),
      scaleX: new ReactNative.Animated.Value(1),
      scaleY: new ReactNative.Animated.Value(1),
    };
    return n;
  }

  module25.default(M, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;

        if (!this.positionListenerId) {
          this.positionListenerId = this.props.currentPosition.addListener(function (n) {
            t.handlePositionChange(t.props.currentPosition._value);
          });
          this.handlePositionChange(this.props.currentPosition._value);
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.positionListenerId) {
          this.props.currentPosition.removeListener(this.positionListenerId);
          this.positionListenerId = null;
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        var n = this.props,
          o = n.itemHeight,
          s = n.wheelHeight,
          u = n.index;
        if (!(t.index == u && t.itemHeight == o && t.wheelHeight == s)) this.handlePositionChange(this.props.currentPosition._value);
      },
    },
    {
      key: 'calcProjection',
      value: function (t, n, o) {
        if (0 == t) return false;
        var s = t / 2,
          u = Math.PI * t,
          l = u / 4;
        if (Math.abs(n) > l) return false;
        var c = (n / u) * Math.PI * 2;
        return {
          point: s * Math.sin(c),
          width: (1e3 * o) / (s - s * Math.sin(Math.PI / 2 - c) + 1e3),
        };
      },
    },
    {
      key: 'handlePositionChange',
      value: function (t) {
        var n = this.props,
          o = n.itemHeight,
          s = n.wheelHeight,
          u = n.index;

        if (o && s && !(null !== this.lastPosition && Math.abs(this.lastPosition - t) < 1)) {
          var l = o * u - t - o / 2,
            c = l + o,
            f = this.calcProjection(s, l, 100),
            h = this.calcProjection(s, c, 100),
            p = 1e4,
            v = 1,
            P = 1;

          if (f && h) {
            var y = f.point,
              w = h.point;
            p = (y + w) / 2;
            P = (w - y) / o;
            v = (f.width + h.width) / 2 / 100;
          }

          var b = this.state,
            M = b.translateY,
            H = b.scaleX,
            j = b.scaleY;
          M.setValue(p);
          H.setValue(v);
          j.setValue(P);
          this.lastPosition = t;
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          module24 = t.style,
          u = t.children,
          l = module52.default(t, P),
          c = this.state,
          f = c.translateY;
        module24 = [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            transform: [
              {
                scaleX: c.scaleX,
              },
              {
                translateY: f,
              },
              {
                scaleY: c.scaleY,
              },
            ],
          },
        ].concat(module24);
        return React.default.createElement(
          ReactNative.Animated.View,
          module11.default(
            {
              style: module24,
            },
            l
          ),
          u
        );
      },
    },
  ]);
  return M;
})(React.Component);

exports.default = b;
b.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  index: PropTypes.default.number.isRequired,
  itemHeight: PropTypes.default.number.isRequired,
  wheelHeight: PropTypes.default.number.isRequired,
  currentPosition: PropTypes.default.any,
});
b.defaultProps = module11.default({}, ReactNative.Animated.View.defaultProps);
