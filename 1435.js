var module1135 = require('./1135'),
  module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module915 = require('./915'),
  module1111 = require('./1111'),
  module593 = require('./593'),
  module588 = require('./588'),
  module594 = require('./594');

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

var v = '',
  module1434 = (function (t) {
    module35.default(B, t);

    var module588 = B,
      module1434 = b(),
      k = function () {
        var t,
          n = module34.default(module588);

        if (module1434) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function B(t) {
      var n;
      module24.default(this, B);
      var l = (n = k.call(this, t)).props.route.params;
      n.state = {
        addName: module594.default.t('mobilePhone'),
        addNumber: '',
        nickname: l.nickname,
        iotId: l.iotId,
        addInputLi: [
          {
            name: module594.default.t('mobilePhone'),
            img: require('./1436'),
          },
          {
            name: module594.default.t('mailbox'),
            img: require('./1437'),
          },
        ],
        isAddLi: false,
        addSelectIndex: 0,
        selectImg: require('./1436'),
        areaCode: null,
        userId: null,
        aliUserId: null,
      };
      return n;
    }

    module25.default(B, [
      {
        key: 'addInputData',
        value: function (t, n) {
          this.setState({
            addSelectIndex: t,
            isAddLi: (this.state.isAddLi = !this.state.isAddLi),
            addName: n,
            selectImg: this.state.addInputLi[t].img,
          });
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          module593.default.get('userData').then(function (n) {
            t.setState({
              areaCode: n.areaCode,
              userId: n.userId,
              aliUserId: n.aliUserId,
            });
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(v);

          this.setState = function (t, n) {};
        },
      },
      {
        key: 'addBtnUser',
        value: function () {
          var t = this,
            n = 0;

          switch (this.state.addSelectIndex) {
            case 0:
              n = 1;
              break;

            case 1:
              n = 2;
              break;

            case 2:
              n = 0;
          }

          if (!this.state.addNumber) {
            module1096.default.info(module594.default.t('pleaseAccount'), 1, undefined, false);
            return false;
          }

          v = module1096.default.loading();
          console.log('aliUserId:' + this.state.aliUserId, '---userId:' + this.state.userId, 'addType=====>>>' + n, 'addNumber====>>' + this.state.addNumber);
          module915.default.addShareUser(this.state.userId, this.state.addNumber, n, this.state.areaCode.toString()).then(function (u) {
            module403.default.remove(v);
            if (0 == u.code || 200 == u.code)
              module1111.default.shareDevicesAndScenes(t.state.iotId, u.data.aliIdentityId, t.state.addNumber, n, t.state.areaCode.toString()).then(function (n) {
                if (200 == n.code) {
                  module1096.default.info(module594.default.t('addSuccess'), 1, undefined, false);
                  t.props.navigation.goBack();
                } else if (2062 == n.code) module1096.default.info(n.localMsg ? n.localMsg : n.message, 2, undefined, false);
                else module1096.default.info(n.localMsg, 1, undefined, false);
              });
            else if (10060 == u.code) module1096.default.info(module594.default.t('sorryNoExist'), 2, undefined, false);
            else module1096.default.info(u.localMsg ? u.localMsg : u.message, 1, undefined, false);
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
                style: {
                  flex: 1,
                  backgroundColor: '#F7F9FC',
                  position: 'relative',
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: L.addTopImg,
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1438'),
                  style: L.addTopIcon,
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: L.addTopName,
                  },
                  this.state.nickname
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: L.addContent,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: L.addContentTxt,
                    numberOfLines: 1,
                  },
                  module594.default.t('familyAndFriendsTogether')
                ),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: [
                      L.addContentInput,
                      {
                        zIndex: 1,
                      },
                    ],
                    onPress: function () {
                      t.setState({
                        isAddLi: (t.state.isAddLi = !t.state.isAddLi),
                      });
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.selectImg,
                    style: L.addInputIcon,
                  }),
                  React.default.createElement(ReactNative.TextInput, {
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    value: this.state.addName,
                    keyboardType: 'default',
                    editable: false,
                    maxLength: 32,
                    placeholderTextColor: '#CCCCCC',
                    style: L.addInput,
                  }),
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1297'),
                    style: L.addInputIcon,
                  })
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: L.addContentInput,
                  },
                  React.default.createElement(ReactNative.TextInput, {
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    value: this.state.addNumber,
                    onChangeText: function (n) {
                      t.setState({
                        addNumber: n,
                      });
                    },
                    editable: true,
                    maxLength: 32,
                    placeholderTextColor: '#CCCCCC',
                    placeholder: module594.default.t('pleaseEnter'),
                    keyboardType: 'default',
                    style: L.addInput,
                  })
                ),
                this.state.isAddLi
                  ? React.default.createElement(
                      ReactNative.View,
                      {
                        style: L.addInputLi,
                      },
                      this.state.addInputLi.map(function (n, l) {
                        return React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            key: l,
                            style: L.addInputLiBox,
                            onPress: function () {
                              t.addInputData(l, n.name);
                            },
                          },
                          React.default.createElement(ReactNative.Image, {
                            source: n.img,
                            style: L.addInputLiBoxIcon,
                          }),
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: L.addInputLiBoxTxt,
                            },
                            n.name
                          ),
                          t.state.addSelectIndex == l
                            ? React.default.createElement(ReactNative.Image, {
                                source: require('./1428'),
                                style: L.addSelect,
                              })
                            : null
                        );
                      })
                    )
                  : null,
                React.default.createElement(
                  module1135.default,
                  {
                    type: 'primary',
                    style: L.addBtn,
                    onPress: function () {
                      t.addBtnUser();
                    },
                  },
                  module594.default.t('sureToAdd')
                )
              ),
              React.default.createElement(ReactNative.Image, {
                source: require('./1434'),
                style: L.logoBck,
              })
            )
          );
        },
      },
    ]);
    return B;
  })(React.default.Component);

exports.logoutName = module1434;
var L = ReactNative.StyleSheet.create({
    addSelect: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      right: 0,
    },
    addInputLiBox: {
      flexDirection: 'row',
      height: module588.default.setSpText(48),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#E1E7F5',
      borderBottomWidth: module588.default.setSpText(1),
      position: 'relative',
    },
    addInputLiBoxIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    addInputLiBoxTxt: {
      flex: 1,
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
      paddingLeft: module588.default.setSpText(14),
    },
    addInputLi: {
      position: 'absolute',
      width: '100%',
      backgroundColor: '#fff',
      top: module588.default.setSpText(90),
      zIndex: 88,
      borderRadius: module588.default.setSpText(8),
      paddingHorizontal: module588.default.setSpText(18),
    },
    addBtn: {
      width: '100%',
      height: module588.default.setSpText(48),
      borderRadius: module588.default.setSpText(16),
      marginTop: module588.default.setSpText(20),
    },
    addInput: {
      flex: 1,
      color: '#0A72FA',
      paddingVertical: 0,
      paddingLeft: module588.default.setSpText(10),
    },
    addContentInput: {
      height: module588.default.setSpText(48),
      borderRadius: module588.default.setSpText(16),
      backgroundColor: '#E6EFFA',
      borderColor: '#BCCCE0',
      borderWidth: module588.default.setSpText(1),
      marginTop: module588.default.setSpText(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: module588.default.setSpText(10),
      position: 'relative',
    },
    addInputIcon: {
      width: module588.default.setSpText(22),
      paddingVertical: 0,
      height: module588.default.setSpText(22),
    },
    addContentTxt: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(16),
    },
    addContent: {
      marginTop: module588.default.setSpText(13),
      paddingHorizontal: module588.default.setSpText(20),
      position: 'relative',
      alignItems: 'center',
      zIndex: 22,
    },
    addTopIcon: {
      width: module588.default.setSpText(150),
      height: module588.default.setSpText(150),
    },
    addTopImg: {
      paddingTop: module588.default.setSpText(40),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    addTopName: {
      position: 'absolute',
      paddingHorizontal: module588.default.setSpText(9),
      paddingVertical: module588.default.setSpText(7),
      backgroundColor: '#658DC2',
      borderRadius: module588.default.setSpText(16),
      color: '#fff',
      fontSize: module588.default.setSpText(14),
      top: '50%',
      marginTop: module588.default.setSpText(15.5),
    },
    logoBck: {
      position: 'absolute',
      width: '100%',
      height: module588.default.setSpText(241),
      left: 0,
      bottom: 0,
    },
  }),
  k = module1434;
exports.default = k;
