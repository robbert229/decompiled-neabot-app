var module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = S(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
        else o[u] = t[u];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('./588')),
  module1146 = require('./1146'),
  module1145 = require('./1145'),
  module594 = require('./594');

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (S = function (t) {
    return t ? l : n;
  })(t);
}

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

var L = '',
  module1442 = (function (t) {
    module35.default(b, t);

    var S = b,
      module1442 = v(),
      D = function () {
        var t,
          n = module34.default(S);

        if (module1442) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var n;
      module24.default(this, b);
      n = D.call(this, t);
      var l = JSON.stringify(n.props.route.params);
      n.state = {
        deviceName: JSON.parse(l).deviceName,
        iotId: JSON.parse(l).iotId,
        AppFunction: JSON.parse(l).AppFunction,
        allArea: 0,
        allTime: 0,
        cleanNum: 0,
        sweepData: [],
        loading: false,
        isHeight: true,
        zdzt: require('./1440'),
        wnzt: require('./1300'),
        zdztLeft: require('./1327'),
      };
      n.getSweepHistoryRecord();
      n.getProperties();
      return n;
    }

    module25.default(b, [
      {
        key: 'componentDidMount',
        value: function () {
          this.sweepCleanMap = ReactNative.DeviceEventEmitter.addListener('sweepCleanMap', function (t) {
            ReactNative.DeviceEventEmitter.emit('isMap');
          });
          if ('android' === ReactNative.Platform.OS) ReactNative.BackHandler.addEventListener('hardwareBackPress', this._onBackPressed.bind(this));
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(L);
          if (this.sweepCleanMap) this.sweepCleanMap.emitter.removeAllListeners('sweepCleanMap');
          if ('android' === ReactNative.Platform.OS) ReactNative.BackHandler.removeEventListener('hardwareBackPress', this._onBackPressed.bind(this));

          this.setState = function (t, n) {};
        },
      },
      {
        key: '_onBackPressed',
        value: function () {
          this.setState({
            isHeight: false,
          });
        },
      },
      {
        key: 'getProperties',
        value: function () {
          var t = this;
          module1145.default.getProperties(this.state.iotId).then(function (n) {
            if (200 == n.code) {
              var l = n.data;
              t.setState({
                allArea: l.allArea,
                allTime: l.allTime / 60,
                cleanNum: l.runTimes,
              });
            }
          });
        },
      },
      {
        key: 'getSweepHistoryRecord',
        value: function () {
          var t = this;
          L = module1096.default.loading('', 0);
          module1146.default
            .getSweepHistoryRecord(this.state.deviceName)
            .then(function (n) {
              var l = t.formatData(n);
              t.setState({
                sweepData: l,
              });
            })
            .catch(function (t) {
              module403.default.remove(L);
              module1096.default.info(t.message, 1, undefined, false);
            });
        },
      },
      {
        key: 'formatData',
        value: function (t) {
          var n = [];
          module403.default.remove(L);
          t.forEach(function (t, l) {
            var o = new Date();
            o.setTime(1e3 * t.startTime);
            var s = o.getFullYear(),
              u = o.getMonth() + 1;
            u = u < 10 ? '0' + u : u;
            var c = o.getDate();
            c = c < 10 ? '0' + c : c;
            var f = o.getHours();
            f = f < 10 ? '0' + f : f;
            var p,
              T = o.getMinutes();

            if (((T = T < 10 ? '0' + T : T), (t.startTime = f + ':' + T), (t.isM = f), 0 === l)) {
              (p = {}).date = s + '-' + u + '-' + c;
              p.data = [];
              p.data.push(t);
              n.push(p);
            } else if (n[n.length - 1].date === s + '-' + u + '-' + c) n[n.length - 1].data.push(t);
            else {
              (p = {}).date = s + '-' + u + '-' + c;
              p.data = [];
              p.data.push(t);
              n.push(p);
            }
          });
          return n;
        },
      },
      {
        key: 'details',
        value: function (t, n) {
          var l = {
            mapName: 'recordingDetails',
            iotId: this.state.iotId,
            fileName: t,
            isInterrupt: n,
            AppFunction: this.state.AppFunction,
          };
          ReactNative.DeviceEventEmitter.emit('isMoreMap', l);
        },
      },
      {
        key: '_renderItem',
        value: function (t) {
          var n = this,
            l = t.item;
          t.index;
          return React.default.createElement(
            ReactNative.View,
            {
              style: I.recordingLi,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: I.recordingLiTime,
              },
              l.date
            ),
            l.data.map(function (t, l) {
              console.log('============Number(liItems.isM):' + JSON.stringify(t));
              return React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: I.recordingLiList,
                  key: l,
                  onPress: function () {
                    n.details(t.fileName, t.isInterrupt);
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: I.recordingLiListData,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: I.recordingLiLeft,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: I.recordingLiLeftTop,
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: t.isInterrupt ? n.state.zdzt : n.state.wnzt,
                        resizeMode: 'contain',
                        style: I.recordingLiLeftTopIcon,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: I.recordingTime,
                        },
                        t.startTime,
                        ' ',
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: I.recordingMin,
                          },
                          ' ',
                          Number(t.isM) < 12 ? 'AM' : 'PM',
                          ' '
                        ),
                        ' '
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: I.recordingLiLeftBottom,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: I.recordingData,
                        },
                        module594.default.t('cleaningTime'),
                        ' ',
                        t.timeLong,
                        ' min'
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          t: true,
                          style: [I.recordingData, I.recordingDataRight],
                        },
                        module594.default.t('cleaningArea'),
                        ' ',
                        t.sweepArea,
                        ' m\xb2'
                      )
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: I.recordingLiRight,
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: n.state.zdztLeft,
                      resizeMode: 'contain',
                      style: I.recordingLiRightIcon,
                    })
                  )
                )
              );
            })
          );
        },
      },
      {
        key: 'refresh',
        value: function () {
          this.setState({
            loading: true,
          });
          this.getSweepHistoryRecord();
          this.setState({
            loading: false,
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
              ReactNative.View,
              {
                style: I.sweepBox,
              },
              React.default.createElement(ReactNative.StatusBar, {
                translucent: this.state.isHeight,
                backgroundColor: 'transparent',
                barStyle: Theme.barStyle,
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [I.sweepTop],
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1441'),
                  style: I.sweepTopImg,
                }),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [I.sweepTopBox],
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        I.sweepTopTitle,
                        {
                          marginTop: 'android' == ReactNative.Platform.OS ? module588.statusBarHeight : 0,
                        },
                      ],
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: [
                          I.sweepTopTitleIconImg,
                          {
                            position: 'relative',
                            left: module588.default.setSpText(12),
                          },
                        ],
                        onPress: function () {
                          t.setState(
                            {
                              isHeight: false,
                            },
                            function () {
                              t.props.navigation.goBack();
                            }
                          );
                        },
                        hitSlop: {
                          left: 30,
                          right: 30,
                          top: 30,
                          bottom: 30,
                        },
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1442'),
                        style: I.sweepTopTitleIcon,
                      })
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: I.sweepTopTitleTxt,
                      },
                      module594.default.t('cleanUpRecords')
                    ),
                    React.default.createElement(ReactNative.Text, null)
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: I.sweepTopLi,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: I.sweepTopLiData,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: I.sweepTopLiMin,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: I.sweepTopLiNum,
                          },
                          ' ',
                          this.state.allArea,
                          ' '
                        ),
                        'm\xb2'
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: I.sweepTopLiTxt,
                        },
                        module594.default.t('cleaningArea')
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: I.sweepTopLiData,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: I.sweepTopLiMin,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: I.sweepTopLiNum,
                          },
                          ' ',
                          parseInt(this.state.allTime),
                          ' '
                        ),
                        'min'
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: I.sweepTopLiTxt,
                        },
                        module594.default.t('cleaningTime')
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: I.sweepTopLiData,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: I.sweepTopLiMin,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: I.sweepTopLiNum,
                          },
                          ' ',
                          this.state.cleanNum,
                          ' '
                        ),
                        module594.default.t('times')
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: I.sweepTopLiTxt,
                        },
                        module594.default.t('cleaningTimes')
                      )
                    )
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: I.scrollViewContent,
                },
                React.default.createElement(ReactNative.FlatList, {
                  style: I.wrap,
                  removeClippedSubviews: false,
                  data: this.state.sweepData,
                  renderItem: this._renderItem.bind(this),
                  numColumns: 1,
                  keyExtractor: function (t, n) {
                    return t + n;
                  },
                  refreshing: this.state.loading,
                  onRefresh: this.refresh.bind(this),
                })
              )
            )
          );
        },
      },
    ]);
    return b;
  })(React.default.Component);

exports.sweepRecording = module1442;
var I = ReactNative.StyleSheet.create({
    sweepBox: {
      flex: 1,
      backgroundColor: '#E1E7F5',
    },
    scrollViewContent: {
      paddingBottom: module588.default.setSpText(200),
    },
    recordingMin: {
      fontSize: module588.default.setSpText(16),
      marginLeft: module588.default.setSpText(2),
    },
    recordingLiLeftBottom: {
      flexDirection: 'row',
      paddingVertical: module588.default.setSpText(12),
    },
    recordingData: {
      paddingHorizontal: module588.default.setSpText(9),
      paddingVertical: module588.default.setSpText(2),
      backgroundColor: '#F7F9FC',
      borderRadius: module588.default.setSpText(16),
      fontSize: module588.default.setSpText(10),
      color: '#658DC2',
    },
    recordingDataRight: {
      marginLeft: module588.default.setSpText(10),
    },
    recordingTime: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(24),
      marginLeft: module588.default.setSpText(7),
    },
    recordingLiLeftTopIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    recordingLiLeftTop: {
      flexDirection: 'row',
      paddingTop: module588.default.setSpText(10),
      alignItems: 'center',
    },
    recordingLiLeft: {
      flex: 1,
    },
    recordingLiRight: {
      width: module588.default.setSpText(22),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    recordingLiRightIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    recordingLiListData: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E1E7F5',
    },
    recordingLiList: {
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(20),
    },
    recordingLiTime: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
      paddingVertical: module588.default.setSpText(6),
      paddingLeft: module588.default.setSpText(20),
    },
    sweepTop: {
      position: 'relative',
      zIndex: 11,
    },
    sweepTopImg: {
      width: '100%',
      marginTop: -module588.statusBarHeight,
      height: module588.default.setSpText(170) + module588.statusBarHeight,
    },
    sweepTopBox: {
      position: 'absolute',
      width: '100%',
      left: 0,
    },
    sweepTopTitle: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    sweepTopTitleTxt: {
      marginRight: module588.default.setSpText(22),
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: module588.default.setSpText(16),
      color: '#fff',
    },
    sweepTopTitleIconImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    sweepTopTitleIcon: {
      width: '100%',
      height: '100%',
    },
    sweepTopLi: {
      flexDirection: 'row',
      marginTop: module588.default.setSpText(25),
    },
    sweepTopLiData: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sweepTopLiMin: {
      color: '#fff',
      fontSize: module588.default.setSpText(16),
    },
    sweepTopLiNum: {
      fontSize: module588.default.setSpText(33),
    },
    sweepTopLiTxt: {
      color: '#fff',
      fontSize: module588.default.setSpText(12),
    },
  }),
  D = module1442;
exports.default = D;
