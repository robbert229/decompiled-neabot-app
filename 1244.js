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
  module1248 = require('./1248'),
  module588 = require('./588'),
  module916 = require('./916'),
  module915 = require('./915'),
  module1250 = require('./1250'),
  module593 = require('./593'),
  module594 = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = F(o);
    if (n && n.has(t)) return n.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, u, c);
        else s[u] = t[u];
      }

    s.default = t;
    if (n) n.set(t, s);
    return s;
  })(require('./594')),
  module1188 = require('./1188'),
  module1147 = require('./1147'),
  module1196 = require('./1196'),
  module1221 = require('./1221'),
  module1218 = require('./1218'),
  module1259 = require('./1259');

require('./594');

require('./606');

function F(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (F = function (t) {
    return t ? n : o;
  })(t);
}

function D() {
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

var L = Date.now(),
  module1164 = (function (t) {
    module35.default(R, t);

    var module1196 = R,
      F = D(),
      module1296 = function () {
        var t,
          o = module34.default(module1196);

        if (F) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function R(t) {
      var o;
      module24.default(this, R);

      (o = module1296.call(this, t)).onBackPressed = function () {
        if (o.props.navigation.isFocused())
          L && L + 2e3 >= Date.now() ? ReactNative.BackHandler.exitApp() : ((L = Date.now()), module1096.default.info(module594.default.t('oneDropOut'), 1, undefined, false));
      };

      var n = false;
      if ('TW' == module594.systemLanguage.countryCode) n = true;
      o.state = {
        areaCode: n ? 886 : 1,
        areaName: n ? '\u4e2d\u56fd\u53f0\u6e7e' : module594.default.t('US'),
        isoCode: 'USA',
        domainAbbreviation: null,
        userName: '',
        userPassword: '',
        isBtnActive: false,
        isprotocol: false,
        protocolUrl: null,
        passwordType: 'password',
        showPasswordUrl: null,
        isodePicker: false,
        isNoticeShow: true,
        placeholder: module594.default.t('isEmailOnly'),
        countryData: [],
        isShowed: false,
        alertYSFWType: 'YSFW',
        isOK: false,
        notShow: n,
      };
      return o;
    }

    module25.default(R, [
      {
        key: 'resetCountryCode',
        value: function (t) {
          var o = this;
          if (null != this.state.countryData && this.state.countryData.length > 0)
            for (
              var n = this.state.countryData,
                s = function (s) {
                  var l = n[s];

                  if (l && l.domainAbbreviation == t) {
                    console.log('===========\u5730\u533a\u6539\u53d8\u76d1\u542c\u56de\u8c03=====' + JSON.stringify(l));
                    module593.default.save('localAreaInfo', l);
                    module593.default.get('localUserData').then(function (t) {
                      if (!o.state.notShow && t) {
                        t.areaCode = l.code;
                        t.areaName = l.areaName;
                        t.domainArea = l.domainAbbreviation;
                        t.isoCode = l.isoCode;
                      }

                      module593.default.save('localUserData', t);
                    });
                  }
                },
                l = 0;
              l < n.length;
              l++
            )
              s(l);
        },
      },
      {
        key: 'checkPlaceholderTips',
        value: function () {
          var t = this,
            o = 'US';
          ReactNative.NativeModules.AccountApiModule.getCountryList().then(function (n) {
            var s = n.data ? n.data : [];
            t.setState({
              countryData: s,
            });
            var l = 1,
              u = module594.default.t('US'),
              c = undefined,
              f = module594.systemLanguage.languageCode,
              p = module594.systemLanguage.countryCode;
            if (module594.default.locale !== f) p = 'en' == module594.default.locale ? 'US' : 'CN';

            for (var h = 0; h < s.length; h++) {
              var v = s[h];

              if (v && v.domainAbbreviation == p) {
                console.log(
                  '======\u83b7\u53d6\u914d\u7f6e\u8bed\u8a00\u73af\u5883\u4e0b\u7684\u5730\u533a\u8868=1==34124242=' + JSON.stringify(v),
                  'systemLanguage: ' + JSON.stringify(module594.systemLanguage)
                );
                l = v.code;
                u = v.areaName;
                c = v.isoCode;
                o = v.domainAbbreviation;
                t.setState({
                  domainAbbreviation: v.domainAbbreviation,
                });
              }
            }

            module593.default.get('localUserData').then(function (n) {
              if ((console.log('\u83b7\u53d6\u672c\u5730\u6570\u636e' + JSON.stringify(n)), !t.state.notShow && n)) {
                l = n.areaCode;
                o = n.hasOwnProperty('domainAbbreviation') ? n.domainAbbreviation : n.domainArea;
                console.log('===' + u, n.areaName, n.isoCode);
                if (!(n.hasOwnProperty('domainAbbreviation') && n.domainAbbreviation == o)) u = n.areaName;
                console.log('\u8d70\u7740\u989d\uff1f333' + JSON.stringify(o), JSON.stringify(l), JSON.stringify(u));
                if (undefined != n.isoCode) c = n.isoCode;

                for (var f = 0; f < s.length; f++) {
                  var p = s[f];

                  if (p && p.domainAbbreviation == n.domainAbbreviation) {
                    console.log('=====' + JSON.stringify(p));
                    l = p.code;
                    u = p.areaName;
                    c = p.isoCode;
                    o = p.domainAbbreviation;
                    t.setState({
                      domainAbbreviation: p.domainAbbreviation,
                    });
                  }
                }

                console.log('==2222222=' + u, n.areaName);
                t.setState({
                  notShow: false,
                  domainAbbreviation: o,
                  isShowed: false,
                  isOk: true,
                });
              } else {
                console.log('\u8d70\u7740\u989d\uff1f');

                for (var h = 0; h < s.length; h++) {
                  var v = s[h];

                  if (v && v.domainAbbreviation == module594.systemLanguage.countryCode) {
                    console.log(
                      '===========\u83b7\u53d6\u914d\u7f6e\u8bed\u8a00\u73af\u5883\u4e0b\u7684\u5730\u533a\u8868=====' + JSON.stringify(v),
                      'systemLanguage =  ' + JSON.stringify(module594.systemLanguage)
                    );
                    l = v.code;
                    u = v.areaName;
                    c = v.isoCode;
                    o = v.domainAbbreviation;
                    module593.default.save('localAreaInfo', v);
                  }
                }
              }

              t.setState({
                areaCode: l,
                isoCode: c,
                areaName: u,
                domainAbbreviation: o,
                placeholder: t.checkPlaceholder(l),
              });
            });
          });
        },
      },
      {
        key: 'checkYSXY',
        value: function () {
          var t = this;
          module593.default.get('isNotFristInstallApp').then(function (o) {
            if (o)
              t.setState(
                {
                  isShowed: false,
                },
                function () {
                  t.isBtn();
                  module593.default.get('initAliyunOK').then(function (t) {
                    if (!t) {
                      if ('android' == ReactNative.Platform.OS) module1259.default.initAliIoTSmart();
                      module593.default.save('initAliyunOK', true);
                    }
                  });
                }
              );
            else
              t.setState(
                {
                  isShowed: true,
                },
                function () {
                  t.isBtn();
                }
              );
          });
        },
      },
      {
        key: 'checkPlaceholder',
        value: function (t) {
          module594.default.t('isEmail');
          return 86 == t || '86' == t ? module594.default.t('isEmail') : module594.default.t('isEmailOnly');
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.checkPlaceholderTips();
          this.checkYSXY();
          new ReactNative.NativeEventEmitter(ReactNative.NativeModules.AccountApiModule);
          if ('android' === ReactNative.Platform.OS) ReactNative.BackHandler.addEventListener('hardwareBackPress', this.onBackPressed);
          setTimeout(function () {
            t.setState({
              isNoticeShow: false,
            });
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.eventEmitter) this.removeEventListener();
          if (this.interval) clearInterval(this.interval);

          this.setState = function (t, o) {};
        },
      },
      {
        key: 'removeEventListener',
        value: function () {
          if ('android' === ReactNative.Platform.OS) ReactNative.BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed);
        },
      },
      {
        key: 'webView',
        value: function (t) {
          this.removeEventListener();
          this.props.navigation.navigate('userAgreement', {
            title: t,
            index: 'privacy' === t ? 0 : 1,
            url: '',
          });
        },
      },
      {
        key: 'isBtn',
        value: function () {
          if (this.state.isprotocol && this.state.areaCode && this.state.userName && this.state.userPassword) {
            if (!this.state.isBtnActive) this.state.isBtnActive = true;
          } else if (this.state.isBtnActive) this.state.isBtnActive = false;
        },
      },
      {
        key: 'userGet',
        value: function () {
          var t = this;
          this.props.navigation.navigate;
          if (this.state.isprotocol) {
            if (this.state.areaCode) {
              if (this.state.userName) {
                if (this.state.userPassword)
                  return void module1188.default.fetch().then(function (o) {
                    if (o.isConnected) {
                      if ((console.log('\u662f\u5426\u6709\u56fd\u5bb6' + JSON.stringify(t.state.domainAbbreviation)), t.state.domainAbbreviation))
                        if ((console.log('\u8bf7\u6c42\u767b\u5f55\u8bbe\u7f6e\u56fd\u5bb6' + JSON.stringify(t.state.domainAbbreviation)), 'android' === ReactNative.Platform.OS))
                          module916.default.setCountry(t.state.domainAbbreviation);
                        else
                          try {
                            module916.default.setCountry(t.state.domainAbbreviation);
                          } catch (t) {}
                      var n = module1096.default.loading('', 0);
                      console.log('====== login 111 = ' + t.state.userName, t.state.userPassword, t.state.areaCode.toString());
                      setTimeout(function () {
                        module915.default.login(t.state.userName, t.state.userPassword, t.state.areaCode.toString()).then(
                          function (o) {
                            if ((console.log('============\u767b\u5f55\u8fd4\u56de = ' + JSON.stringify(o)), 200 == o.code)) {
                              var u = o.data;
                              u.areaName = t.state.areaName.toString();
                              var c = {
                                timestamp: Date.parse(new Date()),
                                userName: t.state.userName,
                                areaCode: t.state.areaCode,
                                isoCode: t.state.isoCode,
                                areaName: t.state.areaName,
                                placeholder: t.state.placeholder,
                                domainAbbreviation: t.state.domainAbbreviation,
                              };
                              module1218.default.log(t.state.isoCode, '\u767b\u5f55\u5730\u533a\u8bb0\u5f55', '', JSON.stringify(c), '');
                              module916.default.authCodeLogin(u.aliAuthenticationToken).then(function (o) {
                                console.log('============\u83b7\u53d6\u6388\u6743\u4fe1\u606f == login authCodeLogin = ' + JSON.stringify(o));
                                module403.default.remove(n);

                                if ('ios' == ReactNative.Platform.OS || ('android' == ReactNative.Platform.OS && 200 == o.code)) {
                                  u.isoCode = t.state.isoCode.toString();
                                  u.domainAbbreviation = t.state.domainAbbreviation;
                                  module593.default.save('userData', u);
                                  module593.default.save('localUserData', u);
                                  module1096.default.info(module594.default.t('loginSuccess'), 3, undefined, false);
                                  setTimeout(function () {
                                    ReactNative.DeviceEventEmitter.emit('loginIndex');
                                    ReactNative.DeviceEventEmitter.emit('myLoginUser');
                                    t.props.navigation.replace('tabNav');
                                  }, 1e3);
                                } else module1096.default.info(o.localMsg ? o.localMsg : o.message ? o.message : o.code, 1, undefined, false);
                              });
                            } else {
                              module403.default.remove(n);
                              if (10060 == o.code) module1096.default.info(module594.default.t('userNotExist'), 1, undefined, false);
                              else if (10061 == o.code) module1096.default.info(module594.default.t('pwdOrNameError'), 1, undefined, false);
                              else {
                                console.log();
                                module1096.default.info(o.message ? o.message : o.code, 1, undefined, false);
                              }
                            }
                          },
                          function (t, o) {
                            if (
                              (console.log('code:' + JSON.stringify(t), 'message:' + JSON.stringify(o)),
                              module403.default.remove(n),
                              (t = 'string' == typeof t ? JSON.parse(t) : t),
                              '[object Error]' == Object.prototype.toString.call(t))
                            ) {
                              var u = 0,
                                c = '';
                              Object.keys(t).map(function (o) {
                                if ('code' == o) {
                                  var n = t[o];
                                  u = n;
                                }

                                if ('message' == o) c = t[o];
                              });
                              if (1101354 == u) module1096.default.info(module594.default.t('noNetwork'), 2, undefined, false);
                              else module1096.default.info(c, 1, undefined, false);
                            } else module1096.default.info(JSON.stringify(t), 2, undefined, false);
                          }
                        );
                      }, 500);
                    } else module1096.default.info(module594.default.t('noNetwork'), 2, undefined, false);
                  });
                else {
                  module1096.default.info(module594.default.t('inputPassword'), 1, undefined, false);
                  return false;
                }
              } else {
                module1096.default.info(module594.default.t('inputUser'), 1, undefined, false);
                return false;
              }
            } else {
              module1096.default.info(module594.default.t('areaCode'), 1, undefined, false);
              return false;
            }
          } else {
            module1096.default.info(module594.default.t('isProtocol'), 1, undefined, false);
            return false;
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            s = this.props.navigation.navigate;
          return React.default.createElement(
            ReactNative.View,
            {
              style: J.box,
            },
            React.default.createElement(ReactNative.StatusBar, {
              translucent: true,
              hidden: this.state.isNoticeShow,
              backgroundColor: 'transparent',
              barStyle: 'light-content',
            }),
            React.default.createElement(
              module1248.default,
              {
                colors: ['rgb(153,197,253)', '#FFF'],
                style: J.topBox,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: J.topTitleBox,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: J.topTtileContent,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: J.topTitle,
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: require('./1296'),
                      style: J.topLogo,
                    }),
                    ' ',
                    module594.default.t('loName')
                  )
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: J.isNoNumber,
                  },
                  module594.default.t('noUserName'),
                  ' ',
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: J.registeredbTN,
                      onPress: function () {
                        t.removeEventListener();
                        s('registeredScreen', {
                          countryData: t.state.countryData,
                          areaCode: t.state.areaCode,
                          areaName: t.state.areaName,
                          placeholder: t.state.placeholder,
                          notShow: t.state.notShow,
                        });
                      },
                    },
                    module594.default.t('isregistered')
                  )
                )
              )
            ),
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
                  style: J.userInput,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      position: 'relative',
                    },
                  },
                  this.state.notShow
                    ? null
                    : React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          onPress: function () {
                            t.setState({
                              isodePicker: true,
                            });
                          },
                        },
                        React.default.createElement(module1245.default, {
                          placeholder: module594.default.t('areaCode'),
                          style: J.inputTxt,
                          editable: false,
                          value: (this.state.notShow && '\u4e2d\u56fd\u53f0\u6e7e' == this.state.areaName ? '' : this.state.areaName) + ' +' + this.state.areaCode,
                          onChange: function (o, n) {
                            t.isBtn();
                            t.setState({
                              areaCode: o,
                              areaName: n,
                            });
                          },
                        }),
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1297'),
                          style: [J.areaCodeImg],
                        })
                      )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      marginTop: module588.default.setSpText(10),
                    },
                  },
                  React.default.createElement(module1245.default, {
                    style: J.inputTxt,
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    enablesReturnKeyAutomatically: true,
                    placeholder: this.state.placeholder,
                    editable: true,
                    maxLength: 50,
                    ref: function (o) {
                      return (t.inputRef = o);
                    },
                    placeholderTextColor: '#CCCCCC',
                    value: this.state.userName,
                    onChange: function (o) {
                      t.setState({
                        userName: o.replace(/\s/g, ''),
                      });
                      t.isBtn();
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
                    placeholder: module594.default.t('inputPassword'),
                    style: J.inputTxt,
                    type: this.state.passwordType,
                    editable: true,
                    maxLength: 32,
                    placeholderTextColor: '#CCCCCC',
                    enablesReturnKeyAutomatically: true,
                    value: this.state.userPassword,
                    returnKeyType: 'done',
                    onChange: function (o) {
                      t.setState({
                        userPassword: o.replace(/\s/g, ''),
                      });
                      if (o.length >= 1)
                        t.setState({
                          showPasswordUrl: require('./1298'),
                        });
                      else
                        t.setState({
                          showPasswordUrl: null,
                        });
                      t.isBtn();
                    },
                  }),
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: J.showPassIcon,
                      onPress: function () {
                        if ('password' == t.state.passwordType)
                          t.setState({
                            passwordType: 'text',
                          });
                        else
                          t.setState({
                            passwordType: 'password',
                          });
                      },
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: 'password' == this.state.passwordType ? this.state.showPasswordUrl : require('./1299'),
                      style: {
                        width: '100%',
                        height: '100%',
                      },
                    })
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    marginTop: module588.default.setSpText(20),
                    marginRight: module588.default.setSpText(20),
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  },
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {},
                  },
                  React.default.createElement(ReactNative.Text, {
                    style: {
                      fontSize: module588.default.setSpText(14),
                      color: '#658DC2',
                    },
                  })
                ),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      t.removeEventListener();
                      s('changePassword', {
                        countryData: t.state.countryData,
                        areaCode: t.state.areaCode,
                        areaName: t.state.areaName,
                        placeholder: t.state.placeholder,
                      });
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        color: '#0A72FA',
                        flex: 0,
                      },
                    },
                    ' ',
                    module594.default.t('isPassword')
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    paddingHorizontal: module588.default.setSpText(20),
                  },
                },
                React.default.createElement(
                  module1135.default,
                  {
                    type: 'primary',
                    style: [J.logonBtn, this.state.isBtnActive ? J.logonBtnActive : ''],
                    onPress: function () {
                      t.userGet();
                    },
                  },
                  module594.default.t('loginBtn')
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: J.protocolBox,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: {
                      marginLeft: module588.default.setSpText(20),
                    },
                    onPress: function () {
                      t.setState(
                        {
                          isprotocol: (t.state.isprotocol = !t.state.isprotocol),
                        },
                        function () {}
                      );
                      t.isBtn();
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.isprotocol ? require('./1300') : require('./1164'),
                    style: J.radionImg,
                    resizeMode: 'contain',
                  })
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: J.protocolChildBox,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: J.protocolTT,
                      onPress: function () {
                        t.setState(
                          {
                            isprotocol: (t.state.isprotocol = !t.state.isprotocol),
                          },
                          function () {}
                        );
                        t.isBtn();
                      },
                    },
                    module594.default.t('agreeProtocol')
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        fontSize: module588.default.setSpText(14),
                        color: '#0A72FA',
                        marginRight: module588.default.setSpText(5),
                      },
                      onPress: function () {
                        t.webView('privacy');
                      },
                    },
                    module594.default.t('privacy')
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: J.protocolTT,
                    },
                    module594.default.t('an')
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        fontSize: module588.default.setSpText(14),
                        color: '#0A72FA',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                      },
                      onPress: function () {
                        t.webView('service');
                      },
                    },
                    module594.default.t('service')
                  )
                )
              )
            ),
            1 == this.state.isodePicker
              ? React.default.createElement(module1250.default, {
                  isShow: this.state.isodePicker,
                  onPick: function (o) {
                    t.setState({
                      isodePicker: false,
                    });
                    t.setState({
                      areaCode: o.phoneCode,
                      areaName: o.countryName,
                      isoCode: o.domainAbbreviation,
                      domainAbbreviation: o.domainAbbreviation,
                      placeholder: t.checkPlaceholder(o.phoneCode),
                    });
                  },
                  closePilck: function () {
                    t.setState({
                      isodePicker: false,
                    });
                  },
                })
              : null,
            1 == this.state.isShowed
              ? React.default.createElement(module1147.default, {
                  isShow: this.state.isShowed,
                  isType: this.state.alertYSFWType,
                  isData: {},
                  fwxyFunc: function () {
                    t.setState(
                      {
                        isOK: false,
                        isShowed: false,
                      },
                      function () {
                        t.props.navigation.navigate('userAgreement', {
                          title: module594.default.t('privacy'),
                          index: 0,
                          url: '',
                          callbackFunc: t.checkYSXY.bind(t),
                        });
                      }
                    );
                  },
                  yszcFunc: function () {
                    t.setState(
                      {
                        isOK: false,
                        isShowed: false,
                      },
                      function () {
                        t.props.navigation.navigate('userAgreement', {
                          title: module594.default.t('service'),
                          index: 1,
                          url: '',
                          callbackFunc: t.checkYSXY.bind(t),
                        });
                      }
                    );
                  },
                  onPick: function () {
                    t.setState(
                      {
                        isOK: false,
                        isShowed: false,
                      },
                      function () {
                        module593.default.delete('isNotFristInstallApp', true);
                        module1221.default.exitApp();
                      }
                    );
                  },
                  onData: function (o) {
                    t.setState(
                      {
                        isOK: true,
                        isShowed: false,
                      },
                      function () {
                        module593.default.save('isNotFristInstallApp', true);
                        t.checkYSXY();
                      }
                    );
                  },
                })
              : null
          );
        },
      },
    ]);
    return R;
  })(React.default.Component);

exports.LoginScreen = module1164;
new module1196.DynamicStyleSheet({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: new module1196.DynamicValue('#FFFFFF', '#000000'),
  },
  initialStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: new module1196.DynamicValue('#000000', '#FFFFFF'),
  },
  image: {
    borderWidth: 1,
    borderColor: new module1196.DynamicValue('#000000', '#FFFFFF'),
    width: 80,
    height: 80,
  },
  meme: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});
var J = ReactNative.StyleSheet.create({
    protocolBox: {
      marginTop: module588.default.setSpText(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
    protocolChildBox: {
      flex: 1,
      textAlign: 'left',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      fontSize: module588.default.setSpText(14),
    },
    box: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topBox: {
      height: module588.default.setSpText(166),
    },
    topTitleBox: {
      marginTop: module588.default.setSpText(62),
      marginLeft: module588.default.setSpText(20),
    },
    topTtileContent: {
      fontSize: module588.default.setSpText(20),
    },
    topTitle: {
      color: '#213B5C',
    },
    topLogo: {
      width: module588.default.setSpText(20),
      height: module588.default.setSpText(20),
    },
    isNoNumber: {
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
    },
    registeredbTN: {
      color: '#0A72FA',
    },
    bottomBox: {
      position: 'absolute',
      bottom: module588.default.setSpText(-25),
      left: 0,
    },
    logoBck: {
      zIndex: -100,
      width: module588.default.setSpText(375),
      height: module588.default.setSpText(241),
    },
    userInput: {
      paddingRight: module588.default.setSpText(20),
    },
    inputTxt: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(14),
      height: module588.default.setSpText(64),
      borderBottomColor: '#E1E7F5',
    },
    logonBtn: {
      height: module588.default.setSpText(48),
      marginTop: module588.default.setSpText(40),
      fontSize: module588.default.setSpText(14),
      backgroundColor: 'rgb(153,197,253)',
      borderColor: 'rgb(153,197,253)',
      borderBottomLeftRadius: module588.default.setSpText(16),
      borderBottomRightRadius: module588.default.setSpText(16),
      borderTopEndRadius: module588.default.setSpText(16),
      borderTopStartRadius: module588.default.setSpText(16),
    },
    protocolTT: {
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
      marginRight: module588.default.setSpText(5),
    },
    protocolTxt: {
      fontSize: module588.default.setSpText(12),
      color: '#0A72FA',
    },
    radionImg: {
      width: module588.default.setSpText(16),
      height: module588.default.setSpText(16),
      marginRight: module588.default.setSpText(5),
    },
    areaCodeImg: {
      position: 'absolute',
      width: module588.default.setSpText(21),
      height: module588.default.setSpText(21),
      top: '50%',
      right: 0,
      marginTop: module588.default.setSpText(-10.5),
    },
    logonBtnActive: {
      backgroundColor: '#0A72FA',
    },
    showPassIcon: {
      position: 'absolute',
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      top: '50%',
      right: 0,
      marginTop: module588.default.setSpText(-11),
    },
  }),
  R = module1164;
exports.default = R;
