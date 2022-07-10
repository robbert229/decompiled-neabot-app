var module403 = require('./403'),
  module1135 = require('./1135'),
  module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module1147 = require('./1147'),
  module1145 = require('./1145'),
  module594 = require('./594');

require('./1110');

function M() {
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

var module1230 = (function (t) {
  module35.default(N, t);

  var module588 = N,
    module1230 = M(),
    E = function () {
      var t,
        s = module34.default(module588);

      if (module1230) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(s, arguments, o);
      } else t = s.apply(this, arguments);

      return module37.default(this, t);
    };

  function N(t) {
    var s;
    module24.default(this, N);
    s = E.call(this, t);
    var o = JSON.parse(JSON.stringify(s.props.route.params));
    s.state = {
      UpdateMapProgress: o.UpdateMapProgress,
      map: o.map,
      mapId: o.mapId,
      iotId: o.iotId,
      userId: o.userId,
      nickname: o.nickname,
      deviceName: o.deviceName,
      firmwareVersion: o.firmwareVersion,
      dustFreq: o.dustFreq,
      owned: o.owned,
      productId: o.productId,
      AppFunction: o.AppFunction,
      moreLiData: [
        {
          name: module594.default.t('mapSettings'),
          childe: [
            {
              childeName: module594.default.t('partitionManagement'),
              img: require('./1411'),
              typeid: 0,
            },
            {
              childeName: module594.default.t('areaManagement'),
              img: require('./1378'),
              typeid: 1,
            },
            {
              childeName: module594.default.t('resetMap'),
              img: require('./1412'),
              typeid: 2,
            },
          ],
        },
        {
          name: module594.default.t('equipmentRelated'),
          childe: [
            {
              childeName: module594.default.t('sharedEquipment'),
              img: require('./1413'),
              typeid: 3,
            },
            {
              childeName: module594.default.t('mapManagement'),
              img: require('./1414'),
              typeid: 4,
            },
            {
              childeName: module594.default.t('firmwareUpgrade'),
              img: require('./1415'),
              typeid: 13,
            },
            {
              childeName: module594.default.t('cleanUpRecords'),
              img: require('./1416'),
              typeid: 5,
            },
            {
              childeName: module594.default.t('consumablesRecord'),
              img: require('./1417'),
              typeid: 6,
            },
            {
              childeName: module594.default.t('deviceInformation'),
              img: require('./1418'),
              typeid: 7,
            },
            {
              childeName: module594.default.t('voicePackage'),
              img: require('./1419'),
              typeid: 8,
            },
            {
              childeName: module594.default.t('DustCollectionFunction'),
              img: require('./1420'),
              typeid: 9,
            },
          ],
        },
        {
          name: module594.default.t('moreFeatures'),
          childe: [
            {
              childeName: module594.default.t('remoteControl'),
              img: require('./1421'),
              typeid: 10,
            },
            {
              childeName: module594.default.t('productGuide'),
              img: require('./1422'),
              typeid: 11,
            },
            {
              childeName: module594.default.t('M1628487937'),
              img: require('./1423'),
              typeid: 12,
            },
          ],
        },
      ],
      idarkright: require('./1230'),
      isAlert: false,
      alertType: null,
      gjData: '',
      version: '',
      status: '',
      unlock: false,
    };
    s.isowned();
    s.getStatusGo();
    return s;
  }

  module25.default(N, [
    {
      key: 'componentDidMount',
      value: function () {
        this.cleanMap = ReactNative.DeviceEventEmitter.addListener('cleanMap', function (t) {
          ReactNative.DeviceEventEmitter.emit('isMap');
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        ReactNative.DeviceEventEmitter.emit('isMap');
        this.cleanMap.emitter.removeAllListeners('cleanMap');

        this.setState = function (t, s) {};
      },
    },
    {
      key: 'isowned',
      value: function () {
        if (
          (1 != this.state.owned && (this.removeByValue(this.state.moreLiData[1].childe, 'typeid', 3), this.removeByValue(this.state.moreLiData[1].childe, 'typeid', 13)),
          null != JSON.parse(JSON.stringify(this.props.route.params)).AppFunction)
        ) {
          var t = JSON.parse(JSON.stringify(this.props.route.params)).AppFunction,
            s = t.automaticPartitioning,
            o = t.dustCollection,
            n = t.productGuide;
          if (1 != s) this.removeByValue(this.state.moreLiData[0].childe, 'typeid', 0);
          if (1 != o) this.removeByValue(this.state.moreLiData[1].childe, 'typeid', 9);
          if (0 == n) this.removeByValue(this.state.moreLiData[2].childe, 'typeid', 11);
        }

        if (this.state.firmwareVersion) {
          var l = this.state.firmwareVersion.split('_');
          console.log('\u56fa\u4ef6\u7248\u672c\u53f7\uff1a' + JSON.stringify(this.state.firmwareVersion), 'newStr: ' + l[1]);
          var c = l[1];
          if (!Config.MutilMap || c < 2655) this.removeByValue(this.state.moreLiData[this.state.moreLiData.length - 1].childe, 'typeid', 12);
        } else Config.MutilMap || this.removeByValue(this.state.moreLiData[this.state.moreLiData.length - 1].childe, 'typeid', 12);
      },
    },
    {
      key: 'removeByValue',
      value: function (t, s, o) {
        var n = 0;

        for (var l in t)
          if (t[l][s] == o) {
            n = l;
            break;
          }

        t.splice(n, 1);
      },
    },
    {
      key: 'getStatusGo',
      value: function () {
        var t = this;
        module1145.default.getStatus(this.state.iotId).then(function (s) {
          if (200 == s.code) {
            var o = s.data;
            t.setState(
              {
                isOnline: 1 == o.status ? o.status : 0,
                status: o.status,
              },
              function () {
                module1145.default.sendAppState(t.state.iotId, t.state.isOnline);
                t.sendAppStateFun();
              }
            );
          }
        });
      },
    },
    {
      key: 'sendAppStateFun',
      value: function () {
        var t = this;
        this.state.AppStatesendAppState = setInterval(function () {
          module1145.default.sendAppState(t.state.iotId, t.state.isOnline);
        }, 3e4);
      },
    },
    {
      key: 'openWinType',
      value: function (t) {
        var s = this.props.navigation.navigate,
          o = {
            iotId: this.state.iotId,
            editType: 1,
            nickname: this.state.nickname,
            AppFunction: this.state.AppFunction,
          };

        switch (t) {
          case 0:
            o.mapName = 'partitionMap';
            ReactNative.DeviceEventEmitter.emit('isMoreMap', o);
            break;

          case 1:
            o.mapName = 'restrictedArea';
            ReactNative.DeviceEventEmitter.emit('isMoreMap', o);
            break;

          case 2:
            if (3 == this.state.status) {
              module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
              return false;
            }

            this.setState({
              isAlert: true,
              alertType: 'RM',
            });
            break;

          case 3:
            s('shareIt', {
              iotId: this.state.iotId,
              nickname: this.state.nickname,
              deviceName: this.state.deviceName,
            });
            break;

          case 4:
            s('mapControl', {
              iotId: this.state.iotId,
              deviceName: this.state.deviceName,
              map: this.state.map,
              mapId: this.state.mapId,
              UpdateMapProgress: this.state.UpdateMapProgress,
            });
            break;

          case 5:
            s('sweepRecording', {
              iotId: this.state.iotId,
              deviceName: this.state.deviceName,
              AppFunction: this.state.AppFunction,
            });
            break;

          case 6:
            s('supplies', {
              iotId: this.state.iotId,
            });
            break;

          case 7:
            s('deviceInfor', {
              iotId: this.state.iotId,
              deviceName: this.state.deviceName,
            });
            break;

          case 8:
            if (3 == this.state.status) {
              module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
              return false;
            }

            s('voice', {
              iotId: this.state.iotId,
              productId: this.state.productId,
            });
            break;

          case 9:
            s('dustCollection', {
              iotId: this.state.iotId,
              dustFreq: this.state.dustFreq,
              productId: this.state.productId,
            });
            break;

          case 10:
            s('remoteControl', this.props.route.params);
            break;

          case 11:
            s('operationGuide', {
              nickname: this.state.nickname,
              productId: this.state.productId,
              guideType: 0,
            });
            break;

          case 12:
            if ('android' == ReactNative.Platform.OS) {
              o.deviceId = this.state.iotId;
              o.mapId = this.state.mapId;
              o.mapName = 'MutilMapController';
              ReactNative.DeviceEventEmitter.emit('isMoreMap', o);
            } else
              this.props.navigation.navigate('MutilMapController', {
                deviceId: this.state.iotId,
                mapId: this.state.mapId,
                AppFunction: this.state.AppFunction,
              });

            break;

          case 13:
            if (3 == this.state.status) {
              module1096.default.info(module594.default.t('notOnline'), 1, undefined, false);
              return false;
            }

            s('firmwareUpdata', {
              iotId: this.state.iotId,
            });
        }
      },
    },
    {
      key: 'delEquipment',
      value: function () {
        this.setState({
          isAlert: true,
          alertType: 'EM',
        });
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
            ReactNative.ScrollView,
            {
              style: x.scrollView,
              showsHorizontalScrollIndicator: false,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: x.moreBox,
              },
              this.state.moreLiData.map(function (s, o) {
                return React.default.createElement(
                  ReactNative.View,
                  {
                    style: x.moreBoxLi,
                    key: o,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: x.moreBoxLiTitle,
                    },
                    ' ',
                    s.name,
                    ' '
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: x.moreBoxLiContent,
                    },
                    s.childe.map(function (s, o) {
                      return 12 == s.typeid
                        ? Config.MutilMap && 'a1iQ12ffASR' == t.state.productId
                          ? React.default.createElement(
                              ReactNative.TouchableOpacity,
                              {
                                style: x.moreBoxLiChild,
                                key: o,
                                onPress: function () {
                                  t.openWinType(s.typeid);
                                },
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: s.img,
                                resizeMode: 'cover',
                                style: x.childIcon,
                              }),
                              React.default.createElement(
                                ReactNative.Text,
                                {
                                  style: x.childTitle,
                                },
                                s.childeName
                              ),
                              React.default.createElement(ReactNative.Image, {
                                source: t.state.idarkright,
                                resizeMode: 'cover',
                                style: x.childIcon,
                              })
                            )
                          : null
                        : React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              style: x.moreBoxLiChild,
                              key: o,
                              onPress: function () {
                                t.openWinType(s.typeid);
                              },
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: s.img,
                              resizeMode: 'cover',
                              style: x.childIcon,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: x.childTitle,
                              },
                              s.childeName
                            ),
                            React.default.createElement(ReactNative.Image, {
                              source: t.state.idarkright,
                              resizeMode: 'cover',
                              style: x.childIcon,
                            })
                          );
                    })
                  )
                );
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: x.warningBtn,
                },
                React.default.createElement(
                  module1135.default,
                  {
                    type: 'warning',
                    size: 'small',
                    style: x.moreJc,
                    onPress: function () {
                      t.delEquipment();
                    },
                  },
                  module594.default.t('disarmDevice')
                )
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
                    navigation: this.props.navigation,
                    version: this.state.version,
                  },
                  onPick: function () {
                    t.setState({
                      isAlert: false,
                    });
                  },
                  onData: function (o) {
                    switch (o) {
                      case 1:
                        t.props.navigation.navigate('firmwareUpdata', {
                          iotId: t.state.iotId,
                          gjData: t.state.gjData,
                        });
                        break;

                      case 2:
                        var l = module1096.default.loading();
                        ReactNative.DeviceEventEmitter.emit('clearMapStatus', 1);
                        setTimeout(function () {
                          module403.default.remove(l);
                          t.props.navigation.navigate('cleanIndex');
                        }, 2e3);
                    }
                  },
                })
              : null
          )
        );
      },
    },
  ]);
  return N;
})(React.default.Component);

exports.more = module1230;
var x = ReactNative.StyleSheet.create({
    moreBox: {
      flex: 1,
      backgroundColor: '#fff',
    },
    moreBoxLiTitle: {
      fontSize: module588.default.setSpText(12),
      color: '#658DC2',
      backgroundColor: '#F7F9FC',
      paddingVertical: module588.default.setSpText(6),
      paddingLeft: module588.default.setSpText(20),
    },
    moreBoxLiContent: {
      paddingHorizontal: module588.default.setSpText(20),
    },
    moreBoxLiChild: {
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: module588.default.setSpText(14),
      borderBottomWidth: module588.default.setSpText(1),
      borderBottomColor: module588.default.setSpText(1),
      borderBottomColor: '#E1E7F5',
    },
    childTitle: {
      flex: 1,
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
      marginLeft: module588.default.setSpText(14),
    },
    childIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    warningBtn: {
      paddingHorizontal: module588.default.setSpText(10),
      marginTop: module588.default.setSpText(10),
      marginBottom: module588.default.setSpText(10),
    },
    moreJc: {
      backgroundColor: '#E95B55',
      borderWidth: module588.default.setSpText(1),
      borderRadius: module588.default.setSpText(8),
      color: '#F5F6FA',
      height: module588.default.setSpText(48),
      fontSize: module588.default.setSpText(14),
    },
  }),
  E = module1230;
exports.default = E;
