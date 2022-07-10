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
    var n = b(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, c, f);
        else l[c] = t[c];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  D = ['style', 'index', 'total'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (b = function (t) {
    return t ? n : o;
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

var P = (function (t) {
  module35.default(P, t);

  var module11 = P,
    PropTypes = w(),
    b = function () {
      var t,
        n = module34.default(module11);

      if (PropTypes) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P() {
    module24.default(this, P);
    return b.apply(this, arguments);
  }

  module25.default(P, [
    {
      key: 'renderDot',
      value: function (t) {
        var o = this.props,
          n = o.dot,
          l = o.carousel;
        return React.default.isValidElement(n)
          ? (n = React.default.cloneElement(n, {
              key: t,
              onPress: function () {
                return l && l.scrollToPage(t);
              },
            }))
          : React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                key: 'dot' + t,
                style: {
                  width: module945.default.carouselDotUseSize,
                  height: module945.default.carouselDotUseSize,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                onPress: function () {
                  return l && l.scrollToPage(t);
                },
              },
              React.default.createElement(ReactNative.View, {
                style: {
                  backgroundColor: module945.default.carouselDotColor,
                  width: module945.default.carouselDotSize,
                  height: module945.default.carouselDotSize,
                  borderRadius: module945.default.carouselDotSize / 2,
                },
              })
            );
      },
    },
    {
      key: 'renderActiveDot',
      value: function (t) {
        var o = this.props,
          n = o.activeDot;
        o.carousel;
        return React.default.isValidElement(n)
          ? (n = React.default.cloneElement(n, {
              key: t,
            }))
          : React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                key: t,
                style: {
                  width: module945.default.carouselDotUseSize,
                  height: module945.default.carouselDotUseSize,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
              React.default.createElement(ReactNative.View, {
                style: {
                  backgroundColor: module945.default.carouselActiveDotColor,
                  width: module945.default.carouselDotSize,
                  height: module945.default.carouselDotSize,
                  borderRadius: module945.default.carouselDotSize / 2,
                },
              })
            );
      },
    },
    {
      key: 'renderDots',
      value: function () {
        for (var t = this.props, o = t.index, n = t.total, l = [], u = 0; u < n; ++u) u == o ? l.push(this.renderActiveDot(u)) : l.push(this.renderDot(u));

        return l;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.style;
        module52.default(t, D);
        return React.default.createElement(
          ReactNative.View,
          {
            style: [k.container, o],
            pointerEvents: 'box-none',
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                flexDirection: 'row',
              },
            },
            this.renderDots()
          )
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = P;
P.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  dot: PropTypes.default.element,
  activeDot: PropTypes.default.element,
});
P.defaultProps = module11.default({}, ReactNative.View.defaultProps);
var k = ReactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 4,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
