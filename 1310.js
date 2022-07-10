var module1135 = require('./1135'),
  module1245 = require('./1245'),
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
  module593 = require('./593'),
  module916 = require('./916'),
  module915 = require('./915'),
  module594 = require('./594');

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
  module35.default(A, t);

  var module1169 = A,
    N = C(),
    E = function () {
      var t,
        s = module34.default(module1169);

      if (N) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(s, arguments, l);
      } else t = s.apply(this, arguments);

      return module37.default(this, t);
    };

  function A(t) {
    var s;
    module24.default(this, A);
    (s = E.call(this, t)).state = {
      passwordA: '',
      passwordB: '',
      isNullImg: null,
      isNullImgUrl: require('./1169'),
      dataUser: s.props.route.params.data,
    };
    return s;
  }

  module25.default(A, [
    {
      key: 'ispasswordBval',
      value: function () {
        if (this.state.passwordB && this.state.passwordB.length > 1)
          this.setState({
            isNullImg: this.state.isNullImgUrl,
          });
        else
          this.setState({
            isNullImg: null,
          });
      },
    },
    {
      key: 'userPasswordBtn',
      value: function () {
        var t = this,
          s = this.props.navigation.navigate;

        if (this.state.passwordA.length < 8) {
          module1096.default.info(module594.default.t('passwordA'), 1, undefined, false);
          return false;
        }

        if (this.state.passwordB != this.state.passwordA) {
          module1096.default.info(module594.default.t('passwordB'), 1, undefined, false);
          return false;
        }

        if ('ios' == ReactNative.Platform.OS) this.state.dataUser.registerFrom = '1';
        if ('android' == ReactNative.Platform.OS) this.state.dataUser.registerFrom = '2';
        var l = module1096.default.loading('', 0);
        console.log(
          '======',
          this.state.dataUser.userName,
          Number(this.state.dataUser.UrlType),
          this.state.passwordB,
          this.state.dataUser.areaCode.toString(),
          this.state.dataUser.registerFrom
        );
        module915.default
          .registerAccount(
            this.state.dataUser.userName,
            Number(this.state.dataUser.UrlType),
            this.state.passwordB,
            this.state.dataUser.areaCode.toString(),
            this.state.dataUser.registerFrom
          )
          .then(function (u) {
            if (200 == u.code) {
              var f = u.data;
              module916.default.authCodeLogin(f.aliAuthenticationToken).then(function () {
                module403.default.remove(l);
                console.log('------\u6ce8\u518c\u5b8c\u6210\u4fee\u6539\u5bc6\u7801\u540e\u6570\u636e1111111----' + JSON.stringify(t.state.dataUser));
                f.areaName = undefined != t.state.dataUser.areaName ? t.state.dataUser.areaName.toString() : '';
                f.isoCode = undefined != t.state.dataUser.isoCode ? t.state.dataUser.isoCode.toString() : 1;
                module593.default.save('userData', f);
                module593.default.save('localUserData', f);
                s('userData');
              });
            } else {
              module403.default.remove(l);
              if (0 == u.code) module1096.default.info(u.localMsg ? u.localMsg : u.message ? u.message : u.code, 1, undefined, false);
              else module1096.default.info(u.localMsg ? u.localMsg : u.message, 1, undefined, false);
            }
          });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
        this.props.navigation.navigate;
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
                backgroundColor: '#F5F6FA',
              },
            },
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              backgroundColor: '#fff',
              barStyle: 'dark-content',
            }),
            React.default.createElement(
              ReactNative.ScrollView,
              {
                style: {
                  flex: 1,
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    paddingRight: module588.default.setSpText(20),
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      marginTop: module588.default.setSpText(10),
                    },
                  },
                  React.default.createElement(module1245.default, {
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    placeholder: module594.default.t('inputPassword'),
                    style: b.inputTxt,
                    type: 'text',
                    value: this.state.passwordA,
                    editable: true,
                    enablesReturnKeyAutomatically: true,
                    maxLength: 32,
                    placeholderTextColor: '#CCCCCC',
                    returnKeyType: 'done',
                    onChange: function (s) {
                      s = s.replace(/[^\w]/g, '');
                      t.setState({
                        passwordA: s,
                      });
                    },
                  })
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      marginTop: module588.default.setSpText(10),
                      position: 'relative',
                    },
                  },
                  React.default.createElement(module1245.default, {
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    placeholder: module594.default.t('inputPPassword'),
                    style: b.inputTxt,
                    type: 'text',
                    value: this.state.passwordB,
                    onChange: function (s) {
                      s = s.replace(/[^\w]/g, '');
                      t.setState({
                        passwordB: s,
                      });
                      t.ispasswordBval();
                    },
                  }),
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: b.passwordBNull,
                      onPress: function () {
                        t.setState({
                          passwordB: '',
                          isNullImg: null,
                        });
                      },
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: this.state.isNullImg,
                      style: {
                        height: '100%',
                        width: '100%',
                      },
                    })
                  )
                )
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
  return A;
})(React.default.Component);

exports.passwordScreen = module1169;
var b = ReactNative.StyleSheet.create({
    isBtn: {
      position: 'absolute',
      width: '100%',
      paddingLeft: module588.default.setSpText(10),
      paddingRight: module588.default.setSpText(10),
      bottom: module588.default.setSpText(10),
    },
    isPasswordBtn: {
      height: module588.default.setSpText(48),
      fontSize: module588.default.setSpText(14),
      borderBottomLeftRadius: module588.default.setSpText(16),
      borderBottomRightRadius: module588.default.setSpText(16),
      borderTopEndRadius: module588.default.setSpText(16),
      borderTopStartRadius: module588.default.setSpText(16),
    },
    inputTxt: {
      fontSize: 14,
      color: '#0A72FA',
    },
    passwordBNull: {
      position: 'absolute',
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      right: 0,
      top: '50%',
      marginTop: module588.default.setSpText(-11),
    },
  }),
  N = module1169;
exports.default = N;
