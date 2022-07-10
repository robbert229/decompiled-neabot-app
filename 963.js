var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
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
        var f = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, s, f);
        else u[s] = t[s];
      }

    u.default = t;
    if (n) n.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module959 = require('./959'),
  module964 = require('./964');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (w = function (t) {
    return t ? n : o;
  })(t);
}

function k() {
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

var O = (function (t) {
  module35.default(O, t);

  var PropTypes = O,
    module959 = k(),
    w = function () {
      var t,
        o = module34.default(PropTypes);

      if (module959) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function O(t) {
    var module25;
    module24.default(this, O);
    module25 = w.call(this, t);
    module11.default(module25.state, {
      fromBounds: t.fromBounds,
      popoverWidth: null,
      popoverHeight: null,
    });
    module25.defaultDirectionInsets = 0;
    return module25;
  }

  module25.default(O, [
    {
      key: 'componentDidUpdate',
      value: function (t, o, n) {
        if (module32.default(module34.default(O.prototype), 'componentDidUpdate', this))
          module32.default(module34.default(O.prototype), 'componentDidUpdate', this).call(this, t, o, n);
        if (JSON.stringify(this.props.fromBounds) !== JSON.stringify(this.state.fromBounds))
          this.setState({
            fromBounds: this.props.fromBounds,
          });
      },
    },
    {
      key: 'updateFromBounds',
      value: function (t) {
        this.setState({
          fromBounds: t,
        });
      },
    },
    {
      key: 'onPopoverLayout',
      value: function (t) {
        if ('android' !== ReactNative.Platform.OS || (null === this.state.popoverWidth && null == this.state.popoverHeight)) {
          var o = t.nativeEvent.layout,
            n = o.width,
            u = o.height;
          if (!(n === this.state.popoverWidth && u === this.state.popoverHeight))
            this.setState({
              popoverWidth: n,
              popoverHeight: u,
            });
        }
      },
    },
    {
      key: 'buildPopoverStyle',
      value: function () {
        var t = this.state,
          o = t.fromBounds,
          n = t.popoverWidth,
          u = t.popoverHeight,
          l = this.props,
          module35 = l.popoverStyle,
          f = l.direction,
          p = l.autoDirection,
          c = l.directionInsets,
          h = l.align,
          y = l.alignInsets,
          b = l.showArrow,
          w = l.arrow;

        if (null === n || null === u) {
          if (
            ((module35 = [].concat(module35).concat({
              position: 'absolute',
              left: 0,
              top: 0,
              opacity: 0,
            })),
            b)
          )
            switch (f) {
              case 'right':
                w = 'left';
                break;

              case 'left':
                w = 'right';
                break;

              case 'up':
                w = 'bottom';
                break;

              default:
                w = 'top';
            }
          else w = 'none';
          return {
            popoverStyle: module35,
            arrow: w,
          };
        }

        var k = ReactNative.Dimensions.get('window').width,
          O = ReactNative.Dimensions.get('window').height,
          P = o || {},
          B = P.x,
          S = P.y,
          D = P.width,
          R = P.height;
        if (!(B || 0 === B)) B = k / 2;
        if (!(S || 0 === S)) S = O / 2;
        if (!D) D = 0;
        if (!R) R = 0;
        if (!(c || 0 === c)) c = this.defaultDirectionInsets;
        if (!y) y = 0;

        var W,
          j,
          I = u + c,
          _ = n + c;

        switch (f) {
          case 'right':
            if (p && B + D + _ > k && B >= _) f = 'left';
            break;

          case 'left':
            if (p && B + D + _ <= k && B < _) f = 'right';
            break;

          case 'up':
            if (p && S + R + I <= O && S < I) f = 'down';
            break;

          default:
            if (p && S + R + I > O && S >= I) f = 'up';
        }

        switch (f) {
          case 'right':
            W = B + D + c;
            w = 'left';
            break;

          case 'left':
            W = B - n - c;
            w = 'right';
            break;

          case 'up':
            j = S - u - c;
            w = 'bottom';
            break;

          default:
            j = S + R + c;
            w = 'top';
        }

        if ('down' == f || 'up' == f)
          switch (h) {
            case 'start':
              W = B - y;
              w += 'Left';
              break;

            case 'center':
              W = B + D / 2 - n / 2;
              break;

            default:
              W = B + D - n + y;
              w += 'Right';
          }
        else if ('right' == f || 'left' == f)
          switch (h) {
            case 'end':
              j = S + R - u + y;
              w += 'Bottom';
              break;

            case 'center':
              j = S + R / 2 - u / 2;
              break;

            default:
              j = S - y;
              w += 'Top';
          }
        module35 = [].concat(module35).concat({
          position: 'absolute',
          left: W,
          top: j,
        });
        if (!b) w = 'none';
        return {
          popoverStyle: module35,
          arrow: w,
        };
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t = this,
          o = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null,
          n = this.props,
          u = n.paddingCorner,
          l = n.children,
          s = this.buildPopoverStyle(),
          f = s.popoverStyle,
          p = s.arrow;
        return React.default.createElement(
          module964.default,
          {
            style: f,
            arrow: p,
            paddingCorner: u,
            onLayout: function (o) {
              return t.onPopoverLayout(o);
            },
          },
          o || l
        );
      },
    },
  ]);
  return O;
})(module959.default);

exports.default = O;
O.propTypes = module11.default({}, module959.default.propTypes, {
  popoverStyle: module964.default.propTypes.style,
  fromBounds: PropTypes.default.shape({
    x: PropTypes.default.number.isRequired,
    y: PropTypes.default.number.isRequired,
    width: PropTypes.default.number,
    height: PropTypes.default.number,
  }).isRequired,
  direction: PropTypes.default.oneOf(['down', 'up', 'right', 'left']),
  autoDirection: PropTypes.default.bool,
  directionInsets: PropTypes.default.number,
  align: PropTypes.default.oneOf(['start', 'center', 'end']),
  alignInsets: PropTypes.default.number,
  showArrow: PropTypes.default.bool,
  paddingCorner: module964.default.propTypes.paddingCorner,
});
O.defaultProps = module11.default({}, module959.default.defaultProps, {
  overlayOpacity: 0,
  direction: 'down',
  autoDirection: true,
  align: 'end',
  showArrow: true,
});
