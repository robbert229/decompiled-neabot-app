require('./1230');

(function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var n = A(o);
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
})(require('./1181'));

require('./426');

require('./916');

var regeneratorRuntime = require('regenerator-runtime'),
  module1131 = require('./1131'),
  module1132 = require('./1132'),
  module1096 = require('./1096'),
  module1117 = require('./1117'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module1148 = require('./1148'),
  module943 = require('./943'),
  module1146 = require('./1146'),
  module594 = require('./594'),
  module593 = require('./593'),
  module1315 = require('./1315'),
  module1188 = require('./1188'),
  module421 = require('./421'),
  module1316 = require('./1316'),
  module1317 = require('./1317');

function A(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (A = function (t) {
    return t ? n : o;
  })(t);
}

function O() {
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

var module1318 = (function (t) {
  module35.default(F, t);

  var module588 = F,
    A = O(),
    module1256 = function () {
      var t,
        o = module34.default(module588);

      if (A) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function F(t) {
    var o;
    module24.default(this, F);

    (o = module1256.call(this, t))._handleAppStateChange = function (t) {};

    var n = o.props.route.params;
    o.state = {
      activeSections: [2, 0],
      spinValue: new ReactNative.Animated.Value(0),
      isContenIndex: 0,
      shoppListData: [],
      appWIFI: require('./1318'),
      appBluetooth: require('./1319'),
      shopNull: 0,
      networkBtnLi: [
        {
          name: module594.default.t('appBluetooth'),
          img: require('./1319'),
          typeNet: 'Blue',
        },
        {
          name: module594.default.t('O1618641317'),
          img: require('./1319'),
          typeNet: 'one',
        },
        {
          name: module594.default.t('S1618641306'),
          img: require('./1320'),
          typeNet: 'code',
        },
        {
          name: module594.default.t('appWork'),
          img: require('./1318'),
          typeNet: 'app',
        },
      ],
      isNetConnected: null,
      connectionInfo: null,
      isFirstInit: false,
      getAppFunctionContent: n && undefined != n.appRobotSet ? n.appRobotSet : null,
    };

    o.onChange = function (t) {
      o.setState({
        activeSections: t,
      });
    };

    console.log('====================================');
    console.log('????????]]]]]:' + JSON.stringify(n));
    console.log('====================================');

    try {
      if (n && undefined != n.appRobotSet && null != n.appRobotSet) {
        console.log('====================================');
        console.log('111');
        console.log('====================================');
        o.getProductByAppData(n.appRobotSet);
      } else {
        console.log('====================================');
        console.log('222');
        console.log('====================================');
        o.getProductByAppData();
      }
    } catch (t) {}

    return o;
  }

  module25.default(F, [
    {
      key: 'spin',
      value: function () {
        this.state.spinValue.setValue(0);
        var t = ReactNative.Animated.timing(this.state.spinValue, {
          toValue: 1,
          duration: 800,
          easing: ReactNative.Easing.linear,
          useNativeDriver: true,
        });
        ReactNative.Animated.loop(t).start();
      },
    },
    {
      key: 'getAppFunctionVersion',
      value: function () {
        var t = this,
          o = this.props.route.params;
        console.log('params====\u83b7\u53d6\u673a\u5668\u4eba\u540e\u53f0\u914d\u7f6e\u4fe1\u606f===========' + JSON.stringify(o));
        if (o && undefined != o && null != o.appRobotSet) this.getProductByAppData(o);
        else
          module1146.default.getAppFunctionVersion().then(function (o) {
            if (200 == o.code)
              module1146.default.getAppFunctionContent(o.url).then(function (n) {
                if ((console.log('====\u83b7\u53d6\u673a\u5668\u4eba\u540e\u53f0\u914d\u7f6e\u4fe1\u606f===msg=111=======' + JSON.stringify(n)), !Config.showId && n))
                  for (var l = 0; l < n.length; l++) n[l].productId || (n[l].productId = n[l].productKey);
                var s = {
                  getAppFunctionVersion: o.version,
                  getAppFunctionContent: n,
                };
                module593.default.save('getAppFunction', s);
                t.getProductByAppData(n);
              });
            else if ('1101354' == o.code) t.getProductByAppData();
          });
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        ReactNative.AppState.addEventListener('change', this._handleAppStateChange);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.setState = function (t, o) {};
      },
    },
    {
      key: 'gotoWifi',
      value: function (t) {
        this.props.navigation.navigate('networkWifi', t);
      },
    },
    {
      key: 'checkLocationPermission',
      value: function (t) {
        var n = this;
        return regeneratorRuntime.default.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  this.props.navigation.navigate;
                  module1316.default.checkLocation(
                    function () {
                      console.log('dddddsafsfsfsadf============================================');
                      n.gotoWifi(t);
                    },
                    function () {
                      module1117.default.alert(
                        'ios' === ReactNative.Platform.OS ? module594.default.t('localPermissionTip') : module594.default.t('Tips'),
                        'ios' === ReactNative.Platform.OS ? module594.default.t('localPermissionContent') : module594.default.t('openGPS'),
                        [
                          {
                            text: module594.default.t('cancel'),
                            style: 'cancel',
                          },
                          {
                            text: module594.default.t('toTravelTo'),
                            onPress: function () {
                              ReactNative.NativeModules.RNPermissions.openDefaultWorks('App-Prefs:root=Privacy&path=LOCATION')
                                .then(function (t) {})
                                .catch(function (t) {});
                            },
                          },
                        ]
                      );
                    },
                    undefined,
                    undefined
                  );

                case 2:
                case 'end':
                  return o.stop();
              }
          },
          null,
          this,
          null,
          Promise
        );
      },
    },
    {
      key: 'askForGPS',
      value: function (t) {
        var n;
        return regeneratorRuntime.default.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  n = this.props.navigation.navigate;
                  module1315.default
                    .checkLocationServicesIsEnabled({
                      message: module594.default.t('openGPS') + '<br/>',
                      ok: module594.default.t('openGPSSure'),
                      cancel: module594.default.t('cancel'),
                      enableHighAccuracy: true,
                      showDialog: true,
                      openLocationServices: true,
                      preventOutSideTouch: false,
                      preventBackClick: false,
                      providerListener: true,
                    })
                    .then(
                      function (o) {
                        n('networkWifi', {
                          params: t,
                        });
                      }.bind(this)
                    )
                    .catch(function (t) {});

                case 2:
                case 'end':
                  return o.stop();
              }
          },
          null,
          this,
          null,
          Promise
        );
      },
    },
    {
      key: 'workList',
      value: function (t, o) {
        this.setState({
          shoppListData: this.state.shoppListData.map(function (n, l) {
            if (l == o)
              n.dataLi.map(function (o, n) {
                o.isLishow = n == t && !o.isLishow;
                return o;
              });
            return n;
          }),
        });
      },
    },
    {
      key: 'getProductByAppData',
      value: function (t) {
        var o = this;
        module1188.default.fetch().then(function (n) {
          o.setState({
            isNetConnected: n.isConnected,
          });
          if (o.state.isNetConnected)
            module943.default.getProductByAppKey().then(
              function (n) {
                var l = n.data;

                if ((console.log('@@@@@@@@@' + JSON.stringify(l), '22321432;=======' + JSON.stringify(t)), undefined != l && '' != l && '{}' != JSON.stringify(l))) {
                  if (null == t) {
                    for (var u = 0; u < l.length; u++)
                      if (
                        (Config.showId || l[u].productId || (l[u].productId = l[u].productKey),
                        (l[u].btnLiAre = []),
                        l[u].hasOwnProperty('distributionNetworkMode') && 0 != l[u].distributionNetworkMode.length && l[u].distributionNetworkMode)
                      )
                        for (var c = 0; c < l[u].distributionNetworkMode.length; c++) l[u].btnLiAre.push(o.state.networkBtnLi[l[u].distributionNetworkMode[c] - 1]);
                      else {
                        l[u].btnLiAre.push(o.state.networkBtnLi[0]);
                        l[u].btnLiAre.push(o.state.networkBtnLi[3]);
                      }
                  } else
                    for (var f = 0; f < t.length; f++)
                      for (var p = 0; p < l.length; p++)
                        if (
                          (Config.showId || (t[f].productId || (t[f].productId = t[f].productKey), l[p].productId || (l[p].productId = l[p].productKey)),
                          t[f].productKey == l[p].productId)
                        )
                          if (
                            ((l[p].distributionNetworkMode = t[f].APP_function.distributionNetworkMode.split(',')),
                            (l[p].btnLiAre = []),
                            0 != l[p].distributionNetworkMode.length && l[p].distributionNetworkMode)
                          )
                            for (var h = 0; h < l[p].distributionNetworkMode.length; h++) l[p].btnLiAre.push(o.state.networkBtnLi[l[p].distributionNetworkMode[h] - 1]);
                          else l[p].btnLiAre.push(o.state.networkBtnLi[0]);
                  o.setState({
                    ceLi: l,
                    shopNull: l ? l.length : 0,
                  });
                  o.ceLidata();
                } else
                  401 == n.code &&
                    module1096.default.info(
                      module594.default.t('C1619077654'),
                      1,
                      o.props.navigation.dispatch(
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
              },
              function (t, o) {
                if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                  Object.keys(t).map(function (o) {
                    if ('code' == o) {
                      var n = t[o];
                      n;
                    }

                    if ('message' == o) t[o];
                  });
                }
              }
            );
          else module1096.default.info(module594.default.t('noNetwork'), 1, undefined, false);
        });
      },
    },
    {
      key: 'ceLidata',
      value: function () {
        var t = this.state.ceLi;

        if ((console.log('=================== \u8bbe\u5907\u5217\u8868\u91cd\u7ec4 ' + JSON.stringify(this.state.ceLi)), undefined != t && '' != t && '{}' != JSON.stringify(t))) {
          var o = t.reduce(function (t, o) {
            var n = t.find(function (t) {
              return o.categoryName === t.categoryName;
            });

            if (((o.isLishow = false), Config.showLS)) {
              if ('a1iQ12ffASR' != o.productId)
                if (n) -1 == n.dataLi.indexOf(o) && n.dataLi.push(o);
                else {
                  var l = {
                    categoryName: o.categoryName,
                    dataLi: [o],
                  };
                  t.push(l);
                }
            } else if (n) -1 == n.dataLi.indexOf(o) && n.dataLi.push(o);
            else {
              l = {
                categoryName: o.categoryName,
                dataLi: [o],
              };
              t.push(l);
            }

            return t;
          }, []);
          this.setState({
            shoppListData: o,
          });
        }
      },
    },
    {
      key: 'shopLiShow',
      value: function (t) {
        if (t == this.state.isContenIndex) t = null;
        this.setState({
          isContenIndex: t,
        });
      },
    },
    {
      key: 'networkBtnFun',
      value: function (t, o) {
        var n = this;
        this.props.navigation.navigate;

        switch (t) {
          case 'app':
            if ('android' === ReactNative.Platform.OS)
              this.askForGPS({
                productId: o || null,
              });
            else
              this.checkLocationPermission({
                productId: o || null,
              });
            break;

          case 'Blue':
            if ('ios' == ReactNative.Platform.OS)
              module1316.default.checkBlueTooth(
                function () {
                  module943.default.checkBLEEnable().then(function (t) {
                    if (t)
                      n.checkLocationPermission({
                        productId: o || null,
                        appBlue: true,
                      });
                    else module1096.default.info(module594.default.t('P1618641214'), 1, undefined, false);
                  });
                },
                function () {
                  module1117.default.alert((ReactNative.Platform.OS, module594.default.t('bluetoothTitle')), (ReactNative.Platform.OS, module594.default.t('bluetoothContents')), [
                    {
                      text: module594.default.t('cancel'),
                      style: 'cancel',
                    },
                    {
                      text: module594.default.t('toTravelTo'),
                      onPress: function () {
                        ReactNative.NativeModules.RNPermissions.openDefaultWorks('App-Prefs:root=Bluetooth')
                          .then(function (t) {})
                          .catch(function (t) {});
                      },
                    },
                  ]);
                },
                function () {
                  module1096.default.info('openBle', 1, undefined, false);
                }
              );
            else
              module943.default.checkBLEEnable().then(function (t) {
                if (t)
                  n.askForGPS({
                    productId: o || null,
                    appBlue: true,
                  });
                else module1096.default.info(module594.default.t('P1618641214'), 1, undefined, false);
              });
        }
      },
    },
    {
      key: 'render',
      value: function () {
        this.state.spinValue.interpolate({
          inputRange: [0, 0],
          outputRange: ['90deg', '90deg'],
        });
        var t = this,
          o = this.props.navigation.navigate,
          s = new module1148.default.DataSource({
            rowHasChanged: function (t, o) {
              return t !== o;
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
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              backgroundColor: '#fff',
              barStyle: 'dark-content',
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: D.topBackTitle,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: D.topImg,
                  hitSlop: {
                    left: 30,
                    right: 30,
                    top: 30,
                    bottom: 30,
                  },
                  onPress: function () {
                    o('tabNav');
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1256'),
                  style: {
                    width: '100%',
                    height: '100%',
                  },
                })
              ),
              React.default.createElement(ReactNative.Text, null, module594.default.t('selectEquipment'))
            ),
            React.default.createElement(
              module1131.default,
              {
                style: D.WingBlankBox,
              },
              React.default.createElement(module1148.default, {
                dataSource: s.cloneWithRows(this.state.shoppListData),
                showsVerticalScrollIndicator: false,
                enableEmptySections: true,
                contentContainerStyle: D.gride,
                renderRow: function (o, n, s) {
                  console.log('rowData.dataLi.length====>' + o.dataLi.length);
                  return React.default.createElement(
                    ReactNative.View,
                    {
                      style: D.shoppLiTopBox,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: D.shopLi,
                      },
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          style: {
                            flexDirection: 'row',
                            width: '100%',
                          },
                          onPress: function () {
                            t.shopLiShow(s);
                          },
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: D.listTitle,
                          },
                          module594.default.t('nullShopp').replace(/\%/g, o.dataLi ? o.dataLi.length : 0)
                        )
                      )
                    ),
                    React.default.createElement(
                      module1132.default,
                      {
                        wrap: 'wrap',
                        style: [
                          D.wrapLi,
                          {
                            display: t.state.isContenIndex == s ? 'flex' : 'none',
                          },
                        ],
                      },
                      o.dataLi.map(function (o, n) {
                        return React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            style: D.shoppList,
                            key: n,
                            onPress: function () {
                              console.log('========= 000 item = ' + JSON.stringify(t.state.shoppListData));
                              if ('a1iQ12ffASR' == o.productId) t.workList(n, s);
                              else t.networkBtnFun('app', o.productId);
                            },
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: D.shoppContent,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: {
                                uri: -1 == o.productImage.indexOf('https') ? o.productImage.replace('http', 'https') : o.productImage,
                              },
                              resizeMode: 'contain',
                              style: D.shoppContentImg,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: D.shoppContentTitle,
                              },
                              o.productName
                            ),
                            1 == o.isLishow
                              ? React.default.createElement(
                                  ReactNative.View,
                                  {
                                    style: D.shoppBtnZZ,
                                  },
                                  o.btnLiAre &&
                                    o.btnLiAre.map(function (n, l) {
                                      return React.default.createElement(
                                        ReactNative.TouchableOpacity,
                                        {
                                          key: l,
                                          style: [
                                            D.wifiBtn,
                                            {
                                              width: 'ko' == module594.default.locale && 0 == l ? '117%' : '100%',
                                            },
                                          ],
                                          onPress: function () {
                                            console.log('========= 11111 item = ' + JSON.stringify(o));
                                            t.networkBtnFun(n.typeNet, o.productId);
                                          },
                                        },
                                        React.default.createElement(ReactNative.Image, {
                                          source: n.img,
                                          resizeMode: 'contain',
                                          style: D.wifiBtnIcon,
                                        }),
                                        'ko' == module594.default.locale
                                          ? React.default.createElement(
                                              ReactNative.Text,
                                              {
                                                style: [
                                                  D.wifiBtnTxt,
                                                  {
                                                    fontSize: 'ko' == module594.default.locale && 0 == l ? module1317.default(11) : module1317.default(10),
                                                  },
                                                  {
                                                    left: 'ko' == module594.default.locale && 0 == l ? 10 : 0,
                                                  },
                                                ],
                                                numberOfLines: 1,
                                              },
                                              ' ',
                                              n.name,
                                              ' '
                                            )
                                          : React.default.createElement(
                                              ReactNative.Text,
                                              {
                                                style: [D.wifiBtnTxt],
                                                numberOfLines: 1,
                                              },
                                              ' ',
                                              n.name,
                                              ' '
                                            )
                                      );
                                    })
                                )
                              : null
                          )
                        );
                      })
                    )
                  );
                },
              })
            )
          )
        );
      },
    },
  ]);
  return F;
})(React.default.Component);

exports.networkList = module1318;
var D = ReactNative.StyleSheet.create({
    topBackTitle: {
      position: 'relative',
      alignItems: 'center',
      color: '#11243D',
      fontSize: module1317.default(16),
      paddingBottom: module588.default.setSpText(10),
      paddingTop: module588.default.setSpText(10),
    },
    topImg: {
      position: 'absolute',
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      left: module588.default.setSpText(10),
      top: '50%',
    },
    shopLi: {
      position: 'relative',
      width: '100%',
      padding: module588.default.scaleSize(10),
    },
    shoppLiTopBox: {
      flex: 1,
    },
    WingBlankBox: {
      flex: 1,
    },
    wrapLi: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    shoppContent: {
      backgroundColor: '#fff',
      width: (ReactNative.Dimensions.get('window').width - 3 * module588.default.setSpText(40)) / 2,
      borderRadius: module588.default.setSpText(8),
      alignItems: 'center',
      position: 'relative',
    },
    shoppLiTopTitle: {
      paddingLeft: module588.default.setSpText(15),
      fontSize: module1317.default(12),
      color: '#213B5C',
    },
    topListIcon: {
      position: 'absolute',
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      top: '50%',
      right: module588.default.setSpText(10),
      marginTop: module588.default.setSpText(-11),
    },
    listTitle: {
      flex: 1,
      fontSize: module1317.default(12),
      paddingLeft: module588.default.setSpText(10),
    },
    shoppList: {
      width: '50%',
      marginTop: module588.default.setSpText(20),
      paddingLeft: module588.default.setSpText(15),
    },
    shoppContentImg: {
      height: (ReactNative.Dimensions.get('window').width - 3 * module588.default.setSpText(40)) / 2,
      width: '80%',
      marginTop: module588.default.setSpText(10),
    },
    shoppContentTitle: {
      width: '100%',
      textAlign: 'center',
      backgroundColor: '#E1E7F5',
      color: '#213B5C',
      paddingVertical: module588.default.setSpText(0),
      borderBottomLeftRadius: module588.default.setSpText(8),
      borderBottomRightRadius: module588.default.setSpText(8),
      marginTop: module588.default.setSpText(10),
    },
    shoppBtnZZ: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,.5)',
      top: 0,
      left: 0,
      borderRadius: module588.default.setSpText(8),
      borderWidth: 1,
      borderColor: '#0A72FA',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: module588.default.setSpText(10),
    },
    shoppBtnZZShow: {
      display: 'flex',
    },
    wifiBtn: {
      backgroundColor: '#FFF',
      width: '100%',
      height: (ReactNative.Dimensions.get('window').width - 3 * module588.default.setSpText(40)) / 6,
      borderRadius: module588.default.setSpText(16),
      paddingHorizontal: module588.default.setSpText(10),
      color: '#0A72FA',
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: module588.default.setSpText(20),
    },
    wifiBtnTxt: {
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wifiBtnIcon: {
      width: module588.default.setSpText(15),
      height: module588.default.setSpText(15),
    },
    gride: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    isShow: {
      display: 'flex',
    },
    isHiden: {
      display: 'none',
    },
  }),
  F = module1318;
exports.default = F;
