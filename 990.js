require('./945');

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
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
    var n = T(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, c, u);
        else l[c] = t[c];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module991 = require('./991'),
  w = ['style', 'children', 'horizontal', 'contentContainerStyle', 'control', 'onScroll', 'onLayout', 'onChange', 'direction'];

function T(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (T = function (t) {
    return t ? n : o;
  })(t);
}

function x() {
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

var k = (function (t) {
  module35.default(k, t);

  var PropTypes = k,
    module991 = x(),
    T = function () {
      var t,
        o = module34.default(PropTypes);

      if (module991) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function k(t) {
    var o;
    module24.default(this, k);
    (o = T.call(this, t)).state = {
      width: 0,
      height: 0,
      pageIndex: 0,
    };
    o.cardIndex = null;
    o.initByProps();
    o.setupTimer();
    return o;
  }

  module25.default(k, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        if (module32.default(module34.default(k.prototype), 'componentDidMount', this)) module32.default(module34.default(k.prototype), 'componentDidMount', this).call(this);
        setTimeout(function () {
          return t.scrollToCard(t.cardIndex, false);
        }, 50);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (module32.default(module34.default(k.prototype), 'componentWillUnmount', this)) module32.default(module34.default(k.prototype), 'componentWillUnmount', this).call(this);
        this.removeTimer();
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        var o = this.props,
          n = o.children,
          l = o.carousel,
          s = o.direction,
          c = o.startIndex,
          u = o.cycle;

        if (!((n ? (n instanceof Array ? n.length : 1) : 0) == this.pageCount && l == t.carousel && s == t.direction && c == t.startIndex && u == t.cycle)) {
          this.initByProps();
          this.setupTimer();
        }
      },
    },
    {
      key: 'scrollToPage',
      value: function (t) {
        var o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        this.scrollToCard(this.cycle ? t + 1 : t, o);
      },
    },
    {
      key: 'scrollToNextPage',
      value: function () {
        var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
        this.scrollToNextCard(t);
      },
    },
    {
      key: 'initByProps',
      value: function () {
        var t = this.props,
          o = t.children,
          n = t.carousel,
          l = t.direction,
          s = t.startIndex,
          c = t.cycle;
        this.pageCount = o ? (o instanceof Array ? o.length : 1) : 0;
        var u = this.pageCount > 1;
        this.carousel = n && u;
        this.cycle = c && u;
        this.forward = 'forward' === l;
        this.cardCount = u && this.cycle ? this.pageCount + 2 : this.pageCount;
        if (null === this.cardIndex || this.cardIndex >= this.cardCount) this.cardIndex = u && this.cycle ? s + 1 : s;
        this.step = this.forward ? 1 : -1;
      },
    },
    {
      key: 'setupTimer',
      value: function () {
        var t = this;
        this.removeTimer();
        if (this.carousel)
          this.timer = setTimeout(function () {
            t.timer = null;
            t.scrollToNextCard();
          }, this.props.interval);
      },
    },
    {
      key: 'removeTimer',
      value: function () {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
      },
    },
    {
      key: 'scrollToCard',
      value: function (t) {
        var o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
          n = this.state,
          l = n.width,
          s = n.height;
        if (t < 0) t = 0;
        else if (t >= this.cardCount) t = this.cardCount - 1;
        if (this.refs.scrollView)
          this.props.horizontal
            ? this.refs.scrollView.scrollTo({
                x: l * t,
                y: 0,
                animated: o,
              })
            : this.refs.scrollView.scrollTo({
                x: 0,
                y: s * t,
                animated: o,
              });
      },
    },
    {
      key: 'scrollToNextCard',
      value: function () {
        var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
        this.scrollToCard(this.cardIndex + this.step, t);
      },
    },
    {
      key: 'changeCardIndex',
      value: function (t) {
        if (t != this.cardIndex) {
          this.cardIndex = t;
          var o = this.pageCount,
            n = this.cycle ? t - 1 : t;
          if (n < 0) n = o - 1;
          else if (n >= o) n = 0;
          this.setState({
            pageIndex: n,
          });
          if (this.props.onChange) this.props.onChange(n, o);
        }
      },
    },
    {
      key: 'onHorizontalScroll',
      value: function (t) {
        var o = this.state.width,
          n = t.nativeEvent.contentOffset.x,
          l = Math.round(n / o);
        if (this.cycle)
          l <= 0 && n <= 0
            ? ((l = this.cardCount - 2), this.scrollToCard(l, false))
            : l >= this.cardCount - 1 && n >= (this.cardCount - 1) * o && ((l = 1), this.scrollToCard(l, false));
        this.changeCardIndex(l);
        this.setupTimer();
      },
    },
    {
      key: 'onVerticalScroll',
      value: function (t) {
        var o = this.state.height,
          n = t.nativeEvent.contentOffset.y,
          l = Math.round(n / o);
        if (this.cycle)
          l <= 0 && n <= 0
            ? ((l = this.cardCount - 2), this.scrollToCard(l, false))
            : l >= this.cardCount - 1 && n >= (this.cardCount - 1) * o && ((l = 1), this.scrollToCard(l, false));
        this.changeCardIndex(l);
        this.setupTimer();
      },
    },
    {
      key: 'onScroll',
      value: function (t) {
        if (0 != this.state.width && 0 != this.state.height) {
          if (this.props.horizontal) this.onHorizontalScroll(t);
          else this.onVerticalScroll(t);
          if (this.props.onScroll) this.props.onScroll(t);
        }
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        this.setState({
          width: t.nativeEvent.layout.width,
          height: t.nativeEvent.layout.height,
        });
        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'renderCards',
      value: function () {
        var t = this.state,
          o = t.width,
          n = t.height,
          l = this.props.children;
        if (o <= 0 || n <= 0 || !l) return null;
        if (!(l instanceof Array)) l = [l];
        var s = [],
          c = {
            width: o,
            height: n,
            overflow: 'hidden',
          };
        if (this.cycle)
          s.push(
            React.default.createElement(
              ReactNative.View,
              {
                style: c,
                key: 'card-head',
              },
              l[l.length - 1]
            )
          );
        l.map(function (t, o) {
          return s.push(
            React.default.createElement(
              ReactNative.View,
              {
                style: c,
                key: 'card' + o,
              },
              t
            )
          );
        });
        if (this.cycle)
          s.push(
            React.default.createElement(
              ReactNative.View,
              {
                style: c,
                key: 'card-tail',
              },
              l[0]
            )
          );
        return s;
      },
    },
    {
      key: 'render',
      value: function () {
        var t,
          l = this,
          s = this.props,
          c = s.style,
          u = s.horizontal,
          h = s.contentContainerStyle,
          f = s.control,
          y = module52.default(s, w),
          C = this.state,
          T = C.width,
          x = C.height,
          k = C.pageIndex;

        if (T > 0 && x > 0) {
          t = u
            ? {
                width: T * this.cardCount,
                height: x,
              }
            : {
                width: T,
                height: x * this.cardCount,
              };
          h = [].concat(h).concat(t);
        }

        if (React.default.isValidElement(f))
          f = React.default.cloneElement(f, {
            index: k,
            total: this.pageCount,
            carousel: this,
          });
        else if (f)
          f = React.default.createElement(this.constructor.Control, {
            index: k,
            total: this.pageCount,
            carousel: this,
          });
        return React.default.createElement(
          ReactNative.View,
          {
            style: [
              c,
              {
                alignItems: 'stretch',
              },
            ],
          },
          React.default.createElement(
            ReactNative.ScrollView,
            module11.default(
              {
                style: {
                  flex: 1,
                },
                horizontal: u,
                contentContainerStyle: h,
              },
              y,
              {
                ref: 'scrollView',
                onScroll: function (t) {
                  return l.onScroll(t);
                },
                onLayout: function (t) {
                  return l.onLayout(t);
                },
              }
            ),
            this.renderCards()
          ),
          f
        );
      },
    },
  ]);
  return k;
})(React.Component);

exports.default = k;
k.propTypes = module11.default({}, ReactNative.ScrollView.propTypes, {
  carousel: PropTypes.default.bool,
  interval: PropTypes.default.number,
  direction: PropTypes.default.oneOf(['forward', 'backward']),
  startIndex: PropTypes.default.number,
  cycle: PropTypes.default.bool,
  control: PropTypes.default.oneOfType([PropTypes.default.bool, PropTypes.default.element]),
  onChange: PropTypes.default.func,
});
k.defaultProps = module11.default({}, ReactNative.ScrollView.defaultProps, {
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  alwaysBounceHorizontal: false,
  alwaysBounceVertical: false,
  bounces: false,
  automaticallyAdjustContentInsets: false,
  scrollEventThrottle: 200,
  scrollsToTop: false,
  carousel: true,
  interval: 3e3,
  direction: 'forward',
  startIndex: 0,
  cycle: true,
  control: false,
});
k.Control = module991.default;
