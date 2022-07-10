var module403 = require('./403'),
  module1096 = require('./1096'),
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
  module1110 = require('./1110'),
  module1148 = require('./1148'),
  module594 = require('./594'),
  module1380 = require('./1380'),
  module593 = require('./593');

function b() {
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
  module1393 = (function (t) {
    module35.default(k, t);

    var module1393 = k,
      A = b(),
      N = function () {
        var t,
          n = module34.default(module1393);

        if (A) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function k(t) {
      var n;
      module24.default(this, k);

      (n = N.call(this, t))._handleAppStateChange = function (t) {
        if (null != t && 'active' === t)
          n.setState(
            {
              getPropertiesData: null,
            },
            function () {
              n.getProperties();
            }
          );
      };

      n.lghTest = React.default.createRef();
      var s = JSON.stringify(n.props.route.params);
      n.state = {
        cleanIndexEdit: JSON.parse(s).cleanIndexEdit,
        iotId: JSON.parse(s).iotId,
        editType: JSON.parse(s).editType,
        nickname: JSON.parse(s).nickname,
        isSetUpMap: JSON.parse(s).isSetUpMap,
        AppFunction: JSON.parse(s).AppFunction,
        navIndex: JSON.parse(s).navIndex,
        spinValue: new ReactNative.Animated.Value(0),
        isContenIndex: false,
        getPropertiesData: null,
        mapGetData: null,
        isTopLi: false,
        isTopLiTxt: module594.default.t('expandList'),
        bottomNameLi: [
          {
            name: module594.default.t('kitchen'),
          },
          {
            name: module594.default.t('bathroom'),
          },
          {
            name: module594.default.t('Livingroom'),
          },
          {
            name: module594.default.t('bedroom'),
          },
          {
            name: module594.default.t('childrenRoomOne'),
          },
          {
            name: module594.default.t('childrenRoomtwo'),
          },
          {
            name: module594.default.t('guestBathroom'),
          },
          {
            name: module594.default.t('corridor'),
          },
        ],
        bottomNameLiIndex: null,
        FrequencyNum: 1,
        FrequencyIcon: require('./1381'),
        sweepArea: null,
        sweepAreas: '',
        forbidNum: 0,
        forbidTagIds: null,
        normalNum: 0,
        normalTagIds: null,
        areaData: [],
        cleanName: '',
        inputBoxBottom: null,
        isEdit: 0,
        isShowBtn: 'ios' != ReactNative.Platform.OS,
        isBottomInput: 'ios' != ReactNative.Platform.OS,
        isShowTuo: false,
      };
      B = module1096.default.loading();
      setTimeout(function () {
        n.getProperties();
      }, 500);
      return n;
    }

    module25.default(k, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.areaNum = ReactNative.DeviceEventEmitter.addListener('areaNum', function (n, o) {
            t.setState({
              tagNum: n,
              tagIds: o,
            });
          });
          this.changeSelectAreaState = ReactNative.DeviceEventEmitter.addListener('changeSelectAreaState', function (t) {});
          this.clickSweepArea = ReactNative.DeviceEventEmitter.addListener('clickSweepArea', function (n) {
            console.log('=================== restrictedArea \u63a5\u6536 clickSweepArea = ' + JSON.stringify(n), '==========' + n.sweepAreas.length);
            module593.default.save('areaNum', n.sweepAreas.length);
            if (0 == t.state.isShowBtn)
              (0 == n.sweepArea.id && n.sweepArea) ||
                t.setState({
                  isShowBtn: true,
                });

            if (1 == t.state.editType && n.sweepArea) {
              if ('normal' == n.sweepArea.active)
                t.setState({
                  FrequencyNum: 1,
                });
              if ('depth' == n.sweepArea.active)
                t.setState({
                  FrequencyNum: 2,
                });
              t.sdFrequencyIcon();
            }

            t.setState({
              forbidNum: n.forbidNum,
              normalNum: n.normalNum,
              forbidTagIds: n.forbidTagIds,
              normalTagIds: n.normalTagIds,
              areaData: 0 == t.state.editType ? n.forbidTagIds : n.normalTagIds,
              cleanName: n.curTag ? n.curTag : '',
              sweepAreas: n.sweepAreas ? n.sweepAreas : '',
              isBottomInput: !n.sweepArea || 0 != n.sweepArea.id,
            });
            console.log('================== \u533a\u57df============= areaData = ' + t.state.areaData);
          });
          this.keyboardDidShowListener = ReactNative.Keyboard.addListener('keyboardDidShow', function (n) {
            if ('android' != ReactNative.Platform.OS)
              t.setState({
                inputBoxBottom: n.endCoordinates.height,
              });
            else
              t.setState({
                inputBoxBottom: 95,
              });
          });
          this.keyboardDidHideListener = ReactNative.Keyboard.addListener('keyboardDidHide', function (n) {
            t.setState({
              inputBoxBottom: null,
            });
          });
          ReactNative.AppState.addEventListener('change', this._handleAppStateChange);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.state.isSetUpMap) ReactNative.DeviceEventEmitter.emit('setUpMap');
          else {
            this.setState({
              getPropertiesData: null,
            });
            console.log(
              '\u8bbe\u5907\u64cd\u4f5c\u4e2d\u5fc3 \u8fdb\u5165\u4f46\u76f4\u63a5\u8fd4\u56de \u6216\u8005 \u6539\u53d8 \u6216 \u6ca1\u6709\u6539\u53d8\u4fdd\u5b58\u8fd4\u56de' +
                this.state.navIndex
            );
            var t = {
              navIndex: this.state.navIndex,
              changeType: false,
            };
            ReactNative.DeviceEventEmitter.emit('isMap', t);
          }
          console.log('=========================== cleanIndexedit = ' + this.state.cleanIndexEdit);
          if (this.state.isSetUpMap && this.state.cleanIndexEdit) ReactNative.DeviceEventEmitter.emit('isMap');
          this.areaNum.emitter.removeAllListeners('areaNum');
          this.clickSweepArea.emitter.removeAllListeners('clickSweepArea');
          this.changeSelectAreaState.emitter.removeAllListeners('changeSelectAreaState');
          this.keyboardDidShowListener.emitter.removeAllListeners('keyboardDidShowListener');
          this.keyboardDidHideListener.emitter.removeAllListeners('keyboardDidHideListener');

          this.setState = function (t, n) {};
        },
      },
      {
        key: 'spin',
        value: function () {
          this.state.spinValue.setValue(0);
          var t = ReactNative.Animated.timing(this.state.spinValue, {
            toValue: 1,
            duration: 800,
            easing: Easing.linear,
            useNativeDriver: true,
          });
          ReactNative.Animated.loop(t).start();
        },
      },
      {
        key: 'getProperties',
        value: function () {
          var t = this;
          module593.default.get('clickRobotId').then(function (n) {
            if (!('a1iQ12ffASR' != n && 'a1Wi9Hfe7VT' != n))
              t.setState({
                isShowTuo: true,
              });
          });
          module1145.default.getProperties(this.state.iotId).then(function (l) {
            if (200 == l.code) {
              setTimeout(function () {
                module403.default.remove(B);
              }, 500);
              if (l.data.areaList) t.areaList(l.data.areaList.value);
              t.setState(
                {
                  getPropertiesData: l || {},
                  mapGetData: l,
                },
                function () {
                  t.noMapData();
                  module593.default.save('areaNum', l.data.areaList ? l.data.areaList.value.length : 0);
                  ReactNative.DeviceEventEmitter.emit('mapTypeData', 3);
                  ReactNative.DeviceEventEmitter.emit('mapAreas', l.data.areaList ? l.data.areaList.value : null);
                  ReactNative.DeviceEventEmitter.emit('autoAreas', l.data.areaList ? l.data.areaList.autoAreaValue : null);
                  setTimeout(function () {
                    ReactNative.DeviceEventEmitter.emit('editAreaType', t.state.editType);
                  }, 150);
                  ReactNative.DeviceEventEmitter.emit('resetMap', false);
                }
              );
            } else {
              module1096.default.info(l.localMsg, 1, undefined, false);
              module403.default.remove(B);
            }
          });
        },
      },
      {
        key: 'areaList',
        value: function (t) {
          for (var n = [], o = 0; o < t.length; o++) {
            if (0 == this.state.editType && 'forbid' == t[o].active) n.push(t[o].tag);
            if (1 == this.state.editType) ('normal' != t[o].active && 'depth' != t[o].active) || n.push(t[o].tag);
          }

          module593.default.save('areaNum', n.length);
          this.setState({
            areaData: n,
          });
        },
      },
      {
        key: 'bottomIndex',
        value: function (t, n) {
          this.setState({
            bottomNameLiIndex: t,
          });
          this.cleanNameEdit(n);
        },
      },
      {
        key: 'addMap',
        value: function (t) {
          var n = this;
          if (!this.noMapData()) return false;
          module593.default.get('areaNum').then(function (l) {
            if (l >= 29) {
              module1096.default.info(module594.default.t('areaAddNum30'), 1, undefined, false);
              return false;
            }

            var s = [module594.default.t('kitchen'), t, n.state.editType];
            n.setState({
              isBottomInput: true,
            });
            ReactNative.DeviceEventEmitter.emit('addArea', s);
            n.setState({
              isShowBtn: true,
            });
          });
        },
      },
      {
        key: 'saveAreas2ServiceData',
        value: function () {
          var t = this;
          if (!this.noMapData()) return false;
          if (1 == this.state.isEdit) return false;
          this.setState({
            isEdit: 1,
          });
          var l = module1096.default.loading('', 0);
          module1145.default.saveAreas2Service(this.state.iotId).then(function (s) {
            if ((module403.default.remove(l), 200 == s.data.code)) {
              module1096.default.info(module594.default.t('editSuccessfully'), 2, undefined, false);
              var u = {
                navIndex: t.state.navIndex,
              };
              ReactNative.DeviceEventEmitter.emit('Properties', u);
              setTimeout(function () {
                t.closeArea();
              }, 1e3);
            } else {
              if (s.data.message && s.data.message.length > 0) module1096.default.info(s.data.message, 1, undefined, false);
              else if (s.data.code)
                9201 == s.data.code ? module1096.default.info(module594.default.t('notOnline'), 1, undefined, false) : module1096.default.info(s.data.code, 1, undefined, false);
              t.setState({
                isEdit: 0,
              });
            }
          });
        },
      },
      {
        key: 'sdFrequency',
        value: function () {
          var t = this;

          if (this.state.isBottomInput) {
            if (this.state.FrequencyNum < 2) this.state.FrequencyNum++;
            else this.state.FrequencyNum--;
            this.setState(
              {
                FrequencyNum: this.state.FrequencyNum,
              },
              function () {
                t.sdFrequencyIcon();
                ReactNative.DeviceEventEmitter.emit('cleanTimes', t.state.FrequencyNum);
              }
            );
          } else module1096.default.info(module594.default.t('pleaseSelectAreaFirst'), 1, undefined, false);
        },
      },
      {
        key: 'sdFrequencyIcon',
        value: function () {
          switch (this.state.FrequencyNum) {
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
        key: 'cleanNameEdit',
        value: function (t) {
          t = t.length > 10 ? t.slice(0, 10) : t;
          this.setState(
            {
              cleanName: t,
            },
            function () {
              ReactNative.DeviceEventEmitter.emit('touchName', t);
            }
          );
        },
      },
      {
        key: 'deleteArea',
        value: function () {
          for (var t = 0; t < this.state.areaData.length; t++) this.state.areaData[t] == this.state.cleanName && this.state.areaData.splice(t, 1);

          this.setState({
            areaData: this.state.areaData,
          });
          ReactNative.DeviceEventEmitter.emit('deleteArea');
        },
      },
      {
        key: 'closeArea',
        value: function () {
          this.props.navigation.goBack();
        },
      },
      {
        key: 'noMapData',
        value: function () {
          if (this.state.getPropertiesData && this.state.getPropertiesData.data && '' != this.state.getPropertiesData.data)
            try {
              var t = JSON.parse(this.state.getPropertiesData.data.map).data,
                n = t.height,
                l = t.width;

              if (n < 20 && l < 20) {
                module1096.default.info(module594.default.t('noMapData'), 1, undefined, false);
                return false;
              }
            } catch (t) {}
          return true;
        },
      },
      {
        key: 'forbidTypeFun',
        value: function (t) {
          ReactNative.DeviceEventEmitter.emit('forbidTypeState', t);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = new module1148.default.DataSource({
              rowHasChanged: function (t, n) {
                return t !== n;
              },
            }),
            o = this.state.spinValue.interpolate({
              inputRange: [0, 0],
              outputRange: ['180deg', '180deg'],
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
                  position: 'relative',
                  flexDirection: 'column',
                },
              },
              React.default.createElement(ReactNative.View, {
                style: L.restrictedAreaChilder,
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
                      ref: 'restrictedArea',
                      isEditType: this.state.editType,
                      getPropertiesData: this.state.getPropertiesData,
                      status: true,
                      isTimeData: true,
                      forbidType: this.state.forbidType,
                      AppFunction: this.state.AppFunction,
                      showPath: true,
                    })
                  : null
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: L.cleanTop,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: L.cleanTopBpx,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: L.cleanTopContent,
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
                        style: [L.cleanIcon],
                      })
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: L.cleanTitle,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: L.cleanTitleContent,
                        },
                        this.state.nickname
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: L.cleanTitleStatus,
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: require('./1384'),
                          resizeMode: 'contain',
                          style: L.clearImg,
                        }),
                        React.default.createElement(
                          ReactNative.Text,
                          null,
                          0 == this.state.editType ? module594.default.t('forbiddenArea') + this.state.areaData.length : module594.default.t('area') + this.state.areaData.length
                        )
                      )
                    )
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: L.panTopLi,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: L.panTopBox,
                    onPress: function () {
                      if (t.state.areaData)
                        t.setState({
                          isTopLi: (t.state.isTopLi = !t.state.isTopLi),
                        });
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1258'),
                    resizeMode: 'cover',
                    style: L.panTopTitleIcon,
                  }),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: L.panTopTitle,
                    },
                    module594.default.t('expandList')
                  )
                ),
                this.state.isTopLi
                  ? React.default.createElement(
                      ReactNative.View,
                      null,
                      React.default.createElement(
                        ReactNative.ImageBackground,
                        {
                          source: require('./1385'),
                          style: L.panTopLiBack,
                        },
                        React.default.createElement(
                          ReactNative.SafeAreaView,
                          {
                            style: L.container,
                          },
                          React.default.createElement(
                            ReactNative.ScrollView,
                            {
                              style: L.scrollView,
                              showsHorizontalScrollIndicator: false,
                            },
                            this.state.areaData.map(function (n, o) {
                              console.log('============ \u5217\u8868 = ' + t.state.areaData);
                              return React.default.createElement(
                                ReactNative.View,
                                {
                                  style: L.panTopLiBox,
                                  key: o,
                                },
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: L.panTopLiTitle,
                                  },
                                  n
                                )
                              );
                            })
                          )
                        )
                      )
                    )
                  : null
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    L.cleanBottom,
                    {
                      bottom: this.state.inputBoxBottom ? this.state.inputBoxBottom : module588.default.setSpText(12),
                    },
                  ],
                  pointerEvents: 'box-none',
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [L.cleanLeft],
                    pointerEvents: 'box-none',
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: L.cleanLeftLi,
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: function () {
                          return module1110.default(function () {
                            t.addMap(true);
                          });
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: 0 == this.state.editType ? require('./1386') : require('./1387'),
                        resizeMode: 'cover',
                        style: L.cleanLeftLiIcon,
                      })
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: L.cleanLeftLi,
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: function () {
                          return module1110.default(function () {
                            t.addMap(false);
                          });
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: 0 == this.state.editType ? require('./1388') : require('./1389'),
                        resizeMode: 'cover',
                        style: L.cleanLeftLiIcon,
                      })
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: L.cleanRight,
                    },
                    0 == this.state.editType && this.state.isBottomInput && this.state.isShowTuo
                      ? React.default.createElement(
                          ReactNative.View,
                          {
                            style: L.cleanRightNav,
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: L.cleanRightNavLi,
                            },
                            React.default.createElement(
                              ReactNative.TouchableOpacity,
                              {
                                style: L.cleanRightNavLiIcon,
                                onPress: function () {
                                  t.forbidTypeFun('all');
                                },
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: require('./1390'),
                                resizeMode: 'contain',
                                style: L.cleanLeftLiIcon,
                              })
                            ),
                            React.default.createElement(
                              ReactNative.TouchableOpacity,
                              {
                                style: L.cleanRightNavLiIcon,
                                onPress: function () {
                                  t.forbidTypeFun('mop');
                                },
                              },
                              React.default.createElement(ReactNative.Image, {
                                source: require('./1391'),
                                resizeMode: 'contain',
                                style: L.cleanLeftLiIcon,
                              })
                            )
                          )
                        )
                      : null,
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: L.cleanRightBottom,
                      },
                      (1 != this.state.isShowBtn && !this.state.isBottomInput) || 1 != this.state.editType
                        ? null
                        : React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              style: L.sdNum,
                              onPress: function () {
                                module1110.default(function () {
                                  t.sdFrequency();
                                });
                              },
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: this.state.FrequencyIcon,
                              resizeMode: 'contain',
                              style: L.cleanLeftLiIcon,
                            }),
                            'en' == module594.default.locale
                              ? React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: L.sdNumIcon,
                                  },
                                  this.state.FrequencyNum,
                                  this.state.FrequencyNum <= 1 ? 'Time' : module594.default.t('times')
                                )
                              : React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: L.sdNumIcon,
                                  },
                                  this.state.FrequencyNum,
                                  module594.default.t('times')
                                )
                          ),
                      0 == this.state.isShowBtn
                        ? null
                        : React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              style: L.addISok,
                              onPress: function () {
                                module1110.default(function () {
                                  t.saveAreas2ServiceData();
                                });
                              },
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1392'),
                              resizeMode: 'contain',
                              style: L.cleanLeftLiIcon,
                            })
                          )
                    )
                  )
                ),
                this.state.isBottomInput
                  ? React.default.createElement(
                      ReactNative.View,
                      {
                        style: L.cleanBottomBox,
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: L.cleanBottomTop,
                        },
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: L.cleanBottomInputBox,
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: L.cleanBottomInputContent,
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: L.cleanBottomInputTitle,
                              },
                              module594.default.t('areaName'),
                              ':'
                            ),
                            React.default.createElement(ReactNative.TextInput, {
                              autoCapitalize: 'none',
                              autoCorrect: false,
                              placeholder: module594.default.t('enterNaming'),
                              style: L.cleanBottomInput,
                              onChangeText: function (n) {
                                t.cleanNameEdit(n);
                              },
                            })
                          )
                        ),
                        React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            onPress: function () {
                              t.deleteArea();
                            },
                          },
                          React.default.createElement(ReactNative.Image, {
                            source: require('./1393'),
                            resizeMode: 'cover',
                            style: L.cleanBottomDel,
                          })
                        )
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: L.cleanBottomBottom,
                        },
                        React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            onPress: function () {
                              t.setState({
                                isContenIndex: (t.state.isContenIndex = !t.state.isContenIndex),
                              });
                            },
                          },
                          React.default.createElement(ReactNative.Animated.Image, {
                            style: [
                              L.cleanBottomRicon,
                              this.state.isContenIndex
                                ? {
                                    transform: [
                                      {
                                        rotate: o,
                                      },
                                    ],
                                  }
                                : '',
                            ],
                            source: module1380.default,
                          })
                        ),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: [
                              L.cleanBottomRli,
                              this.state.isContenIndex
                                ? {
                                    height: 'auto',
                                  }
                                : {
                                    height: module588.default.setSpText(48),
                                  },
                            ],
                          },
                          React.default.createElement(module1148.default, {
                            dataSource: n.cloneWithRows(this.state.bottomNameLi),
                            contentContainerStyle: L.cleanBottomRliBox,
                            enableEmptySections: true,
                            renderRow: function (n, o, l) {
                              return React.default.createElement(
                                ReactNative.TouchableOpacity,
                                {
                                  onPress: function () {
                                    t.bottomIndex(l, n.name);
                                  },
                                },
                                React.default.createElement(
                                  ReactNative.Text,
                                  {
                                    style: [L.cleanBottomRliData, t.state.bottomNameLiIndex == l ? L.cleanBottomRliActive : ''],
                                  },
                                  ' ',
                                  n.name,
                                  ' '
                                )
                              );
                            },
                          })
                        )
                      )
                    )
                  : null
              )
            )
          );
        },
      },
    ]);
    return k;
  })(React.default.Component);

exports.restrictedArea = module1393;
var L = ReactNative.StyleSheet.create({
    panTopBox: {
      flexDirection: 'row',
      width: module588.default.setSpText(110),
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(11),
      height: module588.default.setSpText(44),
      lineHeight: module588.default.setSpText(30),
      fontSize: module588.default.setSpText(12),
      borderRadius: module588.default.setSpText(8),
      alignItems: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanBottom: {
      position: 'absolute',
      width: '100%',
      paddingHorizontal: module588.default.setSpText(12),
    },
    restrictedAreaChilder: {
      height: module588.default.setSpText(40),
    },
    cleanBottomBox: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(8),
      padding: module588.default.setSpText(16),
    },
    cleanBottomBottom: {
      flexDirection: 'row',
    },
    cleanBottomRicon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      marginTop: module588.default.setSpText(16),
    },
    cleanBottomRli: {
      flex: 1,
      height: module588.default.setSpText(48),
    },
    cleanBottomRliBox: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cleanBottomRliData: {
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(2),
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
      backgroundColor: '#F7F9FC',
      borderRadius: module588.default.setSpText(16),
      marginLeft: module588.default.setSpText(16),
      marginTop: module588.default.setSpText(16),
      borderWidth: 2,
      borderColor: '#F7F9FC',
    },
    cleanBottomRliActive: {
      borderWidth: 2,
      borderColor: '#0A72FA',
      backgroundColor: 'rgb(186,213,251)',
      color: '#0A72FA',
    },
    cleanBottomTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanBottomInputBox: {
      flex: 1,
      borderWidth: 1,
      paddingVertical: 0,
      borderColor: '#0A72FA',
      borderRadius: module588.default.setSpText(8),
    },
    cleanBottomInputContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanBottomInputTitle: {
      paddingLeft: module588.default.setSpText(16),
      fontSize: module588.default.setSpText(14),
    },
    cleanBottomInput: {
      flex: 1,
      height: module588.default.setSpText(32),
      fontSize: module588.default.setSpText(14),
      paddingVertical: 0,
      color: '#0A72FA',
    },
    cleanBottomDel: {
      width: module588.default.setSpText(24),
      height: module588.default.setSpText(24),
      marginLeft: module588.default.setSpText(18),
    },
    cleanRight: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    cleanRightNav: {
      alignItems: 'flex-end',
    },
    cleanRightNavLi: {
      width: module588.default.setSpText(44),
      justifyContent: 'center',
      alignItems: 'center',
    },
    cleanRightNavLiIcon: {
      width: module588.default.setSpText(44),
      height: module588.default.setSpText(44),
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: module588.default.setSpText(44),
      marginBottom: module588.default.setSpText(10),
    },
    cleanRightBottom: {
      flexDirection: 'row',
    },
    addISok: {
      width: module588.default.setSpText(44),
      height: module588.default.setSpText(44),
      borderRadius: module588.default.setSpText(44),
      backgroundColor: '#0A72FA',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sdNum: {
      flexDirection: 'row',
      width: ReactNative.Dimensions.get('window').width / 4,
      height: module588.default.setSpText(44),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingLeft: module588.default.setSpText(10),
      borderRadius: module588.default.setSpText(16),
      marginRight: module588.default.setSpText(20),
    },
    sdNumIcon: {
      flex: 1,
      paddingLeft: module588.default.setSpText(10),
    },
    cleanLeft: {
      flex: 1,
      height: module588.default.setSpText(108),
      marginBottom: module588.default.setSpText(10),
      position: 'relative',
    },
    cleanLeftLi: {
      width: module588.default.setSpText(44),
      height: module588.default.setSpText(44),
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(8),
      marginTop: module588.default.setSpText(10),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cleanLeftLiIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    panTopLi: {
      position: 'absolute',
      width: module588.default.setSpText(115),
      top: module588.default.setSpText(80),
      left: module588.default.setSpText(10),
    },
    panTopLiBack: {
      width: module588.default.setSpText(124),
      height: module588.default.setSpText(187),
      marginTop: module588.default.setSpText(-10),
      alignItems: 'center',
      paddingHorizontal: module588.default.setSpText(15),
    },
    container: {
      marginTop: module588.default.setSpText(30),
      paddingBottom: module588.default.setSpText(20),
    },
    panTopLiBox: {
      alignItems: 'center',
      width: module588.default.setSpText(80),
      paddingVertical: module588.default.setSpText(12),
      borderBottomWidth: 1,
      borderBottomColor: '#E1E7F5',
    },
    panTopTitle: {
      flex: 1,
      paddingLeft: module588.default.setSpText(5),
      color: '#213B5C',
      fontSize: module588.default.setSpText(12),
    },
    panTopTitleIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
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
  A = module1393;
exports.default = A;
