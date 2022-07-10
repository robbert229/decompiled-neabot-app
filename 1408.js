require('prop-types');

require('./1188');

var module1135 = require('./1135'),
  module1117 = require('./1117'),
  module11 = require('./11'),
  module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module1145 = require('./1145'),
  module1342 = require('./1342'),
  module1147 = require('./1147'),
  module1110 = require('./1110'),
  module594 = require('./594'),
  module593 = require('./593'),
  module920 = require('./920');

require('./1196');

function A() {
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
  module1230 = (function (t) {
    module35.default(O, t);

    var module1230 = O,
      M = A(),
      B = function () {
        var t,
          s = module34.default(module1230);

        if (M) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(s, arguments, n);
        } else t = s.apply(this, arguments);

        return module37.default(this, t);
      };

    function O(t) {
      var s;
      module24.default(this, O);

      (s = B.call(this, t))._handleAppStateChange = function (t) {
        if (null != t && 'active' === t)
          s.setState(
            {
              getPropertiesData: null,
            },
            function () {
              s.getProperties();
            }
          );
      };

      s._tagNumFun = function (t) {
        s.setState({
          tagNum: t,
        });
      };

      s._sweepArea = function (t) {
        s.setState({
          sweepArea: t,
          tagNum: t,
        });
      };

      var n = s.props.route.params;
      s.state = {
        getPropertiesData: null,
        iotId: n.iotId,
        slNum: n.slNum ? n.slNum : 0,
        xlNum: n.xlNum ? n.xlNum : 0,
        AppFunction: n.AppFunction,
        nickname: n.nickname,
        cleanLiIndex: n.cleanLiIndex || 0 == n.cleanLiIndex ? n.cleanLiIndex : null,
        activeFlae: n.activeFlae ? n.activeFlae : [],
        reservationList: n.reservationList ? n.reservationList : [],
        cleanList: n.cleanList,
        areas: n.areas ? n.areas : [],
        mop: n.mop ? n.mop : null,
        setUpLi: [],
        isEdit: n.isEdit,
        isAlert: false,
        alertType: 'SET',
        setShowId: null,
        setUpList: [
          {
            name: module594.default.t('openingTime'),
            txtName: '10:00',
          },
          {
            name: module594.default.t('repeatTime'),
            txtName: module594.default.t('everyDay'),
          },
          {
            name: module594.default.t('cleaningMode'),
            txtName: module594.default.t('fullImageCleaning'),
          },
        ],
        setHour: 10,
        serMin: '00',
        repeatTime: [0, 1, 2, 3, 4, 5, 6],
        mapType: 0,
        slListImg: require('./1365'),
        xlListImg: require('./1369'),
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
        workNoisy: null,
        bottomNavIndex: null,
        timeZone: 0 - new Date().getTimezoneOffset() / 60,
        areas: null,
        tagIds: '',
        segmentTagIds: '',
        tagNum: 0,
        sweepArea: 0,
        isSetUpMap: false,
        mop: '',
        currentTime: Math.round(new Date().getTime() / 1e3).toString(),
        isTwoTime: false,
        isDisSlIcon: 0,
        connectTime: 0,
      };
      s.getProperties();
      return s;
    }

    module25.default(O, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.slType = ReactNative.DeviceEventEmitter.addListener('slTypeData', function (s) {
            t.slfunIcon(s);
          });
          this.xlType = ReactNative.DeviceEventEmitter.addListener('xlTypeData', function (s) {
            t.xlfunIcon(s);
          });
          this.areaNum = ReactNative.DeviceEventEmitter.addListener('areaNum', function (s, n) {
            console.log('\u6536\u5230\u7684\u9009\u62e9\u6216\u53d6\u6d88\u7684\u533a\u57df\u6570\u636e' + s, JSON.stringify(n));
            t.setState({
              tagNum: s,
              tagIds: n,
            });
          });
          this.selectNum = ReactNative.DeviceEventEmitter.addListener('selectNum', function (s, n) {
            console.log('\u6536\u5230\u7684\u9009\u62e9\u6216\u53d6\u6d88\u7684\u5206\u533a\u6570\u636e' + s, JSON.stringify(n));
            t.setState({
              sweepArea: s,
              tagNum: s,
              segmentTagIds: n,
            });
          });
          this.setUpMap = ReactNative.DeviceEventEmitter.addListener('setUpMap', function () {
            t.setState(
              {
                isSetUpMap: true,
              },
              function () {
                t.getProperties();
              }
            );
          });
          this.setArea = ReactNative.DeviceEventEmitter.addListener('setArea', function (s) {
            t.setState({
              areas: s,
            });
          });
          this.isSetShowArea = ReactNative.DeviceEventEmitter.addListener('isSetShowArea', function () {
            if (t.state.isSetUpMap && 1 == t.state.mapType) t.setUpCleaningState(t.state.mapType, module594.default.t('areaCleaningOnGoing'), 3);
          });
          this.mopType = ReactNative.DeviceEventEmitter.addListener('mopType', function (s) {
            t.setState({
              mop: s,
            });
          });
          ReactNative.AppState.addEventListener('change', this._handleAppStateChange);
          this.slfunIcon(this.state.slNum);
          this.xlfunIcon(this.state.xlNum);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          ReactNative.DeviceEventEmitter.emit('isMap');
          module403.default.remove(U);
          this.slType.emitter.removeAllListeners('slTypeData');
          this.xlType.emitter.removeAllListeners('xlTypeData');
          this.areaNum.emitter.removeAllListeners('areaNum');
          this.selectNum.emitter.removeAllListeners('selectNum');
          this.setUpMap.emitter.removeAllListeners('setUpMap');
          this.mopType.emitter.removeAllListeners('mopType');
          this.setArea.emitter.removeAllListeners('setArea');
          this.isSetShowArea.emitter.removeAllListeners('isSetShowArea');

          this.setState = function (t, s) {};
        },
      },
      {
        key: 'justNowTime',
        value: function () {
          var t = this,
            s = new Date(),
            n = s.getHours() < 10 ? (0 == s.getHours() ? '00' : '0' + s.getHours()) : s.getHours(),
            o = s.getMinutes() < 10 ? '0' + s.getMinutes() : s.getMinutes();
          this.setState(
            {
              setHour: n,
              serMin: o,
            },
            function () {
              t.state.setUpList[0].txtName = t.state.setHour + ':' + t.state.serMin;
              t.setState({
                setUpList: t.state.setUpList,
              });
            }
          );
        },
      },
      {
        key: 'getProperties',
        value: function () {
          var t = this;
          module593.default.get('clickRobotId').then(function (s) {
            if ('a1bp8GkMOe2' == s)
              t.setState({
                isDisSlIcon: 1,
              });
          });
          module1145.default.getProperties(this.state.iotId).then(function (s) {
            if ((module403.default.remove(U), t.justNowTime(), 200 == s.code)) {
              var n = s.data.appointment;
              if (n && n.value && 0 != n.value.length) for (var o = 0; o < n.value.length; o++) 0 == n.value[o].active && n.value.splice(o, 1);
              else (n = {}).value = [];
              t.setState(
                {
                  getPropertiesData: s,
                  setUpLi: n,
                  areas: s.data.areaList,
                  mop: s.data.mop,
                },
                function () {
                  if (t.state.isEdit && !t.state.isSetUpMap) t.isEditData();
                }
              );
            }
          });
        },
      },
      {
        key: 'isEditData',
        value: function () {
          var t = this,
            s = this.state.reservationList[this.state.cleanLiIndex];

          if (undefined != s) {
            var n = '',
              o = '',
              l = '',
              u = '',
              c = '',
              p = Math.floor(s.startTime / 86400),
              f = Math.floor((s.startTime - 24 * p * 3600) / 3600),
              h = Math.floor((s.startTime - 24 * p * 3600 - 3600 * f) / 60);

            if ((f < 10 && (f = '0' + f), h < 10 && (h = '0' + h), 0 == s.period.length)) {
              var v = new Date(1e3 * parseInt(s.startTime));
              f = v.getHours() < 10 ? '0' + v.getHours() : v.getHours();
              h = v.getMinutes() < 10 ? '0' + v.getMinutes() : v.getMinutes();
            }

            switch (s.workNoisy) {
              case 'mop':
                o = 0;
                break;

              case 'quiet':
                o = 1;
                break;

              case 'auto':
                o = 2;
                break;

              case 'strong':
                o = 3;
            }

            if (s.period)
              switch (s.period.length) {
                case 7:
                  n = module594.default.t('everyDay');
                  break;

                case 0:
                  n = module594.default.t('once');
                  break;

                default:
                  for (var T = 0; T < s.period.length; T++)
                    switch (s.period[T]) {
                      case 0:
                        n += module594.default.t('sunday') + '\u3001';
                        break;

                      case 1:
                        n += module594.default.t('onMonday') + '\u3001';
                        break;

                      case 2:
                        n += module594.default.t('onTuesday') + '\u3001';
                        break;

                      case 3:
                        n += module594.default.t('onWednesday') + '\u3001';
                        break;

                      case 4:
                        n += module594.default.t('thursday') + '\u3001';
                        break;

                      case 5:
                        n += module594.default.t('friday') + '\u3001';
                        break;

                      case 6:
                        n += module594.default.t('onSaturday') + '\u3001';
                    }
              }
            else n = module594.default.t('once');

            if (s.tagIds) {
              l = module594.default.t('areaCleaning');
              u = 1;

              if (-1 == JSON.stringify(this.state.areas.value).indexOf('normal') && -1 == JSON.stringify(this.state.areas.value).indexOf('depth')) {
                s.tagIds = [];
                c = 0;
              } else c = s.tagIds.length;

              setTimeout(function () {
                ReactNative.DeviceEventEmitter.emit('tagIds', s.tagIds);
                ReactNative.DeviceEventEmitter.emit('resetMap', false);
                ReactNative.DeviceEventEmitter.emit('mapTypeData', 2);
                ReactNative.DeviceEventEmitter.emit('autoAreas', []);
                ReactNative.DeviceEventEmitter.emit('mapAreas', t.state.areas.value);
              }, 100);
            }

            if (s.segmentTagIds) {
              l = module594.default.t('partitionCleaning');
              u = 2;
              if (this.state.areas.autoAreaValue && '' != this.state.areas.autoAreaValue) c = s.segmentTagIds.length;
              else {
                s.segmentTagIds = [];
                c = 0;
              }
              setTimeout(function () {
                ReactNative.DeviceEventEmitter.emit('segmentTagIds', s.segmentTagIds);
                ReactNative.DeviceEventEmitter.emit('resetMap', false);
                ReactNative.DeviceEventEmitter.emit('mapTypeData', 4);
                ReactNative.DeviceEventEmitter.emit('mapAreas', []);
                ReactNative.DeviceEventEmitter.emit('autoAreas', t.state.areas.autoAreaValue);
              }, 100);
            }

            if (!(s.segmentTagIds || s.tagIds)) {
              u = 0;
              l = module594.default.t('fullImageCleaning');
            }

            this.setState({
              repeatTime: s.period,
              slNum: s.waterPump,
              xlNum: o,
              workNoisy: s.workNoisy,
              setHour: f,
              serMin: h,
              setUpList: [
                {
                  name: module594.default.t('openingTime'),
                  txtName: f + ':' + h,
                },
                {
                  name: module594.default.t('repeatTime'),
                  txtName: n,
                },
                {
                  name: module594.default.t('cleaningMode'),
                  txtName: l,
                },
              ],
              tagIds: s.tagIds,
              segmentTagIds: s.segmentTagIds,
              tagNum: c,
              mapType: u,
            });
            this.slfunIcon(s.waterPump);
            this.xlfunIcon(o);
          }
        },
      },
      {
        key: 'setUpAlert',
        value: function (t) {
          this.setState({
            setShowId: t + 1,
            isAlert: true,
          });
        },
      },
      {
        key: 'closeArea',
        value: function (t) {
          var s = this;
          this.setState(
            {
              getPropertiesData: null,
            },
            function () {
              s.props.navigation.goBack();
            }
          );
        },
      },
      {
        key: 'slfunIcon',
        value: function (t) {
          var s = '';

          switch (Number(t)) {
            case 0:
              s = require('./1365');
              break;

            case 1:
              s = require('./1366');
              break;

            case 2:
              s = require('./1367');
              break;

            case 3:
              s = require('./1368');
          }

          this.setState({
            slListImg: s,
            slNum: t,
            bottomNavIndex: null,
          });
        },
      },
      {
        key: 'xlfunIcon',
        value: function (t) {
          var s = '',
            n = '';

          switch (Number(t)) {
            case 0:
              s = require('./1369');
              n = 'mop';
              break;

            case 1:
              s = require('./1370');
              n = 'quiet';
              break;

            case 2:
              s = require('./1371');
              n = 'auto';
              break;

            case 3:
              s = require('./1372');
              n = 'strong';
          }

          this.setState({
            xlListImg: s,
            xlNum: t,
            bottomNavIndex: null,
            workNoisy: n,
          });
        },
      },
      {
        key: 'bottomNav',
        value: function (t) {
          if ((this.state.bottomNavIndex == t && (t = null), 1 == t && 0 == this.state.mop)) {
            module1096.default.info(module594.default.t('waterTank'), 1, undefined, false);
            return false;
          }

          this.setState({
            bottomNavIndex: t,
          });
        },
      },
      {
        key: 'setUpAlertData',
        value: function (t) {
          if (t) {
            if (3 == t.index)
              if (this.state.mapType == t.istime) {
                this.setState({
                  isAlert: false,
                });
                return false;
              } else {
                this.setUpCleaningState(t.istime, t.name, t.index);
                return false;
              }

            if (2 == t.index) {
              this.setState({
                repeatTime: t.istime,
              });
              if (t.isAlert)
                this.setState({
                  isAlert: false,
                });
            }

            if (1 == t.index) {
              this.setState({
                isAlert: false,
              });
              this.setState({
                setHour: t.hour,
                serMin: t.min,
              });
            }

            this.setState({
              setUpList: this.state.setUpList.map(function (s, n) {
                return t.index - 1 == n
                  ? module11.default({}, s, {
                      txtName: t.name,
                    })
                  : s;
              }),
            });
          } else
            this.setState({
              isAlert: false,
            });
        },
      },
      {
        key: 'setUpCleaningState',
        value: function (t, s, n) {
          switch (
            (this.setState({
              isAlert: false,
            }),
            t)
          ) {
            case 0:
              this.setState({
                tagIds: '',
                segmentTagIds: '',
                mapType: t,
              });
              ReactNative.DeviceEventEmitter.emit('resetMap', true);
              ReactNative.DeviceEventEmitter.emit('mapTypeData', 0);
              ReactNative.DeviceEventEmitter.emit('mapAreas', []);
              ReactNative.DeviceEventEmitter.emit('autoAreas', []);
              break;

            case 1:
              if (
                ((this.state.areas.value == [] ||
                  0 == this.state.areas.value.length ||
                  (-1 == JSON.stringify(this.state.areas.value).indexOf('normal') && -1 == JSON.stringify(this.state.areas.value).indexOf('depth'))) &&
                  this.jumpArea(),
                ReactNative.DeviceEventEmitter.emit('resetMap', true),
                ReactNative.DeviceEventEmitter.emit('mapTypeData', 2),
                ReactNative.DeviceEventEmitter.emit('autoAreas', null),
                ReactNative.DeviceEventEmitter.emit('mapAreas', this.state.areas.value),
                this.state.areas.value.length <= 0 ||
                  (-1 == JSON.stringify(this.state.areas.value).indexOf('normal') && -1 == JSON.stringify(this.state.areas.value).indexOf('depth')))
              )
                this.setState({
                  tagIds: 1,
                  segmentTagIds: '',
                  tagNum: 0,
                  mapType: t,
                });
              else
                for (var u = 0; u < this.state.areas.value.length; u++)
                  if ('forbid' != this.state.areas.value[u].active) {
                    this.setState({
                      tagIds: [this.state.areas.value[u].tag],
                      segmentTagIds: '',
                      tagNum: 1,
                      mapType: t,
                    });
                    break;
                  }
              break;

            case 2:
              if (0 == this.state.areas.autoAreaValue.length) {
                module1096.default.info(module594.default.t('MapWithoutPartition'), 1, undefined, false);
                return false;
              }

              ReactNative.DeviceEventEmitter.emit('resetMap', false);
              ReactNative.DeviceEventEmitter.emit('mapTypeData', 4);
              ReactNative.DeviceEventEmitter.emit('mapAreas', null);
              ReactNative.DeviceEventEmitter.emit('autoAreas', this.state.areas.autoAreaValue);
              this.setState({
                tagIds: '',
                segmentTagIds: 1,
                tagNum: 0,
                mapType: t,
              });
          }

          this.setState({
            setUpList: this.state.setUpList.map(function (t, l) {
              return n - 1 == l
                ? module11.default({}, t, {
                    txtName: s,
                  })
                : t;
            }),
          });
        },
      },
      {
        key: 'jumpArea',
        value: function () {
          var t = this;
          module1117.default.alert(module594.default.t('Tips'), module594.default.t('noZone'), [
            {
              text: module594.default.t('cancel'),
              style: 'cancel',
            },
            {
              text: module594.default.t('btnConfirm'),
              onPress: function () {
                ReactNative.DeviceEventEmitter.emit('resetMap', false);
                ReactNative.DeviceEventEmitter.emit('mapTypeData', 2);
                ReactNative.DeviceEventEmitter.emit('autoAreas', []);
                ReactNative.DeviceEventEmitter.emit('mapAreas', []);
                t.setState(
                  {
                    getPropertiesData: null,
                  },
                  function () {
                    t.props.navigation.navigate('restrictedArea', {
                      iotId: t.state.iotId,
                      editType: 1,
                      nickname: t.state.nickname,
                      isSetUpMap: 1,
                    });
                  }
                );
              },
            },
          ]);
        },
      },
      {
        key: 'setAppointments',
        value: function () {
          var t = this,
            s = '',
            n = Number(3600 * ('00' == this.state.setHour ? '00' : this.state.setHour)) + Number(60 * this.state.serMin);

          if ((console.log('\u65f6\u95f41\uff1a' + n, 'hour:' + this.state.setHour), (this.state.repeatTime == []) | ('' == this.state.repeatTime))) {
            var o = new Date(),
              c = this.setTime(o) + ' ' + this.state.setHour + ':' + this.state.serMin + ':00';

            if (((n = Math.round(new Date(c).getTime() / 1e3)), console.log('\u65f6\u95f42\uff1a' + n), this.state.currentTime > n)) {
              var p = new Date();
              p.setTime(p.getTime() + 864e5);
              var f = this.setTime(p) + ' ' + this.state.setHour + ':' + this.state.serMin + ':00';
              n = Math.round(new Date(f).getTime() / 1e3);
              this.setState({
                isTwoTime: true,
              });
            } else
              this.setState({
                isTwoTime: false,
              });
          }

          console.log(
            '============================== setUp \u539f\u6765\u7684\u5217\u8868\u6570\u636e = ' + JSON.stringify(this.state.reservationList),
            JSON.stringify(this.state.activeFlae)
          );
          var h = module920.default.cloneDeep(this.state.reservationList),
            v = module920.default.cloneDeep(this.state.activeFlae);

          if (this.state.isEdit) {
            var T = h[this.state.cleanLiIndex];

            if (((T.waterPump = this.state.slNum), (T.workNoisy = this.state.workNoisy), 1 == this.state.mapType)) {
              if (
                ((T.tagIds = this.state.tagIds),
                this.state.areas.value == [] ||
                  0 == this.state.areas.value.length ||
                  (-1 == JSON.stringify(this.state.areas.value).indexOf('normal') && -1 == JSON.stringify(this.state.areas.value).indexOf('depth')))
              ) {
                this.jumpArea();
                return false;
              }

              if (!this.state.tagIds || 0 == this.state.tagNum) {
                module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
                return false;
              }

              delete T.segmentTagIds;
            }

            if (2 == this.state.mapType) {
              if (!this.state.segmentTagIds || 0 == this.state.tagNum) {
                module1096.default.info(module594.default.t('chooseToCleanThePartition'), 1, undefined, false);
                return false;
              }

              T.segmentTagIds = this.state.segmentTagIds;
              delete T.tagIds;
            }

            if (0 == this.state.mapType) {
              delete T.segmentTagIds;
              delete T.tagIds;
            }

            for (var S = 0; S < h.length; S++) {
              if (
                h[S].period.toString() == this.state.repeatTime.toString() &&
                (console.log('postWR====' + h[S].period.toString(), ', s = ' + n, h[S].startTime), this.state.cleanLiIndex != S && h[S].startTime == n)
              )
                return void module1096.default.info(module594.default.t('R1616989847'), 1, undefined, false);
              T.startTime = n;
              T.period = this.state.repeatTime;
            }
          } else {
            if (
              ((s = {
                active: true,
                endTime: 86400 + n - 1,
                period: this.state.repeatTime,
                startTime: n,
                unlock: true,
                waterPump: this.state.slNum,
                workNoisy: this.state.workNoisy,
              }),
              1 == this.state.mapType)
            ) {
              if (
                this.state.areas.value == [] ||
                0 == this.state.areas.value.length ||
                (-1 == JSON.stringify(this.state.areas.value).indexOf('normal') && -1 == JSON.stringify(this.state.areas.value).indexOf('depth'))
              ) {
                this.jumpArea();
                return false;
              }

              if (!this.state.tagIds || 0 == this.state.tagNum) {
                module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
                return false;
              }

              s.tagIds = this.state.tagIds;
            }

            if (2 == this.state.mapType) {
              if (!this.state.segmentTagIds || 0 == this.state.tagNum) {
                module1096.default.info(module594.default.t('chooseToCleanThePartition'), 1, undefined, false);
                return false;
              }

              s.segmentTagIds = this.state.segmentTagIds;
            }

            for (var x = 0; x < h.length; x++)
              if (
                (console.log(h[x].period.toString() + '=\u539f\u6765\u6709\u6570\u636e=====' + s.period.toString(), h[x].startTime, s.startTime),
                h[x].period.toString() == s.period.toString() && h[x].startTime == s.startTime)
              )
                return void module1096.default.info(module594.default.t('R1616989847'), 1, undefined, false);

            h.push(s);
          }

          var E = {};
          E.timeZone = this.state.timeZone;
          E.timeZoneSec = 3600 * this.state.timeZone;
          E.timestamp = Date.parse(new Date()) / 1e3;
          E.value = v.concat(h);
          U = module1096.default.loading('', 0);
          this.setState(
            {
              connectTime: 0,
            },
            function () {
              t.canconnectInterval = setInterval(function () {
                if (t.state.connectTime++ >= 20) {
                  module403.default.remove(U);
                  if (t.canconnectInterval) clearInterval(t.canconnectInterval);
                }
              }, 1e3);
            }
          );
          console.log('\u5373\u5c06\u8bf7\u6c42\u4fee\u6539\u9884\u7ea6\u6570\u636e' + JSON.stringify(E));
          module1145.default.setAppointments(this.state.iotId, JSON.stringify(E)).then(function (s) {
            if (t.canconnectInterval) clearInterval(t.canconnectInterval);
            var n = s.data;

            if ((module403.default.remove(U), 200 == n.code)) {
              Math.round(new Date().getTime());
              console.log('\u8bf7\u6c42\u6210\u529f');
              ReactNative.DeviceEventEmitter.emit('getData');
              if (t.state.isTwoTime) module1096.default.info(module594.default.t('executeTheNextDay'), 1, undefined, false);
              setTimeout(function () {
                t.props.navigation.goBack();
              }, 500);
            } else
              9201 == n.code
                ? module1096.default.info(module594.default.t('notOnline'), 1, undefined, false)
                : 29004 == n.code
                ? module1096.default.info(module594.default.t('disarmDevice'), 1, undefined, false)
                : module1096.default.info(
                    s.localMsg ? s.localMsg : s.message ? s.message : s.code ? s.code : s.data.code ? s.data.code : module594.default.t('deviceConnecting'),
                    1,
                    undefined,
                    false
                  );
          });
        },
      },
      {
        key: 'setTime',
        value: function (t) {
          return t.getFullYear() + '/' + (t.getMonth() + 1 < 10 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1) + '/' + (t.getDate() < 10 ? '0' + t.getDate() : t.getDate());
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
                  flexDirection: 'column',
                },
              },
              React.default.createElement(ReactNative.View, {
                style: {
                  height: module588.default.setSpText(220),
                },
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 1,
                  },
                },
                null != this.state.getPropertiesData
                  ? React.default.createElement(module1342.default, {
                      ref: 'lghTest',
                      getPropertiesData: this.state.getPropertiesData,
                      status: false,
                      isTimeData: false,
                      isSetUp: true,
                      tagNumFun: this._tagNumFun,
                      showPath: true,
                      sweepArea: this._sweepArea,
                      mapFunctionType: 1,
                      AppFunction: this.state.AppFunction,
                    })
                  : null
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: b.topBox,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: b.cleanTopContent,
                  },
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      onPress: function () {
                        t.closeArea();
                      },
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: require('./1256'),
                      style: [b.cleanIcon],
                    })
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: b.cleanTitleContent,
                    },
                    ' ',
                    module594.default.t('appointmentSetting'),
                    ' '
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: b.setUpTop,
                  },
                  this.state.setUpList.map(function (s, n) {
                    return React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        key: n,
                        style: b.setUpTopLi,
                        onPress: function () {
                          return t.setUpAlert(n);
                        },
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: b.setUpTopLiLeft,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: b.setUpTopLiTitle,
                          },
                          s.name
                        ),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: b.setUpTopLiSelect,
                          },
                          s.txtName
                        )
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: b.setUpTopLiRight,
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1230'),
                          resizeMode: 'contain',
                          style: b.setUpTopLiIcon,
                        })
                      )
                    );
                  })
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: b.setUpBottom,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: b.setUpBottomGear,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: b.setUpBottomGearLi,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: b.setUpBottomGearLiLeft,
                      },
                      1 == this.state.bottomNavIndex
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: b.setUpBottomGearLiLeftLi,
                            },
                            this.state.slList.map(function (s, n) {
                              return React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  key: n,
                                  onPress: function () {
                                    t.slfunIcon(n);
                                  },
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: t.state.slNum == n ? t.state.slListImg : s.img,
                                  key: n,
                                  resizeMode: 'contain',
                                  style: b.setUpBottomleftIcon,
                                })
                              );
                            })
                          )
                        : null
                    ),
                    0 == this.state.isDisSlIcon
                      ? React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            style: b.setUpBottomGearLiRight,
                            onPress: function () {
                              t.bottomNav(1);
                            },
                          },
                          React.default.createElement(ReactNative.Text, null, module594.default.t('hydraulic'), '(', this.state.slNum, ')', ' '),
                          React.default.createElement(ReactNative.Image, {
                            source: this.state.slListImg,
                            resizeMode: 'contain',
                            style: b.setUpBottomGearIcon,
                          })
                        )
                      : null
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: b.setUpBottomGearLi,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: b.setUpBottomGearLiLeft,
                      },
                      0 == this.state.bottomNavIndex
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: b.setUpBottomGearLiLeftLi,
                            },
                            this.state.xlList.map(function (s, n) {
                              return React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  key: n,
                                  onPress: function () {
                                    t.xlfunIcon(n);
                                  },
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: t.state.xlNum == n ? t.state.xlListImg : s.img,
                                  resizeMode: 'contain',
                                  style: b.setUpBottomleftIcon,
                                })
                              );
                            })
                          )
                        : null
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: b.setUpBottomGearLiRight,
                        onPress: function () {
                          t.bottomNav(0);
                        },
                      },
                      React.default.createElement(ReactNative.Text, null, module594.default.t('suction'), '(', this.state.xlNum, ')', ' '),
                      React.default.createElement(ReactNative.Image, {
                        source: this.state.xlListImg,
                        resizeMode: 'contain',
                        style: b.setUpBottomGearIcon,
                      })
                    )
                  )
                ),
                this.state.tagIds || this.state.segmentTagIds
                  ? React.default.createElement(
                      module1135.default,
                      {
                        type: 'primary',
                        size: 'small',
                        style: b.setUpBottomBtn,
                        onPress: function () {
                          return module1110.default(function () {
                            t.setAppointments();
                          });
                        },
                      },
                      'en' == module594.default.locale
                        ? module594.default
                            .t('partitionSave')
                            .replace(/\%/g, this.state.tagNum)
                            .replace('have', this.state.tagNum > 1 ? 'have' : 'has')
                            .replace('rooms', this.state.tagNum > 1 ? 'rooms' : 'room')
                        : module594.default.t('partitionSave').replace(/\%/g, this.state.tagNum)
                    )
                  : React.default.createElement(
                      module1135.default,
                      {
                        type: 'primary',
                        size: 'small',
                        style: b.setUpBottomBtn,
                        onPress: function () {
                          return module1110.default(function () {
                            t.setAppointments();
                          });
                        },
                      },
                      module594.default.t('carryOut')
                    )
              ),
              this.state.isAlert
                ? React.default.createElement(module1147.default, {
                    isShow: this.state.isAlert,
                    isType: this.state.alertType,
                    isData: {
                      setShowId: this.state.setShowId,
                      timeData: {
                        TimeHour: this.state.setHour,
                        TimeMinute: this.state.serMin,
                      },
                      periodData: this.state.repeatTime,
                      tagIds: this.state.tagIds,
                      segmentTagIds: this.state.segmentTagIds,
                    },
                    onPick: function (s) {
                      t.setUpAlertData(s);
                    },
                    onData: function (t) {},
                  })
                : null
            )
          );
        },
      },
    ]);
    return O;
  })(React.default.Component);

exports.setUp = module1230;
var b = ReactNative.StyleSheet.create({
    setUpBottomleftIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      marginRight: module588.default.setSpText(10),
    },
    setUpBottomGearIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    setUpBottomGearLiRight: {
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingVertical: module588.default.setSpText(10),
      paddingHorizontal: module588.default.setSpText(10),
      borderRadius: module588.default.setSpText(3),
    },
    setUpBottomGearLiLeft: {
      flex: 1,
      textAlign: 'right',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    setUpBottomGearLiLeftLi: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      paddingVertical: module588.default.setSpText(10),
      paddingHorizontal: module588.default.setSpText(10),
      paddingRight: 0,
      marginRight: module588.default.setSpText(10),
      borderRadius: module588.default.setSpText(3),
    },
    setUpBottomGearLi: {
      flexDirection: 'row',
      marginTop: module588.default.setSpText(10),
    },
    setUpBottomGear: {
      marginBottom: module588.default.setSpText(10),
    },
    cleanTopContent: {
      flexDirection: 'row',
      paddingTop: module588.default.setSpText(12),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(10),
      paddingBottom: module588.default.setSpText(10),
    },
    cleanIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    cleanTitleContent: {
      flex: 1,
      textAlign: 'center',
      color: '#11243D',
      fontSize: module588.default.setSpText(16),
    },
    topBox: {
      position: 'absolute',
      width: '100%',
      backgroundColor: '#F7F9FC',
      top: 0,
      left: 0,
    },
    setUpTop: {
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(20),
      marginTop: module588.default.setSpText(10),
    },
    setUpBottomBtn: {
      backgroundColor: '#0A72FA',
      color: '#fff',
      height: module588.default.setSpText(48),
      borderRadius: module588.default.setSpText(16),
      fontSize: module588.default.setSpText(16),
    },
    setUpBottom: {
      position: 'absolute',
      width: '100%',
      paddingHorizontal: module588.default.setSpText(20),
      paddingBottom: module588.default.setSpText(20),
      bottom: 0,
    },
    setUpTopLiRight: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    setUpTopLiSelect: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(14),
      marginTop: module588.default.setSpText(3),
    },
    setUpTopLiTitle: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(12),
    },
    setUpTopLiIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    setUpTopLiLeft: {
      flex: 1,
    },
    setUpTopLi: {
      flexDirection: 'row',
      paddingVertical: module588.default.setSpText(10),
      borderBottomColor: '#E1E7F5',
      borderBottomWidth: module588.default.setSpText(1),
    },
  }),
  M = module1230;
exports.default = M;
