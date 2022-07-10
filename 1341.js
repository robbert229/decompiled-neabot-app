require('./920');

require('./1343');

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
  module421 = require('./421'),
  module588 = require('./588'),
  module1145 = require('./1145'),
  module1111 = require('./1111'),
  module915 = require('./915'),
  module1146 = require('./1146'),
  module1342 = require('./1342'),
  module1110 = require('./1110'),
  module1148 = require('./1148'),
  module1147 = require('./1147'),
  module594 = require('./594'),
  module593 = require('./593'),
  module1345 = require('./1345');

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

var D = '',
  O = ReactNative.Dimensions.get('window').height,
  module1362 = (function (e) {
    module35.default(o, e);

    var a = o,
      n = A(),
      i = function () {
        var e,
          t = module34.default(a);

        if (n) {
          var i = module34.default(this).constructor;
          e = Reflect.construct(t, arguments, i);
        } else e = t.apply(this, arguments);

        return module37.default(this, e);
      };

    function o(e) {
      var a;
      module24.default(this, o);

      (a = i.call(this, e)).appRobotSetFun = function (e) {
        var t = a.props.route.params;
        a.checkSettingFunc(e, t);
      };

      a._handleAppStateChange = function (e) {
        if (null != e && 'active' === e) {
          if (a.state.isNoBackRes)
            a.setState(
              {
                getPropertiesData: null,
              },
              function () {
                a.getProperties();
              }
            );
        } else
          a.setState({
            getPropertiesData: null,
          });
      };

      a._areaListFun = function () {
        switch (a.state.navIndex) {
          case 0:
            console.log('\u6709\u6ca1\u6709\u6570\u636e' + a.state.WorkModeNum, 'this.state.areas:' + JSON.stringify(a.state.areas));

            if ('sweep' != a.state.WorkModeNum) {
              if (a.state.areas && a.state.areas.autoAreaValue)
                a.setState({
                  sweepArea: a.state.areas.autoAreaValue.length,
                  segmentTagIds: a.state.areas.autoAreaValue,
                });
              if ('smart_area' != a.state.subMode) a.navIsShowMap(a.state.navIndex);
            }

            break;

          case 2:
            if (a.state.isAddArea)
              a.setState(
                {
                  isAddArea: false,
                },
                function () {
                  a.navIsShowMap(a.state.navIndex);
                }
              );
        }
      };

      a._tagNumFun = function (e) {
        a.setState({
          tagNum: e,
          localRecordSeepTaskTag: null,
        });
      };

      a._sweepArea = function (e) {
        a.setState({
          sweepArea: e,
        });
      };

      var n = a.props.route.params;
      a.state = {
        iotId: n && n.iotId ? n.iotId : '-1',
        nickname: n && n.nickName ? n.nickName : '',
        userId: n && n.userId ? n.userId : '',
        owned: n && n.owned ? n.owned : 0,
        productIdIndex: n && n.productId ? n.productId : '',
        navData: [
          {
            name: module594.default.t('partitionCleaning'),
            id: 0,
          },
          {
            name: module594.default.t('fullImageCleaning'),
            id: 1,
          },
          {
            name: module594.default.t('areaCleaning'),
            id: 2,
          },
          {
            name: module594.default.t('spotCleaning'),
            id: 3,
          },
        ],
        cleanTopMoreData: [
          {
            name: module594.default.t('lightVolume'),
            MoreIcon: require('./1346'),
          },
          {
            name: module594.default.t('callSweeper'),
            MoreIcon: require('./1347'),
          },
          {
            name: module594.default.t('reservation'),
            MoreIcon: require('./1348'),
          },
          {
            name: module594.default.t('moreFeatures'),
            MoreIcon: require('./1349'),
          },
        ],
        isMore: false,
        cleanIconL: require('./1350'),
        cleanIconR: require('./1351'),
        cleanIconIndex: 0,
        cleanzGoImg: require('./1352'),
        slListImg: null,
        xlListImg: null,
        slList: [
          {
            img: require('./1353'),
            id: 0,
          },
          {
            img: require('./1354'),
            id: 1,
          },
          {
            img: require('./1355'),
            id: 2,
          },
          {
            img: require('./1356'),
            id: 3,
          },
        ],
        xlList: [
          {
            img: require('./1357'),
            id: 0,
          },
          {
            img: require('./1358'),
            id: 1,
          },
          {
            img: require('./1359'),
            id: 2,
          },
          {
            img: require('./1360'),
            id: 3,
          },
        ],
        cleanRliType: null,
        getPropertiesData: null,
        mapStrData: null,
        BatteryState: null,
        UpdateMapProgress: null,
        CleanAreas: null,
        CleanRunTime: null,
        AppState: 1,
        status: '',
        AppStatesendAppState: null,
        mapId: -1,
        robotTxt: null,
        robotTypeIcon: null,
        powerImg: require('./1222'),
        bottomBtnIcon: false,
        isAlert: false,
        alertType: 'DL',
        Vol: null,
        LedSwitch: null,
        slNum: null,
        xlNum: null,
        deviceSecret: null,
        deviceName: null,
        productId: null,
        createUrl: null,
        bucketName: null,
        endpoint: null,
        firmwareVersion: null,
        dustFreq: null,
        bottomNavTop: '',
        isContentNav: false,
        segmentTagIds: '',
        isForbidMode: true,
        isGetForbidMode: true,
        areaList: null,
        sweepArea: 0,
        isAddArea: false,
        isNoBackRes: true,
        map: '',
        isOnline: null,
        mop: '',
        pathHidingType: null,
        AppFunction: null,
        waterSpeedRegulation: null,
        fanControl: null,
        WorkModeNum: null,
        subMode: null,
        navIndex: null,
        mapTypeNum: null,
        areas: null,
        tagNum: 0,
        tagIds: [],
        photos: [],
        submitcount: 0,
        waiting: false,
        changeType: null,
        localRecordSeepTaskTag: null,
        maps: [],
        mapInfo: {},
      };
      return a;
    }

    module25.default(o, [
      {
        key: 'componentDidMount',
        value: function () {
          var e = this;
          D = module1096.default.loading();

          try {
            module1145.default.setPanelDevice(this.state.iotId).then(
              function (e) {},
              function (e, t) {
                if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                  Object.keys(e).map(function (t) {
                    if ('message' == t) e[t];
                  });
                  console.log('errorCode:setPanelDevice' + JSON.stringify(0));
                }
              }
            );
          } catch (e) {}

          this.getStatusGo();
          this.getProperties();
          this.getDeviceInfo();
          this.Properties = ReactNative.DeviceEventEmitter.addListener('Properties', function (t) {
            e.setState({
              isAddArea: true,
            });
          });
          this.areaNum = ReactNative.DeviceEventEmitter.addListener('areaNum', function (t, a) {
            e.setState({
              tagNum: t,
              tagIds: a,
            });
          });
          this.selectNum = ReactNative.DeviceEventEmitter.addListener('selectNum', function (t, a) {
            console.log('\u6536\u5230\u5206\u533a\u76d1\u542ctagNum = ' + t, JSON.stringify(a));
            e.setState({
              sweepArea: t,
              segmentTagIds: a,
            });
          });
          var t = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.ControlApiModule);
          this.eventEmitter = t.addListener('addSingleListener', function (t) {
            var a = t.data;

            if (a && a != e.state.mapStrData) {
              if (
                (e.setState({
                  mapStrData: a,
                }),
                t.deviceId == e.state.iotId)
              ) {
                if (a.map && '' != a.map)
                  try {
                    var n = JSON.stringify(JSON.parse(a.map).data);
                    ReactNative.DeviceEventEmitter.emit('cleanIndexMap', n);
                  } catch (e) {}
                if (a.UpdateMapProgress && '' != a.UpdateMapProgress)
                  try {
                    var i = JSON.parse(a.UpdateMapProgress);
                    if (i.Progress >= 100 && i.Name)
                      e.state.UpdateMapProgress
                        ? i.Name != e.state.UpdateMapProgress.Name &&
                          e.setState({
                            UpdateMapProgress: i,
                          })
                        : e.setState({
                            UpdateMapProgress: i,
                          });
                  } catch (e) {}

                if (
                  (a.curPath && ReactNative.DeviceEventEmitter.emit('curPath', a.curPath),
                  a.hisPath && ReactNative.DeviceEventEmitter.emit('hisPath', a.hisPath),
                  (0 == a.led || a.led) &&
                    (e.setState({
                      LedSwitch: a.led,
                    }),
                    ReactNative.DeviceEventEmitter.emit('LedSwitcNum', a.led)),
                  (a.vol || 0 == a.vol) &&
                    (e.setState({
                      Vol: a.vol,
                    }),
                    ReactNative.DeviceEventEmitter.emit('VolNum', a.vol)),
                  a.areaList &&
                    (e.setState({
                      areas: a.areaList,
                    }),
                    ReactNative.DeviceEventEmitter.emit('setArea', a.areaList),
                    a.areaList.autoAreaValue && ReactNative.DeviceEventEmitter.emit('areasLengthDa', a.areaList)),
                  a.area,
                  (a.waterLv || 0 == a.waterLv) && (e.slfunIcon(a.waterLv), ReactNative.DeviceEventEmitter.emit('slTypeData', a.waterLv)),
                  (a.windLv || 0 == a.windLv) && (e.xlfunIcon(a.windLv), ReactNative.DeviceEventEmitter.emit('xlTypeData', a.windLv)),
                  a.subMode &&
                    (console.log(
                      '=============================\u5b50\u6a21\u5f0f\u76d1\u542c \u670d\u52a1\u7aef\u4efb\u52a1\u6807\u8bb0 = ' + a.subMode + ' , subMode = ' + e.state.subMode,
                      '\u76ee\u6807\u4efb\u52a1\u6807\u8bb0\uff1a' + e.state.localRecordSeepTaskTag
                    ),
                    e.setState(
                      {
                        subMode: a.subMode,
                        waiting: false,
                      },
                      function () {
                        ReactNative.DeviceEventEmitter.emit('subValue', a.subMode);
                        e.workModeVal(e.state.WorkModeNum);
                      }
                    ),
                    'null' != a.subMode &&
                      (console.log('this.state.changeType====' + e.state.changeType),
                      0 == e.state.changeType
                        ? (console.log('this.state.changeType=111111===' + e.state.changeType),
                          e.setState({
                            changeType: null,
                          }))
                        : (console.log('this.state.changeType33333333====' + e.state.changeType), e.subModeVal()))),
                  a.mode &&
                    (e.workModeVal(a.mode),
                    'charge' == a.mode || 'fullcharge' == a.mode ? ReactNative.DeviceEventEmitter.emit('dusMode', 3) : ReactNative.DeviceEventEmitter.emit('dusMode', 0),
                    ReactNative.DeviceEventEmitter.emit('workValue', a.mode)),
                  a.workstationType && ReactNative.DeviceEventEmitter.emit('workStationType', a.workstationType),
                  a.forbidMode &&
                    e.state.isForbidMode &&
                    (e.isFrobidMode(a.forbidMode),
                    e.setState({
                      isForbidMode: false,
                    })),
                  a.appointment)
                ) {
                  console.log('========== cleanIndex \u6e05\u626b\u9884\u7ea6\u7f16\u8f91\u6570\u636e\u76d1\u542c=' + JSON.stringify(a.appointment));
                  var o = Math.round(new Date().getTime());
                  module593.default.save('appointmentTime', o);
                  ReactNative.DeviceEventEmitter.emit('getData');
                }

                if (a.dustFreq || 0 == a.dustFreq) ReactNative.DeviceEventEmitter.emit('dustFreq', a.dustFreq);
                if (a.status)
                  e.setState(
                    {
                      status: a.status,
                    },
                    function () {
                      e.workModeVal(e.state.WorkModeNum);
                    }
                  );

                if (a.mop || 0 == a.mop) {
                  e.setState({
                    mop: a.mop,
                  });
                  ReactNative.DeviceEventEmitter.emit('mopType', a.mop);
                }

                e.setState({
                  BatteryState: a.elecReal ? a.elecReal : e.state.BatteryState,
                  CleanAreas: a.cleanArea ? a.cleanArea : e.state.CleanAreas,
                  CleanRunTime: a.cleanTime ? a.cleanTime : e.state.CleanRunTime,
                });
              }

              if (a.VoicePackProgress && '' != a.VoicePackProgress) ReactNative.DeviceEventEmitter.emit('Progress', a.VoicePackProgress);
            }
          });
          this.isShowData = ReactNative.DeviceEventEmitter.addListener('isMap', function (t) {
            e.setState({
              isNoBackRes: true,
            });
            D = module1096.default.loading();
            console.log('.state.changeType4444==' + e.state.changeType, 'msg===:' + JSON.stringify(t));
            e.setState({
              waiting: false,
            });
            if (t)
              t.changeType
                ? e.getProperties()
                : e.setState(
                    {
                      changeType: t.changeType,
                    },
                    function () {
                      e.getProperties(t.changeType);
                    }
                  );
            else e.getProperties();
          });
          this.moreResetMap = ReactNative.DeviceEventEmitter.addListener('moreResetMap', function (t) {
            e.setState(
              {
                getPropertiesData: null,
              },
              function () {
                console.log('----------------------- cleanIndex moreResetMap \u91cd\u7f6e\u5730\u56fe');
                e.getProperties();
              }
            );
          });
          this.isShowMap = ReactNative.DeviceEventEmitter.addListener('isMoreMap', function (t) {
            console.log(
              '============= cleanIndex \u66f4\u591a\u754c\u9762 \u8fdb\u5165\u9700\u8981\u5730\u56fe\u5c55\u793a\uff0c\u6e05\u9664\u5f53\u524d\u5730\u56femapData  = ' +
                JSON.stringify(t)
            );
            e.setState(
              {
                getPropertiesData: null,
                isNoBackRes: false,
              },
              function () {
                e.props.navigation.navigate(t.mapName, {
                  iotId: t.iotId ? t.iotId : '',
                  editType: t.editType ? t.editType : 0,
                  nickname: t.nickname ? t.nickname : '',
                  AppFunction: e.state.AppFunction,
                  fileName: t.fileName ? t.fileName : '',
                  isInterrupt: t.isInterrupt ? t.isInterrupt : '',
                  slNum: t.slNum ? t.slNum : '',
                  xlNum: t.xlNum ? t.xlNum : '',
                  isEdit: t.isEdit ? t.isEdit : '',
                  cleanLiIndex: t.cleanLiIndex || 0 == t.cleanLiIndex ? t.cleanLiIndex : '',
                  cleanList: t.cleanList,
                  cleanIndexEdit: !!t.cleanIndexEdit && t.cleanIndexEdit,
                  areas: t.areas ? t.areas : [],
                  mop: t.mop ? t.mop : {},
                  activeFlae: t.activeFlae ? t.activeFlae : [],
                  reservationList: t.reservationList ? t.reservationList : [],
                  getPropertiesData: t.getPropertiesData ? t.getPropertiesData : {},
                  mapId: t.mapId ? t.mapId : '',
                  deviceId: t.deviceId ? t.deviceId : '',
                });
              }
            );
          });
          ReactNative.AppState.addEventListener('change', this._handleAppStateChange);
          this.getAppFunctionVersion();
          setTimeout(function () {
            e.myView.measure(function (t, a, n, i, o, s) {
              if ('ios' === ReactNative.Platform.OS) (812 != O && 896 != O) || (s -= 35);
              e.setState({
                bottomNavTop: s - module588.default.setSpText(185),
              });
            });
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.setState({
            getPropertiesData: null,
          });
          ReactNative.DeviceEventEmitter.emit('indexList');
          if (this.eventEmitter) this.eventEmitter.emitter.removeAllListeners('addSingleListener');
          if (this.isShowData) this.isShowData.emitter.removeAllListeners('isMap');
          if (this.isShowMap) this.isShowMap.emitter.removeAllListeners('isMoreMap');
          if (this.Properties) this.Properties.emitter.removeAllListeners('Properties');
          if (this.areaNum) this.areaNum.emitter.removeAllListeners('areaNum');
          this.selectNum.emitter.removeAllListeners('selectNum');
          if (this.selectNum) this.moreResetMap.emitter.removeAllListeners('moreResetMap');
          if (this.state.AppStatesendAppState) clearInterval(this.state.AppStatesendAppState);
          module1145.default.panelDestroy();
          module403.default.remove(D);

          this.setState = function (e, t) {};
        },
      },
      {
        key: 'getAppFunctionVersion',
        value: function () {
          var e = this;
          this.appRobotSetFun(module1345.default);
          var t = this.props.route.params;
          if (t && t.appRobotSet && undefined != t.appRobotSet && '' != JSON.stringify(t.appRobotSet)) this.appRobotSetFun(t.appRobotSet);
          else
            module1146.default.getAppFunctionVersion().then(function (t) {
              if (200 == t.code)
                module1146.default.getAppFunctionContent(t.url).then(function (a) {
                  if (!Config.showId && 'ios' == ReactNative.Platform.OS && a) for (var n = 0; n < a.length; n++) a[n].productId || (a[n].productId = a[n].productKey);
                  var i = {
                    getAppFunctionVersion: t.version,
                    getAppFunctionContent: a,
                  };
                  module593.default.save('getAppFunction', i);
                  e.appRobotSetFun(a);
                });
            });
        },
      },
      {
        key: 'getDataFunc',
        value: function (e, t, a) {
          if (e) for (var n = 0; n < e.length; n++) a && e[n].productKey == a.productId && (t = e[n].APP_function);
          return t;
        },
      },
      {
        key: 'checkSettingFunc',
        value: function (e, t) {
          var a = this,
            n = null;
          if (!n)
            module593.default.get('getAppFunction').then(function (i) {
              if (i && i.getAppFunctionContent) {
                e = i.getAppFunctionContent;
                n = a.getDataFunc(e, n, t);
                a.setState(
                  {
                    AppFunction: n || null,
                    waterSpeedRegulation: n && n.waterSpeedRegulation ? n.waterSpeedRegulation : 0,
                    fanControl: n && n.fanControl ? n.fanControl : 1,
                  },
                  function () {
                    a.NumberFun();
                  }
                );
              } else {
                n = a.getDataFunc(e, n, t);
                a.setState(
                  {
                    AppFunction: n || null,
                    waterSpeedRegulation: n && n.waterSpeedRegulation ? n.waterSpeedRegulation : 0,
                    fanControl: n && n.fanControl ? n.fanControl : 1,
                  },
                  function () {
                    a.NumberFun();
                  }
                );
              }
            });
        },
      },
      {
        key: 'NumberFun',
        value: function () {
          var e = [],
            t = [],
            a = [];

          if (this.state.AppFunction) {
            for (
              var n = this.state.AppFunction.waterSpeedGearsNumber.split(','),
                i = this.state.AppFunction.fanControlGearsNumber.split(','),
                o = this.state.AppFunction.cleaningMode.split(','),
                s = 0;
              s < n.length;
              s++
            )
              e.push(this.state.slList[n[s]]);

            for (var l = 0; l < i.length; l++) t.push(this.state.xlList[i[l]]);

            for (var r = 0; r < o.length; r++) a.push(this.state.navData[o[r] - 1]);
          }

          this.setState({
            xlList: t,
            slList: e,
            navData: a,
          });
        },
      },
      {
        key: 'getDeviceInfo',
        value: function () {
          var e = this;
          module1111.default.getDeviceInfo(this.state.iotId).then(function (t) {
            console.log('\u83b7\u53d6\u7269\u7684\u57fa\u672c\u4fe1\u606f  \u53ef\u4ee5\u67e5\u770b\u56fa\u4ef6\u7248\u672c\u53f7====' + JSON.stringify(t));
            if (t && t.data)
              e.setState(
                {
                  deviceSecret: t.data.deviceSecret ? t.data.deviceSecret : '',
                  deviceName: t.data.deviceName ? t.data.deviceName : '',
                  productId: t.data.productId ? t.data.productId : '',
                  firmwareVersion: t.data.firmwareVersion ? t.data.firmwareVersion : '',
                },
                function () {
                  e.getDeviceSTS();
                }
              );
          });
        },
      },
      {
        key: 'getDeviceSTS',
        value: function () {
          var e = this;
          module915.default.getDeviceSTS(this.state.userId, this.state.deviceName, this.state.deviceSecret, this.state.productId).then(
            function (t) {
              e.setState(
                {
                  bucketName: t.data.bucketName,
                  endpoint: t.data.endpoint,
                },
                function () {
                  e.createDeviceAuthURL();
                }
              );
            },
            function (e, t) {
              if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                Object.keys(e).map(function (t) {
                  if ('message' == t) e[t];
                });
              }
            }
          );
        },
      },
      {
        key: 'createDeviceAuthURL',
        value: function () {
          var e = this;
          module915.default.createDeviceAuthURL(this.state.userId, this.state.deviceName, this.state.deviceSecret).then(function (t) {
            e.setState(
              {
                createUrl: t.Url,
              },
              function () {
                e.setOssClient();
              }
            );
          });
        },
      },
      {
        key: 'setOssClient',
        value: function () {
          module1146.default.setDeviceOssClient(this.state.createUrl, this.state.endpoint, this.state.bucketName, this.state.productId);
        },
      },
      {
        key: 'submitOnce',
        value: function () {
          var e = this.state.submitcount;
          return (
            0 == e &&
            (this.setState({
              submitcount: e++,
            }),
            true)
          );
        },
      },
      {
        key: 'getStatusGo',
        value: function () {
          var e = this;
          module1145.default.getStatus(this.state.iotId).then(function (t) {
            if (200 == t.code) {
              var a = t.data;
              e.setState(
                {
                  isOnline: 1 == a.status ? a.status : 0,
                  status: a.status,
                },
                function () {
                  module1145.default.sendAppState(e.state.iotId, e.state.isOnline);
                  e.sendAppStateFun();
                }
              );
            }
          });
        },
      },
      {
        key: 'sendAppStateFun',
        value: function () {
          var e = this;
          this.state.AppStatesendAppState = setInterval(function () {
            module1145.default.sendAppState(e.state.iotId, e.state.isOnline);
          }, 3e4);
        },
      },
      {
        key: 'workModeVal',
        value: function (e) {
          if (
            (this.setState({
              WorkModeNum: e,
            }),
            ReactNative.DeviceEventEmitter.emit('firmwareUpdata', e),
            3 == this.state.status)
          )
            this.setState({
              robotTxt: module594.default.t('notOnline'),
              bottomBtnIcon: false,
              robotTypeIcon: this.state.powerImg,
            });
          else
            switch ((ReactNative.DeviceEventEmitter.emit('mapSurfaceViewStatus', e), e)) {
              case 'idle':
                this.setState({
                  robotTxt: module594.default.t('standby'),
                  bottomBtnIcon: false,
                  cleanzGoImg: require('./1352'),
                  robotTypeIcon: this.state.powerImg,
                });
                break;

              case 'sweep':
                var a = '';

                switch (this.state.subMode) {
                  case 'null':
                    a = module594.default.t('standby');
                    break;

                  case 'area':
                    a = module594.default.t('areaCleaning');
                    break;

                  case 'curpoint':
                  case 'point':
                    a = module594.default.t('pointCleaning');
                    break;

                  case 'total':
                    a = module594.default.t('totalCleaning');
                    break;

                  case 'smart_area':
                    a = module594.default.t('partitionAnCleaning');
                    break;

                  case 'smart_total':
                    a = module594.default.t('intelligentGlobal');
                }

                console.log('---------------------------------- \u5de5\u4f5c\u72b6\u6001 subMode = ' + this.state.subMode, 'WorkModeNum:' + this.state.WorkModeNum);
                this.setState({
                  bottomBtnIcon: false,
                  robotTxt: a,
                  cleanzGoImg: 'null' != this.state.subMode || null != this.state.subMode ? require('./1361') : require('./1352'),
                  robotTypeIcon: 'null' != this.state.subMode ? require('./1223') : this.state.powerImg,
                });
                ReactNative.DeviceEventEmitter.emit('mapTypeData', -1);
                break;

              case 'charge':
                this.setState({
                  robotTxt: module594.default.t('charge'),
                  bottomBtnIcon: false,
                  cleanzGoImg: require('./1352'),
                  robotTypeIcon: this.state.powerImg,
                });
                break;

              case 'pause':
                this.setState({
                  bottomBtnIcon: false,
                  robotTxt: module594.default.t('pause'),
                  cleanzGoImg: require('./1352'),
                  robotTypeIcon: this.state.powerImg,
                });
                break;

              case 'fault':
                this.setState({
                  robotTxt: module594.default.t('fault'),
                  bottomBtnIcon: false,
                  cleanzGoImg: require('./1352'),
                  robotTypeIcon: require('./1224'),
                });
                break;

              case 'dormant':
                this.setState({
                  robotTxt: module594.default.t('dormant'),
                  cleanzGoImg: require('./1352'),
                  bottomBtnIcon: false,
                  robotTypeIcon: this.state.powerImg,
                });
                break;

              case 'backcharge':
                this.setState({
                  robotTxt: module594.default.t('backcharge'),
                  bottomBtnIcon: true,
                  cleanzGoImg: require('./1361'),
                  robotTypeIcon: this.state.powerImg,
                });
                this.state.navIndex = null;
                break;

              case 'fullcharge':
                this.setState({
                  robotTxt: module594.default.t('fullcharge'),
                  cleanzGoImg: require('./1352'),
                  bottomBtnIcon: false,
                  robotTypeIcon: this.state.powerImg,
                });
                break;

              case 'findchargerpause':
                this.setState({
                  robotTxt: module594.default.t('findchargerpause'),
                  bottomBtnIcon: false,
                  cleanzGoImg: require('./1352'),
                  robotTypeIcon: this.state.powerImg,
                });
                break;

              case 'shutdown':
                this.setState({
                  robotTxt: module594.default.t('shutdown'),
                  cleanzGoImg: require('./1352'),
                  bottomBtnIcon: false,
                  robotTypeIcon: require('./1362'),
                });
                break;

              case 'rfctrl':
                this.setState({
                  robotTxt: module594.default.t('rfctrl'),
                  cleanzGoImg: require('./1352'),
                  bottomBtnIcon: false,
                  robotTypeIcon: this.state.powerImg,
                });
                this.state.navIndex = null;
            }
        },
      },
      {
        key: 'subModeVal',
        value: function () {
          var e = '';

          switch (this.state.subMode) {
            case 'null':
              e = 1;
              break;

            case 'area':
              e = 2;
              break;

            case 'curpoint':
            case 'point':
              e = 3;
              break;

            case 'total':
              e = 1;
              break;

            case 'smart_area':
              e = 0;
              break;

            case 'smart_total':
              e = 1;
          }

          this.setState(
            {
              navIndex: e,
            },
            function () {}
          );
        },
      },
      {
        key: 'cleaningMode',
        value: function () {
          switch (this.state.navIndex) {
            case 0:
              this.setState({
                mapTypeNum: 4,
              });
              break;

            case 1:
              this.setState({
                mapTypeNum: 0,
              });
              break;

            case 2:
              this.setState({
                mapTypeNum: 2,
              });
              break;

            case 3:
              this.setState({
                mapTypeNum: 1,
              });
          }
        },
      },
      {
        key: 'getProperties',
        value: function (...args) {
          if (args) args = args[0];
          module593.default.save('clickRobotId', this.state.productIdIndex);
          module1145.default.getProperties(this.state.iotId).then(
            function (t) {
              if ((module403.default.remove(D), 200 == t.code && '{}' !== JSON.stringify(t.data) && '' != t.data)) {
                if (t.data && t.data.areaList) {
                  var n = e.dealWithPartitionData(t.data.areaList);
                  t.data.areaList = n;
                  e.setState({
                    areas: n,
                  });
                }

                var i = [];
                if (t.data.hasOwnProperty('multiMapData2') && '' != t.data.multiMapData2) i.push(t.data.multiMapData2);
                if (t.data.hasOwnProperty('multiMapData1') && '' != t.data.multiMapData1) i.push(t.data.multiMapData1);
                if (t.data.hasOwnProperty('multiMapData0') && '' != t.data.multiMapData0) i.push(t.data.multiMapData0);
                e.setState({
                  maps: i,
                });
                var o = {};
                if (t.data.hasOwnProperty('multiMapsInfo')) o = t.data.multiMapsInfo;
                e.setState({
                  mapInfo: o,
                });
                var s = t.data;
                e.setState({
                  subMode: s.subMode,
                  WorkModeNum: s.mode,
                  BatteryState: s.elecReal,
                  CleanAreas: s.cleanArea,
                  CleanRunTime: s.cleanTime,
                  getPropertiesData: t,
                  mapId: s.map && '' != s.map ? JSON.parse(s.map).data.mapId : -1,
                  Vol: s.vol,
                  LedSwitch: s.led,
                  dustFreq: s.dustFreq,
                  mop: s.mop,
                  map: s.hasOwnProperty('map') ? s.map : '',
                  UpdateMapProgress: s.UpdateMapProgress && '' != s.UpdateMapProgress ? JSON.parse(s.UpdateMapProgress) : null,
                });
                if (s.curPath) ReactNative.DeviceEventEmitter.emit('curPath', s.curPath);
                if (s.hisPath) ReactNative.DeviceEventEmitter.emit('hisPath', s.hisPath);

                if (!('pause' != s.mode && 'sweep' != s.mode)) {
                  console.log('\u5982\u679c\u662f\u6682\u505c\u72b6\u6001\u67e5\u8be2\u4e00\u4e0b\u5b50\u72b6\u6001' + e.state.subMode, args);
                  if (undefined == args) e.subModeVal();
                }

                if (e.state.isGetForbidMode) {
                  e.isFrobidMode(s.forbidMode);
                  e.setState({
                    isGetForbidMode: false,
                  });
                }

                ReactNative.DeviceEventEmitter.emit('resetMap', false);
                ReactNative.DeviceEventEmitter.emit('mapTypeData', 0);
                e.workModeVal(s.mode);
                e.slfunIcon(s.waterLv);
                e.xlfunIcon(s.windLv);
              } else
                29004 == t.code
                  ? (module1096.default.info(module594.default.t('bindingStateChange'), 3, undefined, false),
                    setTimeout(function () {
                      e.props.navigation.dispatch(module421.StackActions.popToTop());
                    }, 1e3))
                  : t.code;
            },
            function (t, a) {
              module1096.default.info(module594.default.t('canNotGetData'), 3, undefined, false);
              setTimeout(function () {
                try {
                  e.props.navigation.goBack();
                } catch (e) {}
              }, 500);
            }
          );
          module1145.default.addSingleListener();
        },
      },
      {
        key: 'dealWithPartitionData',
        value: function (e) {
          if (e && e.autoAreaValue)
            for (var t = 0; t < e.autoAreaValue.length; t++) {
              e.autoAreaValue[t].showTag;
            }
          return e;
        },
      },
      {
        key: 'isFrobidMode',
        value: function (e) {
          if (1 == e) module1096.default.info(module594.default.t('T1617020335'), 1, undefined, false);
        },
      },
      {
        key: 'cleanNavId',
        value: function (e) {
          var t = this;

          if (3 == this.state.status) {
            module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
            return false;
          }

          if (
            !this.state.isMore &&
            (console.log('=====\u5f53\u524d\u6e05\u626b\u6a21\u5f0f= ' + e, '\u539f\u672c\u7684\u6e05\u626b\u6a21\u5f0f navIndex ===' + this.state.navIndex),
            this.state.navIndex !== e)
          ) {
            if (0 == Number(e)) {
              module1145.default.hasAutoArea().then(function (a) {
                if (200 != a) {
                  module1096.default.info(module594.default.t('MapWithoutPartition'), 1, undefined, false);
                  return false;
                }

                t.isTopNavSubMode(e);
              });
              return false;
            }

            if (2 == Number(e) && !this.isNormalFun(e)) return false;
            this.isTopNavSubMode(e);
          }
        },
      },
      {
        key: 'isNormalFun',
        value: function (e) {
          var t = this,
            a = false;

          if (
            (console.log('=======\u533a\u57df\u6e05\u626b\u6a21\u5f0f\u4e0b\u662f\u5426\u6709\u5206\u533a\u6570\u636e = ' + JSON.stringify(this.state.areas)), this.state.areas)
          ) {
            if (this.state.areas.value)
              for (var n = 0; n < this.state.areas.value.length; n++) ('normal' != this.state.areas.value[n].active && 'depth' != this.state.areas.value[n].active) || (a = true);
            if (!('' != this.state.areas.value && a))
              module1117.default.alert(module594.default.t('Tips'), module594.default.t('noZone'), [
                {
                  text: module594.default.t('cancel'),
                  style: 'cancel',
                },
                {
                  text: module594.default.t('btnConfirm1'),
                  onPress: function () {
                    t.setState({
                      navIndex: e,
                      getPropertiesData: null,
                      isAddArea: true,
                    });
                    module1145.default.pauseSweep(t.state.iotId, true);
                    var a = {
                      cleanIndexEdit: true,
                      mapName: 'restrictedArea',
                      iotId: t.state.iotId,
                      editType: 1,
                      nickname: t.state.nickname,
                      AppFunction: t.state.AppFunction,
                    };
                    ReactNative.DeviceEventEmitter.emit('isMoreMap', a);
                  },
                },
              ]);
            return a;
          }
        },
      },
      {
        key: 'isTopNavSubMode',
        value: function (e) {
          var t = this;
          console.log('====================\u5f53\u524d\u70b9\u51fb\u6a21\u5f0f\u4e0b\u662f\u5426\u6709\u6e05\u626b\u4efb\u52a1 subMode = ' + this.state.subMode);
          if ('null' == this.state.subMode || undefined == this.state.subMode) this.navIsShowMap(e);
          else
            module1117.default.alert(module594.default.t('haveCleaningTask'), module594.default.t('isBtnhaveCleaningTask'), [
              {
                text: module594.default.t('cancel'),
                style: 'cancel',
              },
              {
                text: module594.default.t('btnConfirm1'),
                onPress: function () {
                  t.navIsShowMap(e);
                  if (!('sweep' != t.state.WorkModeNum && 'backcharge' != t.state.WorkModeNum))
                    module1145.default.pauseSweep(t.state.iotId, true).then(
                      function (e) {},
                      function (e, t) {
                        if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                          var a = 0,
                            n = '';
                          Object.keys(e).map(function (t) {
                            if ('code' == t) {
                              var i = e[t];
                              a = i;
                            }

                            if ('message' == t) n = e[t];
                          });
                          if (1101354 == a) module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
                          else module1096.default.info(n, 1, undefined, false);
                        }
                      }
                    );
                },
              },
            ]);
        },
      },
      {
        key: 'navIsShowMap',
        value: function (e) {
          var a = this,
            n = '';

          switch (Number(e)) {
            case 0:
              n = 4;
              this.setState({
                sweepArea: 0,
                tagNum: 0,
              });
              ReactNative.DeviceEventEmitter.emit('mapTypeData', n);
              ReactNative.DeviceEventEmitter.emit('mapAreas', []);
              ReactNative.DeviceEventEmitter.emit('autoAreas', this.state.areas && this.state.areas.autoAreaValue ? this.state.areas.autoAreaValue : []);
              ReactNative.DeviceEventEmitter.emit('resetMap', false);
              break;

            case 1:
              n = 0;
              ReactNative.DeviceEventEmitter.emit('mapTypeData', n);
              ReactNative.DeviceEventEmitter.emit('mapAreas', []);
              ReactNative.DeviceEventEmitter.emit('autoAreas', []);
              ReactNative.DeviceEventEmitter.emit('resetMap', true);
              break;

            case 2:
              n = 2;
              console.log('\u5f53\u524d\u6a21\u5f0f:\u533a\u57df\u6e05\u626b   \u6e05\u626b\u7c7b\u578b:' + JSON.stringify(n), '====' + JSON.stringify(this.state.areas.value));
              ReactNative.DeviceEventEmitter.emit('mapTypeData', n);
              ReactNative.DeviceEventEmitter.emit('autoAreas', []);
              ReactNative.DeviceEventEmitter.emit('tagIds', this.state.tagIds);
              ReactNative.DeviceEventEmitter.emit('mapAreas', this.state.areas.value);
              ReactNative.DeviceEventEmitter.emit('resetMap', true);
              break;

            case 3:
              n = 1;
              ReactNative.DeviceEventEmitter.emit('resetMap', true);
              ReactNative.DeviceEventEmitter.emit('mapTypeData', n);
          }

          this.setState(
            {
              navIndex: e,
              mapTypeNum: n,
              cleanIconIndex: null,
              cleanIconR: require('./1351'),
              cleanIconL: require('./1350'),
            },
            function () {
              console.log('\u6839\u636e\u5bfc\u822a\u7684\u7c7b\u578b' + a.state.navIndex, '====\u5bf9\u5e94\u6e05\u626b\u6a21\u5f0f' + a.state.mapTypeNum);
            }
          );
        },
      },
      {
        key: 'MapRLicon',
        value: function (e) {
          if (3 == this.state.status && 0 != e) {
            module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
            return false;
          }

          if (this.state.cleanIconIndex == e)
            this.setState({
              cleanIconIndex: 0,
              cleanRliType: null,
              isContentNav: false,
              cleanIconR: require('./1351'),
              cleanIconL: require('./1350'),
            });
          else
            this.setState({
              cleanIconIndex: e,
              isContentNav: true,
              cleanIconR: require(1 == e ? s[31] : s[46]),
              cleanIconL: require(2 == e ? s[30] : s[47]),
            });
        },
      },
      {
        key: 'slfun',
        value: function (e) {
          module1145.default.setWaterLv(this.state.iotId, Number(e));
          this.cleanRliTypeLi(null);
          this.slfunIcon(e);
        },
      },
      {
        key: 'slfunIcon',
        value: function (e) {
          switch (
            (this.setState({
              slNum: e,
            }),
            Number(e))
          ) {
            case 0:
              this.setState({
                slListImg: require('./1365'),
              });
              break;

            case 1:
              this.setState({
                slListImg: require('./1366'),
              });
              break;

            case 2:
              this.setState({
                slListImg: require('./1367'),
              });
              break;

            case 3:
              this.setState({
                slListImg: require('./1368'),
              });
          }
        },
      },
      {
        key: 'xlfun',
        value: function (e) {
          module1145.default.setWindLv(this.state.iotId, Number(e));
          this.cleanRliTypeLi(null);
          this.xlfunIcon(e);
        },
      },
      {
        key: 'xlfunIcon',
        value: function (e) {
          switch (
            (this.setState({
              xlNum: e,
            }),
            Number(e))
          ) {
            case 0:
              this.setState({
                xlListImg: require('./1369'),
              });
              break;

            case 1:
              this.setState({
                xlListImg: require('./1370'),
              });
              break;

            case 2:
              this.setState({
                xlListImg: require('./1371'),
              });
              break;

            case 3:
              this.setState({
                xlListImg: require('./1372'),
              });
          }
        },
      },
      {
        key: 'cleanRliTypeLi',
        value: function (e) {
          if (1 == e && 0 == this.state.mop) {
            module1096.default.info(module594.default.t('waterTank'), 1, undefined, false);
            return false;
          }

          this.setState({
            cleanRliType: e,
          });
        },
      },
      {
        key: 'stopSubmitTimer',
        value: function () {
          if (0 !== this.state.submitcount)
            this.setState({
              submitcount: 0,
            });
          if (this.timer) clearTimeout(this.timer);
        },
      },
      {
        key: 'checkTypeNum',
        value: function () {
          var e = this;

          if (
            (console.log('\u5f53\u524d\u6709\u6e05\u626b\u6a21\u5f0f' + Object.prototype.toString.call(this.state.mapTypeNum), this.state.mapTypeNum),
            null != this.state.mapTypeNum && this.state.mapTypeNum >= 0)
          ) {
            var t = this.state.mapTypeNum,
              a = this.state.iotId,
              n = this.state.mapId,
              i = null;
            if (this.connectInterval) clearInterval(this.connectInterval);
            var o = 0;
            this.connectInterval = setInterval(function () {
              if (o++ >= 3) {
                if (e.connectInterval) clearInterval(e.connectInterval);
                o = null;
                if (i) i(false);
              }
            }, 1e3);
            return new Promise(function (e, o) {
              switch (
                (console.log(
                  '==========//TODO:1\u3001\u9700\u8981\u6dfb\u52a0\u8d85\u65f6\u5904\u7406  3\u79d2\u540e\u6ca1\u6709\u56de\u8c03\u5219\u76f4\u63a5\u8d70\u9519\u8bef\u6d41\u7a0b=========================='
                ),
                (i = o),
                Number(t))
              ) {
                case 0:
                  module1145.default.startTotalSweep(a, n, true).then(
                    function (t) {
                      e(true);
                    },
                    function (e, t) {
                      if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                        var a = 0,
                          n = '';
                        o(e);
                        Object.keys(e).map(function (t) {
                          if ('code' == t) {
                            var i = e[t];
                            a = i;
                          }

                          if ('message' == t) n = e[t];
                        });
                        if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
                      }
                    }
                  );
                  break;

                case 1:
                  module1145.default.startPointSweep(a, n).then(
                    function (t) {
                      e(true);
                    },
                    function (e, t) {
                      if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                        var a = 0,
                          n = '';
                        Object.keys(e).map(function (t) {
                          if ('code' == t) {
                            var i = e[t];
                            a = i;
                          }

                          if ('message' == t) n = e[t];
                        });
                        o(e);
                        if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
                      }
                    }
                  );
                  break;

                case 2:
                  module1145.default.startAreaSweep(a, n).then(
                    function (t) {
                      e(true);
                    },
                    function (e, t) {
                      if (((e = 'string' == typeof e ? JSON.parse(e) : e), o(e), '[object Error]' == Object.prototype.toString.call(e))) {
                        var a = 0,
                          n = '';
                        Object.keys(e).map(function (t) {
                          if ('code' == t) {
                            var i = e[t];
                            a = i;
                          }

                          if ('message' == t) n = e[t];
                        });
                        if (1101354 == a) module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
                        else module1096.default.info(n, 1, undefined, false);
                      }
                    }
                  );
                  break;

                case 4:
                  module1145.default.startSmartAreaSweep(a, n).then(
                    function (t) {
                      e(true);
                    },
                    function (e, t) {
                      if (((e = 'string' == typeof e ? JSON.parse(e) : e), o(e), '[object Error]' == Object.prototype.toString.call(e))) {
                        var a = 0,
                          n = '';
                        Object.keys(e).map(function (t) {
                          if ('code' == t) {
                            var i = e[t];
                            a = i;
                          }

                          if ('message' == t) n = e[t];
                        });
                        if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
                      }
                    }
                  );
              }
            });
          }

          new Promise(function (e, t) {
            e(false);
          });
        },
      },
      {
        key: 'requestServerP',
        value: function () {
          var e = this;
          module1145.default.resumeSweepService(this.state.iotId, true).then(
            function (t) {
              if (t && t.data && 200 == t.data.code) {
                var a = JSON.parse(t.data.data);
                if (a && 1 == a.ExeResult)
                  module1145.default.resumeSweepService(e.state.iotId, false).then(function (e) {
                    console.log('\u56de\u5145\u6682\u505c\u56de\u5230\u6e05\u626b1111result' + JSON.stringify(e));
                  });
              }
            },
            function (e, t) {
              if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                var a = 0,
                  n = '';
                Object.keys(e).map(function (t) {
                  if ('code' == t) {
                    var i = e[t];
                    a = i;
                  }

                  if ('message' == t) n = e[t];
                });
                if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
              }
            }
          );
        },
      },
      {
        key: 'requestServer',
        value: function () {
          if ('null' == this.state.subMode || null == this.state.subMode)
            module1145.default.startTotalSweep(this.state.iotId, this.state.mapId, true).then(
              function (e) {},
              function (e, t) {
                if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                  var a = 0,
                    n = '';
                  Object.keys(e).map(function (t) {
                    if ('code' == t) {
                      var i = e[t];
                      a = i;
                    }

                    if ('message' == t) n = e[t];
                  });
                  if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
                }
              }
            );
          else
            module1145.default.continueSweep(this.state.iotId, true).then(
              function (e) {
                ReactNative.DeviceEventEmitter.emit('indexList');
              },
              function (e, t) {
                if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                  var a = 0,
                    n = '';
                  Object.keys(e).map(function (t) {
                    if ('code' == t) {
                      var i = e[t];
                      a = i;
                    }

                    if ('message' == t) n = e[t];
                  });
                  if (1101354 == a) module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
                  else module1096.default.info(n, 1, undefined, false);
                }
              }
            );
        },
      },
      {
        key: 'pausePlayback',
        value: function () {
          var e = this;
          console.log(
            '================== \u5f00\u59cb/\u6682\u505c === navIndex = ' + this.state.navIndex,
            ', mapTypeNum = ' + this.state.mapTypeNum,
            ', WorkModeNum  = ' + this.state.WorkModeNum,
            ', subMode = ' + this.state.subMode
          );
          var t = this.state.WorkModeNum;

          if (3 == this.state.status) {
            module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
            return false;
          }

          if (
            (0 == this.state.navIndex || 4 == this.state.mapTypeNum) &&
            'sweep' != t &&
            'backcharge' != t &&
            (console.log('=====================111 this.state.tagNum = ' + this.state.tagNum, 'sweepArea:' + this.state.sweepArea),
            console.log('\u6e05\u626b\u524d\u5224\u65ad\u662f\u5426\u6709\u5206\u533a\u6570\u636e--------\u300b\u300b\u300b===' + JSON.stringify(this.state.areas.autoAreaValue)),
            console.log('\u5206\u533a\u6570\u636e--' + JSON.stringify(this.state.segmentTagIds), '========sweepArea:===========' + this.state.sweepArea),
            this.state.areas && this.state.areas.autoAreaValue && this.state.areas.autoAreaValue.length > 0 && 0 == this.state.sweepArea && 0 == this.state.tagNum)
          ) {
            module1096.default.info(module594.default.t('chooseToCleanThePartition'), 1, undefined, false);
            return false;
          }

          if (
            2 == this.state.navIndex &&
            'sweep' != t &&
            'backcharge' != t &&
            !this.isNormalFun(this.state.navIndex) &&
            'android' == ReactNative.Platform.OS &&
            this.state.tagIds &&
            0 == this.state.tagIds.length
          ) {
            module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
            return false;
          }

          if ('sweep' == t || 'backcharge' == t)
            module1145.default.pauseSweep(this.state.iotId, true).then(
              function (e) {
                ReactNative.DeviceEventEmitter.emit('indexList');
              },
              function (e, t) {
                if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                  var a = 0,
                    n = '';
                  Object.keys(e).map(function (t) {
                    if ('code' == t) {
                      var i = e[t];
                      a = i;
                    }

                    if ('message' == t) n = e[t];
                  });
                  if (1101354 == a) module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
                  else module1096.default.info(n, 1, undefined, false);
                }
              }
            );
          else if (this.state.mapTypeNum || 0 == this.state.mapTypeNum)
            switch (Number(this.state.mapTypeNum)) {
              case 0:
                console.log('-------------------------\u5f00\u59cb\u5168\u56fe\u626b-----------------------');
                module1145.default.startTotalSweep(this.state.iotId, this.state.mapId, true).then(
                  function (t) {
                    e.setState({
                      mapTypeNum: null,
                    });
                  },
                  function (e, t) {
                    if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                      var a = 0,
                        n = '';
                      Object.keys(e).map(function (t) {
                        if ('code' == t) {
                          var i = e[t];
                          a = i;
                        }

                        if ('message' == t) n = e[t];
                      });
                      if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
                    }
                  }
                );
                this.setState({
                  mapTypeNum: null,
                });
                break;

              case 1:
                console.log('-------------------------\u5f00\u59cb\u5b9a\u70b9\u626b-----------------------');
                module1145.default.startPointSweep(this.state.iotId, this.state.mapId).then(
                  function (t) {
                    e.setState({
                      mapTypeNum: null,
                    });
                  },
                  function (e, t) {
                    if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                      var a = 0,
                        n = '';
                      Object.keys(e).map(function (t) {
                        if ('code' == t) {
                          var i = e[t];
                          a = i;
                        }

                        if ('message' == t) n = e[t];
                      });
                      if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
                    }
                  }
                );
                break;

              case 2:
                console.log('-------------------------\u5f00\u59cb\u533a\u57df\u626b-----------------------');
                module1145.default.startAreaSweep(this.state.iotId, this.state.mapId).then(
                  function (t) {
                    e.setState({
                      mapTypeNum: null,
                    });
                  },
                  function (e, t) {
                    if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                      var a = 0,
                        n = '';
                      Object.keys(e).map(function (t) {
                        if ('code' == t) {
                          var i = e[t];
                          a = i;
                        }

                        if ('message' == t) n = e[t];
                      });
                      if (1101354 == a) module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
                      else module1096.default.info(n, 1, undefined, false);
                    }
                  }
                );
                break;

              case 4:
                console.log('------------------\u8bf7\u6c42-------\u5f00\u59cb\u5206\u533a\u626b-----------------------');
                module1145.default.startSmartAreaSweep(this.state.iotId, this.state.mapId).then(function (t) {
                  e.setState({
                    mapTypeNum: null,
                    localRecordSeepTaskTag: 'smart_area',
                  });
                });
            }
          else {
            if ('area' == this.state.subMode)
              console.log('====\u8bf7\u6ce8\u610f\u53ef\u80fd\u4f1a\u51fa\u73b0GO\u6309\u94ae\u70b9\u51fb\u65e0\u4efb\u4f55\u6548\u679c\u7684\u60c5\u51b5======mode = ' + t);
            if ('findchargerpause' == t)
              module1145.default.resumeSweepService(this.state.iotId, true).then(
                function (t) {
                  if (t && t.data && 200 == t.data.code) {
                    var a = JSON.parse(t.data.data);
                    if (a && 1 == a.ExeResult)
                      module1145.default.resumeSweepService(e.state.iotId, false).then(function (e) {
                        console.log('\u56de\u5145\u6682\u505c\u56de\u5230\u6e05\u626b44444result' + JSON.stringify(e));
                      });
                  }
                },
                function (e, t) {
                  if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                    var a = 0,
                      n = '';
                    Object.keys(e).map(function (t) {
                      if ('code' == t) {
                        var i = e[t];
                        a = i;
                      }

                      if ('message' == t) n = e[t];
                    });
                    if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
                  }
                }
              );
            else if (!('pause' != t && 'fault' != t && 'dormant' !== t && 'charge' != t && 'fullcharge' != t && 'rfctrl' != t && 'idle' != t))
              'null' == this.state.subMode || null == this.state.subMode
                ? (console.log('-------------------------\u5f00\u59cb\u9ed8\u8ba4\u5168\u5c40\u626b-----------------------'),
                  module1145.default.startTotalSweep(this.state.iotId, this.state.mapId, true).then(
                    function (e) {
                      if (e && e.data) JSON.stringify(e.data);
                    },
                    function (e, t) {
                      if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                        var a = 0,
                          n = '';
                        Object.keys(e).map(function (t) {
                          if ('code' == t) {
                            var i = e[t];
                            a = i;
                          }

                          if ('message' == t) n = e[t];
                        });
                        if (!(1101354 == a)) module1096.default.info(n, 1, undefined, false);
                      }
                    }
                  ))
                : (console.log('-------------------------\u7ee7\u7eed\u6e05\u626b-----------------------'),
                  module1145.default.continueSweep(this.state.iotId, true).then(
                    function (e) {},
                    function (e, t) {
                      if (((e = 'string' == typeof e ? JSON.parse(e) : e), '[object Error]' == Object.prototype.toString.call(e))) {
                        var a = 0,
                          n = '';
                        Object.keys(e).map(function (t) {
                          if ('code' == t) {
                            var i = e[t];
                            a = i;
                          }

                          if ('message' == t) n = e[t];
                        });
                        if (1101354 == a) module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
                        else module1096.default.info(n, 1, undefined, false);
                      }
                    }
                  ));
          }
        },
      },
      {
        key: 'editMap',
        value: function (e) {
          var a = this;
          this.setState(
            {
              getPropertiesData: null,
              cleanIconIndex: null,
              cleanIconL: require('./1350'),
              isAddArea: true,
            },
            function () {
              var t = null;
              t =
                2 == e
                  ? {
                      cleanIndexEdit: true,
                      mapName: 'restrictedArea',
                      iotId: a.state.iotId,
                      editType: 1,
                      nickname: a.state.nickname,
                      AppFunction: a.state.AppFunction,
                    }
                  : 0 == e
                  ? {
                      cleanIndexEdit: true,
                      mapName: 'restrictedArea',
                      iotId: a.state.iotId,
                      editType: e,
                      nickname: a.state.nickname,
                      AppFunction: a.state.AppFunction,
                    }
                  : {
                      cleanIndexEdit: true,
                      mapName: 'partitionMap',
                      iotId: a.state.iotId,
                      editType: 1,
                      nickname: a.state.nickname,
                      AppFunction: a.state.AppFunction,
                    };
              ReactNative.DeviceEventEmitter.emit('isMoreMap', t);
            }
          );
        },
      },
      {
        key: 'moreBtn',
        value: function (e) {
          var t = this;

          switch (
            (this.setState({
              isMore: false,
            }),
            Number(e))
          ) {
            case 0:
              this.setState({
                isAlert: true,
              });
              break;

            case 1:
              if (3 == this.state.status) {
                module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
                return false;
              }

              module1145.default.findRobot(this.state.iotId);
              break;

            case 2:
              module593.default.delete('appointmentTime').then(function (e) {
                t.props.navigation.navigate('reservation', {
                  iotId: t.state.iotId,
                  slNum: t.state.slNum,
                  xlNum: t.state.xlNum,
                  nickname: t.state.nickname,
                  AppFunction: t.state.AppFunction,
                });
              });
              break;

            case 3:
              this.props.navigation.navigate('more', {
                iotId: this.state.iotId,
                nickname: this.state.nickname,
                deviceName: this.state.deviceName,
                WorkModeNum: this.state.WorkModeNum,
                subMode: this.state.subMode,
                productId: this.state.productId,
                firmwareVersion: this.state.firmwareVersion,
                dustFreq: this.state.dustFreq,
                userId: this.state.userId,
                owned: this.state.owned,
                mapId: this.state.mapId,
                map: this.state.map,
                UpdateMapProgress: this.state.UpdateMapProgress,
                AppFunction: this.state.AppFunction,
              });
          }
        },
      },
      {
        key: 'continueCleanBtn',
        value: function () {
          if (3 == this.state.status) {
            module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
            return false;
          }

          if (this.state.bottomBtnIcon) module1145.default.pauseSweep(this.state.iotId, true);
          else this.isSubMode();
        },
      },
      {
        key: 'isSubMode',
        value: function () {
          var e = this;
          if (this.state.subMode)
            module1117.default.alert(module594.default.t('Tips'), module594.default.t('cancelTask'), [
              {
                text: module594.default.t('cancel'),
                style: 'cancel',
              },
              {
                text: module594.default.t('btnConfirm1'),
                onPress: function () {
                  e.setState({
                    navIndex: null,
                  });
                  module1145.default.goCharge(e.state.iotId);
                },
              },
            ]);
          else {
            this.setState({
              navIndex: null,
            });
            module1145.default.goCharge(this.state.iotId);
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var e = this,
            a = this.props.navigation.navigate,
            n = new module1148.default.DataSource({
              rowHasChanged: function (e, t) {
                return e !== t;
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
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              backgroundColor: '#fff',
              barStyle: 'dark-content',
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: [R.cleanIndexBox],
              },
              React.default.createElement(ReactNative.View, {
                style: R.cleanIndexTop,
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: R.cleanIndexContent,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      flex: 1,
                    },
                  },
                  null != this.state.getPropertiesData && 'cleanIndex' == this.props.route.name
                    ? React.default.createElement(module1342.default, {
                        ref: 'cleanIndex',
                        getPropertiesData: this.state.getPropertiesData,
                        status: false,
                        areaListFun: this._areaListFun,
                        tagNumFun: this._tagNumFun,
                        sweepArea: this._sweepArea,
                        AppFunction: this.state.AppFunction,
                        showPath: true,
                      })
                    : null
                )
              ),
              React.default.createElement(ReactNative.View, {
                style: R.cleanIndexBottom,
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: R.cleanTop,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: R.cleanTopBpx,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: R.cleanTopContent,
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: function () {
                          try {
                            e.props.navigation.goBack();
                          } catch (e) {}
                        },
                        hitSlop: {
                          left: 30,
                          right: 30,
                          top: 30,
                          bottom: 30,
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1256'),
                        style: [R.cleanIcon],
                      })
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: R.cleanTitle,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: R.cleanTitleContent,
                        },
                        this.state.nickname
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: R.cleanTitleStatus,
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: this.state.robotTypeIcon,
                          resizeMode: 'contain',
                          style: R.clearImg,
                        }),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: R.cleanTitleStatusTxt,
                          },
                          this.state.robotTxt
                        )
                      )
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: function () {
                          a('cleanNew', {
                            iotId: e.state.iotId,
                          });
                        },
                        hitSlop: {
                          left: 30,
                          right: 30,
                          top: 30,
                          bottom: 30,
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1373'),
                        style: [R.cleanIcon, R.cleanLeftIcon],
                      })
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        hitSlop: {
                          left: 30,
                          right: 30,
                          top: 30,
                          bottom: 30,
                        },
                        onPress: function () {
                          e.MapRLicon(0);
                          e.setState({
                            isMore: (e.state.isMore = !e.state.isMore),
                          });
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1374'),
                        style: R.cleanIcon,
                      })
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: R.cleanTopNav,
                    },
                    React.default.createElement(
                      ReactNative.ScrollView,
                      {
                        style: R.scrollView,
                        horizontal: true,
                        keyboardShouldPersistTaps: 'handled',
                        showsHorizontalScrollIndicator: false,
                      },
                      this.state.navData.map(function (t, a) {
                        return React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            key: a,
                            style: [R.cleanIndexNavLi, e.state.navIndex == a ? R.cleanIndexNavActive : ''],
                            onPress: function () {
                              e.cleanNavId(t.id);
                            },
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: e.state.navIndex == a ? R.cleanIndexNavActiveTxt : R.cleanIndexNavTxt,
                            },
                            t.name
                          )
                        );
                      })
                    )
                  ),
                  this.state.isMore
                    ? React.default.createElement(
                        ReactNative.View,
                        {
                          style: R.cleanTopMore,
                        },
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: R.cleanTopMoreBack,
                          },
                          React.default.createElement(module1148.default, {
                            dataSource: n.cloneWithRows(this.state.cleanTopMoreData),
                            contentContainerStyle: R.cleanTopMoreLiContent,
                            enableEmptySections: true,
                            renderRow: function (t, a, n) {
                              return React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  style: R.cleanTopMoreLi,
                                  onPress: function () {
                                    e.moreBtn(n);
                                  },
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: t.MoreIcon,
                                  resizeMode: 'contain',
                                  style: R.cleanTopMoreLiIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: R.cleanTopMoreTitle,
                                  },
                                  t.name
                                )
                              );
                            },
                          }),
                          React.default.createElement(ReactNative.View, {
                            style: R.areaChoice,
                          })
                        )
                      )
                    : null
                )
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  ref: function (t) {
                    return (e.myView = t);
                  },
                  style: [R.cleanMapContentIcon, R.cleanMapContentIconL, 1 == this.state.cleanIconIndex ? R.cleanMapContentAction : ''],
                  onPress: function () {
                    e.MapRLicon(1);
                    e.setState({
                      isMore: false,
                    });
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [R.cleanMapContentIconImgBack, 1 == this.state.cleanIconIndex ? R.cleanMapContentAction : ''],
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.cleanIconL,
                    style: R.cleanMapContentIconImg,
                  })
                )
              ),
              1 == this.state.waterSpeedRegulation || 1 == this.state.fanControl
                ? React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [R.cleanMapContentIcon, R.cleanMapContentIconR, 2 == this.state.cleanIconIndex ? R.cleanMapContentAction : ''],
                      onPress: function () {
                        e.MapRLicon(2);
                        e.setState({
                          isMore: false,
                        });
                      },
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: this.state.cleanIconR,
                      style: R.cleanMapContentIconImg,
                    })
                  )
                : null,
              React.default.createElement(
                ReactNative.View,
                {
                  style: [R.cleanBottomConetnt],
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [R.cleanBottom],
                  },
                  React.default.createElement(ReactNative.View, {
                    style: [R.cleanBottomLi],
                  }),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: R.cleanBottomLi,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: R.cleanBottomStatus,
                      },
                      this.state.BatteryState,
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: R.cleanBottomUnit,
                        },
                        '%'
                      ),
                      ' '
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: R.cleanBottomTxt,
                      },
                      module594.default.t('remainingBattery')
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: R.cleanBottomLi,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: R.cleanBottomStatus,
                      },
                      parseInt(this.state.CleanRunTime / 60),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: R.cleanBottomUnit,
                        },
                        'min'
                      ),
                      ' '
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: R.cleanBottomTxt,
                      },
                      module594.default.t('cleaningTime')
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: R.cleanBottomLi,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: R.cleanBottomStatus,
                      },
                      this.state.CleanAreas,
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: R.cleanBottomUnit,
                        },
                        'm\xb2'
                      ),
                      ' '
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: R.cleanBottomTxt,
                      },
                      module594.default.t('cleaningArea')
                    )
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    {
                      height: 90,
                      bottom: 30,
                      left: 10,
                      position: 'absolute',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: [
                      R.cleanzImg,
                      {
                        width: module588.default.setSpText(80) + 50,
                        height: module588.default.setSpText(80) + 15,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      },
                    ],
                    disabled: this.state.waiting,
                    activeOpacity: 0.7,
                    hitSlop: {
                      left: 30,
                      right: 30,
                      top: 30,
                      bottom: 0,
                    },
                    onPress: function () {
                      module1110.default(function () {
                        e.setState({
                          isMore: false,
                        });
                        e.pausePlayback();
                      });
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.cleanzGoImg,
                    style: {
                      width: module588.default.setSpText(80),
                      height: module588.default.setSpText(80),
                    },
                  })
                ),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: {
                      alignItems: 'center',
                      width: module588.default.setSpText(80) + 50,
                    },
                    onPress: function () {
                      return module1110.default(function () {
                        e.setState({
                          isMore: false,
                        });
                        e.continueCleanBtn();
                      });
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.bottomBtnIcon ? require('./1376') : require('./1375'),
                    resizeMode: 'contain',
                    style: {
                      width: module588.default.setSpText(64),
                      height: module588.default.setSpText(32),
                    },
                  })
                )
              ),
              this.state.isAlert
                ? React.default.createElement(module1147.default, {
                    isShow: this.state.isAlert,
                    isType: this.state.alertType,
                    isData: {
                      iotId: this.state.iotId,
                      Vol: this.state.Vol,
                      LedSwitch: this.state.LedSwitch,
                    },
                    onPick: function () {
                      e.setState({
                        isAlert: false,
                      });
                    },
                  })
                : null
            ),
            this.state.isContentNav
              ? React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: R.inNav,
                    onPress: function () {
                      e.MapRLicon(e.state.cleanIconIndex);
                    },
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: R.inNavBox,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          R.inNavBoxLi,
                          {
                            top: this.state.bottomNavTop ? this.state.bottomNavTop : 0,
                          },
                        ],
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: R.inNavBoxLiBox,
                        },
                        1 == this.state.cleanIconIndex
                          ? React.default.createElement(
                              ReactNative.View,
                              {
                                style: [R.cleanMapBack, R.fjBack],
                              },
                              React.default.createElement(
                                ReactNative.View,
                                {
                                  style: {
                                    position: 'relative',
                                  },
                                },
                                0 == this.state.navIndex
                                  ? React.default.createElement(
                                      ReactNative.TouchableOpacity,
                                      {
                                        style: [R.IconLiContent],
                                        onPress: function () {
                                          if (2 == e.state.navIndex) e.editMap(2);
                                          else e.editMap(1);
                                        },
                                      },
                                      React.default.createElement(ReactNative.Image, {
                                        source: require('./1377'),
                                        resizeMode: 'stretch',
                                        style: [R.IconLiContentIcon, R.IconLiContentIconL],
                                      }),
                                      React.default.createElement(
                                        ReactNative.Text,
                                        {
                                          style: R.zTitle,
                                        },
                                        0 == this.state.navIndex ? module594.default.t('adjustPartition') : module594.default.t('adjustArea')
                                      )
                                    )
                                  : null,
                                2 == this.state.navIndex
                                  ? React.default.createElement(
                                      ReactNative.TouchableOpacity,
                                      {
                                        style: [R.IconLiContent],
                                        onPress: function () {
                                          e.editMap(2);
                                        },
                                      },
                                      React.default.createElement(ReactNative.Image, {
                                        source: require('./1378'),
                                        resizeMode: 'stretch',
                                        style: [R.IconLiContentIcon, R.IconLiContentIconL],
                                      }),
                                      React.default.createElement(
                                        ReactNative.Text,
                                        {
                                          style: R.zTitle,
                                        },
                                        module594.default.t('adjustArea')
                                      )
                                    )
                                  : null,
                                React.default.createElement(
                                  ReactNative.TouchableOpacity,
                                  {
                                    style: [
                                      R.IconLiContent,
                                      {
                                        borderBottomColor: '#fff',
                                      },
                                    ],
                                    onPress: function () {
                                      e.editMap(0);
                                    },
                                  },
                                  React.default.createElement(ReactNative.Image, {
                                    source: require('./1362'),
                                    resizeMode: 'stretch',
                                    style: [R.IconLiContentIcon, R.IconLiContentIconL],
                                  }),
                                  React.default.createElement(
                                    ReactNative.Text,
                                    {
                                      style: R.zTitle,
                                    },
                                    module594.default.t('restrictedArea')
                                  )
                                ),
                                React.default.createElement(ReactNative.View, {
                                  style: R.cleanMapChoice,
                                })
                              )
                            )
                          : null,
                        2 == this.state.cleanIconIndex
                          ? React.default.createElement(
                              ReactNative.View,
                              {
                                style: [R.cleanMapBack, R.sxLback],
                              },
                              React.default.createElement(
                                ReactNative.View,
                                {
                                  style: {
                                    position: 'relative',
                                  },
                                },
                                1 == this.state.waterSpeedRegulation
                                  ? React.default.createElement(
                                      ReactNative.View,
                                      {
                                        style: R.sxLbackLi,
                                      },
                                      React.default.createElement(
                                        ReactNative.View,
                                        {
                                          style: R.sxLbackLiChild,
                                        },
                                        1 == this.state.cleanRliType
                                          ? React.default.createElement(module1148.default, {
                                              dataSource: n.cloneWithRows(this.state.slList),
                                              contentContainerStyle: R.cleanRlistContent,
                                              enableEmptySections: true,
                                              renderRow: function (t, a, n) {
                                                return React.default.createElement(
                                                  ReactNative.TouchableOpacity,
                                                  {
                                                    onPress: function () {
                                                      e.slfun(t.id);
                                                    },
                                                  },
                                                  e.state.slNum == n
                                                    ? React.default.createElement(ReactNative.Image, {
                                                        source: e.state.slListImg,
                                                        resizeMode: 'stretch',
                                                        style: R.cleanRlistIcon,
                                                      })
                                                    : React.default.createElement(ReactNative.Image, {
                                                        source: t.img,
                                                        resizeMode: 'stretch',
                                                        style: R.cleanRlistIcon,
                                                      })
                                                );
                                              },
                                            })
                                          : null
                                      ),
                                      React.default.createElement(
                                        ReactNative.View,
                                        {
                                          style: R.sxLbackLiChildR,
                                        },
                                        React.default.createElement(
                                          ReactNative.TouchableOpacity,
                                          {
                                            style: [R.IconLiContent],
                                            onPress: function () {
                                              e.cleanRliTypeLi(1);
                                            },
                                          },
                                          React.default.createElement(
                                            ReactNative.Text,
                                            {
                                              style: R.zTitle,
                                            },
                                            module594.default.t('hydraulic')
                                          ),
                                          React.default.createElement(ReactNative.Image, {
                                            source: this.state.slListImg,
                                            resizeMode: 'stretch',
                                            style: [R.IconLiContentIcon, R.IconLiContentIconR],
                                          })
                                        )
                                      )
                                    )
                                  : null,
                                1 == this.state.fanControl
                                  ? React.default.createElement(
                                      ReactNative.View,
                                      {
                                        style: R.sxLbackLi,
                                      },
                                      React.default.createElement(
                                        ReactNative.View,
                                        {
                                          style: R.sxLbackLiChild,
                                        },
                                        2 == this.state.cleanRliType
                                          ? React.default.createElement(module1148.default, {
                                              dataSource: n.cloneWithRows(this.state.xlList),
                                              contentContainerStyle: [R.cleanRlistContent],
                                              enableEmptySections: true,
                                              renderRow: function (t, a, n) {
                                                return React.default.createElement(
                                                  ReactNative.TouchableOpacity,
                                                  {
                                                    onPress: function () {
                                                      e.xlfun(t.id);
                                                    },
                                                  },
                                                  e.state.xlNum == n
                                                    ? React.default.createElement(ReactNative.Image, {
                                                        source: e.state.xlListImg,
                                                        resizeMode: 'stretch',
                                                        style: R.cleanRlistIcon,
                                                      })
                                                    : React.default.createElement(ReactNative.Image, {
                                                        source: t.img,
                                                        resizeMode: 'stretch',
                                                        style: R.cleanRlistIcon,
                                                      })
                                                );
                                              },
                                            })
                                          : null
                                      ),
                                      React.default.createElement(
                                        ReactNative.View,
                                        {
                                          style: R.sxLbackLiChildR,
                                        },
                                        React.default.createElement(
                                          ReactNative.TouchableOpacity,
                                          {
                                            style: [
                                              R.IconLiContent,
                                              {
                                                borderBottomColor: '#fff',
                                              },
                                            ],
                                            onPress: function () {
                                              e.cleanRliTypeLi(2);
                                            },
                                          },
                                          React.default.createElement(
                                            ReactNative.Text,
                                            {
                                              style: R.zTitle,
                                            },
                                            module594.default.t('suction')
                                          ),
                                          React.default.createElement(ReactNative.Image, {
                                            source: this.state.xlListImg,
                                            resizeMode: 'stretch',
                                            style: [R.IconLiContentIcon, R.IconLiContentIconR],
                                          })
                                        )
                                      )
                                    )
                                  : null,
                                React.default.createElement(ReactNative.View, {
                                  style: [
                                    R.cleanMapChoice,
                                    {
                                      right: module588.default.setSpText(10),
                                    },
                                  ],
                                })
                              )
                            )
                          : null
                      )
                    )
                  )
                )
              : null
          );
        },
      },
    ]);
    return o;
  })(React.default.Component);

exports.cleanIndex = module1362;
var R = ReactNative.StyleSheet.create({
    sxLbackLi: {
      flex: 1,
      flexDirection: 'row',
    },
    sxLbackLiChild: {
      flex: 1,
      alignItems: 'flex-end',
    },
    sxLbackLiChildR: {
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(10),
    },
    cleanTopNav: {
      paddingHorizontal: module588.default.setSpText(10),
    },
    inNav: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    inNavBox: {
      position: 'relative',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    inNavBoxLi: {
      position: 'absolute',
      width: '100%',
    },
    inNavBoxLiBox: {
      width: '100%',
      height: module588.default.setSpText(186),
    },
    cleanIndexBox: {
      flex: 1,
      position: 'relative',
      flexDirection: 'column',
    },
    cleanIndexTop: {
      height: module588.default.setSpText(100),
    },
    cleanIndexContent: {
      flex: 1,
    },
    cleanIndexBottom: {
      height: module588.default.setSpText(120),
    },
    cleanTop: {
      backgroundColor: '#fff',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    cleanTopBpx: {
      flex: 1,
      position: 'relative',
    },
    cleanTopContent: {
      flexDirection: 'row',
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    clearImg: {
      width: module588.default.setSpText(17),
      height: module588.default.setSpText(17),
    },
    cleanTitle: {
      flex: 1,
      marginLeft: module588.default.setSpText(11),
    },
    cleanTitleContent: {
      fontSize: module588.default.setSpText(16),
      color: '#11243D',
    },
    cleanTitleStatus: {
      flexDirection: 'row',
    },
    cleanTitleStatusTxt: {
      flex: 1,
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
      paddingLeft: module588.default.setSpText(5),
    },
    cleanLeftIcon: {
      marginRight: module588.default.setSpText(24),
    },
    cleanBottomConetnt: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      left: 0,
      backgroundColor: '#F5F6FA',
      paddingTop: module588.default.setSpText(40),
      paddingBottom: module588.default.setSpText(12),
      paddingHorizontal: module588.default.setSpText(12),
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanBottom: {
      height: module588.default.setSpText(86),
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(24),
      flexDirection: 'row',
    },
    cleanBottomLi: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanBottomStatus: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(28),
    },
    cleanBottomUnit: {
      fontSize: module588.default.setSpText(12),
    },
    cleanBottomTxt: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
    },
    cleanzImg: {
      marginTop: -50,
      width: module588.default.setSpText(80),
      height: module588.default.setSpText(80),
    },
    scrollView: {
      paddingBottom: module588.default.setSpText(10),
    },
    cleanIndexNavLi: {
      paddingHorizontal: module588.default.setSpText(20),
      paddingVertical: module588.default.setSpText(10),
      textAlign: 'center',
      fontSize: module588.default.setSpText(14),
      backgroundColor: '#F7F9FC',
      borderRadius: module588.default.setSpText(16),
      marginRight: module588.default.setSpText(10),
    },
    cleanIndexNavActive: {
      backgroundColor: '#0A72FA',
    },
    cleanIndexNavActiveTxt: {
      fontSize: module588.default.setSpText(17),
      color: '#fff',
    },
    cleanIndexNavTxt: {
      fontSize: module588.default.setSpText(17),
      color: '#213B5C',
    },
    cleanMapBack: {
      position: 'absolute',
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(6),
      paddingHorizontal: module588.default.setSpText(10),
      bottom: module588.default.setSpText(15),
    },
    sxLback: {
      right: module588.default.setSpText(10),
      width: '100%',
      backgroundColor: 'rgba(255,255,255,0)',
    },
    fjBack: {
      left: module588.default.setSpText(10),
    },
    cleanMapContentIcon: {
      position: 'absolute',
      width: module588.default.setSpText(40),
      height: module588.default.setSpText(40),
      borderRadius: module588.default.setSpText(40),
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: module588.default.setSpText(200),
      zIndex: 1,
    },
    cleanMapContentAction: {
      backgroundColor: '#213B5C',
    },
    cleanMapContentIconImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    cleanMapContentIconL: {
      left: module588.default.setSpText(11),
    },
    cleanMapContentIconR: {
      right: module588.default.setSpText(11),
    },
    IconLiContent: {
      height: module588.default.setSpText(44),
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#E1E7F5',
      flexDirection: 'row',
    },
    IconLiContentIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    IconLiContentIconL: {
      marginRight: module588.default.setSpText(6),
    },
    IconLiContentIconR: {
      marginLeft: module588.default.setSpText(8),
    },
    zTitle: {
      fontSize: module588.default.setSpText(12),
      paddingTop: module588.default.setSpText(2),
    },
    cleanRlistContent: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingVertical: module588.default.setSpText(10),
      paddingLeft: module588.default.setSpText(14),
      borderTopLeftRadius: module588.default.setSpText(8),
      borderBottomLeftRadius: module588.default.setSpText(8),
    },
    cleanRlistIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      marginRight: module588.default.setSpText(16),
    },
    cleanTopMore: {
      position: 'absolute',
      flex: 1,
      width: '100%',
      top: module588.default.setSpText(55),
      right: module588.default.setSpText(0),
      paddingHorizontal: module588.default.setSpText(10),
    },
    cleanTopMoreBack: {
      height: module588.default.setSpText(78),
      borderRadius: module588.default.setSpText(4),
      backgroundColor: 'rgba(33, 59, 92, 0.96)',
      position: 'relative',
    },
    areaChoice: {
      position: 'absolute',
      top: module588.default.setSpText(-25),
      right: module588.default.setSpText(5),
      width: module588.default.setSpText(25),
      height: module588.default.setSpText(25),
      borderWidth: module588.default.setSpText(12),
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'rgba(33, 59, 92, 0.96)',
      borderLeftColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cleanMapChoice: {
      position: 'absolute',
      bottom: module588.default.setSpText(-10),
      width: 0,
      height: 0,
      borderLeftWidth: module588.default.setSpText(10),
      borderLeftColor: 'transparent',
      borderRightWidth: module588.default.setSpText(10),
      borderRightColor: 'transparent',
      borderTopWidth: module588.default.setSpText(10),
      borderTopColor: '#fff',
    },
    cleanTopMoreLiContent: {
      flexDirection: 'row',
      marginTop: module588.default.setSpText(20),
    },
    cleanTopMoreLi: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanTopMoreLiIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    cleanTopMoreTitle: {
      color: '#fff',
      fontSize: module588.default.setSpText(10),
      marginTop: module588.default.setSpText(8),
    },
  }),
  F = module1362;
exports.default = F;
