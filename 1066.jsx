var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = x(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1067 = require('./1067'),
  module1081 = require('./1081'),
  module1130 = require('./1130'),
  module1228 = require('./1228'),
  module594 = require('./594');

require('./606');

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (x = function (t) {
    return t ? o : n;
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

var module1243 = (function (t) {
  module35.default(T, t);

  var module1067 = T,
    x = I(),
    module1238 = function () {
      var t,
        n = module34.default(module1067);

      if (x) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function T(t) {
    var o;
    module24.default(this, T);
    (o = module1238.call(this, t)).state = {
      indexTitle: module594.default.t('indexIndex'),
      newsTitle: module594.default.t('indexNews'),
      myTitle: module594.default.t('indexMy'),
    };
    return o;
  }

  module25.default(T, [
    {
      key: 'storeChange',
      value: function () {
        this.setState({
          indexTitle: module594.default.t('indexIndex'),
          newsTitle: module594.default.t('indexNews'),
          myTitle: module594.default.t('indexMy'),
        });
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.onChangeLanguageUI = ReactNative.DeviceEventEmitter.addListener('onChangeLanguageUI', function (n) {
          setTimeout(function () {
            t.storeChange();
          }, 10);
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.onChangeLanguageUI) this.onChangeLanguageUI.emitter.removeAllListeners('onChangeLanguageUI');
      },
    },
    {
      key: 'render',
      value: function () {
        return (
          <O.Navigator
            screenOptions={function (t) {
              var n = t.route;
              return {
                tabBarIcon: function (t) {
                  var o,
                    u = t.focused;
                  if ('index' === n.name)
                    o = u ? (
                      <ReactNative.Image
                        source={require('./1238')}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    ) : (
                      <ReactNative.Image
                        source={require('./1239')}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    );
                  else if ('school' === n.name)
                    o = u ? (
                      <ReactNative.Image
                        source={require('./1240')}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    ) : (
                      <ReactNative.Image
                        source={require('./1241')}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    );
                  else if ('message' === n.name)
                    o = u ? (
                      <ReactNative.Image
                        source={require('./1242')}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    ) : (
                      <ReactNative.Image
                        source={require('./1243')}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    );
                  return o;
                },
              };
            }}
          >
            <O.Screen
              name="index"
              component={module1130.default}
              options={{
                title: this.state.indexTitle,
              }}
            />
            <O.Screen
              name="school"
              component={module1081.default}
              options={{
                title: this.state.newsTitle,
              }}
            />
            <O.Screen
              name="message"
              component={module1228.default}
              options={{
                title: this.state.myTitle,
              }}
            />
          </O.Navigator>
        );
      },
    },
  ]);
  return T;
})(React.Component);

exports.Navigation = module1243;
var O = module1067.createBottomTabNavigator(),
  T = module1243;
exports.default = T;
