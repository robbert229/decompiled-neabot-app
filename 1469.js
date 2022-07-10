var module1135 = require('./1135'),
  module1117 = require('./1117'),
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
    var o = U(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (p && (p.get || p.set)) Object.defineProperty(s, u, p);
        else s[u] = t[u];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('./588')),
  module1146 = require('./1146'),
  module599 = require('./599'),
  module1147 = require('./1147'),
  module594 = require('./594');

function U(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (U = function (t) {
    return t ? o : n;
  })(t);
}

function k() {
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

var module1470 = (function (t) {
  module35.default(P, t);

  var U = P,
    module1470 = k(),
    E = function () {
      var t,
        n = module34.default(U);

      if (module1470) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P(t) {
    var n;
    module24.default(this, P);
    var o = (n = E.call(this, t)).props.route.params;
    n.state = {
      updataType: o.updataType,
      currentVersion: module599.default.getVersion(),
      updataVersion: null,
      updataDes: null,
      updataUrl: null,
      isAlert: false,
      alertType: 'UP',
      upDataUnm: '',
      isUpdata: false,
      isHeight: true,
    };
    n.checkAppUpdate();
    return n;
  }

  module25.default(P, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;

        if ('android' === ReactNative.Platform.OS) {
          var n = new ReactNative.NativeEventEmitter();
          this.eventEmitter = n.addListener('downloadApk', function (n) {
            ReactNative.DeviceEventEmitter.emit('appUp', n.progress);
            if ('success' == n.result)
              t.setState({
                isAlert: false,
              });
          });
          ReactNative.BackHandler.addEventListener('hardwareBackPress', this._onBackPressed.bind(this));
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if ('android' === ReactNative.Platform.OS) {
          this.eventEmitter.emitter.removeAllListeners('downloadApk');
          ReactNative.BackHandler.removeEventListener('hardwareBackPress', this._onBackPressed.bind(this));
        }

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
      key: 'checkAppUpdate',
      value: function () {
        var t = this;
        module1146.default.checkAppUpdate().then(
          function (n) {
            if ((console.log('=======updateApp checkAppUpdate msg 0 = ' + JSON.stringify(n)), 200 == n.code && n.data.isUpdate)) {
              var o = n.data;
              t.setState({
                isUpdata: o.isUpdate,
                currentVersion: o.currentVersion,
                updataVersion: o.updateVersion,
                updataDes: o.updateDes,
                updataUrl: o.updateUrl,
              });
            }
          },
          function (t, n) {
            if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
              Object.keys(t).map(function (n) {
                if ('message' == n) t[n];
              });
            }
          }
        );
      },
    },
    {
      key: 'appNativeUpdate',
      value: function () {
        if ('android' == ReactNative.Platform.OS)
          this.setState({
            isAlert: true,
          });
        module1146.default.appNativeUpdate(this.state.updataUrl, 'com.jhkj.neabot');
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
            },
          },
          React.default.createElement(ReactNative.StatusBar, {
            translucent: this.state.isHeight,
            backgroundColor: 'transparent',
            barStyle: 'light-content',
          }),
          React.default.createElement(
            ReactNative.View,
            {
              style: [
                {
                  position: 'relative',
                },
              ],
            },
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  b.updataTopBack,
                  {
                    marginTop: module588.titleHeight,
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
              },
              React.default.createElement(ReactNative.Image, {
                source: require('./1442'),
                resizeMode: 'contain',
                style: [b.updataTopBackImg],
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [b.updataTopTitle],
                },
                ' ',
                module594.default.t('appUpdata'),
                ' '
              )
            ),
            React.default.createElement(ReactNative.Image, {
              source: require('./1450'),
              style: [b.updataTopImg],
            }),
            React.default.createElement(ReactNative.Image, {
              source: require('./1470'),
              style: b.updataTopImgTs,
            })
          ),
          this.state.isUpdata
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: b.yesUpdata,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: b.yesUpdataTxt,
                  },
                  module594.default.t('currentVersion'),
                  ' ',
                  this.state.currentVersion,
                  ' '
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: b.yesUpdataTxt,
                  },
                  module594.default.t('atestVersion1'),
                  ' ',
                  this.state.updataVersion,
                  ' '
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: b.updataPrompt,
                  },
                  module594.default.t('newVersionUpdate'),
                  '\uff1a'
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: b.updataPromptTxt,
                  },
                  this.state.updataDes,
                  ' '
                )
              )
            : React.default.createElement(
                ReactNative.View,
                {
                  style: b.onUpdata,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: b.onUpdataTxt,
                  },
                  module594.default.t('currentVersion'),
                  ' ',
                  this.state.currentVersion,
                  ' '
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: b.onUpdataTxt,
                  },
                  module594.default.t('yourLatestVersion')
                )
              ),
          this.state.isUpdata
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: b.updataBtn,
                },
                React.default.createElement(
                  module1135.default,
                  {
                    type: 'primary',
                    size: 'small',
                    style: b.updataBtnSty,
                    onPress: function () {
                      if ('android' == ReactNative.Platform.OS)
                        Premissions.checkLibrary(
                          function () {
                            t.appNativeUpdate();
                          },
                          function () {
                            module1117.default.alert(
                              'ios' === ReactNative.Platform.OS
                                ? module594.default.t('photoLibraryAndMediaTitle')
                                : module594.default.t('photoLibraryAndMediaTitle').replace('iPhone', 'Android'),
                              'ios' === ReactNative.Platform.OS ? module594.default.t('photoLibraryAndMediaContents') : module594.default.t('libraryAndroidContents'),
                              [
                                {
                                  text: module594.default.t('cancel'),
                                  style: 'cancel',
                                },
                                {
                                  text: module594.default.t('toTravelTo'),
                                  onPress: function () {
                                    RNPermissions.openSettings();
                                  },
                                },
                              ]
                            );
                          },
                          t
                        );
                      else t.appNativeUpdate();
                    },
                  },
                  module594.default.t('startUpdate')
                )
              )
            : null,
          this.state.isAlert
            ? React.default.createElement(module1147.default, {
                isShow: this.state.isAlert,
                isType: this.state.alertType,
                isData: {
                  upDataUnm: this.state.upDataUnm,
                  currentVersion: this.state.updataVersion,
                  versiontType: 1,
                },
                onPick: function () {
                  t.setState({
                    isAlert: false,
                  });
                },
                onData: function (t) {},
              })
            : null
        );
      },
    },
  ]);
  return P;
})(React.default.Component);

exports.updateApp = module1470;
var b = ReactNative.StyleSheet.create({
    updataLoading: {
      height: module588.default.setSpText(48),
      backgroundColor: '#E6EFFA',
      borderColor: '#0A72FA',
      borderWidth: module588.default.setSpText(2),
      borderRadius: module588.default.setSpText(16),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    updataBtnSty: {
      height: module588.default.setSpText(48),
    },
    updataBtn: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      left: 0,
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(20),
    },
    updataPromptTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
    },
    updataPrompt: {
      color: '#0A72FA',
      fontSize: module588.default.setSpText(24),
      paddingVertical: module588.default.setSpText(10),
    },
    yesUpdataTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#0A72FA',
    },
    yesUpdata: {
      marginTop: module588.default.setSpText(20),
      paddingLeft: module588.default.setSpText(20),
    },
    onUpdataTxt: {
      textAlign: 'center',
      color: '#213B5C',
      fontSize: module588.default.setSpText(16),
      paddingBottom: module588.default.setSpText(10),
    },
    onUpdata: {
      marginTop: module588.default.setSpText(20),
    },
    updataTopTitle: {
      flex: 1,
      color: '#F5F6FA',
      textAlign: 'center',
      marginRight: module588.default.setSpText(22),
      fontSize: module588.default.setSpText(16),
    },
    updataTopBackImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    updataTopBack: {
      position: 'absolute',
      width: '100%',
      height: module588.default.setSpText(70),
      flexDirection: 'row',
      zIndex: 1,
      paddingHorizontal: module588.default.setSpText(12),
    },
    updataTop: {
      position: 'relative',
    },
    updataTopImgTs: {
      position: 'absolute',
      width: module588.default.setSpText(287),
      height: module588.default.setSpText(133),
      bottom: 0,
      left: '50%',
      marginLeft: module588.default.setSpText(-143.5),
    },
    updataTopImg: {
      width: '100%',
      height: module588.default.setSpText(202) + module588.statusBarHeight,
    },
  }),
  E = module1470;
exports.default = E;
