var module1135 = require('./1135'),
  module1117 = require('./1117'),
  module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  module588 = require('./588'),
  module593 = require('./593'),
  module916 = require('./916'),
  module915 = require('./915'),
  module594 = w(require('./594')),
  module1250 = require('./1250'),
  module1181 = w(require('./1181'));

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (k = function (t) {
    return t ? l : n;
  })(t);
}

function w(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var l = k(n);
  if (l && l.has(t)) return l.get(t);
  var o = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (c && (c.get || c.set)) Object.defineProperty(o, s, c);
      else o[s] = t[s];
    }

  o.default = t;
  if (l) l.set(t, o);
  return o;
}

function N() {
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

var O = '',
  module1230 = (function (t) {
    module35.default(module1401, t);

    var module588 = module1401,
      k = N(),
      w = function () {
        var t,
          n = module34.default(module588);

        if (k) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function module1401(t) {
      var n;
      module24.default(this, module1401);
      n = w.call(this, t);
      var l = false;
      if ('TW' == module594.systemLanguage.countryCode) l = true;
      n.state = {
        notShow: l,
        areaName: '',
        userData: '',
        isodePicker: false,
      };
      return n;
    }

    module25.default(module1401, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.management = ReactNative.DeviceEventEmitter.addListener('management', function () {
            t.userData();
          });
          this.userData();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(O);
          this.management.emitter.removeAllListeners('management');

          this.setState = function (t, n) {};
        },
      },
      {
        key: 'checkCountry',
        value: function () {
          var t = this;
          ReactNative.NativeModules.AccountApiModule.getCountryList().then(function (n) {
            var l = n.data ? n.data : [],
              o = module594.default.t('US'),
              u = '',
              s = module594.systemLanguage.languageCode,
              c = module594.systemLanguage.countryCode;
            if (module594.default.locale !== s) c = 'en' == module594.default.locale ? 'US' : 'CN';

            for (var f = 0; f < l.length; f++) {
              var y = l[f];

              if (y && y.domainAbbreviation == c) {
                console.log(
                  '======\u83b7\u53d6\u914d\u7f6e\u8bed\u8a00\u73af\u5883\u4e0b\u7684\u5730\u533a\u8868=1==34124242=' + JSON.stringify(y),
                  'systemLanguage: ' + JSON.stringify(module594.systemLanguage)
                );
                y.code;
                o = y.areaName;
                y.isoCode;
                u = y.domainAbbreviation;
              }
            }

            var h = t.state.userData;
            if (!(h.hasOwnProperty('domainAbbreviation') && h.domainAbbreviation == u)) o = h.areaName;
            t.setState({
              areaName: o,
            });
          });
        },
      },
      {
        key: 'userData',
        value: function () {
          var t = this;
          module593.default.get('userData').then(function (n) {
            if (!n || ('TWN' != n.isoCode && 'TW' != n.isoCode))
              t.setState(
                {
                  notShow: false,
                  userData: n,
                },
                function () {
                  setTimeout(function () {
                    t.checkCountry();
                  }, 200);
                }
              );
            else
              t.setState(
                {
                  notShow: true,
                  userData: n,
                },
                function () {
                  setTimeout(function () {
                    t.checkCountry();
                  }, 200);
                }
              );
          });
        },
      },
      {
        key: 'outLogin',
        value: function () {
          var t = this;
          module593.default.delete('userData').then(function (n) {
            module916.default.logout();
            module1096.default.info(
              module594.default.t('exitSuccessfully'),
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
        },
      },
      {
        key: 'pickImage',
        value: function () {
          var t = this;
          module916.default.pickImage().then(
            function (n) {
              if (200 == n.code) {
                console.log('\u66f4\u6539\u7528\u6237\u5934\u50cf\u8fd4\u56de\u6210\u529f msg code = ' + JSON.stringify(n));
                O = module1096.default.loading('loading', 0);
                module915.default.uploadAvatarFile(t.state.userData.userId, n.data.avatarUrl).then(function (l) {
                  console.log('\u66f4\u6539\u7528\u6237\u5934\u50cf\u8fd4\u56de uploadAvatarFile = ' + JSON.stringify(l));
                  module593.default.get('userData').then(function (s) {
                    if (s && 'object' == typeof l) {
                      if (l.data.url) s.avatar = l.data.url;
                      if (n.data.avatarUrl) s.currentAvatar = n.data.avatarUrl;
                      if (n.data.url) s.currentAvatar = n.data.url;
                    }

                    t.setState(
                      {
                        userData: s,
                      },
                      function () {
                        if (s)
                          setTimeout(function () {
                            module593.default.save('userData', s).then(function (t) {
                              module403.default.remove(O);
                              module1096.default.info(
                                module594.default.t('uploadSuccessfully'),
                                1,
                                function () {
                                  ReactNative.DeviceEventEmitter.emit('myLoginUser');
                                  ReactNative.DeviceEventEmitter.emit('loginIndex', {
                                    dontCheck: false,
                                  });
                                },
                                false
                              );
                            });
                          }, 3e3);
                        else module403.default.remove(O);
                      }
                    );
                  });
                });
              }
            },
            function (t, n) {
              if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                Object.keys(t).map(function (n) {
                  if ('code' == n) {
                    var l = t[n];
                    l;
                  }

                  if ('message' == n) t[n];
                });
                console.log('======AccountApiModule.pickImage() error========' + JSON.stringify(t));
              }
            }
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            u = this.props.navigation.navigate;
          [].push(require('./1237'));
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
                  style: A.managementBox,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: A.managementLi,
                    onPress: function () {
                      Premissions.checkLibrary(
                        function () {
                          t.pickImage();
                        },
                        function () {
                          module1117.default.alert(
                            'ios' === ReactNative.Platform.OS
                              ? module594.default.t('photoLibraryAndMediaTitle')
                              : module594.default.t('photoLibraryAndMediaTitle').replace('iPhone', 'Android'),
                            'ios' === ReactNative.Platform.OS ? module594.default.t('photoLibraryAndMediaContents') : module594.default.t('libraryAndroidContents'),
                            [
                              {
                                text: module594.default.t('cancel'),
                                style: 'cancel',
                              },
                              {
                                text: module594.default.t('toTravelTo'),
                                onPress: function () {
                                  module1181.default.openSettings();
                                },
                              },
                            ]
                          );
                        },
                        t
                      );
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: A.managementLiTxt,
                    },
                    module594.default.t('userImg')
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: A.managementLiRight,
                    },
                    React.default.createElement(ReactNative.Text, {
                      style: A.managementLiRightTxt,
                    }),
                    React.default.createElement(ReactNative.Image, {
                      source: this.state.userData.avatar
                        ? {
                            uri: this.state.userData.avatar,
                          }
                        : require('./1237'),
                      style: A.managementNserImg,
                    })
                  )
                ),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: A.managementLi,
                    onPress: function () {
                      u('replaceName');
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: A.managementLiTxt,
                    },
                    module594.default.t('userName')
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: A.managementLiRight,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: A.managementLiRightTxt,
                      },
                      this.state.userData.userName
                    ),
                    React.default.createElement(ReactNative.Image, {
                      source: require('./1401'),
                      style: A.managementIcon,
                    })
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [A.managementLi],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [A.managementLiTxt],
                    },
                    module594.default.t('userID')
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [A.managementLiRight],
                    },
                    React.default.createElement(ReactNative.Text, {
                      style: {
                        flex: 1,
                      },
                    }),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          A.managementLiRightTxt,
                          {
                            flex: 0,
                          },
                        ],
                        selectable: true,
                      },
                      this.state.userData.userId
                    )
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: A.managementBox,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: A.managementLi,
                  },
                  this.state.notShow
                    ? null
                    : React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          style: A.managementLi,
                          onPress: function () {},
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: A.managementLiTxt,
                          },
                          module594.default.t('areaCode')
                        ),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: A.managementLiRight,
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: A.managementLiRightTxt,
                            },
                            this.state.areaName + '(' + this.state.userData.areaCode + ')'
                          )
                        )
                      )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: A.managementLi,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: A.managementLiTxt,
                    },
                    module594.default.t('loginUser')
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: A.managementLiRight,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          A.managementLiRightTxt,
                          {
                            justifyContent: 'center',
                          },
                        ],
                      },
                      this.state.userData.nickName
                    )
                  )
                ),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: A.managementLi,
                    onPress: function () {
                      u('logoutName');
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: A.managementLiTxt,
                    },
                    module594.default.t('cancelAccount')
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: A.managementLiRight,
                    },
                    React.default.createElement(ReactNative.Text, {
                      style: A.managementLiRightTxt,
                    }),
                    React.default.createElement(ReactNative.Image, {
                      source: require('./1230'),
                      style: A.managementIcon,
                    })
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: A.managementBtnBox,
                },
                React.default.createElement(
                  module1135.default,
                  {
                    type: 'warning',
                    style: A.managementBtn,
                    onPress: function () {
                      t.outLogin();
                    },
                  },
                  module594.default.t('signOut')
                )
              ),
              1 == this.state.isodePicker
                ? React.default.createElement(module1250.default, {
                    isShow: this.state.isodePicker,
                    onPick: function (n) {
                      t.setState({
                        isodePicker: false,
                      });
                      setTimeout(function () {
                        module593.default.get('userData').then(function (l) {
                          l.areaCode = n.phoneCode;
                          l.areaName = n.countryName;
                          t.setState(
                            {
                              userData: l,
                              areaName: n.countryName,
                            },
                            function () {
                              module593.default.save('localUserData', l).then(function (t) {});
                              module593.default.save('userData', l).then(function (t) {
                                ReactNative.DeviceEventEmitter.emit('myLoginUser');
                                module1096.default.info(module594.default.t('uploadSuccessfully'), 1, undefined, false);
                                ReactNative.DeviceEventEmitter.emit('loginIndex');
                              });
                            }
                          );
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
    return module1401;
  })(React.default.Component);

exports.managementName = module1230;
var A = ReactNative.StyleSheet.create({
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
    managementBox: {
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(20),
      marginTop: module588.default.setSpText(10),
    },
    managementLi: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      paddingVertical: module588.default.setSpText(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    managementLiTxt: {
      flex: 1,
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    managementLiRight: {
      flex: 1,
      flexDirection: 'row',
      textAlign: 'right',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    managementNserImg: {
      width: module588.default.setSpText(42),
      height: module588.default.setSpText(42),
      borderRadius: module588.default.setSpText(42),
    },
    managementCenterTxt: {
      flex: 1,
    },
    managementLiRightTxt: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(14),
      flex: 1,
      textAlign: 'right',
      height: '100%',
    },
    managementIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      marginLeft: module588.default.setSpText(10),
    },
  }),
  R = module1230;
exports.default = R;
