var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module588 = require('./588'),
  ReactNative = require('react-native'),
  module594 = require('./594'),
  module1181 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('./1181')),
  module593 = require('./593');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
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

var b = (function (t) {
  module35.default(w, t);

  var module588 = w,
    h = y(),
    module1340 = function () {
      var t,
        n = module34.default(module588);

      if (h) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var n;
    module24.default(this, w);
    (n = module1340.call(this, t)).state = {
      isAskGps: false,
    };
    return n;
  }

  module25.default(w, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this,
          n = this.props.navigation.navigate;
        this.locationDenied = ReactNative.DeviceEventEmitter.addListener('locationDenied', function (n) {
          console.log('locationDenied \u76d1\u542c' + n);
          if ('never_ask_again' == n)
            Modal.alert(module594.default.t('Tips'), module594.default.t('agreeLocation'), [
              {
                text: module594.default.t('cancel'),
                style: 'cancel',
              },
              {
                text: module594.default.t('toTravelTo'),
                onPress: function () {
                  t.setState({
                    isNerverAskLocation: true,
                  });
                  module1181.default.openSettings();
                },
              },
            ]);
          else t.props.navigation.goBack();
        });
        this.locationGranted = ReactNative.DeviceEventEmitter.addListener('locationGranted', function (t) {
          console.log('locationGranted \u76d1\u542c' + t);
          n('networkList');
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.locationDenied.emitter.removeAllListeners('locationDenied');
        this.locationGranted.emitter.removeAllListeners('locationGranted');

        this.setState = function (t, n) {};
      },
    },
    {
      key: 'checkLocationPermission',
      value: function () {
        var t = this;
        return regeneratorRuntime.default.async(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  module593.default.get('android_location_never_ask_again').then(function (n) {
                    Premissions.checkLocation(
                      function (n) {
                        module593.default.save('android_location_never_ask_again', 'granted');
                        t.props.navigation.navigate('networkList');
                      },
                      function (t) {},
                      undefined,
                      n
                    );
                  });

                case 1:
                case 'end':
                  return n.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
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
            ReactNative.View,
            {
              style: k.Box,
            },
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              backgroundColor: '#F7F9FC',
              barStyle: 'dark-content',
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: k.topTitleBack,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: k.topImg,
                  onPress: function () {
                    t.props.navigation.goBack();
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: k.cancelLocation,
                  },
                  module594.default.t('cancel')
                )
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  k.topTitle,
                  {
                    zIndex: 10,
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [k.textTitle],
                },
                module594.default.t('useLocationTitle')
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: k.step,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: k.stepContent,
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1340'),
                  style: k.stepImg,
                }),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: k.wifiPrompt,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: k.locationPromptTxt,
                    },
                    module594.default.t('useLocation')
                  )
                )
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: k.open,
                onPress: function () {
                  t.checkLocationPermission();
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: k.wifiPromptTxt,
                },
                module594.default.t('locationYes')
              )
            )
          )
        );
      },
    },
  ]);
  return w;
})(React.default.Component);

exports.location = b;
var k = ReactNative.StyleSheet.create({
    cancelLocation: {
      color: '#236EF0',
      fontSize: module588.default.setSpText(14),
      height: module588.default.setSpText(44),
      width: module588.default.setSpText(54),
    },
    topImg: {
      position: 'absolute',
      width: module588.default.setSpText(70),
      height: module588.default.setSpText(20),
      left: module588.default.setSpText(20),
    },
    cancel: {
      position: 'absolute',
      width: module588.default.setSpText(116),
      height: module588.default.setSpText(40),
      borderRadius: module588.default.setSpText(16),
      bottom: module588.default.setSpText(35),
      left: module588.default.setSpText(40),
      backgroundColor: '#0A72FA',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    open: {
      position: 'absolute',
      width: '80%',
      height: module588.default.setSpText(40),
      borderRadius: module588.default.setSpText(16),
      bottom: module588.default.setSpText(50),
      right: module588.default.setSpText(40),
      backgroundColor: '#0A72FA',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    locationPromptTxt: {
      color: '#2C2C2C',
      fontSize: module588.default.setSpText(15),
      marginBottom: module588.default.setSpText(10),
    },
    wifiPrompt: {
      width: module588.default.setSpText(260),
      marginTop: module588.default.setSpText(57),
    },
    wifiPromptTxt: {
      color: '#ffffff',
      fontSize: module588.default.setSpText(16),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textTitle: {
      color: '#2C2C2C',
      fontSize: module588.default.setSpText(27),
    },
    Box: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#F7F9FC',
    },
    topTitleBack: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: module588.default.setSpText(30),
      paddingTop: module588.default.setSpText(20),
    },
    topTitle: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: module588.default.setSpText(10),
      paddingTop: module588.default.setSpText(10),
    },
    step: {
      position: 'absolute',
      zIndex: 1,
      width: module588.default.setSpText(327),
      height: module588.default.setSpText(473),
      top: '58%',
      left: '50%',
      marginLeft: module588.default.setSpText(-163.5),
      marginTop: module588.default.setSpText(-286.5),
      backgroundColor: '#fff',
      borderBottomLeftRadius: module588.default.setSpText(24),
      borderBottomRightRadius: module588.default.setSpText(24),
      borderTopEndRadius: module588.default.setSpText(24),
      borderTopStartRadius: module588.default.setSpText(24),
    },
    stepContent: {
      flex: 1,
      position: 'relative',
      alignItems: 'center',
    },
    stepImg: {
      width: module588.default.setSpText(125.67),
      height: module588.default.setSpText(107.67),
      marginTop: module588.default.setSpText(62),
    },
  }),
  w = b;
exports.default = w;
