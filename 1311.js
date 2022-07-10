var module1135 = require('./1135'),
  module403 = require('./403'),
  module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module916 = require('./916'),
  module915 = require('./915'),
  module593 = require('./593'),
  module594 = require('./594'),
  module421 = require('./421');

function C() {
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

var module1169 = (function (t) {
  module35.default(w, t);

  var module588 = w,
    module1169 = C(),
    E = function () {
      var t,
        n = module34.default(module588);

      if (module1169) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var n;
    module24.default(this, w);
    (n = E.call(this, t)).state = {
      userNameData: '',
      userImgData: '',
      userId: null,
      name: null,
    };
    return n;
  }

  module25.default(w, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        module593.default.get('userData').then(function (n) {
          t.setState({
            userId: n.userId,
          });
        });
      },
    },
    {
      key: 'pickImage',
      value: function () {
        var t = this;
        module916.default.pickImage().then(function (n) {
          if (200 == n.code)
            module915.default.uploadAvatarFile(t.state.userId, n.data.avatarUrl).then(function (n) {
              if (200 == n.code)
                t.setState({
                  userImgData: n.data.url,
                });
            });
        });
      },
    },
    {
      key: 'userPasswordBtn',
      value: function () {
        var t = this,
          n = module1096.default.loading('', 0);
        module915.default.editUserName(this.state.userId, this.state.userNameData).then(function (l) {
          module403.default.remove(n);
          console.log('===================msg=================' + JSON.stringify(l));

          if (200 == l.code) {
            module1096.default.info(module594.default.t('registeredSuccess'), 1, undefined, false);
            module593.default.get('userData').then(function (n) {
              console.log('--------------------\u83b7\u53d6\u7528\u6237\u540dtags===' + JSON.stringify(n), '================' + JSON.stringify(l));
              if (n) n.userName = t.state.userNameData;
              module593.default.save('userData', n).then(function (n) {
                setTimeout(function () {
                  ReactNative.DeviceEventEmitter.emit('loginIndex');
                  ReactNative.DeviceEventEmitter.emit('myLoginUser');
                  t.props.navigation.dispatch(
                    module421.CommonActions.reset({
                      index: 1,
                      routes: [
                        {
                          name: 'tabNav',
                        },
                      ],
                    })
                  );
                }, 1e3);
              });
            });
          } else module1096.default.info(l.localMsg ? l.localMsg : l.message, 1, undefined, false);
        });
      },
    },
    {
      key: '_onPress',
      value: function () {
        this.refs.InputText.blur();
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
                position: 'relative',
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: b.userImg,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: b.userImgBox,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      t.pickImage();
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.userImgData
                      ? {
                          uri: this.state.userImgData,
                        }
                      : require('./1312'),
                    style: b.userImgUrl,
                  })
                )
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: b.userName,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: b.userNameInput,
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1226'),
                  style: [b.userNameInputIcon, b.userNameInputIconL],
                }),
                React.default.createElement(ReactNative.TextInput, {
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  placeholder: module594.default.t('inputName'),
                  style: b.userNameInputText,
                  value: this.state.userNameData,
                  ref: 'InputText',
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  editable: true,
                  maxLength: 32,
                  placeholderTextColor: '#CCCCCC',
                  enablesReturnKeyAutomatically: true,
                  onChangeText: function (n) {
                    t.setState({
                      userNameData: n,
                    });
                  },
                  autoFocus: true,
                  activeOpacity: 1,
                  onPress: this._onPress.bind(this),
                }),
                this.state.userNameData
                  ? React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: function () {
                          t.setState({
                            userNameData: '',
                          });
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1169'),
                        style: [b.userNameInputIcon, b.userNameInputIconR],
                      })
                    )
                  : null
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: b.isBtn,
              },
              React.default.createElement(
                module1135.default,
                {
                  type: 'primary',
                  style: b.isPasswordBtn,
                  onPress: function () {
                    t.userPasswordBtn();
                  },
                },
                ' ',
                module594.default.t('btnConfirm'),
                ' '
              )
            )
          )
        );
      },
    },
  ]);
  return w;
})(React.default.Component);

exports.userData = module1169;
var b = ReactNative.StyleSheet.create({
    userImg: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    userImgBox: {
      position: 'relative',
      marginTop: module588.default.setSpText(40),
    },
    userImgUrl: {
      width: module588.default.setSpText(155),
      height: module588.default.setSpText(155),
      borderRadius: module588.default.setSpText(155),
    },
    delUserImg: {
      width: module588.default.setSpText(40),
      height: module588.default.setSpText(40),
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(40),
      position: 'absolute',
      right: 0,
      top: 0,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    delUserImgUrl: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    userName: {
      marginTop: module588.default.setSpText(40),
      alignItems: 'center',
      justifyContent: 'center',
    },
    userNameInput: {
      width: module588.default.setSpText(335),
      height: module588.default.setSpText(68),
      borderWidth: 1,
      borderColor: '#0A72FA',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    userNameInputIcon: {
      width: module588.default.setSpText(28),
      height: module588.default.setSpText(28),
    },
    userNameInputText: {
      flex: 1,
      paddingHorizontal: module588.default.setSpText(10),
    },
    userNameInputIconL: {
      marginLeft: 20,
      paddingVertical: 0,
    },
    userNameInputIconR: {
      marginRight: 20,
    },
    isBtn: {
      position: 'absolute',
      width: '100%',
      paddingLeft: module588.default.setSpText(10),
      paddingRight: module588.default.setSpText(10),
      bottom: module588.default.setSpText(10),
    },
  }),
  E = module1169;
exports.default = E;
