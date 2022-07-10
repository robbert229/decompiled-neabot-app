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
    var n = O(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  v = ['style', 'children', 'type', 'title', 'topSeparator', 'bottomSeparator', 'disabled', 'activeOpacity'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (O = function (t) {
    return t ? n : l;
  })(t);
}

function C() {
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
  module35.default(I, t);

  var PropTypes = I,
    O = C(),
    S = function () {
      var t,
        l = module34.default(PropTypes);

      if (O) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, n);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function I() {
    module24.default(this, I);
    return S.apply(this, arguments);
  }

  module25.default(I, [
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props,
          l = t.style;
        l = [
          {
            backgroundColor: 'cancel' === t.type ? module945.default.asCancelItemColor : module945.default.asItemColor,
            paddingLeft: module945.default.asItemPaddingLeft,
            paddingRight: module945.default.asItemPaddingRight,
            paddingTop: module945.default.asItemPaddingTop,
            paddingBottom: module945.default.asItemPaddingBottom,
            minHeight: module945.default.asItemMinHeight,
            overflow: 'hidden',
            justifyContent: 'center',
          },
        ].concat(l);
        return l;
      },
    },
    {
      key: 'renderSeparator',
      value: function (t) {
        var l,
          n = this.props.type,
          o = {
            backgroundColor: 'rgba(0,0,0,0)',
            paddingLeft: module945.default.asItemPaddingLeft,
          };

        switch (
          ((l =
            'cancel' === n
              ? {
                  backgroundColor: module945.default.asCancelItemSeparatorColor,
                  height: module945.default.asCancelItemSeparatorLineWidth,
                }
              : {
                  backgroundColor: module945.default.asItemSeparatorColor,
                  height: module945.default.asItemSeparatorLineWidth,
                }),
          t)
        ) {
          case 'full':
            return React.default.createElement(ReactNative.View, {
              style: l,
            });

          case 'indent':
            return React.default.createElement(
              ReactNative.View,
              {
                style: o,
              },
              React.default.createElement(ReactNative.View, {
                style: l,
              })
            );

          default:
            return null;
        }
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t,
          l = this.props,
          n = l.type,
          o = l.title,
          u = l.disabled;
        if (null === o || undefined === o || React.default.isValidElement(o)) return o;
        else {
          t =
            'cancel' === n
              ? {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  color: module945.default.asCancelItemTitleColor,
                  fontSize: module945.default.asCancelItemFontSize,
                  textAlign: module945.default.asCancelItemTitleAlign,
                  opacity: u ? module945.default.asItemDisabledOpacity : 1,
                  overflow: 'hidden',
                }
              : {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  color: module945.default.asItemTitleColor,
                  fontSize: module945.default.asItemFontSize,
                  textAlign: module945.default.asItemTitleAlign,
                  opacity: u ? module945.default.asItemDisabledOpacity : 1,
                  overflow: 'hidden',
                };
          return React.default.createElement(
            ReactNative.Text,
            {
              style: t,
              numberOfLines: 1,
            },
            o
          );
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.topSeparator,
          u = t.bottomSeparator,
          f = t.disabled,
          c = t.activeOpacity,
          p = module52.default(t, v);
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0)',
            },
          },
          this.renderSeparator(o),
          React.default.createElement(
            ReactNative.TouchableOpacity,
            module11.default(
              {
                style: this.buildStyle(),
                activeOpacity: f ? 1 : c,
              },
              p
            ),
            this.renderTitle()
          ),
          this.renderSeparator(u)
        );
      },
    },
  ]);
  return I;
})(React.Component);

exports.default = S;
S.propTypes = module11.default({}, ReactNative.TouchableOpacity.propTypes, {
  type: PropTypes.default.oneOf(['default', 'cancel']),
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  topSeparator: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.oneOf(['none', 'full', 'indent'])]),
  bottomSeparator: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.oneOf(['none', 'full', 'indent'])]),
  disabled: PropTypes.default.bool,
});
S.defaultProps = module11.default({}, ReactNative.TouchableOpacity.defaultProps, {
  type: 'default',
  topSeparator: 'none',
  bottomSeparator: 'none',
  disabled: false,
});
