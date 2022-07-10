var module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module1145 = require('./1145'),
  module599 = require('./599'),
  module1455 = require('./1455'),
  module1110 = require('./1110'),
  module594 = require('./594'),
  module593 = require('./593');

function v() {
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

var module1466 = (function (t) {
  module35.default(w, t);

  var module588 = w,
    module1466 = v(),
    E = function () {
      var t,
        o = module34.default(module588);

      if (module1466) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var o;
    module24.default(this, w);

    (o = E.call(this, t)).getIpAddress = function (t) {
      if ('active' === t) {
        module599.default.getIpAddress().then(function (t) {
          o.setState(
            {
              wifiCurrent: t,
            },
            function () {
              o.isEqualIPAddress();
            }
          );
        });
        console.log('=================== getIpAddress = ' + o.state.wifiCurrent);
      }
    };

    var s = JSON.parse(JSON.stringify(o.props.route.params));
    o.state = {
      iotId: s.iotId,
      userId: s.userId,
      nickname: s.nickname,
      slNum: null,
      xlNum: null,
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
      cleanzGoImg: require('./1352'),
      powerImg: require('./1222'),
      bottomNavIndex: null,
      WorkModeNum: s.WorkModeNum,
      subMode: s.subMode,
      robotTxt: null,
      robotTypeIcon: null,
      interval: null,
      wifiIp: null,
      equipmentPort: null,
      equipmentIp: null,
      mapId: '',
      wifiold: '',
      wifiCurrent: '',
      isDisSlIcon: 0,
    };
    o.getProperties();
    o.getLocalControlParam();
    return o;
  }

  module25.default(w, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.slType = ReactNative.DeviceEventEmitter.addListener('slTypeData', function (o) {
          t.slfunIcon(o);
        });
        this.xlType = ReactNative.DeviceEventEmitter.addListener('xlTypeData', function (o) {
          t.xlfunIcon(o);
        });
        this.workValue = ReactNative.DeviceEventEmitter.addListener('workValue', function (o) {
          t.setState(
            {
              WorkModeNum: o,
            },
            function () {
              t.equipmentStatus();
            }
          );
        });
        this.subValue = ReactNative.DeviceEventEmitter.addListener('subValue', function (o) {
          t.setState(
            {
              subMode: o,
            },
            function () {
              t.equipmentStatus();
            }
          );
        });
        this.wsEvent = ReactNative.DeviceEventEmitter.addListener('wsEvent', function (o) {
          t.setState(
            {
              equipmentPort: o.port,
              equipmentIp: o.ip,
            },
            function () {
              t.WebSocketConnect();
            }
          );
        });
        module599.default.getIpAddress().then(function (o) {
          t.setState({
            wifiIp: o,
          });
        });
        ReactNative.AppState.addEventListener('change', this.getIpAddress);
        this.equipmentStatus();
        this.NumberFun();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.slType) this.slType.emitter.removeAllListeners('slTypeData');
        if (this.xlType) this.xlType.emitter.removeAllListeners('xlTypeData');
        if (this.workValue) this.workValue.emitter.removeAllListeners('workValue');
        if (this.subValue) this.subValue.emitter.removeAllListeners('subValue');
        if (this.wsEvent) this.wsEvent.emitter.removeAllListeners('wsEvent');

        this.setState = function (t, o) {};
      },
    },
    {
      key: 'NumberFun',
      value: function () {
        for (
          var t = this.props.route.params.AppFunction, o = t.waterSpeedGearsNumber, n = t.fanControlGearsNumber, s = o.split(','), l = n.split(','), c = [], u = [], f = 0;
          f < s.length;
          f++
        )
          c.push(this.state.slList[s[f]]);

        for (var p = 0; p < l.length; p++) u.push(this.state.xlList[l[p]]);

        this.setState({
          xlList: u,
          slList: c,
        });
      },
    },
    {
      key: 'getProperties',
      value: function () {
        var t = this;
        module593.default.get('clickRobotId').then(function (o) {
          if ('a1bp8GkMOe2' == o)
            t.setState({
              isDisSlIcon: 1,
            });
        });
        module599.default.getIpAddress().then(function (o) {
          t.setState({
            wifiCurrent: o,
          });
        });
        module1145.default.getProperties(this.state.iotId).then(function (o) {
          if (200 == o.code) {
            var n = o.data;
            t.setState(
              {
                slNum: n.waterLv,
                xlNum: n.windLv,
                WorkModeNum: n.mode,
                mapId: n.map && '' != n.map ? JSON.parse(n.map).data.mapId : -1,
                wifiold: n.WiFI_IP,
              },
              function () {
                t.slfunIcon(n.waterLv);
                t.xlfunIcon(n.windLv);
                t.equipmentStatus();
                t.isEqualIPAddress();
              }
            );
          }
        });
      },
    },
    {
      key: 'isEqualIPAddress',
      value: function () {
        var t = function (t) {
            var o = t.lastIndexOf('.');
            return t.substr(0, o);
          },
          n = t(this.state.wifiCurrent),
          s = t(this.state.wifiold);

        console.log(n + '====' + s);
        return (
          !!s.startsWith(n) ||
          (module1110.default(function () {
            module1096.default.info(module594.default.t('useTheRemoteControlFunction'), 1, undefined, false);
          }),
          false)
        );
      },
    },
    {
      key: 'getLocalControlParam',
      value: function () {
        module1145.default.getLocalControlParam(this.state.iotId);
      },
    },
    {
      key: 'WebSocketConnect',
      value: function () {
        this.socket = module1455.default.createSocket('udp4');
        this.socket.bind([this.state.equipmentPort]);
      },
    },
    {
      key: 'equipmentStatus',
      value: function () {
        switch (this.state.WorkModeNum) {
          case 'idle':
            this.setState({
              robotTxt: module594.default.t('standby'),
              robotTypeIcon: this.state.powerImg,
              cleanzGoImg: require('./1352'),
            });
            break;

          case 'sweep':
            var t = '';

            switch (this.state.subMode) {
              case 'null':
                t = module594.default.t('standby');
                break;

              case 'area':
                t = module594.default.t('areaCleaning');
                break;

              case 'curpoint':
              case 'point':
                t = module594.default.t('pointCleaning');
                break;

              case 'total':
                t = module594.default.t('totalCleaning');
                break;

              case 'smart_area':
              case 'smart_total':
                t = module594.default.t('intelligentGlobal');
            }

            this.setState({
              robotTxt: t,
              cleanzGoImg: require('./1361'),
              robotTypeIcon: require('./1223'),
            });
            break;

          case 'charge':
            this.setState({
              robotTxt: module594.default.t('charge'),
              cleanzGoImg: require('./1352'),
              robotTypeIcon: this.state.powerImg,
            });
            break;

          case 'pause':
            this.setState({
              robotTxt: module594.default.t('pause'),
              cleanzGoImg: require('./1352'),
              robotTypeIcon: this.state.powerImg,
            });
            break;

          case 'fault':
            this.setState({
              robotTxt: module594.default.t('fault'),
              cleanzGoImg: require('./1352'),
              robotTypeIcon: require('./1224'),
            });
            break;

          case 'dormant':
            this.setState({
              robotTxt: module594.default.t('dormant'),
              cleanzGoImg: require('./1352'),
              robotTypeIcon: this.state.powerImg,
            });
            break;

          case 'backcharge':
            this.setState({
              robotTxt: module594.default.t('backcharge'),
              cleanzGoImg: require('./1361'),
              robotTypeIcon: this.state.powerImg,
            });
            break;

          case 'fullcharge':
            this.setState({
              robotTxt: module594.default.t('fullcharge'),
              robotTypeIcon: this.state.powerImg,
              cleanzGoImg: require('./1352'),
            });
            break;

          case 'findchargerpause':
            this.setState({
              robotTxt: module594.default.t('findchargerpause'),
              cleanzGoImg: require('./1352'),
              robotTypeIcon: this.state.powerImg,
            });
            break;

          case 'shutdown':
            this.setState({
              robotTxt: module594.default.t('shutdown'),
              robotTypeIcon: require('./1362'),
              cleanzGoImg: require('./1352'),
            });
            break;

          case 'rfctrl':
            this.setState({
              robotTxt: module594.default.t('rfctrl'),
              cleanzGoImg: require('./1352'),
              robotTypeIcon: this.state.powerImg,
            });
        }
      },
    },
    {
      key: 'closeArea',
      value: function () {
        this.props.navigation.goBack();
      },
    },
    {
      key: 'bottomNav',
      value: function (t) {
        if (this.state.bottomNavIndex == t) t = null;
        this.setState({
          bottomNavIndex: t,
        });
      },
    },
    {
      key: 'slfun',
      value: function (t) {
        var o = this;
        module1145.default.setWaterLv(this.state.iotId, Number(t)).then(function (t) {
          o.bottomNav(null);
        });
      },
    },
    {
      key: 'xlfun',
      value: function (t) {
        var o = this;
        module1145.default.setWindLv(this.state.iotId, Number(t)).then(function (t) {
          o.bottomNav(null);
        });
      },
    },
    {
      key: 'slfunIcon',
      value: function (t) {
        switch (
          (this.setState({
            slNum: t,
          }),
          Number(t))
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
      key: 'xlfunIcon',
      value: function (t) {
        switch (
          (this.setState({
            xlNum: t,
          }),
          Number(t))
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
      key: 'socketSend',
      value: function (t) {
        var o = {
            data: {
              ctrlCode: t,
              sn: this.state.iotId,
              userId: this.state.userId,
            },
            infoType: 21020,
            connectionType: '1',
            dInfo: {
              userId: 'lghUserId',
              ts: '21973',
            },
          },
          n = JSON.stringify(o);
        if (this.socket) this.socket.send(n, undefined, undefined, this.state.equipmentPort, this.state.equipmentIp, function (t) {});
      },
    },
    {
      key: 'clickControl',
      value: function (t) {
        if (this.isEqualIPAddress()) this.socketSend(t);
      },
    },
    {
      key: 'remoteControl',
      value: function (t) {
        var o = this;
        if (this.isEqualIPAddress())
          this.state.interval = setInterval(function () {
            o.socketSend(t);
          }, 200);
      },
    },
    {
      key: 'stopTime',
      value: function () {
        if (this.state.interval) clearInterval(this.state.interval);
      },
    },
    {
      key: 'controlGo',
      value: function () {
        var t = this.state.WorkModeNum;
        if ('sweep' == t || 'backcharge' == t) module1145.default.pauseSweep(this.state.iotId, true);
        else if (!('findchargerpause' != t && 'pause' != t && 'fault' != t && 'charge' != t && 'fullcharge' != t && 'rfctrl' != t && 'idle' != t))
          module1145.default.startCurPointSweep(this.state.iotId, this.state.mapId);
      },
    },
    {
      key: 'continueCleanBtn',
      value: function () {
        var t = this.state.WorkModeNum;
        if ('sweep' == t || 'backcharge' == t) module1145.default.pauseSweep(this.state.iotId, true);
        else module1145.default.goCharge(this.state.iotId);
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
              style: k.controlBox,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: k.cleanTop,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: k.cleanTopBpx,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: k.cleanTopContent,
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
                      resizeMode: 'contain',
                      style: [k.cleanIcon],
                    })
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: k.cleanTitle,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: k.cleanTitleContent,
                      },
                      this.state.nickname
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: k.cleanTitleStatus,
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: this.state.robotTypeIcon,
                        resizeMode: 'repeat',
                        style: k.clearImg,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: k.cleanTitleStatusTxt,
                        },
                        this.state.robotTxt
                      )
                    )
                  )
                )
              )
            ),
            React.default.createElement(
              ReactNative.ImageBackground,
              {
                source: require('./1460'),
                resizeMode: 'contain',
                style: k.controlBack,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [k.controlLi, k.controlTop],
                  onPress: function () {
                    t.clickControl(3005);
                  },
                  onLongPress: function () {
                    t.remoteControl(3005);
                  },
                  onPressOut: function () {
                    t.stopTime();
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1461'),
                  style: k.controlLiIcon,
                })
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [k.controlLi, k.controlBottom],
                  onPress: function () {
                    t.clickControl(3006);
                  },
                  onLongPress: function () {
                    t.remoteControl(3006);
                  },
                  onPressOut: function () {
                    t.stopTime();
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1462'),
                  style: k.controlLiIcon,
                })
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [k.controlLi, k.controlLiLeft],
                  onPress: function () {
                    t.clickControl(3007);
                  },
                  onLongPress: function () {
                    t.remoteControl(3007);
                  },
                  onPressOut: function () {
                    t.stopTime();
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1463'),
                  style: k.controlLiIcon,
                })
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [k.controlLi, k.controlRight],
                  onPress: function () {
                    t.clickControl(3008);
                  },
                  onLongPress: function () {
                    t.remoteControl(3008);
                  },
                  onPressOut: function () {
                    t.stopTime();
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1464'),
                  style: k.controlLiIcon,
                })
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [k.controlLi, k.controlzj],
                  onPress: function () {
                    return module1110.default(function () {
                      t.controlGo();
                    });
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: this.state.cleanzGoImg,
                  style: k.controlLiIcon,
                })
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: k.stBox,
              },
              0 == this.state.isDisSlIcon
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: k.controlFiles,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: k.controlFilesLi,
                      },
                      0 == this.state.bottomNavIndex
                        ? React.default.createElement(
                            ReactNative.ImageBackground,
                            {
                              source: require('./1465'),
                              resizeMode: 'contain',
                              style: k.controlFilesLiBck,
                            },
                            this.state.slList.map(function (o, n) {
                              return React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  style: k.controlFilesLiBox,
                                  key: n,
                                  onPress: function () {
                                    t.slfun(n);
                                  },
                                },
                                t.state.slNum == n
                                  ? React.default.createElement(ReactNative.Image, {
                                      source: t.state.slListImg,
                                      resizeMode: 'contain',
                                      style: k.controlLiType,
                                    })
                                  : React.default.createElement(ReactNative.Image, {
                                      source: o.img,
                                      resizeMode: 'contain',
                                      style: k.controlLiType,
                                    })
                              );
                            })
                          )
                        : null
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: k.controlFilesLi,
                      },
                      1 == this.state.bottomNavIndex
                        ? React.default.createElement(
                            ReactNative.ImageBackground,
                            {
                              source: require('./1465'),
                              resizeMode: 'contain',
                              style: k.controlFilesLiBck,
                            },
                            this.state.xlList.map(function (o, n) {
                              return React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  style: k.controlFilesLiBox,
                                  key: n,
                                  onPress: function () {
                                    t.xlfun(n);
                                  },
                                },
                                t.state.xlNum == n
                                  ? React.default.createElement(ReactNative.Image, {
                                      source: t.state.xlListImg,
                                      resizeMode: 'contain',
                                      style: k.controlLiType,
                                    })
                                  : React.default.createElement(ReactNative.Image, {
                                      source: o.img,
                                      resizeMode: 'contain',
                                      style: k.controlLiType,
                                    })
                              );
                            })
                          )
                        : null
                    ),
                    React.default.createElement(ReactNative.View, {
                      style: k.controlFilesLi,
                    })
                  )
                : React.default.createElement(
                    ReactNative.View,
                    {
                      style: k.controlFiles,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: k.controlFilesLi,
                      },
                      0 == this.state.bottomNavIndex
                        ? React.default.createElement(
                            ReactNative.ImageBackground,
                            {
                              source: require('./1465'),
                              resizeMode: 'contain',
                              style: k.controlFilesLiBck,
                            },
                            this.state.xlList.map(function (o, n) {
                              return React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  style: k.controlFilesLiBox,
                                  key: n,
                                  onPress: function () {
                                    t.xlfun(n);
                                  },
                                },
                                t.state.xlNum == n
                                  ? React.default.createElement(ReactNative.Image, {
                                      source: t.state.xlListImg,
                                      resizeMode: 'contain',
                                      style: k.controlLiType,
                                    })
                                  : React.default.createElement(ReactNative.Image, {
                                      source: o.img,
                                      resizeMode: 'contain',
                                      style: k.controlLiType,
                                    })
                              );
                            })
                          )
                        : null
                    ),
                    React.default.createElement(ReactNative.View, {
                      style: k.controlFilesLi,
                    })
                  ),
              0 == this.state.isDisSlIcon
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: k.stBoxBtn,
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: k.stBoxBtnLi,
                        onPress: function () {
                          module1110.default(function () {
                            t.bottomNav(0);
                          });
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: this.state.slListImg,
                        style: k.stBoxBtnlIImg,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: k.stBoxBtnTxt,
                        },
                        module594.default.t('waterAdjust')
                      )
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: k.stBoxBtnLi,
                        onPress: function () {
                          t.bottomNav(1);
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: this.state.xlListImg,
                        style: k.stBoxBtnlIImg,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: k.stBoxBtnTxt,
                        },
                        module594.default.t('suctionAdjust')
                      )
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: k.stBoxBtnLi,
                        onPress: function () {
                          t.bottomNav(2);
                          t.continueCleanBtn();
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1466'),
                        style: k.stBoxBtnlIImg,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: k.stBoxBtnTxt,
                        },
                        module594.default.t('backcharge')
                      )
                    )
                  )
                : React.default.createElement(
                    ReactNative.View,
                    {
                      style: k.stBoxBtn,
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: k.stBoxBtnLi,
                        onPress: function () {
                          t.bottomNav(0);
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: this.state.xlListImg,
                        style: k.stBoxBtnlIImg,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: k.stBoxBtnTxt,
                        },
                        module594.default.t('suctionAdjust')
                      )
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: k.stBoxBtnLi,
                        onPress: function () {
                          t.bottomNav(1);
                          t.continueCleanBtn();
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1466'),
                        style: k.stBoxBtnlIImg,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: k.stBoxBtnTxt,
                        },
                        module594.default.t('backcharge')
                      )
                    )
                  )
            )
          )
        );
      },
    },
  ]);
  return w;
})(React.default.Component);

exports.restrictedArea = module1466;
var k = ReactNative.StyleSheet.create({
    controlBox: {
      flex: 1,
      position: 'relative',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    controlFilesLiBox: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: module588.default.setSpText(10),
    },
    controlLiType: {
      width: module588.default.setSpText(25),
      height: module588.default.setSpText(25),
    },
    controlFilesLiBck: {
      width: module588.default.setSpText(46),
      marginBottom: module588.default.setSpText(15),
      position: 'relative',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: module588.default.setSpText(3),
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
    controlFiles: {
      flexDirection: 'row',
    },
    controlFilesLi: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    stBoxBtn: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(8),
    },
    stBoxBtnLi: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: module588.default.setSpText(12),
    },
    stBoxBtnlIImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    stBoxBtnTxt: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(10),
      paddingTop: module588.default.setSpText(8),
    },
    stBox: {
      position: 'absolute',
      width: '100%',
      paddingHorizontal: module588.default.setSpText(12),
      paddingBottom: module588.default.setSpText(12),
      bottom: 0,
    },
    controlLi: {
      position: 'absolute',
      width: module588.default.setSpText(75),
      height: module588.default.setSpText(75),
      top: '50%',
      left: '50%',
    },
    controlTop: {
      marginLeft: module588.default.setSpText(-37.5),
      marginTop: module588.default.setSpText(-130),
    },
    controlBottom: {
      marginLeft: module588.default.setSpText(-37.5),
      marginTop: module588.default.setSpText(50),
    },
    controlLiLeft: {
      marginTop: module588.default.setSpText(-37.5),
      marginLeft: module588.default.setSpText(-130),
    },
    controlRight: {
      marginTop: module588.default.setSpText(-37.5),
      marginLeft: module588.default.setSpText(50),
    },
    controlzj: {
      marginTop: module588.default.setSpText(-37.5),
      marginLeft: module588.default.setSpText(-37.5),
    },
    controlLiIcon: {
      width: module588.default.setSpText(75),
      height: module588.default.setSpText(75),
    },
    controlBack: {
      width: module588.default.setSpText(300),
      height: module588.default.setSpText(300),
      position: 'relative',
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
    },
    cleanTopContent: {
      flexDirection: 'row',
      paddingHorizontal: module588.default.setSpText(12),
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
      marginTop: module588.default.setSpText(5),
      paddingBottom: module588.default.setSpText(10),
    },
    cleanTitleStatusTxt: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
    },
    clearImg: {
      width: module588.default.setSpText(17),
      height: module588.default.setSpText(17),
      marginRight: module588.default.setSpText(10),
    },
  }),
  E = module1466;
exports.default = E;
