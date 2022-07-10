var module1135 = require('./1135'),
  module11 = require('./11'),
  module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module588 = C(require('./588')),
  ReactNative = require('react-native'),
  PropTypes = C(require('prop-types')),
  module1148 = require('./1148'),
  module1156 = require('./1156'),
  module1145 = require('./1145'),
  module1111 = require('./1111'),
  module1146 = require('./1146'),
  module594 = require('./594'),
  module1158 = require('./1158'),
  module421 = require('./421');

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var s = new WeakMap(),
    l = new WeakMap();
  return (I = function (t) {
    return t ? l : s;
  })(t);
}

function C(t, s) {
  if (!s && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var l = I(s);
  if (l && l.has(t)) return l.get(t);
  var o = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var u in t)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
      var c = n ? Object.getOwnPropertyDescriptor(t, u) : null;
      if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
      else o[u] = t[u];
    }

  o.default = t;
  if (l) l.set(t, o);
  return o;
}

function B() {
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

var module1179 = (function (t) {
  module35.default(module1160, t);

  var PropTypes = module1160,
    I = B(),
    C = function () {
      var t,
        s = module34.default(PropTypes);

      if (I) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(s, arguments, l);
      } else t = s.apply(this, arguments);

      return module37.default(this, t);
    };

  function module1160(t) {
    var s;
    module24.default(this, module1160);
    (s = C.call(this, t)).state = {
      isShow: s.props.isShow,
      isType: s.props.isType,
      isData: s.props.isData ? s.props.isData : '',
      wifiListIcon: require('./1160'),
      selectWfIcon: require('./1161'),
      DLLi: [
        {
          name: module594.default.t('lightsOff'),
          img: require('./1162'),
        },
        {
          name: module594.default.t('lightsOn'),
          img: require('./1163'),
        },
      ],
      Vol: s.props.isData.Vol ? s.props.isData.Vol : null,
      LedSwitch: undefined != s.props.isData.LedSwitch ? s.props.isData.LedSwitch : null,
      setTimeLi: [
        {
          time: '00',
        },
        {
          time: '01',
        },
        {
          time: '02',
        },
        {
          time: '03',
        },
        {
          time: '04',
        },
        {
          time: '05',
        },
        {
          time: '06',
        },
        {
          time: '07',
        },
        {
          time: '08',
        },
        {
          time: '09',
        },
        {
          time: '10',
        },
        {
          time: '11',
        },
        {
          time: '12',
        },
        {
          time: '13',
        },
        {
          time: '14',
        },
        {
          time: '15',
        },
        {
          time: '16',
        },
        {
          time: '17',
        },
        {
          time: '18',
        },
        {
          time: '19',
        },
        {
          time: '20',
        },
        {
          time: '21',
        },
        {
          time: '22',
        },
        {
          time: '23',
        },
      ],
      setTimeLiMin: [
        {
          time: '00',
        },
        {
          time: '01',
        },
        {
          time: '02',
        },
        {
          time: '03',
        },
        {
          time: '04',
        },
        {
          time: '05',
        },
        {
          time: '06',
        },
        {
          time: '07',
        },
        {
          time: '08',
        },
        {
          time: '09',
        },
        {
          time: '10',
        },
        {
          time: '11',
        },
        {
          time: '12',
        },
        {
          time: '13',
        },
        {
          time: '14',
        },
        {
          time: '15',
        },
        {
          time: '16',
        },
        {
          time: '17',
        },
        {
          time: '18',
        },
        {
          time: '19',
        },
        {
          time: '20',
        },
        {
          time: '21',
        },
        {
          time: '22',
        },
        {
          time: '23',
        },
        {
          time: '24',
        },
        {
          time: '25',
        },
        {
          time: '26',
        },
        {
          time: '27',
        },
        {
          time: '28',
        },
        {
          time: '29',
        },
        {
          time: '30',
        },
        {
          time: '31',
        },
        {
          time: '32',
        },
        {
          time: '33',
        },
        {
          time: '34',
        },
        {
          time: '35',
        },
        {
          time: '36',
        },
        {
          time: '37',
        },
        {
          time: '38',
        },
        {
          time: '39',
        },
        {
          time: '40',
        },
        {
          time: '41',
        },
        {
          time: '42',
        },
        {
          time: '43',
        },
        {
          time: '44',
        },
        {
          time: '45',
        },
        {
          time: '46',
        },
        {
          time: '47',
        },
        {
          time: '48',
        },
        {
          time: '49',
        },
        {
          time: '50',
        },
        {
          time: '51',
        },
        {
          time: '52',
        },
        {
          time: '53',
        },
        {
          time: '54',
        },
        {
          time: '55',
        },
        {
          time: '56',
        },
        {
          time: '57',
        },
        {
          time: '58',
        },
        {
          time: '59',
        },
      ],
      setTimeNum:
        s.props.isData && 2 == s.props.isData.setShowId
          ? [
              {
                name: module594.default.t('once'),
                id: 0,
                istime: [],
              },
              {
                name: module594.default.t('everyDay'),
                id: 1,
                istime: [0, 1, 2, 3, 4, 5, 6],
              },
              {
                name: module594.default.t('mondayToFriday'),
                id: 2,
                istime: [1, 2, 3, 4, 5],
              },
              {
                name: module594.default.t('weekend'),
                id: 3,
                istime: [0, 6],
              },
              {
                name: module594.default.t('customize'),
                id: 4,
              },
            ]
          : [
              {
                name: module594.default.t('fullImageCleaning'),
                id: 0,
                istime: 0,
              },
              {
                name: module594.default.t('areaCleaning'),
                id: 1,
                istime: 1,
              },
              {
                name: module594.default.t('partitionCleaning'),
                id: 2,
                istime: 2,
              },
            ],
      setTimeNumId: null,
      customize: false,
      customizeIcon: require('./1164'),
      customizeIcon_f: require('./1165'),
      customizeTimeLi: [
        {
          name: module594.default.t('onMonday'),
          id: 1,
          istime: 1,
          img: require('./1164'),
        },
        {
          name: module594.default.t('onTuesday'),
          id: 2,
          istime: 2,
          img: require('./1164'),
        },
        {
          name: module594.default.t('onWednesday'),
          id: 3,
          istime: 3,
          img: require('./1164'),
        },
        {
          name: module594.default.t('thursday'),
          id: 4,
          istime: 4,
          img: require('./1164'),
        },
        {
          name: module594.default.t('friday'),
          id: 5,
          istime: 5,
          img: require('./1164'),
        },
        {
          name: module594.default.t('onSaturday'),
          id: 6,
          istime: 6,
          img: require('./1164'),
        },
        {
          name: module594.default.t('sunday'),
          id: 7,
          istime: 0,
          img: require('./1164'),
        },
      ],
      customizeName: [],
      customizeItems: [],
      customizeHour: s.props.isData && s.props.isData.timeData ? s.props.isData.timeData.TimeHour : '',
      customizeMin: s.props.isData && s.props.isData.timeData ? s.props.isData.timeData.TimeMinute : '',
      changedel: 0,
      changeVol: 0,
      isBack: true,
      progressNo: require('./1166'),
      progressYes: require('./1167'),
      upAppNum: s.props.isData.upDataUnm,
      immediateUpdate: false,
      equipmentIos: '',
      htWidth: 0,
      versiontType: s.props.isData.versiontType ? s.props.isData.versiontType : null,
      listView: null,
      listHeight: 0,
      footerY: 0,
      mlistView: null,
      mlistHeight: 0,
      mfooterY: 0,
    };
    return s;
  }

  module25.default(module1160, [
    {
      key: 'fwxyFunc',
      value: function () {
        if (this.props.fwxyFunc) this.props.fwxyFunc();
        this.setState({
          isShow: false,
        });
      },
    },
    {
      key: 'yszcFunc',
      value: function () {
        if (this.props.yszcFunc) this.props.yszcFunc();
        this.setState({
          isShow: false,
        });
      },
    },
    {
      key: 'measureView',
      value: function (t) {
        this.setState({
          x: t.nativeEvent.layout.x,
          y: t.nativeEvent.layout.y,
          width: t.nativeEvent.layout.width,
          height: t.nativeEvent.layout.height,
        });
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;

        switch (
          ((this.LedSwitcNum = ReactNative.DeviceEventEmitter.addListener('LedSwitcNum', function (s) {
            t.setState({
              LedSwitch: s,
            });
          })),
          (this.VolNum = ReactNative.DeviceEventEmitter.addListener('VolNum', function (s) {
            t.setState({
              Vol: s,
            });
          })),
          (this.appUp = ReactNative.DeviceEventEmitter.addListener('appUp', function (s) {
            t.setState({
              upAppNum: s,
            });
          })),
          this.props.isData.setShowId)
        ) {
          case 2:
            if (this.props.isData.periodData) {
              var s = '';
              s =
                7 == this.props.isData.periodData.length
                  ? 1
                  : this.props.isData.periodData.toString() == [0, 6].toString()
                  ? 3
                  : this.props.isData.periodData.toString() == [1, 2, 3, 4, 5].toString()
                  ? 2
                  : 0 == this.props.isData.periodData.length
                  ? 0
                  : 4;
              this.setState({
                setTimeNumId: s,
              });
            }

            break;

          case 3:
            if (!(this.props.isData.segmentTagIds && this.props.isData.tagIds))
              this.setState({
                setTimeNumId: 0,
              });
            if (this.props.isData.tagIds)
              this.setState({
                setTimeNumId: 1,
              });
            if (this.props.isData.segmentTagIds)
              this.setState({
                setTimeNumId: 2,
              });
        }

        if ('GJUP' == this.state.isType || 1 == this.state.versiontType || this.state.isData.isMandatory)
          this.setState({
            isBack: false,
          });
        ReactNative.Platform.OS;
        this.setState({
          equipmentIos: require('./1168'),
        });

        if ('SET' == this.state.isType) {
          this.customizeHour = this.props.isData.timeData.TimeHour;
          this.customizeMin = this.props.isData.timeData.TimeMinute;
          setTimeout(function () {
            if (t.mlistView && t.customizeMin && t.mfooterY && t.mlistHeight && t.mfooterY > t.mlistHeight) {
              var s = t.mlistView.getScrollResponder(),
                l = 0;

              if (t.customizeMin > 5) {
                var o = t.customizeMin;
                l = ((t.mfooterY - t.mlistHeight) * o) / 60 - module588.default.setSpText(11);
              }

              s.scrollTo({
                y: l,
                animated: true,
              });
            }

            if (t.listView && t.customizeHour && t.customizeMin && t.footerY && t.listHeight && t.footerY > t.listHeight) {
              var n = 0;

              if (t.customizeHour > 5) {
                var u = t.customizeHour;
                n = ((t.footerY - t.listHeight) * u) / 24 + module588.default.setSpText(16);
              }

              t.listView.getScrollResponder().scrollTo({
                y: n,
                animated: true,
              });
            }
          }, 500);
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.appUp.emitter.removeAllListeners('appUp');
        this.LedSwitcNum.emitter.removeAllListeners('LedSwitcNum');
        this.VolNum.emitter.removeAllListeners('VolNum');

        this.setState = function (t, s) {};
      },
    },
    {
      key: 'colseAlertWin',
      value: function () {
        this.props.onPick();
        this.setState({
          isShow: false,
        });
      },
    },
    {
      key: 'deleteMap',
      value: function () {
        var t = this;
        module1145.default.deleteMap(this.state.isData.iotId).then(function () {
          ReactNative.DeviceEventEmitter.emit('moreResetMap', 1);
          t.props.onData(2);
          t.colseAlertWin();
        });
      },
    },
    {
      key: 'dlIndex',
      value: function (t) {
        module1145.default.lightSwitch(this.state.isData.iotId, t).then(
          function (t) {},
          function (t, s) {
            if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
              var l = '';
              Object.keys(t).map(function (s) {
                if ('code' == s) {
                  var o = t[s];
                  o;
                }

                if ('message' == s) l = t[s];
              });
              module1096.default.info(l, 1, undefined, false);
            }
          }
        );
      },
    },
    {
      key: 'setVoiceLvDa',
      value: function (t) {
        module1145.default.setVoiceLv(this.state.isData.iotId, t);
      },
    },
    {
      key: 'volChange',
      value: function (t) {
        this.setState({
          Vol: Math.round(t),
        });
      },
    },
    {
      key: 'setShowTime',
      value: function (t, s, l) {
        if (4 == Number(t)) {
          this.setState({
            customize: true,
          });
          this.customizeTimeData();
          return false;
        }

        this.setState({
          setTimeNumId: t,
        });
        var o = {
          name: s,
          index: this.state.isData.setShowId,
          istime: l,
          isAlert: true,
          id: t,
        };
        this.props.onPick(o);
      },
    },
    {
      key: 'customizeIndex',
      value: function (t, s, o) {
        var n = this;
        this.state.customizeTimeLi.map(function (u, c) {
          if (t == u.id)
            u.isimg
              ? n.setState(
                  {
                    customizeTimeLi: n.state.customizeTimeLi.map(function (s, o) {
                      return t == s.id
                        ? module11.default({}, s, {
                            img: n.state.customizeIcon,
                            isimg: false,
                          })
                        : s;
                    }),
                  },
                  function () {
                    var t = n.state.customizeName,
                      l = n.state.customizeItems;

                    Array.prototype.contains = function (t) {
                      for (var s = this.length; s--; ) if (this[s] === t) return s;

                      return false;
                    };

                    if ('string' == typeof t)
                      (t = t.split(',').filter(function (t) {
                        return '' != t;
                      })).splice(t.contains(s), 1);
                    else {
                      t.splice(t.contains(s), 1);
                      l.splice(l.contains(o), 1);
                    }
                    n.setState({
                      customizeName: t,
                      customizeItems: l,
                    });
                    var u = {
                      name: t,
                      strTime: l,
                      index: n.state.isData.setShowId,
                    };
                    n.props.onPick(u);
                  }
                )
              : n.setState(
                  {
                    customizeTimeLi: n.state.customizeTimeLi.map(function (s, o) {
                      return t == s.id
                        ? module11.default({}, s, {
                            img: n.state.customizeIcon_f,
                            isimg: true,
                          })
                        : s;
                    }),
                    customizeName: n.state.customizeName.concat(s),
                    customizeItems: n.state.customizeItems.concat(o),
                  },
                  function () {
                    var t = {
                      name: n.state.customizeName,
                      index: n.state.isData.setShowId,
                      istime: n.state.customizeItems,
                    };
                    n.props.onPick(t);
                  }
                );
        });
      },
    },
    {
      key: 'saveBtn',
      value: function () {
        var t = {
          index: 1,
          hour: this.state.customizeHour,
          min: this.state.customizeMin,
          name: this.state.customizeHour + ':' + this.state.customizeMin,
        };
        this.props.onPick(t);
      },
    },
    {
      key: 'selectBtn',
      value: function () {
        this.props.onPick();
      },
    },
    {
      key: 'customizeTimeData',
      value: function () {
        for (var t = 0; t < this.state.customizeTimeLi.length; t++)
          for (var s = 0; s < this.props.isData.periodData.length; s++)
            this.state.customizeTimeLi[t].istime == this.props.isData.periodData[s] &&
              ((this.state.customizeTimeLi[t].img = this.state.customizeIcon), (this.state.customizeTimeLi[t].isimg = false));
      },
    },
    {
      key: 'changedel',
      value: function (t) {
        this.setState({
          changeVol: t,
          changedel: t,
        });
      },
    },
    {
      key: 'completedel',
      value: function (t) {
        var s = this;
        if (100 != t)
          this.setState({
            changeVol: 0,
            changedel: 0,
          });
        else
          module1111.default.unbindAccountAndDev(this.state.isData.iotId).then(function (t) {
            if (200 == t.code) {
              s.colseAlertWin();
              ReactNative.DeviceEventEmitter.emit('loginIndex');
              setTimeout(function () {
                s.state.isData.navigation.dispatch(module421.StackActions.popToTop());
              }, 300);
            }
          });
      },
    },
    {
      key: '_immediateUpdateNew',
      value: function () {
        this.setState({
          immediateUpdate: true,
          isBack: false,
        });
        CodePush.sync(
          {
            updateDialog: null,
            installMode: CodePush.InstallMode.IMMEDIATE,
          },
          this.codePushStatusDidChange.bind(this),
          this.codePushDownloadDidProgress.bind(this)
        );
      },
    },
    {
      key: 'codePushStatusDidChange',
      value: function (t) {
        switch (t) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          case CodePush.SyncStatus.INSTALLING_UPDATE:
          case CodePush.SyncStatus.UP_TO_DATE:
          case CodePush.SyncStatus.UPDATE_INSTALLED:
        }
      },
    },
    {
      key: 'codePushDownloadDidProgress',
      value: function (t) {
        this.currProgress = parseFloat(t.receivedBytes / t.totalBytes).toFixed(2);
        if (this.currProgress >= 1) this.colseAlertWin();
        else
          this.setState({
            htWidth: 100 * this.currProgress,
          });
      },
    },
    {
      key: 'appNativeUpdate',
      value: function () {
        module1146.default.appNativeUpdate(this.state.isData.updataUrl, 'com.jhkj.neabot');
      },
    },
    {
      key: 'componentDidUpdate',
      value: function () {},
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = new module1148.default.DataSource({
            rowHasChanged: function (t, s) {
              return t !== s;
            },
          });
        return React.default.createElement(
          ReactNative.Modal,
          {
            visible: this.state.isShow,
            transparent: true,
          },
          React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              style: A.Feedback,
              onPress: function (s) {
                if (t.state.isBack) 'YSFW' == t.state.isType || 'OPEN' == t.state.isType || 'CLOSE' == t.state.isType || t.colseAlertWin();
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: A.alertBox,
              },
              'EM' == this.state.isType
                ? React.default.createElement(
                    ReactNative.TouchableWithoutFeedback,
                    null,
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: A.delEquipment,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: A.delEquipmentTxt,
                        },
                        module594.default.t('afterUnbindingTheDevice')
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: A.delEquipmentVolume,
                        },
                        React.default.createElement(module1156.default, {
                          style: A.delSlider,
                          disabled: false,
                          value: this.state.changeVol,
                          thumbImage: this.state.equipmentIos,
                          minimumValue: 0,
                          maximumValue: 100,
                          onValueChange: function (s) {
                            t.changedel(s);
                          },
                          onSlidingComplete: function (s) {
                            t.completedel(s);
                          },
                          minimumTrackTintColor: '#D22148',
                          maximumTrackTintColor: 'rgba(0,0,0,0)',
                        }),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: A.sliderBox,
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: A.sliderBoxTxt,
                            },
                            module594.default.t('slideToUnbind')
                          ),
                          React.default.createElement(ReactNative.Text, {
                            style: [
                              A.sliderBoxLi,
                              {
                                width: this.state.changedel + '%',
                              },
                            ],
                          })
                        )
                      ),
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          style: A.changedelColseBox,
                          onPress: function () {
                            t.colseAlertWin();
                          },
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1169'),
                          style: A.changedelColse,
                          resizeMode: 'contain',
                        })
                      )
                    )
                  )
                : React.default.createElement(
                    ReactNative.TouchableWithoutFeedback,
                    null,
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [A.alertContent, 'HT' == this.state.isType ? A.alertContentBack : ''],
                      },
                      'YSFW' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.resetMapContent,
                            },
                            'ko' == module594.default.locale
                              ? React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: A.ysxyTitle,
                                  },
                                  module594.default.t('privacyTitle')
                                )
                              : React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: A.ysxyTitle,
                                  },
                                  module594.default.t('privacy'),
                                  module594.default.t('an'),
                                  module594.default.t('service')
                                ),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.ysxyText,
                              },
                              ' ',
                              module594.default.t('M1622099090'),
                              'ko' == module594.default.locale
                                ? null
                                : React.default.createElement(
                                    ReactNative.Text,
                                    {
                                      style: A.ysxyCTxt,
                                      onPress: this.fwxyFunc.bind(this),
                                    },
                                    '\u300a',
                                    module594.default.t('privacy'),
                                    '\u300b'
                                  ),
                              'ko' == module594.default.locale
                                ? null
                                : React.default.createElement(
                                    ReactNative.Text,
                                    {
                                      style: A.ysxyText,
                                    },
                                    ' ',
                                    module594.default.t('an'),
                                    ' '
                                  ),
                              'ko' == module594.default.locale
                                ? null
                                : React.default.createElement(
                                    ReactNative.Text,
                                    {
                                      style: A.ysxyCTxt,
                                      onPress: this.yszcFunc.bind(this),
                                    },
                                    '\u300a',
                                    module594.default.t('service'),
                                    '\u300b'
                                  ),
                              module594.default.t('L1622099072')
                            ),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.doubleBtn,
                              },
                              React.default.createElement(
                                module1135.default,
                                {
                                  style: [A.doubleBtnLi, A.doubleBtnLiL],
                                  size: 'small',
                                  onPress: function () {
                                    t.colseAlertWin();
                                  },
                                },
                                module594.default.t('cancel')
                              ),
                              React.default.createElement(
                                module1135.default,
                                {
                                  type: 'ghost',
                                  style: [A.doubleBtnLi, A.doubleBtnLiR],
                                  size: 'small',
                                  onPress: function () {
                                    t.props.onData(1);
                                    t.setState({
                                      isShow: false,
                                    });
                                  },
                                },
                                module594.default.t('statusAgree')
                              )
                            )
                          )
                        : null,
                      'OPEN' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.resetMapContent,
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.ysxyTitle,
                              },
                              module594.default.t('T1627287962')
                            ),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.ysxyText,
                              },
                              module594.default.t('M1627288035')
                            ),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.doubleBtn,
                              },
                              React.default.createElement(
                                module1135.default,
                                {
                                  style: [A.doubleBtnLi, A.doubleBtnLiL],
                                  size: 'small',
                                  onPress: function () {
                                    t.colseAlertWin();
                                  },
                                },
                                module594.default.t('cancel')
                              ),
                              React.default.createElement(
                                module1135.default,
                                {
                                  type: 'ghost',
                                  style: [A.doubleBtnLi, A.doubleBtnLiR],
                                  size: 'small',
                                  onPress: function () {
                                    t.props.onData(1);
                                    t.setState({
                                      isShow: false,
                                    });
                                  },
                                },
                                module594.default.t('btnConfirm')
                              )
                            )
                          )
                        : null,
                      'CLOSE' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.resetMapContent,
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.ysxyTitle,
                              },
                              module594.default.t('M1627288062')
                            ),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.ysxyText,
                              },
                              module594.default.t('M1627288098')
                            ),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.doubleBtn,
                              },
                              React.default.createElement(
                                module1135.default,
                                {
                                  style: [A.doubleBtnLi, A.doubleBtnLiL],
                                  size: 'small',
                                  onPress: function () {
                                    t.colseAlertWin();
                                  },
                                },
                                module594.default.t('cancel')
                              ),
                              React.default.createElement(
                                module1135.default,
                                {
                                  type: 'ghost',
                                  style: [A.doubleBtnLi, A.doubleBtnLiR],
                                  size: 'small',
                                  onPress: function () {
                                    t.props.onData(1);
                                    t.setState({
                                      isShow: false,
                                    });
                                  },
                                },
                                module594.default.t('btnConfirm')
                              )
                            )
                          )
                        : null,
                      'G' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            null,
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: [
                                  A.Gcontent,
                                  {
                                    width: ReactNative.Dimensions.get('window').width - module588.default.setSpText(80),
                                  },
                                ],
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: require('./1170'),
                                style: A.GtypeIcon,
                                resizeMode: 'contain',
                              }),
                              React.default.createElement(
                                ReactNative.Text,
                                {
                                  style: A.Gtext,
                                },
                                module594.default.t('supportFivesGhz')
                              ),
                              React.default.createElement(
                                ReactNative.Text,
                                {
                                  style: A.Gprompt,
                                },
                                module594.default.t('MakeSureWIFIIsConnected')
                              )
                            ),
                            React.default.createElement(
                              module1135.default,
                              {
                                type: 'primary',
                                style: A.isColseBtn,
                                onPress: function () {
                                  t.colseAlertWin();
                                },
                              },
                              module594.default.t('gotIt')
                            )
                          )
                        : null,
                      'W' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.safeAreaViewBox,
                            },
                            React.default.createElement(
                              ReactNative.SafeAreaView,
                              {
                                style: A.container,
                              },
                              React.default.createElement(
                                ReactNative.ScrollView,
                                {
                                  style: A.scrollView,
                                },
                                React.default.createElement(module1148.default, {
                                  dataSource: l.cloneWithRows(this.state.isData),
                                  renderRow: function (s, l, o) {
                                    return React.default.createElement(
                                      ReactNative.TouchableOpacity,
                                      {
                                        onPress: function () {
                                          t.colseAlertWin();
                                          t.props.onData(s);
                                        },
                                      },
                                      React.default.createElement(
                                        ReactNative.View,
                                        {
                                          style: A.wifiList,
                                        },
                                        React.default.createElement(ReactNative.Image, {
                                          source: t.state.wifiListIcon,
                                          style: A.wflistIcon,
                                        }),
                                        React.default.createElement(
                                          ReactNative.Text,
                                          {
                                            style: A.wfName,
                                          },
                                          s.deviceWifiName
                                        ),
                                        t.props.wifiName == s.deviceWifiName
                                          ? React.default.createElement(ReactNative.Image, {
                                              source: t.state.selectWfIcon,
                                              style: A.selectWfIcon,
                                            })
                                          : null
                                      )
                                    );
                                  },
                                })
                              )
                            )
                          )
                        : null,
                      'DL' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.DLBox,
                            },
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.Dbox,
                              },
                              this.state.DLLi.map(function (s, l) {
                                return React.default.createElement(
                                  ReactNative.TouchableOpacity,
                                  {
                                    key: l,
                                    style: A.DboxLi,
                                    onPress: function () {
                                      t.dlIndex(l);
                                    },
                                  },
                                  React.default.createElement(
                                    ReactNative.View,
                                    {
                                      style: [A.DboxLiBtn, t.state.LedSwitch == l ? A.DboxLiActive : ''],
                                    },
                                    React.default.createElement(ReactNative.Image, {
                                      source: s.img,
                                      resizeMode: 'contain',
                                      style: A.DboxLiIcon,
                                    }),
                                    React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: A.DboxLiTxt,
                                        numberOfLines: 1,
                                      },
                                      s.name
                                    )
                                  )
                                );
                              })
                            ),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.Ybox,
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: require('./1171'),
                                resizeMode: 'contain',
                                style: A.volumeIcon,
                              }),
                              React.default.createElement(
                                ReactNative.View,
                                {
                                  style: A.volume,
                                },
                                React.default.createElement(module1156.default, {
                                  style: A.slider,
                                  disabled: false,
                                  value: Number(this.state.Vol),
                                  minimumValue: 0,
                                  maximumValue: 100,
                                  onValueChange: function (s) {
                                    t.volChange(s);
                                  },
                                  onSlidingComplete: function (s) {
                                    t.setVoiceLvDa(s);
                                  },
                                  thumbTintColor: '#0A72FA',
                                  minimumTrackTintColor: '#0A72FA',
                                  maximumTrackTintColor: '#E1E7F5',
                                }),
                                React.default.createElement(
                                  module1158.Card,
                                  {
                                    style: [
                                      A.sliderNum,
                                      {
                                        left: module588.default.setSpText(2.1 * this.state.Vol),
                                      },
                                    ],
                                  },
                                  React.default.createElement(
                                    ReactNative.View,
                                    null,
                                    React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: {
                                          fontSize: module588.default.setSpText(13),
                                        },
                                      },
                                      this.state.Vol,
                                      ' '
                                    ),
                                    React.default.createElement(ReactNative.View, {
                                      style: A.areaChoice,
                                    })
                                  )
                                )
                              ),
                              React.default.createElement(ReactNative.Image, {
                                source: require('./1172'),
                                resizeMode: 'contain',
                                style: A.volumeIcon,
                              })
                            )
                          )
                        : null,
                      'RM' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.resetMap,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1173'),
                              resizeMode: 'contain',
                              style: A.resetMapIcon,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.resetMapTxt,
                              },
                              module594.default.t('resetOperation')
                            ),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.doubleBtn,
                              },
                              React.default.createElement(
                                module1135.default,
                                {
                                  style: [A.doubleBtnLi, A.doubleBtnLiL],
                                  size: 'small',
                                  onPress: function () {
                                    t.colseAlertWin();
                                  },
                                },
                                module594.default.t('cancel')
                              ),
                              React.default.createElement(
                                module1135.default,
                                {
                                  type: 'ghost',
                                  style: [A.doubleBtnLi, A.doubleBtnLiR],
                                  size: 'small',
                                  onPress: function () {
                                    t.deleteMap();
                                  },
                                },
                                module594.default.t('ConfirmReset')
                              )
                            )
                          )
                        : null,
                      'SET' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            null,
                            1 == this.props.isData.setShowId
                              ? React.default.createElement(
                                  ReactNative.View,
                                  {
                                    style: A.setTime,
                                  },
                                  React.default.createElement(
                                    ReactNative.View,
                                    {
                                      style: A.setTimeBox,
                                    },
                                    React.default.createElement(
                                      ReactNative.View,
                                      {
                                        style: A.setTimeBoxLi,
                                      },
                                      React.default.createElement(module1148.default, {
                                        initialListSize: 26,
                                        ref: function (s) {
                                          return (t.listView = s);
                                        },
                                        onLayout: function (s) {
                                          t.listHeight = s.nativeEvent.layout.height;
                                        },
                                        renderFooter: function () {
                                          return React.default.createElement(ReactNative.View, {
                                            onLayout: function (s) {
                                              t.footerY = s.nativeEvent.layout.y;
                                            },
                                          });
                                        },
                                        dataSource: l.cloneWithRows(this.state.setTimeLi),
                                        showsVerticalScrollIndicator: false,
                                        renderRow: function (s, l, o) {
                                          return React.default.createElement(
                                            ReactNative.TouchableOpacity,
                                            {
                                              onPress: function () {
                                                t.setState({
                                                  customizeHour: s.time,
                                                });
                                              },
                                            },
                                            React.default.createElement(
                                              ReactNative.Text,
                                              {
                                                style: [A.setTimeList, t.state.customizeHour == s.time ? A.customizeHourActive : ''],
                                              },
                                              s.time
                                            )
                                          );
                                        },
                                      })
                                    ),
                                    React.default.createElement(
                                      ReactNative.View,
                                      {
                                        style: A.setTimeBoxLi,
                                      },
                                      React.default.createElement(module1148.default, {
                                        initialListSize: 62,
                                        ref: function (s) {
                                          return (t.mlistView = s);
                                        },
                                        onLayout: function (s) {
                                          t.mlistHeight = s.nativeEvent.layout.height;
                                        },
                                        renderFooter: function () {
                                          return React.default.createElement(ReactNative.View, {
                                            onLayout: function (s) {
                                              console.log('--------------------render mfooter' + s.nativeEvent.layout.y);
                                              t.mfooterY = s.nativeEvent.layout.y;
                                            },
                                          });
                                        },
                                        dataSource: l.cloneWithRows(this.state.setTimeLiMin),
                                        showsVerticalScrollIndicator: false,
                                        renderRow: function (s, l, o) {
                                          return React.default.createElement(
                                            ReactNative.TouchableOpacity,
                                            {
                                              onPress: function () {
                                                t.setState({
                                                  customizeMin: s.time,
                                                });
                                              },
                                            },
                                            React.default.createElement(
                                              ReactNative.Text,
                                              {
                                                style: [A.setTimeList, t.state.customizeMin == s.time ? A.customizeMinActive : ''],
                                              },
                                              s.time
                                            )
                                          );
                                        },
                                      })
                                    )
                                  ),
                                  React.default.createElement(
                                    module1135.default,
                                    {
                                      type: 'primary',
                                      style: [A.isColseBtn, A.setTimeBtn],
                                      onPress: function () {
                                        t.saveBtn();
                                      },
                                    },
                                    module594.default.t('save')
                                  )
                                )
                              : null,
                            (2 == this.props.isData.setShowId && !this.state.customize) || (3 == this.props.isData.setShowId && !this.state.customize)
                              ? React.default.createElement(
                                  ReactNative.View,
                                  {
                                    style: A.setType,
                                  },
                                  React.default.createElement(module1148.default, {
                                    dataSource: l.cloneWithRows(this.state.setTimeNum),
                                    renderRow: function (s, l, o) {
                                      return React.default.createElement(
                                        ReactNative.TouchableOpacity,
                                        {
                                          onPress: function () {
                                            t.setShowTime(s.id, s.name, s.istime);
                                          },
                                        },
                                        React.default.createElement(
                                          ReactNative.View,
                                          {
                                            style: A.wifiList,
                                          },
                                          React.default.createElement(
                                            ReactNative.Text,
                                            {
                                              style: A.wfName,
                                            },
                                            s.name
                                          ),
                                          t.state.setTimeNumId == s.id
                                            ? React.default.createElement(ReactNative.Image, {
                                                source: t.state.selectWfIcon,
                                                style: A.selectWfIcon,
                                              })
                                            : null
                                        )
                                      );
                                    },
                                  })
                                )
                              : null,
                            this.state.customize
                              ? React.default.createElement(
                                  ReactNative.View,
                                  {
                                    style: A.setType,
                                  },
                                  React.default.createElement(module1148.default, {
                                    dataSource: l.cloneWithRows(this.state.customizeTimeLi),
                                    renderRow: function (s, l, o) {
                                      return React.default.createElement(
                                        ReactNative.TouchableOpacity,
                                        {
                                          onPress: function () {
                                            t.customizeIndex(s.id, s.name, s.istime);
                                          },
                                        },
                                        React.default.createElement(
                                          ReactNative.View,
                                          {
                                            style: A.wifiList,
                                          },
                                          React.default.createElement(
                                            ReactNative.Text,
                                            {
                                              style: A.wfName,
                                            },
                                            s.name
                                          ),
                                          React.default.createElement(ReactNative.Image, {
                                            source: s.img,
                                            resizeMode: 'contain',
                                            style: A.selectWfIcon,
                                          })
                                        )
                                      );
                                    },
                                  }),
                                  React.default.createElement(
                                    module1135.default,
                                    {
                                      type: 'primary',
                                      style: [A.isColseBtn, A.setTimeBtn],
                                      onPress: function () {
                                        t.selectBtn();
                                      },
                                    },
                                    module594.default.t('save')
                                  )
                                )
                              : null
                          )
                        : null,
                      'GJ' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.resetMap,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1174'),
                              resizeMode: 'contain',
                              style: A.resetMapIcon,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.upgradeGj,
                              },
                              module594.default.t('latestFirmwareVersion'),
                              ' ',
                              React.default.createElement(
                                ReactNative.Text,
                                {
                                  style: A.upgradeGjIcon,
                                },
                                ' ',
                                this.props.isData.version,
                                ' '
                              ),
                              ' '
                            ),
                            React.default.createElement(ReactNative.Text, {
                              style: A.gjTxt,
                            }),
                            React.default.createElement(ReactNative.Text, {
                              style: A.gjTxt,
                            }),
                            React.default.createElement(ReactNative.Text, {
                              style: A.gjTxt,
                            }),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.doubleBtn,
                              },
                              React.default.createElement(
                                module1135.default,
                                {
                                  style: [A.doubleBtnLi, A.doubleBtnLiL],
                                  size: 'small',
                                  onPress: function () {
                                    t.colseAlertWin();
                                  },
                                },
                                module594.default.t('cancel')
                              ),
                              React.default.createElement(
                                module1135.default,
                                {
                                  type: 'ghost',
                                  style: [A.doubleBtnLi, A.doubleBtnLiR],
                                  size: 'small',
                                  onPress: function () {
                                    t.colseAlertWin();
                                    t.props.onData(1);
                                  },
                                },
                                module594.default.t('updateImmediately')
                              )
                            )
                          )
                        : null,
                      'GJUP' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.resetMap,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1174'),
                              resizeMode: 'contain',
                              style: A.resetMapIcon,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.upgradeGj,
                              },
                              module594.default.t('latestFirmwareVersion'),
                              ' ',
                              React.default.createElement(
                                ReactNative.Text,
                                {
                                  style: A.upgradeGjIcon,
                                },
                                ' ',
                                this.props.isData.version,
                                ' '
                              ),
                              ' '
                            ),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.step,
                              },
                              React.default.createElement(
                                ReactNative.View,
                                {
                                  style: A.stepLi,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: this.props.isData.progress <= 85 ? this.state.progressYes : this.state.progressNo,
                                  resizeMode: 'contain',
                                  style: A.stepLiIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: [A.stepLiTxt, this.props.isData.progress <= 85 ? A.stepLiTxtActive : ''],
                                  },
                                  module594.default.t('DownloadingFirmware')
                                ),
                                this.props.isData.progress <= 85
                                  ? React.default.createElement(ReactNative.Text, {
                                      style: A.steBorder,
                                    })
                                  : null
                              ),
                              React.default.createElement(
                                ReactNative.View,
                                {
                                  style: A.stepLi,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: this.props.isData.progress >= 85 && this.props.isData.progress < 95 ? this.state.progressYes : this.state.progressNo,
                                  resizeMode: 'contain',
                                  style: A.stepLiIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: [A.stepLiTxt, this.props.isData.progress >= 85 && this.props.isData.progress < 95 ? A.stepLiTxtActive : ''],
                                  },
                                  module594.default.t('aboutToRestart')
                                ),
                                this.props.isData.progress >= 92
                                  ? React.default.createElement(ReactNative.Text, {
                                      style: A.steBorder,
                                    })
                                  : null
                              ),
                              React.default.createElement(
                                ReactNative.View,
                                {
                                  style: A.stepLi,
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: this.props.isData.progress >= 95 ? this.state.progressYes : this.state.progressNo,
                                  resizeMode: 'contain',
                                  style: A.stepLiIcon,
                                }),
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: [A.stepLiTxt, this.props.isData.progress >= 95 ? A.stepLiTxtActive : ''],
                                  },
                                  module594.default.t('updateCompleted')
                                )
                              )
                            )
                          )
                        : null,
                      'UP' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.resetMap,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1175'),
                              resizeMode: 'contain',
                              style: A.resetMapIcon,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: A.upTxt,
                              },
                              module594.default.t('atestVersion'),
                              ' ',
                              React.default.createElement(
                                ReactNative.Text,
                                {
                                  style: A.upVersion,
                                },
                                ' ',
                                this.state.isData.currentVersion,
                                ' '
                              ),
                              ' '
                            ),
                            1 == this.state.versiontType
                              ? React.default.createElement(
                                  ReactNative.View,
                                  {
                                    style: A.upSchedule,
                                  },
                                  React.default.createElement(
                                    ReactNative.Text,
                                    {
                                      style: A.upScheduleTxt,
                                    },
                                    module594.default.t('downloading'),
                                    ':',
                                    ' ',
                                    this.state.upAppNum ? this.state.upAppNum : 0,
                                    '%',
                                    ' '
                                  ),
                                  React.default.createElement(
                                    ReactNative.View,
                                    {
                                      style: A.upScheduleNum,
                                    },
                                    React.default.createElement(ReactNative.Text, {
                                      style: [
                                        A.upScheduleChild,
                                        {
                                          width: this.state.upAppNum ? this.state.upAppNum + '%' : 0,
                                        },
                                      ],
                                    })
                                  )
                                )
                              : null,
                            2 == this.state.versiontType
                              ? React.default.createElement(
                                  ReactNative.View,
                                  null,
                                  React.default.createElement(
                                    ReactNative.Text,
                                    {
                                      style: A.detectPrompt,
                                    },
                                    module594.default.t('checkForNewVersion')
                                  ),
                                  React.default.createElement(
                                    module1135.default,
                                    {
                                      type: 'primary',
                                      style: A.versiontBtn,
                                      onPress: function () {
                                        t.setState(
                                          {
                                            versiontType: 'android' != ReactNative.Platform.OS ? 2 : 1,
                                          },
                                          function () {}
                                        );
                                      },
                                    },
                                    module594.default.t('updateImmediately')
                                  )
                                )
                              : null
                          )
                        : null,
                      'HT' == this.state.isType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: A.resetMap,
                            },
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: A.htTop,
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: require('./1176'),
                                resizeMode: 'contain',
                                style: A.htIcon,
                              }),
                              React.default.createElement(
                                ReactNative.Text,
                                {
                                  style: A.htVersion,
                                },
                                ' ',
                                this.state.isData.appVersion,
                                ' '
                              )
                            ),
                            this.state.immediateUpdate
                              ? React.default.createElement(
                                  ReactNative.View,
                                  {
                                    style: A.schedule,
                                  },
                                  React.default.createElement(
                                    ReactNative.View,
                                    {
                                      style: A.scheduleBox,
                                    },
                                    React.default.createElement(ReactNative.View, {
                                      style: [
                                        A.scheduleNum,
                                        {
                                          width: this.state.htWidth + '%',
                                        },
                                      ],
                                    }),
                                    React.default.createElement(ReactNative.Image, {
                                      source: require('./1177'),
                                      resizeMode: 'contain',
                                      style: [
                                        A.scheduleIcon,
                                        {
                                          left: this.state.htWidth ? this.state.htWidth - 8 + '%' : 0,
                                        },
                                      ],
                                    })
                                  )
                                )
                              : React.default.createElement(
                                  ReactNative.View,
                                  null,
                                  React.default.createElement(
                                    ReactNative.Text,
                                    {
                                      style: A.htTxte,
                                    },
                                    this.state.isData.description
                                  ),
                                  React.default.createElement(
                                    ReactNative.TouchableOpacity,
                                    {
                                      style: A.htBtnBox,
                                      onPress: function () {
                                        t._immediateUpdateNew();
                                      },
                                    },
                                    React.default.createElement(ReactNative.Image, {
                                      source: require('./1178'),
                                      resizeMode: 'contain',
                                      style: A.htBtn,
                                    })
                                  ),
                                  this.state.isData.isMandatory
                                    ? null
                                    : React.default.createElement(
                                        ReactNative.TouchableOpacity,
                                        {
                                          style: A.htColse,
                                          onPress: function () {
                                            t.colseAlertWin();
                                          },
                                        },
                                        React.default.createElement(ReactNative.Image, {
                                          source: require('./1179'),
                                          resizeMode: 'contain',
                                          style: A.htColseIcon,
                                        })
                                      )
                                )
                          )
                        : null
                    )
                  )
            )
          )
        );
      },
    },
  ]);
  return module1160;
})(React.default.Component);

exports.alertText = module1179;
module1179.propTypes = {
  isShow: PropTypes.default.bool,
  onPick: PropTypes.default.func,
  fwxyFunc: PropTypes.default.func,
  yszcFunc: PropTypes.default.func,
  animationType: PropTypes.default.string,
};
var A = ReactNative.StyleSheet.create({
    alertBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(17,36,61,.8)',
    },
    alertContent: {
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(8),
    },
    schedule: {
      backgroundColor: '#FFF',
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(30),
      borderBottomLeftRadius: module588.default.setSpText(8),
      borderBottomRightRadius: module588.default.setSpText(8),
    },
    scheduleBox: {
      position: 'relative',
      width: '100%',
      justifyContent: 'center',
    },
    scheduleNum: {
      height: module588.default.setSpText(3),
      borderRadius: module588.default.setSpText(8),
      backgroundColor: '#0A72FA',
    },
    scheduleIcon: {
      position: 'absolute',
      width: module588.default.setSpText(25),
    },
    htTop: {
      position: 'relative',
      justifyContent: 'center',
    },
    htVersion: {
      position: 'absolute',
      color: '#fff',
      left: module588.default.setSpText(20),
      fontSize: module588.default.setSpText(16),
    },
    alertContentBack: {
      backgroundColor: 'rgba(17,36,61,0)',
    },
    htColse: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    htColseIcon: {
      width: module588.default.setSpText(26),
      height: module588.default.setSpText(26),
    },
    htIcon: {
      width: '100%',
      height: module588.default.setSpText(194),
    },
    htTxte: {
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(10),
    },
    htBtnBox: {
      backgroundColor: '#fff',
      borderBottomLeftRadius: module588.default.setSpText(8),
      borderBottomRightRadius: module588.default.setSpText(8),
      paddingHorizontal: module588.default.setSpText(10),
      marginBottom: module588.default.setSpText(25),
    },
    htBtn: {
      width: '100%',
    },
    detectPrompt: {
      color: '#0A72FA',
      fontSize: module588.default.setSpText(14),
      textAlign: 'center',
      paddingVertical: module588.default.setSpText(40),
    },
    versiontBtn: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    upSchedule: {
      marginTop: module588.default.setSpText(90),
      paddingBottom: module588.default.setSpText(10),
      paddingHorizontal: module588.default.setSpText(10),
    },
    upScheduleNum: {
      backgroundColor: '#E1E7F5',
      height: module588.default.setSpText(48),
      borderWidth: module588.default.setSpText(1),
      borderColor: '#BCCCE0',
      borderRadius: module588.default.setSpText(16),
      position: 'relative',
    },
    upScheduleChild: {
      position: 'absolute',
      height: module588.default.setSpText(48),
      borderRadius: module588.default.setSpText(16),
      backgroundColor: '#18ABFD',
      top: module588.default.setSpText(-1),
    },
    upScheduleTxt: {
      color: '#18ABFD',
      fontSize: module588.default.setSpText(14),
      paddingBottom: module588.default.setSpText(10),
    },
    upTxt: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    upVersion: {
      paddingHorizontal: module588.default.setSpText(5),
      paddingVertical: module588.default.setSpText(5),
      borderRadius: module588.default.setSpText(5),
      backgroundColor: '#0A72FA',
      color: '#fff',
    },
    step: {
      backgroundColor: '#E1E7F5',
      paddingHorizontal: module588.default.setSpText(22),
      paddingBottom: module588.default.setSpText(16),
    },
    stepLi: {
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: module588.default.setSpText(16),
      position: 'relative',
    },
    stepLiIcon: {
      width: module588.default.setSpText(18),
      height: module588.default.setSpText(18),
    },
    stepLiTxt: {
      flex: 1,
      color: '#658DC2',
      fontSize: module588.default.setSpText(14),
      paddingLeft: module588.default.setSpText(12),
    },
    stepLiTxtActive: {
      color: '#0A72FA',
    },
    steBorder: {
      position: 'absolute',
      height: '100%',
      width: module588.default.setSpText(2),
      backgroundColor: '#0A72FA',
      left: module588.default.setSpText(8),
      top: module588.default.setSpText(34),
    },
    gjTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#658DC2',
      paddingHorizontal: module588.default.setSpText(20),
    },
    upgradeGj: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
      paddingVertical: module588.default.setSpText(20),
    },
    upgradeGjIcon: {
      paddingHorizontal: module588.default.setSpText(10),
      backgroundColor: '#0A72FA',
      borderRadius: module588.default.setSpText(16),
      color: '#fff',
    },
    resetMapContent: {
      width: ReactNative.Dimensions.get('window').width - module588.default.setSpText(80),
    },
    ysxyTitle: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: module588.default.setSpText(18),
      fontWeight: 'bold',
      color: '#213B5C',
      paddingVertical: module588.default.setSpText(20),
    },
    ysxyCTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#658DC2',
      paddingHorizontal: module588.default.setSpText(20),
    },
    ysxyText: {
      paddingHorizontal: module588.default.setSpText(10),
      fontSize: module588.default.setSpText(14),
      borderRadius: module588.default.setSpText(8),
      color: '#000',
    },
    delEquipment: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      backgroundColor: '#fff',
      paddingTop: module588.default.setSpText(55),
      paddingBottom: module588.default.setSpText(20),
    },
    delEquipmentTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
      paddingHorizontal: module588.default.setSpText(10),
      textAlign: 'center',
      paddingTop: module588.default.setSpText(5),
    },
    delEquipmentVolume: {
      paddingHorizontal: module588.default.setSpText(15),
      marginTop: module588.default.setSpText(40),
      justifyContent: 'center',
    },
    delSlider: {
      position: 'absolute',
      width: '100%',
      left: module588.default.setSpText(15),
      zIndex: 1,
    },
    sliderBox: {
      position: 'relative',
      height: module588.default.setSpText(48),
      backgroundColor: '#E1E7F5',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: module588.default.setSpText(16),
    },
    sliderBoxTxt: {
      color: '#D22148',
      fontSize: module588.default.setSpText(14),
    },
    sliderBoxLi: {
      position: 'absolute',
      width: '0%',
      height: module588.default.setSpText(48),
      top: 0,
      left: 0,
      backgroundColor: '#D22148',
      borderRadius: module588.default.setSpText(16),
    },
    changedelColse: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    changedelColseBox: {
      position: 'absolute',
      top: module588.default.setSpText(20),
      right: module588.default.setSpText(20),
    },
    customizeMinActive: {
      color: '#0A72FA',
    },
    customizeHourActive: {
      color: '#0A72FA',
    },
    setTime: {
      width: module588.default.setSpText(327),
      borderRadius: module588.default.setSpText(8),
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(20),
    },
    setTimeBox: {
      flexDirection: 'row',
      paddingTop: module588.default.setSpText(11),
      height: module588.default.setSpText(224),
      backgroundColor: '#E1E7F5',
      marginVertical: module588.default.setSpText(20),
      borderRadius: module588.default.setSpText(8),
    },
    setTimeBoxLi: {
      flex: 1,
    },
    setTimeList: {
      height: module588.default.setSpText(44),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: module588.default.setSpText(24),
      color: '#213B5C',
    },
    setTimeBtn: {
      height: module588.default.setSpText(48),
      marginBottom: module588.default.setSpText(10),
      borderTopLeftRadius: module588.default.setSpText(2),
      borderTopRightRadius: module588.default.setSpText(2),
    },
    setType: {
      width: module588.default.setSpText(327),
      paddingHorizontal: module588.default.setSpText(10),
      paddingRight: module588.default.setSpText(18),
    },
    resetMap: {
      width: module588.default.setSpText(287),
    },
    resetMapIcon: {
      width: '100%',
      height: module588.default.setSpText(137),
      marginTop: module588.default.setSpText(-20),
    },
    resetMapTxt: {
      marginTop: module588.default.setSpText(18),
      paddingHorizontal: module588.default.setSpText(20),
      textAlign: 'justify',
      color: '#213B5C',
      fontSize: module588.default.setSpText(16),
    },
    DLBox: {
      width: ReactNative.Dimensions.get('window').width - module588.default.setSpText(80),
      height: module588.default.setSpText(191),
      padding: module588.default.setSpText(20),
    },
    Dbox: {
      flexDirection: 'row',
      borderBottomWidth: module588.default.setSpText(1),
      borderBottomColor: '#BCCCE0',
      paddingBottom: module588.default.setSpText(24),
    },
    DboxLi: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    DboxLiIcon: {
      width: module588.default.setSpText(22),
      left: module588.default.setSpText(15),
      height: module588.default.setSpText(22),
    },
    DboxLiTxt: {
      flex: 1,
      textAlign: 'center',
      width: module588.default.setSpText(150),
    },
    DboxLiBtn: {
      paddingVertical: module588.default.setSpText(5),
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: module588.default.setSpText(16),
      borderWidth: module588.default.setSpText(2),
      borderColor: '#FFF',
      fontSize: module588.default.setSpText(14),
      color: '#0A72FA',
      borderWidth: module588.default.setSpText(2),
      paddingLeft: module588.default.setSpText(5),
    },
    DboxLiActive: {
      borderColor: '#0A72FA',
      backgroundColor: 'rgba(10, 114, 250, 0.08)',
    },
    Ybox: {
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: -module588.default.setSpText(10),
    },
    volumeIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    volume: {
      flex: 1,
      height: 10,
    },
    slider: {
      marginTop: -5,
    },
    sliderNum: {
      backgroundColor: '#fff',
      width: module588.default.setSpText(45),
      height: module588.default.setSpText(20),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: module588.default.setSpText(-50),
      position: 'relative',
    },
    areaChoice: {
      position: 'absolute',
      width: module588.default.setSpText(10),
      height: module588.default.setSpText(10),
      borderWidth: module588.default.setSpText(5),
      borderTopColor: '#fff',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: module588.default.setSpText(-8),
      left: '50%',
      marginLeft: module588.default.setSpText(-18),
    },
    Gcontent: {
      alignItems: 'center',
    },
    GtypeIcon: {
      width: module588.default.setSpText(287),
      height: module588.default.setSpText(133),
      marginTop: module588.default.setSpText(-20),
      fontSize: module588.default.setSpText(16),
    },
    Gtext: {
      color: '#0A72FA',
      marginTop: module588.default.setSpText(20),
    },
    Gprompt: {
      width: '80%',
      color: '#213B5C',
      marginTop: module588.default.setSpText(20),
      marginBottom: module588.default.setSpText(20),
    },
    safeAreaViewBox: {
      width: module588.default.setSpText(327),
      height: module588.default.setSpText(320),
      padding: module588.default.setSpText(20),
    },
    wifiList: {
      flexDirection: 'row',
      position: 'relative',
    },
    wflistIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      marginTop: module588.default.setSpText(14),
      flex: 0.1,
    },
    wfName: {
      flex: 1,
      height: module588.default.setSpText(50),
      lineHeight: module588.default.setSpText(50),
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
      marginLeft: module588.default.setSpText(10),
      borderBottomWidth: module588.default.setSpText(1),
      borderColor: '#E1E7F5',
    },
    selectWfIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      position: 'absolute',
      top: '50%',
      right: 0,
      marginTop: module588.default.setSpText(-11),
    },
    isColseBtn: {
      borderWidth: 0,
      height: module588.default.setSpText(48),
      lineHeight: module588.default.setSpText(48),
      backgroundColor: '#0A72FA',
      borderRadius: 0,
      borderBottomLeftRadius: module588.default.setSpText(2),
      borderBottomRightRadius: module588.default.setSpText(2),
    },
    doubleBtn: {
      flexDirection: 'row',
    },
    doubleBtnLi: {
      backgroundColor: '#F7F9FC',
      flex: 1,
      borderWidth: 0,
      borderRadius: 0,
      height: module588.default.setSpText(48),
      fontSize: module588.default.setSpText(14),
      marginTop: module588.default.setSpText(20),
      color: '#0A72FA',
    },
    doubleBtnLiL: {
      borderBottomLeftRadius: module588.default.setSpText(2),
      color: '#0A72FA',
    },
    doubleBtnLiR: {
      borderBottomRightRadius: module588.default.setSpText(2),
      color: '#0A72FA',
    },
  }),
  k = module1179;
exports.default = k;
