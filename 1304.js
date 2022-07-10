var regeneratorRuntime = require('regenerator-runtime'),
  module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1146 = require('./1146'),
  module593 = require('./593'),
  module588 = require('./588'),
  module1305 = require('./1305'),
  module594 = require('./594'),
  module599 = require('./599');

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

var U = '',
  L = (function (t) {
    module35.default(B, t);

    var module588 = B,
      L = S(),
      P = function () {
        var t,
          n = module34.default(module588);

        if (L) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function B(t) {
      var o;
      module24.default(this, B);

      (o = P.call(this, t)).componentDidMount = function () {
        return regeneratorRuntime.default.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  t.t0 = o;
                  t.next = 3;
                  return regeneratorRuntime.default.awrap(module599.default.getUserAgent());

                case 3:
                  t.t1 = t.sent;
                  t.t2 = {
                    userAgent: t.t1,
                  };
                  t.t0.setState.call(t.t0, t.t2);
                  o.getProtocolUrl();

                case 7:
                case 'end':
                  return t.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };

      o._Loading = function () {
        return React.default.createElement(
          ReactNative.View,
          {
            style: k.WebViewloading,
          },
          React.default.createElement(ReactNative.ActivityIndicator, {
            size: 'large',
            color: '#4CAF50',
          })
        );
      };

      var l = o.props.route.params;
      o.state = {
        agreementLi: [
          {
            name: module594.default.t('privacyAgreement'),
          },
          {
            name: module594.default.t('LDuserAgreement'),
          },
        ],
        agreementLiIndex: l && l.index ? l.index : 0,
        protocolUrl: null,
        winUrl: null,
        pdf: null,
        progress: 0,
        userAgent: '',
      };
      return o;
    }

    module25.default(B, [
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(U);
          if (this.props.route.params.callbackFunc) this.props.route.params.callbackFunc();
        },
      },
      {
        key: 'getProtocolUrl',
        value: function () {
          var t = this;
          this.setState({
            pdf: false,
          });
          U = module1096.default.loading();
          module1146.default.getProtocolVersion().then(
            function (n) {
              module403.default.remove(U);

              if (n) {
                console.log('msg====' + JSON.stringify(n));
                module593.default.get('loginMaxVersion').then(function (o) {
                  if (n.hasOwnProperty('version'))
                    o && o == n.version
                      ? module593.default.get('getProtocolUrl').then(function (n) {
                          t.getProtocol(n);
                        })
                      : (module1146.default.getProtocolUrl().then(function (n) {
                          console.log('OssManagerApiModule msg====' + JSON.stringify(n));

                          if (n) {
                            module593.default.save('getProtocolUrl', n);
                            t.getProtocol(n);
                          }
                        }),
                        n.version && module593.default.save('loginMaxVersion', n.version));
                });
              }
            },
            function (t, n) {
              if ((module403.default.remove(U), (t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                var s = 0,
                  u = '';
                Object.keys(t).map(function (n) {
                  if ('code' == n) {
                    var o = t[n];
                    if (1101354 == o) s = o;
                  }

                  if ('message' == n) u = t[n];
                });

                if (1101354 == s) {
                  module403.default.remove(U);
                  module1096.default.info(module594.default.t('noNetwork'), 1, undefined, false);
                } else {
                  module403.default.remove(U);
                  module1096.default.info(u, 1, undefined, false);
                }
              }
            }
          );
        },
      },
      {
        key: 'getProtocol',
        value: function (t) {
          var n = this;
          this.setState(
            {
              protocolUrl: t[0],
            },
            function () {
              n.winUrlData();
            }
          );
        },
      },
      {
        key: 'agreementNav',
        value: function (t) {
          var n = this;
          this.setState(
            {
              agreementLiIndex: t,
            },
            function () {
              n.winUrlData();
            }
          );
        },
      },
      {
        key: 'winUrlData',
        value: function () {
          if (this.state.protocolUrl && this.state.protocolUrl.content) {
            this.state.protocolUrl.content[this.state.agreementLiIndex].url;
            this.setState({
              winUrl: 0 == this.state.agreementLiIndex ? module594.default.t('PrivacyPolicy') : module594.default.t('UserAgreement'),
            });
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state.pdf;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                backgroundColor: '#F7F9FC',
                position: 'relative',
              },
            },
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              hidden: this.state.isNoticeShow,
              backgroundColor: '#fff',
              barStyle: 'dark-content',
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: k.agreementBox,
              },
              this.state.agreementLi.map(function (n, o) {
                return React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: k.agreementBoxLi,
                    onPress: function () {
                      t.agreementNav(o);
                    },
                    key: o,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [k.agreementBoxLiTxt, t.state.agreementLiIndex == o ? k.agreementBoxLiTxtActive : ''],
                    },
                    ' ',
                    n.name,
                    ' '
                  )
                );
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                },
              },
              n
                ? React.default.createElement(module1305.WebView, {
                    source: {
                      uri: this.state.winUrl,
                    },
                    userAgent: this.state.userAgent,
                    thirdPartyCookiesEnabled: true,
                    sharedCookiesEnabled: true,
                    allowFileAccess: true,
                    startInLoadingState: true,
                    allowFileAccess: true,
                    originWhitelist: ['*'],
                    style: {
                      flex: 1,
                    },
                    onLoad: function (n) {
                      var o = n.nativeEvent;
                      t.url = o.url;
                    },
                    onError: function (t) {
                      var n = t.nativeEvent;
                      console.warn('WebView error: ', n);
                    },
                    onHttpError: function (t) {
                      var n = t.nativeEvent;
                      console.warn('WebView received error status code: ', n.statusCode);
                    },
                  })
                : React.default.createElement(module1305.WebView, {
                    source: {
                      uri: this.state.winUrl,
                    },
                    userAgent: this.state.userAgent,
                    style: {
                      flex: 1,
                    },
                    startInLoadingState: true,
                  })
            )
          );
        },
      },
    ]);
    return B;
  })(React.default.Component);

exports.userAgreement = L;
var k = ReactNative.StyleSheet.create({
    agreementBox: {
      flexDirection: 'row',
      backgroundColor: '#E1E7F5',
    },
    agreementBoxLi: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    agreementBoxLiTxt: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(14),
      paddingVertical: module588.default.setSpText(10),
    },
    agreementBoxLiTxtActive: {
      color: '#0A72FA',
      borderBottomWidth: module588.default.setSpText(2),
      borderBottomColor: '#0A72FA',
    },
  }),
  P = L;
exports.default = P;
