require('./1302');

var module1135 = require('./1135'),
  module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  module588 = require('./588'),
  module915 = require('./915'),
  module593 = require('./593'),
  module916 = require('./916'),
  module594 = require('./594');

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

ReactNative.NativeModules.RNAliyunModule;

var module1299 = (function (t) {
  module35.default(E, t);

  var module588 = E,
    module1299 = I(),
    b = function () {
      var t,
        o = module34.default(module588);

      if (module1299) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function E(t) {
    var o;
    module24.default(this, E);
    (o = b.call(this, t)).state = {
      logouPass: null,
      isShowPass: true,
      userId: null,
    };
    return o;
  }

  module25.default(E, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        module593.default.get('userData').then(function (o) {
          t.setState({
            userId: o.userId,
          });
        });
      },
    },
    {
      key: 'unregister',
      value: function () {
        var t = this;
        if (this.state.logouPass) {
          if (this.state.logouPass && this.state.logouPass.length < 8) {
            module1096.default.info(module594.default.t('passwordLength'), 1, undefined, false);
            return false;
          } else
            return void module915.default.unregister(this.state.userId, this.state.logouPass).then(function (o) {
              if (0 == o.code || 200 == o.code)
                module593.default.delete('userData').then(function (o) {
                  module916.default.logout();
                  module1096.default.info(
                    module594.default.t('logoutSuccess'),
                    1,
                    t.props.navigation.dispatch(
                      module421.CommonActions.reset({
                        index: 1,
                        routes: [
                          {
                            name: 'loginScreen',
                          },
                        ],
                      })
                    ),
                    false
                  );
                });
              else if (10192 == o.code) module1096.default.info(module594.default.t('T1618475932'), 1, undefined, false);
              else module1096.default.info(o.localMsg ? o.localMsg : o.message, 1, undefined, false);
            });
        } else {
          module1096.default.info(module594.default.t('T1618475932'), 1, undefined, false);
          return false;
        }
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
              style: {
                flex: 1,
                backgroundColor: '#F7F9FC',
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: P.logoutTop,
              },
              React.default.createElement(ReactNative.Image, {
                source: require('./1483'),
                style: P.logoutTopImg,
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: P.logoutContent,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: P.logoutContentTxt,
                },
                ' ',
                module594.default.t('logoutPrompt'),
                ' '
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: P.logoutContentInput,
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1330'),
                  style: P.logoutContentInputIcon,
                }),
                React.default.createElement(ReactNative.TextInput, {
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  value: this.state.logouPass,
                  onChangeText: function (o) {
                    t.setState({
                      logouPass: o,
                    });
                  },
                  textContentType: 'password',
                  placeholder: module594.default.t('inputPassword'),
                  keyboardType: 'default',
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  editable: true,
                  maxLength: 32,
                  placeholderTextColor: '#CCCCCC',
                  enablesReturnKeyAutomatically: true,
                  secureTextEntry: this.state.isShowPass,
                  style: P.logouInput,
                }),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      t.setState({
                        isShowPass: (t.state.isShowPass = !t.state.isShowPass),
                      });
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.isShowPass ? require('./1298') : require('./1299'),
                    style: P.logoutContentInputIcon,
                  })
                )
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: P.managementBtnBox,
              },
              React.default.createElement(
                module1135.default,
                {
                  type: 'warning',
                  style: P.managementBtn,
                  onPress: function () {
                    t.unregister();
                  },
                },
                module594.default.t('btnLogout')
              )
            )
          )
        );
      },
    },
  ]);
  return E;
})(React.default.Component);

exports.logoutName = module1299;
var P = ReactNative.StyleSheet.create({
    managementBtn: {
      backgroundColor: '#E95B55',
      borderColor: '#D22148',
      height: module588.default.setSpText(48),
      borderRadius: module588.default.setSpText(16),
    },
    managementBtnBox: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      left: 0,
      paddingHorizontal: module588.default.setSpText(20),
      paddingBottom: module588.default.setSpText(20),
    },
    logoutContentInput: {
      height: module588.default.setSpText(48),
      borderColor: '#0A72FA',
      borderWidth: module588.default.setSpText(1),
      borderRadius: module588.default.setSpText(8),
      backgroundColor: '#E6EFFA',
      marginTop: module588.default.setSpText(20),
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: module588.default.setSpText(20),
    },
    logoutContentInputIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    logouInput: {
      flex: 1,
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: 0,
    },
    logoutContent: {
      paddingHorizontal: module588.default.setSpText(20),
    },
    logoutContentTxt: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
      textAlign: 'center',
      marginTop: module588.default.setSpText(20),
    },
    logoutTop: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: module588.default.setSpText(20),
    },
    logoutTopImg: {
      width: module588.default.setSpText(298),
      height: module588.default.setSpText(134),
    },
  }),
  b = module1299;
exports.default = b;
