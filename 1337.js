var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module588 = require('./588'),
  ReactNative = require('react-native'),
  module594 = require('./594');

function x() {
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

var module1338 = (function (t) {
  module35.default(w, t);

  var module588 = w,
    module1338 = x(),
    y = function () {
      var t,
        l = module34.default(module588);

      if (module1338) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var o;
    module24.default(this, w);
    (o = y.call(this, t)).state = {};
    return o;
  }

  module25.default(w, [
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
              style: h.Box,
            },
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              backgroundColor: '#F7F9FC',
              barStyle: 'dark-content',
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: h.topTitle,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: h.topImg,
                  onPress: function () {
                    t.props.navigation.goBack();
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: h.cancelWifi,
                  },
                  module594.default.t('cancel')
                )
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: h.wifiTitle,
                },
                module594.default.t('noWifi')
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: h.step,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: h.stepContent,
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1338'),
                  style: h.stepImg,
                }),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: h.wifiPrompt,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: h.wifiPromptTxt,
                    },
                    '1. ',
                    module594.default.t('noWifiMeansOne')
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: h.wifiPromptTxt,
                    },
                    '2. ',
                    module594.default.t('noWifiMeansTwo')
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: h.wifiPromptTxt,
                    },
                    '3. ',
                    module594.default.t('noWifiMeansThree')
                  )
                )
              )
            )
          )
        );
      },
    },
  ]);
  return w;
})(React.default.Component);

exports.wifiHelp = module1338;
var h = ReactNative.StyleSheet.create({
    cancelWifi: {
      color: '#236EF0',
      fontSize: module588.default.setSpText(14),
      height: module588.default.setSpText(44),
      width: module588.default.setSpText(44),
    },
    wifiPrompt: {
      width: module588.default.setSpText(260),
      marginTop: module588.default.setSpText(57),
    },
    wifiPromptTxt: {
      color: '#2C2C2C',
      fontSize: module588.default.setSpText(13),
      marginBottom: module588.default.setSpText(10),
    },
    wifiTitle: {
      color: '#2C2C2C',
      fontSize: module588.default.setSpText(15),
    },
    Box: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#F7F9FC',
    },
    topTitle: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: module588.default.setSpText(10),
      paddingTop: module588.default.setSpText(10),
    },
    topImg: {
      position: 'absolute',
      width: module588.default.setSpText(40),
      height: module588.default.setSpText(10),
      left: module588.default.setSpText(20),
    },
    step: {
      position: 'absolute',
      zIndex: 1,
      width: module588.default.setSpText(327),
      height: module588.default.setSpText(573),
      top: '50%',
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
  y = module1338;
exports.default = y;
