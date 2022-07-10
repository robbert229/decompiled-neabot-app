require('react-native');

var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = w(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, f, s);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  module945 = require('./945'),
  module957 = require('./957'),
  module1021 = require('./1021');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
    return t ? o : n;
  })(t);
}

function P(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = O(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var u = 0;
    return function () {
      return u >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[u++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function O(t, n) {
  if (t) {
    if ('string' == typeof t) return j(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? j(t, n) : undefined;
  }
}

function j(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
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

var k = (function (t) {
  module35.default(w, t);

  var PropTypes = w,
    module957 = S(),
    b = function () {
      var t,
        n = module34.default(PropTypes);

      if (module957) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    module24.default(this, w);
    return b.apply(this, arguments);
  }

  module25.default(w, [
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
        this.defaultDirectionInsets = module945.default.menuDirectionInsets;
        var t = module32.default(module34.default(w.prototype), 'buildPopoverStyle', this).call(this),
          o = t.popoverStyle,
          u = t.arrow,
          f = {
            backgroundColor: module945.default.menuColor,
          };
        if (this.props.shadow)
          module11.default(f, {
            shadowColor: module945.default.menuShadowColor,
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,
          });
        return {
          popoverStyle: (o = [f].concat(o)),
          arrow: u,
        };
      },
    },
    {
      key: 'renderContent',
      value: function () {
        for (var t, n = this, o = this.props.items, u = 'none', f = P(o); !(t = f()).done; ) {
          if (t.value.icon) {
            u = 'empty';
            break;
          }
        }

        for (
          var s = [],
            y = function (t) {
              var l = o[t],
                f = l.title,
                c = l.icon,
                y =
                  0 === t
                    ? {
                        borderTopWidth: 0,
                      }
                    : null;
              s.push(
                React.default.createElement(n.constructor.Item, {
                  key: 'item' + t,
                  style: y,
                  title: f,
                  icon: c || u,
                  onPress: function () {
                    return n.onItemPress(l);
                  },
                })
              );
            },
            h = 0;
          o && h < o.length;
          ++h
        )
          y(h);

        return module32.default(module34.default(w.prototype), 'renderContent', this).call(this, s);
      },
    },
  ]);
  return w;
})(module957.default.PopoverView);

exports.default = k;
k.propTypes = module11.default({}, module957.default.PopoverView.propTypes, {
  items: PropTypes.default.arrayOf(
    PropTypes.default.shape({
      title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
      icon: PropTypes.default.oneOfType([
        PropTypes.default.element,
        PropTypes.default.shape({
          uri: PropTypes.default.string,
        }),
        PropTypes.default.number,
        PropTypes.default.oneOf(['none', 'empty']),
      ]),
      onPress: PropTypes.default.func,
    })
  ).isRequired,
  shadow: PropTypes.default.bool,
});
k.defaultProps = module11.default({}, module957.default.PopoverView.defaultProps, {
  direction: 'down',
  align: 'center',
  showArrow: false,
  shadow: true,
});
k.Item = module1021.default;
