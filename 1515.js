exports.default = function (t, p) {
  var h, I;

  I = h = (function (t, ...args) {
    module35.default(k, t);

    var h = k,
      PropTypes = b(),
      I = function () {
        var t,
          n = module34.default(h);

        if (PropTypes) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function k() {
      var t;
      module24.default(this, k);
      (t = I.call(this, ...args)).state = {
        icon: undefined,
        selectedIcon: undefined,
      };
      return t;
    }

    module25.default(k, [
      {
        key: 'componentDidMount',
        value: function () {
          this.updateIconSource();
          this.updateSelectedIconSource();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          if (!w(t, this.props)) this.updateIconSource();
          if (!x(t, this.props)) this.updateSelectedIconSource();
        },
      },
      {
        key: 'updateIconSource',
        value: function () {
          var t, o, c, u, l;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (((t = this.props), (o = t.iconName), (c = t.iconSize), (u = t.iconColor), !o)) {
                      s.next = 8;
                      break;
                    }

                    s.next = 4;
                    return regeneratorRuntime.default.awrap(p(o, c, u));

                  case 4:
                    l = s.sent;
                    this.setState({
                      icon: l,
                    });
                    s.next = 9;
                    break;

                  case 8:
                    if (this.state.icon)
                      this.setState({
                        icon: undefined,
                      });

                  case 9:
                  case 'end':
                    return s.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'updateSelectedIconSource',
        value: function () {
          var t, o, c, u, l, s, f;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    if (((t = this.props), (o = t.iconName), (c = t.iconColor), (u = t.iconSize), (l = t.selectedIconName), (s = t.selectedIconColor), !l && !s)) {
                      h.next = 8;
                      break;
                    }

                    h.next = 4;
                    return regeneratorRuntime.default.awrap(p(l || o, u, s || c));

                  case 4:
                    f = h.sent;
                    this.setState({
                      selectedIcon: f,
                    });
                    h.next = 9;
                    break;

                  case 8:
                    if (this.state.selectedIcon)
                      this.setState({
                        selectedIcon: undefined,
                      });

                  case 9:
                  case 'end':
                    return h.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(module1508.TabBarIOS.Item, module11.default({}, this.state, this.props));
        },
      },
    ]);
    return k;
  })(React.PureComponent);

  h.propTypes = {
    iconName: t.isRequired,
    selectedIconName: t,
    iconSize: PropTypes.default.number,
    iconColor: PropTypes.default.any,
    selectedIconColor: PropTypes.default.any,
  };
  h.defaultProps = {
    iconSize: 30,
  };
  return I;
};

var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1516 = require('./1516'),
  module1514 = require('./1514'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = I(n);
    if (o && o.has(t)) return o.get(t);
    var c = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(c, l, s);
        else c[l] = t[l];
      }

    c.default = t;
    if (o) o.set(t, c);
    return c;
  })(require('react')),
  PropTypes = require('prop-types'),
  module1508 = require('./1508');

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (I = function (t) {
    return t ? o : n;
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

var k = ['iconName', 'iconSize', 'iconColor'],
  O = [].concat(k, ['selectedIconName', 'selectedIconColor']),
  P = function (t) {
    return function (n, o) {
      return module1516.default(module1514.default(n, t), module1514.default(o, t));
    };
  },
  w = P(k),
  x = P(O);
