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
    var n = O(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, p, f);
        else l[p] = t[p];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  b = ['style', 'children', 'title', 'selected'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (O = function (t) {
    return t ? n : o;
  })(t);
}

function P() {
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

var I = (function (t) {
  module35.default(T, t);

  var PropTypes = T,
    O = P(),
    I = function () {
      var t,
        o = module34.default(PropTypes);

      if (O) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function T() {
    module24.default(this, T);
    return I.apply(this, arguments);
  }

  module25.default(T, [
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            backgroundColor: module945.default.poppItemColor,
            paddingLeft: module945.default.poppItemPaddingLeft,
            paddingRight: module945.default.poppItemPaddingRight,
            paddingTop: module945.default.poppItemPaddingTop,
            paddingBottom: module945.default.poppItemPaddingBottom,
            borderColor: module945.default.poppItemSeparatorColor,
            borderBottomWidth: module945.default.poppItemSeparatorWidth,
            flexDirection: 'row',
            alignItems: 'center',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props.title;

        if ('string' == typeof t || 'number' == typeof t) {
          var o = {
            color: module945.default.poppItemTitleColor,
            fontSize: module945.default.poppItemFontSize,
            overflow: 'hidden',
            flexGrow: 1,
            flexShrink: 1,
          };
          t = React.default.createElement(
            ReactNative.Text,
            {
              style: o,
              numberOfLines: 1,
            },
            t
          );
        }

        return t;
      },
    },
    {
      key: 'renderAccessory',
      value: function () {
        var t = this.props,
          o = t.selected,
          n = {
            width: module945.default.poppAccessoryWidth,
            height: module945.default.poppAccessoryHeight,
            tintColor: module945.default.poppAccessoryCheckColor,
          };
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              paddingLeft: module945.default.poppAccessoryPaddingLeft,
            },
          },
          React.default.createElement(ReactNative.Image, {
            style: n,
            source: require(o ? d[12] : d[13]),
          })
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          l = module52.default(t, b);
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          module11.default(
            {
              style: this.buildStyle(),
            },
            l
          ),
          this.renderTitle(),
          this.renderAccessory()
        );
      },
    },
  ]);
  return T;
})(React.Component);

exports.default = I;
I.propTypes = module11.default({}, ReactNative.TouchableOpacity.propTypes, {
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  selected: PropTypes.default.bool,
});
