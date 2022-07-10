var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

function y() {
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

var h = ReactNative.Dimensions.get('window').width,
  v = function (t) {
    return React.default.createElement(
      ReactNative.TouchableOpacity,
      module11.default({}, t, {
        activeOpacity: 0.95,
      }),
      t.children
    );
  },
  B = (function (t) {
    module35.default(B, t);

    var module11 = B,
      p = y(),
      h = function () {
        var t,
          n = module34.default(module11);

        if (p) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function B(t) {
      var o;
      module24.default(this, B);
      (o = h.call(this, t)).state = {};
      return o;
    }

    module25.default(B, [
      {
        key: 'renderTab',
        value: function (t, n, o, u) {
          var c = o ? '#0A72FA' : '#658DC2';
          return React.default.createElement(
            v,
            {
              style: [w.tabBtn],
              key: t,
              accessible: true,
              accessibilityLabel: t,
              accessibilityTraits: 'button',
              onPress: function () {
                return u(n);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [w.tab, o ? w.tabBottomBorder : ''],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    {
                      color: c,
                    },
                  ],
                },
                t
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            ReactNative.View,
            {
              style: w.tabBarBox,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: w.tabBarLi,
              },
              this.props.tabs.map(function (n, o) {
                var u = t.props.activeTab === o;
                return (t.props.renderTab || t.renderTab)(n, o, u, t.props.goToPage);
              })
            )
          );
        },
      },
    ]);
    return B;
  })(React.Component);

exports.default = B;
var w = ReactNative.StyleSheet.create({
  tabBarBox: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6EFFA',
  },
  tabBarLi: {
    flexDirection: 'row',
    width: 300,
    height: 32,
  },
  tabBtn: {
    flex: 1,
    borderRadius: 16,
    marginLeft: 25,
    height: 40,
  },
  iconBox: {
    margin: 15,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBottomBorder: {
    borderBottomWidth: 2,
    borderBottomColor: '#0A72FA',
  },
  tabs: {
    borderRadius: 2,
    borderColor: '#0086E5',
    borderWidth: 1,
    width: h / 3,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
});
