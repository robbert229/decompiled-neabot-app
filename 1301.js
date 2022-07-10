require('./1302');

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
  module1250 = require('./1250'),
  module915 = require('./915'),
  module594 = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var s = k(o);
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
  module593 = require('./593'),
  module916 = require('./916');

require('./1218');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    s = new WeakMap();
  return (k = function (t) {
    return t ? s : o;
  })(t);
}

function E() {
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

var module1303 = (function (t) {
  module35.default(O, t);

  var k = O,
    module1303 = E(),
    P = function () {
      var t,
        o = module34.default(k);

      if (module1303) {
        var s = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, s);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function O(t) {
    var o;
    module24.default(this, O);
    var s = (o = P.call(this, t)).props.route.params,
      n = false;
    if ('TW' == module594.systemLanguage.countryCode) n = true;
    o.state = {
      userName: '',
      sms: '',
      isBtnActive: false,
      isprotocol: false,
      iconImg: require('./1164'),
      smsTime: 0,
      smsOutTime: 60,
      smsTxt: module594.default.t('obtainSms'),
      isSmsBtn: false,
      type: 1,
      areaCode: s.areaCode,
      areaName: s.areaName,
      isoCode: s.isoCode,
      notShow: n || s.notShow,
      isodePicker: false,
      protocolUrl: null,
      placeholder: s.placeholder ? s.placeholder : module594.default.t('isEmailOnly'),
      countryData: s.countryData,
      domainAbbreviation: null,
    };
    return o;
  }

  module25.default(O, [
    {
      key: 'componentDidMount',
      value: function () {
        this.checkPlaceholderTips();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.removeEventListener();
        if (this.interval) clearInterval(this.interval);
        if (this.outTimeInterval) clearInterval(this.outTimeInterval);

        this.setState = function (t, o) {};
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
      key: 'checkPlaceholderTips',
      value: function () {
        var t = this,
          o = this.state.countryData,
          s = 1,
          n = '',
          l = 'USA',
          u = 'US',
          c = module594.systemLanguage.languageCode,
          f = module594.systemLanguage.countryCode;
        if (module594.default.locale !== c) f = 'en' == module594.default.locale ? 'US' : f;

        for (var p = 0; p < o.length; p++) {
          var h = o[p];

          if (h && h.domainAbbreviation == f) {
            console.log(
              '======\u83b7\u53d6\u914d\u7f6e\u8bed\u8a00\u73af\u5883\u4e0b\u7684\u5730\u533a\u8868=1==34124242=' + JSON.stringify(h),
              'systemLanguage: ' + JSON.stringify(module594.systemLanguage),
              f
            );
            s = h.code;
            n = h.areaName;
            l = h.isoCode;
            u = h.domainAbbreviation;
            this.setState({
              domainAbbreviation: h.domainAbbreviation,
            });
          }
        }

        module593.default.get('localUserData').then(function (c) {
          if (c) {
            console.log('========\u6709\u672c\u5730\u4fdd\u5b58\u4e60\u60ef\u6570\u636e=====' + JSON.stringify(c));

            if (!t.state.notShow) {
              s = c.areaCode;
              n = c.areaName;
              l = undefined != c.isoCode ? c.isoCode : l;
            }

            for (var f = 0; f < o.length; f++) {
              var p = o[f];

              if (p && p.domainAbbreviation == c.domainAbbreviation) {
                console.log('=====' + JSON.stringify(p));
                s = p.code;
                n = p.areaName;
                l = p.isoCode;
                domainArea = p.domainAbbreviation;
                t.setState({
                  domainAbbreviation: p.domainAbbreviation,
                });
              }
            }

            module593.default.get('registerData').then(function (o) {
              if (o) {
                JSON.stringify(o);
                var c = false,
                  f = Number.parseInt(o.timestamp),
                  p = Date.parse(new Date()),
                  h = p - f;
                if (f > p);
                else {
                  if (h < 6e4 || 6e4 === h) c = true;
                }

                if (c) {
                  t.setState({
                    smsTime: 60 - h / 1e3,
                    userName: o.userName,
                    areaCode: o.areaCode,
                    areaName: o.areaName,
                    isoCode: undefined != o.isoCode ? o.isoCode : l,
                    placeholder: t.checkPlaceholder(o.areaCode),
                    domainAbbreviation: o.domainAbbreviation,
                  });
                  t.makeTimer();
                } else
                  t.setState({
                    areaCode: s,
                    areaName: n,
                    isoCode: l,
                    isSmsBtn: true,
                    placeholder: t.checkPlaceholder(s),
                    domainAbbreviation: u,
                  });
              } else
                t.setState({
                  areaCode: s,
                  areaName: n,
                  isoCode: l,
                  domainAbbreviation: u,
                  isSmsBtn: true,
                  placeholder: t.checkPlaceholder(s),
                });
            });
          } else {
            console.log('========\u65e0\u672c\u5730\u4fdd\u5b58\u4e60\u60ef\u6570\u636e=====' + JSON.stringify(c));
            module593.default.get('registerData').then(function (c) {
              if (c) {
                JSON.stringify(c);
                var f = false,
                  p = Number.parseInt(c.timestamp),
                  h = Date.parse(new Date()),
                  v = h - p;
                if (p > h);
                else {
                  if (v < 6e4 || 6e4 === v) f = true;
                }

                if (f) {
                  t.setState({
                    userName: c.userName,
                    smsTime: 60 - v / 1e3,
                    areaCode: c.areaCode,
                    isoCode: undefined != c.isoCode ? c.isoCode : l,
                    areaName: c.areaName,
                    placeholder: t.checkPlaceholder(c.areaCode),
                    domainAbbreviation: c.domainAbbreviation,
                  });
                  t.makeTimer();
                } else
                  t.setState({
                    areaCode: s,
                    areaName: n,
                    isoCode: l,
                    domainAbbreviation: u,
                    isSmsBtn: true,
                  });
              } else {
                for (var S = 0; S < o.length; S++) {
                  var T = o[S];

                  if (T && T.domainAbbreviation == module594.systemLanguage.countryCode) {
                    console.log(
                      '===========\u83b7\u53d6\u914d\u7f6e\u8bed\u8a00\u73af\u5883\u4e0b\u7684\u5730\u533a\u8868=====' + JSON.stringify(T),
                      'systemLanguage =  ' + JSON.stringify(module594.systemLanguage)
                    );
                    s = T.code;
                    n = T.areaName;
                    l = T.isoCode;
                    u = T.domainAbbreviation;
                  }
                }

                t.setState({
                  areaCode: s,
                  areaName: n,
                  isoCode: l,
                  domainAbbreviation: u,
                  placeholder: t.checkPlaceholder(s),
                  isSmsBtn: true,
                });
              }
            });
          }
        });
      },
    },
    {
      key: 'isBtn',
      value: function () {
        if (1 == this.state.isprotocol && '' != this.state.areaCode && '' != this.state.userName && this.state.sms.length >= 5)
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
          isoCode: this.state.isoCode,
          areaName: this.state.areaName,
          placeholder: this.state.placeholder,
          domainAbbreviation: this.state.domainAbbreviation,
        };
        module593.default.save('registerData', t).then(function (t) {});
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
      key: 'removeEventListener',
      value: function () {
        ReactNative.BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed);
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
      key: 'emailPhoneCode',
      value: function () {
        var t = this,
          o = '';

        if (this.state.userName.length < 9) {
          if (86 == this.state.areaCode || '86' == this.state.areaCode) module1096.default.info(module594.default.t('isEmail'), 1, undefined, false);
          else module1096.default.info(module594.default.t('isEmailOnly'), 1, undefined, false);
          return false;
        }

        if (((o = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.state.userName) ? 0 : 1), this.state.isSmsBtn && this.state.userName.length > 0)) {
          var s = module1096.default.loading('', 0);
          this.outTimeInterval = setInterval(function () {
            if (0 === t.state.smsOutTime--) {
              if (t.outTimeInterval) clearInterval(t.outTimeInterval);
              module403.default.remove(s);
              module1096.default.info(module594.default.t('networkConnectionTimeout'), 1, undefined, false);
            }
          }, 1e3);
          if (this.state.domainAbbreviation) module916.default.setCountry(this.state.domainAbbreviation);
          console.log('=========\u6ce8\u518c\u8bf7\u6c42\u53f7=======>>>>>' + this.state.areaCode.toString(), '=========\u624b\u673a\u8fd8\u662f\u90ae\u7bb1=======>>>>>' + o);
          setTimeout(function () {
            module915.default.getSecurityCode(t.state.userName.toString(), t.state.areaCode.toString(), '1', Number(o)).then(
              function (u) {
                if (
                  (module403.default.remove(s),
                  t.outTimeInterval && clearInterval(t.outTimeInterval),
                  console.log('LdLoginHelperModule.getSecurityCode===' + JSON.stringify(u)),
                  200 == u.code)
                ) {
                  t._countDownAction();

                  module1096.default.info(module594.default.t('sendSuccess'), 1, undefined, false);
                  Date.parse(new Date());
                } else
                  -1009 == u.code || -1020 == u.code
                    ? module1096.default.info(module594.default.t('noNetwork'), 1, undefined, false)
                    : 10172 == u.code
                    ? module1096.default.info(module594.default.t('F1628818304'), 1, undefined, false)
                    : 10170 == u.code
                    ? 0 == o
                      ? module1096.default.info(u.localMsg ? u.localMsg : u.message && '' != u.message ? u.message : u.code, 2, undefined, false)
                      : module1096.default.info(module594.default.t('emailRegisted'), 1, undefined, false)
                    : module1096.default.info(u.localMsg ? u.localMsg : u.message && '' != u.message ? u.message : u.code, 2, undefined, false);
              },
              function (o, u) {
                if (
                  (module403.default.remove(s),
                  t.outTimeInterval && clearInterval(t.outTimeInterval),
                  (o = 'string' == typeof o ? JSON.parse(o) : o),
                  '[object Error]' == Object.prototype.toString.call(o))
                ) {
                  var c = '';
                  Object.keys(o).map(function (t) {
                    if ('code' == t) {
                      var s = o[t];
                      s;
                    }

                    if ('message' == t) c = o[t];
                  });
                  module1096.default.info('' !== c ? c : '\u6d4b\u8bd5\u6d4b\u8bd5', 1, undefined, false);
                }
              }
            );
          }, 1e3);
        }
      },
    },
    {
      key: 'isemailPhone',
      value: function () {
        var t = this,
          o = this.props.navigation.navigate,
          s = '',
          n = {
            areaCode: this.state.areaCode,
            isoCode: this.state.isoCode,
          };

        if (!this.state.isprotocol) {
          module1096.default.info(module594.default.t('agreeProtocol'), 1, undefined, false);
          return false;
        }

        if (!this.state.areaCode) {
          module1096.default.info(module594.default.t('areaCode'), 1, undefined, false);
          return false;
        }

        if (!this.state.userName) {
          module1096.default.info(this.state.placeholder, 1, undefined, false);
          return false;
        }

        if (6 != this.state.sms.length) {
          module1096.default.info(module594.default.t('isSms'), 1, undefined, false);
          return false;
        }

        if (/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.state.userName)) {
          n.userName = this.state.userName;
          s = 0;
          n.UrlType = s;
        } else {
          n.userName = this.state.userName;
          s = 1;
          n.UrlType = s;
        }

        n.userName = n.userName.toString();
        n.areaName = this.state.areaName.toString();
        console.log('checkSecurityCode error this.state.areaCode==' + JSON.stringify(this.state.areaCode));

        if (this.state.domainAbbreviation) {
          module916.default.setCountry(this.state.domainAbbreviation);
          n.domainAbbreviation = this.state.domainAbbreviation;
        }

        setTimeout(function () {
          module915.default.checkSecurityCode(t.state.userName, t.state.areaCode.toString(), t.state.sms, Number(s)).then(function (s) {
            console.log('checkSecurityCode error msqwwwwg=====' + JSON.stringify(s));

            if (0 == s.code || 200 == s.code) {
              t.removeEventListener();
              setTimeout(function () {
                o('passwordScreen', {
                  data: n,
                });
                module593.default.delete('registerData').then(function (t) {});
              }, 500);
            } else if (10074 == s.code || 10174 == s.code) module1096.default.info(module594.default.t('verificationCodeError'), 1, undefined, false);
            else if (10075 == s.code || 10175 == s.code) module1096.default.info(module594.default.t('verificationCodeInvail'), 1, undefined, false);
            else if (-1009 == s.code || -1001 == s.code || -1020 == s.code) module1096.default.info(module594.default.t('availableWifi'), 1, undefined, false);
            else module1096.default.info(s.localMsg ? s.localMsg : s.message && '' != s.message ? s.message : s.code, 1, undefined, false);
          });
        }, 200);
      },
    },
    {
      key: '_onPressIn',
      value: function () {},
    },
    {
      key: '_onPressOut',
      value: function () {},
    },
    {
      key: '_onPress',
      value: function () {},
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props.navigation.navigate;
        return React.default.createElement(
          ReactNative.View,
          {
            style: B.box,
          },
          React.default.createElement(ReactNative.StatusBar, {
            translucent: true,
            backgroundColor: 'transparent',
            barStyle: 'light-content',
          }),
          React.default.createElement(
            module1248.default,
            {
              colors: ['rgb(153,197,253)', '#FFF'],
              style: B.topBox,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: B.topTitleBox,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: B.topTtileContent,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: B.topTitle,
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1296'),
                    style: B.topLogo,
                  }),
                  module594.default.t('Register_Title_Tip')
                )
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: B.isNoNumber,
                },
                module594.default.t('yesUser'),
                ' ',
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: B.registeredbTN,
                    onPress: function () {
                      t.removeEventListener();
                      n('loginScreen');
                    },
                  },
                  module594.default.t('goLogin')
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
                style: B.userInput,
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
                        style: B.inputTxt,
                        editable: false,
                        value: (this.state.notShow && '\u4e2d\u56fd\u53f0\u6e7e' == this.state.areaName ? '' : this.state.areaName) + ' +' + this.state.areaCode,
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
                        style: B.areaCodeImg,
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
                  placeholder: this.state.placeholder,
                  style: B.inputTxt,
                  type: 'text',
                  value: this.state.userName,
                  editable: true,
                  enablesReturnKeyAutomatically: true,
                  maxLength: 50,
                  placeholderTextColor: '#CCCCCC',
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
                  placeholder: module594.default.t('P1628575963'),
                  style: B.inputTxt,
                  type: 'number',
                  value: this.state.sms,
                  editable: true,
                  enablesReturnKeyAutomatically: false,
                  maxLength: 6,
                  placeholderTextColor: '#CCCCCC',
                  returnKeyType: 'done',
                  onSubmitEditing: ReactNative.Keyboard.dismiss,
                  blurOnSubmit: true,
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
                    style: B.sms,
                    onPress: function () {
                      t.emailPhoneCode();
                    },
                  },
                  this.state.smsTxt
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
                  style: [B.logonBtn, this.state.isBtnActive ? B.logonBtnActive : ''],
                  onPress: function () {
                    t.isemailPhone();
                  },
                },
                module594.default.t('registeredBtn')
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: B.protocolBox,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
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
                  style: B.radionImg,
                  resizeMode: 'contain',
                })
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: B.protocolChildBox,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: B.protocolTT,
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
                      fontSize: module588.default.setSpText(12),
                      color: '#0A72FA',
                      marginLeft: module588.default.setSpText(5),
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
                    style: B.protocolTT,
                  },
                  module594.default.t('an')
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontSize: module588.default.setSpText(12),
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
          React.default.createElement(
            ReactNative.View,
            {
              style: B.bottomBox,
            },
            React.default.createElement(ReactNative.Image, {
              source: require('./1303'),
              style: B.logoBck,
            })
          ),
          1 == this.state.isodePicker
            ? React.default.createElement(module1250.default, {
                isShow: this.state.isodePicker,
                onPick: function (o) {
                  t.setState({
                    isodePicker: false,
                  });
                  var s = module594.default.t('isEmail');
                  s = 86 == o.phoneCode || '86' == o.phoneCode ? module594.default.t('isEmail') : module594.default.t('isEmailOnly');
                  t.setState({
                    areaCode: o.phoneCode,
                    areaName: o.countryName,
                    placeholder: s,
                    domainAbbreviation: o.domainAbbreviation,
                  });
                },
                closePilck: function () {
                  t.setState({
                    isodePicker: false,
                  });
                },
              })
            : null
        );
      },
    },
  ]);
  return O;
})(React.default.Component);

exports.registeredScreen = module1303;
var B = ReactNative.StyleSheet.create({
    box: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    bottomBox: {
      width: 20,
      height: 20,
    },
    topBox: {
      height: module588.default.setSpText(136),
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
      marginTop: module588.default.setSpText(10),
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
    },
    registeredbTN: {
      color: '#0A72FA',
    },
    bottomBox: {
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    logoBck: {
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
    protocol: {
      fontSize: module588.default.setSpText(12),
      paddingBottom: module588.default.setSpText(5),
      color: '#213B5C',
      paddingRight: module588.default.setSpText(20),
    },
    protocolBox: {
      marginTop: module588.default.setSpText(20),
      paddingHorizontal: module588.default.setSpText(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      justifyContent: 'space-between',
    },
    protocolChildBox: {
      flex: 1,
      textAlign: 'left',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
    protocolTxt: {
      color: '#0A72FA',
    },
    protocolTT: {
      fontSize: module588.default.setSpText(12),
      color: '#213B5C',
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
    sms: {
      position: 'absolute',
      alignSelf: 'flex-start',
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
      justifyContent: 'center',
      lineHeight: module588.default.setSpText(32),
      color: '#0A72FA',
    },
  }),
  P = module1303;
exports.default = P;
