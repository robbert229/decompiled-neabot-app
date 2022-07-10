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
    var n = B(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var h = f ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (h && (h.get || h.set)) Object.defineProperty(l, p, h);
        else l[p] = t[p];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  y = [
    'flexDirection',
    'alignItems',
    'justifyContent',
    'margin',
    'marginBottom',
    'marginHorizontal',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginVertical',
    'padding',
    'paddingBottom',
    'paddingHorizontal',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingVertical',
    'backgroundColor',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomWidth',
    'borderColor',
    'borderLeftColor',
    'borderLeftWidth',
    'borderRadius',
    'borderRightColor',
    'borderRightWidth',
    'borderStyle',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopWidth',
    'borderWidth',
  ],
  C = [
    'flexDirection',
    'alignItems',
    'justifyContent',
    'margin',
    'marginBottom',
    'marginHorizontal',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginVertical',
    'padding',
    'paddingBottom',
    'paddingHorizontal',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingVertical',
    'backgroundColor',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomWidth',
    'borderColor',
    'borderLeftColor',
    'borderLeftWidth',
    'borderRadius',
    'borderRightColor',
    'borderRightWidth',
    'borderStyle',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopWidth',
    'borderWidth',
  ],
  L = ['style', 'children', 'arrow', 'paddingCorner', 'onLayout'];

function B(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (B = function (t) {
    return t ? n : o;
  })(t);
}

function T() {
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

var v = (function (t) {
  module35.default(w, t);

  var PropTypes = w,
    B = T(),
    v = function () {
      var t,
        o = module34.default(PropTypes);

      if (B) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var o;
    module24.default(this, w);
    (o = v.call(this, t)).state = {
      width: 0,
      height: 0,
    };
    return o;
  }

  module25.default(w, [
    {
      key: 'filterPopoverStyle',
      value: function (t, l) {
        var f = t.borderBottomLeftRadius,
          p = t.borderBottomRightRadius,
          h = t.borderRadius,
          u = t.borderTopLeftRadius,
          s = t.borderTopRightRadius,
          b = module52.default(t, y),
          c = l
            ? module11.default(
                {
                  borderBottomLeftRadius: f,
                  borderBottomRightRadius: p,
                  borderRadius: h,
                  borderTopLeftRadius: u,
                  borderTopRightRadius: s,
                },
                b
              )
            : module11.default({}, b);

        for (var R in c) undefined === c[R] && delete c[R];

        return c;
      },
    },
    {
      key: 'filterContentStyle',
      value: function (t) {
        module52.default(t, C);
        var o = t.flexDirection,
          l = t.alignItems,
          f = t.justifyContent,
          p = t.margin,
          h = t.marginBottom,
          u = t.marginHorizontal,
          s = t.marginLeft,
          b = t.marginRight,
          c = t.marginTop,
          R = t.marginVertical,
          y = t.padding,
          L = t.paddingBottom,
          B = t.paddingHorizontal,
          T = t.paddingLeft,
          v = t.paddingRight,
          w = t.paddingTop,
          W = t.paddingVertical,
          S = t.backgroundColor,
          x = t.borderBottomColor,
          j = t.borderBottomLeftRadius,
          k = t.borderBottomRightRadius,
          I = t.borderBottomWidth,
          V = t.borderColor,
          P = t.borderLeftColor,
          z = t.borderLeftWidth,
          O = t.borderRadius,
          H = t.borderRightColor,
          D = t.borderRightWidth,
          M = t.borderStyle,
          _ = t.borderTopColor,
          E = t.borderTopLeftRadius,
          q = t.borderTopRightRadius,
          A = t.borderTopWidth,
          F = t.borderWidth,
          G = {
            flexDirection: o,
            alignItems: l,
            justifyContent: f,
            margin: p,
            marginBottom: h,
            marginHorizontal: u,
            marginLeft: s,
            marginRight: b,
            marginTop: c,
            marginVertical: R,
            padding: y,
            paddingBottom: L,
            paddingHorizontal: B,
            paddingLeft: T,
            paddingRight: v,
            paddingTop: w,
            paddingVertical: W,
            backgroundColor: S,
            borderBottomColor: x,
            borderBottomLeftRadius: j,
            borderBottomRightRadius: k,
            borderBottomWidth: I,
            borderColor: V,
            borderLeftColor: P,
            borderLeftWidth: z,
            borderRadius: O,
            borderRightColor: H,
            borderRightWidth: D,
            borderStyle: M,
            borderTopColor: _,
            borderTopLeftRadius: E,
            borderTopRightRadius: q,
            borderTopWidth: A,
            borderWidth: F,
          };

        for (var J in G) undefined === G[J] && delete G[J];

        return G;
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props,
          n = t.style,
          l = t.arrow,
          f = t.paddingCorner,
          module35 = t.headerStyle,
          module37 = t.arrowStyle,
          module34 = t.contentStyle;
        t.popoverStyle;
        n = [
          {
            backgroundColor: module945.default.popoverColor,
            borderColor: module945.default.popoverBorderColor,
            borderRadius: module945.default.popoverBorderRadius,
            borderWidth: module945.default.popoverBorderWidth,
          },
        ].concat(n);
        var s = ReactNative.StyleSheet.flatten(n),
          b = s.backgroundColor,
          y = s.borderColor,
          C = s.borderWidth,
          L = Math.sqrt(98) / 2,
          B = (L = Math.ceil(L / module945.default.pixelSize) * module945.default.pixelSize) + C,
          T = B - 3.5,
          v = f || module945.default.popoverPaddingCorner,
          w = L,
          W = {
            none: {},
            topLeft: {
              top: 0,
              left: 0,
              right: 0,
              height: B,
              paddingTop: T,
              alignItems: 'flex-start',
              paddingLeft: v,
            },
            top: {
              top: 0,
              left: 0,
              right: 0,
              height: B,
              paddingTop: T,
              alignItems: 'center',
            },
            topRight: {
              top: 0,
              left: 0,
              right: 0,
              height: B,
              paddingTop: T,
              alignItems: 'flex-end',
              paddingRight: v,
            },
            rightTop: {
              top: 0,
              bottom: 0,
              right: 0,
              width: B,
              paddingRight: T,
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              paddingTop: v,
            },
            right: {
              top: 0,
              bottom: 0,
              right: 0,
              width: B,
              paddingRight: T,
              alignItems: 'flex-end',
              justifyContent: 'center',
            },
            rightBottom: {
              top: 0,
              bottom: 0,
              right: 0,
              width: B,
              paddingRight: T,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: v,
            },
            bottomRight: {
              bottom: 0,
              left: 0,
              right: 0,
              height: B,
              paddingBottom: T,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingRight: v,
            },
            bottom: {
              bottom: 0,
              left: 0,
              right: 0,
              height: B,
              paddingBottom: T,
              alignItems: 'center',
              justifyContent: 'flex-end',
            },
            bottomLeft: {
              bottom: 0,
              left: 0,
              right: 0,
              height: B,
              paddingBottom: T,
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              paddingLeft: v,
            },
            leftBottom: {
              top: 0,
              bottom: 0,
              left: 0,
              width: B,
              paddingLeft: T,
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              paddingBottom: v,
            },
            left: {
              top: 0,
              bottom: 0,
              left: 0,
              width: B,
              paddingLeft: T,
              alignItems: 'flex-start',
              justifyContent: 'center',
            },
            leftTop: {
              top: 0,
              bottom: 0,
              left: 0,
              width: B,
              paddingLeft: T,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingTop: v,
            },
          },
          S = {
            none: {},
            topLeft: {
              paddingTop: w,
            },
            top: {
              paddingTop: w,
            },
            topRight: {
              paddingTop: w,
            },
            rightTop: {
              paddingRight: w,
            },
            right: {
              paddingRight: w,
            },
            rightBottom: {
              paddingRight: w,
            },
            bottomRight: {
              paddingBottom: w,
            },
            bottom: {
              paddingBottom: w,
            },
            bottomLeft: {
              paddingBottom: w,
            },
            leftBottom: {
              paddingLeft: w,
            },
            left: {
              paddingLeft: w,
            },
            leftTop: {
              paddingLeft: w,
            },
          };
        if (!l) l = 'none';
        var x = l;

        switch (l) {
          case 'topLeft':
          case 'topRight':
            if (v + w > this.state.width / 2) x = 'top';
            break;

          case 'rightTop':
          case 'rightBottom':
            if (v + w > this.state.height / 2) x = 'right';
            break;

          case 'bottomRight':
          case 'bottomLeft':
            if (v + w > this.state.width / 2) x = 'bottom';
            break;

          case 'leftBottom':
          case 'leftTop':
            if (v + w > this.state.height / 2) x = 'left';
        }

        module35 = module11.default(
          {
            position: 'absolute',
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
          W[x]
        );
        module37 = module11.default(
          {
            backgroundColor: b,
            width: 7,
            height: 7,
            borderColor: y,
            borderTopWidth: C,
            borderLeftWidth: C,
          },
          {
            none: {},
            topLeft: {
              transform: [
                {
                  rotate: '45deg',
                },
              ],
            },
            top: {
              transform: [
                {
                  rotate: '45deg',
                },
              ],
            },
            topRight: {
              transform: [
                {
                  rotate: '45deg',
                },
              ],
            },
            rightTop: {
              transform: [
                {
                  rotate: '135deg',
                },
              ],
            },
            right: {
              transform: [
                {
                  rotate: '135deg',
                },
              ],
            },
            rightBottom: {
              transform: [
                {
                  rotate: '135deg',
                },
              ],
            },
            bottomRight: {
              transform: [
                {
                  rotate: '225deg',
                },
              ],
            },
            bottom: {
              transform: [
                {
                  rotate: '225deg',
                },
              ],
            },
            bottomLeft: {
              transform: [
                {
                  rotate: '225deg',
                },
              ],
            },
            leftBottom: {
              transform: [
                {
                  rotate: '315deg',
                },
              ],
            },
            left: {
              transform: [
                {
                  rotate: '315deg',
                },
              ],
            },
            leftTop: {
              transform: [
                {
                  rotate: '315deg',
                },
              ],
            },
          }[x]
        );
        module34 = this.filterContentStyle(s);
        return {
          popoverStyle: [
            this.filterPopoverStyle(s, 'none' === x),
            {
              backgroundColor: 'none' === x ? module945.default.popoverColor : 'rgba(0, 0, 0, 0)',
            },
          ].concat(S[x]),
          contentStyle: module34,
          headerStyle: module35,
          arrowStyle: module37,
        };
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        var o = t.nativeEvent.layout,
          n = o.width,
          l = o.height;
        if (!(n == this.state.width && l == this.state.height))
          this.setState({
            width: n,
            height: l,
          });
        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = this.props,
          f = l.children,
          p = l.arrow,
          h = module52.default(l, L),
          u = this.buildStyle(),
          b = u.popoverStyle,
          R = u.contentStyle,
          y = u.headerStyle,
          C = u.arrowStyle;
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: b,
              onLayout: function (o) {
                return t.onLayout(o);
              },
            },
            h
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: R,
            },
            f
          ),
          p && 'none' !== p
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: y,
                },
                React.default.createElement(ReactNative.View, {
                  style: C,
                })
              )
            : null
        );
      },
    },
  ]);
  return w;
})(React.Component);

exports.default = v;
v.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  arrow: PropTypes.default.oneOf([
    'none',
    'topLeft',
    'top',
    'topRight',
    'rightTop',
    'right',
    'rightBottom',
    'bottomRight',
    'bottom',
    'bottomLeft',
    'leftBottom',
    'left',
    'leftTop',
  ]),
  paddingCorner: PropTypes.default.number,
});
v.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  arrow: 'none',
});
