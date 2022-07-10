require('./943');

require('./522');

var regeneratorRuntime = require('regenerator-runtime'),
  module1131 = require('./1131'),
  module1132 = require('./1132'),
  module1135 = require('./1135'),
  module1117 = require('./1117'),
  module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1137 = require('./1137'),
  ReactNative = require('react-native'),
  module593 = require('./593'),
  module588 = W(require('./588')),
  module1111 = require('./1111'),
  module1145 = require('./1145'),
  module915 = require('./915'),
  module1146 = require('./1146'),
  module1147 = require('./1147'),
  module594 = require('./594'),
  module916 = require('./916'),
  module421 = require('./421'),
  module1110 = require('./1110'),
  module1180 = require('./1180'),
  module1181 = W(require('./1181')),
  module1188 = require('./1188'),
  module920 = require('./920'),
  module1196 = require('./1196'),
  module1201 = require('./1201'),
  module1218 = require('./1218'),
  module1219 = require('./1219'),
  module1220 = require('./1220');

require('./606');

require('./1221');

function J(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (J = function (t) {
    return t ? o : n;
  })(t);
}

function W(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = J(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
    s = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (u && (u.get || u.set)) Object.defineProperty(l, c, u);
      else l[c] = t[c];
    }

  l.default = t;
  if (o) o.set(t, l);
  return l;
}

function z() {
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
module1137.default.CheckFrequency.MANUAL;

var G = Date.now(),
  H = [],
  module1065 = (function (t) {
    module35.default(module1224, t);

    var module1196 = module1224,
      J = z(),
      W = function () {
        var t,
          n = module34.default(module1196);

        if (J) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function module1224(t) {
      var n;
      module24.default(this, module1224);

      (n = W.call(this, t)).onBackPressed = function () {
        if (n.props.navigation.isFocused())
          G && G + 2e3 >= Date.now() ? ReactNative.BackHandler.exitApp() : ((G = Date.now()), module1096.default.info(n.state.oneDropOut, 1, undefined, false));
      };

      n._handleAppStateChange = function (t) {
        console.log('-------------- _handleAppStateChange nextAppState  = ' + t);

        if (null != t && 'active' === t && n.state.isNerverAskLocation && 'android' == ReactNative.Platform.OS) {
          n.setState({
            isNerverAskLocation: false,
          });
          n.checkRequestLocation();
        }

        ReactNative.Platform.OS;
      };

      n.state = {
        userData: '',
        subMode: null,
        isNoticeShow: true,
        isData: false,
        isAlert: false,
        alertType: 'HT',
        modalVisible: false,
        isMandatory: false,
        currentVersion: '',
        description: '',
        updataDes: null,
        updataUrl: null,
        isNeed: false,
        Info: {},
        ws: {},
        isConnected: null,
        connectInfo: '',
        isNerverAskLocation: false,
        appRobotSet: null,
        pageNum: 1,
        isLoading: true,
        error: false,
        errorInfo: '',
        shopData: [],
        getPropertiesData: [],
        localData: [],
        showFoot: 0,
        isRefreshing: false,
        bucketName: '',
        endpoint: '',
        userIsLogin: false,
        isShowed: false,
        alertYSFWType: 'YSFW',
        isOK: false,
        isInit: true,
        logged: module594.default.t('logged'),
        oneDropOut: module594.default.t('oneDropOut'),
        pleaseSelectAreaFirst: module594.default.t('pleaseSelectAreaFirst'),
        notOnline: module594.default.t('notOnline'),
        scanCodeSuccess: module594.default.t('scanCodeSuccess'),
        Q1624503037: module594.default.t('Q1624503037'),
        T1624503168: module594.default.t('T1624503168'),
        scanCodeFailure: module594.default.t('scanCodeFailure'),
        locationTitle: module594.default.t('locationTitle'),
        Tips: module594.default.t('Tips'),
        isAddress: module594.default.t('isAddress'),
        agreeLocation: module594.default.t('agreeLocation'),
        cancel: module594.default.t('cancel'),
        toTravelTo: module594.default.t('toTravelTo'),
        standby: module594.default.t('standby'),
        cleaning: module594.default.t('cleaning'),
        pointCleaning: module594.default.t('pointCleaning'),
        areaCleaning: module594.default.t('areaCleaning'),
        totalCleaning: module594.default.t('totalCleaning'),
        pointCleaning: module594.default.t('pointCleaning'),
        partitionAnCleaning: module594.default.t('partitionAnCleaning'),
        intelligentGlobal: module594.default.t('intelligentGlobal'),
        charge: module594.default.t('charge'),
        pause: module594.default.t('pause'),
        fault: module594.default.t('fault'),
        dormant: module594.default.t('dormant'),
        backcharge: module594.default.t('backcharge'),
        fullcharge: module594.default.t('fullcharge'),
        findchargerpause: module594.default.t('findchargerpause'),
        shutdown: module594.default.t('shutdown'),
        rfctrl: module594.default.t('rfctrl'),
        remainingBattery: module594.default.t('remainingBattery'),
        endCleaning: module594.default.t('endCleaning'),
        startCleaningTime: module594.default.t('startCleaningTime'),
        addShopp: module594.default.t('addShopp'),
        C1619077654: module594.default.t('C1619077654'),
        welcome: module594.default.t('welcome'),
        youLogin: module594.default.t('youLogin'),
        cameraTitle: module594.default.t('cameraTitle'),
        cameraContents: module594.default.t('cameraContents'),
        cameraAndroidContents: module594.default.t('cameraAndroidContents'),
        mapId: 0,
      };

      n._checkLoginStatus(-1);

      return n;
    }

    module25.default(module1224, [
      {
        key: 'handleFirstConnectivityChange',
        value: function (t) {
          var n = this;
          this.setState(
            {
              connectInfo: t,
            },
            function () {
              if (t && 1 == t.isConnected && n.state.isInit)
                n.setState(
                  {
                    isInit: false,
                  },
                  function () {}
                );
            }
          );
        },
      },
      {
        key: 'shouldComponentUpdate',
        value: function () {
          return true;
        },
      },
      {
        key: '_onEvents',
        value: function () {
          var t = this,
            n = this.props.navigation.navigate;
          this.locationDenied = ReactNative.DeviceEventEmitter.addListener('locationDenied', function (n) {
            if ('never_ask_again' == n)
              t.setState({
                isNerverAskLocation: true,
              });
            else
              t.setState({
                isNerverAskLocation: false,
              });
          });
          this.locationGranted = ReactNative.DeviceEventEmitter.addListener('locationGranted', function (o) {
            t.setState({
              isNerverAskLocation: false,
            });
            n('networkList', {
              appRobotSet: t.state.appRobotSet,
            });
          });
          ReactNative.AppState.addEventListener('change', this._handleAppStateChange);
          var o = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.ControlApiModule);

          if (
            ((this.eventEmitter = o.addListener('addTotalListener', function (n) {
              var o = n.data;

              if (o) {
                if ((o.hasOwnProperty('output') && ReactNative.DeviceEventEmitter.emit('wsEvent', o.output ? o.output : null), o.hasOwnProperty('operation'))) {
                  ReactNative.DeviceEventEmitter.emit('removeItemUI', n);
                  return false;
                }

                if (o.hasOwnProperty('elecReal') || o.hasOwnProperty('subMode') || o.hasOwnProperty('nickName') || o.hasOwnProperty('mode') || o.hasOwnProperty('PauseSwitch')) {
                  for (var l = t.state.getPropertiesData.length, s = null, c = 0, u = 0; u < l; u++) {
                    var f = t.state.getPropertiesData[u];

                    if (f && f.deviceId == n.deviceId) {
                      c = u;
                      s = f;
                    }
                  }

                  if (s) {
                    if (o.PauseSwitch) s.PauseSwitch = o.PauseSwitch;
                    if (o.subMode) s.subMode = o.subMode;
                    if (o.status) s.status = o.status;
                    if (o.mode) s.WorkMode = o.mode;
                    if (o.elecReal) s.BatteryState = o.elecReal;
                    if (o.nickName) s.nickName = o.nickName;
                    ReactNative.DeviceEventEmitter.emit('refreshOneItemUI', s, c);
                  }
                }
              }
            })),
            (this.eventEmitter = o.addListener('AccountEventReminder', function (t) {
              console.log('==================== \u7528\u6237\u8d26\u6237\u76d1\u542c AccountEventReminder ' + JSON.stringify(t));
            })),
            (this.eventEmitter = o.addListener('receiver', function (n) {
              if (
                (console.log(
                  '==================== \u76d1\u8bbe\u5907\u4fe1\u606f \u5e95\u90e8\u5bfc\u822a\u663e\u793a\u7ea2\u70b9\u542c\u914d\u7f51 receiver = ' + JSON.stringify(n)
                ),
                n.hasOwnProperty('title'))
              ) {
                var o = n.title;
                if ('\u6e05\u626b\u5b8c\u6210' === (o = o.replace(/\s*/g, ''))) t.checkStateToSaveMap();
              }

              ReactNative.DeviceEventEmitter.emit('isContent', true);
              ReactNative.DeviceEventEmitter.emit('isShareIt');
              H = [];
              t.setState(
                {
                  isRefreshing: true,
                  shopData: [],
                },
                function () {
                  ReactNative.DeviceEventEmitter.emit('indexList');
                }
              );
            })),
            (this.isloginUser = ReactNative.DeviceEventEmitter.addListener('loginIndex', function (n) {
              if (n && undefined !== n && 0 == n.dontCheck) t._checkLoginStatus(!n.dontCheck);
              else
                t.setState({}, function () {
                  ReactNative.DeviceEventEmitter.emit('indexList');
                });
            })),
            'android' === ReactNative.Platform.OS && ReactNative.BackHandler.addEventListener('hardwareBackPress', this.onBackPressed),
            module1145.default.addTotalListener(),
            'android' === ReactNative.Platform.OS)
          ) {
            var l = new ReactNative.NativeEventEmitter();
            this.eventEmitterVersiont = l.addListener('downloadApk', function (t) {
              console.log('======================================= home app \u7248\u672c\u5347\u7ea7\u76d1\u542c\u4e0b\u8f7d\u72b6\u6001 = ' + JSON.stringify(t));
              ReactNative.DeviceEventEmitter.emit('appUp', t.progress);
            });
          }
        },
      },
      {
        key: 'checkStateToSaveMap',
        value: function () {
          if (Config.MutilMap)
            module593.default.get('createMutilMap').then(function (t) {
              if ((console.log('\u9996\u9875\u63a5\u6536\u5230\u6e05\u626b\u5b8c\u6210\uff1a' + JSON.stringify(t)), t)) {
                var n = {
                  deviceId: t.iotId,
                };
                module1180.default('getDeviceAttributes', n, function (n) {
                  if (n.data.hasOwnProperty('multiMapsInfo')) {
                    var o = n.data.multiMapsInfo;
                    if (undefined != o && null != o) o = o.replace(/\\\"/g, '"');
                    if (undefined != o && null != o) o = o.replace(/\"{/g, '{');
                    if (undefined != o && null != o) o = o.replace(/}\"/g, '}');
                    console.log('\u591a\u697c\u5c42\u5730\u56fe:' + o);
                    var l = JSON.parse(o);

                    if (undefined != n.data && null != n.data && undefined != n.data.map && null != n.data.map) {
                      var s = n.data.map;
                      if (undefined != s && null != s) s = s.replace(/\\\"/g, '"');
                      if (undefined != s && null != s) s = s.replace(/\"{/g, '{');
                      if (undefined != s && null != s) s = s.replace(/}\"/g, '}');
                      var c = JSON.parse(s);

                      if (null != c && undefined != c) {
                        var u = c.mapId,
                          f = l.maps;

                        if (f && f.length >= 3) {
                          for (var p = false, h = 0; h < f.length; h++) {
                            var v = f[h];

                            if (v && '' != v) {
                              var y = v.mapId;

                              if (u == y) {
                                p = true;
                                break;
                              }
                            }
                          }

                          if (!p) return void console.log('\u8d85\u8fc7\u4e09\u5f20\u56fe');
                        }

                        console.log('\u8bf7\u6c42\u4fdd\u5b58\u53d8\u91cf22');
                        module1145.default
                          .operateMap(
                            t.iotId,
                            'save',
                            JSON.stringify({
                              type: 'local',
                              mapId: u,
                            })
                          )
                          .then(function (n) {
                            console.log('\u4fdd\u5b58\u5730\u56fe\u8fd4\u56de11111' + JSON.stringify(n), 'mapId:' + u, 'iotId:' + t.iotId);
                            if ('ios' == ReactNative.Platform.OS)
                              n && 200 == n.data.code
                                ? undefined != n.data.data.code &&
                                  0 == n.data.data.code &&
                                  (module593.default.delete('createMutilMap', true), console.log('\u4fdd\u5b58\u591a\u5730\u56fe\u6210\u529f'))
                                : console.log((n.localMsg, n.localMsg));
                            else if (n && 200 == n.code) {
                              module593.default.delete('createMutilMap', true);
                              console.log('\u4fdd\u5b58\u591a\u5730\u56fe\u6210\u529f');
                            } else console.log((n.localMsg, n.localMsg));
                          });
                      }
                    }
                  }
                });
              } else console.log('111\u65e0\u4fdd\u5b58\u53d8\u91cf');
            });
        },
      },
      {
        key: 'storeChange',
        value: function () {
          this.setState({
            logged: module594.default.t('logged'),
            oneDropOut: module594.default.t('oneDropOut'),
            pleaseSelectAreaFirst: module594.default.t('pleaseSelectAreaFirst'),
            notOnline: module594.default.t('notOnline'),
            scanCodeSuccess: module594.default.t('scanCodeSuccess'),
            Q1624503037: module594.default.t('Q1624503037'),
            T1624503168: module594.default.t('T1624503168'),
            scanCodeFailure: module594.default.t('scanCodeFailure'),
            locationTitle: module594.default.t('locationTitle'),
            Tips: module594.default.t('Tips'),
            isAddress: module594.default.t('isAddress'),
            agreeLocation: module594.default.t('agreeLocation'),
            cancel: module594.default.t('cancel'),
            toTravelTo: module594.default.t('toTravelTo'),
            standby: module594.default.t('standby'),
            cleaning: module594.default.t('cleaning'),
            pointCleaning: module594.default.t('pointCleaning'),
            areaCleaning: module594.default.t('areaCleaning'),
            totalCleaning: module594.default.t('totalCleaning'),
            pointCleaning: module594.default.t('pointCleaning'),
            partitionAnCleaning: module594.default.t('partitionAnCleaning'),
            intelligentGlobal: module594.default.t('intelligentGlobal'),
            charge: module594.default.t('charge'),
            pause: module594.default.t('pause'),
            fault: module594.default.t('fault'),
            dormant: module594.default.t('dormant'),
            backcharge: module594.default.t('backcharge'),
            fullcharge: module594.default.t('fullcharge'),
            findchargerpause: module594.default.t('findchargerpause'),
            shutdown: module594.default.t('shutdown'),
            rfctrl: module594.default.t('rfctrl'),
            remainingBattery: module594.default.t('remainingBattery'),
            endCleaning: module594.default.t('endCleaning'),
            startCleaningTime: module594.default.t('startCleaningTime'),
            addShopp: module594.default.t('addShopp'),
            C1619077654: module594.default.t('C1619077654'),
            welcome: module594.default.t('welcome'),
            youLogin: module594.default.t('youLogin'),
            cameraTitle: module594.default.t('cameraTitle'),
            cameraContents: module594.default.t('cameraContents'),
            cameraAndroidContents: module594.default.t('cameraAndroidContents'),
          });
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.onChangeLanguageUI = ReactNative.DeviceEventEmitter.addListener('onChangeLanguageUI', function (n) {
            setTimeout(function () {
              t.storeChange();
            }, 10);
          });
          module1137.default.notifyAppReady();
          module1188.default.addEventListener(this.handleFirstConnectivityChange.bind(this));
          setTimeout(function () {
            t.setState({
              isNoticeShow: false,
            });
          });

          this._onEvents();
        },
      },
      {
        key: 'checkYSXY',
        value: function () {
          var t = this;
          module593.default.get('isNotFristInstallApp').then(function (n) {
            if (n)
              t.setState(
                {
                  isShowed: false,
                },
                function () {
                  console.log('------------checkYSXY->>>>>>>', t.state.userData.isoCode, t.state.userData.userId);
                  module1218.default.initMudule(t.state.userData.isoCode, t.state.userData.userId);
                }
              );
            else
              t.setState(
                {
                  isShowed: true,
                },
                function () {}
              );
          });
        },
      },
      {
        key: '_checkLocalAppSetting',
        value: function () {
          var t = this;
          module593.default.get('getAppFunction').then(function (n) {
            try {
              module1146.default.getAppFunctionVersion().then(function (o) {
                if (200 == o.code) {
                  if (n && n.getAppFunctionVersion >= o.version) {
                    if (!Config.showId)
                      for (var l = 0; l < n.getAppFunctionContent.length; l++)
                        n.getAppFunctionContent[l].productId || (n.getAppFunctionContent[l].productId = n.getAppFunctionContent[l].productKey);
                    t.setState({
                      appRobotSet: n.getAppFunctionContent,
                    });
                  } else
                    module1146.default.getAppFunctionContent(o.url).then(function (n) {
                      if (!Config.showId && n) for (var l = 0; l < n.length; l++) n[l].productId || (n[l].productId = n[l].productKey);
                      console.log('\u670d\u52a1\u7aef\u914d\u7f6e\u6570\u636e' + JSON.stringify(n), JSON.stringify(o));
                      var s = {
                        getAppFunctionVersion: o.version,
                        getAppFunctionContent: n,
                      };
                      module593.default.save('getAppFunction', s);
                      t.setState({
                        appRobotSet: n,
                      });
                    });
                } else if (n && n.getAppFunctionContent) {
                  if (!Config.showId)
                    for (var s = 0; s < n.getAppFunctionContent.length; s++)
                      n.getAppFunctionContent[s].productId || (n.getAppFunctionContent[s].productId = n.getAppFunctionContent[s].productKey);
                  t.setState({
                    appRobotSet: n.getAppFunctionContent,
                  });
                }
              });
            } catch (l) {
              if (n && n.getAppFunctionContent) {
                if (!Config.showId)
                  for (var o = 0; o < n.getAppFunctionContent.length; o++)
                    n.getAppFunctionContent[o].productId || (n.getAppFunctionContent[o].productId = n.getAppFunctionContent[o].productKey);
                t.setState({
                  appRobotSet: n.getAppFunctionContent,
                });
              }
            }
          });
        },
      },
      {
        key: '_checkLoginStatus',
        value: function (...args) {
          if (args) args = args[0];
          var s = this.props.navigation.navigate;
          module593.default.get('userData').then(function (n) {
            if (null == n) {
              t.setState({
                userData: '',
              });
              s('loginScreen');
            } else
              t.setState(
                {
                  userData: n,
                },
                function () {
                  console.log('\u767b\u5f55\u56fd\u5bb6====' + JSON.stringify(n));

                  if (n.hasOwnProperty('domainAbbreviation')) {
                    module916.default.setCountry(n.domainAbbreviation);
                    ReactNative.Platform.OS;
                  }

                  t.getUserSTS()
                    .then(function (n) {
                      t.setState(
                        {
                          bucketName: n.bucketName,
                          endpoint: n.endpoint,
                        },
                        function () {
                          t.createUserAuthURL(n.endpoint).then(function (l) {
                            console.log('--\u751f\u6210\u7528\u6237\u521b\u5efaOSSClient\u6240\u9700\u8981\u7684URL \u8fd4\u56de>>>>>' + JSON.stringify(l));
                            t.setOssClient(l.url, n.endpoint, n.bucketName);
                            t.getIdentifyId().then(function (n) {
                              t._synchronizeAppInfo(n).then(function (t) {});

                              t._checkLocalAppSetting();

                              t.setState(
                                {
                                  userIsLogin: true,
                                },
                                function () {
                                  if (args || undefined !== args) {
                                    console.log('\u662f\u5426\u9700\u8981\u62c9\u6570\u636e' + args, t.state.pageNum);
                                    if (args && -1 == args) t.loadData(t.state.pageNum);
                                  } else {
                                    console.log('====================================');
                                    console.log('\u9700\u8981\u62c9\u6570\u636e' + args, t.state.pageNum);
                                    console.log('====================================');
                                    t.loadData(t.state.pageNum);
                                  }
                                }
                              );
                            });
                          });
                        }
                      );
                    })
                    .catch(function (t) {
                      console.log('error-----\x3e>>233233232----' + JSON.stringify(t));
                    });
                  if (args && -1 == args) module1218.default.initMudule(t.state.userData.isoCode, t.state.userData.userId);
                  module1218.default.setUserID(n.isoCode, n.userId);
                }
              );
          });
        },
      },
      {
        key: 'checkAppUpdate',
        value: function () {
          var t = this;
          module1146.default.checkAppUpdate().then(
            function (n) {
              if (200 == n.code && n.data.isUpdate)
                t.setState({
                  isAlert: true,
                  alertType: 'UP',
                  currentVersion: n.data.currentVersion,
                  updataUrl: n.data.updateUrl,
                });
            },
            function (t, n) {
              if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                Object.keys(t).map(function (n) {
                  if ('message' == n) t[n];
                });
              }
            }
          );
        },
      },
      {
        key: 'check',
        value: function () {
          var t = this;
          module1137.default.checkForUpdate('').then(function (n) {
            console.log('------------------ CodePush.checkForUpdate = ' + JSON.stringify(n));
            if (!(!n || n.failedInstall))
              t.setState({
                isAlert: true,
                modalVisible: true,
                updateInfo: n,
                isMandatory: n.isMandatory,
                currentVersion: n.appVersion,
                description: n.description,
              });
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.onChangeLanguageUI) this.onChangeLanguageUI.emitter.removeAllListeners('onChangeLanguageUI');
          if (this.isloginUser) this.isloginUser.emitter.removeAllListeners('loginIndex');

          if (this.eventEmitter) {
            this.eventEmitter.emitter.removeAllListeners('addTotalListener');
            this.eventEmitter.emitter.removeAllListeners('AccountEventReminder');
            this.eventEmitter.emitter.removeAllListeners('receiver');
          }

          if (this.locationDenied) this.locationDenied.emitter.removeAllListeners('locationDenied');
          if (this.locationGranted) this.locationGranted.emitter.removeAllListeners('locationGranted');
          ReactNative.AppState.removeEventListener('change', this._handleAppStateChange);
          module1145.default.removeTotalListener();

          if ('android' === ReactNative.Platform.OS) {
            ReactNative.BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed);
            if (this.eventEmitterVersiont) this.eventEmitterVersiont.emitter.removeAllListeners('downloadApk');
          }

          this.setState = function (t, n) {};
        },
      },
      {
        key: '_synchronizeAppInfo',
        value: function (t) {
          var n = this.state.userData.userId;
          return new Promise(function (o, l) {
            module915.default.synchronizeAppInfo(n, t).then(
              function (t) {
                o(t);
              },
              function (t, n) {
                if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                  Object.keys(t).map(function (n) {
                    if ('code' == n) {
                      var o = t[n];
                      o;
                    }

                    if ('message' == n) t[n];
                  });
                }

                l(t);
              }
            );
          });
        },
      },
      {
        key: 'getIdentifyId',
        value: function () {
          this.state.userData.userId;
          return new Promise(function (t, n) {
            module916.default.getIdentifyId().then(
              function (n) {
                t(n);
              },
              function (t, o) {
                if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                  Object.keys(t).map(function (n) {
                    if ('code' == n) {
                      var o = t[n];
                      o;
                    }

                    if ('message' == n) t[n];
                  });
                }

                n(t);
              }
            );
          });
        },
      },
      {
        key: 'getUserSTS',
        value: function () {
          var t = this.state.userData.userId;
          return new Promise(function (n, o) {
            module915.default.getUserSTS(t).then(
              function (t) {
                if ((console.log('====\u83b7\u53d6\u7528\u6237STS1111 ===\u300b' + JSON.stringify(t)), t && t.data)) {
                  var l = t.data.bucketName,
                    s = t.data.endpoint;
                  if (undefined != s && undefined != l)
                    n({
                      bucketName: l,
                      endpoint: s,
                    });
                }

                o(t);
              },
              function (t, n) {
                if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                  Object.keys(t).map(function (n) {
                    if ('code' == n) {
                      var o = t[n];
                      o;
                    }

                    if ('message' == n) t[n];
                  });
                }

                o(t);
              }
            );
          });
        },
      },
      {
        key: 'createUserAuthURL',
        value: function (t) {
          var n = this.state.userData.userId;
          return new Promise(function (o, l) {
            module915.default.createUserAuthURL(n).then(
              function (n) {
                if (
                  (console.log(
                    '\u751f\u6210\u7528\u6237\u521b\u5efaOSSClient\u6240\u9700\u8981\u7684URL,\u4f7f\u5f97\u8ba4\u8bc1\u80fd\u591f\u81ea\u52a8\u5237\u65b0Token==>' +
                      JSON.stringify(n)
                  ),
                  n && n.hasOwnProperty('Url'))
                ) {
                  var s = {
                    url: n.Url,
                    endpoint: t,
                  };
                  o(s);
                }

                l(n);
              },
              function (t, n) {
                if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                  Object.keys(t).map(function (n) {
                    if ('code' == n) {
                      var o = t[n];
                      o;
                    }

                    if ('message' == n) t[n];
                  });
                }

                l(t);
              }
            );
          });
        },
      },
      {
        key: 'setOssClient',
        value: function (t, n, o) {
          module1146.default.setUserOssClient(t, n, o);
          if (this.state.isNeed) this.checkAppUpdate();
        },
      },
      {
        key: 'dealweithData',
        value: function () {
          this.setState({
            getPropertiesData: module920.default.cloneDeep(H),
          });
        },
      },
      {
        key: '_dealweithData',
        value: function (t) {
          this.setState({
            getPropertiesData: t,
            localData: t,
          });
        },
      },
      {
        key: 'getDevicesProper',
        value: function (t) {
          return new Promise(function (n, o) {
            module1145.default.getProperties(t).then(
              function (o) {
                var l = module920.default.cloneDeep(o.data);
                if (l && 'string' != typeof l && undefined != l) l.deviceId = t;
                n(l);
              },
              function (n, l) {
                n = 'string' == typeof n ? JSON.parse(n) : n;
                console.log('deviceId:--------------' + t, '==========error=======' + JSON.stringify(n));
                o(n);
              }
            );
          });
        },
      },
      {
        key: 'openCameraXJ',
        value: function () {
          var t = this;
          module1111.default.openCamera().then(function (n) {
            t.scanBindByShareQrCodeData(n.data.qrKey);
          });
        },
      },
      {
        key: 'setDeviceNickName',
        value: function (t, n) {
          module1145.default.setDeviceNickName(t, n).then(function (t) {});
        },
      },
      {
        key: 'pausePlayback',
        value: function (t, n) {
          var o = this;

          switch ((console.log('pause \u8bf7\u6c42\u5f00\u59cb\u6e05\u626b/ sweep \u8bf7\u6c42\u6682\u505c\u6e05\u626b  ----------' + n), n)) {
            case 'sweep':
              module1145.default.pauseSweep(t, false).then(
                function (t) {
                  if (t.data && '' != t.data) {
                    var n = 'string' == typeof t.data ? JSON.parse(t.data) : t.data;
                    if (n && n.data && '' != n.data && n.data.ExeResult) n.data.ExeResult;
                  }
                },
                function (t, n) {
                  if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                    var o = '';
                    Object.keys(t).map(function (n) {
                      if ('code' == n) {
                        var l = t[n];
                        l;
                      }

                      if ('message' == n) o = t[n];
                    });
                    module1096.default.info(o, 1, undefined, false);
                  }
                }
              );
              break;

            case 'pause':
              module1145.default.continueSweep(t, false).then(
                function (t) {},
                function (t, n) {
                  if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                    var o = '';
                    Object.keys(t).map(function (n) {
                      if ('code' == n) {
                        var l = t[n];
                        l;
                      }

                      if ('message' == n) o = t[n];
                    });
                    module1096.default.info(o, 1, undefined, false);
                  }
                }
              );
              break;

            default:
              module1145.default.startTotalSweep(t, 0, false).then(
                function (t) {
                  if (!(undefined == t.code || (6205 != t.code && 9201 != t.code))) module1096.default.info(o.state.notOnline, 1, undefined, false);
                },
                function (t, n) {
                  if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                    var o = '';
                    Object.keys(t).map(function (n) {
                      if ('code' == n) {
                        var l = t[n];
                        l;
                      }

                      if ('message' == n) o = t[n];
                    });
                    module1096.default.info(o, 1, undefined, false);
                  }
                }
              );
          }
        },
      },
      {
        key: 'scanBindByShareQrCodeData',
        value: function (t) {
          var n = this;
          module1111.default.scanBindByShareQrCode(t).then(function (t) {
            if (200 == t.code) {
              module1096.default.info(n.state.scanCodeSuccess, 1, undefined, false);
              var o = 1,
                l = 4 * o - n.state.getPropertiesData.length;
              o = l > 0 ? n.state.pageNum : n.state.pageNum++;
              H = [];
              n.setState(
                {
                  pageNum: o,
                  isRefreshing: true,
                  shopData: [],
                },
                function () {
                  ReactNative.DeviceEventEmitter.emit('indexList', o);
                }
              );
            } else 2068 == t.code ? module1096.default.info(n.state.Q1624503037, 2, undefined, false) : 2067 == t.code ? module1096.default.info(n.state.T1624503168, 2, undefined, false) : module1096.default.info(n.state.scanCodeFailure, 1, undefined, false);
          });
        },
      },
      {
        key: 'checkRequestLocation',
        value: function () {
          var t, o;
          return regeneratorRuntime.default.async(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    t = this.props.navigation.navigate;
                    l.prev = 1;
                    l.next = 4;
                    return regeneratorRuntime.default.awrap(ReactNative.PermissionsAndroid.check(ReactNative.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION));

                  case 4:
                    o = l.sent;
                    console.log('======================\u540e\u53f0\u8fd0\u884c\u5207\u6362\u56de\u6765, granted ====>' + o);

                    if (o) {
                      module593.default.save('android_location_never_ask_again', 'granted');
                      t('networkList', {
                        appRobotSet: this.state.appRobotSet,
                      });
                    } else module593.default.save('android_location_never_ask_again', 'never_ask_again');

                    l.next = 11;
                    break;

                  case 9:
                    l.prev = 9;
                    l.t0 = l.catch(1);

                  case 11:
                  case 'end':
                    return l.stop();
                }
            },
            null,
            this,
            [[1, 9]],
            Promise
          );
        },
      },
      {
        key: 'checkAppLocation',
        value: function () {
          var t = this,
            n = this.props.navigation.navigate;
          module593.default.get('android_location_never_ask_again').then(function (o) {
            if (null == o) {
              t.setState({
                isNerverAskLocation: false,
              });
              n('location');
            } else
              Premissions.checkLocation(
                function (o) {
                  t.setState({
                    isNerverAskLocation: false,
                  });
                  module593.default.save('android_location_never_ask_again', 'granted');
                  n('networkList', {
                    appRobotSet: t.state.appRobotSet,
                  });
                },
                function (n) {
                  if ('denied' == n) {
                    module593.default.save('android_location_never_ask_again', 'denied');
                    t.setState({
                      isNerverAskLocation: false,
                    });
                    Premissions.requestLocationPermission(undefined, undefined, undefined, o);
                  } else if ('never_ask_again' == n) {
                    module593.default.save('android_location_never_ask_again', 'never_ask_again');
                    module1117.default.alert(
                      'ios' === ReactNative.Platform.OS ? t.state.locationTitle : t.state.Tips,
                      'ios' === ReactNative.Platform.OS ? t.state.isAddress : t.state.agreeLocation,
                      [
                        {
                          text: t.state.cancel,
                          style: 'cancel',
                        },
                        {
                          text: t.state.toTravelTo,
                          onPress: function () {
                            t.setState({
                              isNerverAskLocation: true,
                            });
                            module1181.default.openSettings();
                          },
                        },
                      ]
                    );
                  } else
                    module1117.default.alert(
                      'ios' === ReactNative.Platform.OS ? t.state.locationTitle : t.state.Tips,
                      'ios' === ReactNative.Platform.OS ? t.state.isAddress : t.state.agreeLocation,
                      [
                        {
                          text: t.state.cancel,
                          style: 'cancel',
                        },
                        {
                          text: t.state.toTravelTo,
                          onPress: function () {
                            t.setState({
                              isNerverAskLocation: true,
                            });
                            module1181.default.openSettings();
                          },
                        },
                      ]
                    );
                },
                undefined,
                o
              );
          });
        },
      },
      {
        key: '_renderItem',
        value: function (t, n) {
          var o = this;
          return t
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: Q.shoppLi,
                  key: n,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      o.props.navigation.navigate('cleanIndex', {
                        iotId: t.deviceId,
                        nickName: t.nickName ? t.nickName : t.deviceName,
                        userId: o.state.userData.userId,
                        productId: t.productId ? t.productId : t.productKey,
                        owned: t.owned,
                        appRobotSet: o.state.appRobotSet,
                      });
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: module1201.default[t.productId ? t.productId : t.productKey],
                    style: Q.indexSBlackImg,
                  })
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: Q.shoppLiBottom,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: Q.shoppLiTitle,
                    },
                    t.nickName ? t.nickName : t.deviceName
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: Q.shoppLiDetails,
                    },
                    3 == t.status
                      ? React.default.createElement(
                          ReactNative.View,
                          {
                            style: Q.shoppLiDetailsR,
                          },
                          React.default.createElement(ReactNative.Image, {
                            source: require('./1222'),
                            style: Q.detailsTypeIcon,
                          }),
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: Q.detailsRTxt,
                            },
                            this.state.notOnline
                          )
                        )
                      : React.default.createElement(
                          ReactNative.View,
                          null,
                          'idle' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1222'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.standby
                                )
                              )
                            : null,
                          'sweep' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1223'),
                                  style: Q.detailsTypeIcon,
                                }),
                                'null' == t.subMode
                                  ? React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: Q.detailsRTxt,
                                      },
                                      this.state.cleaning
                                    )
                                  : null,
                                'point' == t.subMode
                                  ? React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: Q.detailsRTxt,
                                      },
                                      this.state.pointCleaning
                                    )
                                  : null,
                                'area' == t.subMode
                                  ? React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: Q.detailsRTxt,
                                      },
                                      this.state.areaCleaning
                                    )
                                  : null,
                                'total' == t.subMode
                                  ? React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: Q.detailsRTxt,
                                      },
                                      this.state.totalCleaning
                                    )
                                  : null,
                                'curpoint' == t.subMode
                                  ? React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: Q.detailsRTxt,
                                      },
                                      this.state.pointCleaning
                                    )
                                  : null,
                                'smart_area' == t.subMode
                                  ? React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: Q.detailsRTxt,
                                      },
                                      this.state.partitionAnCleaning
                                    )
                                  : null,
                                'smart_total' == t.subMode
                                  ? React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: Q.detailsRTxt,
                                      },
                                      this.state.intelligentGlobal
                                    )
                                  : null
                              )
                            : null,
                          'charge' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1222'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.charge
                                )
                              )
                            : null,
                          'pause' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1223'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.pause
                                )
                              )
                            : null,
                          'fault' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1224'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.fault
                                )
                              )
                            : null,
                          'dormant' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1222'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.dormant
                                )
                              )
                            : null,
                          'backcharge' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1222'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.backcharge
                                )
                              )
                            : null,
                          'fullcharge' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1222'),
                                  resizeMode: 'contain',
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.fullcharge
                                )
                              )
                            : null,
                          'findchargerpause' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1222'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.findchargerpause
                                )
                              )
                            : null,
                          'shutdown' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1222'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.shutdown
                                )
                              )
                            : null,
                          'rfctrl' == t.WorkMode
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: Q.shoppLiDetailsR,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: require('./1222'),
                                  style: Q.detailsTypeIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: Q.detailsRTxt,
                                  },
                                  this.state.rfctrl
                                )
                              )
                            : null
                        ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: Q.shoppLiDetailsL,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: Q.detailsLTxt,
                        },
                        this.state.remainingBattery,
                        '\uff1a',
                        ' ',
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: Q.detailsRTxt,
                          },
                          t.BatteryState,
                          '%'
                        )
                      )
                    )
                  ),
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [Q.shoppType, 'sweep' != t.WorkMode ? Q.shoppStart : Q.shoppStop],
                      onPress: function () {
                        module1110.default(function () {
                          o.pausePlayback(t.deviceId, t.WorkMode);
                        });
                      },
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: {
                          color: '#fff',
                        },
                      },
                      'sweep' == t.WorkMode ? this.state.endCleaning : this.state.startCleaningTime
                    )
                  )
                )
              )
            : React.default.createElement(ReactNative.View, null);
        },
      },
      {
        key: 'changeSelect',
        value: function (t) {},
      },
      {
        key: '_renderItemView',
        value: function (t) {
          var n = this,
            o = t.item,
            l = t.index;
          return o
            ? React.default.createElement(module1220.default, {
                item: {
                  item: o,
                  index: l,
                },
                itemView: function (t, o) {
                  return n._renderItem(t, o);
                },
                select: o.select,
                onPress: function () {
                  return n.changeSelect(l, o.select);
                },
              })
            : null;
        },
      },
      {
        key: 'emptyLoad',
        value: function () {
          var t = this;
          return React.default.createElement(
            ReactNative.View,
            {
              style: Q.scrollView,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  position: 'relative',
                },
              },
              React.default.createElement(ReactNative.Image, {
                source: require('./1225'),
                resizeMode: 'contain',
                style: {
                  width: '100%',
                  height: 224,
                },
              }),
              React.default.createElement(
                module1135.default,
                {
                  type: 'primary',
                  size: 'small',
                  style: Q.onShoppBtn,
                  onPress: function () {
                    if ('android' == ReactNative.Platform.OS) t.checkAppLocation();
                    else {
                      console.log('this.state.appRobotSet--------:' + JSON.stringify(t.state.appRobotSet));
                      t.props.navigation.navigate('networkList', {
                        appRobotSet: undefined != t.state.appRobotSet ? t.state.appRobotSet : null,
                      });
                    }
                  },
                },
                this.state.addShopp
              )
            )
          );
        },
      },
      {
        key: 'ajaxRefreshMoreFunc',
        value: function (t, n) {
          return new Promise(function (o, l) {
            if (n) {
              for (var s = 0; s < t.length; s++) {
                for (var c = t[s], u = null, f = -1, p = 0; p < n.length; p++) {
                  var h = n[p];

                  if (c.deviceId == h.deviceId) {
                    u = h;
                    f = p;
                  }
                }

                c.select = !c.select;
                if (null !== u && -1 != f) n.splice(f, 1, c);
                else n.push(c);
              }

              o(n);
            }

            o(n);
          });
        },
      },
      {
        key: 'ajaxRefreshOneFunc',
        value: function (t) {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) o[l - 1] = arguments[l];

          return new Promise(function (n, l) {
            if (o && ((items = o[0]), items && items.length >= 2)) {
              var s = items[0];
              s.select = !s.select;
              var c = items[1];
              t.splice(c, 1, s);
            }

            n(t);
          });
        },
      },
      {
        key: 'loadData',
        value: function (t) {
          var n = this,
            o = this.state.userData;
          return new Promise(function (l, s) {
            module1111.default.listBindingByAccount(t, 10).then(
              function (t) {
                if (t && t.code && 401 == t.code) {
                  s(t);
                  if (!('{}' === JSON.stringify(o) && '' === o))
                    module593.default.delete('userData').then(function (t) {
                      module916.default.logout();
                      module1096.default.info(
                        n.state.C1619077654,
                        1,
                        n.props.navigation.dispatch(
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
                } else if (t && t.data) {
                  for (
                    c = t.data, f = c.pageSize, p = c.total, h = Math.ceil(c.total / c.pageSize), v = t.data.data ? t.data.data : [], y = [], S = 0, undefined;
                    S < v.length;
                    S++
                  ) {
                    var c, f, p, h, v, y, S;
                    var k = v[S];

                    if (k) {
                      k.select = false;
                      y.push(k);
                    }
                  }

                  console.log('\u5f53\u524d\u7528\u6237\u53ef\u4f7f\u7528\u7684\u5df2\u914d\u7f51\u8bbe\u5907' + JSON.stringify(y), f);
                  l({
                    sdata: y,
                    pageSize: f,
                    total: p,
                    totalPage: h,
                  });
                } else s(t);
              },
              function (t, n) {
                if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                  var o = '';
                  Object.keys(t).map(function (n) {
                    if ('code' == n) {
                      var l = t[n];
                      l;
                    }

                    if ('message' == n) o = t[n];
                  });
                  s(o);
                }
              }
            );
          });
        },
      },
      {
        key: 'ajaxRefreshFunc',
        value: function (t) {
          var n = this,
            o = this,
            l = [],
            s = module920.default.cloneDeep(t);
          return new Promise(function (c, u) {
            for (var f = 0; f < t.length; f++) {
              var p = t[f];
              if (p) l.push(n.getDevicesProper(p.deviceId));
            }

            Promise.all(l).then(function (n) {
              if (n && n.length > 0)
                for (var l = 0; l < n.length; l++) {
                  var u = n[l];

                  if (u) {
                    for (var f = null, p = 0, h = 0; h < t.length; h++) {
                      var v = t[h];

                      if (v && u.deviceId == v.deviceId) {
                        p = h;
                        f = module920.default.cloneDeep(v);
                      }
                    }

                    var y = -1,
                      S = u.mode,
                      k = u.subMode,
                      T = null;
                    if (o.state.localData)
                      for (var C = 0; C < o.state.localData.length; C++) {
                        var x = o.state.localData[C];

                        if (x && u.deviceId == x.deviceId) {
                          C;
                          T = module920.default.cloneDeep(x);
                        }
                      }

                    if (u.hasOwnProperty('elecReal')) {
                      console.log('\u83b7\u53d6\u670d\u52a1\u7aef\u4e0b\u53d1\u7684\u65b0\u7684\u7535\u91cf\ud83d\udd0b\u6570\u636e' + JSON.stringify(u.elecReal));
                      y = u.elecReal;
                    } else if (f) {
                      console.log('\u83b7\u53d6\u539f\u6765\u7684\u7535\u91cf\ud83d\udd0b\u6570\u636e' + JSON.stringify(f), JSON.stringify(u));
                      y = undefined != f.BatteryState ? f.BatteryState : T ? T.BatteryState : 0;
                      S = undefined != f.WorkMode ? f.WorkMode : T ? T.WorkMode : 'dormant';
                      k = undefined != f.subMode ? f.subMode : T ? T.subMode : 'null';
                    } else y = 0;

                    if (f) {
                      f.WorkMode = undefined != S ? S : 'dormant';
                      f.subMode = undefined != k ? k : 'null';
                      f.BatteryState = -1 != y ? y : 0;

                      if (f.nickName !== u.nickName) {
                        module1145.default.setDeviceNickName(f.deviceId, u.nickName);
                        if (0 == f.owned) f.nickName = u.nickName;
                        if (1 == f.owned && undefined != f.nickName && '' != f.nickName && '' != u.nickName && undefined != u.nickName)
                          module1145.default.setNickNameRobotProperty(f.deviceId, f.nickName).then(function (t) {
                            console.log('-----\u8bbe\u7f6e\u8bbe\u5907\u6635\u79f0--' + JSON.stringify(t));
                          });
                      }

                      if (!f.nickName) module1145.default.setDeviceNickName(f.deviceId, f.deviceName).then(function (t) {});
                      if (!f.hasOwnProperty('BatteryState')) f.BatteryState = 0;
                      s.splice(p, 1, f);
                    } else s.splice(p, 1, f);
                  }
                }
              c(s);
            });
          });
        },
      },
      {
        key: 'renderData',
        value: function () {
          var t = this;
          return React.default.createElement(module1219.default, {
            style: Q.wrap,
            netWork: function (n) {
              return t.loadData(n);
            },
            ajaxRefreshFunc: function (n) {
              return t.ajaxRefreshFunc(n);
            },
            ajaxRefreshMoreFunc: function (n, o) {
              return t.ajaxRefreshMoreFunc(n, o);
            },
            ajaxRefreshOneFunc: function (n) {
              return t.ajaxRefreshOneFunc(n);
            },
            emptyView: this.emptyLoad.bind(this),
            saveAllData: function (n) {
              return t._dealweithData(n);
            },
            loadMoreEnable: true,
            noMoreDataSize: 100,
            pageSize: 4,
            renderItem: this._renderItemView.bind(this),
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props.navigation.navigate;
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
                  position: 'relative',
                },
              },
              React.default.createElement(ReactNative.StatusBar, {
                translucent: false,
                hidden: this.state.isNoticeShow,
                backgroundColor: '#fff',
                barStyle: 'dark-content',
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: Q.topBox,
                },
                React.default.createElement(
                  module1131.default,
                  {
                    style: {
                      marginTop: module588.default.setSpText(20),
                    },
                  },
                  React.default.createElement(
                    module1132.default,
                    {
                      justify: 'between',
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: {
                          flex: 10,
                          flexDirection: 'row',
                        },
                        onPress: function () {
                          n('managementName');
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        resizeMethod: 'resize',
                        source: this.state.userData.avatar
                          ? {
                              uri: this.state.userData.avatar,
                            }
                          : require('./1226'),
                        style: [Q.indexUserImage, Q.userImg],
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            Q.userONlogin,
                            {
                              flex: 1,
                              paddingLeft: module588.default.setSpText(5),
                            },
                          ],
                        },
                        this.state.userData
                          ? 'ko' == module594.default.locale
                            ? this.state.userData.userName + '' + this.state.welcome
                            : this.state.welcome + ',' + this.state.userData.userName
                          : this.state.youLogin
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          flex: 1,
                          marginRight: 10,
                        },
                      },
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          onPress: function () {
                            Premissions.checkCamera(
                              function () {
                                console.log('===checkCamera=====3333=================');
                                t.openCameraXJ();
                              },
                              function () {
                                console.log('===checkCamera=====1111=================');
                                module1117.default.alert(
                                  'ios' === ReactNative.Platform.OS ? t.state.cameraTitle : t.state.cameraTitle.replace('iPhone', 'Android'),
                                  'ios' === ReactNative.Platform.OS ? t.state.cameraContents : t.state.cameraAndroidContents,
                                  [
                                    {
                                      text: t.state.cancel,
                                      style: 'cancel',
                                    },
                                    {
                                      text: t.state.toTravelTo,
                                      onPress: function () {
                                        module1181.default.openSettings();
                                      },
                                    },
                                  ]
                                );
                              }
                            );
                          },
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1227'),
                          resizeMode: 'contain',
                          style: Q.indexUserImage,
                        })
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          flex: 1,
                        },
                      },
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          onPress: function () {
                            if ('android' == ReactNative.Platform.OS) t.checkAppLocation();
                            else
                              n('networkList', {
                                appRobotSet: t.state.appRobotSet,
                              });
                          },
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1065'),
                          style: Q.indexUserImage,
                        })
                      )
                    )
                  )
                )
              ),
              this.state.getPropertiesData && undefined != this.state.getPropertiesData ? t.renderData() : null,
              this.state.isAlert
                ? React.default.createElement(module1147.default, {
                    isShow: this.state.isAlert,
                    isType: this.state.alertType,
                    isData: {
                      currentVersion: this.state.currentVersion,
                      description: this.state.description,
                      isMandatory: this.state.isMandatory,
                      versiontType: 2,
                      updataUrl: this.state.updataUrl,
                    },
                    onPick: function () {},
                    onData: function (t) {},
                  })
                : null
            )
          );
        },
      },
    ]);
    return module1224;
  })(React.default.Component);

exports.HomeScreen = module1065;
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
var Q = ReactNative.StyleSheet.create({
  scrollView: {
    marginTop: module588.default.setSpText(10),
    paddingHorizontal: module588.default.setSpText(10),
  },
  wrap: {
    marginTop: module588.default.setSpText(10),
    paddingHorizontal: module588.default.setSpText(10),
    width: '100%',
  },
  topBox: {
    height: module588.default.setSpText(58),
    borderBottomRightRadius: module588.default.setSpText(16),
    borderBottomLeftRadius: module588.default.setSpText(16),
    backgroundColor: '#fff',
    zIndex: 1,
  },
  userONlogin: {
    height: module588.default.setSpText(32),
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: module588.default.setSpText(16),
    color: '#11243D',
  },
  indexUserImage: {
    width: module588.default.setSpText(22),
    height: module588.default.setSpText(22),
  },
  userImg: {
    borderRadius: module588.default.setSpText(22),
  },
  onShoppBtn: {
    position: 'absolute',
    alignSelf: 'center',
    height: module588.default.setSpText(32),
    bottom: module588.default.setSpText(20),
    backgroundColor: '#0A72FA',
    borderColor: '#0A72FA',
    color: '#fff',
    fontSize: module588.default.setSpText(14),
    borderBottomLeftRadius: module588.default.setSpText(16),
    borderBottomRightRadius: module588.default.setSpText(16),
    borderTopEndRadius: module588.default.setSpText(16),
    borderTopStartRadius: module588.default.setSpText(16),
  },
  indexTxt: {
    alignItems: 'center',
    marginTop: module588.default.setSpText(20),
    fontSize: module588.default.setSpText(12),
    color: '#E1E7F5',
  },
  indexSBlackImg: {
    width: '100%',
    height: module588.default.setSpText(170),
  },
  shoppLi: {
    width: '100%',
    marginBottom: module588.default.setSpText(20),
  },
  shoppLiBottom: {
    padding: module588.default.setSpText(14),
    backgroundColor: '#fff',
    borderBottomLeftRadius: module588.default.setSpText(8),
    borderBottomRightRadius: module588.default.setSpText(8),
    position: 'relative',
  },
  shoppLiTitle: {
    color: '#11243D',
    fontSize: module588.default.setSpText(16),
  },
  shoppLiDetails: {
    flexDirection: 'row',
    marginTop: module588.default.setSpText(4),
  },
  shoppLiDetailsR: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shoppLiDetailsL: {
    flex: 1,
  },
  detailsTypeIcon: {
    width: module588.default.setSpText(17),
    height: module588.default.setSpText(17),
  },
  detailsRTxt: {
    color: '#15DD6A',
    fontSize: module588.default.scaleSize(12),
    marginLeft: module588.default.setSpText(4),
  },
  detailsLTxt: {
    color: '#658DC2',
    textAlign: 'right',
  },
  shoppType: {
    position: 'absolute',
    height: module588.default.setSpText(39),
    borderRadius: module588.default.setSpText(16),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: module588.default.setSpText(10),
    right: module588.default.setSpText(16),
    top: module588.default.setSpText(-18),
    fontSize: module588.default.setSpText(16),
  },
  shoppStart: {
    backgroundColor: '#0A72FA',
  },
  shoppStop: {
    backgroundColor: '#E95B55',
  },
  footer: {
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
module.exports = module1065;
