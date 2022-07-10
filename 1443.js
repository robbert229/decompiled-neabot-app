var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1342 = require('./1342'),
  module1146 = require('./1146'),
  module588 = require('./588'),
  module594 = require('./594'),
  module920 = require('./920');

function S() {
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

var module1440 = (function (t) {
  module35.default(D, t);

  var module588 = D,
    module1440 = S(),
    C = function () {
      var t,
        l = module34.default(module588);

      if (module1440) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, n);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function D(t) {
    var n;
    module24.default(this, D);

    (n = C.call(this, t))._handleAppStateChange = function (t) {
      if (null != t && 'active' === t)
        n.setState(
          {
            getPropertiesData: null,
          },
          function () {
            n.getRecordDetail();
          }
        );
    };

    var o = JSON.stringify(n.props.route.params);
    n.state = {
      getPropertiesData: null,
      fileName: JSON.parse(o).fileName,
      isInterrupt: Boolean(JSON.parse(o).isInterrupt),
      AppFunction: JSON.parse(o).AppFunction,
      CleanRunLimitTime: 0,
      CleanRunTime: 0,
      CleanAreas: 0,
      startTime: 0,
      amAnpm: null,
      isDelMap: false,
    };
    return n;
  }

  module25.default(D, [
    {
      key: 'componentDidMount',
      value: function () {
        this.getRecordDetail();
        ReactNative.AppState.addEventListener('change', this._handleAppStateChange);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        ReactNative.DeviceEventEmitter.emit('sweepCleanMap');

        this.setState = function (t, l) {};
      },
    },
    {
      key: 'getRecordDetail',
      value: function () {
        var t = this;
        module1146.default.getRecordDetail(this.state.fileName).then(function (l) {
          if (l && '' != l) {
            var n = JSON.parse(l).data;
            console.log('====================================');
            console.log('\u8fd4\u56de\u7684\u6e05\u626b\u8bb0\u5f55\u6570\u636e' + JSON.stringify(n));
            console.log('====================================');
            var o = new Date();
            o.setTime(1e3 * n.start);
            var s = o.getHours();
            s = s < 10 ? '0' + s : s;
            var u = o.getMinutes();
            u = u < 10 ? '0' + u : u;
            console.log('\u6e05\u626b\u65f6\u957f:' + n.cleanTime, '\u6e05\u626b\u9762\u79ef\uff1a' + n.sweep);
            t.setState({
              getPropertiesData: l,
              CleanRunLimitTime: n.cleanTime,
              CleanRunTime: n.cleanTime / 60,
              CleanAreas: 0 != n.sweep ? n.sweep : 0,
              startTime: s + ':' + u,
              amAnpm: s,
            });
          }
        });
      },
    },
    {
      key: 'closeArea',
      value: function () {
        ReactNative.DeviceEventEmitter.emit('isMoreMap');
        ReactNative.DeviceEventEmitter.emit('isMap');
        this.props.navigation.goBack();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = module920.default.cloneDeep(this.state.AppFunction);
        console.log('this.state.AppFunction:' + JSON.stringify(l));
        return React.default.createElement(
          ReactNative.SafeAreaView,
          {
            style: {
              flex: 1,
              backgroundColor: '#F7F9FC',
              position: 'relative',
            },
          },
          React.default.createElement(ReactNative.StatusBar, {
            translucent: false,
            backgroundColor: 'transparent',
            barStyle: 'dark-content',
          }),
          React.default.createElement(
            ReactNative.View,
            {
              style: v.detailsBox,
            },
            React.default.createElement(ReactNative.View, {
              style: v.detailTopChilder,
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
                    getPropertiesData: this.state.getPropertiesData,
                    status: false,
                    isTimeData: false,
                    showPath: true,
                    AppFunction: l,
                  })
                : null
            ),
            this.state.isDelMap
              ? React.default.createElement(ReactNative.View, {
                  style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#F7F9FC',
                    top: 0,
                    left: 0,
                  },
                })
              : null,
            React.default.createElement(
              ReactNative.View,
              {
                style: v.detailTop,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: v.detailTopTitle,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: v.detailTopImgBox,
                    onPress: function () {
                      t.setState(
                        {
                          isDelMap: true,
                        },
                        function () {
                          t.props.navigation.goBack();
                        }
                      );
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1256'),
                    style: v.detailTopImg,
                  })
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: v.detailTopTxt,
                  },
                  module594.default.t('cleanUpRecords')
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: v.detailLiBox,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: v.detailLi,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: v.detaiLTopTxt,
                    },
                    this.state.CleanAreas,
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: v.detaiLTopIcon,
                      },
                      'm\xb2'
                    )
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: v.detaiLBottomTxt,
                    },
                    module594.default.t('cleaningArea')
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: v.detailLi,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: v.detaiLTopTxt,
                    },
                    0 != parseInt(this.state.CleanRunTime) ? parseInt(this.state.CleanRunTime) : parseInt(this.state.CleanRunLimitTime),
                    0 == parseInt(this.state.CleanRunTime)
                      ? React.default.createElement(
                          ReactNative.Text,
                          {
                            style: v.detaiLTopIcon,
                          },
                          's'
                        )
                      : React.default.createElement(
                          ReactNative.Text,
                          {
                            style: v.detaiLTopIcon,
                          },
                          'min'
                        )
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: v.detaiLBottomTxt,
                    },
                    module594.default.t('cleaningTime')
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: v.detailLi,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: v.detaiLTopTxt,
                    },
                    this.state.startTime,
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: v.detaiLTopIcon,
                      },
                      ' ',
                      this.state.amAnpm < 12 ? 'AM' : 'PM',
                      ' '
                    )
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: v.detaiLBottomTxt,
                    },
                    module594.default.t('startCleaningTime1')
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: v.detailType,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: v.detailTypeBoxImg,
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: 0 == this.state.isInterrupt ? require('./1300') : require('./1440'),
                    resizeMode: 'cover',
                    style: v.detailTypeImg,
                  })
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [v.detailTypeTxt, 0 == this.state.isInterrupt ? v.detailTypeTxtYes : v.detailTypeTxtNoe],
                  },
                  0 == this.state.isInterrupt ? module594.default.t('cleaningCompleted') : module594.default.t('cleaningInterrupted')
                )
              )
            )
          )
        );
      },
    },
  ]);
  return D;
})(React.default.Component);

exports.recordingDetails = module1440;
var v = ReactNative.StyleSheet.create({
    detailsBox: {
      flex: 1,
      backgroundColor: '#E1E7F5',
      position: 'relative',
      flexDirection: 'column',
    },
    detailTypeBoxImg: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: module588.default.setSpText(10),
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    detailTypeImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    detailTypeTxt: {
      flex: 1,
      fontSize: module588.default.setSpText(14),
    },
    detailTypeTxtNoe: {
      color: '#D22148',
    },
    detailTypeTxtYes: {
      color: '#0A72FA',
    },
    detailType: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: module588.default.setSpText(20),
    },
    detaiLTopTxt: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(32),
    },
    detaiLTopIcon: {
      fontSize: module588.default.setSpText(16),
    },
    detailLi: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    detaiLBottomTxt: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
    },
    detailLiBox: {
      flexDirection: 'row',
      paddingVertical: module588.default.setSpText(14),
    },
    detailTopChilder: {
      height: module588.default.setSpText(100),
    },
    detailTop: {
      backgroundColor: '#F7F9FC',
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
    },
    detailTopTitle: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingVertical: module588.default.setSpText(22),
      position: 'relative',
    },
    detailTopImgBox: {
      position: 'absolute',
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      left: module588.default.setSpText(13),
    },
    detailTopImg: {
      width: '100%',
      height: '100%',
    },
    detailTopTxt: {
      color: '#11243D',
      fontSize: module588.default.setSpText(16),
    },
  }),
  C = module1440;
exports.default = C;
