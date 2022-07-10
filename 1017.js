require('react-native');

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
    var n = w(o);
    if (n && n.has(t)) return n.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (n) n.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  module945 = require('./945'),
  module957 = require('./957'),
  module1018 = require('./1018');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (w = function (t) {
    return t ? n : o;
  })(t);
}

function b() {
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
  module35.default(h, t);

  var module11 = h,
    PropTypes = b(),
    P = function () {
      var t,
        n = module34.default(module11);

      if (PropTypes) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function h() {
    module24.default(this, h);
    return P.apply(this, arguments);
  }

  module25.default(h, [
    {
      key: 'onItemPress',
      value: function (t) {
        this.close(false);
        if (t.onPress) t.onPress();
      },
    },
    {
      key: 'buildPopoverStyle',
      value: function () {
        this.defaultDirectionInsets = module945.default.apDirectionInsets;
        var t = module32.default(module34.default(h.prototype), 'buildPopoverStyle', this).call(this),
          o = t.popoverStyle,
          n = t.arrow;
        return {
          popoverStyle: (o = [
            {
              backgroundColor: module945.default.apColor,
              paddingVertical: module945.default.apPaddingVertical,
              paddingHorizontal: module945.default.apPaddingHorizontal,
              borderRadius: module945.default.apBorderRadius,
              flexDirection: 'row',
            },
          ].concat(o)),
          arrow: n,
        };
      },
    },
    {
      key: 'renderContent',
      value: function () {
        for (
          var t = this,
            o = this.props.items,
            n = [],
            u = function (u) {
              var l = o[u];
              n.push(
                React.default.createElement(t.constructor.Item, {
                  key: 'item' + u,
                  title: l.title,
                  leftSeparator: 0 !== u,
                  onPress: function () {
                    return t.onItemPress(l);
                  },
                })
              );
            },
            f = 0;
          o && f < o.length;
          ++f
        )
          u(f);

        return module32.default(module34.default(h.prototype), 'renderContent', this).call(this, n);
      },
    },
  ]);
  return h;
})(module957.default.PopoverView);

exports.default = O;
O.propTypes = module11.default({}, module957.default.PopoverView.propTypes, {
  items: PropTypes.default.arrayOf(
    PropTypes.default.shape({
      title: PropTypes.default.string,
      onPress: PropTypes.default.func,
    })
  ).isRequired,
});
O.defaultProps = module11.default({}, module957.default.PopoverView.defaultProps, {
  direction: 'up',
  align: 'center',
  showArrow: true,
});
O.Item = module1018.default;
