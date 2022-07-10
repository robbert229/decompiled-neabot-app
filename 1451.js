require('./1110');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module1145 = require('./1145'),
  module594 = require('./594'),
  module1147 = require('./1147');

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

var L = (function (t) {
  module35.default(p, t);

  var module588 = p,
    L = S(),
    y = function () {
      var t,
        n = module34.default(module588);

      if (L) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p(t) {
    var o;
    module24.default(this, p);
    var c = (o = y.call(this, t)).props.route.params;
    o.state = {
      iotId: c.iotId,
      deviceName: c.deviceName,
      WIFI_AP_BSSID: '',
      WiFI_IP: '',
      MACAddress: '',
      McuVersion: '',
      GitCnt: '',
      DebugMode: 0,
      needToSwitch: false,
      timeCount: null,
      touchTimesCount: 0,
    };
    o.getProperties();
    return o;
  }

  module25.default(p, [
    {
      key: 'setSwitch',
      value: function (t) {
        this.setState({
          DebugMode: t,
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.connectInterval) clearInterval(this.connectInterval);
      },
    },
    {
      key: 'getProperties',
      value: function () {
        var t = this;
        module1145.default.getProperties(this.state.iotId).then(function (n) {
          var o = n.data;
          t.setState({
            WIFI_AP_BSSID: o.WIFI_AP_BSSID,
            WiFI_IP: o.WiFI_IP,
            MACAddress: o.MACAddress,
            McuVersion: o.McuVersion,
            GitCnt: o.GitCnt,
            DebugMode: o.debugMode,
          });
        });
        module1145.default.updateWifiInfo(this.state.iotId);
      },
    },
    {
      key: 'check5TimesTouchSwitch',
      value: function () {
        var t = this;
        if (!this.connectInterval)
          this.setState(
            {
              timeCount: 0,
            },
            function () {
              t.connectInterval = setInterval(function () {
                if (t.state.timeCount++ >= 5) {
                  if (t.connectInterval) clearInterval(t.connectInterval);
                  t.setState({
                    timeCount: null,
                  });
                }
              }, 1e3);
            }
          );
        this.state.touchTimesCount++;

        if (this.state.touchTimesCount >= 5 && this.connectInterval) {
          if (this.connectInterval) clearInterval(this.connectInterval);
          this.setState({
            timeCount: null,
            touchTimesCount: 0,
            needToSwitch: true,
          });
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          ReactNative.View,
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
              style: x.deviceInforBox,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: x.deviceInforLi,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiL, x.deviceInforLiTxt],
                },
                module594.default.t('deviceSN')
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiR, x.deviceInforLiTxt],
                  selectable: true,
                },
                ' ',
                this.state.deviceName,
                ' '
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: x.deviceInforLi,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiL, x.deviceInforLiTxt],
                },
                module594.default.t('deviceHotspot')
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiR, x.deviceInforLiTxt],
                  selectable: true,
                },
                ' ',
                this.state.WIFI_AP_BSSID,
                ' '
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: x.deviceInforLi,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiL, x.deviceInforLiTxt],
                },
                module594.default.t('deviceHotspotIP')
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiR, x.deviceInforLiTxt],
                  selectable: true,
                },
                this.state.WiFI_IP,
                ' '
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: x.deviceInforLi,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiL, x.deviceInforLiTxt],
                },
                module594.default.t('MACAddress')
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiR, x.deviceInforLiTxt],
                  selectable: true,
                },
                this.state.MACAddress,
                ' '
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: x.deviceInforLi,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiL, x.deviceInforLiTxt],
                },
                module594.default.t('MCUversion')
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [x.deviceInforLiR, x.deviceInforLiTxt],
                  selectable: true,
                },
                this.state.McuVersion,
                ' '
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                activeOpacity: 0.1,
                hitSlop: {
                  left: 0,
                  right: 0,
                  top: 10,
                  bottom: 10,
                },
                key: 'debug',
                onPress: function () {
                  if (Config.DeviceDebug) t.check5TimesTouchSwitch();
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: x.deviceInforLi,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [x.deviceInforLiL, x.deviceInforLiTxt],
                  },
                  module594.default.t('compileNumber')
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [x.deviceInforLiR, x.deviceInforLiTxt],
                    selectable: true,
                  },
                  this.state.GitCnt,
                  ' '
                )
              )
            )
          ),
          this.state.needToSwitch && 0 == this.state.DebugMode
            ? React.default.createElement(module1147.default, {
                isShow: this.state.needToSwitch,
                isType: 'OPEN',
                isData: {},
                onPick: function () {
                  t.setState(
                    {
                      needToSwitch: false,
                    },
                    function () {}
                  );
                },
                onData: function (n) {
                  module1145.default.robotDebugMode(t.state.iotId, 1).then(function (n) {
                    if (n.data && n.data.code)
                      200 == n.data.code
                        ? t.setState(
                            {
                              needToSwitch: false,
                            },
                            function () {
                              if (0 == t.state.DebugMode) t.setSwitch(1);
                              else t.setSwitch(0);
                            }
                          )
                        : 9201 == n.data.code
                        ? Toast.info(module594.default.t('notOnline'), 1, undefined, false)
                        : Toast.info(n.data.message, 1, undefined, false);
                  });
                },
              })
            : null,
          this.state.needToSwitch && 1 == this.state.DebugMode
            ? React.default.createElement(module1147.default, {
                isShow: this.state.needToSwitch,
                isType: 'CLOSE',
                isData: {},
                onPick: function () {},
                onData: function (n) {
                  module1145.default.robotDebugMode(t.state.iotId, 0).then(function (n) {
                    if (n.data && n.data.code)
                      200 == n.data.code
                        ? t.setState(
                            {
                              needToSwitch: false,
                            },
                            function () {
                              if (0 == t.state.DebugMode) t.setSwitch(1);
                              else t.setSwitch(0);
                            }
                          )
                        : 9201 == n.data.code
                        ? Toast.info(module594.default.t('notOnline'), 1, undefined, false)
                        : Toast.info(n.data.message, 1, undefined, false);
                  });
                },
              })
            : null
        );
      },
    },
  ]);
  return p;
})(React.default.Component);

exports.deviceInfor = L;
var x = ReactNative.StyleSheet.create({
    deviceInforBox: {
      backgroundColor: '#F7F9FC',
      flex: 1,
    },
    deviceInforLi: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(24),
      paddingVertical: module588.default.setSpText(15),
      marginTop: module588.default.setSpText(5),
      marginBottom: module588.default.setSpText(5),
    },
    deviceInforLiTxt: {
      flex: 1,
    },
    deviceInforLiL: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    deviceInforLiR: {
      color: '#0A72FA',
      fontSize: module588.default.setSpText(12),
      textAlign: 'right',
    },
  }),
  y = L;
exports.default = y;
