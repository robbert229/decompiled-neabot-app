var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1082 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = O(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./1082')),
  module1114 = require('./1114'),
  module1405 = require('./1405'),
  module1407 = require('./1407'),
  module594 = require('./594');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (O = function (t) {
    return t ? u : n;
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

var j = (function (t) {
  module35.default(E, t);

  var O = E,
    j = P(),
    D = function () {
      var t,
        n = module34.default(O);

      if (j) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function E(t) {
    var u;
    module24.default(this, E);
    (u = D.call(this, t)).state = {
      isHead: false,
    };
    return u;
  }

  module25.default(E, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          ReactNative.SafeAreaView,
          {
            style: {
              flex: 1,
              backgroundColor: '#F7F9FC',
              position: 'relative',
            },
          },
          React.default.createElement(
            module1082.default,
            {
              locked: true,
              onScroll: function (t) {},
              onChangeTab: function (t) {
                t.i;
                if (!(0 == t.i)) 1 == t.i ? ReactNative.DeviceEventEmitter.emit('getData') : t.i;
              },
              initialPage: 0,
              renderTabBar: function () {
                return React.default.createElement(module1114.default, null);
              },
            },
            React.default.createElement(module1405.default, {
              tabLabel: module594.default.t('cleanTheList'),
              propsData: this.props,
            }),
            React.default.createElement(module1407.default, {
              tabLabel: module594.default.t('doNotDisturbMode'),
              propsData: this.props,
            })
          )
        );
      },
    },
  ]);
  return E;
})(React.default.Component);

exports.reservation = j;
var D = j;
exports.default = D;
