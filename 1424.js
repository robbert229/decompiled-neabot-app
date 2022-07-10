var module1117 = require('./1117'),
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
  module1146 = require('./1146'),
  module1145 = require('./1145'),
  module1248 = require('./1248'),
  module1110 = require('./1110'),
  module594 = require('./594');

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

var M = [],
  I = '',
  module1428 = (function (t) {
    module35.default(b, t);

    var module588 = b,
      module1428 = C(),
      w = function () {
        var t,
          o = module34.default(module588);

        if (module1428) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var o;
      module24.default(this, b);
      o = w.call(this, t);
      var n = t.route.params,
        l = 0;

      if (n.map) {
        var u = 'string' == typeof n.map ? JSON.parse(n.map) : n.map;
        if (u.data && u.data.pathId) l = u.data.pathId;
      }

      o.state = {
        iotId: n.iotId,
        zzDataLi: [],
        zzDataLiIndex: null,
        deviceName: n.deviceName,
        mapControlData: [],
        sortDataLength: null,
        loading: false,
        map: n.map,
        mapId: n.mapId,
        UpdateMapProgress: n.UpdateMapProgress,
        startTime: l,
      };
      o.getMapManagerData();
      return o;
    }

    module25.default(b, [
      {
        key: 'componentWillUnmount',
        value: function () {
          M = [];
          module403.default.remove(I);

          this.setState = function (t, o) {};
        },
      },
      {
        key: 'getMapManagerData',
        value: function () {
          var t = this;
          I = module1096.default.loading('', 0);
          module1146.default.getMapManagerData(this.state.deviceName).then(function (o) {
            console.log('==================\u83b7\u53d6\u5730\u56fe\u7ba1\u7406\u6570\u636e = ' + JSON.stringify(o));
            if (0 != o.length)
              t.setState(
                {
                  mapControlData: o,
                },
                function () {
                  t.getRecordDetail();
                }
              );
            else {
              module403.default.remove(I);
              if (403 == o.code) module1096.default.info(module594.default.t('Permissionexpired'), 1, undefined, false);
              else module1096.default.info(module594.default.t('noMapData'), 1, undefined, false);
            }
          });
        },
      },
      {
        key: 'getRecordDetail',
        value: function () {
          for (
            var t = this,
              o = function (o) {
                console.log('\u89e3\u6790\u5730\u56fe\u6570\u636e' + t.state.mapControlData[o].fileName);
                module1146.default.getRecordDetail(t.state.mapControlData[o].fileName).then(function (n) {
                  if (n && '' != n) {
                    n = JSON.parse(n);
                    var s = false;
                    console.log('==========\u89e3\u6790\u5730\u56fe\u6570\u636e msg----------- ' + JSON.stringify(n));
                    module1145.default.getSweepMapBitmap(JSON.stringify(n.data)).then(function (n) {
                      if (
                        (console.log('==========\u89e3\u6790\u5730\u56fe\u6570\u636e ===ewqr=wer=wr=we=rwq=we= ' + JSON.stringify(n)),
                        t.state.UpdateMapProgress && t.state.UpdateMapProgress.Name)
                      )
                        t.state.mapControlData[o].url == t.state.UpdateMapProgress.Name && (s = true);
                      console.log('==================>>>>', t.state.mapControlData[o].startTime, t.state.startTime, 'msgLi' + n);
                      M.push({
                        currentUsed: 1 == s || t.state.startTime == t.state.mapControlData[o].startTime,
                        imgUrl: 'data:image/png;base64,' + n,
                        fileName: t.state.mapControlData[o].fileName,
                        restore: t.state.mapControlData[o].restore,
                        startTime: t.state.mapControlData[o].startTime,
                        timeData: t.formatDate(t.state.mapControlData[o].startTime),
                        url: t.state.mapControlData[o].url,
                        backupMd5: t.state.mapControlData[o].backupMd5 ? t.state.mapControlData[o].backupMd5 : '""',
                      });

                      if (M.length == t.state.mapControlData.length) {
                        module403.default.remove(I);
                        t.sortData();
                      }
                    });
                  }
                });
              },
              n = 0;
            n < this.state.mapControlData.length;
            n++
          )
            o(n);
        },
      },
      {
        key: 'getSweepMapBitmap',
        value: function (t) {
          console.log('\u83b7\u53d6\u70b9\u9635\u56fe:' + JSON.stringify(t));
          module1146.default.getRecordDetail(t).then(function (t) {
            if (t && '' != t) {
              t = JSON.parse(t);
              console.log('getSweepMapBitmap:' + JSON.stringify(t));
              module1145.default.getSweepMapBitmap(JSON.stringify(t.data)).then(function (t) {
                console.log('getSweepMapBitmap====msgLi:' + JSON.stringify(t));
                ('data:image/png;base64,');
              });
            }
          });
        },
      },
      {
        key: 'sortData',
        value: function () {
          for (var t = [], o = [], n = 0; n < M.length; n++) M[n].restore ? t.push(M[n]) : o.push(M[n]);

          t = this.sortTime(t, 0);
          o = this.sortTime(o, 1);

          for (var l = 0; l < t.length; l++) o.unshift(t[l]);

          M = o;
          this.setState({
            zzDataLi: M,
            sortDataLength: t,
          });
        },
      },
      {
        key: 'sortTime',
        value: function (t, o) {
          var n = '',
            l = '';

          if (0 == o) {
            n = 1;
            l = -1;
          } else {
            n = -1;
            l = 1;
          }

          t.sort(function (t, o) {
            return t.startTime > o.startTime ? n : t.startTime < o.startTime ? l : 0;
          });
          return t;
        },
      },
      {
        key: 'formatDate',
        value: function (t) {
          var o = new Date(t);
          o.setTime(1e3 * o);
          return {
            year: o.getFullYear() + '/' + ((o.getMonth() + 1 < 10 ? '0' + (o.getMonth() + 1) : o.getMonth() + 1) + '-') + (o.getDate() < 10 ? '0' + o.getDate() : o.getDate()),
            starTime:
              (o.getHours() < 10 ? '0' + o.getHours() : o.getHours()) +
              ':' +
              ((o.getMinutes() < 10 ? '0' + o.getMinutes() : o.getMinutes()) + ':') +
              (o.getSeconds() < 10 ? '0' + o.getSeconds() : o.getSeconds()),
          };
        },
      },
      {
        key: 'arrData',
        value: function (t, o) {
          for (var n = 0; n < M.length; n++)
            n == t &&
              ((M[n].restore = M[n].restore = !M[n].restore),
              this.state.startTime && M[n].startTime && M[n].startTime == this.state.startTime && (M[n].currentUsed = true),
              this.state.UpdateMapProgress && this.state.UpdateMapProgress.Name && this.state.UpdateMapProgress.Name == M[n].url && (M[n].currentUsed = true));

          this.sortData();
        },
      },
      {
        key: 'backMap',
        value: function (t, s) {
          var u = this;
          module1117.default.alert(module594.default.t('Tips'), module594.default.t('overlayMap'), [
            {
              text: module594.default.t('cancel'),
              style: 'cancel',
            },
            {
              text: module594.default.t('btnConfirm'),
              onPress: function () {
                I = module1096.default.loading('', 0);
                module1145.default.backMap(u.state.iotId, t, s).then(function (t) {
                  if (200 == t.data.code)
                    u.setState(
                      {
                        zzDataLiIndex: null,
                      },
                      function () {
                        setTimeout(function () {
                          module403.default.remove(I);
                          module1096.default.info(
                            module594.default.t('restoreTheMapSuccessfully'),
                            1,
                            function () {
                              u.props.navigation.navigate('cleanIndex');
                              ReactNative.DeviceEventEmitter.emit('moreResetMap', 1);
                            },
                            false
                          );
                        }, 4500);
                      }
                    );
                  else {
                    module403.default.remove(I);
                    module1096.default.info(module594.default.t('restoreTheMapFailure'));
                  }
                });
              },
            },
          ]);
        },
      },
      {
        key: 'deleteMap',
        value: function (t, o, s, u) {
          var f = this;
          console.log('================== \u5220\u9664\u5730\u56fe index = ' + t + ', url = ' + o + ', filename = ' + s);
          I = module1096.default.loading('', 0);
          module1146.default.deleteMap(o, s).then(function (o) {
            module403.default.remove(I);
            if (200 == o.data.code)
              f.setState(
                {
                  zzDataLiIndex: null,
                },
                function () {
                  module1096.default.info(module594.default.t('successfullyDeleted'), 1, undefined, false);
                  M.splice(t, 1);
                  f.sortData();
                }
              );
            else if ('1101354' == o.data.code)
              f.setState(
                {
                  zzDataLiIndex: null,
                },
                function () {
                  module1096.default.info(module594.default.t('successfullyDeleted'), 1, undefined, false);
                  M.splice(t, 1);
                  f.sortData();
                }
              );
          });
        },
      },
      {
        key: 'restoreMap',
        value: function (t, o, s, u) {
          var f = this;

          if (u && this.state.sortDataLength.length >= 10) {
            module1096.default.info(module594.default.t('mostFavorites'), 1, undefined, false);
            return false;
          }

          I = module1096.default.loading('', 0);
          module1146.default.restoreMap(o, s, u).then(function (o) {
            module403.default.remove(I);
            if (200 == o.code)
              f.setState(
                {
                  zzDataLiIndex: null,
                },
                function () {
                  M[t].fileName = o.newFileName;
                  M[t].url = o.newUrl;
                  module1096.default.info(u ? module594.default.t('collectionSuccess') : module594.default.t('unfavorite'), 1, undefined, false);
                  f.arrData(t, 0);
                }
              );
          });
        },
      },
      {
        key: '_renderItem',
        value: function (t) {
          var o = this,
            n = t.item,
            l = t.index;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              key: l,
              onPress: function () {
                o.setState({
                  zzDataLiIndex: l,
                });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: B.mapControlLi,
              },
              React.default.createElement(ReactNative.Image, {
                source: {
                  uri: n.imgUrl,
                },
                style: B.mapControlLiIcon,
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: B.mapControlLiTime,
                },
                n.timeData
                  ? React.default.createElement(
                      ReactNative.View,
                      {
                        style: B.mapControlLiData,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: B.mapControlLiYear,
                        },
                        n.timeData.year
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: B.mapControlLiMinute,
                        },
                        n.timeData.starTime
                      )
                    )
                  : null,
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: B.mapControlLiDataIcon,
                    onPress: function () {
                      return module1110.default(function () {
                        o.restoreMap(l, n.url, n.fileName, !n.restore);
                      });
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: n.restore ? require('./1425') : require('./1426'),
                    resizeMode: 'contain',
                    style: B.mapControlLiDataIconImg,
                  })
                )
              ),
              1 == n.currentUsed
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: B.mapControlCurrent,
                    },
                    React.default.createElement(ReactNative.View, {
                      style: B.mapLiZZ,
                    })
                  )
                : null,
              this.state.zzDataLiIndex == l && 0 == n.currentUsed
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: B.mapControlLiZZ,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: B.mapLiZZ,
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1427'),
                        resizeMode: 'contain',
                        style: B.mapLiZZIcon,
                      }),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: B.mapLiZZBottom,
                        },
                        React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            style: B.mapLiZZBottomLi,
                            onPress: function () {
                              return module1110.default(function () {
                                o.deleteMap(l, n.url, n.fileName, n.mapId);
                              });
                            },
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: B.mapLiZZBottomBtn,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1393'),
                              resizeMode: 'cover',
                              style: B.BottomBtnIcon,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [B.mapLiZZBottomBtnTxt, B.mapLiZZBottomBtnDel],
                              },
                              module594.default.t('deleted')
                            )
                          )
                        ),
                        React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            style: B.mapLiZZBottomLi,
                            onPress: function () {
                              return module1110.default(function () {
                                o.backMap(n.url, n.backupMd5);
                              });
                            },
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: B.mapLiZZBottomBtn,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: require('./1428'),
                              resizeMode: 'contain',
                              style: B.BottomBtnIcon,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [B.mapLiZZBottomBtnTxt, B.mapLiZZBottomBtnOk],
                              },
                              module594.default.t('use')
                            )
                          )
                        )
                      )
                    )
                  )
                : null,
              React.default.createElement(module1248.default, {
                colors: ['#213B5C', '#456D95'],
                style: B.topBox,
              })
            )
          );
        },
      },
      {
        key: 'loadMore',
        value: function () {
          this.setState({
            loading: true,
          });
          this.setState({
            loading: false,
          });
        },
      },
      {
        key: 'refresh',
        value: function () {
          this.setState({
            loading: true,
          });
          this.setState({
            loading: false,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            ReactNative.SafeAreaView,
            {
              style: B.container,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: B.mapControl,
              },
              React.default.createElement(ReactNative.FlatList, {
                style: B.wrap,
                showsVerticalScrollIndicator: false,
                removeClippedSubviews: true,
                data: this.state.zzDataLi,
                renderItem: this._renderItem.bind(this),
                keyExtractor: function (t, o) {
                  return t + o;
                },
                onEndReachedThreshold: 0.2,
                onEndReached: this.loadMore.bind(this),
                refreshing: this.state.loading,
                onRefresh: this.refresh.bind(this),
              })
            )
          );
        },
      },
    ]);
    return b;
  })(React.default.Component);

exports.mapControl = module1428;
var B = ReactNative.StyleSheet.create({
    topBox: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      opacity: 0.5,
      borderRadius: module588.default.setSpText(8),
    },
    container: {
      flex: 1,
      backgroundColor: '#F5F6FA',
    },
    mapControl: {
      paddingHorizontal: module588.default.setSpText(18),
      paddingBottom: module588.default.setSpText(30),
    },
    mapControlLi: {
      height: module588.default.setSpText(251),
      marginTop: module588.default.setSpText(18),
      borderRadius: module588.default.setSpText(8),
      position: 'relative',
      alignItems: 'center',
    },
    BottomBtnIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      marginLeft: module588.default.setSpText(12),
    },
    mapLiZZBottomBtnOk: {
      color: '#0A72FA',
    },
    mapLiZZBottomBtnDel: {
      color: '#D22148',
    },
    mapLiZZBottomBtnTxt: {
      flex: 1,
      fontSize: module588.default.setSpText(14),
      textAlign: 'center',
    },
    mapLiZZBottomBtn: {
      width: module588.default.setSpText(88),
      height: module588.default.setSpText(32),
      borderRadius: module588.default.setSpText(16),
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapLiZZBottomLi: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapControlLiIcon: {
      width: module588.default.setSpText(200),
      height: module588.default.setSpText(251),
    },
    mapLiZZBottom: {
      position: 'absolute',
      bottom: 0,
      paddingBottom: module588.default.setSpText(8),
      flexDirection: 'row',
    },
    mapLiZZIcon: {
      width: module588.default.setSpText(24),
      height: module588.default.setSpText(24),
      top: module588.default.setSpText(-1),
      left: module588.default.setSpText(-1),
    },
    mapLiZZ: {
      flex: 1,
      position: 'relative',
    },
    mapControlCurrent: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,255,0, 0.24)',
      borderRadius: module588.default.setSpText(8),
      zIndex: 2,
    },
    mapControlLiZZ: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(10, 114, 250, 0.24)',
      borderWidth: 1,
      borderColor: '#0A72FA',
      borderRadius: module588.default.setSpText(8),
      zIndex: 2,
    },
    mapControlLiTime: {
      position: 'absolute',
      width: '100%',
      paddingHorizontal: module588.default.setSpText(28),
      marginTop: module588.default.setSpText(18),
      flexDirection: 'row',
      zIndex: 3,
    },
    mapControlLiData: {
      flex: 1,
    },
    mapControlLiYear: {
      color: '#F5F6FA',
      fontSize: module588.default.setSpText(14),
    },
    mapControlLiMinute: {
      color: '#F5F6FA',
      fontSize: module588.default.setSpText(16),
    },
    mapControlLiDataIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    mapControlLiDataIconImg: {
      width: '100%',
      height: '100%',
    },
  }),
  w = module1428;
exports.default = w;
