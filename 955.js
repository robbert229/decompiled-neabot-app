var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = P(l);
    if (o && o.has(t)) return o.get(t);
    var n = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(n, s, c);
        else n[s] = t[s];
      }

    n.default = t;
    if (o) o.set(t, n);
    return n;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module956 = require('./956'),
  module975 = require('./975'),
  k = [
    'style',
    'children',
    'disabled',
    'size',
    'value',
    'valueStyle',
    'items',
    'getItemValue',
    'getItemText',
    'pickerType',
    'pickerTitle',
    'editable',
    'icon',
    'iconTintColor',
    'placeholder',
    'placeholderTextColor',
    'onSelected',
    'onPress',
    'onLayout',
  ];

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : l;
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

var S = (function (t) {
  module35.default(x, t);

  var PropTypes = x,
    P = w(),
    module978 = function () {
      var t,
        l = module34.default(PropTypes);

      if (P) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function x() {
    module24.default(this, x);
    return module978.apply(this, arguments);
  }

  module25.default(x, [
    {
      key: 'measureInWindow',
      value: function (t) {
        if (this.refs.selectView) this.refs.selectView.measureInWindow(t);
      },
    },
    {
      key: 'measure',
      value: function (t) {
        if (this.refs.selectView) this.refs.selectView.measure(t);
      },
    },
    {
      key: 'selectedIndex',
      get: function () {
        var t = this.props,
          l = t.value,
          o = t.items,
          n = t.getItemValue;
        if (o instanceof Array)
          if (n) {
            for (var u = 0; u < o.length; ++u) if (n(o[u], u) === l) return u;
          } else for (var s = 0; s < o.length; ++s) if (o[s] === l) return s;
        return -1;
      },
    },
    {
      key: 'valueText',
      get: function () {
        var t = this.props,
          l = t.value,
          o = t.items,
          n = t.getItemValue,
          u = t.getItemText,
          s = l;
        if (u && o instanceof Array)
          if (n) {
            for (var c = 0; c < o.length; ++c)
              if (n(o[c], c) === l) {
                s = u(o[c], c);
                break;
              }
          } else
            for (var f = 0; f < o.length; ++f)
              if (o[f] === l) {
                s = u(o[f], f);
                break;
              }
        return !s || React.default.isValidElement(s) ? s : '' + s;
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t,
          l,
          o,
          n,
          u,
          s,
          c = this.props,
          module34 = c.style,
          p = c.size,
          h = c.disabled;

        switch (p) {
          case 'lg':
            t = module945.default.selectBorderRadiusLG;
            l = module945.default.selectPaddingTopLG;
            o = module945.default.selectPaddingBottomLG;
            n = module945.default.selectPaddingLeftLG;
            u = module945.default.selectPaddingRightLG;
            s = module945.default.selectHeightLG;
            break;

          case 'sm':
            t = module945.default.selectBorderRadiusSM;
            l = module945.default.selectPaddingTopSM;
            o = module945.default.selectPaddingBottomSM;
            n = module945.default.selectPaddingLeftSM;
            u = module945.default.selectPaddingRightSM;
            s = module945.default.selectHeightSM;
            break;

          default:
            t = module945.default.selectBorderRadiusMD;
            l = module945.default.selectPaddingTopMD;
            o = module945.default.selectPaddingBottomMD;
            n = module945.default.selectPaddingLeftMD;
            u = module945.default.selectPaddingRightMD;
            s = module945.default.selectHeightMD;
        }

        module34 = [
          {
            backgroundColor: module945.default.selectColor,
            borderColor: module945.default.selectBorderColor,
            borderWidth: module945.default.selectBorderWidth,
            borderRadius: t,
            paddingTop: l,
            paddingBottom: o,
            paddingLeft: n,
            paddingRight: u,
            height: s,
          },
        ]
          .concat(module34)
          .concat({
            flexDirection: 'row',
            alignItems: 'center',
          });
        if (h)
          module34 = module34.concat({
            opacity: module945.default.btnDisabledOpacity,
          });
        return module34;
      },
    },
    {
      key: 'showPullPicker',
      value: function () {
        var t = this.props,
          l = t.pickerTitle,
          o = t.items,
          n = t.getItemText,
          u = t.onSelected;
        module956.default.show(l, o, this.selectedIndex, u, {
          getItemText: n,
        });
      },
    },
    {
      key: 'showPopoverPicker',
      value: function () {
        var t = this;
        this.measure(function (l, o, n, u, s, c) {
          var f = t.props,
            p = f.items,
            h = f.getItemText,
            y = f.onSelected;
          module975.default.show(
            {
              x: s,
              y: c,
              width: n,
              height: u,
            },
            p,
            t.selectedIndex,
            y,
            {
              getItemText: h,
              align: 'end',
            }
          );
        });
      },
    },
    {
      key: 'showPicker',
      value: function () {
        switch (this.props.pickerType) {
          case 'pull':
            this.showPullPicker();
            break;

          case 'popover':
            this.showPopoverPicker();
            break;

          default:
            if (module945.default.isPad) this.showPopoverPicker();
            else this.showPullPicker();
        }
      },
    },
    {
      key: 'renderValue',
      value: function () {
        var t,
          l,
          o = this.props,
          n = o.value,
          u = o.valueStyle,
          s = o.placeholder,
          c = o.placeholderTextColor;

        switch (o.size) {
          case 'lg':
            t = module945.default.selectFontSizeLG;
            break;

          case 'sm':
            t = module945.default.selectFontSizeSM;
            break;

          default:
            t = module945.default.selectFontSizeMD;
        }

        if (
          ((u = [
            {
              color: module945.default.selectTextColor,
              fontSize: t,
              flexGrow: 1,
              overflow: 'hidden',
            },
          ].concat(u)),
          c || (c = module945.default.selectPlaceholderTextColor),
          null === n || undefined === n)
        ) {
          u = u.concat({
            color: c,
          });
          l = React.default.createElement(
            ReactNative.Text,
            {
              style: u,
              numberOfLines: 1,
              allowFontScaling: false,
            },
            s
          );
        } else {
          var f = this.valueText;
          l = React.default.isValidElement(f)
            ? f
            : React.default.createElement(
                ReactNative.Text,
                {
                  style: u,
                  numberOfLines: 1,
                  allowFontScaling: false,
                },
                f
              );
        }

        return l;
      },
    },
    {
      key: 'renderIcon',
      value: function () {
        var t,
          module11,
          o = this.props,
          n = o.size,
          u = o.icon,
          s = o.iconTintColor;

        switch (n) {
          case 'lg':
            t = module945.default.selectIconSizeLG;
            break;

          case 'sm':
            t = module945.default.selectIconSizeSM;
            break;

          default:
            t = module945.default.selectIconSizeMD;
        }

        if (undefined === s) s = module945.default.selectIconTintColor;
        module11 =
          null === u || undefined === u || 'none' === u
            ? null
            : React.default.isValidElement(u)
            ? u
            : React.default.createElement(ReactNative.Image, {
                style: {
                  width: t,
                  height: t,
                  tintColor: s,
                },
                source: 'default' === u ? require('./978') : u,
              });
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              justifyContent: 'center',
            },
          },
          module11
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props,
          u = n.disabled,
          s = n.editable,
          c = n.onPress,
          f = n.onLayout,
          h = module52.default(n, k),
          v = u ? ReactNative.View : ReactNative.TouchableOpacity;
        return React.default.createElement(
          v,
          module11.default(
            {
              style: this.buildStyle(),
              disabled: u || !s,
              onPress: function (l) {
                return c ? c(l) : t.showPicker();
              },
              onLayout: function (l) {
                t.measure(function (l, o, n, u, s, c) {
                  if (t.popoverView)
                    t.popoverView.updateFromBounds({
                      x: s,
                      y: c,
                      width: n,
                      height: u,
                    });
                });
                if (f) f(l);
              },
            },
            h,
            {
              ref: 'selectView',
            }
          ),
          this.renderValue(),
          this.renderIcon()
        );
      },
    },
  ]);
  return x;
})(React.Component);

exports.default = S;
S.propTypes = module11.default({}, ReactNative.TouchableOpacity.propTypes, {
  size: PropTypes.default.oneOf(['lg', 'md', 'sm']),
  value: PropTypes.default.any,
  valueStyle: ReactNative.Text.propTypes.style,
  items: PropTypes.default.array,
  getItemValue: PropTypes.default.func,
  getItemText: PropTypes.default.func,
  pickerType: PropTypes.default.oneOf(['auto', 'pull', 'popover']),
  pickerTitle: PropTypes.default.string,
  editable: PropTypes.default.bool,
  icon: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
    PropTypes.default.oneOf(['none', 'default']),
  ]),
  iconTintColor: PropTypes.default.string,
  placeholder: PropTypes.default.string,
  placeholderTextColor: PropTypes.default.string,
  onSelected: PropTypes.default.func,
});
S.defaultProps = module11.default({}, ReactNative.TouchableOpacity.defaultProps, {
  size: 'md',
  editable: true,
  icon: 'default',
  pickerType: 'auto',
});
