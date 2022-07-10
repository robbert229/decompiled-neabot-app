var c = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, c) {
    if (!c && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = v(c);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = o ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
        else l[u] = t[u];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  b = [
    'style',
    'children',
    'checked',
    'defaultChecked',
    'size',
    'title',
    'titleStyle',
    'checkedIcon',
    'checkedIconStyle',
    'uncheckedIcon',
    'uncheckedIconStyle',
    'disabled',
    'activeOpacity',
    'onChange',
    'onPress',
  ];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var c = new WeakMap(),
    n = new WeakMap();
  return (v = function (t) {
    return t ? n : c;
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

var I = (function (t) {
  module35.default(O, t);

  var PropTypes = O,
    v = S(),
    I = function () {
      var t,
        c = module34.default(PropTypes);

      if (v) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(c, arguments, n);
      } else t = c.apply(this, arguments);

      return module37.default(this, t);
    };

  function O(t) {
    var c;
    module24.default(this, O);
    (c = I.call(this, t)).state = module11.default({}, c.state, {
      checked: true === t.checked || false === t.checked ? t.checked : t.defaultChecked,
    });
    return c;
  }

  module25.default(O, [
    {
      key: 'componentDidUpdate',
      value: function (t) {
        var c = this.props,
          n = c.checked;
        c.disabled;
        if (!(true !== n && false !== n))
          n !== this.state.checked &&
            this.setState({
              checked: n,
            });
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props,
          c = t.style,
          n = t.disabled;
        c = [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
          },
        ].concat(c);
        c = ReactNative.StyleSheet.flatten(c);
        if (n) c.opacity = module945.default.cbDisabledOpacity;
        return c;
      },
    },
    {
      key: 'renderIcon',
      value: function () {
        var t,
          c = this.props,
          n = c.size,
          l = c.checkedIcon,
          o = c.uncheckedIcon,
          u = c.checkedIconStyle,
          f = c.uncheckedIconStyle,
          s = this.state.checked;

        switch (n) {
          case 'lg':
            t = module945.default.cbIconSizeLG;
            break;

          case 'sm':
            t = module945.default.cbIconSizeSM;
            break;

          default:
            t = module945.default.cbIconSizeMD;
        }

        var p = [
          {
            tintColor: s ? module945.default.cbCheckedTintColor : module945.default.cbUncheckedTintColor,
            width: t,
            height: t,
          },
        ].concat(s ? u : f);
        if (!(React.default.isValidElement(l) || (!l && 0 !== l)))
          l = React.default.createElement(ReactNative.Image, {
            key: 'icon',
            style: p,
            source: l,
          });
        if (!(React.default.isValidElement(o) || (!o && 0 !== o)))
          o = React.default.createElement(ReactNative.Image, {
            key: 'icon',
            style: p,
            source: o,
          });
        return s ? l : o;
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props,
          c = t.size,
          n = t.title,
          l = t.titleStyle;

        if (!React.default.isValidElement(n) && (n || '' === n || 0 === n)) {
          var o, u;

          switch (c) {
            case 'lg':
              o = module945.default.cbFontSizeLG;
              u = module945.default.cbTitlePaddingLeftLG;
              break;

            case 'sm':
              o = module945.default.cbFontSizeSM;
              u = module945.default.cbTitlePaddingLeftSM;
              break;

            default:
              o = module945.default.cbFontSizeMD;
              u = module945.default.cbTitlePaddingLeftMD;
          }

          var f = [
            {
              color: module945.default.cbTitleColor,
              fontSize: o,
              overflow: 'hidden',
              paddingLeft: u,
            },
          ].concat(l);
          n = React.default.createElement(
            ReactNative.Text,
            {
              key: 'title',
              style: f,
              numberOfLines: 1,
            },
            n
          );
        }

        return n;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = this.props,
          module25 = l.style,
          u = l.checked,
          f = l.disabled,
          s = l.activeOpacity,
          p = l.onChange,
          k = l.onPress,
          v = c.default(l, b);
        module25 = this.buildStyle();
        if (f) s = module25.opacity;
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          module11.default(
            {
              style: module25,
              disabled: f,
              activeOpacity: s,
              onPress: function (c) {
                t.setState({
                  checked: !u,
                });
                if (p) p(!u);
                if (k) k(c);
              },
            },
            v
          ),
          this.renderIcon(),
          this.renderTitle()
        );
      },
    },
  ]);
  return O;
})(React.Component);

exports.default = I;
I.propTypes = {
  checked: PropTypes.default.bool,
  defaultChecked: PropTypes.default.bool,
  size: PropTypes.default.oneOf(['lg', 'md', 'sm']),
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  titleStyle: ReactNative.Text.propTypes.style,
  checkedIcon: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
  ]),
  checkedIconStyle: ReactNative.Image.propTypes.style,
  uncheckedIcon: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
  ]),
  uncheckedIconStyle: ReactNative.Image.propTypes.style,
  onChange: PropTypes.default.func,
};
I.defaultProps = {
  defaultChecked: false,
  size: 'md',
  checkedIcon: require('./952'),
  uncheckedIcon: require('./953'),
  hitSlop: {
    top: 8,
    bottom: 8,
    left: 8,
    right: 8,
  },
};
