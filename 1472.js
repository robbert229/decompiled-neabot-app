require('./1146');

require('./593');

require('./596');

var regeneratorRuntime = require('regenerator-runtime'),
  module1131 = require('./1131'),
  module1132 = require('./1132'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module588 = require('./588'),
  ReactNative = require('react-native'),
  module1148 = require('./1148'),
  module943 = require('./943'),
  module594 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = L(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, s, c);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./594')),
  module1230 = require('./1230');

require('./916');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (L = function (t) {
    return t ? o : n;
  })(t);
}

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

var I = (function (t) {
  module35.default(b, t);

  var module588 = b,
    L = C(),
    module1318 = function () {
      var t,
        n = module34.default(module588);

      if (L) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t) {
    var n;
    module24.default(this, b);
    (n = module1318.call(this, t)).state = {
      activeSections: [2, 0],
      spinValue: new ReactNative.Animated.Value(0),
      isContenIndex: 0,
      shoppListData: [],
      appWIFI: require('./1318'),
      shopNull: 0,
      handleGuiUrl: '',
      productGuideData: [
        {
          productId: 'a1bp8GkMOe2',
          data: [
            {
              country: 'cn',
              content: [
                {
                  title: '\u4ea7\u54c1\u8bf4\u660e',
                  url: 'https://api.genhigh.com/s5c/manual',
                },
              ],
            },
            {
              country: 'en',
              content: [
                {
                  title: module594.default.t('P1628584426'),
                  url: 'https://api.genhigh.com/s5c/manual',
                },
              ],
            },
          ],
        },
        {
          productId: 'a1iQ12ffASR',
          data: [
            {
              country: 'cn',
              content: [
                {
                  title: '\u4ea7\u54c1\u8bf4\u660e',
                  url: 'https://api.genhigh.com/Q11/manual',
                },
              ],
            },
            {
              country: 'en',
              content: [
                {
                  title: module594.default.t('P1628584426'),
                  url: 'https://api.genhigh.com/Q11/manual',
                },
              ],
            },
          ],
        },
        {
          productId: 'a1Wi9Hfe7VT',
          data: [
            {
              country: 'cn',
              content: [
                {
                  title: '\u4ea7\u54c1\u8bf4\u660e',
                  url: 'https://api.genhigh.com/N2/manual',
                },
              ],
            },
            {
              country: 'en',
              content: [
                {
                  title: module594.default.t('P1628584426'),
                  url: 'https://api.genhigh.com/N2/manual',
                },
              ],
            },
          ],
        },
        {
          productId: 'a1XKU4BoqtH',
          data: [
            {
              country: 'cn',
              content: [
                {
                  title: '\u4ea7\u54c1\u8bf4\u660e',
                  url: 'https://api.genhigh.com/N2-lite/manual',
                },
              ],
            },
            {
              country: 'en',
              content: [
                {
                  title: module594.default.t('P1628584426'),
                  url: 'https://api.genhigh.com/N2-lite/manual',
                },
              ],
            },
          ],
        },
      ],
      productId: '',
      newGuideData: '',
    };

    n.onChange = function (t) {
      n.setState({
        activeSections: t,
      });
    };

    return n;
  }

  module25.default(b, [
    {
      key: 'componentDidMount',
      value: function () {
        return regeneratorRuntime.default.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  this.getProductByAppData();
                  this.getProductGuideVer();
                  this.spin();

                case 3:
                case 'end':
                  return t.stop();
              }
          },
          null,
          this,
          null,
          Promise
        );
      },
    },
    {
      key: 'spin',
      value: function () {
        this.state.spinValue.setValue(0);
        var t = ReactNative.Animated.timing(this.state.spinValue, {
          toValue: 1,
          duration: 800,
          easing: ReactNative.Easing.linear,
          useNativeDriver: true,
        });
        ReactNative.Animated.loop(t).start();
      },
    },
    {
      key: 'workList',
      value: function (t, n) {
        for (var o = this, u = 0; u < this.state.productGuideData.length; u++)
          this.state.productGuideData[u].productId == t &&
            this.setState(
              {
                newGuideData: this.state.productGuideData[u].data,
              },
              function () {
                o.props.navigation.navigate('operationGuide', {
                  nickname: n,
                  productId: t,
                  guideType: 1,
                  newGuideData: o.state.newGuideData,
                });
              }
            );
      },
    },
    {
      key: 'getProductByAppData',
      value: function () {
        var t = this;
        module943.default.getProductByAppKey().then(function (n) {
          console.log('\u83b7\u53d6\u8bbe\u5907' + JSON.stringify(n.data));
          var o = n.data;

          if (undefined != o && '' != o && '{}' != JSON.stringify(o)) {
            t.setState({
              ceLi: o,
              shopNull: o ? o.length : 0,
            });
            t.ceLidata();
          } else if (401 == n.code)
            Toast.info(
              module594.default.t('C1619077654'),
              1,
              t.props.navigation.dispatch(
                CommonActions.reset({
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
      },
    },
    {
      key: 'ceLidata',
      value: function () {
        var t = this.state.ceLi.reduce(function (t, n) {
          var o = t.find(function (t) {
            return n.categoryName === t.categoryName;
          });
          if (((n.isLishow = false), o)) -1 == o.dataLi.indexOf(n) && o.dataLi.push(n);
          else {
            var u = {
              categoryName: n.categoryName,
              dataLi: [n],
            };
            t.push(u);
          }
          return t;
        }, []);
        this.setState({
          shoppListData: t,
        });
      },
    },
    {
      key: 'shopLiShow',
      value: function (t) {
        console.log('=================== shopLiShow index = ' + t);
        console.log('=================== shopLiShow isContenIndex = ' + this.state.isContenIndex);
        if (t == this.state.isContenIndex) t = null;
        this.setState({
          isContenIndex: t,
        });
      },
    },
    {
      key: 'getProductGuideVer',
      value: function () {
        this.getProductGuideDetail('');
      },
    },
    {
      key: 'getProductGuideDetail',
      value: function (t) {
        this.setState({
          productGuideData: [
            {
              productId: 'a1bp8GkMOe2',
              data: [
                {
                  country: 'cn',
                  content: [
                    {
                      title: '\u4ea7\u54c1\u8bf4\u660e',
                      url: 'https://api.genhigh.com/s5c/manual',
                    },
                  ],
                },
                {
                  country: 'en',
                  content: [
                    {
                      title: module594.default.t('P1628584426'),
                      url: 'https://api.genhigh.com/s5c/manual',
                    },
                  ],
                },
              ],
            },
            {
              productId: 'a1iQ12ffASR',
              data: [
                {
                  country: 'cn',
                  content: [
                    {
                      title: '\u4ea7\u54c1\u8bf4\u660e',
                      url: 'https://api.genhigh.com/Q11/manual',
                    },
                  ],
                },
                {
                  country: 'en',
                  content: [
                    {
                      title: module594.default.t('P1628584426'),
                      url: 'https://api.genhigh.com/Q11/manual',
                    },
                  ],
                },
              ],
            },
            {
              productId: 'a1Wi9Hfe7VT',
              data: [
                {
                  country: 'cn',
                  content: [
                    {
                      title: '\u4ea7\u54c1\u8bf4\u660e',
                      url: 'https://api.genhigh.com/N2/manual',
                    },
                  ],
                },
                {
                  country: 'en',
                  content: [
                    {
                      title: module594.default.t('P1628584426'),
                      url: 'https://api.genhigh.com/N2/manual',
                    },
                  ],
                },
              ],
            },
            {
              productId: 'a1XKU4BoqtH',
              data: [
                {
                  country: 'cn',
                  content: [
                    {
                      title: '\u4ea7\u54c1\u8bf4\u660e',
                      url: 'https://api.genhigh.com/N2-lite/manual',
                    },
                  ],
                },
                {
                  country: 'en',
                  content: [
                    {
                      title: module594.default.t('P1628584426'),
                      url: 'https://api.genhigh.com/N2-lite/manual',
                    },
                  ],
                },
              ],
            },
          ],
        });
      },
    },
    {
      key: 'countryType',
      value: function (t, n) {
        switch (module594.default.locale) {
          case 'zh':
          case 'Hans':
          case 'Hant':
            'cn';
        }
      },
    },
    {
      key: 'render',
      value: function () {
        this.props.navigation.navigate;
        var t = this,
          n = this.state.spinValue.interpolate({
            inputRange: [0, 0],
            outputRange: ['90deg', '90deg'],
          }),
          l = new module1148.default.DataSource({
            rowHasChanged: function (t, n) {
              return t !== n;
            },
          });
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
              },
            },
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              backgroundColor: '#fff',
              barStyle: Theme.barStyle,
            }),
            React.default.createElement(
              module1131.default,
              {
                style: k.WingBlankBox,
              },
              React.default.createElement(module1148.default, {
                dataSource: l.cloneWithRows(this.state.shoppListData),
                showsVerticalScrollIndicator: false,
                enableEmptySections: true,
                contentContainerStyle: k.gride,
                renderRow: function (o, l, s) {
                  return React.default.createElement(
                    ReactNative.View,
                    {
                      style: k.shoppLiTopBox,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: k.shopLi,
                      },
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          style: {
                            flexDirection: 'row',
                            width: '100%',
                          },
                          onPress: function () {
                            t.shopLiShow(s);
                          },
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: k.listTitle,
                          },
                          '\u626b\u5730\u673a\u5668\u4eba' == o.categoryName ? module594.default.t('RobotVacuum') : '',
                          ' ',
                          module594.default.t('nullShopp').replace(/\%/g, o.dataLi ? o.dataLi.length : 0)
                        ),
                        React.default.createElement(ReactNative.Animated.Image, {
                          style: [
                            k.topListIcon,
                            t.state.isContenIndex == s
                              ? {
                                  transform: [
                                    {
                                      rotate: n,
                                    },
                                  ],
                                }
                              : '',
                          ],
                          source: module1230.default,
                        })
                      )
                    ),
                    React.default.createElement(
                      module1132.default,
                      {
                        wrap: 'wrap',
                        style: [
                          k.wrapLi,
                          {
                            display: t.state.isContenIndex == s ? 'flex' : 'none',
                          },
                        ],
                      },
                      o.dataLi.map(function (n, o) {
                        return React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            style: k.shoppList,
                            key: o,
                            onPress: function () {
                              t.workList(n.productId, n.productName);
                            },
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: k.shoppContent,
                            },
                            React.default.createElement(ReactNative.Image, {
                              source: {
                                uri: n.productImage,
                              },
                              style: k.shoppContentImg,
                            }),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: k.shoppContentTitle,
                              },
                              n.productName
                            )
                          )
                        );
                      })
                    )
                  );
                },
              })
            )
          )
        );
      },
    },
  ]);
  return b;
})(React.default.Component);

exports.myGuide = I;
var k = ReactNative.StyleSheet.create({
    guideLiImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    guideLiTitle: {
      flex: 1,
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    guideLi: {
      backgroundColor: '#fff',
      padding: module588.default.setSpText(20),
      flexDirection: 'row',
      marginVertical: module588.default.setSpText(10),
    },
    shopLi: {
      position: 'relative',
      width: '100%',
      padding: module588.default.scaleSize(10),
    },
    WingBlankBox: {
      marginLeft: module588.default.setSpText(0),
      marginRight: module588.default.setSpText(20),
    },
    wrapLi: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    shoppLiTopBox: {
      flex: 1,
    },
    shoppLiTopTitle: {
      paddingLeft: module588.default.setSpText(15),
      fontSize: module588.default.setSpText(12),
      color: '#213B5C',
    },
    topListIcon: {
      position: 'absolute',
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      top: '50%',
      right: module588.default.setSpText(10),
      marginTop: module588.default.setSpText(-11),
    },
    listTitle: {
      flex: 1,
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
      paddingLeft: module588.default.setSpText(10),
    },
    shoppList: {
      width: '50%',
      marginTop: module588.default.setSpText(20),
      paddingLeft: module588.default.setSpText(15),
    },
    shoppContent: {
      backgroundColor: '#fff',
      width: module588.default.setSpText(157),
      borderRadius: module588.default.setSpText(8),
      alignItems: 'center',
      position: 'relative',
    },
    shoppContentImg: {
      width: module588.default.setSpText(119),
      height: module588.default.setSpText(119),
      marginTop: module588.default.setSpText(10),
    },
    shoppContentTitle: {
      width: '100%',
      textAlign: 'center',
      backgroundColor: '#E1E7F5',
      color: '#213B5C',
      paddingVertical: module588.default.setSpText(8),
      borderBottomLeftRadius: module588.default.setSpText(8),
      borderBottomRightRadius: module588.default.setSpText(8),
      marginTop: module588.default.setSpText(10),
    },
    gride: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    isShow: {
      display: 'flex',
    },
    isHiden: {
      display: 'none',
    },
  }),
  b = I;
exports.default = b;
