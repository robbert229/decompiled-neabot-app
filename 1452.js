var module1117 = require('./1117'),
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
  module1148 = require('./1148'),
  module593 = require('./593'),
  module1146 = require('./1146'),
  module1145 = require('./1145'),
  module594 = require('./594');

require('./920');

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

var I = '',
  module1164 = (function (t) {
    module35.default(P, t);

    var module588 = P,
      module1164 = C(),
      w = function () {
        var t,
          o = module34.default(module588);

        if (module1164) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function P(t) {
      var o;
      module24.default(this, P);
      (o = w.call(this, t)).state = {
        spinValue: new ReactNative.Animated.Value(0),
        childLIcon: require('./1297'),
        voiceDta: [],
        language: null,
        languageChilder: null,
        voiceIndex: 0,
        dowType: null,
        isLanguage: null,
        isLanguageChilder: null,
        isanimate: false,
        voiceID: null,
        voiceAllData: null,
      };
      o.getCurVoice();
      return o;
    }

    module25.default(P, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            o = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.ControlApiModule);
          this.eventEmitter = o.addListener('addTotalListener', function (o) {
            console.log('==================eeeeeeeee=====msg=========>>' + JSON.stringify(o));
            var s = o.data;

            if (s && s.hasOwnProperty('VoicePackProgress')) {
              var u = JSON.parse(s.VoicePackProgress).Progress;
              if (u < 100) I = module1096.default.loading();
              else if (100 == u) {
                module403.default.remove(I);
                var c = JSON.parse(s.VoicePackProgress).Name.split('/'),
                  f = c[4],
                  v = c[3];
                t.setState(
                  {
                    isLanguage: v,
                    isLanguageChilder: f,
                  },
                  function () {
                    t.setState({
                      languageChilder: t.state.isLanguageChilder,
                      language: t.state.isLanguage,
                    });
                  }
                );
                t.state.voiceDta.map(function (t, o) {
                  if (t.language != v) {
                    t.isSelected = false;
                    t.isOpened = false;
                  } else {
                    t.isSelected = true;
                    t.isOpened = true;
                  }
                });
                setTimeout(function () {
                  module1096.default.info(module594.default.t('setSuccessfully'), 1, undefined, false);
                }, 1500);
              }

              switch (u) {
                case -1:
                  module403.default.remove(I);
                  module1096.default.info(module594.default.t('repeatRequest'), 1, undefined, false);
                  break;

                case -2:
                  module403.default.remove(I);
                  module1096.default.info(module594.default.t('verificationFailed'), 1, undefined, false);
                  break;

                case -3:
                  module403.default.remove(I);
                  module1096.default.info(module594.default.t('downloadFailed'), 1, undefined, false);
                  break;

                case -4:
                  module403.default.remove(I);
                  module1096.default.info(module594.default.t('voicePackageUpdate'), 1, undefined, false);
                  break;

                case -5:
                  module403.default.remove(I);
                  module1096.default.info(module594.default.t('notEnoughStorage'), 1, undefined, false);
                  break;

                case -6:
                  module403.default.remove(I);
                  module1096.default.info(module594.default.t('wrongParameter'), 1, undefined, false);
              }
            }
          });
          this.Progress = ReactNative.DeviceEventEmitter.addListener('Progress', function (o) {
            var s = JSON.parse(o).Name.split('/');

            switch (
              (console.log('Progress : ' + s[4], +JSON.parse(o).Progress),
              JSON.parse(o).Progress < 100
                ? (I = module1096.default.loading())
                : 100 == JSON.parse(o).Progress &&
                  (module403.default.remove(I),
                  t.setState(
                    {
                      isLanguage: s[3],
                      isLanguageChilder: s[4],
                    },
                    function () {
                      t.setState({
                        languageChilder: t.state.isLanguageChilder,
                        language: t.state.isLanguage,
                      });
                    }
                  ),
                  t.state.voiceDta.map(function (t, o) {
                    if (t.language != s[3]) {
                      t.isSelected = false;
                      t.isOpened = false;
                    } else {
                      t.isSelected = true;
                      t.isOpened = true;
                    }
                  }),
                  setTimeout(function () {
                    module1096.default.info(module594.default.t('setSuccessfully'), 1, undefined, false);
                  }, 1500)),
              JSON.parse(o).Progress)
            ) {
              case -1:
                module403.default.remove(I);
                module1096.default.info(module594.default.t('repeatRequest'), 1, undefined, false);
                break;

              case -2:
                module403.default.remove(I);
                module1096.default.info(module594.default.t('verificationFailed'), 1, undefined, false);
                break;

              case -3:
                module403.default.remove(I);
                module1096.default.info(module594.default.t('downloadFailed'), 1, undefined, false);
                break;

              case -4:
                module403.default.remove(I);
                module1096.default.info(module594.default.t('voicePackageUpdate'), 1, undefined, false);
                break;

              case -5:
                module403.default.remove(I);
                module1096.default.info(module594.default.t('notEnoughStorage'), 1, undefined, false);
                break;

              case -6:
                module403.default.remove(I);
                module1096.default.info(module594.default.t('wrongParameter'), 1, undefined, false);
            }
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.eventEmitter) this.eventEmitter.emitter.removeAllListeners('addTotalListener');
          if (this.Progress) this.Progress.emitter.removeAllListeners('Progress');
          module403.default.remove(I);

          this.setState = function (t, o) {};
        },
      },
      {
        key: 'getCurVoice',
        value: function () {
          var t = this;
          I = module1096.default.loading('', 0);
          console.log('this.props.route.params.iotId===' + JSON.stringify(this.props.route.params.iotId));
          module1145.default.getCurVoice(this.props.route.params.iotId).then(function (o) {
            if ((module403.default.remove(I), 200 == o.data.code)) {
              var s = o.data.data;
              t.setState(
                {
                  dowType: s.state,
                },
                function () {
                  t.setState({
                    language: s.name,
                    languageChilder: s.name,
                    voiceID: t.props.route.params.productId,
                  });
                  t.getVoiceVersionUrl();
                }
              );
            } else 6205 == o.data.code ? module1096.default.info(module594.default.t('notOnline'), 1, undefined, false) : 1101354 == o.data.code ? module1096.default.info(o.localMsg, 1, undefined, false) : null == t.state.languageChilder && t.getCurVoice();
          });
        },
      },
      {
        key: 'getVoiceVersionUrl',
        value: function () {
          var t = this;
          module1146.default
            .getVoiceVersionUrl()
            .then(function (o) {
              console.log('=============================== \u83b7\u53d6\u8bed\u97f3\u5305\u7248\u672c\u548c\u94fe\u63a5 = ' + JSON.stringify(o));
              module593.default.get('getVoiceObjData').then(function (n) {
                if (
                  (console.log(
                    '\u6bd4\u8f83\u5bf9\u5e94\u8bed\u8a00ID  \u5bf9\u5e94\u7684\u4e00\u7ea7\u914d\u7f6e\u7248\u672c\u548c\u4e8c\u7ea7\u914d\u7f6e\u7248\u672c====' +
                      JSON.stringify(n)
                  ),
                  n)
                ) {
                  var l = false,
                    s = null,
                    u = null;

                  if (
                    (n.map(function (o, n) {
                      if (o && o.voiceID == t.state.voiceID) {
                        l = true;
                        s = o;
                        u = n;
                      }
                    }),
                    l && s)
                  ) {
                    console.log('\u672c\u5730\u5b58\u5728\u914d\u7f6e\u6570\u636e' + JSON.stringify(n), 'Itemindex========' + u);
                    var c = s.data;
                    console.log('\u7ebf\u4e0a\u7248\u672c' + JSON.stringify(o.version), '========\u7ebf\u4e0b\u7248\u672c' + c.downloadVersion);
                    if (Number(o.version) >= Number(c.downloadVersion)) t.getVoiceDetail(o, n);
                    else {
                      c = t.dealWithVoiceData(c);
                      t.setState({
                        voiceAllData: c,
                        voiceDta: c.voicePackets,
                      });
                    }
                  } else t.getVoiceDetail(o, n);
                } else t.getVoiceDetail(o, []);
              });
            })
            .catch(function (t) {
              module1096.default.info(t.message, 1, undefined, false);
            });
        },
      },
      {
        key: 'dealWithVoiceData',
        value: function (t) {
          for (var o = t.voicePackets, n = [], l = '', s = 0; s < o.length; s++) {
            for (var u = o[s].lists, c = false, f = 0; f < u.length; f++) {
              console.log('this.state.languageChilder:' + this.state.languageChilder, 'lists[si].name:' + u[f].name);
              if (u[f].name == this.state.languageChilder) c = true;
            }

            if (c) {
              o[s].isSelected = true;
              l = o[s].language;
            } else o[s].isSelected = false;

            o[s].isOpened = false;
            n.push(o[s]);
          }

          this.setState({
            language: l,
          });
          t.voicePackets = n;
          return t;
        },
      },
      {
        key: 'getVoiceDetail',
        value: function (t) {
          var o = this,
            l = arguments.length <= 1 ? undefined : arguments[1];
          module1146.default.getVoiceDetail(t.url).then(function (s) {
            module403.default.remove(I);
            s.downloadVersion = t.version;
            var u = o.dealWithVoiceData(s);
            o.setState({
              voiceAllData: u,
              voiceDta: u.voicePackets,
            });
            var c = {
                voiceID: o.props.route.params.productId,
                data: u,
              },
              f = false;
            l.map(function (t, n) {
              if (t) {
                console.log('item.voiceID:' + t.voiceID, 'productId:' + o.props.route.params.productId);

                if (t.voiceID == o.props.route.params.productId) {
                  f = true;
                  t.data = u;
                }
              }
            });
            if (!f) l.push(c);
            module593.default.save('getVoiceObjData', l);
          });
        },
      },
      {
        key: 'updateVoice',
        value: function (t, n, s, u) {
          var c = this,
            f = t + '/' + n;

          if ('downloading' == this.state.dowType) {
            module1096.default.info(module594.default.t('voicePackageIsDownloading'), 1, undefined, false);
            return false;
          }

          module1117.default.alert(
            module594.default.t('Tips'),
            'ko' == module594.default.locale ? module594.default.t('needToSwitch') : module594.default.t('needToSwitch') + s + module594.default.t('voicePackage'),
            [
              {
                text: module594.default.t('cancel'),
                style: 'cancel',
              },
              {
                text: module594.default.t('btnConfirm'),
                onPress: function () {
                  module1145.default.updateVoice(c.props.route.params.iotId, c.props.route.params.productId, f).then(function (t) {});
                },
              },
            ]
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.state.spinValue.interpolate({
              inputRange: [0, 0],
              outputRange: ['180deg', '180deg'],
            });
          new module1148.default.DataSource({
            rowHasChanged: function (t, o) {
              return t !== o;
            },
          });
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
              ReactNative.ScrollView,
              null,
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
                    style: D.voiceBox,
                  },
                  this.state.voiceDta.map(function (n, l) {
                    return React.default.createElement(
                      ReactNative.View,
                      {
                        style: D.voiceLi,
                        key: l,
                      },
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          style: D.voiceLiChild,
                          onPress: function () {
                            t.state.voiceDta.map(function (t, o) {
                              if (t.language != n.language) t.isOpened = false;
                              else t.isOpened = !t.isOpened;
                            });
                            t.setState({
                              isanimate: (t.state.isanimate = !t.state.isanimate),
                              voiceIndex: l,
                            });
                          },
                        },
                        React.default.createElement(ReactNative.Animated.Image, {
                          style: [
                            D.voiceLiChildLIcon,
                            t.state.isanimate && t.state.voiceIndex == l
                              ? {
                                  transform: [
                                    {
                                      rotate: o,
                                    },
                                  ],
                                }
                              : '',
                          ],
                          source: t.state.childLIcon,
                        }),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: D.voiceLiChildTitle,
                          },
                          n.language_dec
                        ),
                        n.language == t.state.language && n.isSelected && !n.isOpened
                          ? React.default.createElement(ReactNative.Image, {
                              source: require('./1165'),
                              resizeMode: 'contain',
                              style: D.voiceLiChildRIcon,
                            })
                          : null
                      ),
                      n.lists && t.state.isanimate && t.state.voiceIndex == l
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: D.voiceLiGrandson,
                            },
                            n.lists.map(function (o, l) {
                              return React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  style: D.voiceLiGrandsonLi,
                                  key: l,
                                  onPress: function () {
                                    t.updateVoice(n.src_dir, o.name, o.dec, n.language);
                                  },
                                },
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: D.voiceLiGrandsonTxt,
                                  },
                                  ' ',
                                  o.dec,
                                  ' '
                                ),
                                React.default.createElement(ReactNative.Image, {
                                  source: o.name == t.state.languageChilder ? require('./1165') : require('./1164'),
                                  style: D.voiceLiGrandsonIcon,
                                })
                              );
                            })
                          )
                        : null
                    );
                  })
                )
              )
            )
          );
        },
      },
    ]);
    return P;
  })(React.default.Component);

exports.voice = module1164;
var D = ReactNative.StyleSheet.create({
    voiceLiGrandsonTxt: {
      flex: 1,
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    voiceLiGrandsonIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    voiceLiGrandsonLi: {
      flexDirection: 'row',
      paddingVertical: module588.default.setSpText(10),
    },
    voiceLiGrandson: {
      paddingHorizontal: module588.default.setSpText(18),
    },
    voiceBox: {
      paddingHorizontal: module588.default.setSpText(16),
      marginTop: module588.default.setSpText(20),
    },
    voiceLi: {
      marginBottom: module588.default.setSpText(10),
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(8),
    },
    voiceLiChildTitle: {
      flex: 1,
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
      paddingLeft: module588.default.setSpText(10),
    },
    voiceLiChildRIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    voiceLiImg: {
      width: '100%',
      borderRadius: module588.default.setSpText(8),
      position: 'absolute',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      height: '100%',
    },
    voiceLiChildLIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    voiceLiChild: {
      flexDirection: 'row',
      paddingHorizontal: module588.default.setSpText(18),
      paddingVertical: module588.default.setSpText(14),
      marginTop: module588.default.setSpText(-4),
    },
  }),
  w = module1164;
exports.default = w;
