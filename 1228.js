require('./1229');

require('./916');

require('./606');

require('./1145');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module593 = require('./593'),
  module588 = v(require('./588')),
  module594 = v(require('./594')),
  module1111 = require('./1111');

function T(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (T = function (t) {
    return t ? o : n;
  })(t);
}

function v(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = T(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
    s = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var u in t)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
      var f = s ? Object.getOwnPropertyDescriptor(t, u) : null;
      if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
      else l[u] = t[u];
    }

  l.default = t;
  if (o) o.set(t, l);
  return l;
}

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

var module1237 = (function (t) {
  module35.default(D, t);

  var T = D,
    v = S(),
    module1230 = function () {
      var t,
        n = module34.default(T);

      if (v) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function D(t) {
    var o;
    module24.default(this, D);
    (o = module1230.call(this, t)).state = {
      rightIcon: require('./1230'),
      myLi: [
        {
          name: module594.default.t('appUpdata'),
          img: require('./1231'),
        },
        {
          name: module594.default.t('languages'),
          img: require('./1232'),
        },
        {
          name: module594.default.t('operationGuide'),
          img: require('./1233'),
        },
        {
          name: module594.default.t('feedback'),
          img: require('./1234'),
        },
        {
          name: module594.default.t('aboutUs'),
          img: require('./1235'),
        },
      ],
      userData: '',
    };
    o.isUser();
    return o;
  }

  module25.default(D, [
    {
      key: 'storeChange',
      value: function () {
        this.setState({
          myLi: [
            {
              name: module594.default.t('appUpdata'),
              img: require('./1231'),
            },
            {
              name: module594.default.t('languages'),
              img: require('./1232'),
            },
            {
              name: module594.default.t('operationGuide'),
              img: require('./1233'),
            },
            {
              name: module594.default.t('feedback'),
              img: require('./1234'),
            },
            {
              name: module594.default.t('aboutUs'),
              img: require('./1235'),
            },
          ],
        });
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.myLoginUser = ReactNative.DeviceEventEmitter.addListener('myLoginUser', function () {
          t.isUser();
        });
        this.onChangeLanguageUI = ReactNative.DeviceEventEmitter.addListener('onChangeLanguageUI', function (n) {
          setTimeout(function () {
            t.storeChange();
          }, 10);
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.myLoginUser.emitter.removeAllListeners('myLoginUser');
        if (this.onChangeLanguageUI) this.onChangeLanguageUI.emitter.removeAllListeners('onChangeLanguageUI');

        this.setState = function (t, n) {};
      },
    },
    {
      key: 'isUser',
      value: function () {
        var t = this;
        module593.default.get('userData').then(function (n) {
          if (null == n)
            t.setState({
              userData: '',
            });
          else {
            ReactNative.Platform.OS;
            t.setState(
              {
                userData: n,
              },
              function () {}
            );
          }
        });
      },
    },
    {
      key: 'myListData',
      value: function (t) {
        var n = this.props.navigation.navigate;

        switch (('android' === ReactNative.Platform.OS && ReactNative.BackHandler.removeEventListener('hardwareBackPress', this._onBackPressed), t)) {
          case 0:
            n('updateApp', {
              updataType: 0,
            });
            break;

          case 1:
            n('language');
            break;

          case 2:
            n('myGuide');
            break;

          case 3:
            module1111.default.feedbackList(1, 20).then(function (t) {
              if (200 == t.code) 0 == t.data.data.length || '' == t.data.data ? n('feedBack') : n('feedackLi');
              else n('feedBack');
            });
            break;

          case 4:
            n('aboutUs');
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props.navigation.navigate;
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
              style: [
                b.scrollView,
                {
                  paddingTop: -module588.statusBarHeight,
                },
              ],
              showsHorizontalScrollIndicator: false,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    height: 123 + module588.statusBarHeight,
                    position: 'relative',
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1236'),
                  style: [b.topImg],
                }),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: b.topUserImg,
                    onPress: function () {
                      n('managementName');
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.userData.avatar
                      ? {
                          uri: this.state.userData.avatar,
                        }
                      : require('./1237'),
                    style: [b.topUserImgUrl],
                  })
                )
              ),
              React.default.createElement(ReactNative.View, {
                style: {
                  height: module588.statusBarHeight,
                  position: 'relative',
                },
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: b.myDataLi,
                },
                this.state.myLi.map(function (n, o) {
                  var l;

                  switch (o) {
                    case 0:
                      l = b.myDataLiBoxTop;
                      break;

                    case t.state.myLi.count - 1:
                      console.log(o);
                      l = b.myDataLiBoxBottom;
                      break;

                    default:
                      l = b.myDataLiBoxMiddle;
                  }

                  return React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [b.myDataLiBox, l],
                      key: o,
                      onPress: function () {
                        t.myListData(o);
                      },
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: n.img,
                      style: b.myDataLiBoxIcon,
                    }),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: b.myDataLiBoxTitle,
                      },
                      n.name
                    ),
                    React.default.createElement(ReactNative.Image, {
                      source: t.state.rightIcon,
                      style: b.myDataLiBoxIcon,
                    })
                  );
                })
              )
            )
          )
        );
      },
    },
  ]);
  return D;
})(React.default.Component);

exports.myData = module1237;
var b = ReactNative.StyleSheet.create({
    myDataLine: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginRight: 10,
    },
    loginYes: {
      paddingLeft: module588.default.setSpText(118),
    },
    scrollView: {
      flex: 1,
      paddingBottom: module588.default.setSpText(10),
    },
    welcomeTxt: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
    },
    welcomeName: {
      color: '#0A72FA',
      fontSize: module588.default.setSpText(24),
    },
    myDataLiBoxTitle: {
      flex: 1,
      paddingLeft: module588.default.setSpText(14),
    },
    myDataLiBoxIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      alignSelf: 'flex-end',
      marginRight: module588.default.setSpText(14),
    },
    myDataLiBox: {
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: module588.default.setSpText(14),
      borderBottomWidth: module588.default.setSpText(0.5),
      borderBottomColor: '#E1E7F5',
      borderTopWidth: module588.default.setSpText(0.5),
      borderTopColor: '#E1E7F5',
    },
    myDataLiBoxMiddle: {
      borderTopWidth: module588.default.setSpText(0.5),
      borderBottomWidth: module588.default.setSpText(0.5),
    },
    myDataLiBoxTop: {
      borderTopWidth: module588.default.setSpText(1),
      borderBottomWidth: module588.default.setSpText(0.5),
    },
    myDataLiBoxBottom: {
      borderTopWidth: module588.default.setSpText(0.5),
      borderBottomWidth: module588.default.setSpText(1),
    },
    myDataLi: {
      backgroundColor: '#fff',
      paddingLeft: module588.default.setSpText(20),
      marginTop: module588.default.setSpText(20),
    },
    topImg: {
      width: '100%',
      height: module588.default.setSpText(128),
    },
    topUserImg: {
      zIndex: 11,
      width: module588.default.setSpText(68),
      height: module588.default.setSpText(68),
      position: 'absolute',
      left: module588.default.setSpText(30),
      bottom: module588.default.setSpText(-30),
    },
    topUserImgUrl: {
      borderRadius: module588.default.setSpText(68),
      width: '100%',
      height: undefined,
      aspectRatio: 1,
    },
    myIsLogin: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(24),
      marginLeft: module588.default.setSpText(118),
      paddingRight: module588.default.setSpText(20),
    },
    myIsLoginIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
  }),
  D = module1237;
exports.default = D;
