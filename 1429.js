var module1096 = require('./1096'),
  module1117 = require('./1117'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1111 = require('./1111'),
  module915 = require('./915'),
  module588 = require('./588'),
  module593 = require('./593'),
  module594 = require('./594');

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

var module1393 = (function (t) {
  module35.default(U, t);

  var module588 = U,
    module1393 = v(),
    L = function () {
      var t,
        s = module34.default(module588);

      if (module1393) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(s, arguments, n);
      } else t = s.apply(this, arguments);

      return module37.default(this, t);
    };

  function U(t) {
    var s;
    module24.default(this, U);
    s = L.call(this, t);
    var n = JSON.stringify(s.props.route.params);
    s.state = {
      iotId: JSON.parse(n).iotId,
      nickname: JSON.parse(n).nickname,
      deviceName: JSON.parse(n).deviceName,
      codeImg: null,
      shareItLiData: [
        {
          name: module594.default.t('shareViaAccount'),
          img: require('./1226'),
        },
        {
          name: module594.default.t('qrCodeSharing'),
          img: require('./1320'),
        },
      ],
      pageNo: 1,
      pageSize: 20,
      userId: '',
      userLi: [],
      delBtn: false,
      loading: false,
      boxOne: 0,
      boxTwo: 0,
      FlatListBox: null,
    };
    return s;
  }

  module25.default(U, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.isShareIt = ReactNative.DeviceEventEmitter.addListener('isShareIt', function (s) {
          t.listBindingByDev();
        });
        module593.default.get('userData').then(function (s) {
          t.setState(
            {
              userId: s.userId,
            },
            function () {
              t.listBindingByDev();
            }
          );
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.isShareIt) this.isShareIt.emitter.removeAllListeners('isShareIt');

        this.setState = function (t, s) {};
      },
    },
    {
      key: 'listBindingByDev',
      value: function () {
        var t = this;
        module1111.default.listBindingByDev(this.state.iotId, this.state.pageNo, this.state.pageSize, null).then(function (s) {
          console.log('========== DeviceApiModule.listBindingByDev = ' + JSON.stringify(s));

          for (var n = [], l = 0; l < s.data.data.length; l++) n += s.data.data[l].identityId + ',';

          t.getUserInfoByAliIdentityIds(n);
        });
      },
    },
    {
      key: 'getUserInfoByAliIdentityIds',
      value: function (t) {
        var s = this;
        t = t.substring(0, t.lastIndexOf(','));
        module915.default.getUserInfoByAliIdentityIds(this.state.userId, t).then(function (t) {
          s.userOneData(t.data);
        });
      },
    },
    {
      key: 'userOneData',
      value: function (t) {
        for (var s = '', n = 0; n < t.length; n++) t[n].userId == this.state.userId && ((s = t[n]), t.splice(n, 1), t.unshift(s));

        this.setState({
          userLi: t,
        });
      },
    },
    {
      key: '_renderItem',
      value: function (t) {
        var s = this,
          n = t.item,
          l = t.index;
        return React.default.createElement(
          ReactNative.View,
          {
            style: B.shareItUserLiBox,
            key: l,
          },
          this.state.userId == n.userId
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: B.shareItUserIcon,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: B.shareItUserIconText,
                  },
                  module594.default.t('primaryUser')
                )
              )
            : null,
          React.default.createElement(ReactNative.Image, {
            source: n.avatar
              ? {
                  uri: n.avatar,
                }
              : require('./1430'),
            style: B.shareItUserimg,
          }),
          React.default.createElement(
            ReactNative.Text,
            {
              style: B.shareItUserName,
            },
            n.userName ? (n.userName.length > 8 ? n.userName.substr(0, 8) + '...' : n.userName) : ''
          ),
          this.state.userId != n.userId && this.state.delBtn
            ? React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: B.delUser,
                  onPress: function () {
                    s.unbindByManager(n.aliIdentityId);
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1431'),
                  style: B.delUserIcon,
                })
              )
            : null
        );
      },
    },
    {
      key: 'refresh',
      value: function () {
        this.setState({
          loading: true,
        });
        this.listBindingByDev();
        this.setState({
          loading: false,
        });
      },
    },
    {
      key: 'shareItLi',
      value: function (t) {
        var s = this.props.navigation.navigate;

        switch (Number(t)) {
          case 0:
            s('addShareIt', {
              iotId: this.state.iotId,
              nickname: this.state.nickname,
            });
            break;

          case 1:
            s('qrCode', {
              iotId: this.state.iotId,
              deviceName: this.state.deviceName,
            });
        }
      },
    },
    {
      key: 'unbindByManager',
      value: function (t) {
        var l = this;
        module1117.default.alert(module594.default.t('Tips'), module594.default.t('deleteThisUser'), [
          {
            text: module594.default.t('cancel'),
            style: 'cancel',
          },
          {
            text: module594.default.t('btnConfirm'),
            onPress: function () {
              return module1111.default.unbindByManager(l.state.iotId, t).then(function (t) {
                if (200 == t.code) {
                  module1096.default.info(module594.default.t('successfullyDeleted'), 1, undefined, false);
                  l.setState({
                    delBtn: false,
                  });
                  l.listBindingByDev();
                }
              });
            },
          },
        ]);
      },
    },
    {
      key: '_onLayout',
      value: function (t, s) {
        var n = this,
          l = t.nativeEvent.layout.height;

        switch (s) {
          case 1:
            this.setState(
              {
                boxOne: l,
              },
              function () {
                n.boxHeight();
              }
            );
            break;

          case 2:
            this.setState(
              {
                boxTwo: l,
              },
              function () {
                n.boxHeight();
              }
            );
        }
      },
    },
    {
      key: 'boxHeight',
      value: function () {
        if (0 != this.state.boxOne && 0 != this.state.boxTwo) {
          var t = ReactNative.Dimensions.get('window').height - (this.state.boxOne + this.state.boxTwo);
          this.setState({
            FlatListBox: t,
          });
        }
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
              style: {
                flex: 1,
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: B.shareItLi,
                onLayout: function (s) {
                  t._onLayout(s, 1);
                },
              },
              this.state.shareItLiData.map(function (s, n) {
                return React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: B.shareItLiBox,
                    key: n,
                    onPress: function () {
                      t.shareItLi(n);
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: s.img,
                    style: B.shareItLiL,
                    resizeMode: 'contain',
                  }),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: B.shareItLiTxt,
                    },
                    s.name
                  ),
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1230'),
                    style: B.shareItLiR,
                    resizeMode: 'contain',
                  })
                );
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: B.shareItUser,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: B.shareItUserTop,
                  onLayout: function (s) {
                    t._onLayout(s, 2);
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: B.shareItUserTitle,
                  },
                  module594.default.t('sharedMember').replace(/\%/g, this.state.userLi ? this.state.userLi.length : 0)
                ),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: B.shareItUserDel,
                    onPress: function () {
                      t.setState({
                        delBtn: (t.state.delBtn = !t.state.delBtn),
                      });
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1393'),
                    style: B.shareItUserDelIcon,
                    resizeMode: 'contain',
                  })
                )
              ),
              React.default.createElement(ReactNative.FlatList, {
                style: [
                  B.flexBox,
                  {
                    height: this.state.FlatListBox,
                  },
                ],
                removeClippedSubviews: false,
                data: this.state.userLi,
                renderItem: this._renderItem.bind(this),
                numColumns: 4,
                keyExtractor: function (t, s) {
                  return t + s;
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
  return U;
})(React.default.Component);

exports.shareIt = module1393;
var B = ReactNative.StyleSheet.create({
    delUser: {
      position: 'absolute',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      width: module588.default.setSpText(70),
      height: module588.default.setSpText(70),
      borderRadius: module588.default.setSpText(70),
      backgroundColor: 'rgba(210, 33, 33, .5)',
    },
    delUserIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    shareItUserIcon: {
      position: 'absolute',
      height: module588.default.setSpText(23),
      top: '50%',
      marginTop: module588.default.setSpText(-11.5),
      zIndex: 1,
      backgroundColor: 'rgba(33, 59, 92, 0.7)',
      borderRadius: module588.default.setSpText(16),
      paddingHorizontal: module588.default.setSpText(9),
      paddingVertical: module588.default.setSpText(3),
    },
    shareItUserIconText: {
      color: '#F5F6FA',
      fontSize: module588.default.setSpText(10),
    },
    shareItBtnbtn: {
      height: module588.default.setSpText(48),
    },
    shareItBtn: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      paddingHorizontal: module588.default.setSpText(10),
      paddingBottom: module588.default.setSpText(20),
    },
    flexBox: {
      paddingTop: module588.default.setSpText(10),
    },
    shareItUserName: {
      fontSize: module588.default.setSpText(12),
      color: '#213B5C',
    },
    shareItUserimg: {
      width: module588.default.setSpText(70),
      height: module588.default.setSpText(70),
      borderRadius: module588.default.setSpText(70),
    },
    shareItUserLiBox: {
      width: '25%',
      position: 'relative',
      height: module588.default.setSpText(100),
      textAlign: 'center',
      alignItems: 'center',
    },
    shareItUserTitle: {
      flex: 1,
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    shareItUserDel: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    shareItUserDelIcon: {
      width: '100%',
      height: '100%',
    },
    shareItUserTop: {
      flexDirection: 'row',
      paddingVertical: module588.default.setSpText(20),
      borderBottomColor: '#E1E7F5',
      borderBottomWidth: module588.default.setSpText(1),
    },
    shareItUser: {
      width: '100%',
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(16),
      marginTop: module588.default.setSpText(20),
    },
    shareItLiTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
      flex: 1,
      paddingLeft: module588.default.setSpText(24),
    },
    shareItLiR: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    shareItLiL: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(24),
    },
    shareItLiBox: {
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: module588.default.setSpText(18),
      borderBottomColor: '#E1E7F5',
      borderBottomWidth: module588.default.setSpText(1),
    },
    shareItLi: {
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(20),
      marginTop: module588.default.setSpText(20),
    },
  }),
  L = module1393;
exports.default = L;
