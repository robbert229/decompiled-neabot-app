require('./1103');

var module403 = require('./403'),
  module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1145 = require('./1145'),
  module1110 = require('./1110'),
  module588 = require('./588'),
  module1107 = require('./1107'),
  module594 = require('./594'),
  module421 = require('./421'),
  module593 = require('./593'),
  module916 = require('./916'),
  module920 = require('./920');

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

var I = '',
  module1406 = (function (t) {
    module35.default(F, t);

    var module588 = F,
      module1406 = D(),
      N = function () {
        var t,
          n = module34.default(module588);

        if (module1406) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function F(t) {
      var n;
      module24.default(this, F);
      (n = N.call(this, t)).state = {
        iotId: n.props.propsData.route.params.iotId,
        slNum: n.props.propsData.route.params.slNum,
        xlNum: n.props.propsData.route.params.xlNum,
        nickname: n.props.propsData.route.params.nickname,
        AppFunction: n.props.propsData.route.params.AppFunction,
        swipeoutNum: null,
        cleanLi: [],
        reservationList: [],
        activeFlae: [],
        cleanList: [],
        timeZoneSec: 0,
        timeZone: 0,
        timestamp: 0,
        currentTime: Math.round(new Date().getTime() / 1e3).toString(),
        appointmentLength: 0,
        isDisSlIcon: 0,
        cleanLiStartTime: [],
        connectTime: 0,
        areas: [],
        mop: null,
        getPropertiesData: {},
      };
      I = module1096.default.loading('', 0);
      return n;
    }

    module25.default(F, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;

          this._reservationListData();

          this.eventEmitter = ReactNative.DeviceEventEmitter.addListener('getData', function () {
            setTimeout(function () {
              t._reservationListData();
            }, 800);
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.eventEmitter.emitter.removeAllListeners('getData');
          module403.default.remove(I);

          this.setState = function (t, n) {};
        },
      },
      {
        key: '_formatData',
        value: function (t) {
          var n = this;
          console.log('\u9884\u7ea6\u6570\u636e\uff1a' + JSON.stringify(t));

          for (var o = [], l = '', s = 0; s < t.length; s++) {
            var c = Math.floor(t[s].startTime / 86400),
              u = Math.floor((t[s].startTime - 24 * c * 3600) / 3600),
              f = Math.floor((t[s].startTime - 24 * c * 3600 - 3600 * u) / 60);

            if (
              ((t[s].timestamp = t[s].startTime),
              u < 10 && (u = '0' + u),
              f < 10 && (f = '0' + f),
              t[s].period && 0 == t[s].period.length && (this.state.currentTime && this.state.currentTime > t[s].startTime && (t[s].unlock = false), t[s]))
            ) {
              var p = new Date(1e3 * parseInt(t[s].startTime));
              u = p.getHours() < 10 ? '0' + p.getHours() : p.getHours();
              f = p.getMinutes() < 10 ? '0' + p.getMinutes() : p.getMinutes();
            }

            switch (t[s].workNoisy) {
              case 'mop':
                t[s].workNoisy = 0;
                break;

              case 'quiet':
                t[s].workNoisy = 1;
                break;

              case 'auto':
                t[s].workNoisy = 2;
                break;

              case 'strong':
                t[s].workNoisy = 3;
            }

            if (((t[s].periodAre = t[s].period ? t[s].period : module594.default.t('once')), t[s].period))
              switch (t[s].period.length) {
                case 7:
                  t[s].period = module594.default.t('everyDay');
                  break;

                case 0:
                  t[s].period = module594.default.t('once');
                  break;

                default:
                  for (var h = 0; h < t[s].period.length; h++)
                    switch (t[s].period[h]) {
                      case 0:
                        l += module594.default.t('sunday') + '\u3001';
                        break;

                      case 1:
                        l += module594.default.t('onMonday') + '\u3001';
                        break;

                      case 2:
                        l += module594.default.t('onTuesday') + '\u3001';
                        break;

                      case 3:
                        l += module594.default.t('onWednesday') + '\u3001';
                        break;

                      case 4:
                        l += module594.default.t('thursday') + '\u3001';
                        break;

                      case 5:
                        l += module594.default.t('friday') + '\u3001';
                        break;

                      case 6:
                        l += module594.default.t('onSaturday') + '\u3001';
                    }

                  t[s].period = l;
                  l = '';
              }
            else t[s].period = module594.default.t('once');
            t[s].startTime = u + ':' + f;
            o.push(t[s]);
          }

          this.setState(
            {
              cleanLi: [],
            },
            function () {
              n.setState({
                cleanLi: o,
              });
            }
          );
        },
      },
      {
        key: '_reservationListData',
        value: function () {
          var t = this;
          module593.default.get('clickRobotId').then(function (n) {
            if ('a1bp8GkMOe2' == n)
              t.setState({
                isDisSlIcon: 1,
              });
          });
          module1145.default.getProperties(this.state.iotId).then(
            function (l) {
              if ((module403.default.remove(I), !l || !l.code || (401 != l.code && 29003 != l.code))) {
                if (!(l && l.data && l.data.appointment && undefined == l.data.appointment)) {
                  console.log('msg: ' + JSON.stringify(l.data.appointment));
                  var s = l.data.appointment;

                  try {
                    if (s && s.value && 0 != s.value.length) {
                      for (var c = [], u = [], f = 0; f < s.value.length; f++) 0 == s.value[f].active ? c.push(s.value[f]) : u.push(s.value[f]);

                      console.log('\u9884\u7ea6\u6570\u636e:' + JSON.stringify(u));
                      var p = Date.parse(new Date()),
                        h = undefined != s.timestamp ? s.timestamp : p - 1;
                      if (h != p && (0 == t.state.timestamp || h >= t.state.timestamp))
                        t.setState(
                          {
                            appointmentLength: u.length,
                            reservationList: u,
                            activeFlae: c,
                            cleanList: s,
                            timestamp: h,
                            timeZoneSec: s.timeZoneSec,
                            timeZone: s.timeZone,
                            areas: l.data.areaList,
                            mop: l.data.mop,
                            getPropertiesData: l,
                          },
                          function () {
                            t._formatData(module920.default.cloneDeep(u));
                          }
                        );
                    } else
                      t.setState({
                        appointmentLength: 0,
                        reservationList: [],
                        activeFlae: [],
                        cleanList: [],
                        cleanLi: [],
                      });
                  } catch (t) {}
                }
              } else
                module593.default.delete('userData').then(function (n) {
                  module916.default.logout();
                  module1096.default.info(
                    module594.default.t('C1619077654'),
                    1,
                    t.props.propsData.navigation.dispatch(
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
            function (t, o) {
              if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                Object.keys(t).map(function (n) {
                  if ('code' == n) {
                    var o = t[n];
                    o;
                  }

                  if ('message' == n) t[n];
                });
                module403.default.remove(I);
              }
            }
          );
        },
      },
      {
        key: 'cleanIndex',
        value: function (t, n) {
          var o = this;
          this.setState(
            {
              swipeoutNum: t,
            },
            function () {
              o.setAppointments(1, t, n);
            }
          );
        },
      },
      {
        key: 'swipeoutIndex',
        value: function (t) {
          this.setState({
            swipeoutNum: Number(t),
          });
        },
      },
      {
        key: 'cleanLiData',
        value: function (t) {
          var n = {
            mapName: 'setUp',
            iotId: this.state.iotId,
            slNum: this.state.slNum,
            xlNum: this.state.xlNum,
            isEdit: true,
            cleanLiIndex: t,
            nickname: this.state.nickname,
            isNewCreate: false,
            reservationList: this.state.reservationList,
            cleanList: this.state.cleanList,
            activeFlae: this.state.activeFlae,
            areas: this.state.areas,
            mop: this.state.mop,
            AppFunction: this.state.AppFunction,
            getPropertiesData: this.state.getPropertiesData,
          };
          ReactNative.DeviceEventEmitter.emit('isMoreMap', n);
        },
      },
      {
        key: 'setAppointments',
        value: function (t, l, s) {
          var c = this;
          I = module1096.default.loading('', 0);
          console.log('============ cleanUpLi \u5220\u9664\u3001\u6fc0\u6d3b \u4fdd\u5b58\u65f6\u95f4\u6233 = ' + t, l, s);
          var u = module920.default.cloneDeep(this.state.reservationList),
            f = module920.default.cloneDeep(this.state.activeFlae);

          if (1 == t) {
            if (0 == this.state.cleanLi[this.state.swipeoutNum].periodAre.length && this.state.currentTime > this.state.cleanLi[this.state.swipeoutNum].timestamp) {
              module403.default.remove(I);
              module1096.default.info(module594.default.t('appointmentExpired'), 1, undefined, false);
              return false;
            }

            if (null == u) return void module403.default.remove(I);
            u[l].unlock = s;
            this.changSwitchValue(l, s);
          } else u.splice(l, 1);

          var p = {};
          p.timeZone = this.state.timeZone;
          p.timeZoneSec = 3600 * this.state.timeZone;
          p.timestamp = Date.parse(new Date());
          p.value = f.concat(u);
          this.setState(
            {
              connectTime: 0,
            },
            function () {
              c.canconnectInterval = setInterval(function () {
                if (c.state.connectTime++ >= 20) {
                  module403.default.remove(I);
                  if (c.canconnectInterval) clearInterval(c.canconnectInterval);
                }
              }, 1e3);
            }
          );
          console.log('\u4eb2\u6c42\u5207\u6362\u5f00\u5173\u6a21\u5f0f\u6570\u636e' + JSON.stringify(p));
          module1145.default
            .setAppointments(this.state.iotId, JSON.stringify(p))
            .then(function (u) {
              if (c.canconnectInterval) clearInterval(c.canconnectInterval);
              module403.default.remove(I);
              var f = u.data;

              if (9201 == f.code) {
                module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
                if (1 == t) c.changSwitchValue(l, !s);
              } else if (200 == f.code && 0 == t)
                c.deleteItemValue(l, s, function () {
                  c._reservationListData();

                  module1096.default.info(module594.default.t('successfullyDeleted'), 1, undefined, false);
                });
              else if (200 == f.code && 1 == t) c.changSwitchValue(l, s);
            })
            .catch(function (u) {
              module403.default.remove(I);

              if (9201 == u.code) {
                module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
                if (1 == t) c.changSwitchValue(l, !s);
                else
                  c.deleteItemValue(l, s, function () {
                    c._reservationListData();
                  });
              }
            });
        },
      },
      {
        key: 'deleteItemValue',
        value: function (t, n, o) {
          var l = this;
          this.state.reservationList.splice(t, 1);
          this.state.cleanLi.splice(t, 1);
          var s = module920.default.cloneDeep(this.state.cleanLi);
          this.setState(
            {
              cleanLi: [],
            },
            function () {
              l.setState(
                {
                  cleanLi: s,
                },
                function () {
                  if (o) o();
                }
              );
            }
          );
        },
      },
      {
        key: 'changSwitchValue',
        value: function (t, n) {
          this.state.reservationList[t].unlock = n;
          this.state.cleanLi[t].unlock = n;
          this.setState(
            {
              cleanLi: this.state.cleanLi,
            },
            function () {}
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          this.props.propsData.navigation.navigate;
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
              React.default.createElement(module1107.SwipeListView, {
                style: {
                  marginTop: 10,
                },
                data: this.state.cleanLi,
                keyExtractor: function (t, n) {
                  return t + n;
                },
                renderItem: function (n, o) {
                  return React.default.createElement(
                    ReactNative.TouchableHighlight,
                    {
                      onPress: function () {
                        t.cleanLiData(n.index);
                      },
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: E.cleanUpLiBox,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [E.cleanUpLiTopTitle, n.item.unlock ? E.liActiveColor : ''],
                        },
                        n.item.tagIds ? module594.default.t('areaCleaning') + ':' + n.item.tagIds : null,
                        n.item.segmentTagIds ? module594.default.t('partitionCleaning') + ':' + n.item.segmentTagIds : null,
                        n.item.tagIds || n.item.segmentTagIds ? null : module594.default.t('fullImageCleaning') + ''
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: E.cleanUpLiContnet,
                        },
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: E.cleanUpLiLeft,
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [E.cleanUpLiLeftCor, E.cleanUpLiLeftTitle, n.item.unlock ? E.liActiveColor : ''],
                            },
                            n.item.startTime
                          ),
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: E.cleanUpLiLeftChild,
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [E.cleanUpLiLeftCor, E.cleanUpLiLeftChildLi, n.item.unlock ? E.liActiveColor : ''],
                              },
                              module594.default.t('suction'),
                              ': ',
                              n.item.workNoisy,
                              ' '
                            ),
                            0 == t.state.isDisSlIcon
                              ? React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: [E.cleanUpLiLeftCor, E.cleanUpLiLeftChildLi, E.worke, n.item.unlock ? E.liActiveColor : ''],
                                  },
                                  module594.default.t('hydraulic'),
                                  ': ',
                                  n.item.waterPump,
                                  ' '
                                )
                              : null
                          ),
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: E.cleanUpLiLeftChild,
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [E.cleanUpLiLeftCor, E.cleanUpLiLeftChildLi, n.item.unlock ? E.liActiveColor : ''],
                              },
                              module594.default.t('repeatTime'),
                              ':',
                              n.item.period
                            )
                          )
                        ),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: E.cleanUpLiRight,
                          },
                          React.default.createElement(ReactNative.Switch, {
                            trackColor: {
                              false: '#767577',
                              true: '#81b0ff',
                            },
                            thumbColor: n.item.unlock ? '#0A72FA' : '#f4f3f4',
                            ios_backgroundColor: '#3e3e3e',
                            onValueChange: function (o) {
                              return module1110.default(function () {
                                t.cleanIndex(n.index, o);
                              });
                            },
                            disabled: false,
                            value: n.item.unlock,
                          })
                        )
                      )
                    )
                  );
                },
                renderHiddenItem: function (n, o) {
                  return React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      },
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: {
                          backgroundColor: 'red',
                          width: 80,
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                        onPress: function () {
                          return module1110.default(function () {
                            t.setState(
                              {
                                swipeoutNum: n.index,
                              },
                              function () {
                                t.setAppointments(0, n.index, false);
                              }
                            );
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
                        module594.default.t('deleted')
                      )
                    )
                  );
                },
                leftOpenValue: 0,
                rightOpenValue: -76,
                previewOpenValue: -40,
                previewOpenDelay: 3e3,
              }),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: E.addBox,
                  onPress: function () {
                    if (t.state.reservationList.length >= 5) module1096.default.info(module594.default.t('appointmentMax'), 1, undefined, false);
                    else {
                      var n = {
                        mapName: 'setUp',
                        iotId: t.state.iotId,
                        slNum: t.state.slNum,
                        xlNum: t.state.xlNum,
                        isEdit: false,
                        nickname: t.state.nickname,
                        AppFunction: t.state.AppFunction,
                        cleanList: t.state.cleanList,
                        isNewCreate: true,
                        activeFlae: t.state.activeFlae,
                        reservationList: t.state.reservationList,
                        getPropertiesData: t.state.getPropertiesData,
                      };
                      ReactNative.DeviceEventEmitter.emit('isMoreMap', n);
                    }
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1406'),
                  resizeMode: 'contain',
                  style: [E.addBoxIcon],
                })
              )
            )
          );
        },
      },
    ]);
    return F;
  })(React.default.Component);

exports.cleanUpLi = module1406;
var E = ReactNative.StyleSheet.create({
    cleanUpLiBox: {
      paddingHorizontal: module588.default.setSpText(20),
      backgroundColor: '#fff',
      borderTopColor: '#F7F9FC',
      borderTopWidth: 2,
    },
    addBox: {
      position: 'absolute',
      width: module588.default.setSpText(56),
      height: module588.default.setSpText(56),
      borderRadius: module588.default.setSpText(56),
      bottom: module588.default.setSpText(20),
      right: module588.default.setSpText(20),
      backgroundColor: '#0A72FA',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    addBoxIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    equipmentContent: {
      marginBottom: module588.default.setSpText(10),
    },
    cleanUpLiLeftChildLi: {
      backgroundColor: '#F7F9FC',
      paddingHorizontal: module588.default.setSpText(12),
      paddingVertical: module588.default.setSpText(5),
      fontSize: module588.default.setSpText(10),
      borderRadius: module588.default.setSpText(8),
    },
    worke: {
      marginLeft: module588.default.setSpText(8),
    },
    cleanUpLiLeftChild: {
      flexDirection: 'row',
      marginTop: module588.default.setSpText(8),
    },
    cleanUpLiLeftTitle: {
      fontSize: module588.default.setSpText(24),
    },
    cleanUpLiLeftCor: {
      color: '#658DC2',
    },
    liActiveColor: {
      color: '#0A72FA',
    },
    cleanUpLiLeft: {
      flex: 1,
    },
    cleanUpLiRight: {
      width: module588.default.setSpText(80),
    },
    cleanUpLiContnet: {
      flexDirection: 'row',
      marginBottom: module588.default.setSpText(15),
    },
    cleanUpLiTopTitle: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
      paddingVertical: module588.default.setSpText(8),
      borderBottomWidth: module588.default.setSpText(1),
      borderBottomColor: '#E1E7F5',
    },
  }),
  N = module1406;
exports.default = N;
