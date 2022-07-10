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
  module588 = require('./588'),
  module1110 = require('./1110'),
  module1148 = require('./1148'),
  module1145 = require('./1145'),
  module594 = require('./594');

require('./593');

require('./1188');

require('./920');

function E() {
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

var B = '',
  w = (function (t) {
    module35.default(b, t);

    var module588 = b,
      w = E(),
      V = function () {
        var t,
          n = module34.default(module588);

        if (w) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var n;
      module24.default(this, b);
      var s = (n = V.call(this, t)).props.route.params;
      n.state = {
        iotId: s.iotId,
        isEdit: s.isEdit,
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
        startTime: s.startTime ? s.startTime : 0,
        startMin: s.startMin ? s.startMin : 0,
        endTime: s.endTime ? s.endTime : 0,
        endMin: s.endMin ? s.endMin : 0,
        timeZone: 0 - new Date().getTimezoneOffset() / 60,
        setUpLi: {
          value: [],
        },
        limitBtn: false,
      };
      n.getProperties();
      return n;
    }

    module25.default(b, [
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(B);

          this.setState = function (t, n) {};
        },
      },
      {
        key: 'getProperties',
        value: function () {
          var t = this;
          module1145.default.getProperties(this.state.iotId).then(function (n) {
            if (200 == n.code)
              (function () {
                var s = n.data.appointment;
                if (s && s.value)
                  for (
                    var l = function (n) {
                        if (0 == s.value[n].active)
                          t.setState(
                            {
                              activeFlae: s.value[n],
                            },
                            function () {
                              s.value.splice(n, 1);
                            }
                          );
                      },
                      o = 0;
                    o < s.value.length;
                    o++
                  )
                    l(o);
                else s.value = [];
                t.setState({
                  setUpLi: s,
                });
              })();
          });
        },
      },
      {
        key: 'stateTimeData',
        value: function (t) {
          this.setState({
            startTime: t,
          });
        },
      },
      {
        key: 'startMinData',
        value: function (t) {
          this.setState({
            startMin: t,
          });
        },
      },
      {
        key: 'endTimeData',
        value: function (t) {
          this.setState({
            endTime: t,
          });
        },
      },
      {
        key: 'endMinData',
        value: function (t) {
          if (this.state.endTime == this.state.startTime && t == this.state.startMin) {
            module1096.default.info(module594.default.t('LessThanEqualToStartTime'), 1, undefined, false);
            return false;
          }

          this.setState({
            endMin: t,
          });
        },
      },
      {
        key: 'setAppointments',
        value: function () {
          var t = this;

          if (
            (console.log('---startTime:' + this.state.startTime + '---endTime:' + this.state.endTime),
            !this.state.endTime && !this.state.startTime && this.state.endMin == this.state.startMin)
          ) {
            module1096.default.info(module594.default.t('selectEndTime'), 1, undefined, false);
            return false;
          }

          if (this.state.endTime == this.state.startTime && this.state.endMin == this.state.startMin) {
            module1096.default.info(module594.default.t('LessThanEqualToStartTime'), 1, undefined, false);
            return false;
          }

          if (!this.state.startMin) this.state.startMin = '00';
          if (!this.state.endMin) this.state.endMin = '00';
          var n = '',
            o = Number(3600 * this.state.startTime) + Number(60 * this.state.startMin),
            u = Number(3600 * this.state.endTime) + Number(60 * this.state.endMin);

          if (this.state.isEdit) {
            this.state.activeFlae.endTime = u;
            this.state.activeFlae.startTime = o;
            if (this.state.setUpLi.value) this.state.setUpLi.value.push(this.state.activeFlae);
          } else {
            n = {
              active: false,
              endTime: u,
              period: [0, 1, 2, 3, 4, 5, 6],
              startTime: o,
              unlock: true,
              waterPump: 2,
              workNoisy: 'auto',
            };
            if (this.state.setUpLi.value) this.state.setUpLi.value.push(n);
          }

          if (this.state.setUpLi.value) {
            this.state.setUpLi.timeZone = this.state.timeZone;
            this.state.setUpLi.timeZoneSec = 3600 * this.state.timeZone;
          }

          B = module1096.default.loading('', 0);
          if (!this.state.limitBtn)
            this.setState(
              {
                limitBtn: true,
              },
              function () {
                module1145.default.setAppointments(t.state.iotId, JSON.stringify(t.state.setUpLi)).then(function (n) {
                  module403.default.remove(B);
                  console.log('============ doNotTime \u4fdd\u5b58\u65f6\u95f4\u6233 = ' + JSON.stringify(n));
                  var o = n.data;

                  if (9201 == o.code) {
                    module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
                    t.setState({
                      limitBtn: false,
                    });
                  }

                  if (200 == o.code) {
                    ReactNative.DeviceEventEmitter.emit('getData');
                    setTimeout(function () {
                      t.props.navigation.goBack();
                      t.setState({
                        limitBtn: false,
                      });
                    }, 1e3);
                  } else
                    t.setState({
                      limitBtn: false,
                    });
                });
              }
            );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            s = new module1148.default.DataSource({
              rowHasChanged: function (t, n) {
                return t !== n;
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
                  style: M.fleBoxTop,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: M.fleBoxLi,
                  },
                  module594.default.t('startingTime')
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: M.fleBoxLi_f,
                  },
                  module594.default.t('to')
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: M.fleBoxLi,
                  },
                  module594.default.t('endTime')
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: M.fleTimeLi,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: M.fleTimeLiBox,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: M.fleTimeLiBoxLi,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: M.fleTimeLiBoxLiTime,
                      },
                      React.default.createElement(module1148.default, {
                        showsVerticalScrollIndicator: false,
                        dataSource: s.cloneWithRows(this.state.setTimeLi),
                        renderRow: function (n, s, l) {
                          return React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              onPress: function () {
                                t.stateTimeData(n.time);
                              },
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [M.setTimeList, t.state.startTime == n.time ? M.setTimeActive : ''],
                              },
                              n.time
                            )
                          );
                        },
                      })
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: M.fleTimeLiBoxLiTime,
                      },
                      React.default.createElement(module1148.default, {
                        showsVerticalScrollIndicator: false,
                        dataSource: s.cloneWithRows(this.state.setTimeLiMin),
                        renderRow: function (n, s, l) {
                          return React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              onPress: function () {
                                t.startMinData(n.time);
                              },
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [M.setTimeList, t.state.startMin == n.time ? M.setTimeActive : ''],
                              },
                              n.time
                            )
                          );
                        },
                      })
                    )
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: M.fleTimeLiBox,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: M.fleTimeLiBoxLi,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: M.fleTimeLiBoxLiTime,
                      },
                      React.default.createElement(module1148.default, {
                        showsVerticalScrollIndicator: false,
                        dataSource: s.cloneWithRows(this.state.setTimeLi),
                        renderRow: function (n, s, l) {
                          return React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              onPress: function () {
                                t.endTimeData(n.time);
                              },
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [M.setTimeList, t.state.endTime == n.time ? M.setTimeActive : ''],
                              },
                              n.time
                            )
                          );
                        },
                      })
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: M.fleTimeLiBoxLiTime,
                      },
                      React.default.createElement(module1148.default, {
                        showsVerticalScrollIndicator: false,
                        dataSource: s.cloneWithRows(this.state.setTimeLiMin),
                        renderRow: function (n, s, l) {
                          return React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              onPress: function () {
                                t.endMinData(n.time);
                              },
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [M.setTimeList, t.state.endMin == n.time ? M.setTimeActive : ''],
                              },
                              n.time
                            )
                          );
                        },
                      })
                    )
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: M.setUpBottom,
                },
                React.default.createElement(
                  module1135.default,
                  {
                    type: 'primary',
                    size: 'small',
                    style: M.setUpBottomBtn,
                    onPress: function () {
                      return module1110.default(function () {
                        t.setAppointments();
                      });
                    },
                  },
                  module594.default.t('carryOut')
                )
              )
            )
          );
        },
      },
    ]);
    return b;
  })(React.default.Component);

exports.doNotTime = w;
var M = ReactNative.StyleSheet.create({
    setTimeActive: {
      color: '#0A72FA',
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
    setTimeList: {
      flex: 1,
      height: module588.default.setSpText(44),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: module588.default.setSpText(24),
      color: '#213B5C',
    },
    fleTimeLiBoxLiTime: {
      flex: 1,
    },
    fleTimeLiBoxLi: {
      width: module588.default.setSpText(155),
      height: module588.default.setSpText(224),
      backgroundColor: '#BCCCE0',
      borderRadius: module588.default.setSpText(16),
      flexDirection: 'row',
    },
    fleTimeLiBox: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fleTimeLi: {
      flexDirection: 'row',
    },
    fleBoxTop: {
      flexDirection: 'row',
      paddingVertical: module588.default.setSpText(20),
    },
    fleBoxLi_f: {
      flex: 1,
      textAlign: 'center',
    },
    fleBoxLi: {
      flex: 10,
      textAlign: 'center',
    },
  }),
  V = w;
exports.default = V;
