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
  module594 = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var s = N(o);
    if (s && s.has(t)) return s.get(t);
    var n = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(n, u, c);
        else n[u] = t[u];
      }

    n.default = t;
    if (s) s.set(t, n);
    return n;
  })(require('./594')),
  module1250 = require('./1250'),
  module915 = require('./915'),
  module593 = require('./593'),
  module916 = require('./916');

function N(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    s = new WeakMap();
  return (N = function (t) {
    return t ? s : o;
  })(t);
}

function k() {
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

var module1297 = (function (t) {
  module35.default(B, t);

  var N = B,
    module1297 = k(),
    E = function () {
      var t,
        o = module34.default(N);

      if (module1297) {
        var s = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, s);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function B(t) {
    var o;
    module24.default(this, B);
    var s = (o = E.call(this, t)).props.route.params,
      n = false;
    if ('TW' == module594.systemLanguage.countryCode) n = true;
    o.state = {
      userName: '',
      sms: '',
      isBtnActive: false,
      smsTime: 0,
      smsTxt: module594.default.t('obtainSms'),
      isSmsBtn: false,
      productId: 'a123O74NHlMk2kPs',
      type: 2,
      userNameType: null,
      isodePicker: false,
      passwordA: '',
      passwordB: '',
      areaCode: s.areaCode,
      areaName: s.areaName,
      placeholder: s.placeholder ? s.placeholder : module594.default.t('isEmailOnly'),
      countryData: s.countryData,
      notShow: n,
      connectTime: 0,
      domainArea: null,
    };
    return o;
  }

  module25.default(B, [
    {
      key: 'componentDidMount',
      value: function () {
        this.checkPlaceholderTips();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.interval) clearInterval(this.interval);
        if (this.connectInterval) clearInterval(this.connectInterval);

        this.setState = function (t, o) {};
      },
    },
    {
      key: 'checkPlaceholderTips',
      value: function () {
        for (var t = this, o = this.state.countryData, s = 1, n = module594.default.t('US'), l = 'US', u = 0; u < o.length; u++) {
          var c = o[u];

          if (c && c.domainAbbreviation == module594.systemLanguage.countryCode) {
            console.log(
              '======\u83b7\u53d6\u914d\u7f6e\u8bed\u8a00\u73af\u5883\u4e0b\u7684\u5730\u533a\u8868=1==34124242=' + JSON.stringify(c),
              'systemLanguage: ' + JSON.stringify(module594.systemLanguage)
            );
            s = c.code;
            n = c.areaName;
            c.isoCode;
            l = c.domainAbbreviation;
          }
        }

        module593.default.get('localUserData').then(function (o) {
          if (!t.state.notShow && o) {
            s = o.areaCode;
            n = o.areaName;
            l = o.domainAbbreviation;
            if (undefined != o.isoCode) o.isoCode;
            t.setState({
              notShow: false,
            });
            module593.default.get('changePasswordData').then(function (o) {
              if (o) {
                var u = false,
                  c = Number.parseInt(o.timestamp),
                  f = Date.parse(new Date()),
                  h = f - c;
                if (c > f);
                else {
                  if (h < 6e4 || 6e4 === h) u = true;
                }

                if (u) {
                  t.setState({
                    userName: o.userName,
                    smsTime: 60 - h / 1e3,
                    areaCode: o.areaCode,
                    areaName: o.areaName,
                    placeholder: t.checkPlaceholder(o.areaCode),
                    domainArea: o.domainArea,
                  });
                  t.makeTimer();
                } else
                  t.setState({
                    areaCode: s,
                    areaName: n,
                    isSmsBtn: true,
                    placeholder: t.checkPlaceholder(s),
                    domainArea: l,
                  });
              } else
                t.setState({
                  areaCode: s,
                  areaName: n,
                  isSmsBtn: true,
                  placeholder: t.checkPlaceholder(s),
                  domainArea: l,
                });
            });
          } else
            module593.default.get('changePasswordData').then(function (o) {
              if ((console.log('========\u6ca1\u6709\u672c\u5730\u4fdd\u5b58\u4e60\u60ef\u6570\u636e tags =====' + JSON.stringify(o)), o)) {
                var u = false,
                  c = Number.parseInt(o.timestamp),
                  f = Date.parse(new Date()),
                  h = f - c;
                if (c > f);
                else {
                  if (h < 6e4 || 6e4 === h) u = true;
                }

                if (u) {
                  t.setState({
                    userName: o.userName,
                    smsTime: 60 - h / 1e3,
                    areaCode: o.areaCode,
                    areaName: o.areaName,
                    placeholder: t.checkPlaceholder(o.areaCode),
                    domainArea: o.domainArea,
                  });
                  t.makeTimer();
                } else
                  t.setState({
                    areaCode: s,
                    areaName: n,
                    isSmsBtn: true,
                    placeholder: t.checkPlaceholder(s),
                  });
              } else
                t.setState({
                  domainArea: l,
                  areaCode: s,
                  areaName: n,
                  isSmsBtn: true,
                  placeholder: t.checkPlaceholder(s),
                  domainArea: l,
                });
            });
        });
      },
    },
    {
      key: 'isBtn',
      value: function () {
        if ('' != this.state.areaCode && '' != this.state.userName && this.state.sms.length >= 5 && '' != this.state.passwordA && '' != this.state.passwordB)
          this.setState({
            isBtnActive: true,
          });
        else
          this.setState({
            isBtnActive: false,
          });
      },
    },
    {
      key: '_countDownAction',
      value: function () {
        var t = {
          timestamp: Date.parse(new Date()),
          userName: this.state.userName,
          areaCode: this.state.areaCode,
          areaName: this.state.areaName,
          domainArea: this.state.domainArea,
          placeholder: this.state.placeholder,
        };
        module593.default.save('changePasswordData', t).then(function (t) {});
        this.setState({
          smsTime: 60,
        });
        this.makeTimer();
      },
    },
    {
      key: 'makeTimer',
      value: function () {
        var t = this;
        if (this.state.smsTime > 0)
          this.interval = setInterval(function () {
            var o = t.state.smsTime--;

            if (0 === o) {
              if (t.interval) clearInterval(t.interval);
              t.setState({
                smsTime: 60,
                smsTxt: module594.default.t('obtainSms'),
                isSmsBtn: true,
              });
            } else
              t.setState({
                smsTxt: module594.default.t('ReTxt') + '(' + o + 's)',
                isSmsBtn: false,
              });
          }, 1e3);
      },
    },
    {
      key: 'emailPhoneCode',
      value: function () {
        var t = this,
          o = '';

        if (this.state.userName.length < 9) {
          if (86 == this.state.areaCode || '86' == this.state.areaCode) module1096.default.info(module594.default.t('isEmail'), 1, undefined, false);
          else module1096.default.info(module594.default.t('isEmailOnly'), 1, undefined, false);
          return false;
        }

        if (
          ((o = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.state.userName) ? 0 : 1),
          this.setState({
            userNameType: o,
          }),
          console.log('===================================='),
          console.log('\u624b\u673aor\u90ae\u7bb1: ' + o),
          console.log('===================================='),
          this.state.isSmsBtn)
        ) {
          var s = module1096.default.loading('', 0);
          this.state.userName = this.state.userName.trim();
          console.log('============================= getSecurityCode =' + this.state.userName, JSON.stringify(this.state.areaCode), Number(o));
          this.setState({
            connectTime: 0,
          });
          if (this.connectInterval) clearInterval(this.connectInterval);
          this.connectInterval = setInterval(function () {
            if (t.state.connectTime++ >= 20) {
              if (t.connectInterval) clearInterval(t.connectInterval);
              module403.default.remove(s);
            }
          }, 1e3);
          module915.default.getSecurityCode(this.state.userName, this.state.areaCode.toString(), '2', Number(o)).then(function (o) {
            if (t.connectInterval) clearInterval(t.connectInterval);
            module403.default.remove(s);

            if (0 == o.code || 200 == o.code) {
              t._countDownAction();

              module1096.default.info(module594.default.t('sendSuccess'), 1, undefined, false);
            } else module1096.default.info(o.localMsg ? o.localMsg : o.message ? o.message : o.code, 1, undefined, false);
          });
        }
      },
    },
    {
      key: 'chPassword',
      value: function () {
        var t = this;
        this.props.navigation.navigate;

        if (!this.state.areaCode) {
          module1096.default.info(module594.default.t('areaCode'), 1, undefined, false);
          return false;
        }

        if (!this.state.userName) {
          if (86 == this.state.areaCode || '86' == this.state.areaCode) module1096.default.info(module594.default.t('isEmail'), 1, undefined, false);
          else module1096.default.info(module594.default.t('isEmailOnly'), 1, undefined, false);
          return false;
        }

        if (6 != this.state.sms.length) {
          module1096.default.info(module594.default.t('isSms'), 1, undefined, false);
          return false;
        }

        if (this.state.passwordA.length < 8) {
          module1096.default.info(module594.default.t('passwordA'), 1, undefined, false);
          return false;
        }

        if (this.state.passwordB != this.state.passwordA) {
          module1096.default.info(module594.default.t('passwordB'), 1, undefined, false);
          return false;
        }

        var o = '';

        if (this.state.userName.length < 9) {
          if (86 == this.state.areaCode || '86' == this.state.areaCode) module1096.default.info(module594.default.t('isEmail'), 1, undefined, false);
          else module1096.default.info(module594.default.t('isEmailOnly'), 1, undefined, false);
          return false;
        }

        o = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.state.userName) ? 2 : 1;
        this.setState({
          userNameType: o,
        });

        if (this.state.domainArea) {
          ReactNative.Platform.OS;
          module916.default.setCountry(this.state.domainArea);
        }

        var s = module1096.default.loading('', 0);

        try {
          module915.default.forgetPassword(this.state.userName.trim(), this.state.areaCode.toString(), this.state.passwordB, o.toString(), this.state.sms).then(function (o) {
            module403.default.remove(s);

            if (0 == o.code || 200 == o.code) {
              module1096.default.info(module594.default.t('ediltSuccess'), 1, undefined, false);
              module593.default.delete('changePasswordData').then(function (t) {});
              setTimeout(function () {
                t.props.navigation.goBack();
              }, 1e3);
            } else if (10194 == o.code) module1096.default.info(module594.default.t('pwdRepeat'), 1, undefined, false);
            else if (10074 == o.code || 10174 == o.code) module1096.default.info(module594.default.t('verificationCodeError'), 1, undefined, false);
            else if (10075 == o.code || 10175 == o.code) module1096.default.info(module594.default.t('verificationCodeInvail'), 1, undefined, false);
            else module1096.default.info(o.localMsg ? o.localMsg : o.message, 1, undefined, false);
          });
        } catch (t) {
          console.log(t);
        }
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
              style: P.box,
            },
            React.default.createElement(
              ReactNative.ScrollView,
              {
                style: {
                  flex: 1,
                },
              },
              React.default.createElement(ReactNative.StatusBar, {
                translucent: false,
                barStyle: 'dark-content',
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: P.userInput,
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
                          style: P.inputTxt,
                          editable: false,
                          value: this.state.areaName + ' +' + this.state.areaCode,
                          onChange: function (o, s) {
                            t.setState({
                              areaCode: o,
                              areaName: s,
                            });
                            t.isBtn();
                          },
                        }),
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1297'),
                          style: P.areaCodeImg,
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
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    style: P.inputTxt,
                    type: 'text',
                    value: this.state.userName,
                    editable: true,
                    enablesReturnKeyAutomatically: true,
                    maxLength: 50,
                    placeholderTextColor: '#CCCCCC',
                    placeholder: this.state.placeholder,
                    returnKeyType: 'done',
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
                    placeholder: module594.default.t('P1628575963'),
                    style: P.inputTxt,
                    type: 'number',
                    value: this.state.sms,
                    editable: true,
                    enablesReturnKeyAutomatically: true,
                    maxLength: 6,
                    placeholderTextColor: '#CCCCCC',
                    returnKeyType: 'done',
                    onChange: function (o) {
                      t.setState({
                        sms: o,
                      });
                      t.isBtn();
                    },
                  }),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: P.sms,
                      onPress: function () {
                        t.emailPhoneCode();
                      },
                    },
                    this.state.smsTxt
                  )
                )
              ),
              React.default.createElement(ReactNative.View, {
                style: P.backHeader,
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: P.userInput,
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
                    style: P.inputTxt,
                    type: 'text',
                    value: this.state.passwordA,
                    editable: true,
                    enablesReturnKeyAutomatically: true,
                    maxLength: 32,
                    placeholderTextColor: '#CCCCCC',
                    returnKeyType: 'done',
                    onChange: function (o) {
                      o = o.replace(/\s/g, '');
                      t.setState({
                        passwordA: o,
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
                    placeholder: module594.default.t('inputPPassword'),
                    style: P.inputTxt,
                    type: 'text',
                    value: this.state.passwordB,
                    editable: true,
                    enablesReturnKeyAutomatically: true,
                    maxLength: 32,
                    placeholderTextColor: '#CCCCCC',
                    returnKeyType: 'done',
                    onChange: function (o) {
                      o = o.replace(/\s/g, '');
                      t.setState({
                        passwordB: o,
                      });
                      t.isBtn();
                    },
                  })
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
                    style: [P.logonBtn, this.state.isBtnActive ? P.logonBtnActive : ''],
                    onPress: function () {
                      t.chPassword();
                    },
                  },
                  module594.default.t('btnConfirm')
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
                    setTimeout(function () {
                      t.setState({
                        areaCode: o.phoneCode,
                        areaName: o.countryName,
                        domainArea: o.domainAbbreviation,
                        placeholder: t.checkPlaceholder(o.phoneCode),
                      });
                    }, 1e3);
                  },
                  closePilck: function () {
                    t.setState({
                      isodePicker: false,
                    });
                  },
                })
              : null
          )
        );
      },
    },
  ]);
  return B;
})(React.default.Component);

exports.registeredScreen = module1297;
var P = ReactNative.StyleSheet.create({
    box: {
      flex: 1,
      backgroundColor: '#F5F6FA',
    },
    registeredbTN: {
      color: '#0A72FA',
    },
    userInput: {
      marginTop: module588.default.setSpText(20),
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
    sms: {
      position: 'absolute',
      width: module588.default.setSpText(109),
      height: module588.default.setSpText(32),
      right: 0,
      top: '50%',
      marginTop: module588.default.setSpText(-16),
      fontSize: module588.default.setSpText(14),
      borderTopRightRadius: module588.default.setSpText(16),
      borderTopLeftRadius: module588.default.setSpText(16),
      borderBottomLeftRadius: module588.default.setSpText(16),
      borderBottomRightRadius: module588.default.setSpText(16),
      backgroundColor: '#F7F9FC',
      textAlign: 'center',
      lineHeight: module588.default.setSpText(32),
      color: '#0A72FA',
    },
    backHeader: {
      height: module588.default.setSpText(10),
      backgroundColor: '#E1E7F5',
      marginTop: module588.default.setSpText(20),
    },
  }),
  E = module1297;
exports.default = E;
