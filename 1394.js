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
  module588 = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = I(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('./588')),
  module1145 = require('./1145'),
  module1342 = require('./1342'),
  module594 = require('./594'),
  module593 = require('./593');

require('./920');

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (I = function (t) {
    return t ? n : o;
  })(t);
}

function D() {
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

var A = '',
  module1402 = (function (t) {
    module35.default(b, t);

    var I = b,
      module1402 = D(),
      F = function () {
        var t,
          o = module34.default(I);

        if (module1402) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var o;
      module24.default(this, b);

      (o = F.call(this, t))._sweepArea = function (t) {
        o.setState({
          sweepArea: t,
          tagNum: t,
        });
      };

      o._handleAppStateChange = function (t) {
        if (null != t && 'active' === t)
          o.setState(
            {
              getPropertiesData: null,
            },
            function () {
              o.getProperties();
            }
          );
      };

      var n = JSON.stringify(o.props.route.params);
      o.state = {
        cleanIndexEdit: JSON.parse(n).cleanIndexEdit,
        iotId: JSON.parse(n).iotId,
        nickname: JSON.parse(n).nickname,
        AppFunction: JSON.parse(n).AppFunction,
        navIndex: JSON.parse(n).navIndex,
        getPropertiesData: null,
        partitionBData: [
          {
            name: module594.default.t('resetPartition'),
            img: require('./1395'),
          },
          {
            name: module594.default.t('delPartition'),
            img: require('./1396'),
          },
          {
            name: module594.default.t('ediltPartition'),
            img: require('./1397'),
          },
          {
            name: module594.default.t('splitPartition'),
            img: require('./1398'),
          },
          {
            name: module594.default.t('mergePartition'),
            img: require('./1399'),
          },
        ],
        FrequencyNum: 1,
        FrequencyIcon: require('./1381'),
        editTopTxt: null,
        cleanBottomEditIcon: null,
        isShowEdit: false,
        editType: null,
        isEditInput: false,
        areas: null,
        sweepareaData: null,
        sweepareaDataAutoId: null,
        autoAreaValueIndex: null,
        roomName: module594.default.t('edit'),
        inputBoxBottom: null,
        segmentTagIds: [],
        tagNum: 0,
        sweepArea: 0,
        backListener: null,
        areasLength: null,
        navEditIndex: null,
        editTextStatue: 0,
        disSaveBtn: false,
      };
      A = module1096.default.loading();
      return o;
    }

    module25.default(b, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.getProperties();
          this.selectNum = ReactNative.DeviceEventEmitter.addListener('selectNum', function (o, n) {
            t.setState({
              tagNum: o,
              segmentTagIds: n,
            });
          });
          this.limitNum = ReactNative.DeviceEventEmitter.addListener('LocalLimitAreaTips', function (t) {
            module1096.default.info(module594.default.t('chooseToCleanThePartition15'), 1, undefined, false);
          });
          this.areasMapData = ReactNative.DeviceEventEmitter.addListener('areasMapData', function (o) {
            console.log(
              '\u6536\u5230\u533a\u57df\u6e05\u626b  \u7f16\u8f91\u533a\u57df\u5730\u56fe\u957f\u8fde\u8fd4\u56de\u8986\u76d6\u4e4b\u524d\u7684\u6570\u636e' + JSON.stringify(o)
            );
            t.setState({
              areas: o,
            });
          });
          this.keyboardDidShowListener = ReactNative.Keyboard.addListener('keyboardDidShow', function (o) {
            if ('android' != ReactNative.Platform.OS)
              t.setState({
                inputBoxBottom: o.endCoordinates.height,
              });
            else
              t.setState({
                inputBoxBottom: 105,
              });
          });
          this.keyboardDidHideListener = ReactNative.Keyboard.addListener('keyboardDidHide', function (o) {
            t.setState({
              inputBoxBottom: null,
            });
          });
          this.clickSweepArea = ReactNative.DeviceEventEmitter.addListener('clickSweepArea', function (t) {
            console.log('-----------------------\u5206\u533a\u4e0a\u9650\u7684\u65f6\u5019\u63d0\u793a' + JSON.stringify(t));
            if (4 == t) module1096.default.info(module594.default.t('chooseToCleanThePartition15'), 1, undefined, false);
          });
          this.areasLengthDa = ReactNative.DeviceEventEmitter.addListener('areasLengthDa', function (o) {
            console.log('============\u5206\u533a\u5212\u5206\u3001\u5408\u5e76 \u6570\u91cf = ' + o.autoAreaValue.length);
            t.setState({
              tagNum: 0,
              areasLength: o.autoAreaValue.length,
              areas: o,
            });
            ReactNative.DeviceEventEmitter.emit('resetMap', true);
            module593.default.save('partitionsNum', o.autoAreaValue.length);
            ReactNative.DeviceEventEmitter.emit('autoAreas', o.autoAreaValue);
            ReactNative.DeviceEventEmitter.emit('mapAreas', o.value);
          });
          ReactNative.AppState.addEventListener('change', this._handleAppStateChange);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.setState({
            getPropertiesData: null,
          });
          console.log('=========================== cleanIndexedit = ' + this.state.cleanIndexEdit);
          if ('android' == ReactNative.Platform.OS) {
            if (this.state.cleanIndexEdit) ReactNative.DeviceEventEmitter.emit('isMap');
          } else
            ReactNative.DeviceEventEmitter.emit('isMap', {
              changeType: false,
            });
          module403.default.remove(A);
          if (this.keyboardDidShowListener) this.keyboardDidShowListener.emitter.removeAllListeners('keyboardDidShowListener');
          if (this.areasMapData) this.areasMapData.emitter.removeAllListeners('areasMapData');
          if (this.clickSweepArea) this.clickSweepArea.emitter.removeAllListeners('clickSweepArea');
          if (this.areasLengthDa) this.areasLengthDa.emitter.removeAllListeners('areasLengthDa');
          if (this.selectNum) this.selectNum.emitter.removeAllListeners('selectNum');
          if (this.limitNum) this.limitNum.emitter.removeAllListeners('LocalLimitAreaTips');

          this.setState = function (t, o) {};
        },
      },
      {
        key: 'getProperties',
        value: function () {
          var t = this;
          module1145.default.getProperties(this.state.iotId).then(function (o) {
            if ((module403.default.remove(A), 200 == o.code)) {
              var l = o.data;
              console.log('msgData.areaList.autoAreaValue.length :' + l.areaList.autoAreaValue.length);
              if (l && l.areaList)
                t.setState(
                  {
                    getPropertiesData: o,
                    areas: l.areaList,
                    areasLength: l.areaList.autoAreaValue.length,
                  },
                  function () {
                    ReactNative.DeviceEventEmitter.emit('mapTypeData', 5);
                    ReactNative.DeviceEventEmitter.emit('autoAreas', l.areaList.autoAreaValue);
                    ReactNative.DeviceEventEmitter.emit('mapAreas', l.areaList.value);
                    ReactNative.DeviceEventEmitter.emit('mapPatDel');
                  }
                );
              else
                t.setState(
                  {
                    getPropertiesData: o,
                  },
                  function () {
                    ReactNative.DeviceEventEmitter.emit('mapTypeData', 5);
                    ReactNative.DeviceEventEmitter.emit('mapPatDel');
                    ReactNative.DeviceEventEmitter.emit('autoAreas', t.state.areas.autoAreaValue);
                    ReactNative.DeviceEventEmitter.emit('mapAreas', t.state.areas.value);
                  }
                );
            }
          });
        },
      },
      {
        key: '_isPartitionMap',
        value: function () {
          if (null != this.state.navEditIndex && this.state.navEditIndex > 1) this.bottomShowEdit(this.state.navEditIndex);
        },
      },
      {
        key: '_autoAreaFun',
        value: function () {
          console.log(
            '====================\u5212\u533a\u3001\u5408\u5e76\u8fd4\u56de\u65f6\u5019\u91cd\u65b0\u6e32\u67d3\u533a\u57df\u540d\u79f0 autoAreas = ' +
              JSON.stringify(this.state.areas.autoAreaValue)
          );
          console.log(
            '====================\u5212\u533a\u3001\u5408\u5e76\u8fd4\u56de\u65f6\u5019\u91cd\u65b0\u6e32\u67d3\u533a\u57df\u540d\u79f0 mapAreas = ' +
              JSON.stringify(this.state.areas.value)
          );
          ReactNative.DeviceEventEmitter.emit('autoAreas', this.state.areas.autoAreaValue);
          ReactNative.DeviceEventEmitter.emit('mapAreas', this.state.areas.value);
        },
      },
      {
        key: 'bottomShowEdit',
        value: function (t) {
          var o = this;
          if (!this.noMapData()) return false;

          switch (
            (Number(t) > 1 &&
              module1145.default.hasAutoArea().then(function (n) {
                if (200 != n) {
                  module1096.default.info(module594.default.t('noPartitionCurrently'), 1, undefined, false);
                  return false;
                }

                o.setState({
                  isShowEdit: true,
                  editTextStatue: 0,
                  editType: t,
                });
                ReactNative.DeviceEventEmitter.emit('mapTypeData', 5);
              }),
            Number(t))
          ) {
            case 0:
              A = module1096.default.loading();
              module1145.default.autoResetAreaService(this.state.iotId).then(function (t) {
                if (200 == t.data.code) {
                  var n = 'ios' === ReactNative.Platform.OS ? t.data.data : JSON.parse(t.data.data);

                  if (n && n.ErrorCode && n.ErrorCode < 0 && n.Info) {
                    if (!(('ko' != module594.default.locale && 'en' != module594.default.locale) || 'auto area map first clean' != n.Info))
                      n.Info = module594.default.t('autoAreaMapFirstClean');
                    module1096.default.info(n.Info, 1, undefined, false);
                  }

                  if ('ios' == ReactNative.Platform.OS)
                    o.setState(
                      {
                        getPropertiesData: null,
                      },
                      function () {
                        o.getProperties();
                      }
                    );
                }
              });
              break;

            case 1:
              A = module1096.default.loading();
              module1145.default.autoClearAreaService(this.state.iotId).then(
                function (t) {
                  if (200 == t.data.code) {
                    var o = 'ios' === ReactNative.Platform.OS ? t.data.data : JSON.parse(t.data.data);
                    if (o && o.ErrorCode && o.ErrorCode < 0 && o.Info) module1096.default.info(o.Info, 1, undefined, false);
                  } else module1096.default.info(t.localMsg ? t.localMsg : t.message, 1, undefined, false);
                },
                function (t, o) {
                  if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                    var s = 0;
                    Object.keys(t).map(function (o) {
                      if ('code' == o) {
                        var n = t[o];
                        if (1101354 == n) s = n;
                      }
                    });

                    if (1101354 == s) {
                      module403.default.remove(A);
                      module1096.default.info(module594.default.t('noPartitionCurrently'), 1, undefined, false);
                    }
                  }
                }
              );
              break;

            case 2:
              ReactNative.DeviceEventEmitter.emit('resetMap', false);
              ReactNative.DeviceEventEmitter.emit('autoEditMode', 0);
              this.setState({
                tagNum: 0,
                cleanBottomEditIcon: require('./1400'),
                editTopTxt: module594.default.t('renameThePartitionName'),
              });
              break;

            case 3:
              ReactNative.DeviceEventEmitter.emit('resetMap', false);
              ReactNative.DeviceEventEmitter.emit('autoEditMode', 1);
              this.setState({
                tagNum: 0,
                cleanBottomEditIcon: require('./1398'),
                editTopTxt: module594.default.t('underline'),
              });
              break;

            case 4:
              ReactNative.DeviceEventEmitter.emit('resetMap', false);
              ReactNative.DeviceEventEmitter.emit('autoEditMode', 2);
              this.setState({
                tagNum: 0,
                cleanBottomEditIcon: require('./1399'),
                editTopTxt: module594.default.t('partitionMerge'),
              });
          }

          this.setState({
            navEditIndex: t,
          });
        },
      },
      {
        key: 'editSave',
        value: function () {
          var t = this;

          switch (
            (this.setState({
              disSaveBtn: false,
            }),
            this.state.editType)
          ) {
            case 2:
              if ('ios' == ReactNative.Platform.OS);
              else if (0 == this.state.tagNum) {
                module1096.default.info(module594.default.t('pleaseSelectPartitionFirst'), 1, undefined, false);
                return false;
              }
              A = module1096.default.loading('', 0);
              var s = false;
              setTimeout(function () {
                if (!s) module403.default.remove(A);
              }, 1e4);
              module1145.default.saveAreas2Service(this.state.iotId).then(function (o) {
                console.log('ControlApiModule.saveAreas2Service===' + JSON.stringify(o));
                if (200 == o.data.code)
                  setTimeout(function () {
                    module1096.default.info(module594.default.t('savedSuccessfully'), 1, undefined, false);
                    t.setState(
                      {
                        isShowEdit: false,
                        editType: null,
                        FrequencyNum: t.state.FrequencyNum,
                        editTextStatue: 0,
                      },
                      function () {
                        setTimeout(function () {
                          ReactNative.DeviceEventEmitter.emit('autoEditMode', 3);
                          ReactNative.DeviceEventEmitter.emit('resetMap', true);
                          module403.default.remove(A);
                          s = true;
                        }, 200);
                      }
                    );
                  }, 500);
                else {
                  module403.default.remove(A);
                  s = true;
                  if ('1101354' == o.code) module1096.default.info(module594.default.t('pleaseSelectPartitionFirst'), 1, undefined, false);
                  else if (9201 == o.code) module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
                }
              });
              break;

            case 3:
              if ('ios' == ReactNative.Platform.OS)
                module593.default.get('partitionsNum').then(function (o) {
                  console.log('tags======>>>' + JSON.stringify(o) + 'this.state.tagNum' + t.state.tagNum);

                  if (15 == o) {
                    module1096.default.info(module594.default.t('chooseToCleanThePartition15'), 1, undefined, false);
                    return false;
                  } else if ('android' == ReactNative.Platform.OS && 0 == t.state.tagNum) {
                    module1096.default.info(module594.default.t('chooseToCleanThePartition3'), 1, undefined, false);
                    return false;
                  } else {
                    A = module1096.default.loading('', 0);
                    return void module1145.default.autoSplitAreaService(t.state.iotId).then(function (t) {
                      module403.default.remove(A);
                      if (t.data && 200 == t.data.code) ReactNative.DeviceEventEmitter.emit('resetMap', true);
                      else if ('1101354' == t.code) module1096.default.info(module594.default.t('chooseToCleanThePartition3'), 1, undefined, false);
                    });
                  }
                });
              else {
                if (15 == this.state.areasLength) {
                  module1096.default.info(module594.default.t('chooseToCleanThePartition15'), 1, undefined, false);
                  return false;
                }

                A = module1096.default.loading('', 0);
                module1145.default.autoSplitAreaService(this.state.iotId).then(function (o) {
                  if ((module403.default.remove(A), o.data && 200 == o.data.code)) {
                    if (o.data.data) {
                      var s = 'ios' === ReactNative.Platform.OS ? o.data.data : JSON.parse(o.data.data);
                      if (-1 == s.ErrorCode || -2 == s.ErrorCode || -3 == s.ErrorCode || -6 == s.ErrorCode)
                        -2 == s.ErrorCode
                          ? module1096.default.info(module594.default.t('mapTooSmall'), 2, undefined, false)
                          : module1096.default.info(s.Info ? s.Info : 'error', 2, undefined, false);
                      else if (0 == s.ErrorCode)
                        t.setState(
                          {
                            getPropertiesData: null,
                          },
                          function () {
                            t.getProperties();
                          }
                        );
                      else if (s.ErrorCode) module1096.default.info(s.Info ? s.Info : 'combin error', 2, undefined, false);
                      else ReactNative.DeviceEventEmitter.emit('resetMap', true);
                    } else ReactNative.DeviceEventEmitter.emit('resetMap', true);
                  } else {
                    if (o && o.data) module1096.default.info(o.data.message ? o.data.message : o.data.localMsg ? o.data.localMsg : o.data.code, 1, undefined, false);
                    else if (o.hasOwnProperty('msg')) module1096.default.info(o.msg, 1, undefined, false);
                    else module1096.default.info(o.code, 1, undefined, false);
                    ReactNative.DeviceEventEmitter.emit('resetMap', true);
                  }
                });
              }
              break;

            case 4:
              ReactNative.Platform.OS;
              module1117.default.alert(module594.default.t('isSelectPartition'), module594.default.t('unrecoverableMerge'), [
                {
                  text: module594.default.t('cancel'),
                  style: 'cancel',
                },
                {
                  text: module594.default.t('btnConfirm1'),
                  onPress: function () {
                    A = module1096.default.loading('', 0);
                    var o = false;
                    setTimeout(function () {
                      if (!o) module403.default.remove(A);
                    }, 1e4);
                    module1145.default.autoMergeAreaService(t.state.iotId).then(
                      function (s) {
                        if (
                          (module403.default.remove(A), (o = true), console.log('===\u5408\u5e76\u5206\u533a\u7ed3\u679c==>>>' + JSON.stringify(s)), s.data && 200 == s.data.code)
                        ) {
                          if (s.data.data) {
                            var u = 'ios' === ReactNative.Platform.OS ? s.data.data : JSON.parse(s.data.data);
                            if (-1 == u.ErrorCode || -2 == u.ErrorCode || -3 == u.ErrorCode || -6 == u.ErrorCode)
                              module1096.default.info(u.Info ? u.Info : u.ErrorCode, 2, undefined, false);
                            else if (0 == u.ErrorCode) {
                              ReactNative.DeviceEventEmitter.emit('resetMap', true);
                              t.setState(
                                {
                                  getPropertiesData: null,
                                },
                                function () {
                                  t.getProperties();
                                }
                              );
                            } else {
                              if (u.ErrorCode) module1096.default.info(u.Info ? u.Info : u.ErrorCode, 2, undefined, false);
                              ReactNative.DeviceEventEmitter.emit('resetMap', true);
                            }
                          } else ReactNative.DeviceEventEmitter.emit('resetMap', true);
                        } else
                          '1101354' == s.code
                            ? module1096.default.info(module594.default.t('chooseToCleanThePartition2'), 1, undefined, false)
                            : module593.default.get('userData').then(function (t) {
                                var o = {};
                                if (t) o = t;
                                JSON.stringify(o);
                                JSON.stringify(s);
                                console.log('\u83b7\u53d6\u5408\u5e76\u5206\u533a\u6570\u636e \u9519\u8bef\u274c' + JSON.stringify(s));
                              });
                      },
                      function (t, s) {
                        if (
                          (console.log('code:' + JSON.stringify(t), 'message:' + JSON.stringify(s)),
                          module403.default.remove(A),
                          (o = true),
                          (t = 'string' == typeof t ? JSON.parse(t) : t),
                          '[object Error]' == Object.prototype.toString.call(t))
                        ) {
                          var u = 0,
                            c = '';
                          Object.keys(t).map(function (o) {
                            if ('code' == o) {
                              var n = t[o];
                              u = n;
                            }

                            if ('message' == o) c = t[o];
                          });
                          if (1101354 == u) module1096.default.info(module594.default.t('noNetwork'), 2, undefined, false);
                          else module1096.default.info(c, 1, undefined, false);
                        }
                      }
                    );
                  },
                },
              ]);
          }
        },
      },
      {
        key: 'sdFrequency',
        value: function () {
          var t = this;
          if ('android' == ReactNative.Platform.OS && 0 == this.state.tagNum) module1096.default.info(module594.default.t('pleaseSelectPartitionFirst'), 1, undefined, false);
          else {
            if (this.state.FrequencyNum < 2) this.state.FrequencyNum++;
            else this.state.FrequencyNum--;
            this.setState(
              {
                disSaveBtn: true,
                FrequencyNum: this.state.FrequencyNum,
              },
              function () {
                console.log('------------------------\u6e05\u626b\u6b21\u6570 = ' + t.state.FrequencyNum);
                ReactNative.DeviceEventEmitter.emit('cleanTimes', t.state.FrequencyNum);
                t.sdFrequencyIcon();
              }
            );
          }
        },
      },
      {
        key: 'sdFrequencyIcon',
        value: function () {
          switch ((console.log('------------------------\u6e05\u626b\u6b21\u6570 sdFrequencyIcon = ' + this.state.FrequencyNum), this.state.FrequencyNum)) {
            case 1:
              this.setState({
                FrequencyIcon: require('./1381'),
              });
              break;

            case 2:
              this.setState({
                FrequencyIcon: require('./1382'),
              });
              break;

            case 3:
              this.setState({
                FrequencyIcon: require('./1383'),
              });
          }
        },
      },
      {
        key: 'mapSweeparea',
        value: function (t, o) {
          if (
            (console.log('\u5730\u56fe\u8fd4\u56de\u7684\u7f16\u8f91\u5206\u533a\u7684\u6570\u636e \u5982\u6e05\u626b\u6b21\u6570\u3001\u5206\u533a\u540d' + JSON.stringify(t), o),
            null != t && !module588.isEmptyObject(t))
          ) {
            if ('normal' == t.active) this.state.FrequencyNum = 1;
            if ('depth' == t.active) this.state.FrequencyNum = 2;
            var n = '',
              l = '',
              s = 0;

            if (this.state.areas) {
              var u = this.state.areas;
              if (
                (console.log('areasValue=\u5206\u533a\u6570\u636e==-------\u7528\u4e8e\u4fee\u6539\u663e\u793a\u72b6\u6001=>' + JSON.stringify(u.autoAreaValue)), u.autoAreaValue)
              )
                for (var c = 0; c < u.autoAreaValue.length; c++) u.autoAreaValue[c].id == o && ((n = u.autoAreaValue[c].name), (l = u.autoAreaValue[c].tag));
              if (1 == t.selected) s = 1;
            } else s = 1;

            if ('ios' == ReactNative.Platform.OS) {
              if (!t.id) t.id = o ? Number(o) : Number(t.name);

              if ('' != n && undefined != n) {
                t.name = n;
                t.rname = n;
              } else t.name = l;

              if ('' != l && undefined != l) {
                t.tag = l;
                t.rtag = l;
              } else t.tag = n;
            }

            console.log('data----\u5904\u7406\u540e\u7684\u6570\u636e--' + JSON.stringify(t), 'roomName:' + f);
            var f = t.tag ? t.tag : t.name ? t.name : t.id ? t.id.toString() : '';
            this.setState({
              sweepareaData: t,
              roomName: f,
              FrequencyNum: this.state.FrequencyNum,
              sweepareaDataAutoId: o,
              editTextStatue: s,
              autoAreaValueIndex: null,
            });
            this.sdFrequencyIcon();
          }
        },
      },
      {
        key: 'roomNameFun',
        value: function (t) {
          this.setState(
            {
              roomName: t,
            },
            function () {
              ReactNative.DeviceEventEmitter.emit('touchName', t);
            }
          );
        },
      },
      {
        key: 'closeArea',
        value: function () {
          this.props.navigation.pop();
        },
      },
      {
        key: 'noMapData',
        value: function () {
          if (this.state.getPropertiesData && '' != this.state.getPropertiesData) {
            var t = JSON.parse(this.state.getPropertiesData.data.map).data,
              o = t.height,
              n = t.width;

            if (o < 20 && n < 20) {
              module1096.default.info(module594.default.t('noMapData'), 1, undefined, false);
              return false;
            }
          }

          return true;
        },
      },
      {
        key: '_genExists',
        value: function () {
          return React.default.createElement(module1342.default, {
            ref: 'partitionMap',
            sweepArea: this._sweepArea.bind(this),
            isPartitionMap: true,
            getPropertiesData: this.state.getPropertiesData,
            mapSweeparea: this.mapSweeparea.bind(this),
            isPartitionMapFun: this._isPartitionMap.bind(this),
            status: true,
            AppFunction: this.state.AppFunction,
            autoAreaFun: this._autoAreaFun.bind(this),
            showPath: true,
          });
        },
      },
      {
        key: '_genNotExists',
        value: function () {
          return React.default.createElement(ReactNative.View, null);
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
                style: {
                  flex: 1,
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
                null != this.state.getPropertiesData ? this._genExists() : this._genNotExists()
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: w.cleanTop,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: w.cleanTopBpx,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: w.cleanTopContent,
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
                        style: [w.cleanIcon],
                        resizeMode: 'contain',
                      })
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: w.cleanTitle,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: w.cleanTitleContent,
                        },
                        this.state.nickname
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: w.cleanTitleStatus,
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1384'),
                          resizeMode: 'contain',
                          style: w.clearImg,
                        }),
                        React.default.createElement(
                          ReactNative.Text,
                          null,
                          module594.default.t('partition'),
                          ':',
                          ' ',
                          this.state.areas ? this.state.areas.autoAreaValue.length : 0,
                          ' '
                        )
                      )
                    )
                  ),
                  this.state.isShowEdit
                    ? React.default.createElement(
                        ReactNative.View,
                        {
                          style: w.editTopTxt,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: w.editTopTxtCentent,
                            numberOfLines: 0,
                            ellipsizeMode: 'tail',
                          },
                          this.state.editTopTxt
                        )
                      )
                    : null
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    w.cleanBottom,
                    {
                      bottom: this.state.inputBoxBottom ? this.state.inputBoxBottom : module588.default.setSpText(12),
                    },
                  ],
                },
                this.state.isShowEdit
                  ? React.default.createElement(
                      ReactNative.View,
                      {
                        style: w.cleanBottomEdit,
                      },
                      2 == this.state.editType
                        ? React.default.createElement(
                            ReactNative.View,
                            {
                              style: w.EditFq,
                            },
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: w.EditFqLi,
                              },
                              1 == this.state.editTextStatue
                                ? React.default.createElement(
                                    ReactNative.TouchableOpacity,
                                    {
                                      style: [w.EditFqLiIcon, w.EditFqLiLeft],
                                      onPress: function () {
                                        console.log('\u7f16\u8f91\u5206\u533a' + JSON.stringify(t.state.sweepareaData));
                                        if (t.state.sweepareaData)
                                          t.setState({
                                            isEditInput: true,
                                            editTextStatue: 2,
                                          });
                                        else module1096.default.info(module594.default.t('pleaseSelectPartitionFirst'), 1, undefined, false);
                                      },
                                    },
                                    React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: w.EditFqLiRigheIcon,
                                      },
                                      this.state.roomName
                                    ),
                                    React.default.createElement(ReactNative.Image, {
                                      source: require('./1401'),
                                      resizeMode: 'contain',
                                      style: [w.cleanBottomEditIconImg],
                                    })
                                  )
                                : null,
                              2 == this.state.editTextStatue
                                ? React.default.createElement(
                                    ReactNative.View,
                                    {
                                      style: [w.EditFqLiInput],
                                    },
                                    React.default.createElement(ReactNative.TextInput, {
                                      placeholder: module594.default.t('enterNaming'),
                                      value: this.state.roomName,
                                      editable: true,
                                      maxLength: 32,
                                      placeholderTextColor: '#CCCCCC',
                                      enablesReturnKeyAutomatically: true,
                                      returnKeyType: 'done',
                                      onSubmitEditing: ReactNative.Keyboard.dismiss,
                                      clear: true,
                                      onChangeText: function (o) {
                                        if ('android' == ReactNative.Platform.OS)
                                          t.setState({
                                            roomName: o,
                                          });
                                        else t.roomNameFun(o);
                                      },
                                      onBlur: function (o) {
                                        var n = t.state.areas;

                                        if (t.state.autoAreaValueIndex) {
                                          n.autoAreaValue[t.state.autoAreaValueIndex].tag = t.state.roomName;
                                          t.setState({
                                            areas: n,
                                          });
                                        } else
                                          for (var l = 0; l < n.autoAreaValue.length; l++)
                                            n.autoAreaValue[l].id == t.state.sweepareaDataAutoId &&
                                              t.setState({
                                                autoAreaValueIndex: l,
                                              });
                                      },
                                      style: w.EditFqLiInputTxt,
                                      autoCapitalize: 'none',
                                      autoCorrect: false,
                                    }),
                                    React.default.createElement(
                                      ReactNative.TouchableOpacity,
                                      {
                                        style: [w.EditFqLiInputImgBox],
                                        onPress: function () {
                                          t.roomNameFun(t.state.roomName);
                                          console.log('-----------------navEditIndex = ' + t.state.navEditIndex);
                                          console.log('-----------------navEditIndex \u6b21\u6570 = ' + t.state.FrequencyNum);
                                          t.setState({
                                            isEditInput: false,
                                            editTextStatue: 1,
                                            disSaveBtn: true,
                                          });
                                          ReactNative.Keyboard.dismiss();
                                        },
                                        hitSlop: {
                                          left: 30,
                                          right: 30,
                                          top: 30,
                                          bottom: 30,
                                        },
                                      },
                                      React.default.createElement(ReactNative.Image, {
                                        source: require('./1161'),
                                        resizeMode: 'contain',
                                        style: w.EditFqLiInputImg,
                                      })
                                    )
                                  )
                                : null
                            ),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: [
                                  w.EditFqLi,
                                  {
                                    zIndex: -99,
                                    width: module588.default.setSpText(250),
                                  },
                                ],
                              },
                              0 != this.state.editTextStatue && this.state.FrequencyNum >= 2
                                ? React.default.createElement(
                                    ReactNative.TouchableOpacity,
                                    {
                                      style: [
                                        w.EditFqLiIcon,
                                        w.EditFqLiRighe,
                                        {
                                          alignSelf: 'flex-start',
                                          width: module588.default.setSpText(150),
                                        },
                                      ],
                                      onPress: function () {
                                        t.sdFrequency();
                                      },
                                    },
                                    React.default.createElement(ReactNative.Image, {
                                      source: this.state.FrequencyIcon,
                                      resizeMode: 'contain',
                                      style: [w.cleanBottomEditIconImg],
                                    }),
                                    React.default.createElement(
                                      ReactNative.Text,
                                      {
                                        style: [
                                          w.EditFqLiRigheIcon,
                                          {
                                            alignSelf: 'flex-start',
                                          },
                                        ],
                                      },
                                      this.state.FrequencyNum,
                                      ' ',
                                      module594.default.t('times')
                                    )
                                  )
                                : null,
                              0 != this.state.editTextStatue && this.state.FrequencyNum <= 1
                                ? React.default.createElement(
                                    ReactNative.TouchableOpacity,
                                    {
                                      style: [
                                        w.EditFqLiIcon,
                                        w.EditFqLiRighe,
                                        {
                                          alignSelf: 'flex-start',
                                          width: module588.default.setSpText(140),
                                        },
                                      ],
                                      onPress: function () {
                                        t.sdFrequency();
                                      },
                                    },
                                    React.default.createElement(ReactNative.Image, {
                                      source: this.state.FrequencyIcon,
                                      resizeMode: 'contain',
                                      style: [w.cleanBottomEditIconImg],
                                    }),
                                    'en' == module594.default.locale
                                      ? React.default.createElement(
                                          ReactNative.Text,
                                          {
                                            style: [
                                              w.EditFqLiRigheIcon,
                                              {
                                                alignSelf: 'flex-start',
                                              },
                                            ],
                                          },
                                          this.state.FrequencyNum,
                                          ' ',
                                          'Time'
                                        )
                                      : React.default.createElement(
                                          ReactNative.Text,
                                          {
                                            style: [
                                              w.EditFqLiRigheIcon,
                                              {
                                                alignSelf: 'flex-start',
                                              },
                                            ],
                                          },
                                          this.state.FrequencyNum,
                                          ' ',
                                          module594.default.t('times')
                                        )
                                  )
                                : null
                            )
                          )
                        : null,
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: w.cleanBottomEditBxo,
                        },
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: [w.cleanBottomEditLi, w.cleanBottomEdiLeft],
                          },
                          React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              style: w.cleanBottomEditIcon,
                              onPress: function () {
                                t.setState({
                                  isShowEdit: false,
                                  editTextStatue: 0,
                                  disSaveBtn: false,
                                });
                                ReactNative.DeviceEventEmitter.emit('autoEditMode', 3);
                              },
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1402'),
                              style: [w.cleanBottomEditIconImg],
                            })
                          )
                        ),
                        2 == this.state.navEditIndex
                          ? this.state.disSaveBtn
                            ? React.default.createElement(
                                ReactNative.View,
                                {
                                  style: [w.cleanBottomEditLi, w.cleanBottomEdiRight],
                                },
                                React.default.createElement(
                                  ReactNative.TouchableOpacity,
                                  {
                                    style: w.cleanBottomEditIcon,
                                    onPress: function () {
                                      t.editSave();
                                    },
                                  },
                                  React.default.createElement(ReactNative.Image, {
                                    source: this.state.cleanBottomEditIcon,
                                    style: [w.cleanBottomEditIconImg],
                                  })
                                )
                              )
                            : null
                          : React.default.createElement(
                              ReactNative.View,
                              {
                                style: [w.cleanBottomEditLi, w.cleanBottomEdiRight],
                              },
                              React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  style: w.cleanBottomEditIcon,
                                  onPress: function () {
                                    t.editSave();
                                  },
                                },
                                React.default.createElement(ReactNative.Image, {
                                  source: this.state.cleanBottomEditIcon,
                                  style: [w.cleanBottomEditIconImg],
                                })
                              )
                            )
                      )
                    )
                  : React.default.createElement(
                      ReactNative.View,
                      {
                        style: w.cleanBottomBox,
                      },
                      this.state.partitionBData.map(function (o, n) {
                        return React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            style: w.partitionBli,
                            key: n,
                            onPress: function () {
                              t.bottomShowEdit(n);
                            },
                          },
                          React.default.createElement(ReactNative.Image, {
                            source: o.img,
                            style: [w.partitionBliIcon],
                          }),
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: w.partitionBliTtile,
                            },
                            o.name
                          )
                        );
                      })
                    )
              )
            )
          );
        },
      },
    ]);
    return b;
  })(React.default.Component);

exports.partitionMap = module1402;
var w = ReactNative.StyleSheet.create({
    cleanBottom: {
      position: 'absolute',
      width: '100%',
      paddingHorizontal: module588.default.setSpText(12),
    },
    editTopTxt: {
      flex: 1,
      height: '100%',
      backgroundColor: '#F7F9FC',
      borderRadius: module588.default.setSpText(16),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: module588.default.setSpText(16),
    },
    editTopTxtCentent: {
      color: '#0A72FA',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      fontSize: module588.default.setSpText(14),
    },
    EditFqLiInput: {
      width: module588.default.setSpText(259),
      height: module588.default.setSpText(44),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: module588.default.setSpText(16),
      borderWidth: module588.default.setSpText(1),
      borderRadius: module588.default.setSpText(16),
      borderColor: '#0A72FA',
      backgroundColor: 'rgba(230, 239, 250, 1)',
      color: '#0A72FA',
    },
    EditFqLiInputImgBox: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    EditFqLiInputImg: {
      width: '100%',
      height: '100%',
    },
    EditFqLiInputTxt: {
      flex: 1,
      paddingVertical: 0,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    EditFqLiIcon: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(12),
      paddingVertical: module588.default.setSpText(10),
      borderRadius: module588.default.setSpText(16),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    EditFqLiRighe: {
      position: 'absolute',
      width: module588.default.setSpText(80),
      right: 0,
    },
    EditFqLiLeft: {
      width: module588.default.setSpText(80),
    },
    EditFqLiRigheIcon: {
      paddingLeft: module588.default.setSpText(5),
    },
    EditFqLi: {
      flex: 1,
    },
    EditFq: {
      flexDirection: 'row',
      marginBottom: module588.default.setSpText(32),
    },
    cleanBottomEditIcon: {
      width: module588.default.setSpText(44),
      height: module588.default.setSpText(44),
      backgroundColor: 'rgba(10, 114, 250, 0.08)',
      borderRadius: module588.default.setSpText(44),
      borderWidth: module588.default.setSpText(2),
      borderColor: '#0A72FA',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanBottomEditIconImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    cleanBottomEdiRight: {
      position: 'absolute',
      right: 0,
    },
    cleanBottomEditLi: {
      flex: 1,
      position: 'relative',
    },
    cleanBottomEditBxo: {
      flexDirection: 'row',
    },
    cleanBottomBox: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(8),
      padding: module588.default.setSpText(16),
      flexDirection: 'row',
    },
    partitionBli: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    partitionBliIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    partitionBliTtile: {
      fontSize: module588.default.setSpText(10),
      color: '#213B5C',
      marginTop: module588.default.setSpText(8),
    },
    cleanTop: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
    },
    cleanTopBpx: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(12),
    },
    cleanTopContent: {
      flexDirection: 'row',
      paddingTop: module588.default.setSpText(12),
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
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
      color: '#658DC2',
      flexDirection: 'row',
      paddingBottom: module588.default.setSpText(5),
      fontSize: module588.default.setSpText(12),
      marginTop: module588.default.setSpText(5),
    },
    clearImg: {
      width: module588.default.setSpText(17),
      height: module588.default.setSpText(17),
      marginRight: module588.default.setSpText(5),
    },
  }),
  F = module1402;
exports.default = F;
