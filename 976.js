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
    var n = b(o);
    if (n && n.has(t)) return n.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, f, p);
        else u[f] = t[f];
      }

    u.default = t;
    if (n) n.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module957 = require('./957'),
  module977 = require('./977');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (b = function (t) {
    return t ? n : o;
  })(t);
}

function I() {
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
  module35.default(b, t);

  var PropTypes = b,
    module957 = I(),
    P = function () {
      var t,
        o = module34.default(PropTypes);

      if (module957) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function b() {
    module24.default(this, b);
    return P.apply(this, arguments);
  }

  module25.default(b, [
    {
      key: 'onItemPress',
      value: function (t) {
        var o = this.props,
          n = o.items,
          u = o.onSelected;
        this.close(false);
        if (u) u(n[t], t);
      },
    },
    {
      key: 'buildPopoverStyle',
      value: function () {
        var t = this.props,
          n = t.shadow,
          u = {
            backgroundColor: module945.default.poppColor,
            minWidth: module945.default.poppMinWidth,
            maxWidth: module945.default.poppMaxWidth,
            minHeight: module945.default.poppMinHeight,
            maxHeight: module945.default.poppMaxHeight,
          };
        if (n)
          module11.default(u, {
            shadowColor: module945.default.poppShadowColor,
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,
          });
        this.defaultDirectionInsets = module945.default.poppDirectionInsets;
        var f = module32.default(module34.default(b.prototype), 'buildPopoverStyle', this).call(this),
          p = f.popoverStyle,
          s = f.arrow;
        return {
          popoverStyle: (p = [u].concat(p)),
          arrow: s,
        };
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t = this,
          o = this.props,
          n = o.items,
          u = o.selectedIndex,
          f = o.getItemText;
        return module32.default(module34.default(b.prototype), 'renderContent', this).call(
          this,
          React.default.createElement(
            ReactNative.ScrollView,
            null,
            n &&
              n.map(function (o, n) {
                return React.default.createElement(t.constructor.Item, {
                  key: 'item' + n,
                  title: f ? f(o, n) : o,
                  selected: n === u,
                  onPress: function () {
                    return t.onItemPress(n);
                  },
                });
              })
          )
        );
      },
    },
  ]);
  return b;
})(module957.default.PopoverView);

exports.default = O;
O.propTypes = module11.default({}, module957.default.PopoverView.propTypes, {
  items: PropTypes.default.array.isRequired,
  selectedIndex: PropTypes.default.number,
  getItemText: PropTypes.default.func,
  shadow: PropTypes.default.bool,
  onSelected: PropTypes.default.func,
});
O.defaultProps = module11.default({}, module957.default.PopoverView.defaultProps, {
  direction: 'down',
  align: 'center',
  showArrow: false,
  shadow: true,
});
O.Item = module977.default;
