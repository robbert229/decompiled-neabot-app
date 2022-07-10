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
  module588 = require('./588'),
  module1103 = require('./1103'),
  module594 = require('./594'),
  module593 = require('./593'),
  module920 = require('./920');

require('./421');

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

var D = '',
  module1406 = (function (t) {
    module35.default(F, t);

    var module588 = F,
      module1406 = C(),
      b = function () {
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
      (n = b.call(this, t)).state = {
        iotId: n.props.propsData.route.params.iotId,
        cleanLi: [],
        swipeoutNum: null,
        reservationList: [],
        activeFlae: [],
        timeZoneSec: 0,
        timeZone: 0,
        timestamp: 0,
      };
      D = module1096.default.loading('', 0);
      return n;
    }

    module25.default(F, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          module403.default.remove(D);

          this._notDisturbListData();

          this.eventEmitter = ReactNative.DeviceEventEmitter.addListener('getData', function () {
            setTimeout(function () {
              t._notDisturbListData();
            }, 500);
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.eventEmitter.emitter.removeAllListeners('getData');
          module403.default.remove(D);

          this.setState = function (t, n) {};
        },
      },
      {
        key: '_notDisturbListData',
        value: function () {
          var t = this;
          module1145.default.getProperties(this.state.iotId).then(
            function (l) {
              if (l && l.code && (401 == l.code || 29003 == l.code))
                module593.default.delete('userData').then(function (n) {
                  AccountApiModule.logout();
                  module1096.default.info(
                    module594.default.t('C1619077654'),
                    1,
                    t.props.propsData.navigation.dispatch(
                      CommonActions.reset({
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
              console.log('\u83b7\u53d6\u9884\u7ea6\u5217\u8868\u548c\u52ff\u6270\u5217\u8868\u6570\u636e' + JSON.stringify(l.data.appointment));
              var s = l.data.appointment;
              setTimeout(function () {
                module403.default.remove(D);
              }, 500);

              try {
                if (s && s.value && 0 != s.value.length) {
                  for (var u = [], c = [], f = 0; f < s.value.length; f++) 0 == s.value[f].active ? u.push(s.value[f]) : c.push(s.value[f]);

                  t.setState(
                    {
                      cleanLi: u,
                      activeFlae: u,
                      reservationList: c,
                      timestamp: undefined != s.timestamp ? s.timestamp : Date.parse(new Date()),
                      timeZoneSec: s.timeZoneSec,
                      timeZone: s.timeZone,
                    },
                    function () {
                      t._formatData();
                    }
                  );
                } else
                  undefined == s ||
                    t.setState({
                      cleanLi: [],
                    });
              } catch (t) {}
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
                module403.default.remove(D);
              }
            }
          );
        },
      },
      {
        key: '_formatData',
        value: function () {
          for (var t = module920.default.cloneDeep(this.state.cleanLi), n = 0; n < t.length; n++) {
            var o = Math.floor(t[n].startTime / 86400),
              l = Math.floor((t[n].startTime - 24 * o * 3600) / 3600),
              s = Math.floor((t[n].startTime - 24 * o * 3600 - 3600 * l) / 60),
              u = Math.floor(t[n].endTime / 86400),
              c = Math.floor((t[n].endTime - 24 * u * 3600) / 3600),
              f = Math.floor((t[n].endTime - 24 * u * 3600 - 3600 * c) / 60);
            if (l < 10) l = '0' + l;
            if (s < 10) s = '0' + s;
            if (c < 10) c = '0' + c;
            if (f < 10) f = '0' + f;
            if (0 == t[n].endTime) t[n].endTime = '24:00';
            else t[n].endTime = c + ':' + f;
            t[n].startTime = l + ':' + s;
            t[n].startTimeS = l;
            t[n].startMin = s;
            t[n].endTimeS = c;
            t[n].endMin = f;
          }

          this.setState({
            cleanLi: t,
          });
        },
      },
      {
        key: 'startOrClose',
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
            swipeoutNum: t,
          });
        },
      },
      {
        key: 'addDoNot',
        value: function () {
          if (this.state.activeFlae && this.state.activeFlae.length > 0) module1096.default.info(module594.default.t('doNotDisturbOne'), 1, undefined, false);
          else
            this.props.propsData.navigation.navigate('doNotTime', {
              iotId: this.state.iotId,
              isEdit: false,
            });
        },
      },
      {
        key: 'editData',
        value: function (t) {
          this.props.propsData.navigation.navigate('doNotTime', {
            iotId: this.state.iotId,
            isEdit: true,
            startTime: this.state.cleanLi[t].startTimeS,
            startMin: this.state.cleanLi[t].startMin,
            endTime: this.state.cleanLi[t].endTimeS,
            endMin: this.state.cleanLi[t].endMin,
          });
        },
      },
      {
        key: 'setAppointments',
        value: function (t, l, s) {
          var u = this;
          D = module1096.default.loading('', 0);
          console.log(
            '============ doNotLi \u5220\u9664\u3001\u6fc0\u6d3b \u4fdd\u5b58\u65f6\u95f4\u6233 = ' + t,
            '\u539f\u59cb\u52ff\u6270\u6570\u636e' + JSON.stringify(this.state.activeFlae),
            '\u539f\u59cb\u9884\u7ea6\u6570\u636e' + JSON.stringify(this.state.reservationList)
          );
          var c = module920.default.cloneDeep(this.state.activeFlae),
            f = module920.default.cloneDeep(this.state.reservationList);

          if (1 == t) {
            if (null == this.state.activeFlae) return void module403.default.remove(D);
            c[l].unlock = s;
            this.changSwitchValue(l, s);
          } else c.splice(l, 1);

          var p = {};
          p.timeZone = this.state.timeZone;
          p.timeZoneSec = 3600 * this.state.timeZone;
          p.timestamp = Date.parse(new Date());
          p.value = f.concat(c);
          console.log('======\u5f00\u542f\u6216\u5173\u95ed \u8bf7\u6c42 = ' + JSON.stringify(f), '-----' + JSON.stringify(c), '======pp=======' + JSON.stringify(p));
          module1145.default
            .setAppointments(this.state.iotId, JSON.stringify(p))
            .then(function (c) {
              var f = c.data;
              module403.default.remove(D);

              if (9201 == f.code) {
                module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
                if (1 == t) u.changSwitchValue(l, !s);
                else u.deleteItemValue(l, !s, function () {});
              } else if (200 == f.code && 1 == t) u.changSwitchValue(l, s);
              else if (200 == f.code && 0 == t)
                u.deleteItemValue(l, s, function () {
                  module1096.default.info(module594.default.t('successfullyDeleted'), 1, undefined, false);
                });
            })
            .catch(function (c) {
              module403.default.remove(D);

              if (9201 == c.code) {
                module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
                if (1 == t) u.changSwitchValue(l, !s);
                else u.deleteItemValue(l, !s, function () {});
              }
            });
        },
      },
      {
        key: 'deleteItemValue',
        value: function (t, n, o) {
          var l = this;
          this.state.activeFlae.splice(t, 1);
          this.state.cleanLi.splice(t, 1);
          var s = module920.default.cloneDeep(this.state.cleanLi);
          this.setState(
            {
              cleanLi: [],
            },
            function () {
              l.setState({
                activeFlae: l.state.activeFlae,
                cleanLi: s,
              });
              if (o) o();
            }
          );
        },
      },
      {
        key: 'changSwitchValue',
        value: function (t, n) {
          this.state.activeFlae[t].unlock = n;
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
          var t = this,
            n = [
              {
                text: module594.default.t('deleted'),
                backgroundColor: 'red',
                color: '#fff',
                onPress: function () {
                  t.setAppointments(0, t.state.swipeoutNum, false);
                },
              },
            ];
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
              this.state.cleanLi.map(function (o, l) {
                return React.default.createElement(
                  ReactNative.View,
                  {
                    key: l,
                  },
                  o.active
                    ? null
                    : React.default.createElement(
                        module1103.default,
                        {
                          right: n,
                          autoClose: true,
                          style: w.equipmentContent,
                          onOpen: function () {
                            t.swipeoutIndex(l);
                          },
                        },
                        React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            style: w.cleanUpLiBox,
                            onPress: function () {
                              t.editData(l);
                            },
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: w.cleanUpLiContnet,
                            },
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: w.cleanUpLiLeft,
                              },
                              React.default.createElement(
                                ReactNative.Text,
                                {
                                  style: [w.cleanUpLiLeftCor, w.cleanUpLiLeftTitle, o.unlock ? w.liActiveColor : ''],
                                },
                                ' ',
                                o.startTime,
                                ' \u2014 ',
                                o.endTime
                              ),
                              React.default.createElement(
                                ReactNative.View,
                                {
                                  style: w.cleanUpLiLeftChild,
                                },
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: [w.cleanUpLiLeftCor, w.cleanUpLiLeftChildLi, o.unlock ? w.liActiveColor : ''],
                                  },
                                  module594.default.t('repeatTime'),
                                  '\uff1a',
                                  module594.default.t('everyDay')
                                )
                              )
                            ),
                            React.default.createElement(
                              ReactNative.View,
                              {
                                style: w.cleanUpLiRight,
                              },
                              React.default.createElement(ReactNative.Switch, {
                                trackColor: {
                                  false: '#767577',
                                  true: '#81b0ff',
                                },
                                thumbColor: o.unlock ? '#0A72FA' : '#f4f3f4',
                                ios_backgroundColor: '#3e3e3e',
                                tintColor: '#33333',
                                onValueChange: function (n) {
                                  t.startOrClose(l, n);
                                },
                                disabled: false,
                                value: o.unlock,
                              })
                            )
                          )
                        )
                      )
                );
              }),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: w.addBox,
                  onPress: function () {
                    t.addDoNot();
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1406'),
                  resizeMode: 'contain',
                  style: [w.addBoxIcon],
                })
              )
            )
          );
        },
      },
    ]);
    return F;
  })(React.default.Component);

exports.doNotLi = module1406;
var w = ReactNative.StyleSheet.create({
    cleanUpLiBox: {
      paddingHorizontal: module588.default.setSpText(20),
      backgroundColor: '#fff',
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
      paddingVertical: module588.default.setSpText(20),
    },
  }),
  b = module1406;
exports.default = b;
