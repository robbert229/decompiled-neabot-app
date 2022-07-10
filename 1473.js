exports.stringToContentArray = function (t) {
  var n = new RegExp('\\[[a-zA-Z0-9\\/\\u4e00-\\u9fa5]+\\]', 'g'),
    o = [],
    l = t.match(n);

  if ((console.log(l), null === l)) {
    o.push({
      Content: t,
    });
    return o;
  }

  for (var s = [], u = t.indexOf(l[0]), c = 1; c < l.length; c++) {
    s.push(u);
    u = t.indexOf(l[c], u + 1);
  }

  s.push(u);
  console.log('indexArray = ', s);

  for (var f = 0; f < s.length; f++)
    0 === s[f]
      ? o.push({
          Resources: EMOTION_GIF_NAME[l[f]],
          attr: {
            Type: '0',
          },
        })
      : (0 === f
          ? o.push({
              Content: t.substr(0, s[f]),
            })
          : s[f] - s[f - 1] - l[f - 1].length > 0 &&
            o.push({
              Content: t.substr(s[f - 1] + l[f - 1].length, s[f] - s[f - 1] - l[f - 1].length),
            }),
        o.push({
          Resources: EMOTION_GIF_NAME[l[f]],
          attr: {
            Type: '0',
          },
        }));

  var p = s[s.length - 1] + l[l.length - 1].length;
  if (t.length > p)
    o.push({
      Content: t.substr(p, t.length - p),
    });
  return o;
};

require('./1474');

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
  module588 = require('./588'),
  module1111 = require('./1111'),
  module599 = require('./599'),
  module594 = require('./594'),
  module421 = require('./421'),
  module916 = require('./916'),
  module593 = require('./593'),
  module943 = require('./943');

function I() {
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

var E = '';

var module1161 = (function (t) {
  module35.default(R, t);

  var module1161 = R,
    A = I(),
    O = function () {
      var t,
        n = module34.default(module1161);

      if (A) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function R(t) {
    var n;
    module24.default(this, R);
    (n = O.call(this, t)).state = {
      getSystemVersion: module599.default.getSystemVersion(),
      appVersion: module599.default.getVersion(),
      description: '',
      limit: 500,
      count: 0,
      routing: '',
      iphone: '',
      product: '',
      snVal: module594.default.t('chooseSN'),
      iotId: '',
      productKey: '',
      devicename: '',
      modalVisible: false,
      snLi: [
        {
          typeid: -1,
          devicename: '',
        },
      ],
      snLiIindex: null,
      pageNum: 1,
      robotList: '',
    };
    n.listBindingByAccount();
    n.getProductByAppKey();
    return n;
  }

  module25.default(R, [
    {
      key: 'componentWillUnmount',
      value: function () {
        module403.default.remove(E);

        this.setState = function (t, n) {};
      },
    },
    {
      key: 'getProductByAppKey',
      value: function () {
        var t = this;
        module943.default.getProductByAppKey().then(function (n) {
          t.setState({
            robotList: n.data,
          });
        });
      },
    },
    {
      key: 'listBindingByAccount',
      value: function () {
        var t = this;
        module1111.default.listBindingByAccount(this.state.pageNum, 10).then(function (n) {
          var l = n.data;

          if (undefined != l && '' != l && '{}' != JSON.stringify(l)) {
            var s = n.data.data;
            t.setState(
              {
                snLi: s,
              },
              function () {
                t.state.snLi.push({
                  deviceName: module594.default.t('other'),
                  typeid: -1,
                });
                t.setState({
                  snLi: t.state.snLi,
                });
              }
            );
          } else
            401 == n.code &&
              module593.default.delete('userData').then(function (n) {
                module916.default.logout();
                module1096.default.info(
                  module594.default.t('C1619077654'),
                  1,
                  t.props.navigation.dispatch(
                    module421.CommonActions.reset({
                      index: 1,
                      routes: [
                        {
                          name: 'loginScreen',
                        },
                      ],
                    })
                  ),
                  false
                );
              });
        });
      },
    },
    {
      key: 'addFeedback',
      value: function () {
        var t = this;

        if (!this.state.description) {
          module1096.default.info(module594.default.t('feedbackDescribing'), 1, undefined, false);
          return false;
        }

        var n = this.state.description,
          s = n.replace(/\S/g, '').length;

        if (!n || n.length == s) {
          module1096.default.info(module594.default.t('conotbeallSpace'), 1, undefined, false);
          return false;
        }

        if (!this.state.devicename) {
          module1096.default.info(module594.default.t('chooseSN'), 1, undefined, false);
          return false;
        }

        if (!this.state.iphone) {
          module1096.default.info(module594.default.t('contactInformation'), 1, undefined, false);
          return false;
        }

        var u = this.state.description + '/' + this.state.iphone + '/' + this.state.routing;
        E = module1096.default.loading();
        console.log(
          u,
          this.state.iphone,
          this.state.appVersion,
          this.state.iotId,
          '-productKey:' + this.state.productKey,
          '-routing:' + this.state.routing,
          '-devicename:' + this.state.devicename
        );
        module1111.default
          .addFeedback(u, this.state.iphone, this.state.appVersion, this.state.iotId, this.state.productKey, this.state.routing, this.state.devicename)
          .then(function (n) {
            module403.default.remove(E);

            if (200 == n.code) {
              module1096.default.info(module594.default.t('SubmittedSuccessfully'), 1, undefined, false);
              setTimeout(function () {
                ReactNative.DeviceEventEmitter.emit('feedackLiRefreshUI');
                t.props.navigation.goBack();
              }, 1e3);
            } else {
              console.log('=====>>' + JSON.stringify(n));
              module1096.default.info(n.localMsg, 1, undefined, false);
            }
          });
      },
    },
    {
      key: '_onChangeText',
      value: function (t) {
        if (t && t.length > 0) {
          var n = t;
          if (t.length > this.state.limit)
            this.setState({
              description: n.substr(0, this.state.count),
            });
          else
            this.setState({
              description: n,
              count: n.length,
            });
        }
      },
    },
    {
      key: 'endEdit',
      value: function () {},
    },
    {
      key: 'testBlur',
      value: function () {
        this.refs.inputWR.blur();
      },
    },
    {
      key: '_onPressIn',
      value: function () {
        console.log('press in');
      },
    },
    {
      key: '_onPressOut',
      value: function () {
        console.log('press out');
      },
    },
    {
      key: '_onPress',
      value: function () {
        console.log('press');
        this.refs.textInput1.blur();
        this.refs.textInput2.blur();
      },
    },
    {
      key: '_onLonePress',
      value: function () {
        console.log('long press');
      },
    },
    {
      key: 'selectSnFun',
      value: function (t, n) {
        var o = this.state,
          l = o.snVal,
          s = o.iotId,
          u = o.productKey,
          c = o.devicename,
          f = o.robotList;

        if (-1 == t.typeid) {
          l = t.deviceName;
          u = f[0].productId;
          c = f[0].productName;
          s = '';
        } else {
          l = t.deviceName;
          s = t.deviceId;
          u = t.productId;
          c = t.deviceName;
        }

        this.setState({
          snLiIindex: n,
          modalVisible: false,
          snVal: l,
          iotId: s,
          productKey: u,
          devicename: c,
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
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: V.feedBackTop,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: V.feedBackTopTitle,
                },
                '*',
                module594.default.t('problemDescription')
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    backgroundColor: 'placeholderTextColor',
                    borderColor: '#00000033',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginTop: 5,
                  },
                },
                React.default.createElement(ReactNative.TextInput, {
                  ref: 'inputWR',
                  autoFocus: true,
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  placeholder: module594.default.t('identifyProblem'),
                  placeholderTextColor: '#658DC2',
                  style: [
                    V.feedBackTopInput,
                    V.feedBackInput,
                    {
                      borderRadius: 0,
                      backgroundColor: '#00000000',
                    },
                  ],
                  underlineColorAndroid: 'transparent',
                  borderColor: '#00000000',
                  onChangeText: function (n) {
                    t._onChangeText(n);
                  },
                  autoCapitalize: 'none',
                  blurOnSubmit: true,
                  multiline: true,
                  onEndEditing: function () {
                    t.endEdit();
                  },
                  onSubmitEditing: function () {
                    t.testBlur();
                  },
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      V.feedBackTopTitle,
                      {
                        alignSelf: 'flex-end',
                        marginBottom: 5,
                        marginRight: 10,
                      },
                    ],
                  },
                  this.state.count + '/' + this.state.limit
                )
              )
            ),
            React.default.createElement(ReactNative.View, {
              style: V.feedBackH,
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: V.feedBackTop,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [V.feedBackInput, V.feedBackInputLi],
                  onPress: function () {
                    t.setState({
                      modalVisible: true,
                    });
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      lineHeight: module588.default.setSpText(40),
                      color: null != this.state.snLiIindex ? '#0A72FA' : '#658DC2',
                    },
                  },
                  this.state.snVal
                )
              ),
              React.default.createElement(ReactNative.TextInput, {
                placeholder: module594.default.t('routerModel'),
                placeholderTextColor: '#658DC2',
                style: [V.feedBackInput, V.feedBackInputLi],
                value: this.state.routing,
                onChangeText: function (n) {
                  t.setState({
                    routing: n,
                  });
                },
              }),
              React.default.createElement(ReactNative.TextInput, {
                multiline: true,
                blurOnSubmit: true,
                numberOfLines: 1,
                autoCapitalize: 'none',
                autoCorrect: false,
                placeholder: module594.default.t('stayIphone'),
                placeholderTextColor: '#658DC2',
                style: [
                  V.feedBackInput,
                  V.feedBackInputLi,
                  {
                    alignItems: 'center',
                  },
                ],
                value: this.state.iphone,
                onChangeText: function (n) {
                  t.setState({
                    iphone: n,
                  });
                },
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: V.feedBacBtn,
              },
              React.default.createElement(
                module1135.default,
                {
                  type: 'primary',
                  size: 'small',
                  style: V.feedBacSty,
                  onPress: function () {
                    t.addFeedback();
                  },
                },
                module594.default.t('submit')
              )
            ),
            React.default.createElement(
              ReactNative.Modal,
              {
                animationType: 'slide',
                transparent: true,
                visible: this.state.modalVisible,
                onRequestClose: function () {
                  t.setState({
                    modalVisible: false,
                  });
                },
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: V.modealBox,
                  onPress: function () {
                    t.setState({
                      modalVisible: false,
                    });
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: V.modealList,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: V.modealListTitle,
                    },
                    module594.default.t('selectEquipment')
                  ),
                  this.state.snLi.map(function (n, o) {
                    return React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        key: o,
                        style: V.modealChilLi,
                        onPress: function () {
                          t.selectSnFun(n, o);
                        },
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: V.modealChilLiSn,
                        },
                        n.deviceName
                      ),
                      t.state.snLiIindex == o
                        ? React.default.createElement(ReactNative.Image, {
                            style: V.modealChilLiIcon,
                            source: require('./1161'),
                            resizeMode: 'contain',
                          })
                        : null
                    );
                  })
                )
              )
            )
          )
        );
      },
    },
  ]);
  return R;
})(React.default.Component);

exports.feedBack = module1161;
var V = ReactNative.StyleSheet.create({
    modealListTitle: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(15),
      textAlign: 'center',
    },
    modealChilLi: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: module588.default.setSpText(10),
    },
    modealChilLiSn: {
      flex: 1,
      fontSize: module588.default.setSpText(14),
    },
    modealListOther: {},
    modealChilLiIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    modealBox: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,.5)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: module588.default.setSpText('30'),
    },
    modealList: {
      width: '100%',
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(10),
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(6),
    },
    feedBacSty: {
      height: module588.default.setSpText(48),
    },
    feedBacBtn: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      paddingHorizontal: module588.default.setSpText(10),
      paddingBottom: module588.default.setSpText(20),
    },
    feedBackInputLi: {
      paddingHorizontal: module588.default.setSpText(20),
      marginBottom: module588.default.setSpText(20),
      height: module588.default.setSpText(40),
    },
    feedBackH: {
      width: '100%',
      height: module588.default.setSpText(10),
      backgroundColor: '#E1E7F5',
      marginTop: module588.default.setSpText(20),
    },
    feedBackTop: {
      marginTop: module588.default.setSpText(20),
      paddingHorizontal: module588.default.setSpText(24),
    },
    feedBackTopTitle: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    feedBackInput: {
      borderWidth: module588.default.setSpText(1),
      borderColor: '#BCCCE0',
      borderRadius: module588.default.setSpText(8),
      backgroundColor: '#E6EFFA',
      color: '#0A72FA',
      fontSize: module588.default.setSpText(14),
      paddingVertical: 0,
    },
    feedBackTopInput: {
      height: module588.default.setSpText(140),
      padding: module588.default.setSpText(20),
      textAlignVertical: 'top',
      marginTop: module588.default.setSpText(10),
      paddingVertical: 0,
    },
  }),
  A = module1161;
exports.default = A;
