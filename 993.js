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
    var o = L(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var h = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (h && (h.get || h.set)) Object.defineProperty(s, c, h);
        else s[c] = t[c];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module994 = require('./994'),
  I = ['style', 'justifyItem', 'indicatorType', 'indicatorPosition', 'indicatorLineColor', 'indicatorPositionPadding', 'animated', 'activeIndex', 'onChange', 'children'],
  x = [
    'style',
    'justifyItem',
    'indicatorType',
    'indicatorPosition',
    'indicatorLineColor',
    'indicatorPositionPadding',
    'animated',
    'activeIndex',
    'onChange',
    'onLayout',
    'children',
  ];

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (L = function (t) {
    return t ? o : n;
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
    module994 = W(),
    L = function () {
      var t,
        n = module34.default(PropTypes);

      if (module994) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t) {
    var n;
    module24.default(this, b);
    (n = L.call(this, t))._activeIndex = n.props.activeIndex ? n.props.activeIndex : 0;
    n._buttonsLayout = n.makeArray([], t.children);
    n._itemsLayout = n.makeArray([], t.children);
    n._itemsAddWidth = n.makeArray([], t.children, 0);
    n._indicatorX = null;
    n._indicatorWidth = null;
    n._scrollViewWidth = 0;
    return n;
  }

  module25.default(b, [
    {
      key: 'componentDidUpdate',
      value: function (t) {
        var n = this.makeArray(this._itemsLayout, this.props.children);

        if (n.length != this._itemsLayout.length) {
          this._buttonsLayout = this.makeArray(this._buttonsLayout, this.props.children);
          this._itemsLayout = n;
          this._itemsAddWidth = this.makeArray(this._itemsAddWidth, this.props.children, 0);
        }

        if (this.props.activeIndex || 0 === this.props.activeIndex) this._activeIndex = this.props.activeIndex;
        if (this._activeIndex >= n.length) this._activeIndex = n.length - 1;
        this.updateIndicator();
      },
    },
    {
      key: 'activeIndex',
      get: function () {
        return this._activeIndex;
      },
      set: function (t) {
        if (this._activeIndex != t) {
          this._activeIndex = t;
          this.updateIndicator();
          this.forceUpdate();
          if (this.props.onChange) this.props.onChange(t);
        }
      },
    },
    {
      key: 'indicatorXValue',
      get: function () {
        switch (this.props.indicatorType) {
          case 'boxWidth':
            return this._buttonsLayout[this._activeIndex].x;

          case 'itemWidth':
            return this._buttonsLayout[this._activeIndex].x + this._itemsLayout[this._activeIndex].x + this._itemsAddWidth[this._activeIndex] / 2;

          case 'customWidth':
            return this.props.indicatorWidth > this._itemsLayout[this.activeIndex].width
              ? this._buttonsLayout[this._activeIndex].x + this._itemsLayout[this._activeIndex].x
              : this._buttonsLayout[this._activeIndex].x + (this._buttonsLayout[this._activeIndex].width - this.props.indicatorWidth) / 2;
        }

        return 0;
      },
    },
    {
      key: 'indicatorWidthValue',
      get: function () {
        switch (this.props.indicatorType) {
          case 'boxWidth':
            return this._buttonsLayout[this.activeIndex].width;

          case 'itemWidth':
            return this._itemsLayout[this.activeIndex].width - this._itemsAddWidth[this._activeIndex];

          case 'customWidth':
            return this.props.indicatorWidth > this._itemsLayout[this.activeIndex].width ? this._itemsLayout[this.activeIndex].width : this.props.indicatorWidth;
        }

        return 0;
      },
    },
    {
      key: 'makeArray',
      value: function (t, n) {
        var o =
          arguments.length > 2 && undefined !== arguments[2]
            ? arguments[2]
            : {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
              };
        return n instanceof Array
          ? n.map(function (n, s) {
              return s < t.length ? t[s] : o;
            })
          : n
          ? [t.length > 0 ? t[0] : o]
          : [];
      },
    },
    {
      key: 'checkInitIndicator',
      value: function () {
        if (this._indicatorX && this._indicatorWidth) {
          this._indicatorX.setValue(this.indicatorXValue);

          this._indicatorWidth.setValue(this.indicatorWidthValue);
        } else {
          this._indicatorX = new ReactNative.Animated.Value(this.indicatorXValue);
          this._indicatorWidth = new ReactNative.Animated.Value(this.indicatorWidthValue);
        }

        this.forceUpdate();
      },
    },
    {
      key: 'updateIndicator',
      value: function () {
        if (this._indicatorX && this._indicatorWidth) {
          var t = this.indicatorXValue,
            n = this.indicatorWidthValue;

          if (
            (t !== this._saveIndicatorXValue || n !== this._saveIndicatorWidthValue) &&
            ((this._saveIndicatorXValue = t),
            (this._saveIndicatorWidthValue = n),
            this.props.animated
              ? ReactNative.Animated.parallel([
                  ReactNative.Animated.spring(this._indicatorX, {
                    toValue: t,
                    friction: 9,
                    useNativeDriver: false,
                  }),
                  ReactNative.Animated.spring(this._indicatorWidth, {
                    toValue: n,
                    friction: 9,
                    useNativeDriver: false,
                  }),
                ]).start()
              : (this._indicatorX.setValue(t), this._indicatorWidth.setValue(n)),
            this.props.autoScroll && this.refs.scrollView)
          ) {
            var o = 0;

            this._buttonsLayout.map(function (t) {
              o += t.width;
              return o;
            });

            var s = t + n / 2 - this._scrollViewWidth / 2;
            if (s < 0) s = 0;
            else if (s > o - this._scrollViewWidth) s = o - this._scrollViewWidth;
            this.refs.scrollView.scrollTo({
              x: s,
              y: 0,
              animated: this.props.animated,
            });
          }
        }
      },
    },
    {
      key: 'isEqualLayout',
      value: function (t, n) {
        return t.x == n.x && t.y == n.y && t.width == n.width && t.height == n.height;
      },
    },
    {
      key: 'onButtonPress',
      value: function (t) {
        this.activeIndex = t;
      },
    },
    {
      key: 'onButtonLayout',
      value: function (t, n) {
        var o = n.nativeEvent.layout;

        if (!this.isEqualLayout(o, this._buttonsLayout[t])) {
          this._buttonsLayout[t] = o;
          this.checkInitIndicator();
        }
      },
    },
    {
      key: 'onItemLayout',
      value: function (t, n) {
        var o = n.nativeEvent.layout;

        if (!this.isEqualLayout(o, this._itemsLayout[t])) {
          this._itemsLayout[t] = o;
          this.checkInitIndicator();
        }
      },
    },
    {
      key: 'onScrollViewLayout',
      value: function (t) {
        this._scrollViewWidth = t.nativeEvent.layout.width;
        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'renderItem',
      value: function (t, n) {
        var o = this,
          s = t.props.onLayout;
        return React.default.cloneElement(t, {
          active: n === this.activeIndex,
          onLayout: function (t) {
            o.onItemLayout(n, t);
            if (s) s(t);
          },
          onAddWidth: function (t) {
            if (t != o._itemsAddWidth[n]) {
              o._itemsAddWidth[n] = t;
              o.forceUpdate();
            }
          },
        });
      },
    },
    {
      key: 'renderIndicator',
      value: function () {
        var t = this.props,
          n = t.indicatorLineColor,
          o = t.indicatorLineWidth,
          s = t.indicatorPositionPadding,
          u = {
            backgroundColor: n || module945.default.sbIndicatorLineColor,
            position: 'absolute',
            left: this._indicatorX,
            width: this._indicatorWidth,
            height: o || 0 === o ? o : module945.default.sbIndicatorLineWidth,
          };
        if ('top' == this.props.indicatorPosition) u.top = s || 0 === s ? s : module945.default.sbIndicatorPositionPadding;
        else u.bottom = s || 0 === s ? s : module945.default.sbIndicatorPositionPadding;
        return React.default.createElement(ReactNative.Animated.View, {
          style: u,
        });
      },
    },
    {
      key: 'renderFixed',
      value: function () {
        var t = this,
          s = this.props,
          module25 = s.style,
          c = s.children,
          h = module52.default(s, I);
        module25 = [
          {
            backgroundColor: module945.default.sbColor,
            flexDirection: 'row',
          },
        ].concat(module25);
        if (c) {
          if (!(c instanceof Array)) c = [c];
        } else c = [];
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: module25,
            },
            h
          ),
          c.map(function (n, o) {
            return React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                key: o,
                style: {
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                onPress: function () {
                  return t.onButtonPress(o);
                },
                onLayout: function (n) {
                  return t.onButtonLayout(o, n);
                },
              },
              t.renderItem(n, o)
            );
          }),
          this.renderIndicator()
        );
      },
    },
    {
      key: 'renderScrollable',
      value: function () {
        var t = this,
          s = this.props,
          module25 = s.style,
          c = s.children,
          h = module52.default(s, x);
        module25 = [
          {
            backgroundColor: module945.default.sbColor,
          },
        ].concat(module25);
        if (c) {
          if (!(c instanceof Array)) c = [c];
        } else c = [];
        return React.default.createElement(
          ReactNative.ScrollView,
          module11.default(
            {
              style: module25,
              horizontal: true,
              showsHorizontalScrollIndicator: false,
              scrollsToTop: false,
              removeClippedSubviews: false,
              onLayout: function (n) {
                return t.onScrollViewLayout(n);
              },
              ref: 'scrollView',
            },
            h
          ),
          c.map(function (n, o) {
            return React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: {
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                key: o,
                onPress: function () {
                  return t.onButtonPress(o);
                },
                onLayout: function (n) {
                  return t.onButtonLayout(o, n);
                },
              },
              t.renderItem(n, o)
            );
          }),
          this.renderIndicator()
        );
      },
    },
    {
      key: 'render',
      value: function () {
        return 'scrollable' === this.props.justifyItem ? this.renderScrollable() : this.renderFixed();
      },
    },
  ]);
  return b;
})(React.Component);

exports.default = b;
b.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  justifyItem: PropTypes.default.oneOf(['fixed', 'scrollable']),
  indicatorType: PropTypes.default.oneOf(['none', 'boxWidth', 'itemWidth', 'customWidth']),
  indicatorPosition: PropTypes.default.oneOf(['top', 'bottom']),
  indicatorLineColor: PropTypes.default.string,
  indicatorWidth: PropTypes.default.number,
  indicatorLineWidth: PropTypes.default.number,
  indicatorPositionPadding: PropTypes.default.number,
  animated: PropTypes.default.bool,
  autoScroll: PropTypes.default.bool,
  activeIndex: PropTypes.default.number,
  onChange: PropTypes.default.func,
});
b.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  justifyItem: 'fixed',
  indicatorType: 'itemWidth',
  indicatorWidth: 20,
  indicatorPosition: 'bottom',
  animated: true,
  autoScroll: true,
});
b.Item = module994.default;
