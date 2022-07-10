require('./1248');

var module1135 = require('./1135'),
  module1117 = require('./1117'),
  module403 = require('./403'),
  module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var a = D(t);
    if (a && a.has(e)) return a.get(e);
    var i = {},
      n = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in e)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
        var l = n ? Object.getOwnPropertyDescriptor(e, s) : null;
        if (l && (l.get || l.set)) Object.defineProperty(i, s, l);
        else i[s] = e[s];
      }

    i.default = e;
    if (a) a.set(e, i);
    return i;
  })(require('react')),
  module588 = require('./588'),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  module1147 = require('./1147'),
  module943 = require('./943'),
  module1146 = require('./1146'),
  module1145 = require('./1145'),
  module593 = require('./593'),
  module594 = require('./594'),
  module1110 = require('./1110'),
  module1322 = require('./1322'),
  module915 = require('./915'),
  module1201 = require('./1201'),
  module1323 = require('./1323'),
  module920 = require('./920'),
  module1188 = require('./1188'),
  module1218 = require('./1218');

function D(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    a = new WeakMap();
  return (D = function (e) {
    return e ? a : t;
  })(e);
}

function A() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var F = '',
  z = [],
  module1336 = (function (e) {
    module35.default(s, e);

    var a = s,
      i = A(),
      n = function () {
        var e,
          t = module34.default(a);

        if (i) {
          var n = module34.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module37.default(this, e);
      };

    function s(e) {
      var a;
      module24.default(this, s);

      (a = n.call(this, e)).getSsidWithState = function (e) {
        if ('active' === e) a.getCurrentSsid();
      };

      a.spin = function () {
        a.spinValue.setValue(0);
        ReactNative.Animated.timing(a.spinValue, {
          toValue: 1,
          duration: 1e3,
          useNativeDriver: false,
          easing: ReactNative.Easing.linear,
        }).start(function () {
          return a.spin();
        });
      };

      a._separator = function () {
        return React.default.createElement(ReactNative.View, {
          style: {
            height: module588.default.setSpText(10),
          },
        });
      };

      var i = null,
        o = null;

      if ('android' == ReactNative.Platform.OS) {
        i = a.props.route.params.params.appBlue;
        o = a.props.route.params.params.productId;
      } else {
        i = a.props.route.params.appBlue;
        o = a.props.route.params.productId;
      }

      a.state = {
        topTitle: i ? module594.default.t('blueToothWifi') : module594.default.t('hotWifi'),
        Bluetooth: i,
        stepIndex: 1,
        wifiName: '',
        wifiPassword: '',
        wifiPostPassword: '',
        radionNo: require('./1325'),
        radionYex: require('./1165'),
        isIconBtn: false,
        isPassIcon: false,
        isAlert: false,
        smsTime: 120,
        connectTime: 0,
        smsTxt: null,
        alertType: null,
        wifiListName: '',
        interval: null,
        bleInterval: null,
        wifiData: '',
        selectData: '',
        lzType: 0,
        connectWifiFalse: null,
        wifiOkName: '',
        iotId: '',
        isAlertWifi: false,
        connectionInfo: null,
        visible: false,
        wifiVisible: false,
        wifiVisibleText: null,
        BluetoothList: [],
        BluetoothWifiLi: [
          {
            ssid: module594.default.t('other'),
            rssid: -1,
          },
        ],
        isBluetoothLoa: true,
        appBluetooth: require('./1319'),
        blueaAdress: null,
        blueaToken: null,
        isBlueList: true,
        productId: o,
        userWifi: '',
        notNeabotWifiStr: '',
        stepIndexArr: [],
        realyWifi: [],
        realyNetworkWifi: [],
        wifiState: {},
        voiceDta: null,
        isConnected: false,
        isCheckIng: false,
      };
      a.spinValue = new ReactNative.Animated.Value(0);
      a.exceptionWithName(1);
      return a;
    }

    module25.default(s, [
      {
        key: 'logStepIndex',
        value: function (e) {
          var t = this.state.stepIndexArr;
          t.push(e);
          this.state.stepIndexArr = t;
        },
      },
      {
        key: 'exceptionWithName',
        value: function (e) {
          switch ((this.logStepIndex(e), e)) {
            case 1:
            case 2:
            case 3:
              module593.default.save('isPairing', 'noPairing');
              break;

            case 8:
              break;

            case 4:
              module593.default.save('isPairing', 'Pairing');
              break;

            case 5:
            case 6:
              break;

            case 7:
              module593.default.save('isPairing', 'noPairing');
              break;

            case 9:
              break;

            case 10:
              module593.default.save('isPairing', 'noPairing');
              break;

            case 11:
              module593.default.save('isPairing', 'Pairing');
          }
        },
      },
      {
        key: 'exportError',
        value: function (e) {
          var t = this,
            a = 'ap\u914d\u7f51';
          if (this.state.Bluetooth) a = 'Blue\u914d\u7f51';
          this.state.iotId;
          var i = this.state.userWifi,
            n = this.state.realyWifi,
            s = this.state.realyNetworkWifi,
            l = '' != this.state.wifiPassword ? this.state.wifiPassword : this.state.wifiPostPassword;
          console.log('this.state.wifiPostPassword:' + this.state.wifiPostPassword, 'this.state.wifiPassword:' + this.state.wifiPassword);
          e = JSON.stringify(e);
          if (!(undefined != l && 0 != l.length)) e += '---\u5bc6\u7801\u4e3a\u7a7a';
          var o = {};
          module593.default.get('userData').then(function (l) {
            var r = 'CN';

            if (l) {
              o = l;
              r = l.isoCode;
            }

            var d = o.userId ? o.userId : '\u7528\u6237\u672a\u767b\u5f55',
              c = 'Q11';
            if ('a1bp8GkMOe2' == t.state.productId) c = 'N1';
            else if ('a1Wi9Hfe7VT' == t.state.productId) c = 'N2';
            else if ('a1XKU4BoqtH' == t.state.productId) c = 'N2-Lite';
            var f = {
              '\u8bbe\u5907productId': t.state.productId,
              '\u8bbe\u5907\u578b\u53f7': c,
              '\u7528\u6237id': d,
              '\u914d\u7f51error\u8bb0\u5f55': e,
              '\u914d\u7f51\u65b9\u5f0f': a,
              '\u914d\u7f51\u4f7f\u7528\u7684wifi': i,
              '\u914d\u7f51\u4f7f\u7528\u7684wifi\u5207\u6362\u8bb0\u5f55': n,
              '\u540e\u53f0Wi-Fi\u5207\u6362\u8bb0\u5f55': s,
              '\u914d\u7f51\u6b65\u9aa4\u8bb0\u5f55': t.state.stepIndexArr,
            };
            console.log('--------------------------------- \u4e0a\u62a5\u6570\u636e 1 = ' + JSON.stringify(f));
            module1218.default.postLog(r, 9, e, JSON.stringify(f), d);
          });
        },
      },
      {
        key: 'dealwithOutputLog',
        value: function (e) {
          var t = this;
          this.setState(
            {
              connectTime: 0,
            },
            function () {
              t.canconnectInterval = setInterval(function () {
                if (t.state.connectTime++ >= 120) {
                  if (t.canconnectInterval) clearInterval(t.canconnectInterval);
                } else if (1 == t.state.isConnected) {
                  if (t.canconnectInterval) clearInterval(t.canconnectInterval);
                  t.exportError(e);
                }
              }, 100);
            }
          );
        },
      },
      {
        key: 'handleFirstConnectivityChange',
        value: function (e) {
          var t = this;
          that = this;
          var a = e.details.ssid;
          that.setState(
            {
              wifiState: e,
              wifiName: a,
            },
            function () {
              t.getNetworkWifiTypeLog();
              if (e && 1 == e.isConnected)
                that.setState({
                  isConnected: true,
                });
              else
                that.setState({
                  isConnected: false,
                });
            }
          );
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var e = this,
            t = module594.default.t('phoneSwitching');
          this.state.notNeabotWifiStr = undefined != t && null != t ? t.replace(/\%/g, 'neabot') : 'Please switch the Wi-Fi network to the one starting with " neabot "';
          z = [
            {
              title: module594.default.t('G1621404395'),
              img: module1201.default.wifi_0,
            },
            {
              title: module594.default.t('W1621404434'),
              img: module1201.default.wifi_1,
            },
            {
              title: module594.default.t('M1621404452'),
              img: module1201.default.wifi_2,
            },
          ];
          ReactNative.AppState.addEventListener('change', this.getSsidWithState);
          module1188.default.addEventListener(this.handleFirstConnectivityChange.bind(this));
          var a = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.ConfigApiModule);
          this.eventEmitter = a.addListener('onConfigNetListener', function (t) {
            var a = t.method;

            switch ((console.log('========================== \u53c2\u6570\u68c0\u6d4b\u56de\u8c03 event 1 = ' + JSON.stringify(t)), a)) {
              case 'onPreCheck':
                if (!t.data.checkFlag) {
                  module1096.default.info(t.data.dcErrorCode, 1, undefined, false);
                  e.dealwithOutputLog(t);
                  return false;
                }

                break;

              case 'onProvisionPrepare':
                console.log('onProvisionPrepare \u5f00\u59cb\u914d\u7f51->' + JSON.stringify(t));

                if (1 == t.data.prepare) {
                  console.log('========================== \u8bbe\u7f6ewifi\u4fe1\u606f\u56de\u8c03 wifiName = ' + e.state.wifiName + ', wifiPassword = ' + e.state.wifiPassword);
                  e.setState(
                    {
                      wifiPostPassword: e.state.wifiPassword,
                    },
                    function () {
                      if ('android' == ReactNative.Platform.OS) module943.default.toggleProvision(e.state.wifiName, e.state.wifiPassword, 120);
                      else module943.default.toggleProvision(e.state.wifiName, e.state.wifiPassword, 300);
                    }
                  );
                }

                break;

              case 'oniOSHasChangeToDeviceWifi':
                console.log('==========\u8bbe\u5907\u6b63\u5728\u914d\u7f51\u4e2d================ oniOSHasChangeToDeviceWifi ');
                e.setState({
                  connectTime: 0,
                });
                if (e.connectInterval) clearInterval(e.connectInterval);
                e.connectInterval = setInterval(function () {
                  if (e.state.connectTime++ >= 120) {
                    if (e.connectInterval) clearInterval(e.connectInterval);
                    e.exceptionWithName(10);
                    e.setState({
                      stepIndex: 10,
                      connectWifiFalse: 1,
                    });
                    module1096.default.info(module594.default.t('deviceConnectFail'), 1, undefined, false);
                    e.dealwithOutputLog('ap\u914d\u7f51\u8d85\u65f6');
                  }
                }, 1e3);
                e.spin();
                e.exceptionWithName(4);
                e.setState({
                  stepIndex: 4,
                  lzType: 1,
                  topTitle: module594.default.t('pairing'),
                });
                break;

              case 'onProvisioning':
                console.log('========================== \u6b63\u5728\u914d\u7f51\u4e2d\u56de\u8c03 ');
                break;

              case 'onProvisionStatus':
                console.log('========================== onProvisionStatus \u56de\u8c03 = ' + JSON.stringify(t.data));
                if (202 == t.data.provisionStatusCode) {
                  if (!e.state.isAlertWifi)
                    'android' != ReactNative.Platform.OS
                      ? e.setState({
                          wifiVisible: true,
                          wifiVisibleText: module594.default.t('manualHotspot'),
                        })
                      : module1322.default.connectToProtectedSSID(e.state.wifiListName, '', false).then(
                          function () {
                            module1322.default.getCurrentWifiSSID().then(
                              function (e) {},
                              function () {}
                            );
                          },
                          function () {
                            module1322.default.getCurrentWifiSSID().then(
                              function (e) {},
                              function () {}
                            );
                            e.setState({
                              wifiVisible: true,
                              wifiVisibleText: module594.default.t('manualHotspot'),
                            });
                            e.dealwithOutputLog('ap\u81ea\u52a8\u8fde\u63a5\u5931\u8d25\u9700\u8981\u624b\u52a8\u8fde\u63a5\u8bbe\u5907\u70ed\u70b9');
                          }
                        );
                } else if (203 == t.data.provisionStatusCode)
                  e.setState({
                    wifiVisible: true,
                    wifiVisibleText: module594.default.t('movingFamily'),
                  });
                break;

              case 'onProvisionedResult':
                if (
                  (console.log('==================== \u8fde\u63a5\u662f\u5426\u6210\u529f event = ' + JSON.stringify(t)),
                  e.setState({
                    wifiVisible: false,
                  }),
                  e.connectInterval && clearInterval(e.connectInterval),
                  t.hasOwnProperty('data'))
                ) {
                  if (t.data.isSuccess) {
                    e.setState({
                      connectWifiFalse: 0,
                    });
                    var i = t.data.deviceInfo;
                    if (null != i && null != i.token && i.token.length > 0) e.bindData(i.productId, i.deviceName, i.token);
                    else {
                      e.setState({
                        bindTime: 60,
                      });
                      e.interval = setInterval(function () {
                        if (0 === e.state.bindTime--) {
                          if (e.interval) clearInterval(e.interval);
                          module1096.default.info(module594.default.t('connectionSucceeded'), 1, undefined, false);
                          ReactNative.DeviceEventEmitter.emit('indexList');
                          setTimeout(function () {
                            e.props.navigation.dispatch(module421.StackActions.popToTop());
                          }, 1e3);
                        }
                      }, 1e3);

                      try {
                        module943.default.getBindToken(i.productId, i.deviceName).then(function (t) {
                          if (
                            (console.log('ConfigApiModule.getBindToken:111111111' + JSON.stringify(t)),
                            e.interval && clearInterval(e.interval),
                            e.connectInterval && clearInterval(e.connectInterval),
                            t.data.isBind)
                          ) {
                            e.exceptionWithName(7);
                            e.setState({
                              stepIndex: 7,
                              iotId: t.data.deviceId,
                              topTitle: module594.default.t('connectionSucceeded'),
                            });
                            ReactNative.DeviceEventEmitter.emit('indexList');
                          } else {
                            var a = t.data;
                            e.bindData(a.productId, a.deviceName, a.token);
                          }
                        });
                      } catch (t) {
                        e.dealwithOutputLog(
                          'ap\u8fde\u63a5\u5931\u8d25\u5728\u8bf7\u6c42\u8bbe\u5907\u6539\u540d,\u8bf7\u68c0\u67e5\u540e\u53f0wifi\u540d\u662f\u5426\u4e0e\u914d\u7f51\u586b\u5165\u7684wifi\u540d\u4e00\u81f4'
                        );
                      }
                    }
                  } else
                    (4 != e.state.stepIndex && 8 != e.state.stepIndex) ||
                      (e.exceptionWithName(10),
                      e.setState({
                        stepIndex: 10,
                        connectWifiFalse: 1,
                      }),
                      'null' != t.DCErrorCode && t.DCErrorCode && null != t.DCErrorCode
                        ? (101607 == t.DCErrorCode && (t.localMsg = '\u5927\u6982\u7387\u914d\u7f51wifi\u4e3a5G\u5bfc\u81f4\u914d\u7f51\u8d85\u65f6'),
                          module1096.default.info(t.DCErrorCode, 1, undefined, false))
                        : module1096.default.info(module594.default.t('deviceConnectFail'), 1, undefined, false),
                      e.dealwithOutputLog(t));
                } else {
                  e.exceptionWithName(10);
                  e.setState({
                    stepIndex: 10,
                    connectWifiFalse: 1,
                  });
                  module1096.default.info(module594.default.t('deviceConnectFail'), 1, undefined, false);
                  e.dealwithOutputLog(
                    'onProvisionedResult \u56de\u8c03\u4e0d\u5305\u542bdata\u5b57\u6bb5\uff0c\u914d\u7f51\u8d85\u65f6\uff0c\u53ef\u80fd\u662fwifi\u5bc6\u7801\u9519\u8bef'
                  );
                }
            }
          });
          this.eventEmitter = a.addListener('onDiscoveryListener', function (t) {
            var a = t.data;
            console.log('WIFI LIST:' + JSON.stringify(a));

            try {
              if (a && a.length > 0) {
                if (e.state.interval) clearInterval(e.state.interval);
                e.exceptionWithName(5);

                if (a[0].hasOwnProperty('deviceWifiName') && a[0].hasOwnProperty('id') && a[0].hasOwnProperty('productId')) {
                  e.setState({
                    smsTime: 0,
                    wifiData: a,
                    wifiListName: a[0].deviceWifiName.replace(/\"/g, ''),
                    selectData: {
                      productKey: a[0].productId,
                      id: a[0].id,
                      deviceName: a[0].deviceWifiName,
                    },
                    topTitle: module594.default.t('searchResults'),
                    stepIndex: 5,
                  });
                  module943.default.stopDiscovery();
                }
              }
            } catch (e) {
              module1218.default.postLog(module594.default.locale, 1, e, JSON.stringify(e), 'userId');
            }
          });
          this.eventEmitter = a.addListener('BLEBroadcast', function (t) {
            if (t.hasOwnProperty('errorCode')) e.dealwithOutputLog(t);
            e.setState({
              BluetoothList: t,
              isBlueList: false,
            });
          });
          this.eventEmitter = a.addListener('connectBLE', function (t) {
            switch (
              (t.state && 2 !== t.state && 1 !== t.state && e.connectInterval && clearInterval(e.connectInterval),
              102 == t.code ? (e.checkToken(), module943.default.closeBLE()) : t.code,
              module403.default.remove(F),
              t.data &&
                (e.interval && clearInterval(e.interval),
                t.data.push({
                  ssid: module594.default.t('other'),
                  rssid: -1,
                }),
                e.setState({
                  BluetoothWifiLi: t.data,
                  isBluetoothLoa: false,
                })),
              t.state)
            ) {
              case 1:
                if ('android' == ReactNative.Platform.OS) {
                  if (4 == e.state.stepIndex)
                    e.state.bleInterval = setInterval(function () {
                      e.checkToken();
                    }, 2e3);
                } else if (4 == e.state.stepIndex) {
                  e.checkToken();
                  e.dealwithOutputLog(t);
                }
                break;

              case 2:
                e.connectBLE(true);
                break;

              case 3:
                module1096.default.info(module594.default.t('connectionFailed'), 1, undefined, false);
                e.checkToken();
                module943.default.closeBLE();
                e.dealwithOutputLog(t);
                e.setState({
                  stepIndex: 10,
                  connectWifiFalse: 1,
                });
                break;

              case 4:
                module403.default.remove(F);
                e.exceptionWithName(9);
                console.log('this.state.stepIndex=====================' + e.state.stepIndex);
                e.setState(
                  {
                    stepIndex: 9,
                    topTitle: module594.default.t('chooseWifi'),
                  },
                  function () {
                    e.stopBLEScan();
                    e.sendBLEData(0);
                  }
                );
            }
          });
          if ('android' == ReactNative.Platform.OS)
            (1 != this.state.stepIndex &&
              2 != this.state.stepIndex &&
              3 != this.state.stepIndex &&
              4 != this.state.stepIndex &&
              5 != this.state.stepIndex &&
              6 != this.state.stepIndex &&
              7 != this.state.stepIndex &&
              9 != this.state.stepIndex &&
              11 != this.state.stepIndex) ||
              module1323.default.addLocationListener(function (t) {
                if (t)
                  e.setState({
                    visible: false,
                  });
                else
                  e.setState({
                    visible: true,
                  });
              });
          this.getCurrentSsid();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module943.default.stopDiscovery();
          module943.default.stopAddDevice();
          if (this.canconnectInterval) clearInterval(this.canconnectInterval);
          if (this.connectInterval) clearInterval(this.connectInterval);
          if (this.interval) clearInterval(this.interval);
          clearInterval(this.state.bleInterval);
          this.eventEmitter.emitter.removeAllListeners('onConfigNetListener');
          this.eventEmitter.emitter.removeAllListeners('onDiscoveryListener');
          this.eventEmitter.emitter.removeAllListeners('BLEBroadcast');
          this.eventEmitter.emitter.removeAllListeners('connectBLE');
          if (this.state.Bluetooth) this.stopBLEScan();
          module403.default.remove(F);

          this.setState = function (e, t) {};
        },
      },
      {
        key: 'getWifiType',
        value: function () {
          var e = this;
          module943.default.getWifiType().then(function (t) {
            switch (t.wifiType) {
              case 'UNKNOWN':
                module1096.default.info(module594.default.t('pleaseConnected') + 'wifi', 1, undefined, false);
                break;

              case '5GHZ':
                module1117.default.alert(module594.default.t('Tips'), module594.default.t('wifi5g'), [
                  {
                    text: module594.default.t('cancel'),
                    style: 'cancel',
                  },
                  {
                    text: module594.default.t('btnConfirm'),
                    onPress: function () {
                      e.nextStep();
                    },
                  },
                ]);
                break;

              default:
                e.nextStep();
            }
          });
        },
      },
      {
        key: '_countDownAction',
        value: function () {
          var e = this;
          this.state.interval = setInterval(function () {
            var t = e.state.smsTime--;

            if (0 === t) {
              if (e.state.interval) clearInterval(e.state.interval);
              e.exceptionWithName(6);
              e.setState({
                smsTime: 0,
                stepIndex: 6,
                topTitle: module594.default.t('searching'),
              });
              module943.default.stopDiscovery();
              e.dealwithOutputLog('\u641c\u7d22\u626b\u5730\u673a\u70ed\u70b9\u8d85\u65f6');
            } else
              e.setState({
                smsTxt: '' + t,
              });
          }, 1e3);
        },
      },
      {
        key: 'goWifi',
        value: function () {
          var e = this;
          module943.default.switchWifiByPhone().then(function (t) {
            if ('android' == ReactNative.Platform.OS) {
              if (10123 == t.code) {
                e.setState({
                  stepIndex: 3,
                  isIconBtn: true,
                });
                e.getCurrentSsid();
              }
            } else if (200 == t) {
              if (e.state.Bluetooth) {
                e.getCurrentSsid();

                if (9 == e.state.stepIndex) {
                  e.exceptionWithName(3);
                  e.setState({
                    stepIndex: 3,
                    isIconBtn: true,
                  });
                }
              }
            } else if (10123 == t) {
              e.exceptionWithName(3);
              e.setState({
                stepIndex: 3,
                isIconBtn: true,
              });
              e.getCurrentSsid();
            }
          });
        },
      },
      {
        key: 'getWifiTypeLog',
        value: function () {
          var e = this,
            t = module920.default.cloneDeep(this.state.realyWifi),
            a = this.state.wifiName,
            i = '';

          try {
            module943.default.getWifiType().then(
              function (n) {
                if (n) i = n.wifiType;
                t.push({
                  time: Math.round(new Date().getTime() / 1e3).toString(),
                  wifiName: a,
                  wifiType: i,
                  wifiState: e.state.wifiState,
                });
                e.setState({
                  realyWifi: t,
                });
              },
              function (n, s) {
                if (((n = 'string' == typeof n ? JSON.parse(n) : n), '[object Error]' == Object.prototype.toString.call(n))) {
                  Object.keys(n).map(function (e) {
                    if ('message' == e) n[e];
                  });
                  t.push({
                    time: Math.round(new Date().getTime() / 1e3).toString(),
                    wifiName: a,
                    wifiType: i,
                    wifiState: e.state.wifiState,
                  });
                  e.setState({
                    realyWifi: t,
                  });
                }
              }
            );
          } catch (e) {
            t.push({
              time: Math.round(new Date().getTime() / 1e3).toString(),
              wifiName: a,
              wifiType: i,
              wifiState: this.state.wifiState,
            });
            this.setState({
              realyWifi: t,
            });
          }
        },
      },
      {
        key: 'getNetworkWifiTypeLog',
        value: function () {
          var e = this,
            t = [];
          if (null != this.state.realyNetworkWifi) t = module920.default.cloneDeep(this.state.realyNetworkWifi);
          var a = undefined !== this.state.wifiName ? this.state.wifiName : '',
            i = '';

          try {
            module943.default.getWifiType().then(
              function (n) {
                if (n) i = n.wifiType;
                t.push({
                  time: Math.round(new Date().getTime() / 1e3).toString(),
                  wifiName: a,
                  wifiType: i,
                  wifiState: e.state.wifiState,
                });
                e.setState({
                  realyNetworkWifi: t,
                });
              },
              function (n, s) {
                if (((n = 'string' == typeof n ? JSON.parse(n) : n), '[object Error]' == Object.prototype.toString.call(n))) {
                  Object.keys(n).map(function (e) {
                    if ('code' == e) {
                      var t = n[e];
                      t;
                    }

                    if ('message' == e) n[e];
                  });
                  t.push({
                    time: Math.round(new Date().getTime() / 1e3).toString(),
                    wifiName: a,
                    wifiType: i,
                    wifiState: e.state.wifiState,
                  });
                  e.setState({
                    realyNetworkWifi: t,
                  });
                }
              }
            );
          } catch (e) {
            t.push({
              time: Math.round(new Date().getTime() / 1e3).toString(),
              wifiName: a,
              wifiType: i,
              wifiState: this.state.wifiState,
            });
            this.setState({
              realyWifi: t,
            });
          }
        },
      },
      {
        key: 'getCurrentSsid',
        value: function () {
          var e = this;
          module915.default.hasPermissions().then(function (t) {
            if (t.grantResults)
              module943.default.getCurrentSsid().then(function (t) {
                if (undefined != t) {
                  var a = t,
                    i = null;

                  if ('string' == typeof a) {
                    a = a.replace(/'/g, '"');

                    try {
                      i = JSON.parse(a);
                    } catch (e) {}
                  } else i = a;

                  console.log('===========ConfigApiModule.getC urrentSsid============' + JSON.stringify(i));

                  if (null != i && i.ssid) {
                    console.log('Wifi name:' + i.ssid);
                    e.setState(
                      {
                        wifiName: i.ssid,
                        wifiPassword: '',
                        visible: false,
                      },
                      function () {
                        if ('ios' == ReactNative.Platform.OS) {
                          var t = i.ssid.match(/^Neabot_.*?$/g);
                          if (t && t.length > 0 && 8 == e.state.stepIndex) console.log('N2\u5f00\u59cb\u914d\u7f51======333====');
                        }

                        e.getWifiTypeLog();
                        e.recordingWIFI();
                      }
                    );
                  }
                }
              });
            else
              setTimeout(function () {
                e.setState({
                  visible: true,
                });
              }, 500);
          });
        },
      },
      {
        key: 'recordingCurrentWIFI',
        value: function () {
          this.setState({
            userWifi: this.state.wifiName,
          });
        },
      },
      {
        key: 'recordingWIFI',
        value: function () {
          var e = this;
          module593.default.get('wifiList').then(function (t) {
            if (t)
              for (var a = 0; a < t.length; a++) {
                if (t[a].wifiName == e.state.wifiName) {
                  e.setState({
                    wifiPassword: t[a].wifipas,
                  });
                  break;
                }

                e.setState({
                  wifiPassword: '',
                });
              }
            else
              e.setState({
                wifiPassword: '',
              });
          });
        },
      },
      {
        key: 'selectWifi',
        value: function () {
          module943.default.startDiscovery([3, 4]);
        },
      },
      {
        key: 'connectNetwork',
        value: function () {
          var e = this.state.selectData.productKey ? this.state.selectData.productKey : this.state.productId,
            t = this.state.selectData.id,
            a = this.state.selectData.deviceWifiName;
          if (undefined == e) e = this.state.productId;
          this.recordingCurrentWIFI();
          module943.default.setDevice('ForceAliLinkTypeSoftAP', e, t, a);
          this.startAdd();
        },
      },
      {
        key: 'startAdd',
        value: function () {
          module943.default.startAddDevice();
        },
      },
      {
        key: 'nextStepWithPWD',
        value: function () {
          if (('android' != ReactNative.Platform.OS ? module943.default.setGetProductByAppKey('neabot') : module943.default.setGetProductByAppKey('neabot_'), this.state.Bluetooth))
            this.sendBLEData(1);
          else if ((this.spin(), 'android' == ReactNative.Platform.OS)) {
            this._countDownAction();

            this.exceptionWithName(4);
            this.setState({
              stepIndex: 4,
              topTitle: module594.default.t('scanning'),
            });
            this.selectWifi();
          } else {
            if (this.state.wifiName && this.state.wifiName.length > 0) {
              var e = this.state.wifiName.match(/(?=\\|\/|\")/g);

              if (e && e.length > 0) {
                this.setState({
                  isAlert: true,
                  alertType: 'G',
                });
                return false;
              }
            }

            this.connectNetwork();
            this.exceptionWithName(8);
            this.setState({
              stepIndex: 8,
              topTitle: module594.default.t('tutorial'),
            });
          }
        },
      },
      {
        key: 'nextStep',
        value: function () {
          var e = this;
          if (this.state.isIconBtn)
            module593.default.get('wifiList').then(function (t) {
              var a = [
                {
                  wifipas: e.state.wifiPassword ? e.state.wifiPassword : '',
                  wifiName: e.state.wifiName ? e.state.wifiName : '',
                },
              ];
              if (null == t) module593.default.save('wifiList', a);
              else {
                if (t.length > 4) {
                  t[0].wifipas = e.state.wifiPassword ? e.state.wifiPassword : '';
                  t[0].wifiName = e.state.wifiName ? e.state.wifiName : '';
                }

                for (var i = 0; i < t.length; i++) e.state.wifiName && t[i].wifiName == e.state.wifiName && t.splice(i, 1);

                if (t.length < 5)
                  t.push({
                    wifipas: e.state.wifiPassword ? e.state.wifiPassword : '',
                    wifiName: e.state.wifiName ? e.state.wifiName : '',
                  });
                module593.default.save('wifiList', t);
              }
            });
          var t = this.state.wifiName;

          if (/[\/\\'"\u201d\u201c\u2019\u2018]/g.test(t)) {
            module1117.default.alert(module594.default.t('connectionFailed'), module594.default.t('MakeSureWIFIIsConnected'), [
              {
                text: module594.default.t('cancel'),
                style: 'cancel',
              },
              {
                text: module594.default.t('btnConfirm'),
                onPress: function () {},
              },
            ]);
            return false;
          } else if ('' == this.state.wifiPassword) {
            module1117.default.alert(module594.default.t('c1623842553'), module594.default.t('P1623842736'), [
              {
                text: module594.default.t('cancel'),
                style: 'cancel',
              },
              {
                text: module594.default.t('btnConfirm'),
                onPress: function () {
                  e.nextStepWithPWD();
                },
              },
            ]);
            return false;
          } else return void this.nextStepWithPWD();
        },
      },
      {
        key: 'getVoiceDetail',
        value: function (e) {
          var t = this,
            a = arguments.length <= 1 ? undefined : arguments[1];
          module1146.default.getVoiceDetail(e.url).then(function (i) {
            if (i) {
              i.downloadVersion = e.version;
              var n = t.dealWithVoiceData(i);
              t.setState({
                voiceDta: n.voicePackets,
              });
              var s = {
                  voiceID: t.state.productId,
                  data: n,
                },
                l = false;
              a.map(function (e, a) {
                if (e && e.voiceID == t.state.productId) {
                  l = true;
                  e.data = n;
                }
              });
              if (!l) a.push(s);
              module593.default.save('getVoiceObjData', a);
            }
          });
        },
      },
      {
        key: 'dealWithVoiceData',
        value: function (e) {
          for (var t = e.voicePackets, a = [], i = 0; i < t.length; i++) {
            for (var n = t[i].lists, s = false, l = 0; l < n.length; l++) n[l].name == this.state.languageChilder && (s = true);

            if (s) {
              t[i].isSelected = true;
              t[i].language;
            } else t[i].isSelected = false;

            t[i].isOpened = false;
            a.push(t[i]);
          }

          e.voicePackets = a;
          return e;
        },
      },
      {
        key: 'getVoiceVersionUrl',
        value: function () {
          var e = this;
          module1146.default
            .getVoiceVersionUrl()
            .then(function (t) {
              module593.default.get('getVoiceObjData').then(function (a) {
                if (a) {
                  var i = false,
                    n = null;

                  if (
                    (a.map(function (t, a) {
                      if (t && t.voiceID == e.state.productId) {
                        i = true;
                        n = t;
                        a;
                      }
                    }),
                    i && n)
                  ) {
                    var s = n.data;
                    if (Number(t.version) >= Number(s.downloadVersion)) e.getVoiceDetail(t, a);
                    else {
                      s = e.dealWithVoiceData(s);
                      e.setState({
                        voiceDta: s.voicePackets,
                      });
                    }
                  } else e.getVoiceDetail(t, a);
                } else e.getVoiceDetail(t, []);
              });
            })
            .catch(function (e) {});
        },
      },
      {
        key: 'getDevicesVoice',
        value: function (e) {
          module1145.default.getCurVoice(e).then(
            function (e) {
              e.data.code;
            },
            function (e, t) {
              if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                Object.keys(e).map(function (t) {
                  if ('code' == t) {
                    var a = e[t];
                    a;
                  }

                  if ('message' == t) e[t];
                });
              }
            }
          );
        },
      },
      {
        key: 'bindData',
        value: function (e, t, a) {
          for (var i = this, n = arguments.length, s = new Array(n > 3 ? n - 3 : 0), l = 3; l < n; l++) s[l - 3] = arguments[l];

          console.log('\u914d\u7f51\u8bbe\u5907\u68c0\u67e5' + e, t, a, JSON.stringify(s));
          i.setState(
            {
              connectTime: 0,
            },
            function () {
              i.canconnectInterval = setInterval(function () {
                if (i.state.connectTime++ >= 180) {
                  if (i.canconnectInterval) clearInterval(i.canconnectInterval);
                  i.setState({
                    isCheckIng: false,
                  });
                } else if (1 == i.state.isConnected) {
                  if (i.canconnectInterval) clearInterval(i.canconnectInterval);
                  i.bindDataByName(e, t, a);
                  i.setState({
                    isCheckIng: false,
                  });
                }
              }, 100);
            }
          );
        },
      },
      {
        key: 'bindDataByName',
        value: function (e, t, a) {
          var i = this;
          this.setState({
            connectTime: 0,
          });
          if (this.connectInterval) clearInterval(this.connectInterval);
          this.connectInterval = setInterval(function () {
            if (i.state.connectTime++ >= 10) {
              if (i.connectInterval) clearInterval(i.connectInterval);
              i.goBackIndex();
            }
          }, 1e3);

          try {
            module943.default.bindDevice(e, t, a).then(
              function (e) {
                if (i.connectInterval) clearInterval(i.connectInterval);
                clearInterval(i.state.connectInterval);

                if (200 == e.code || 2064 == e.code) {
                  i.exceptionWithName(7);
                  i.setState({
                    stepIndex: 7,
                    iotId: e.data.deviceId,
                    topTitle: module594.default.t('connectionSucceeded'),
                  });
                  ReactNative.DeviceEventEmitter.emit('indexList');
                } else module1096.default.info(e.localMsg ? e.localMsg : e.message, 1, undefined, false);
              },
              function (e, t) {
                if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                  var a = '';
                  Object.keys(e).map(function (t) {
                    if ('message' == t) a = e[t];
                  });
                  module1096.default.info(a, 1, undefined, false);
                }
              }
            );
          } catch (e) {}
        },
      },
      {
        key: 'goBackIndex',
        value: function () {
          var e = this;
          return (
            !this.state.isCheckIng &&
            (this.state.wifiOkName
              ? void module1145.default.setDeviceNickName(this.state.iotId, this.state.wifiOkName).then(
                  function (t) {
                    if (200 == t.code) {
                      module1096.default.info(module594.default.t('ediltSuccess'), 1, undefined, false);
                      ReactNative.DeviceEventEmitter.emit('indexList');
                      setTimeout(function () {
                        module943.default.closeBLE();
                        e.props.navigation.dispatch(module421.StackActions.popToTop());
                      }, 1e3);
                    } else module1096.default.info(t.localMsg ? t.localMsg : t.message, 1, undefined, false);
                  },
                  function (e, t) {
                    if ((ReactNative.DeviceEventEmitter.emit('indexList'), (e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                      var a = '';
                      Object.keys(e).map(function (t) {
                        if ('message' == t) a = e[t];
                      });
                      module1096.default.info(a, 1, undefined, false);
                    }
                  }
                )
              : (module1096.default.info(module594.default.t('equipmentNewName'), 1, undefined, false), false))
          );
        },
      },
      {
        key: 'onClose',
        value: function () {
          this.props.navigation.navigate('networkList');
        },
      },
      {
        key: 'startBLEScan',
        value: function () {
          module943.default.startBLEScan(12e4);
        },
      },
      {
        key: 'stopBLEScan',
        value: function () {
          module943.default.stopBLEScan();
        },
      },
      {
        key: '_renderItemView',
        value: function (e) {
          var t = e.item,
            a = e.index,
            i = t.title,
            n = t.img;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [j.cell],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: j.wifiItemTitle,
                },
                i
              ),
              React.default.createElement(ReactNative.Image, {
                source: n,
                style: j.cheyuanPic,
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: j.cellTag,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: j.txt,
                },
                ' ',
                a + 1,
                ' '
              )
            )
          );
        },
      },
      {
        key: '_renderItem',
        value: function (e) {
          var a = this,
            i = e.item,
            n = e.index;
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              style: j.BluetoothLi,
              onPress: function () {
                a.BluetoothClick(n, i.address);
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: j.BluetoothName,
              },
              i.name
            ),
            React.default.createElement(ReactNative.Image, {
              source: require('./1230'),
              style: j.BluetoothIcon,
              resizeMode: 'contain',
            })
          );
        },
      },
      {
        key: 'BluetoothClick',
        value: function (e, t) {
          var a = this;
          this.setState(
            {
              blueaAdress: t,
            },
            function () {
              a.connectBLE();
            }
          );
        },
      },
      {
        key: 'connectBLE',
        value: function (...args) {
          module943.default.checkBLEEnable().then(function (t) {
            if (t)
              e.state.blueaAdress
                ? ((F = module1096.default.loading('', 0)),
                  console.log(args),
                  (args && args.length > 0) ||
                    (e.setState({
                      connectTime: 0,
                    }),
                    e.connectInterval && clearInterval(e.connectInterval),
                    (e.connectInterval = setInterval(function () {
                      var t = e.state.connectTime++;

                      if (t >= 120) {
                        if (e.connectInterval) clearInterval(e.connectInterval);
                        module403.default.remove(F);
                        module1096.default.info(module594.default.t('C1617259862'), 2, undefined, false);
                      } else console.log('\u6b63\u5728\u5012\u8ba1\u65f6\u4e2d===222221223132312===222=== connectInterval \u300b\u300b\u300b\u300b\u300b' + t + ', step = ' + e.state.stepIndex);
                    }, 1e3))),
                  module943.default.connectBLE(e.state.blueaAdress))
                : module1096.default.info(module594.default.t('bleInValid'), 1, undefined, false);
            else module1096.default.info(module594.default.t('openBle'), 1, undefined, false);
          });
        },
      },
      {
        key: 'sendBLEData',
        value: function (e) {
          var t = this,
            a = {};

          switch (
            (console.log('\u53d1\u9001\u6570\u636e\u3001\u83b7\u53d6wifi\u5217\u8868 type=0 \u83b7\u53d6\u63a8\u8350wifi type=1 \u5f00\u59cb\u914d\u7f51  type=====' + e), e)
          ) {
            case 0:
              a = {
                cmd: 'get_wifi_list',
              };
              setTimeout(function () {
                t.setState({
                  isBluetoothLoa: false,
                });
              }, 25e3);
              break;

            case 1:
              this.setState({
                connectTime: 0,
              });
              if (this.connectInterval) clearInterval(this.connectInterval);
              this.connectInterval = setInterval(function () {
                var e = t.state.connectTime++;

                if (e >= 120) {
                  if (t.connectInterval) clearInterval(t.connectInterval);
                  clearInterval(t.state.bleInterval);
                  t.setState({
                    stepIndex: 10,
                    connectWifiFalse: 1,
                  });
                  t.dealwithOutputLog('\u84dd\u7259\u914d\u7f51\u5931\u8d25\u53d1\u751f\u5728\u9009\u62e9 \u84dd\u7259\u626b\u63cf\u51fa\u7684wifi \u540e');
                } else console.log('\u6b63\u5728\u5012\u8ba1\u65f6\u4e2d======222 === connectInterval ----- \u300b\u300b\u300b\u300b\u300b' + e + ', step = ' + t.state.stepIndex);
              }, 1e3);
              a = {
                cmd: 'config_wifi',
                wifi_name: this.state.wifiName,
                wifi_pwd: this.state.wifiPassword,
              };
              this.setState({
                wifiPostPassword: this.state.wifiPassword,
              });
              this.exceptionWithName(4);
              this.setState({
                stepIndex: 4,
                lzType: 1,
              });
          }

          module943.default.sendBLEData(a).then(function (e) {
            if (e && e.token)
              t.setState({
                blueaToken: e.token,
              });
          });
        },
      },
      {
        key: 'checkToken',
        value: function () {
          var e = this;
          module943.default.checkToken(this.state.blueaToken).then(
            function (t) {
              if (t && t.data && 200 == t.code) {
                clearInterval(e.state.bleInterval);
                if (e.connectInterval) clearInterval(e.connectInterval);
                e.bindData(t.data.productId, t.data.deviceName, e.state.blueaToken, t.data);
              } else e.dealwithOutputLog(event);
            },
            function (e, t) {
              if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                var a = '';
                Object.keys(e).map(function (t) {
                  if ('message' == t) a = e[t];
                });
                module1096.default.info(a, 1, undefined, false);
              }
            }
          );
        },
      },
      {
        key: '_recommendItem',
        value: function (e) {
          var a = this,
            i = e.item;
          e.index;
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              style: j.BluetoothLi,
              onPress: function () {
                console.log('========== \u63a8\u8350\u5217\u8868 11 = ' + JSON.stringify(a.state.BluetoothWifiLi));
                a.recommendClick(i.ssid, i.rssid);
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: j.BluetoothName,
              },
              i.ssid
            ),
            React.default.createElement(ReactNative.Image, {
              source: require('./1230'),
              style: j.BluetoothIcon,
              resizeMode: 'contain',
            })
          );
        },
      },
      {
        key: 'recommendClick',
        value: function (e, t) {
          var a = this;

          if (-1 == t) {
            this.goWifi();
            return false;
          }

          this.exceptionWithName(3);
          this.setState(
            {
              wifiName: e,
              stepIndex: 3,
              isIconBtn: true,
              Bluetooth: true,
            },
            function () {
              a.recordingCurrentWIFI();
              a.recordingWIFI();
            }
          );
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
          var e = this,
            a = this.props.navigation.navigate,
            i = [
              {
                text: module594.default.t('cancel'),
                onPress: function () {
                  e.onClose();
                },
              },
              {
                text: module594.default.t('btnConfirm'),
                onPress: function () {
                  module915.default.requestPermission().then(function (t) {
                    if (t.grantResults) e.getCurrentSsid();
                  });
                },
              },
            ],
            n = [
              {
                text: module594.default.t('btnConfirm'),
                onPress: function () {
                  e.setState({
                    wifiVisible: false,
                  });
                  module943.default.switchWifiByPhone();
                },
              },
            ],
            s = this.spinValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
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
              ReactNative.View,
              {
                style: j.Box,
              },
              React.default.createElement(ReactNative.StatusBar, {
                translucent: false,
                backgroundColor: '#F7F9FC',
                barStyle: 'dark-content',
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: j.topTitle,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: j.topImg,
                    hitSlop: {
                      left: 30,
                      right: 30,
                      top: 30,
                      bottom: 30,
                    },
                    onPress: function () {
                      module943.default.closeBLE();
                      if ('ios' == ReactNative.Platform.OS) console.log('stepIndexArr' + JSON.stringify(e.state.stepIndexArr));
                      e.props.navigation.goBack();
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1256'),
                    style: {
                      width: '30%',
                      height: '40%',
                    },
                  })
                ),
                React.default.createElement(ReactNative.Text, null, this.state.topTitle)
              ),
              this.state.isAlert
                ? React.default.createElement(module1147.default, {
                    isShow: this.state.isAlert,
                    isType: this.state.alertType,
                    isData: this.state.wifiData,
                    wifiName: this.state.wifiListName,
                    onPick: function () {
                      e.setState({
                        isAlert: false,
                      });
                    },
                    onData: function (t) {
                      if (5 == e.state.stepIndex) {
                        console.log('==================== ----------------- res = ' + JSON.stringify(t));
                        e.setState({
                          wifiListName: t.deviceWifiName,
                          selectData: t,
                        });
                      }
                    },
                  })
                : null,
              1 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.stepContent,
                      },
                      this.state.productId
                        ? null
                        : React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.newWifi01,
                          }),
                      'a1iQ12ffASR' == this.state.productId
                        ? React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.secondGenerationNeabot0,
                          })
                        : null,
                      'a1Wi9Hfe7VT' === this.state.productId
                        ? React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.N2TurnOn,
                          })
                        : null,
                      'a1bp8GkMOe2' === this.state.productId
                        ? React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.newWifi01,
                          })
                        : null,
                      'a1XKU4BoqtH' === this.state.productId
                        ? React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.N2TurnOn,
                          })
                        : null,
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            color: '#658DC2',
                          },
                        },
                        module594.default.t('booTup')
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: j.wifiTxt,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: j.wifiTitle,
                          },
                          module594.default.t('booTupOne')
                        )
                      ),
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          style: j.wifiSwitch,
                          onPress: function () {
                            e.setState({
                              isIconBtn: (e.state.isIconBtn = !e.state.isIconBtn),
                            });
                          },
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: this.state.isIconBtn ? this.state.radionYex : this.state.radionNo,
                          style: j.wifiSwitchIcon,
                        }),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: [j.nextText, this.state.isIconBtn ? j.nextTextActive : ''],
                          },
                          React.default.createElement(ReactNative.Text, null, module594.default.t('yOpen'))
                        )
                      ),
                      React.default.createElement(
                        module1135.default,
                        {
                          type: 'primary',
                          style: [j.stepBtn, this.state.isIconBtn ? j.activeStep : ''],
                          onPress: function () {
                            if (e.state.isIconBtn) {
                              e.exceptionWithName(2);
                              e.setState({
                                stepIndex: 2,
                                isIconBtn: false,
                              });
                            }
                          },
                        },
                        module594.default.t('nextStep')
                      )
                    )
                  )
                : null,
              2 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.stepContent,
                      },
                      this.state.productId
                        ? null
                        : React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.newWifi02,
                          }),
                      'a1iQ12ffASR' == this.state.productId
                        ? React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.secondGenerationNeabot1,
                          })
                        : null,
                      'a1Wi9Hfe7VT' === this.state.productId
                        ? React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.N2MatchNetWork,
                          })
                        : null,
                      'a1bp8GkMOe2' === this.state.productId
                        ? React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.newWifi02,
                          })
                        : null,
                      'a1XKU4BoqtH' === this.state.productId
                        ? React.default.createElement(ReactNative.Image, {
                            style: j.stepImg,
                            source: module1201.default.N2MatchNetWork,
                          })
                        : null,
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            color: '#658DC2',
                          },
                        },
                        module594.default.t('network')
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: j.wifiTxt,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: j.wifiTitle,
                          },
                          'a1iQ12ffASR' == this.state.productId ? module594.default.t('networkTwo') : null,
                          'a1Wi9Hfe7VT' === this.state.productId ? module594.default.t('networkTwo') : null,
                          'a1bp8GkMOe2' === this.state.productId ? module594.default.t('networkOne') : null,
                          'a1XKU4BoqtH' === this.state.productId ? module594.default.t('networkTwo') : null
                        )
                      ),
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          style: j.wifiSwitch,
                          onPress: function () {
                            e.setState({
                              isIconBtn: (e.state.isIconBtn = !e.state.isIconBtn),
                            });
                          },
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: this.state.isIconBtn ? this.state.radionYex : this.state.radionNo,
                          style: j.wifiSwitchIcon,
                        }),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: [j.nextText, this.state.isIconBtn ? j.nextTextActive : ''],
                          },
                          React.default.createElement(ReactNative.Text, null, module594.default.t('indicatorLight'))
                        )
                      ),
                      React.default.createElement(
                        module1135.default,
                        {
                          type: 'primary',
                          style: [j.stepBtn, this.state.isIconBtn ? j.activeStep : ''],
                          onPress: function () {
                            if (e.state.isIconBtn) {
                              if (e.state.Bluetooth) {
                                e.spin();
                                e.startBLEScan();
                                e.exceptionWithName(11);
                                e.setState({
                                  stepIndex: 11,
                                  topTitle: module594.default.t('blueToothConnect'),
                                });
                              } else {
                                e.exceptionWithName(3);
                                e.setState({
                                  stepIndex: 3,
                                  topTitle: module594.default.t('pleaseNetwork'),
                                });
                              }

                              e.setState({
                                isIconBtn: true,
                              });
                            }
                          },
                        },
                        module594.default.t('nextStep')
                      )
                    )
                  )
                : null,
              11 == this.state.stepIndex && this.state.Bluetooth
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.FlatListView,
                      },
                      this.state.BluetoothList.length > 0 && !this.state.isBlueList
                        ? React.default.createElement(ReactNative.FlatList, {
                            style: j.wrap,
                            removeClippedSubviews: false,
                            data: this.state.BluetoothList,
                            renderItem: this._renderItem.bind(this),
                            keyExtractor: function (e, t) {
                              return e + t;
                            },
                          })
                        : React.default.createElement(
                            ReactNative.View,
                            {
                              style: j.bluealogBox,
                            },
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: j.container,
                              },
                              React.default.createElement(ReactNative.Animated.Image, {
                                style: [
                                  j.circle,
                                  {
                                    transform: [
                                      {
                                        rotate: s,
                                      },
                                    ],
                                  },
                                ],
                                source: require('./1326'),
                              })
                            ),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: j.bluealogTxt,
                              },
                              module594.default.t('searching')
                            )
                          )
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: j.blueaHelp,
                        onPress: function () {
                          a('wifiHelp');
                        },
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.blueaHelpTxt,
                        },
                        module594.default.t('noEquipmentHelp'),
                        ' ',
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1327'),
                          style: j.blueaHelpImgIcon,
                        })
                      )
                    )
                  )
                : null,
              this.state.Bluetooth && 9 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [
                        j.FlatListViewTop,
                        {
                          position: 'absolute',
                          zIndex: 1e3,
                          paddingLeft: module588.default.setSpText(60),
                        },
                      ],
                      onPress: function () {
                        e.exceptionWithName(3);
                        e.setState({
                          stepIndex: 3,
                          isIconBtn: true,
                        });
                      },
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [j.currentWifi],
                      },
                      module594.default.t('U1616751083'),
                      ' ',
                      this.state.wifiName
                    )
                  )
                : null,
              this.state.Bluetooth && 9 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.FlatListView,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.recommendWifi,
                        },
                        module594.default.t('selectWifi')
                      ),
                      this.state.isBluetoothLoa
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: j.recommendWifiLoa,
                            },
                            React.default.createElement(ReactNative.Animated.Image, {
                              style: [
                                j.recommendWifiLoaIcon,
                                {
                                  transform: [
                                    {
                                      rotate: s,
                                    },
                                  ],
                                },
                              ],
                              source: require('./1326'),
                            })
                          )
                        : null,
                      React.default.createElement(ReactNative.FlatList, {
                        style: j.recommendWrap,
                        removeClippedSubviews: false,
                        initialNumToRender: 30,
                        data: this.state.BluetoothWifiLi,
                        initialNumToRender: 30,
                        renderItem: this._recommendItem.bind(this),
                        keyExtractor: function (e, t) {
                          return e + t;
                        },
                      })
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: j.blueaHelp,
                        onPress: function () {
                          a('wifiHelp');
                        },
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.blueaHelpTxt,
                        },
                        module594.default.t('noWifi'),
                        '?',
                        ' ',
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1327'),
                          style: j.blueaHelpImgIcon,
                        })
                      )
                    )
                  )
                : null,
              3 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
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
                          style: j.stepContent,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: j.homeWifi,
                          },
                          module594.default.t('homeWifi')
                        ),
                        React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            onPress: function () {
                              e.setState({
                                isAlert: true,
                                alertType: 'G',
                              });
                            },
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: j.standBy,
                            },
                            module594.default.t('onlySupports'),
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1327'),
                              style: j.standByIcon,
                            })
                          )
                        ),
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1328'),
                          style: j.GImg,
                        }),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: {
                              paddingLeft: module588.default.setSpText(20),
                              paddingRight: module588.default.setSpText(20),
                              width: '100%',
                            },
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: j.InputBox,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1160'),
                              style: j.InputIcon,
                            }),
                            React.default.createElement(ReactNative.TextInput, {
                              placeholder: module594.default.t('select') + 'wifi',
                              editable: false,
                              placeholderTextColor: '#CCCCCC',
                              enablesReturnKeyAutomatically: false,
                              style: j.wifiInput,
                              value: this.state.wifiName,
                            }),
                            React.default.createElement(
                              ReactNative.TouchableOpacity,
                              {
                                style: j.wifiIocn,
                                onPress: function () {
                                  e.goWifi();
                                },
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: require('./1329'),
                                style: {
                                  width: '100%',
                                  height: '100%',
                                },
                              })
                            )
                          ),
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: j.InputBox,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1330'),
                              style: j.InputIcon,
                            }),
                            React.default.createElement(ReactNative.TextInput, {
                              value: this.state.wifiPassword,
                              onChangeText: function (t) {
                                e.setState({
                                  wifiPassword: t,
                                });
                              },
                              placeholder: module594.default.t('inputPassword'),
                              autoCapitalize: 'none',
                              autoCorrect: false,
                              editable: true,
                              maxLength: 64,
                              enablesReturnKeyAutomatically: false,
                              placeholderTextColor: '#CCCCCC',
                              textContentType: 'password',
                              keyboardType: 'default',
                              returnKeyType: 'done',
                              secureTextEntry: !this.state.isPassIcon,
                              style: j.wifiInput,
                            }),
                            React.default.createElement(
                              ReactNative.TouchableOpacity,
                              {
                                style: j.wifiIocn,
                                onPress: function () {
                                  e.setState({
                                    isPassIcon: (e.state.isPassIcon = !e.state.isPassIcon),
                                  });
                                },
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: this.state.isPassIcon ? require('./1299') : require('./1298'),
                                style: {
                                  width: '100%',
                                  height: '100%',
                                },
                              })
                            )
                          ),
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: j.remember,
                            },
                            React.default.createElement(
                              ReactNative.TouchableOpacity,
                              {
                                onPress: function () {
                                  e.setState({
                                    isIconBtn: (e.state.isIconBtn = !e.state.isIconBtn),
                                  });
                                },
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: this.state.isIconBtn ? this.state.radionYex : this.state.radionNo,
                                style: j.rememberIcon,
                              })
                            ),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [j.rememberTxt, this.state.isIconBtn ? j.nextTextActive : ''],
                              },
                              ' ',
                              module594.default.t('rememberPassword'),
                              ' '
                            )
                          )
                        )
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          alignItems: 'center',
                        },
                      },
                      React.default.createElement(
                        module1135.default,
                        {
                          type: 'primary',
                          style: [
                            j.stepBtn,
                            j.activeStep,
                            {
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                          ],
                          onPress: function () {
                            e.getWifiType();
                          },
                        },
                        module594.default.t('connected'),
                        '\uff0c',
                        module594.default.t('nextStep'),
                        ' '
                      )
                    )
                  )
                : null,
              4 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.stepContent,
                      },
                      React.default.createElement(ReactNative.Animated.Image, {
                        style: [
                          j.stepImg,
                          {
                            transform: [
                              {
                                rotate: s,
                              },
                            ],
                          },
                        ],
                        source: require('./1331'),
                      }),
                      0 == this.state.lzType
                        ? React.default.createElement(
                            ReactNative.Text,
                            {
                              style: j.lzText,
                            },
                            ' ',
                            module594.default.t('searchDevices'),
                            ',',
                            this.state.smsTime,
                            ' s',
                            ' '
                          )
                        : React.default.createElement(
                            ReactNative.Text,
                            {
                              style: j.lzText,
                            },
                            ' ',
                            module594.default.t('deviceConnecting')
                          )
                    )
                  )
                : null,
              5 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.stepContent,
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: {
                            position: 'relative',
                            width: module588.default.setSpText(243),
                          },
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1332'),
                          resizeMode: 'cover',
                          style: j.wifiListImg,
                        }),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: j.wifiNameTitle,
                          },
                          'neabot_xx'
                        )
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.wifiListText,
                        },
                        this.state.notNeabotWifiStr
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: {
                            paddingLeft: module588.default.setSpText(20),
                            paddingRight: module588.default.setSpText(20),
                            width: '100%',
                          },
                        },
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: j.InputBox,
                          },
                          React.default.createElement(ReactNative.Image, {
                            source: require('./1160'),
                            style: j.InputIcon,
                          }),
                          React.default.createElement(ReactNative.TextInput, {
                            placeholder: module594.default.t('select') + 'wifi',
                            style: j.wifiInput,
                            editable: false,
                            value: this.state.wifiListName,
                            onChange: function (t) {
                              e.setState({
                                wifiListName: t,
                              });
                            },
                          }),
                          React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              style: j.wifiIocn,
                              onPress: function () {
                                e.setState({
                                  isAlert: true,
                                  alertType: 'W',
                                });
                              },
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1329'),
                              style: {
                                width: '100%',
                                height: '100%',
                              },
                            })
                          )
                        )
                      ),
                      React.default.createElement(
                        module1135.default,
                        {
                          type: 'primary',
                          style: [j.stepBtn, j.activeStep],
                          onPress: function () {
                            e.exceptionWithName(4);
                            e.setState({
                              stepIndex: 4,
                              lzType: 1,
                              topTitle: module594.default.t('pairing'),
                            });
                            e.connectNetwork();
                          },
                        },
                        module594.default.t('confirmConnection')
                      )
                    )
                  )
                : null,
              6 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.stepContent,
                      },
                      React.default.createElement(
                        ReactNative.View,
                        null,
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1333'),
                          resizeMode: 'cover',
                          style: j.wifiListImg,
                        })
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.wifiListText,
                        },
                        ' ',
                        module594.default.t('noshopp'),
                        ' WIFI'
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.nowifiPrompt,
                        },
                        ' ',
                        module594.default.t('tryAgain'),
                        ' '
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: j.stepNoWifiBtn,
                        },
                        React.default.createElement(
                          module1135.default,
                          {
                            type: 'primary',
                            size: '11',
                            style: [j.isNoWifi, j.activeStep],
                            onPress: function () {
                              e.spin();
                              e.exceptionWithName(4);
                              e.setState({
                                stepIndex: 4,
                                topTitle: module594.default.t('scanning'),
                                smsTime: 120,
                              });

                              e._countDownAction();

                              e.selectWifi();
                            },
                          },
                          ' ',
                          module594.default.t('searchAgain'),
                          ' '
                        )
                      )
                    )
                  )
                : null,
              7 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.stepContent,
                      },
                      React.default.createElement(
                        ReactNative.View,
                        null,
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1334'),
                          resizeMode: 'cover',
                          style: j.wifiOk,
                        })
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.wifiOkTitile,
                        },
                        module594.default.t('nameNewDevice')
                      ),
                      React.default.createElement(ReactNative.TextInput, {
                        value: this.state.wifiOkName,
                        onChangeText: function (t) {
                          e.setState({
                            wifiOkName: t,
                          });
                        },
                        editable: true,
                        maxLength: 32,
                        placeholder: module594.default.t('inputNewDevice'),
                        style: j.wifiOkName,
                      }),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: j.stepNoWifiBtn,
                        },
                        React.default.createElement(
                          module1135.default,
                          {
                            type: 'primary',
                            size: '11',
                            style: [j.isNoWifi, j.activeStep],
                            onPress: function () {
                              return module1110.default(function () {
                                e.goBackIndex();
                              });
                            },
                          },
                          module594.default.t('startExperience'),
                          ' '
                        )
                      )
                    )
                  )
                : null,
              8 == this.state.stepIndex && 'ja' !== module594.default.locale
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                        position: 'relative',
                        zIndex: 1,
                      },
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.iosWIFI,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.iosTopTxt,
                        },
                        module594.default.t('netWorkingSetupGuide')
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.iosTopTxt,
                        },
                        module594.default.t('iosSelect'),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: j.iosTopName,
                          },
                          'neabot_xxx'
                        ),
                        module594.default.t('iosPair')
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: j.iosWIFIicon,
                        },
                        React.default.createElement(ReactNative.FlatList, {
                          style: [
                            {
                              flex: 1,
                            },
                          ],
                          showsVerticalScrollIndicator: false,
                          ItemSeparatorComponent: this._separator,
                          refreshing: false,
                          onEndReachedThreshold: 0,
                          data: z,
                          renderItem: this._renderItemView.bind(this),
                          keyExtractor: function (e, t) {
                            return e + t;
                          },
                        })
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.iosWifiBottom,
                      },
                      React.default.createElement(
                        module1135.default,
                        {
                          type: 'primary',
                          size: '11',
                          style: j.iosWifiBtn,
                          onPress: function () {
                            e.goWifi();
                          },
                        },
                        ' ',
                        module594.default.t('understand'),
                        ' '
                      )
                    )
                  )
                : null,
              8 == this.state.stepIndex && 'ja' == module594.default.locale
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                        position: 'relative',
                        zIndex: 1,
                      },
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.iosWIFI,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.iosTopTxt,
                        },
                        module594.default.t('netWorkingSetupGuide')
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: j.iosTopTxt,
                        },
                        module594.default.t('iosSelect')
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: j.iosWIFIicon,
                        },
                        React.default.createElement(ReactNative.FlatList, {
                          style: [
                            {
                              flex: 1,
                            },
                          ],
                          showsVerticalScrollIndicator: false,
                          ItemSeparatorComponent: this._separator,
                          refreshing: false,
                          onEndReachedThreshold: 0,
                          data: z,
                          renderItem: this._renderItemView.bind(this),
                          keyExtractor: function (e, t) {
                            return e + t;
                          },
                        })
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.iosWifiBottom,
                      },
                      React.default.createElement(
                        module1135.default,
                        {
                          type: 'primary',
                          size: '11',
                          style: j.iosWifiBtn,
                          onPress: function () {
                            e.goWifi();
                          },
                        },
                        ' ',
                        module594.default.t('understand'),
                        ' '
                      )
                    )
                  )
                : null,
              10 == this.state.stepIndex
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: j.step,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: j.stepContent,
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1335'),
                        style: j.stepImg,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            j.lzText,
                            {
                              textAlign: 'left',
                            },
                          ],
                        },
                        '',
                        module594.default.t('deviceConnectFail'),
                        ''
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            j.lzText,
                            {
                              textAlign: 'left',
                            },
                          ],
                        },
                        ' ',
                        module594.default.t('O1619339286'),
                        ' '
                      )
                    ),
                    this.state.Bluetooth
                      ? React.default.createElement(
                          ReactNative.View,
                          {
                            style: j.iosWifiBottom,
                          },
                          React.default.createElement(
                            module1135.default,
                            {
                              type: 'primary',
                              size: '11',
                              style: j.iosWifiBtn,
                              onPress: function () {
                                if (e.state.Bluetooth) {
                                  e.setState(
                                    {
                                      Bluetooth: false,
                                    },
                                    function () {
                                      e.setState({
                                        stepIndex: 1,
                                      });
                                    }
                                  );
                                  e.exceptionWithName(1);
                                }
                              },
                            },
                            ' ',
                            module594.default.t('U1619339321'),
                            ' '
                          )
                        )
                      : null
                  )
                : null,
              React.default.createElement(
                ReactNative.View,
                {
                  style: j.bottomImg,
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1336'),
                  resizeMode: 'contain',
                  style: j.bottomImgUrl,
                })
              ),
              React.default.createElement(
                module1117.default,
                {
                  title: module594.default.t('Tips'),
                  transparent: true,
                  maskClosable: true,
                  visible: this.state.visible,
                  footer: i,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      paddingVertical: 20,
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        textAlign: 'center',
                      },
                    },
                    module594.default.t('isOpenAdd')
                  )
                )
              ),
              React.default.createElement(
                module1117.default,
                {
                  title: module594.default.t('Tips'),
                  visible: this.state.wifiVisible,
                  transparent: true,
                  maskClosable: true,
                  footer: n,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      paddingVertical: 20,
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        textAlign: 'center',
                      },
                    },
                    this.state.wifiVisibleText
                  )
                )
              )
            )
          );
        },
      },
    ]);
    return s;
  })(React.default.Component);

exports.networkWifi = module1336;
var j = ReactNative.StyleSheet.create({
    recommendWifiLoa: {
      paddingTop: module588.default.setSpText(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    recommendWifiLoaIcon: {
      width: module588.default.setSpText(25),
      height: module588.default.setSpText(25),
    },
    blueaHelp: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    blueaHelpTxt: {
      flex: 3,
      textAlign: 'center',
      color: '#2B75F1',
    },
    blueaHelpImg: {
      flex: 1,
    },
    blueaHelpImgIcon: {
      width: module588.default.setSpText(7),
      height: module588.default.setSpText(10.67),
    },
    bluealogBox: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: module588.default.setSpText(70),
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00a0e4',
    },
    circle: {
      position: 'absolute',
      width: module588.default.setSpText(75.67),
      height: module588.default.setSpText(78.67),
    },
    bluealogTxt: {
      color: '#263B59',
      fontSize: module588.default.setSpText(16),
      marginTop: module588.default.setSpText(50),
    },
    recommendText: {
      fontSize: module588.default.setSpText(12),
      color: '#0A72FA',
    },
    recommendLi: {
      height: 80,
      backgroundColor: '#E6EFFA',
      borderRadius: module588.default.setSpText(4),
      marginTop: module588.default.setSpText(5),
      paddingHorizontal: module588.default.setSpText(5),
      paddingTop: module588.default.setSpText(5),
    },
    recommendWifi: {
      color: '#263B59',
      fontSize: module588.default.setSpText(12),
      paddingTop: module588.default.setSpText(23),
    },
    FlatListView: {
      height: module588.default.setSpText(530),
      paddingHorizontal: module588.default.setSpText(23),
    },
    currentWifi: {
      color: '#658DC2',
      textAlign: 'auto',
      fontSize: module588.default.setSpText(12),
    },
    FlatListViewTop: {
      zIndex: 1,
      paddingLeft: module588.default.setSpText(40),
      flexDirection: 'column',
      paddingVertical: module588.default.setSpText(45),
    },
    FlatListView: {
      height: module588.default.setSpText(530),
      paddingHorizontal: module588.default.setSpText(23),
    },
    BluetoothLi: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: module588.default.setSpText(23),
      borderBottomColor: '#E4E4E4',
      borderBottomWidth: module588.default.setSpText(0.33),
    },
    BluetoothIcon: {
      width: module588.default.setSpText(20),
      height: module588.default.setSpText(20),
    },
    BluetoothName: {
      flex: 1,
      color: '#263B59',
      fontSize: module588.default.setSpText(16),
      paddingLeft: module588.default.setSpText(10),
    },
    iosWifiBtn: {
      height: module588.default.setSpText(48),
    },
    iosWifiBottom: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      paddingHorizontal: module588.default.setSpText(10),
      paddingBottom: module588.default.setSpText(20),
      zIndex: 1,
    },
    iosWIFIicon: {
      width: '100%',
      height: module588.default.setSpText(412),
      marginTop: module588.default.setSpText(20),
    },
    iosTopName: {
      color: '#0A72FA',
    },
    iosTopTxt: {
      fontSize: module588.default.setSpText(16),
      color: '#213B5C',
    },
    iosWIFI: {
      paddingHorizontal: module588.default.setSpText(24),
      marginTop: module588.default.setSpText(33),
    },
    Box: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#F7F9FC',
    },
    topTitle: {
      position: 'relative',
      alignItems: 'center',
      color: '#11243D',
      fontSize: module588.default.setSpText(16),
      paddingBottom: module588.default.setSpText(10),
      paddingTop: module588.default.setSpText(10),
    },
    topImg: {
      position: 'absolute',
      width: module588.default.setSpText(82),
      height: module588.default.setSpText(52),
      left: module588.default.setSpText(25),
      top: '50%',
    },
    bottomImg: {
      position: 'absolute',
      width: '100%',
      left: 0,
      bottom: 0,
      zIndex: -1,
    },
    stepTop: {
      position: 'absolute',
      zIndex: 1,
      paddingVertical: module588.default.setSpText(15),
    },
    step: {
      zIndex: 1,
      flex: 1,
      marginLeft: module588.default.setSpText(20),
      marginTop: module588.default.setSpText(30),
      marginBottom: module588.default.setSpText(20),
      width: ReactNative.Dimensions.get('window').width - module588.default.setSpText(40),
      backgroundColor: '#aaa',
      backgroundColor: '#fff',
      borderBottomLeftRadius: module588.default.setSpText(24),
      borderBottomRightRadius: module588.default.setSpText(24),
      borderTopEndRadius: module588.default.setSpText(24),
      borderTopStartRadius: module588.default.setSpText(24),
    },
    stepNoWifiBtn: {
      position: 'absolute',
      width: module588.default.setSpText(287),
      height: module588.default.setSpText(48),
      lineHeight: module588.default.setSpText(48),
      alignItems: 'center',
      color: '#fff',
      fontSize: module588.default.setSpText(14),
      left: '50%',
      bottom: module588.default.setSpText(20),
      marginLeft: module588.default.setSpText(-143.5),
      flexDirection: 'row',
      fontSize: module588.default.setSpText(12),
    },
    isNoWifi: {
      flex: 1,
      fontSize: module588.default.setSpText(12),
      height: module588.default.setSpText(48),
      marginLeft: module588.default.setSpText(19),
      borderRadius: module588.default.setSpText(16),
    },
    handWifi: {
      marginLeft: 0,
      backgroundColor: '#E6EFFA',
      color: '#0A72FA',
    },
    stepContent: {
      flex: 1,
      position: 'relative',
      alignItems: 'center',
    },
    wifiTxt: {
      alignItems: 'stretch',
      marginTop: module588.default.setSpText(20),
    },
    wifiTitle: {
      color: '#213B5C',
      paddingBottom: module588.default.setSpText(10),
    },
    stepBtn: {
      position: 'absolute',
      width: ReactNative.Dimensions.get('window').width - module588.default.setSpText(80),
      lineHeight: module588.default.setSpText(48),
      alignItems: 'center',
      backgroundColor: 'rgb(153,197,253)',
      borderColor: 'rgb(153,197,253)',
      color: '#fff',
      fontSize: module588.default.setSpText(14),
      borderBottomLeftRadius: module588.default.setSpText(16),
      borderBottomRightRadius: module588.default.setSpText(16),
      borderTopEndRadius: module588.default.setSpText(16),
      borderTopStartRadius: module588.default.setSpText(16),
      bottom: module588.default.setSpText(20),
    },
    stepImg: {
      width: module588.default.setSpText(243),
      height: module588.default.setSpText(243),
    },
    bottomImgUrl: {
      width: '100%',
      height: module588.default.setSpText(241),
    },
    GImg: {
      width: '100%',
      height: module588.default.setSpText(178),
    },
    wifiIocn: {
      width: module588.default.setSpText(15),
      height: module588.default.scaleSize(15),
      marginTop: module588.default.setSpText(15),
      marginRight: module588.default.setSpText(20),
      flex: 0.1,
    },
    lzText: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(16),
    },
    wifiSwitch: {
      flexDirection: 'row',
      height: module588.default.setSpText(36),
      paddingLeft: module588.default.setSpText(10),
      paddingRight: module588.default.setSpText(13),
      backgroundColor: '#F7F9FC',
      borderBottomLeftRadius: module588.default.setSpText(16),
      borderBottomRightRadius: module588.default.setSpText(16),
      borderTopEndRadius: module588.default.setSpText(16),
      borderTopStartRadius: module588.default.setSpText(16),
      marginTop: module588.default.setSpText(28),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: module588.default.setSpText(14),
    },
    wifiSwitchIcon: {
      width: module588.default.setSpText(18),
      height: module588.default.setSpText(18),
    },
    nextText: {
      fontSize: module588.default.setSpText(12),
      color: '#658DC2',
      justifyContent: 'center',
      height: module588.default.setSpText(30),
      paddingLeft: module588.default.setSpText(5),
    },
    nextTextActive: {
      color: '#0A72FA',
    },
    activeStep: {
      backgroundColor: '#0A72FA',
      borderColor: '#0A72FA',
    },
    homeWifi: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(24),
      marginTop: module588.default.setSpText(20),
    },
    standBy: {
      color: '#0A72FA',
      fontSize: module588.default.setSpText(16),
      marginTop: module588.default.setSpText(10),
    },
    standByIcon: {
      width: module588.default.setSpText(20),
      height: module588.default.setSpText(20),
    },
    InputBox: {
      position: 'relative',
      flexDirection: 'row',
      backgroundColor: '#E6EFFA',
      borderWidth: 1,
      borderColor: '#BCCCE0',
      height: module588.default.setSpText(55),
      lineHeight: module588.default.setSpText(48),
      borderRadius: module588.default.setSpText(8),
      marginBottom: module588.default.setSpText(20),
    },
    wifiInput: {
      flex: 0.8,
      color: '#0A72FA',
      fontSize: module588.default.setSpText(14),
      paddingVertical: 0,
    },
    InputIcon: {
      width: module588.default.setSpText(18),
      height: module588.default.setSpText(22),
      marginTop: module588.default.setSpText(12),
      marginLeft: module588.default.setSpText(18),
      marginRight: module588.default.setSpText(13),
      flex: 0.1,
    },
    remember: {
      marginTop: module588.default.setSpText(1),
      flexDirection: 'row',
    },
    rememberTxt: {
      flex: 1,
      fontSize: module588.default.setSpText(14),
      color: '#658DC2',
    },
    rememberIcon: {
      width: module588.default.setSpText(18),
      height: module588.default.setSpText(18),
      marginTop: module588.default.setSpText(1),
    },
    wifiListImg: {
      width: module588.default.setSpText(243),
      height: module588.default.setSpText(243),
      marginTop: module588.default.setSpText(20),
    },
    wifiListText: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(16),
      marginTop: module588.default.setSpText(20),
      marginBottom: module588.default.setSpText(20),
    },
    nowifiPrompt: {
      width: module588.default.setSpText(287),
      lineHeight: module588.default.setSpText(30),
      fontSize: module588.default.setSpText(16),
      color: '#213B5C',
    },
    wifiNameTitle: {
      position: 'absolute',
      height: module588.default.setSpText(40),
      lineHeight: module588.default.setSpText(40),
      textAlign: 'center',
      top: '50%',
      marginTop: module588.default.setSpText(-40),
      alignItems: 'center',
      color: '#fff',
      width: '100%',
    },
    wifiOk: {
      width: module588.default.setSpText(287),
      height: module588.default.setSpText(133),
      marginTop: module588.default.setSpText(20),
    },
    wifiOkTitile: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(16),
      textAlign: 'center',
      marginTop: module588.default.setSpText(20),
    },
    wifiOkName: {
      width: module588.default.setSpText(287),
      height: module588.default.setSpText(48),
      borderWidth: 1,
      borderColor: '#BCCCE0',
      backgroundColor: '#E6EFFA',
      borderRadius: module588.default.setSpText(8),
      marginTop: module588.default.setSpText(20),
      color: '#0A72FA',
      paddingLeft: module588.default.setSpText(20),
      paddingVertical: 0,
    },
    wifiItemTitle: {
      flex: 1,
      color: '#263B59',
      fontSize: module588.default.setSpText(16),
      paddingLeft: module588.default.setSpText(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    cheyuanPic: {
      height: module588.default.setSpText(130),
      width: module588.default.setSpText(130),
      resizeMode: 'contain',
    },
    cell: {
      backgroundColor: '#eee',
      flex: 1,
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: module588.default.setSpText(10),
    },
    cellTag: {
      position: 'absolute',
      height: module588.default.setSpText(20),
      width: module588.default.setSpText(20),
      backgroundColor: '#1E90FF',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: module588.default.setSpText(5),
      borderBottomRightRadius: module588.default.setSpText(5),
      borderTopEndRadius: module588.default.setSpText(5),
      borderTopStartRadius: module588.default.setSpText(10),
    },
    txt: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: module588.default.setSpText(16),
    },
  }),
  H = module1336;
exports.default = H;
