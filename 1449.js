var module1135 = require('./1135'),
  module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = (function (t, s) {
    if (!s && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = I(s);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, u, f);
        else o[u] = t[u];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('./588')),
  module1147 = require('./1147'),
  module1145 = require('./1145'),
  module1111 = require('./1111'),
  module594 = require('./594');

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var s = new WeakMap(),
    n = new WeakMap();
  return (I = function (t) {
    return t ? n : s;
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

var U = '',
  module1174 = (function (t) {
    module35.default(b, t);

    var I = b,
      module1174 = k(),
      A = function () {
        var t,
          s = module34.default(I);

        if (module1174) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(s, arguments, n);
        } else t = s.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var s;
      module24.default(this, b);
      s = A.call(this, t);
      var n = JSON.stringify(s.props.route.params);
      s.state = {
        isAlert: false,
        alertType: null,
        gjData: null,
        iotId: JSON.parse(n).iotId,
        isUpadta: false,
        isCode: null,
        progress: null,
        interval: null,
        statusIntervsl: null,
        smsTime: 820,
        isHeight: true,
        firmwareVersion: null,
      };
      s.getProperties();
      s.queryByUser();
      return s;
    }

    module25.default(b, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.firmwareUpdata = ReactNative.DeviceEventEmitter.addListener('firmwareUpdata', function (s) {
            t.setState({
              WorkMode: s,
            });
          });
          if ('android' === ReactNative.Platform.OS) ReactNative.BackHandler.addEventListener('hardwareBackPress', this._onBackPressed.bind(this));
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.firmwareUpdata) this.firmwareUpdata.emitter.removeAllListeners('firmwareUpdata');
          module403.default.remove(U);
          clearInterval(this.state.interval);
          clearInterval(this.state.statusIntervsl);
          if ('android' === ReactNative.Platform.OS) ReactNative.BackHandler.removeEventListener('hardwareBackPress', this._onBackPressed.bind(this));

          this.setState = function (t, s) {};
        },
      },
      {
        key: 'getProperties',
        value: function () {
          var t = this;
          module1145.default.getProperties(this.state.iotId).then(function (s) {
            if ((console.log('--------\u673a\u5668\u4eba\u72b6\u6001' + JSON.stringify(s)), s && 200 == s.code && s.data)) {
              var n = s.data;
              if (n.elecReal && n.mode)
                t.setState({
                  elecReal: n.elecReal,
                  WorkMode: n.mode,
                });
            }
          });
        },
      },
      {
        key: 'queryByUser',
        value: function () {
          var t = this;
          U = module1096.default.loading('', 0);
          module1145.default.queryByUser(this.state.iotId).then(function (s) {
            module403.default.remove(U);
            if (s && s.code && 200 == s.code && s.data && '{}' !== JSON.stringify(s.data) && s.data.currentVersion && s.data.version && s.data.currentVersion != s.data.version)
              t.setState(
                {
                  version: s.data.version,
                  gjData: s.data,
                  alertType: 'GJ',
                  isUpadta: true,
                },
                function () {
                  t.setState({
                    isAlert: true,
                  });
                }
              );
            else t.getDeviceInfo();
          });
        },
      },
      {
        key: 'getDeviceInfo',
        value: function () {
          var t = this;
          this.setState({
            isAlert: false,
          });
          module1111.default.getDeviceInfo(this.state.iotId).then(function (s) {
            if (s && s.code && 200 == s.code) {
              console.log('=================' + JSON.stringify(s));
              if (s.data && s.data.firmwareVersion)
                t.setState({
                  firmwareVersion: s.data.firmwareVersion,
                });
            }
          });
        },
      },
      {
        key: '_onBackPressed',
        value: function () {
          this.setState({
            isHeight: false,
          });
        },
      },
      {
        key: 'batchUpgradeByUser',
        value: function () {
          var t = this;

          if (this.state.elecReal < 50 || ('charge' != this.state.WorkMode && 'fullcharge' != this.state.WorkMode)) {
            module403.default.remove(U);
            return void module1096.default.info(module594.default.t('deviceCharging'), 1, undefined, false);
          }

          module1145.default.otaProgress(this.state.iotId).then(function (s) {
            if (200 == s.data.code)
              module1145.default.batchUpgradeByUser(t.state.iotId).then(function (s) {
                console.log('message=============>' + JSON.stringify(s));

                if (200 == s.code) {
                  t._countDownAction();

                  t._statusCountDownAction();
                } else module403.default.remove(U);
              });
            else {
              module403.default.remove(U);
              module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
            }
          });
        },
      },
      {
        key: 'otaProgressService',
        value: function () {
          var t = this;
          module1145.default.otaProgress(this.state.iotId).then(function (s) {
            var l = s.data;

            if (200 == l.code) {
              var u = l.data;

              if (-1 == u.progress) {
                t.setState(
                  {
                    isAlert: false,
                    alertType: '',
                    isUpadta: true,
                  },
                  function () {
                    module1096.default.info(module594.default.t('firmwareFailed'), 1, undefined, false);
                  }
                );
                clearInterval(t.state.interval);
                clearInterval(t.state.statusIntervsl);
                module403.default.remove(U);
                return false;
              }

              if (u.progress > 0) {
                module403.default.remove(U);
                t.setState({
                  isAlert: true,
                  alertType: 'GJUP',
                  progress: u.progress,
                });

                if (100 == u.progress) {
                  clearInterval(t.state.interval);
                  clearInterval(t.state.statusIntervsl);
                  t.setState(
                    {
                      isAlert: false,
                      alertType: '',
                      isUpadta: false,
                    },
                    function () {
                      module1096.default.info(module594.default.t('updateCompleted'), 1, undefined, false);
                      t.setState({
                        gjData: null,
                      });
                      t.getProperties();
                      t.queryByUser();
                    }
                  );
                }
              }

              t.setState({
                isCode: u.code,
              });
            }
          });
        },
      },
      {
        key: '_countDownAction',
        value: function () {
          var t = this;
          this.setState({
            isUpadta: false,
          });
          this.state.interval = setInterval(function () {
            t.otaProgressService();
          }, 2e3);
        },
      },
      {
        key: '_statusCountDownAction',
        value: function () {
          var t = this;
          this.state.statusIntervsl = setInterval(function () {
            if (0 === t.state.smsTime--) {
              if (t.state.interval) clearInterval(t.state.interval);
              if (t.state.statusIntervsl) clearInterval(t.state.statusIntervsl);
              t.setState({
                smsTime: 0,
                isAlert: false,
                alertType: '',
                isUpadta: true,
              });
              module403.default.remove(U);
              Modal.alert(module594.default.t('Tips'), module594.default.t('firmwareUpdateFail'), [
                {
                  text: module594.default.t('btnConfirm'),
                  style: 'cancel',
                },
              ]);
            }
          }, 1e3);
        },
      },
      {
        key: 'updataData',
        value: function () {
          if (2 == this.state.isCode) {
            module1096.default.info(module594.default.t('deviceCharging'), 1, undefined, false);
            return false;
          }

          U = module1096.default.loading('', 0);
          this.batchUpgradeByUser();
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
              React.default.createElement(ReactNative.StatusBar, {
                translucent: this.state.isHeight,
                backgroundColor: 'transparent',
                barStyle: 'default',
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: B.updataTop,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: [
                      B.updataTopBack,
                      {
                        marginTop: module588.titleHeight,
                      },
                    ],
                    onPress: function () {
                      t.setState(
                        {
                          isHeight: false,
                        },
                        function () {
                          t.props.navigation.goBack();
                        }
                      );
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1442'),
                    resizeMode: 'contain',
                    style: B.updataTopBackImg,
                  }),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: B.updataTopTitle,
                    },
                    module594.default.t('firmwareUpgrade')
                  )
                ),
                React.default.createElement(ReactNative.Image, {
                  source: require('./1450'),
                  style: B.updataTopImg,
                }),
                React.default.createElement(ReactNative.Image, {
                  source: require('./1174'),
                  style: B.updataTopImgTs,
                })
              ),
              this.state.gjData && '{}' !== JSON.stringify(this.state.gjData)
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: B.yesUpdata,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: B.yesUpdataTxt,
                      },
                      module594.default.t('currentVersion'),
                      ' ',
                      this.state.gjData && this.state.gjData.currentVersion ? this.state.gjData.currentVersion : '',
                      ' '
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: B.yesUpdataTxt,
                      },
                      module594.default.t('atestVersion'),
                      ' ',
                      this.state.gjData && this.state.gjData.version ? this.state.gjData.version : '',
                      ' '
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: B.updataPrompt,
                      },
                      module594.default.t('newVersionUpdate')
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: B.updataPromptTxt,
                      },
                      this.state.gjData && this.state.gjData.desc ? this.state.gjData.desc : ''
                    )
                  )
                : React.default.createElement(
                    ReactNative.View,
                    {
                      style: B.yesUpdata,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: B.yesUpdataTxt,
                      },
                      module594.default.t('currentVersion'),
                      ' ',
                      this.state.firmwareVersion ? this.state.firmwareVersion : '',
                      ' '
                    )
                  ),
              this.state.gjData && '{}' !== JSON.stringify(this.state.gjData)
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: B.updataBtn,
                    },
                    React.default.createElement(
                      module1135.default,
                      {
                        type: 'primary',
                        size: 'small',
                        style: [B.updataBtnSty, this.state.isUpadta ? B.updataBtnStyActive : ''],
                        onPress: function () {
                          t.updataData();
                        },
                      },
                      module594.default.t('updateImmediately')
                    )
                  )
                : null,
              this.state.isAlert
                ? React.default.createElement(module1147.default, {
                    isShow: this.state.isAlert,
                    isType: this.state.alertType,
                    isData: {
                      version: this.state.gjData && this.state.gjData.version ? this.state.gjData.version : '',
                      progress: this.state.progress,
                    },
                    onPick: function () {
                      t.setState({
                        isAlert: false,
                      });
                    },
                    onData: function (s) {
                      t.updataData();
                    },
                  })
                : null
            )
          );
        },
      },
    ]);
    return b;
  })(React.default.Component);

exports.firmwareUpdata = module1174;
var B = ReactNative.StyleSheet.create({
    updataLoading: {
      height: module588.default.setSpText(48),
      backgroundColor: '#E6EFFA',
      borderColor: '#0A72FA',
      borderRadius: module588.default.setSpText(16),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    updataBtnSty: {
      height: module588.default.setSpText(48),
      backgroundColor: 'rgba(10, 114, 250, 0.4)',
      borderWidth: 0,
    },
    updataBtnStyActive: {
      backgroundColor: '#0A72FA',
    },
    updataBtn: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      left: 0,
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(20),
    },
    updataPromptTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
    },
    updataPrompt: {
      color: '#0A72FA',
      fontSize: module588.default.setSpText(24),
      paddingVertical: module588.default.setSpText(10),
    },
    yesUpdataTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#0A72FA',
    },
    yesUpdata: {
      marginTop: module588.default.setSpText(20),
      paddingLeft: module588.default.setSpText(20),
    },
    onUpdataTxt: {
      textAlign: 'center',
      color: '#213B5C',
      fontSize: module588.default.setSpText(16),
      paddingBottom: module588.default.setSpText(10),
    },
    onUpdata: {
      marginTop: module588.default.setSpText(20),
    },
    updataTopTitle: {
      flex: 1,
      color: '#F5F6FA',
      textAlign: 'center',
      fontSize: module588.default.setSpText(16),
    },
    updataTopBackImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    updataTopBack: {
      position: 'absolute',
      width: '100%',
      height: module588.default.setSpText(70),
      flexDirection: 'row',
      zIndex: 1,
      paddingHorizontal: module588.default.setSpText(12),
    },
    updataTop: {
      position: 'relative',
    },
    updataTopImgTs: {
      position: 'absolute',
      width: module588.default.setSpText(287),
      height: module588.default.setSpText(133),
      bottom: 0,
      left: '50%',
      marginLeft: module588.default.setSpText(-143.5),
    },
    updataTopImg: {
      width: '100%',
      height: module588.default.setSpText(202) + module588.statusBarHeight,
    },
  }),
  A = module1174;
exports.default = A;
