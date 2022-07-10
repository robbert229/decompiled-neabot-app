exports.default = function (t) {
  var k, x;

  x = k = (function (v) {
    module35.default(F, v);

    var k = F,
      w = S(),
      x = function () {
        var t,
          n = module34.default(k);

        if (w) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function F() {
      module24.default(this, F);
      return x.apply(this, arguments);
    }

    module25.default(F, [
      {
        key: 'render',
        value: function () {
          var l = this.props,
            u = l.style,
            c = l.iconStyle,
            s = l.children,
            f = module52.default(l, O),
            v = module1514.default(f, R, 'style', 'name', 'size', 'color'),
            k = module1514.default(f, C),
            S = module1513.default(f, Object.keys(v), Object.keys(k), 'iconStyle', 'borderRadius', 'backgroundColor');
          v.style = c ? [j.icon, c] : j.icon;
          var w = module1514.default(this.props, 'color'),
            x = module1514.default(this.props, 'backgroundColor', 'borderRadius');
          return React.default.createElement(
            module1508.TouchableHighlight,
            module11.default(
              {
                style: [j.touchable, x],
              },
              k
            ),
            React.default.createElement(
              module1508.View,
              module11.default(
                {
                  style: [j.container, x, u],
                },
                S
              ),
              React.default.createElement(t, v),
              module1512.default(s)
                ? React.default.createElement(
                    module1508.Text,
                    {
                      style: [j.text, w],
                    },
                    s
                  )
                : s
            )
          );
        },
      },
    ]);
    return F;
  })(React.PureComponent);

  k.propTypes = {
    backgroundColor: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    borderRadius: PropTypes.default.number,
    color: PropTypes.default.any,
    size: PropTypes.default.number,
    iconStyle: PropTypes.default.any,
    style: PropTypes.default.any,
    children: PropTypes.default.node,
  };
  k.defaultProps = {
    backgroundColor: w,
    borderRadius: 5,
    color: 'white',
    size: 20,
  };
  return x;
};

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1512 = require('./1512'),
  module1513 = require('./1513'),
  module1514 = require('./1514'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = k(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  module1508 = require('./1508'),
  O = ['style', 'iconStyle', 'children'];

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (k = function (t) {
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

var j = module1508.StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 8,
    },
    touchable: {
      overflow: 'hidden',
    },
    icon: {
      marginRight: 10,
    },
    text: {
      fontWeight: '600',
      backgroundColor: 'transparent',
    },
  }),
  w = '#007AFF',
  R = ['ellipsizeMode', 'numberOfLines', 'textBreakStrategy', 'selectable', 'suppressHighlighting', 'allowFontScaling', 'adjustsFontSizeToFit', 'minimumFontScale'],
  C = [
    'accessible',
    'accessibilityLabel',
    'accessibilityHint',
    'accessibilityComponentType',
    'accessibilityRole',
    'accessibilityStates',
    'accessibilityTraits',
    'onFocus',
    'onBlur',
    'disabled',
    'onPress',
    'onPressIn',
    'onPressOut',
    'onLayout',
    'onLongPress',
    'nativeID',
    'testID',
    'delayPressIn',
    'delayPressOut',
    'delayLongPress',
    'activeOpacity',
    'underlayColor',
    'selectionColor',
    'onShowUnderlay',
    'onHideUnderlay',
    'hasTVPreferredFocus',
    'tvParallaxProperties',
  ];
